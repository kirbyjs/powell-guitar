import { component$, $, useSignal, useContext } from '@builder.io/qwik';
import ListIcon from '~/components/icons/ListIcon';
import MusicIcon from '~/components/icons/MusicIcon';
import BackwardStepIcon from '~/components/icons/BackwardStepIcon';
import PlayIcon from '~/components/icons/PlayIcon';
import ForwardStepIcon from '~/components/icons/ForwardStepIcon';
import VolumeLowIcon from '~/components/icons/VolumeLowIcon';
import VolumeHighIcon from '~/components/icons/VolumeHighIcon';
import type { Song } from '~/types/contentful';
import PauseIcon from '~/components/icons/PauseIcon';
import { headerCxt } from '~/context';
import type { HeaderContext } from '~/types/header';
import CloseIcon from '~/components/icons/closeIcon';

type MusicPlayerProps = {
  songs: Song[];
};

function stringPadLeft(string: number | string) {
  return (new Array(3).join('0') + string).slice(-2);
}

function getMusicTime(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  return `${stringPadLeft(minutes)}:${stringPadLeft(seconds)}`;
}

function getSliderStyles(
  currentTime: number,
  songDuration: number,
  theme: HeaderContext['theme'],
) {
  if (currentTime === 0) {
    return;
  }

  const progress = (currentTime / songDuration) * 100;
  const isDarkMode = theme === 'dark';
  const lightSlider = `linear-gradient(to right, rgba(255, 255, 255, .3) ${progress}%, #eee ${progress}%)`;
  const darkSlider = `linear-gradient(to right, #dadada ${progress}%, #9e9e9e ${progress}%)`;

  return {
    background: isDarkMode ? lightSlider : darkSlider,
  };
}

function setVolume(audio?: HTMLAudioElement, volume?: string) {
  if (audio && volume) {
    audio.volume = parseInt(volume) / 10;
  }
}

export default component$<MusicPlayerProps>((props: MusicPlayerProps) => {
  const { songs } = props;
  const selectedSongIndex = useSignal(0);
  const audio = useSignal<HTMLAudioElement>();
  const isPaused = useSignal(true);
  const showSongList = useSignal(false);
  const currentTime = useSignal(0);
  const songDuration = useSignal(0);
  const currentVolume = useSignal(5);
  const songDialRef = useSignal<HTMLInputElement>();
  const volumeRef = useSignal<HTMLInputElement>();
  const selectedSong = songs[selectedSongIndex.value];
  const { theme } = useContext(headerCxt);

  if (audio.value) {
    audio.value.onpause = $(() => {
      isPaused.value = true;
    });
    audio.value.onplay = $(() => {
      isPaused.value = false;
    });
    audio.value.ontimeupdate = $((event: Event) => {
      const target = event.target as HTMLAudioElement;

      if (target && songDialRef.value && !isPaused.value) {
        const time = Math.round(target.currentTime);
        currentTime.value = time;

        songDialRef.value.value = time.toString();
      }
    });
    audio.value.onloadedmetadata = $(() => {
      songDuration.value = Math.round(audio.value?.duration ?? 0);
    });
  }

  const onPlay = $(() => {
    if (!audio.value) {
      audio.value = new Audio(selectedSong.song.url);
      setVolume(audio.value, volumeRef.value?.value);
    }

    audio.value.play();
    isPaused.value = false;
  });
  const onPause = $(() => {
    audio.value?.pause();
    isPaused.value = true;
  });
  const onSongChange = $((songIndex: number, alwaysPlay = false) => {
    const wasPreviouslyPaused = isPaused.value;
    isPaused.value = true;
    audio.value?.pause();
    selectedSongIndex.value = songIndex;
    const songDial = songDialRef.value as HTMLInputElement;
    songDial.value = '0';
    currentTime.value = 0;

    audio.value = new Audio(songs[selectedSongIndex.value].song.url);
    setVolume(audio.value, volumeRef.value?.value);

    if (!wasPreviouslyPaused || alwaysPlay) {
      audio.value.play();
    }
  });

  return (
    <div class="sticky bottom-0 z-10 w-full bg-white px-10 py-3 music-player-shadow dark:bg-blue-300 dark:text-white">
      <div class="flex flex-col lg:flex-row w-full">
        <div class="flex flex-col mb-4 lg:mb-0 lg:mr-12 lg:w-56 truncate">
          <span class="truncate">
            {selectedSongIndex.value + 1}. {selectedSong.title}
          </span>
          <span class="text-sm font-bold">{selectedSong.artist}</span>
        </div>
        <div class="flex mb-4 lg:mb-0 self-center">
          <button
            onClick$={() => {
              onSongChange(
                selectedSongIndex.value === 0 ? 0 : selectedSongIndex.value - 1,
              );
            }}
          >
            <BackwardStepIcon class="fill-amber-600 dark:fill-white" />
          </button>
          <button class="mx-12" onClick$={isPaused.value ? onPlay : onPause}>
            {isPaused.value ? (
              <PlayIcon class="fill-amber-600 dark:fill-white" />
            ) : (
              <PauseIcon class="fill-amber-600 dark:fill-white" />
            )}
          </button>
          <button
            disabled={selectedSongIndex.value === songs.length - 1}
            onClick$={() => {
              onSongChange(selectedSongIndex.value + 1);
            }}
          >
            <ForwardStepIcon
              class={
                selectedSongIndex.value === songs.length - 1
                  ? 'fill-neutral-200 dark:fill-neutral-400'
                  : 'fill-amber-600 dark:fill-white'
              }
            />
          </button>
        </div>
        <div class="flex-1 flex items-center text-black mb-4 lg:mb-0 lg:mx-4">
          <span class="mr-1 dark:text-white">
            {getMusicTime(currentTime.value)}
          </span>
          <input
            onInput$={(event) => {
              if (audio.value) {
                const target = event.target as HTMLInputElement;
                audio.value.currentTime = parseInt(target.value);
              }
            }}
            style={getSliderStyles(
              currentTime.value,
              songDuration.value,
              theme,
            )}
            ref={songDialRef}
            type="range"
            min={0}
            max={songDuration.value}
            value="0"
            class="w-full"
          />
        </div>
        <div class="flex-2 flex items-center text-black mb-4 lg:mb-0 lg:mr-8">
          <button
            onClick$={() => {
              if (volumeRef.value) {
                const volume = parseInt(volumeRef.value.value) - 1;

                if (volume >= 0) {
                  volumeRef.value.value = volume.toString();
                  currentVolume.value = volume;
                  setVolume(audio.value, volumeRef.value.value);
                }
              }
            }}
          >
            <VolumeLowIcon class="mr-2 fill-amber-600 dark:fill-white" />
          </button>
          <input
            onInput$={(event) => {
              const target = event.target as HTMLInputElement;
              currentVolume.value = parseInt(target.value);
              setVolume(audio.value, target.value);
            }}
            style={getSliderStyles(currentVolume.value, 10, theme)}
            ref={volumeRef}
            type="range"
            min="0"
            max="10"
            value="5"
            class="w-full"
          />
          <button
            onClick$={() => {
              if (volumeRef.value) {
                const volume = parseInt(volumeRef.value.value) + 1;

                if (volume <= 10) {
                  volumeRef.value.value = volume.toString();
                  currentVolume.value = volume;
                  setVolume(audio.value, volumeRef.value.value);
                }
              }
            }}
          >
            <VolumeHighIcon class="ml-2 fill-amber-600 dark:fill-white" />
          </button>
        </div>
        {showSongList.value && (
          <ul class="absolute right-0 bg-gray-100 dark:bg-blue-400 z-20 bottom-0 lg:top-[-18rem] lg:h-72 overflow-y-scroll w-full lg:w-auto">
            <CloseIcon
              class="absolute z-10 cursor-pointer fill-amber-600 dark:fill-white m-4 right-0 h-7 w-7 lg:hidden"
              onClick$={() => {
                showSongList.value = !showSongList.value;
              }}
            />
            {songs.map(({ title, artist }, i) => {
              const isSelected = selectedSongIndex.value === i;
              return (
                <li
                  key={title + artist}
                  class={`flex cursor-pointer px-10 py-6 text-amber-600 dark:text-white dark:hover:bg-blue-500 hover:bg-gray-200 ${
                    isSelected && 'bg-gray-200 dark:bg-blue-500'
                  }`}
                  onClick$={() => {
                    if (!isSelected) {
                      onSongChange(i, true);
                    }
                  }}
                >
                  <span class="pr-2">{i + 1}.</span>
                  <span class="inline-block">
                    <span class="block">{title}</span>
                    <span class=" text-sm font-bold ">{artist}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        )}
        <button
          class={`flex flex-row py-3 pl-3 pr-1 hover:bg-neutral-50 dark:hover:bg-blue-200 justify-center items-center rounded-md border dark:border-white-rgba ${
            showSongList.value && 'bg-neutral-50 dark:bg-blue-200'
          }`}
          onClick$={() => {
            showSongList.value = !showSongList.value;
          }}
        >
          <ListIcon class="fill-neutral-400 dark:fill-black" />
          <MusicIcon class="relative left-[-7px] text-[10px] fill-amber-600 dark:fill-white" />
        </button>
      </div>
    </div>
  );
});

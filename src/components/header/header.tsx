import ImgPowellGuitar from '~/images/powellguitar.png?jsx';
import { component$, useStyles$, useContext } from '@builder.io/qwik';
import SunIcon from '~/components/icons/sun';
import MoonIcon from '~/components/icons/moon';
import headerStyles from './header.css?inline';
import Button from '~/components/common/Button';
import { headerCxt } from '~/context';

export default component$(() => {
  useStyles$(headerStyles);
  const store = useContext(headerCxt);

  return (
    <header class="max-w-6xl mx-auto px-4 py-5 sm:px-10 justify-between flex flex-row items-center">
      <a href="/" class="flex flex-row items-center gap-3">
        <ImgPowellGuitar
          class="mt-1 mr-1 w-6 sm:mr-3 sm:w-10"
          alt="PowellGuitar Logo"
        />
        <span class="font-bold text-2xl sm:text-3xl dark:text-white">
          PowellGuitar
        </span>
      </a>
      <div class="w-full flex-grow lg:flex lg:items-center lg:pl-10 lg:w-auto text-amber-600 dark:text-white dark:bg-neutral-900">
        <div
          class={`text-md ${
            store.navShown ? 'floating-nav top-[70px] sm:top-[90px]' : 'hidden'
          } lg:flex-grow lg:block lg:!relative lg:!p-0 lg:top-auto dark:bg-neutral-900`}
        >
          <a
            href="/about"
            class="block pt-4 lg:inline-block lg:mt-0 hover: mr-7 hover:text-amber-700 dark:hover:text-amber-300"
          >
            About
          </a>
          <a
            href="/guitar-lessons"
            class="block pt-4 lg:inline-block lg:mt-0 hover: mr-7 hover:text-amber-700 dark:hover:text-amber-300"
          >
            Lessons
          </a>
          <a
            href="/events"
            class="block pt-4 lg:inline-block lg:mt-0 mr-7 hover:text-amber-700 dark:hover:text-amber-300"
          >
            Events
          </a>
          <a
            href="/guitar-repair"
            class="block pt-4 lg:inline-block lg:mt-0 mr-7 hover:text-amber-700 dark:hover:text-amber-300"
          >
            Repair
          </a>
          <a
            href="/resources"
            class="block pt-4 lg:inline-block lg:mt-0 hover:text-amber-700 dark:hover:text-amber-300"
          >
            Resources
          </a>
        </div>
      </div>
      <div class="flex flex-row-reverse lg:flex-row justify-center items-center gap-5">
        <div class="block lg:hidden">
          <Button
            inverse
            selected={store.navShown}
            onClick$={() => (store.navShown = !store.navShown)}
            class="flex items-center px-3 py-2"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </Button>
        </div>
        <a href="/contact">
          <Button type="button" inverse class="px-3 py-1 lg:px-4 lg:py-2">
            Contact
          </Button>
        </a>
        <div
          class="cursor-pointer"
          onClick$={() => {
            if (store.theme === 'dark') {
              store.theme = 'light';
              document.documentElement.classList.remove('dark');
            } else {
              store.theme = 'dark';
              document.documentElement.classList.add('dark');
            }
            localStorage.theme = store.theme;
          }}
        >
          {store.theme === 'light' ? <SunIcon /> : <MoonIcon />}
        </div>
      </div>
    </header>
  );
});

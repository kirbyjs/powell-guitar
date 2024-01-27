import { component$ } from '@builder.io/qwik';

interface CardProps {
  header: string;
  text: string;
  imageSrc: string;
  link?: string;
  url: string;
}

export default component$((props: CardProps) => {
  return (
    <a href={props.url}>
      <div class="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 lg:flex-1">
        <img
          class="rounded-t-lg object-cover w-full h-60"
          src={props.imageSrc}
          width="360"
          height="240"
          alt="card image"
        />
        <div class="flex flex-col p-5 lg:min-h-[300px] xl:min-h-[250px]">
          <h5 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            {props.header}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.text}
          </p>
          <svg
            aria-hidden="true"
            class="mt-auto self-end w-5 h-5 -mr-1 text-amber-600 dark:text-amber-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </a>
  );
});

import { component$, useStore } from '@builder.io/qwik';
import ContentfulRichText from '~/components/common/ContentfulRichText';

type AccordionProps = {
  question: string;
  answer: object;
};
export default component$((props: AccordionProps) => {
  const store = useStore({
    isOpen: false,
  });

  return (
    <div
      id="accordion-collapse"
      class="last:border last:border-x-0 last:border-t-0 last:border-b-1 border-gray-200 dark:border-gray-700"
    >
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-expanded="true"
          aria-controls="accordion-collapse-body-1"
          onClick$={() => (store.isOpen = !store.isOpen)}
        >
          <span>{props.question}</span>
          <svg
            data-accordion-icon
            class="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      {store.isOpen && (
        <div
          id="accordion-collapse-body-1"
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div class="p-5 border border-b-0 last:border-b-1 border-gray-200 dark:border-gray-700 accordion-list">
            <ContentfulRichText json={props.answer as any} />
          </div>
        </div>
      )}
    </div>
  );
});

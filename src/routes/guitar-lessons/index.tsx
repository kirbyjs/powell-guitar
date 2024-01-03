import { component$, useStore, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { guitarLessonsCxt } from '~/context';
import { useGraphQLQuery } from '~/hooks/gql';
import backgroundStyles from '../background.css?inline';
import { guitarLessonsQuery } from '~/queries/guitarLessons';
import ContentfulRichText from '~/components/common/ContentfulRichText';
import type { Document } from '@contentful/rich-text-types';

export default component$(() => {
  useStyles$(backgroundStyles);
  const {
    data: { guitarLessons },
  } = useGraphQLQuery(guitarLessonsQuery, guitarLessonsCxt);
  const store = useStore({
    isHalfTerm: false,
  });
  return (
    <>
      <section class="point-guitar relative flex items-center justify-center flex-col min-h-[40rem]">
        <h1 class="text-white text-6xl p-10">{guitarLessons?.title}</h1>
      </section>
      <section class="flex flex-col items-center px-10 py-28 sm:p-28 m-auto min-h-[30rem] xl:flex-row">
        <div class="dark:text-neutral-100">
          <h2 class="mt-[-2rem] mb-10 text-4xl font-extrabold">
            {guitarLessons?.generalInformationTitle}
          </h2>
          <div class="text-xl">
            <ContentfulRichText
              json={guitarLessons?.generalInformation?.json as Document}
            />
          </div>
        </div>
      </section>
      <section class="flex flex-col px-10 py-28 sm:p-28 pb-16 min-h-[30rem] bg-gray-100 dark:bg-blue-400">
        <div class="dark:text-neutral-100">
          <h2 class="mt-[-2rem] mb-10 text-4xl font-extrabold">
            {guitarLessons?.curriculumTitle}
          </h2>
          <div class="block justify-around text-xl lg:flex">
            {guitarLessons?.curriculumDetailsCollection?.items?.map(
              ({ curriculumDetails, header }) => (
                <div key={header}>
                  <h3 class="text-2xl mb-5">{header}</h3>
                  <ContentfulRichText
                    json={curriculumDetails?.json as Document}
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </section>
      <section class="px-10 py-28 sm:p-28 min-h-[30rem]">
        <div class="dark:text-neutral-100 flex flex-col justify-center items-center">
          <h2 class="mt-[-2rem] mb-10 text-4xl font-extrabold self-start">
            {guitarLessons?.pricingTitle}
          </h2>
          <label class="relative inline-flex items-center cursor-pointer mb-10">
            <span
              class={`mr-3 text-md text-gray-900 dark:text-gray-300 ${
                store.isHalfTerm ? '' : 'font-bold'
              }`}
            >
              One Payment
            </span>
            <div>
              <input
                type="checkbox"
                checked={store.isHalfTerm}
                class="sr-only peer"
                onClick$={() => (store.isHalfTerm = !store.isHalfTerm)}
              />
              <div class="w-12 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:mt-[2px] after:ml-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </div>
            <span
              class={`ml-3 text-md text-gray-900 dark:text-gray-300 ${
                store.isHalfTerm ? 'font-bold' : ''
              }`}
            >
              Two Payments
            </span>
          </label>
          <div class="content-center space-y-14 lg:grid lg:grid-cols-3 sm:gap-12 xl:gap-12 lg:space-y-0">
            {guitarLessons?.pricingDataCollection?.items?.map(
              ({ perSessionPrice, numberOfSessions, header }) => (
                <div
                  key={header}
                  class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
                >
                  <h3 class="mb-4 text-2xl font-semibold">{header}</h3>

                  <div class="flex justify-center items-baseline mt-0 mb-6">
                    <span class="mr-2 text-5xl font-extrabold">
                      $
                      {(
                        (perSessionPrice * numberOfSessions) /
                        (store.isHalfTerm ? 2 : 1)
                      )
                        .toFixed(2)
                        .replace(/\.00$/, '')}
                    </span>
                  </div>
                  <ul role="list" class="mb-8 space-y-4 text-xl">
                    <li class="flex items-center space-x-3 ml-10 lg:ml-5 xl:ml-10">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>{numberOfSessions} Lessons</span>
                    </li>
                    {!store.isHalfTerm && (
                      <li class="flex items-center space-x-3 ml-10 lg:ml-5 xl:ml-10">
                        <svg
                          class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span>Bonus Lesson</span>
                      </li>
                    )}
                  </ul>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Guitar Lessons - Powell Guitar',
  meta: [
    {
      name: 'description',
      content: 'PowellGuitar',
    },
  ],
};

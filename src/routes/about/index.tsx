import { component$, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { aboutCxt } from '~/context';
import { useGraphQLQuery } from '~/hooks/gql';
import backgroundStyles from '../background.css?inline';
import { aboutQuery } from '~/queries/about';

export default component$(() => {
  useStyles$(backgroundStyles);
  const {
    data: { about },
  } = useGraphQLQuery(aboutQuery, aboutCxt);

  return (
    <>
      <section class="point-guitar relative flex items-center justify-center flex-col min-h-[40rem]">
        <h1 class="text-white text-6xl p-10">{about?.title}</h1>
        <p class="text-white text-3xl max-w-5xl px-10">{about?.subTitle}</p>
      </section>
      <section class="flex flex-col items-center p-20 m-auto min-h-[30rem] xl:flex-row">
        <div class="flex justify-center flex-1">
          <img
            src={about?.profilePicture?.url}
            alt="Aaron Powell"
            height="400"
            width="400"
            class="shadow-sm rounded-full max-w-[400px] max-h-[400px] align-middle border-none"
          />
        </div>
        <p class="pt-10 text-xl leading-10 max-w-7xl text-gray-900 dark:text-neutral-100 xl:pl-10 xl:pt-0">
          {about?.aboutDescription}
        </p>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'About - PowellGuitar',
  meta: [
    {
      name: 'description',
      content: 'Information about the owner of PowellGuitar, Aaron Powell.',
    },
  ],
};

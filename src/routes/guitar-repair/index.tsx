import { component$, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { guitarRepairCxt } from '~/context';
import { useGraphQLQuery } from '~/hooks/gql';
import backgroundStyles from '../background.css?inline';
import { guitarRepairQuery } from '~/queries/guitarRepair';
import ContentfulRichText from '~/components/common/ContentfulRichText';
import type { Document } from '@contentful/rich-text-types';

export default component$(() => {
  useStyles$(backgroundStyles);
  const {
    data: { repair },
  } = useGraphQLQuery(guitarRepairQuery, guitarRepairCxt);

  return (
    <>
      <section class="point-guitar relative flex items-center justify-center flex-col min-h-[40rem]">
        <h1 class="text-white text-6xl p-10">{repair?.title}</h1>
        <p class="text-white text-3xl max-w-5xl px-10 sm:px-28">
          {repair?.callToAction}
        </p>
      </section>
      <section class="px-10 pt-20 sm:px-28 m-auto min-h-[30rem]">
        <div class="dark:text-neutral-100">
          <div class="text-xl">
            <ContentfulRichText
              json={repair?.generalInformation?.json as Document}
            />
          </div>
        </div>
      </section>
      <section class="px-10 pt-20 pb-10 sm:px-28 m-auto min-h-[30rem]">
        <div class="dark:text-neutral-100">
          <div class="text-xl services grid-rows-[30px_max-content] gap-4 grid-flow-col auto-rows-auto xl:grid">
            <ContentfulRichText json={repair?.services?.json as Document} />
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Guitar Repair - PowellGuitar',
  meta: [
    {
      name: 'description',
      content: 'PowellGuitar',
    },
  ],
};

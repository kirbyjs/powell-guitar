import { component$, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { guitarRepairCxt } from '~/context';
import { useGraphQLQuery } from '~/hooks/gql';
import backgroundStyles from '../background.css?inline';
import { guitarRepairQuery } from '~/queries/guitarRepair';
import ContentfulRichText from '~/components/common/ContentfulRichText';
import guitars from '~/images/guitars.webp';
import { Document } from '@contentful/rich-text-types';

export default component$(() => {
  useStyles$(backgroundStyles);
  const {
    data: { repair },
  } = useGraphQLQuery(guitarRepairQuery, guitarRepairCxt);

  return (
    <>
      <section className="point-guitar relative flex items-center justify-center flex-col min-h-[40rem]">
        <h1 class="text-white text-6xl p-10">{repair?.title}</h1>
        <p className="text-white text-3xl max-w-5xl px-10">
          {repair?.callToAction}
        </p>
      </section>
      <section className="px-28 pt-20 m-auto min-h-[30rem]">
        <div className="dark:text-neutral-100">
          <div className="text-xl">
            <ContentfulRichText
              json={repair?.generalInformation?.json as Document}
            />
          </div>
        </div>
      </section>
      <section className="px-28 py-20 m-auto min-h-[30rem]">
        <div className="dark:text-neutral-100">
          <div className="text-xl services grid-rows-[30px_max-content] gap-4 grid-flow-col auto-rows-auto xl:grid">
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

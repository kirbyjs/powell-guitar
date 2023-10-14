import { component$, useStyles$, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { resourcesCxt } from '~/context';
import { useGraphQLQuery } from '~/hooks/gql';
import backgroundStyles from '../background.css?inline';
import { resourcesQuery } from '~/queries/resources';
import ContentfulRichText from '~/components/common/ContentfulRichText';
import type { Document } from '@contentful/rich-text-types';
import { richTextFromMarkdown } from '@contentful/rich-text-from-markdown';
import type { ResourcesStore } from '~/types/contentful';
import Accordion from '~/components/common/Accordion';

export default component$(() => {
  useStyles$(backgroundStyles);
  const {
    data: { resources },
  } = useGraphQLQuery(
    resourcesQuery,
    resourcesCxt,
    $(async (data: ResourcesStore) => {
      const itemsMapped = [];

      for (const item of data.resources.faqCollection.items) {
        itemsMapped.push({
          answer: await richTextFromMarkdown(item.answer as any),
          question: item.question,
        });
      }

      return {
        ...data,
        resources: {
          ...data.resources,
          faqCollection: {
            ...data.resources.faqCollection,
            items: itemsMapped,
          },
        },
      };
    }),
  );

  return (
    <>
      <section class="point-guitar relative flex items-center justify-center flex-col min-h-[40rem]">
        <h1 class="text-white text-6xl p-10">{resources?.title}</h1>
      </section>
      <section class="flex flex-col items-center px-28 pt-28 pb-20 m-auto min-h-[30rem] xl:flex-row">
        <div class="dark:text-neutral-100">
          <div class="text-xl">
            <ContentfulRichText
              json={resources?.lessonResources?.json as Document}
              links={resources?.lessonResources?.links}
            />
          </div>
        </div>
      </section>
      <section class="flex flex-col px-28 pb-28 m-auto min-h-[30rem]">
        <div class="dark:text-neutral-100">
          <div class="text-xl">
            <h2 class="mb-10 text-4xl font-extrabold text-left">FAQ</h2>
            {resources?.faqCollection.items.map(
              async ({ answer, question }) => (
                <Accordion key={question} question={question} answer={answer} />
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Resources - PowellGuitar',
  meta: [
    {
      name: 'description',
      content: 'PowellGuitar',
    },
  ],
};

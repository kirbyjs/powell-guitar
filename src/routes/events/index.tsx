import { component$, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { eventsCxt } from '~/context';
import { useGraphQLQuery } from '~/hooks/gql';
import backgroundStyles from '../background.css?inline';
import { eventsQuery } from '~/queries/events';
import ContentfulRichText from '~/components/common/ContentfulRichText';
import { Document } from '@contentful/rich-text-types';

export default component$(() => {
  useStyles$(backgroundStyles);
  const {
    data: { events },
  } = useGraphQLQuery(eventsQuery, eventsCxt);

  return (
    <>
      <section class="point-guitar relative flex items-center justify-center flex-col min-h-[40rem]">
        <h1 class="text-white text-6xl p-10">{events?.title}</h1>
      </section>
      <section class="px-28 py-20 m-auto min-h-[30rem]">
        <div class="dark:text-neutral-100">
          <div class="text-xl">
            <ContentfulRichText
              json={events?.generalInformation?.json as Document}
            />
          </div>
        </div>
      </section>
      <section
        class="bg-cover min-h-[40rem] flex items-center justify-end flex-col"
        style={`background-image: url(${events?.backgroundImage?.url})`}
      >
        <h2 class="text-white text-6xl px-5 pb-8 pt-2.5 bg-black bg-opacity-60">
          {events?.guitarAndFluteTitle}
        </h2>
      </section>
      <section class="px-28 py-20 m-auto min-h-[30rem]">
        <div class="dark:text-neutral-100">
          <div class="text-xl">
            <ContentfulRichText
              json={events?.generalGuitarAndFluteInformation?.json as Document}
            />
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Events - PowellGuitar',
  meta: [
    {
      name: 'description',
      content: 'PowellGuitar',
    },
  ],
};

import {
  component$,
  useContextProvider,
  useStore,
  useStyles$,
  useTask$,
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import backgroundStyles from './background.css?inline';
import Card from '~/components/common/Card';
import Contact from '~/components/common/Contact';
import Testimonials from '~/components/common/Testimonials';
import { LandingPageContentful, LandingPageStore } from '~/types/contentful';
import { landingCxt } from '~/context';
import { landingPageQuery } from '~/queries/landing-page';
import { gqlClient } from '~/services/contentful';

export default component$(() => {
  useStyles$(backgroundStyles);
  const store = useStore({
    landingPage: {} as LandingPageContentful,
  });
  useContextProvider(landingCxt, store);

  useTask$(async () => {
    const data = await gqlClient.request<LandingPageStore>(landingPageQuery);
    store.landingPage = data.landingPage;
  });

  return (
    <>
      <section class="point-guitar relative flex items-center justify-center flex-col min-h-[40rem]">
        <h1 class="text-white text-6xl p-10">{store.landingPage.title}</h1>
        <p class="text-white text-3xl max-w-5xl px-10">
          {store.landingPage.introduction}
        </p>
      </section>
      <section class="flex items-end justify-center flex-col p-10 max-w-7xl m-auto min-h-[30rem]">
        <Testimonials />
      </section>
      <section class="flex items-center justify-center flex-col bg-blue-300 dark:bg-blue-400 px-10 py-28 m-auto min-h-[30rem]">
        <h2 class="pl-1 mt-[-2rem] mb-10 text-4xl tracking-tight font-extrabold text-white">
          Services
        </h2>
        <div class="flex flex-col lg:flex-row items-center justify-around max-w-7xl lg:space-x-10 space-y-10 lg:space-y-0">
          {store.landingPage.serviceCardsCollection?.items?.map((card) => (
            <Card
              key={card.cardTitle}
              header={card.cardTitle}
              imageSrc={card.cardPhoto.url}
              text={card.cardDescription}
            />
          ))}
        </div>
      </section>
      <section class="flex justify-center p-10 m-auto min-h-[30rem]">
        <div class="py-8 lg:py-16 px-4 mx-auto w-full max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <Contact />
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'PowellGuitar',
  meta: [
    {
      name: 'description',
      content: 'PowellGuitar',
    },
  ],
};

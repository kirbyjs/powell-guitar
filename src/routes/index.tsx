import { component$, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { landingCxt } from '~/context';
import { landingPageQuery } from '~/queries/landing-page';
import { useGraphQLQuery } from '~/hooks/gql';
import Testimonials from '~/components/common/Testimonials';
import Card from '~/components/common/Card';
import Contact from '~/components/common/Contact';
import backgroundStyles from './background.css?inline';

export default component$(() => {
  useStyles$(backgroundStyles);
  const {
    data: { landingPage },
  } = useGraphQLQuery(landingPageQuery, landingCxt);

  return (
    <>
      <section class="point-guitar relative flex items-center justify-center flex-col min-h-[40rem]">
        <h1 class="text-white text-6xl p-10">{landingPage?.title}</h1>
        <p class="text-white text-3xl max-w-5xl px-10">
          {landingPage?.introduction}
        </p>
      </section>
      <Testimonials />
      <section class="flex items-center justify-center flex-col bg-blue-200 dark:bg-blue-400 px-10 py-28 m-auto min-h-[30rem]">
        <h2 class="pl-1 mt-[-2rem] mb-10 text-4xl font-extrabold text-white">
          Services
        </h2>
        <div class="flex flex-col lg:flex-row items-center justify-around max-w-7xl lg:space-x-10 space-y-10 lg:space-y-0">
          {landingPage?.serviceCardsCollection?.items?.map((card) => (
            <Card
              key={card.cardTitle}
              header={card.cardTitle}
              imageSrc={card.cardPhoto.url}
              text={card.cardDescription}
              url={card.cardPageUrl}
            />
          ))}
        </div>
      </section>
      <section class="flex justify-center p-10 m-auto min-h-[30rem]">
        <div class="py-8 lg:py-16 px-4 mx-auto w-full max-w-screen-md">
          <h2 class="mb-4 text-4xl font-extrabold text-center text-gray-900 dark:text-white">
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

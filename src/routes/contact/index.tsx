import { component$, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import backgroundStyles from '../background.css?inline';
import Contact from '~/components/common/Contact';

export default component$(() => {
  useStyles$(backgroundStyles);

  return (
    <section class="flex flex-col items-center p-20 m-auto min-h-[30rem] xl:flex-row">
      <div class="py-8 lg:py-16 px-4 mx-auto w-full max-w-screen-md">
        <h1 class="mb-4 text-5xl font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h1>
        <Contact />
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Contact - PowellGuitar',
  meta: [
    {
      name: 'description',
      content: 'PowellGuitar',
    },
  ],
};

import { component$, Fragment, useContext } from '@builder.io/qwik';
import { landingCxt } from '~/context';

// @ts-ignore
export default component$(() => {
  const {
    data: { landingPage },
  } = useContext(landingCxt);

  return landingPage?.testimonialsCollection?.items?.map((testimonial) => (
    // @ts-ignore
    <Fragment key={testimonial.author}>
      <blockquote class="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
        <p class="text-2xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
          {testimonial.testimonial}
        </p>
      </blockquote>
      <figcaption class="flex mt-6">
        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
          <cite class="pr-3 text-lg text-gray-900 dark:text-white">
            {testimonial.author}
          </cite>
          <cite class="pl-3 text-md font-light text-gray-500 dark:text-gray-400">
            {testimonial.location}
          </cite>
        </div>
      </figcaption>
    </Fragment>
  ));
});

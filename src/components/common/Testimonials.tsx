import { component$, useContext, useSignal } from '@builder.io/qwik';
import { landingCxt } from '~/context';
import ChevronLeft from '~/components/icons/chevronLeft';
import ChevronRight from '~/components/icons/chevronRight';

export default component$(() => {
  const visibleTestimonial = useSignal(0);
  const {
    data: { landingPage },
  } = useContext(landingCxt);
  const testimonials = landingPage?.testimonialsCollection?.items;
  const testimonial = { ...testimonials?.[visibleTestimonial.value] };

  return (
    <div class="flex items-center p-10 max-w-7xl m-auto min-h-[30rem] relative">
      <ChevronLeft
        onClick$={() => {
          visibleTestimonial.value =
            visibleTestimonial.value === 0
              ? testimonials?.length - 1
              : visibleTestimonial.value - 1;
        }}
      />
      <div class="relative flex items-end flex-col pb-5">
        <blockquote class="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-brown-600">
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
      </div>
      <div class="absolute z-30 flex -translate-x-1/2 space-x-3 bottom-5 left-1/2">
        {testimonials?.map((t, index) => (
          <button
            key={t.author}
            type="button"
            class={`w-3 h-3 rounded-full ${
              index === visibleTestimonial.value ? 'bg-gray-600' : 'bg-gray-300'
            }`}
            onClick$={() => {
              visibleTestimonial.value = index;
            }}
          ></button>
        ))}
      </div>
      <ChevronRight
        onClick$={() => {
          visibleTestimonial.value =
            visibleTestimonial.value === testimonials?.length - 1
              ? 0
              : visibleTestimonial.value + 1;
        }}
      />
    </div>
  );
});

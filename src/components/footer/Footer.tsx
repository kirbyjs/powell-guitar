import { component$ } from '@builder.io/qwik';
import type { FooterStore } from '~/types/contentful';
import { footerQuery } from '~/queries/footer';
import { useGraphQLQuery } from '~/hooks/gql';
import { footerCxt } from '~/context';

export default component$(() => {
  const {
    data: { footer },
  } = useGraphQLQuery<FooterStore>(footerQuery, footerCxt);
  const phone = footer?.phone?.replace(/\D/g, '');
  const phoneParts = [
    phone?.substring(0, 3),
    phone?.substring(3, 6),
    phone?.substring(6),
  ];

  return (
    <footer class="absolute bottom-0 w-full h-40 bg-gray-100 dark:bg-blue-400">
      <div class="max-w-6xl mx-auto p-10 justify-between flex flex-row">
        <div class="flex flex-col">
          <span class="text-2xl dark:text-white">{footer?.title}</span>
          <a class="text-amber-600 dark:text-amber-300" href={`tel:${phone}`}>
            ({phoneParts[0]}) {phoneParts[1]}-{phoneParts[2]}
          </a>
          <a
            class="text-amber-600 dark:text-amber-300"
            href={`mailto:${footer?.email}`}
          >
            {footer?.email}
          </a>
        </div>
        <div class="flex flex-row justify-center items-center gap-5">
          {footer?.socialMediaIconsCollection?.items?.map((icon) => (
            <a
              key={icon.socialMediaLink}
              href={icon.socialMediaLink}
              target="_blank"
            >
              <img
                alt={`PowellGuitar's ${icon.socialMediaIcon.url.split('/').pop()?.replace('.svg', '')} page`}
                src={icon.socialMediaIcon.url}
                height="40"
                width="36"
                class="w-8 sm:w-10 dark:invert"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
});

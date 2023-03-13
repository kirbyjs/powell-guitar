import { component$, useStore, useTask$ } from "@builder.io/qwik";
import { FooterContentful, FooterStore } from "~/types/contentful";
import { contentfulRequest } from "~/services/contentful";
import { footerQuery } from "~/queries/footer";

export default component$(() => {
  const store = useStore({
    footer: {} as FooterContentful,
  });
  const phone = store.footer.phone?.replace(/\D/g, "");
  const phoneParts = [
    phone?.substring(0, 3),
    phone?.substring(3, 6),
    phone?.substring(6),
  ];

  useTask$(async () => {
    const data = await contentfulRequest<FooterStore>(footerQuery);
    store.footer = data.footer;
  });
  return (
    <footer class="bg-gray-100 dark:bg-blue-400">
      <div class="max-w-6xl mx-auto p-10 justify-between flex flex-row">
        <div class="flex flex-col">
          <span class="text-2xl dark:text-white">{store.footer.title}</span>
          <a class="text-amber-600 dark:text-amber-300" href={`tel:${phone}`}>
            ({phoneParts[0]}) {phoneParts[1]}-{phoneParts[2]}
          </a>
          <a
            class="text-amber-600 dark:text-amber-300"
            href={`mailto:${store.footer.email}`}
          >
            {store.footer.email}
          </a>
        </div>
        <div class="flex flex-row justify-center items-center gap-5">
          {store.footer.socialMediaIconsCollection?.items?.map((icon) => (
            <a
              key={icon.socialMediaLink}
              href={icon.socialMediaLink}
              target="_blank"
            >
              <img
                src={icon.socialMediaIcon.url}
                class="w-8 sm:w-10 dark:invert"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
});

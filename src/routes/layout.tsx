import {
  $,
  component$,
  Slot,
  useContextProvider,
  useOnDocument,
  useStore,
} from '@builder.io/qwik';
import Header from '../components/header/header';
import Footer from '~/components/footer/Footer';
import { headerCxt } from '~/context';

export default component$(() => {
  const store = useStore({
    theme: 'light',
    navShown: false,
  });
  useContextProvider(headerCxt, store);

  useOnDocument(
    'load',
    $(() => {
      if (localStorage.theme) {
        store.theme = localStorage.theme;
      } else if (document.documentElement.classList.contains('dark')) {
        store.theme = 'dark';
      }
    }),
  );

  return (
    <main class="relative min-h-screen">
      <Header />
      <section class="pb-40">
        <Slot />
      </section>
      <Footer />
    </main>
  );
});

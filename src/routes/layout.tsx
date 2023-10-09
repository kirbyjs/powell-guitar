import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';
import Footer from '~/components/footer/Footer';

export default component$(() => {
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

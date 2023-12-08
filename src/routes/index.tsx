import { component$, useVisibleTask$ } from '@builder.io/qwik';

import type { DocumentHead } from '@builder.io/qwik-city';
import Typed from 'typed.js';

export default component$(() => {
  useVisibleTask$(({ cleanup }) => {
    const typed = new Typed('#derka', {
      strings: ['Dad bod, Dad cod', '&amp; a second sentence.'],
      typeSpeed: 50,
      startDelay: 250,
      backSpeed: 50,
      loop: true,
    });
    typed.start();
    cleanup(() => typed.destroy());
  });

  return (
    <>
      <span id="derka" />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};

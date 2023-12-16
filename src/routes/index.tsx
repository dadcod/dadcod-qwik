import BlogList from '~/components/blog-list';
import type { DocumentHead } from '@builder.io/qwik-city';
import FrontImage from '~/media/front.png?jsx';
import { component$ } from '@builder.io/qwik';

export default component$(() => {
  // useVisibleTask$(({ cleanup }) => {
  //   const typed = new Typed('#derka', {
  //     strings: ['Dad bod, Dad cod', '&amp; a second sentence.'],
  //     typeSpeed: 50,
  //     startDelay: 250,
  //     backSpeed: 50,
  //     loop: true,
  //   });
  //   typed.start();
  //   cleanup(() => typed.destroy());
  // });

  return (
    <>
      {/* <span id="derka" /> */}

      <div class="md:py-20 py-12 lg:flex lg:gap-8 lg:h-4/6 lg:items-center lg:py-0 flex-col">
        <div class="lg:flex lg:gap-8 lg:h-4/6 lg:items-center lg:py-0 ">
          <div class="mx-auto text-center basis-1/2 lg:text-left md:pb-16 pb-10 gap-10 flex flex-col">
            <h1>
              <span class="font-semibold">
                Hello, I'm{' '}
                <span class="bg-gradient-to-br from-emerald-500 to-cyan-400 bg-clip-text text-transparent">DadCod</span>
                (Rosen Petkov)
              </span>
            </h1>
            <h2>
              With over a decade in software engineering, I've discovered that sharing knowledge through talks,
              workshops, and blogs not only deepens my understanding but keeps my daily work exciting. This blog is my
              platform to share fresh insights and learn alongside you. Embracing the beginner's mind, I always ask
              questions and invite you to join the journey of exploration and growth.
            </h2>
            <div class="flex gap-3">
              <a
                href="https://twitter.com/dad_cod_"
                target="_blank"
                class="bg-gradient-to-br from-emerald-500 to-cyan-400 bg-clip-text text-transparent text-l uppercase font-semibold hover:translate-y-1 transition-all"
              >
                X
              </a>
              <a
                href="https://twitter.com/dad_cod_"
                target="_blank"
                class="bg-gradient-to-br from-red-500 to-orange-800 bg-clip-text text-transparent text-l uppercase font-semibold hover:translate-y-1 transition-all"
              >
                YouTube
              </a>
              <a
                href="https://twitter.com/dad_cod_"
                target="_blank"
                class="bg-gradient-to-br from-neutral-200 to-neutral-800 bg-clip-text text-transparent text-l uppercase font-semibold hover:translate-y-1 transition-all"
              >
                Medium
              </a>
              <a href="https://flowbite.com/" class="flex items-center">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" /> */}
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
              </a>
            </div>
          </div>
          <div class="basis-1/2">
            <FrontImage class="mx-auto w-full drop-shadow-2xl lg:mr-0 rounded-md" />
          </div>
        </div>

        <BlogList />
      </div>
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

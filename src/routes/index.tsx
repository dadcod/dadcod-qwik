import { component$, useStore, useTask$ } from '@builder.io/qwik';

import BlogList from '~/components/blog-list';
import type { DocumentHead } from '@builder.io/qwik-city';
import FrontImage from '~/media/front-enh-nobg.png?jsx';
import type { Post } from '~/utils/posts';
import { fetchPosts } from '~/utils/posts';
import { isServer } from '@builder.io/qwik/build';

export default component$(() => {
  const store = useStore<{ posts: Post[] }>({
    posts: [],
  });

  useTask$(async () => {
    if (isServer) {
      const posts = await fetchPosts();
      store.posts = posts.map((post: Post) => ({ ...post }));
    }
  });
  return (
    <>
      <div class="md:py-20 py-12 lg:flex lg:gap-8 lg:h-4/6 lg:items-center lg:py-0 flex-col">
        <div class="lg:flex lg:gap-8 lg:h-4/6 lg:items-center lg:py-0 ">
          <div class="mx-auto  basis-1/2 gap-10 flex flex-col">
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
              questions and invite you to join the journey of exploration and memeing.
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
            </div>
          </div>
          <div class="basis-1/2 flex flex-col">
            <FrontImage class="mx-auto w-full drop-shadow-2xl lg:mr-0 rounded-md " />
            <div class="self-center">
              <span id="derka" />
            </div>
          </div>
        </div>
        <div class="py-3 w-full [&>*]:w-full">
          <div class="mb-6 py-6 text-2xl font-bold ">
            <div class="flex items-baseline justify-between ">
              <div>
                Recent <span class="accent">Posts</span>
              </div>
              <div class="text-sm">
                <a href="/blog">View all Posts →</a>
              </div>
            </div>
          </div>
          <BlogList posts={store.posts} />
        </div>
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

import { component$, useStore, useTask$ } from '@builder.io/qwik';

import BlogList from '~/components/blog-list';
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
      <BlogList posts={store.posts} />
    </>
  );
});

// blog list items component

import BlogItem from '../blog-item';
import type { Post } from '~/utils/posts';
import { component$ } from '@builder.io/qwik';

export default component$<{ posts: Post[] }>(({ posts }) => {
  return (
    <>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3 pb-1">
        {posts.map((post) => (
          <BlogItem key={post.id} item={post} />
        ))}
      </div>
    </>
  );
});

import { Image } from 'qwik-image';
import type { Post } from '~/utils/posts';
import { Tags } from '../tags';
import { component$ } from '@builder.io/qwik';

export interface BlogItemProps {
  item: Post;
}

export default component$<BlogItemProps>(({ item }) => {
  return (
    <>
      <a class="hover:translate-y-1 no-underline" href={'/blog/' + item.id.split('/')[1] + '/'}>
        <div class="overflow-hidden rounded-md dark:bg-slate-800 bg-slate-100 text-center">
          <div class="aspect-w-3 aspect-h-2">
            <Image layout="fullWidth" height={250} width={250} src={item.image} />
          </div>
          <div class="px-3 pt-4 pb-6 text-center justify-center">
            <h2 class="text-xl font-semibold">{item.title}</h2>
            <div class="py-2">
              <Tags tags={item.tags} />
            </div>
            <div class="mt-1 text-xs dark:text-gray-400 text-gray-800">{item.publishDate.toDateString()}</div>
            <div class="mt-2 text-sm">{item.excerpt}</div>
          </div>
        </div>
      </a>
    </>
  );
});

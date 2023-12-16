// blog list items component

import BlogItem from '../blog-item';
import { component$ } from '@builder.io/qwik';

export default component$(() => {
  //   const { items } = useBlogListItems$();
  const { items } = {
    items: [
      {
        url: 'derka',
        title: 'derka',
        description: 'derka',
        image: 'images/front.png',
        tags: [{ name: 'angular', color: 'slate' }],
        date: new Date('August 19, 1975 23:15:30').toDateString(),
      },
    ],
  };
  return (
    <>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((item) => (
          <BlogItem key={item.title} item={item} />
        ))}
      </div>
    </>
  );
});

{
  /* 
export default component$<{item:{image:string,title:string, description:string, url:string}}>(({item}) => {

    return <div class="flex flex-col">
      <div class="flex flex-col items-center justify-center w-full h-64 bg-gray-100 rounded-lg">
        <img src={item.image} alt={item.title} class="object-cover w-full h-full rounded-lg" />
      </div>
      <div class="flex flex-col items-start justify-start w-full px-4 py-4 bg-white rounded-lg">
        <h3 class="text-lg font-medium text-gray-900">{item.title}</h3>
        <p class="mt-2 text-sm text-gray-500">{item.description}</p>
        <a href={item.url} class="mt-4 text-sm font-medium text-cyan-700 underline">
          Read full story
        </a>
      </div>
    </div>;
}) */
}

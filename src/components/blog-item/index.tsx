import { Image } from 'qwik-image';
import { component$ } from '@builder.io/qwik';
//blog item component
// export default component$<{item:{image:string,title:string, description:string, url:string}}>(({item}) => {

//     return <div class="flex flex-col">
//       <div class="flex flex-col items-center justify-center w-full h-64 bg-gray-100 rounded-lg">
//         <img src={item.image} alt={item.title} class="object-cover w-full h-full rounded-lg" />
//       </div>
//       <div class="flex flex-col items-start justify-start w-full px-4 py-4 bg-white rounded-lg">
//         <h3 class="text-lg font-medium text-gray-900">{item.title}</h3>
//         <p class="mt-2 text-sm text-gray-500">{item.description}</p>
//         <a href={item.url} class="mt-4 text-sm font-medium text-cyan-700 underline">
//           Read full story
//         </a>
//       </div>
//     </div>;
// })

// export default component$(() =>{
//     return <>
// <a class="hover:translate-y-1" href="/demo/astro-boilerplate/posts/sixth-post"><div class="overflow-hidden rounded-md bg-slate-800"><div class="aspect-w-3 aspect-h-2"><img class="h-full w-full object-cover object-center" src="/demo/astro-boilerplate/assets/images/image-post.jpeg" alt="Image post" loading="lazy"></div><div class="px-3 pt-4 pb-6 text-center"><h2 class="text-xl font-semibold">Typography example</h2><div class="mt-1 text-xs text-gray-400">Feb 6, 2020</div><div class="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero esse non molestias eos excepturi.</div></div></div></a>

// </>
// })

export interface BlogItemProps {
  item: {
    image: string;
    title: string;
    description: string;
    url: string;
    date: string;
    tags: Tag[];
  };
}
export interface Tag {
  name: string;
  color: string;
}

export default component$<BlogItemProps>(({ item }) => {
  const tagColorMappong: { [key: string]: { text: string; bg: string } } = {
    angular: { text: 'text-red-400', bg: 'bg-red-900' },
  };
  return (
    <>
      <a class="hover:translate-y-1 no-underline" href="/demo/astro-boilerplate/posts/sixth-post">
        <div class="overflow-hidden rounded-md bg-slate-800 text-center">
          <div class="aspect-w-3 aspect-h-2">
            <Image layout="fullWidth" height={250} width={250} src={item.image} />
          </div>
          <div class="px-3 pt-4 pb-6 text-center justify-center">
            <h2 class="text-xl font-semibold">{item.title}</h2>
            <div class="flex gap-2 justify-center">
              {item.tags.map((tag) => (
                <div
                  key={tag.name}
                  class={`rounded-md px-2 py-1 text-xs font-semibold ${tagColorMappong[tag.name]
                    ?.text} ${tagColorMappong[tag.name]?.bg}`}
                >
                  {tag.name}
                </div>
              ))}
            </div>
            <div class="mt-1 text-xs text-gray-400">{item.date}</div>
            <div class="mt-2 text-sm">{item.description}</div>
          </div>
        </div>
      </a>
    </>
  );
});

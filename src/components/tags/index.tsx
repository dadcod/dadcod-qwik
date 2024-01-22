/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { component$ } from '@builder.io/qwik';
import { useDocumentHead } from '@builder.io/qwik-city';

export const Tags = component$<{ tags?: string[] }>(({ tags }) => {
  const { frontmatter } = useDocumentHead();

  if (frontmatter.tags?.length === 0 || tags?.length === 0) {
    return null;
  }

  const tagColorMapping: { [key: string]: { text: string; bg: string } } = {
    angular: { text: 'text-red-400', bg: 'bg-red-900' },
    design: { text: 'text-pink-100', bg: 'bg-pink-600' },
    ux: { text: 'text-purple-200', bg: 'bg-purple-700' },
    default: { text: 'text-slate-400', bg: 'bg-slate-700' },
  };

  const tagList = tags || frontmatter.tags;

  return (
    <div class="flex gap-2 justify-center">
      {tagList.map((tag: string) => (
        <div
          key={tag}
          class={`rounded-md self-center px-2 py-1 text-xs font-semibold 
          ${tagColorMapping[tag]?.text || tagColorMapping['default']?.text} 
          ${tagColorMapping[tag]?.bg || tagColorMapping['default']?.bg}`}
        >
          {tag}
        </div>
      ))}
    </div>
  );
});

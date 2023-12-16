import { component$, useStore, useVisibleTask$ } from '@builder.io/qwik';

import IconMoon from '~/media/moon.svg?jsx';
import IconSun from '~/media/sun.svg?jsx';

interface ItemProps {
  iconClass?: string;
}

export default component$((props: ItemProps) => {
  const { iconClass } = props;
  const store = useStore({
    theme: (typeof window !== 'undefined' && window?.localStorage?.theme) || undefined,
  });

  useVisibleTask$(() => {
    store.theme = localStorage.getItem('theme');
    switch (store.theme) {
      case 'light':
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        store.theme = window.localStorage.theme = 'light';
        break;
      case 'dark':
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        store.theme = window.localStorage.theme = 'dark';
        break;
    }
  });

  return (
    <button
      type="button"
      class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
      aria-label="Toggle between Dark and Light mode"
      onClick$={() => {
        switch (store.theme) {
          case 'dark':
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
            store.theme = window.localStorage.theme = 'light';
            break;
          default:
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
            store.theme = window.localStorage.theme = 'dark';
            break;
        }
      }}
    >
      {store.theme == 'dark' ? (
        <IconMoon class={`icon icon-tabler ${iconClass || 'w-5 h-5'}`} />
      ) : (
        <IconSun class={`icon icon-tabler ${iconClass || 'w-5 h-5'}`} />
      )}
    </button>
  );
});

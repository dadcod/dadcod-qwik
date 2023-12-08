import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './theme-switcher.css?inline';

export const ThemeSwitch = component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="flex items-center gap-3">
      <label
        class="relative inline-block w-16 h-8 bg-gray-500 
      rounded-full cursor-pointer"
      >
        <input
          type="checkbox"
          id="hide-checkbox"
          class="hidden"
          onClick$={() => {
            const theme = document.documentElement.className;
            if (theme === 'light') {
              document.documentElement.className = 'dark';
              localStorage.setItem('theme', 'dark');
            } else {
              document.documentElement.className = 'light';
              localStorage.setItem('theme', 'light');
            }
          }}
        />
        <span
          class="slider w-12 h-8 rounded-full relative cursor-pointer transition-all bg-white
        before:content-[''] before:absolute before:w-6 before:h-6 before:bg-cover before:rounded-full  before:bg-white before:top-1 before:left-1 before:m-auto before:transition-all"
        ></span>
      </label>
    </div>
  );
});

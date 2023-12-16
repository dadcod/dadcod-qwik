import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <footer class=" bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <div class="container">
        <a
          href="https://www.builder.io/"
          target="_blank"
          class="anchor text-cyan-700 dark:text-white block text-m text-center leading-normal no-underline"
        >
          <span class="block">Made with ♡ by Builder.io</span>
        </a>
      </div>
    </footer>
  );
});

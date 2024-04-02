import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <footer class="mt-auto bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <div class="container flex flex-col">
        <span class="anchor block text-m text-center leading-normal no-underline">
          <span class="block">Made with ♡ by DadCod</span>
        </span>
        <div class="content-center mx-auto [&_img]:rounded-none">
          <script type="text/javascript" src="https://storage.ko-fi.com/cdn/widget/Widget_2.js"></script>
          <script type="text/javascript">
            kofiwidget2.init('Support Me on Ko-fi', '#29abe0', 'F2F1WEZ7J');kofiwidget2.draw();
          </script>
        </div>
      </div>
    </footer>
  );
});

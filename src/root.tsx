import './global.css';

import { $, component$ } from '@builder.io/qwik';
import { ImageTransformerProps, useImageProvider } from 'qwik-image';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';

import { RouterHead } from './components/router-head/router-head';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  const imageTransformer$ = $(({ src, width, height }: ImageTransformerProps): string => {
    return `${src}?w=${width}&h=${height}&format=webp`;
  });

  // Provide your default options
  useImageProvider({
    // you can set this property to overwrite default values [640, 960, 1280, 1920, 3840]
    resolutions: [640],
    // you we can define the source from which to load our image
    imageTransformer$,
  });

  return (
    <QwikCityProvider>
      <head>
        <script
          dangerouslySetInnerHTML={`
        (function() {
          function setTheme(theme) {
            document.documentElement.className = theme;
            localStorage.setItem('theme', theme);
          }
          var theme = localStorage.getItem('theme');
          console.log(theme);
          if (theme) {
            setTheme(theme);
          } else {
            setTheme('light');
          }
        })();
        // window.addEventListener('load', function() {
        //   var themeSwitch = document.getElementById('hide-checkbox');
        //   themeSwitch.checked = localStorage.getItem('theme') === 'light'? true: false;
        // }
        );
      `}
        ></script>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body
        lang="en"
        class="text-gray-900 dark:text-slate-300 tracking-tight bg-white dark:bg-gray-900 antialiased h-screen"
      >
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});

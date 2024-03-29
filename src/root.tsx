import './global.css';

import { $, component$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';

import type { ImageTransformerProps } from 'qwik-image';
import { RouterHead } from './components/router-head/router-head';
import { useImageProvider } from 'qwik-image';

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
          dangerouslySetInnerHTML={
            process.env.NODE_ENV === 'production'
              ? `
          (function() {
            function setTheme(theme) {
              document.documentElement.className = theme;
              localStorage.setItem('theme', theme);
            }
            var theme = localStorage.getItem('theme');
            if (theme) {
              setTheme(theme);
            } else {
              setTheme('light');
            }
          })();
        `
              : ''
          }
        ></script>
        <script
          dangerouslySetInnerHTML={`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "ktv1xtenw8");
          `}
        ></script>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body lang="en" class="tracking-tight bg-white dark:bg-gray-900 antialiased flex flex-col min-h-screen">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});

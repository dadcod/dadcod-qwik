import { component$, useStylesScoped$ } from '@builder.io/qwik';

import Logo from '~/media/dad_logo_wb.webp?jsx';
import ToggleTheme from '~/components/theme-toggle/theme-toggle';
import styles from './header.module.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const sections = [
    {
      name: 'Blog',
      id: 'blog',
    },
    {
      name: 'Portfolio',
      id: 'section-portfolio',
    },
    {
      name: 'Contact',
      id: 'section-contact',
    },
  ];

  return (
    <header class="fixed sticky top-0 z-40 flex-none mx-auto w-full border-b border-gray-50/0 transition-[opacity] ease-in-out">
      <div class="inset-0 absolute"></div>
      <div class=" mx-auto max-w-7xl relative md:flex md:justify-between  py-3 text-default w-full">
        <div class="logo">
          <a href="/" title="qwik">
            <Logo style={{ width: 100, height: 100 }} />
          </a>
        </div>
        <nav class="items-center md:w-auto w-full hidden md:flex md:mx-5 md:overflow-x-auto md:overflow-y-visible overflow-x-hidden overflow-y-auto text-default">
          <ul class="flex flex-col gap-8 font-medium md:flex-row md:self-center md:text-[0.9375rem] md:w-auto text-xl tracking-[0.01rem] w-full">
            {sections.map((section) => (
              <>
                <li class=" m-0 p-0 text-xs uppercase font-bold">
                  <a class="dark:text-white text-black inline-block p-0 no-underline" href={`/${section.id}`}>
                    <span class="animated-button">
                      <span>
                        {section.name.split('').map((letter, index) => (
                          <em key={index}>{letter}</em>
                        ))}
                      </span>
                    </span>
                  </a>
                </li>
              </>
            ))}
          </ul>
        </nav>

        <div class="flex items-center">
          <ToggleTheme iconClass="w-6 h-6 md:w-5 md:h-5 md:inline-block" />
        </div>
      </div>
    </header>
  );
});

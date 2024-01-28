import Logo from '~/media/dad_cod_logo_wb.svg?jsx';
import ToggleTheme from '~/components/theme-toggle/theme-toggle';
import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const loc = useLocation();

  const sections = [
    {
      name: 'Blog',
      id: 'blog',
    },
    {
      name: 'Projects',
      id: 'projects',
    },
  ];

  return (
    <header class="sticky max-w-screen-lg top-0 z-40 md:px-4 flex-none mx-auto w-full border-b border-gray-50/0 transition-all ease-in-out backdrop-blur-md backdrop-opacity-99">
      <div class="inset-0 absolute"></div>
      <div class="mx-auto max-w-7xl relative flex justify-between p-3 text-default w-full">
        <div class="logo">
          <a class="w-4 h-4" href="/" title="qwik">
            <Logo style={{ width: 40, height: 40 }} />
          </a>
        </div>
        <nav class="items-center w-full flex mx-5 overflow-x-hidden overflow-y-auto text-default">
          <ul class="flex flex-row mx-auto gap-8 font-medium self-center text-base w-auto tracking-[0.01rem] ">
            {sections.map((section) => (
              <>
                <li class=" m-0 p-0 text-md uppercase font-bold">
                  <a class="inline-block p-0 no-underline" href={`/${section.id}`}>
                    <span class={'animated-button ' + (loc.url.pathname === `/${section.id}/` ? 'font-extrabold' : '')}>
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

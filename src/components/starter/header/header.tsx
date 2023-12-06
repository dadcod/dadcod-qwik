import Logo from '~/media/rope.webp?jsx';
import { component$ } from '@builder.io/qwik';
import styles from './header.module.css';

export default component$(() => {
  const sections = [
    {
      name: 'Home',
      id: 'section-home',
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
    <header class={styles.header}>
      <div class={['container', styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <Logo style={{ width: 100, height: 100 }} />
          </a>
        </div>
        <ul>
          {sections.map((section) => (
            <>
              <li>
                <a href={`#${section.id}`}>
                  <span class="animated-button">
                    <span>
                      {section.name.split('').map((letter,index) => (
                        <em key={index}>{letter}</em>
                      ))}
                    </span>
                  </span>
                </a>
              </li>
            </>
          ))}
        </ul>
      </div>
    </header>
  );
});

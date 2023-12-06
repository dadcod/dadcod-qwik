import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";

import { getHighlighter, type Highlighter } from 'shiki';

let highlighter: Highlighter;

export default defineConfig(async () => {
  const { default: rehypePrettyCode } = await import('rehype-pretty-code');


  async function getOrCreateHighlighter() {
    if (highlighter) {
      return highlighter;
    }
    highlighter = await getHighlighter({ theme: 'monokai' });
    return highlighter;
  }

  return {
    plugins: [ qwikCity({
        mdxPlugins: {
          rehypeSyntaxHighlight: false,
          remarkGfm: true,
          rehypeAutolinkHeadings: true,
        },
        mdx: {
          rehypePlugins: [
            
            [
              () => rehypePrettyCode({theme: 'monokai', keepBackground:false}) as any,
              {
                getHighlighter: getOrCreateHighlighter,
                onVisitLine(node: any) {
                  // Prevent lines from collapsing in `display: grid` mode, and allow empty
                  // lines to be copy/pasted
                  if (node.children.length === 0) {
                    node.children = [{ type: 'text', value: ' ' }];
                  }
                },
                onVisitHighlightedLine(node: any) {
                  // Each line node by default has `class="line"`.
                  if (node.properties.className) {
                    node.properties.className.push('line--highlighted');
                  }
                },
                onVisitHighlightedWord(node: any) {
                  if (node.properties.className) {
                    node.properties.className = ['word--highlighted'];
                  }
                },
              },
            ],
            
          ],
        },
      }), qwikVite(), tsconfigPaths()],
    dev: {
      headers: {
        "Cache-Control": "public, max-age=0",
      },
    },
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});

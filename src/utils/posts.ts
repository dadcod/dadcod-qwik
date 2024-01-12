import fs from 'fs';
import matter from 'gray-matter';

const BLOG_DIR = 'src/routes/blog';

const load = (): Promise<Post[]> => {
  const files = fs.readdirSync(BLOG_DIR, { recursive: true });
  const posts = Promise.all(
    files
      .filter((filename) => (filename as string).endsWith('.mdx'))
      .map(async (filename) => {
        const slug = (filename as string).replace('.mdx', '');
        return await findPostBySlug(slug);
      })
      .filter(Boolean)
  );

  return posts as Promise<Post[]>;
};
export interface Post {
  /** A unique ID number that identifies a post. */
  id: string;

  /** A post’s unique slug – part of the post’s URL based on its name, i.e. a post called “My Sample Page” has a slug “my-sample-page”. */
  slug: string;

  // /**  */
  // permalink: string;

  /**  */
  publishDate: Date;
  /**  */
  updateDate?: Date;

  /**  */
  title: string;
  /** Optional summary of post content. */
  excerpt?: string;
  /**  */
  image?: string;

  /**  */
  category?: string;
  /**  */
  tags?: Array<string>;
  /**  */
  author?: string;

  /**  */
  metadata?: any;

  /**  */
  draft?: boolean;

  /**  */
  readingTime?: number;
}

let _posts: Post[] | undefined;

/** */
export const fetchPosts = async (): Promise<Post[]> => {
  _posts = _posts || (await load());

  return _posts;
};

/** */
export const findLatestPosts = async ({ count, page }: { count?: number; page?: number } = {}): Promise<Post[]> => {
  const _count = count || 4;
  const _page = page || 1;
  let posts;
  try {
    posts = await fetchPosts();
  } catch (e) {
    console.log(e);
  }

  return posts ? posts.slice((_page - 1) * _count, (_page - 1) * _count + _count) : [];
};

/** */
export const findPostBySlug = async (slug: string): Promise<Post | null> => {
  if (!slug) return null;

  try {
    const readFile = fs.readFileSync(BLOG_DIR + `/${slug}.mdx`, 'utf-8');
    const { data } = matter(readFile);
    const {
      publishDate: rawPublishDate = new Date(),
      updateDate: rawUpdateDate,
      title,
      excerpt,
      image,
      tags = [],
      category,
      author,
      draft = false,
      metadata = {},
    } = data;

    const publishDate = new Date(rawPublishDate);
    const updateDate = rawUpdateDate ? new Date(rawUpdateDate) : undefined;

    return {
      id: slug,
      slug: slug,

      publishDate: publishDate,
      updateDate: updateDate,

      title: title,
      excerpt: excerpt,
      image: image,

      category: category,
      tags: tags,
      author: author,

      draft: draft,

      metadata,
    };
  } catch (e) {
    /* empty */
  }

  return null;
};

/** */
export const findPostsByIds = async (ids: string[]) => {
  if (!Array.isArray(ids)) return [];

  const posts = await fetchPosts();

  return ids.reduce(function (r: Post[], id: string) {
    posts.some(function (post: Post) {
      return id === post.id && r.push(post);
    });
    return r;
  }, []);
};

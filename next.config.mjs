// next.config.mjs
import createMDX from '@next/mdx';

const withMDX = createMDX({
  options: {
    extension: /\.mdx?$/,
    // Other options if needed.
    // remarkPlugins: [remarkGfm],
    // rehypePlugins: [],
  },
});

export default withMDX({
  // Other Next.js configuration options.
  basePath: null,
});

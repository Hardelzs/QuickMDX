//pages/index.tsx
import React from 'react';
import { MDXComponentsProvider, useMDXComponents } from '../mdx-components';
import mdxContent from './hello.mdx'; // Import the mdxContent function
import { todo } from 'node:test'; // Import from a module named 'node:test'

export default function Home() {
  const components = useMDXComponents({});

  return (
    <MDXComponentsProvider components={components}>
      {mdxContent({})}
    </MDXComponentsProvider>
  );
}
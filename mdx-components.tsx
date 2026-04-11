import type { MDXComponents } from "mdx/types";
import React, { ReactNode } from "react";

/**
 * Custom MDX component overrides — matches Enmobil brand style.
 * These only apply inside .mdx files, NOT on other pages.
 */
const components: MDXComponents = {
  // H1: Large, bold, brand-dark
  h1: ({ children }) => (
    <h1 className="text-4xl md:text-5xl font-black text-[#1C1917] tracking-tight mt-0 mb-8 leading-tight">
      {children}
    </h1>
  ),

  // H2: With a red left border accent — brand signature
  h2: ({ children }) => (
    <h2 className="text-2xl md:text-3xl font-black text-[#1C1917] mt-16 mb-6 pl-5 border-l-4 border-[#D71D24] leading-snug">
      {children}
    </h2>
  ),

  // H3: Smaller with a red dot prefix
  h3: ({ children }) => (
    <h3 className="text-xl font-bold text-[#1C1917] mt-10 mb-4 flex items-center gap-3">
      <span className="inline-block w-2 h-2 rounded-full bg-[#D71D24] shrink-0 mt-0.5" />
      {children}
    </h3>
  ),

  // Paragraphs: readable line-height, proper gray
  p: ({ children }) => (
    <p className="text-gray-600 text-lg leading-relaxed mb-6">{children}</p>
  ),

  // Strong: brand-dark instead of black
  strong: ({ children }) => (
    <strong className="font-bold text-[#1C1917]">{children}</strong>
  ),

  // Unordered list: cleaner with brand red bullets
  ul: ({ children }) => (
    <ul className="space-y-3 mb-8 pl-2">
      {children}
    </ul>
  ),

  li: ({ children }) => (
    <li className="flex items-start gap-3 text-gray-600 text-lg leading-relaxed">
      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#D71D24] shrink-0" />
      <span>{children}</span>
    </li>
  ),

  // Ordered list
  ol: ({ children }) => (
    <ol className="space-y-3 mb-8 pl-6 list-decimal marker:text-[#D71D24] marker:font-bold">
      {children}
    </ol>
  ),

  // Horizontal rule: thin red line
  hr: () => (
    <div className="my-12 h-[2px] w-24 bg-[#D71D24] rounded-full" />
  ),

  // Blockquote: premium card style
  blockquote: ({ children }) => (
    <blockquote className="my-8 p-6 bg-red-50 border-l-4 border-[#D71D24] rounded-r-2xl">
      <div className="text-gray-700 text-lg italic leading-relaxed">{children}</div>
    </blockquote>
  ),

  // Inline code
  code: ({ children }) => (
    <code className="px-2 py-0.5 bg-gray-100 text-[#D71D24] rounded font-mono text-sm">
      {children}
    </code>
  ),

  // Links
  a: ({ children, href }) => (
    <a
      href={href}
      className="text-[#D71D24] font-semibold underline underline-offset-4 hover:text-red-800 transition-colors"
    >
      {children}
    </a>
  ),

  // Table container
  table: ({ children }: { children?: ReactNode }) => (
    <div className="my-8 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
      <table className="w-full text-left text-sm">{children}</table>
    </div>
  ),

  thead: ({ children }: { children?: ReactNode }) => (
    <thead className="bg-[#1C1917] text-white">{children}</thead>
  ),

  tbody: ({ children }: { children?: ReactNode }) => (
    <tbody className="divide-y divide-gray-100">{children}</tbody>
  ),

  tr: ({ children }: { children?: ReactNode }) => (
    <tr className="even:bg-gray-50 hover:bg-red-50/30 transition-colors">{children}</tr>
  ),

  th: ({ children }: { children?: ReactNode }) => (
    <th className="px-5 py-4 font-bold text-white text-xs uppercase tracking-widest whitespace-nowrap">
      {children}
    </th>
  ),

  td: ({ children }: { children?: ReactNode }) => (
    <td className="px-5 py-4 text-gray-600 font-medium">{children}</td>
  ),
};

export function useMDXComponents(existing: MDXComponents): MDXComponents {
  return { ...existing, ...components };
}

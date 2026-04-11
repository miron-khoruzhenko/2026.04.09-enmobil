import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    // Turbopack (Next.js 16 default) requires plugin names as strings
    remarkPlugins: ["remark-gfm"],
  },
});

export default withMDX(nextConfig);



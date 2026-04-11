import type { Metadata } from "next";
import { notFound } from "next/navigation";

// All available service slugs — add new ones here as you create .mdx files
const services = [
  "kasko-sigortasi",
  "trafik-sigortasi",
  "tamamlayici-saglik",
  "isyeri-sigortasi",
  "konut-sigortasi",
  "dask-konut",
  "seyahat-saglik",
];

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { metadata } = await import(`@/content/hizmetler/${slug}.mdx`);
    return {
      title: metadata?.title ?? slug,
      description: metadata?.description ?? "",
      alternates: { canonical: `/hizmetler/${slug}` },
    };
  } catch {
    return { title: slug };
  }
}

export default async function HizmetPage({ params }: Props) {
  const { slug } = await params;

  if (!services.includes(slug)) {
    notFound();
  }

  try {
    const { default: Content } = await import(`@/content/hizmetler/${slug}.mdx`);
    return <Content />;
  } catch {
    notFound();
  }
}

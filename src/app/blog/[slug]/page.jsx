import { BLOGS } from "@/app/data/blogs";
import BlogDetailClient from "./BlogDetailClient";

export function generateStaticParams() {
  return BLOGS.map((blog) => ({ slug: blog.slug }));
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;   // 👈 ye line change hui
  return <BlogDetailClient slug={slug} />;
}
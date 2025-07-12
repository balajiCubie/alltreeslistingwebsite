export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Blog Post: {params.slug}</h1>
      <p>This is a blog post page.</p>
    </div>
  );
}

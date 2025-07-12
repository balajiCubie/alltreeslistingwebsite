export default function ForumTopicPage({ params }: { params: { "topic-slug": string } }) {
  return (
    <div>
      <h1>Forum Topic: {params["topic-slug"]}</h1>
      <p>This is a forum topic page.</p>
    </div>
  );
}

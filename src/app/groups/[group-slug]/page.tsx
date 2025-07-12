export default function GroupDetailsPage({ params }: { params: { "group-slug": string } }) {
  return (
    <div>
      <h1>Group Details: {params["group-slug"]}</h1>
      <p>This is the group details page.</p>
    </div>
  );
}

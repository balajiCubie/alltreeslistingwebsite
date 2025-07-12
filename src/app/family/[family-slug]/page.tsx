export default function FamilyPage({ params }: { params: { "family-slug": string } }) {
  return (
    <div>
      <h1>Family Page: {params["family-slug"]}</h1>
      <p>This is the family page.</p>
    </div>
  );
}

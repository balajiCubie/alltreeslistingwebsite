export default function SpeciesPage({ params }: { params: { "species-slug": string } }) {
  return (
    <div>
      <h1>Individual Tree Species: {params["species-slug"]}</h1>
      <p>This is the individual tree species page.</p>
    </div>
  );
}

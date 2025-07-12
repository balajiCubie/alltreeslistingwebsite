export default function GenusPage({ params }: { params: { "genus-slug": string } }) {
  return (
    <div>
      <h1>Genus Page: {params["genus-slug"]}</h1>
      <p>This is the genus page.</p>
    </div>
  );
}

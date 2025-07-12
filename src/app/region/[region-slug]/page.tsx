export default function RegionPage({ params }: { params: { "region-slug": string } }) {
  return (
    <div>
      <h1>Region Page: {params["region-slug"]}</h1>
      <p>This is the region page.</p>
    </div>
  );
}

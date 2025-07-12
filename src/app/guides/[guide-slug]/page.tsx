export default function GuideDetailsPage({ params }: { params: { "guide-slug": string } }) {
  return (
    <div>
      <h1>Guide Details: {params["guide-slug"]}</h1>
      <p>This is the guide details page.</p>
    </div>
  );
}

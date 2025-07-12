export default function ConservationStatusPage({ params }: { params: { "status-slug": string } }) {
  return (
    <div>
      <h1>Conservation Status Page: {params["status-slug"]}</h1>
      <p>This is the conservation status page.</p>
    </div>
  );
}

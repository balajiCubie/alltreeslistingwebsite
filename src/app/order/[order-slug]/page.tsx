export default function OrderPage({ params }: { params: { "order-slug": string } }) {
  return (
    <div>
      <h1>Order Page: {params["order-slug"]}</h1>
      <p>This is the order page.</p>
    </div>
  );
}

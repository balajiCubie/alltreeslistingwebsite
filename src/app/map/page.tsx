import PageHeader from '../../components/common/PageHeader';
import WorldMap from '../../components/map/WorldMap';
import MapLegend from '../../components/map/MapLegend';
import CTABanner from '../../components/common/CTABanner';

export default function MapPage() {
  return (
    <main className="container mx-auto py-12">
      <PageHeader
        title="Explore Trees by Region"
        subtitle="See where tree species grow naturally, by region, climate zone, or biodiversity hotspots."
      />
      <WorldMap />
      <MapLegend />
      <CTABanner />
    </main>
  );
}

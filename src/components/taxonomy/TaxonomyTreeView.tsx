import { TaxonomyData, Order, Family, Genus } from '../../types/taxonomy';

interface TaxonomyTreeViewProps {
  data: TaxonomyData;
}

export default function TaxonomyTreeView({ data }: TaxonomyTreeViewProps) {
  return (
    <div className="space-y-4">
      {data.orders.map((order: Order) => (
        <div key={order.name}>
          <h2 className="text-xl font-bold">{order.name}</h2>
          <ul className="ml-4">
            {order.families.map((family: Family) => (
              <li key={family.name}>
                <h3 className="text-lg font-semibold">
                  <a href={`/trees?family=${family.name}`}>{family.name}</a>
                </h3>
                <ul className="ml-4">
                  {family.genera.map((genus: string) => (
                    <li key={genus}>
                      <a href={`/trees?genus=${genus}`}>{genus}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

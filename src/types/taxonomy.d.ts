export interface Genus {
  name: string;
}

export interface Family {
  name: string;
  genera: string[];
}

export interface Order {
  name: string;
  families: Family[];
}

export interface TaxonomyData {
  orders: Order[];
}

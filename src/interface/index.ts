interface ProductInterface {
  _id: string;
  name: string;
  description: string;
  price?: number;
  quatity?: number;
  images?: [string];
  creatorPerson?: string;
  dateCreated?: string;
  dateModify?: string;
  sizes?: any;
  brand?: string;
  sku?: string;
  category: string;
}

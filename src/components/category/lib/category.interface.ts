export interface CategoryResource {
  id: number;
  name: string;
  company_id: number;
  category_id: number | null;
  company: string;
  category: null | string;
  children?: CategoryResource[];
}

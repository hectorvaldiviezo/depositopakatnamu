export interface NewsResponse {
  current_page: number;
  data: NewsResource[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
}

export interface NewsResource {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  images: string[];
  content: string;
  typeMedia: string;
  category: string;
  category_id: number;
  newsRelated: NewsRelated[];
}

export interface NewsRelated {
  id: number;
  title: string;
  description: string;
  date: Date;
  category: string;
  image: string;
}

export interface Link {
  url: null | string;
  label: string;
  active: boolean;
}

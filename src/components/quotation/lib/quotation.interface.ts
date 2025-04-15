export interface QuotationRequest {
  sedeId: number;
  document: string;
  fullName: string;
  email: string;
  phone: string;
  telephone: string;
  message: string;
  products: {
    id: number;
    name: string;
    quantity: number;
  }[];
}

export interface QuotationResponse {
  status: number;
  message: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  companyName?: string;
  productType: string;
  quantity: number;
  details?: string;
  specs: any;
  status: "draft" | "submitted" | "approved";
  timestamp: string;
}

export interface ChatMessage {
  role: "user" | "model";
  content: string;
}

export type ProductType = 
  | "garment_tags" 
  | "custom_boxes" 
  | "stickers_labels" 
  | "dtf_transfers" 
  | "flyers_marketing" 
  | "corporate_gifts";

export interface PricingSpec {
  name: string;
  label: string;
  type: "select" | "number" | "boolean";
  options?: { value: string; label: string; priceMultiplier: number }[];
  defaultValue: any;
}

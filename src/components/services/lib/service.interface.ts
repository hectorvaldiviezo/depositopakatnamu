import * as LucideReact from "lucide-react";

type IconNames = keyof typeof LucideReact;

export interface ServiceResource {
  id: number;
  title: string;
  description: string;
  url: string;
  icon: IconNames;
  active: boolean;
  company_id: number;
  company: string;
}

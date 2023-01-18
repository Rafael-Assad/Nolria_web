export interface IllustrationInfo{
  id: number;
  hash:string;
  illustration:string;
  title:string;
  description:string;
  illustrated_at?: string;
  cols: number;
  rows: number;
  home_order?: number;
  created_at:string;
  updated_at:string;
}

export interface BudgetEmail {
  name: string;
	subject: string;
	email: string;
	message: string;
}

export type SeverityOpts = "error" | "warning" | "info" | "success";

export interface HashItem {
  id: number;
  title:string;
  hash: string;
}

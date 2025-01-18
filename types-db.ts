import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export interface Store {
  storeDomain: string;
  id: string;
  name: string;
  categorize: string;
  currency: string;
  logoUrl?: string;
  favIconUrl?: string;
  primaryColor?: string;
  seconderyColor?: string;
  userId: string;
  createAt: Date;
  updateAt: Date;
}

export interface SidebarItems {
  links: Array<{
    label: string;
    href: string;
    icon?: LucideIcon;
  }>;
  extras?: ReactNode;
}

export interface Billboards {
  id: string;
  label: string;
  imageUrl: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface Component {
  id: string;
  title: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface Pages {
  id: string;
  slug: string;
  title: string;
  components: {
    id: string;
    componentLabel: string;
    componentUID?: string;
    componentLink?: any;
  }[] | null;
  createdAt?: Date;
  updateAt?: Date;
}

export interface Category {
  id: string;
  billboardId: string;
  billboardLabel: string;
  name: string;
  categorySlug: string;
  imageUrl: string;
  description?: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface Size {
  id: string;
  name: string;
  value: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface Color {
  id: string;
  name: string;
  value: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface Product {
  id: string;
  name: string;
  color: string;
  description: string;
  productSlug: string;
  price: string;
  qty: number;
  images: string[];
  isFeatured: boolean;
  isArchived: boolean;
  category: string;
  size?: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface Order {
  id: string;
  isPaid: boolean;
  phone: string;
  orderItems: Product[];
  address: string;
  order_status: string;
  createdAt?: Date;
  updateAt?: Date;
}

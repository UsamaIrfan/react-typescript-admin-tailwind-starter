export interface LoginInput {
  username: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}

export interface IOrderItem {
  sn: number;
  xid: string;
  item_id: string;
  name: string;
  image: string;
  image_url: string;
  x_tax_id: string;
  discount_rate: number;
  total_discount: number;
  total_tax: number;
  unit_price: number;
  single_unit_price: number;
  subtotal: number;
  quantity: number;
  tax_rate: number;
  tax_type: string;
  x_unit_id: string;
  unit: IUnit;
  stock_quantity: number;
  unit_short_name: string;
}

export interface IUnit {
  company_id: number;
  name: string;
  short_name: string;
  base_unit?: any;
  operator: string;
  operator_value: string;
  is_deletable: number;
  created_at?: any;
  updated_at?: any;
  xid: string;
}

export interface IOrder {
  unique_id: string;
  invoice_number: string;
  order_type: string;
  order_date: string;
  tax_amount: number;
  discount: number;
  shipping: number;
  subtotal: number;
  paid_amount: number;
  due_amount: number;
  order_status: string;
  payment_status: string;
  total: number;
  tax_rate: number;
  cancelled: number;
  terms_condition: string;
  xid: string;
  x_warehouse_id: string;
  x_from_warehouse_id?: any;
  x_staff_user_id: string;
  x_user_id: string;
  warehouse: Warehouse;
  from_warehouse?: any;
  staff_member: Staffmember;
  user: User;
  order_payments: Orderpayment[];
  items: IItem[];
  shipping_address?: any;
}

export interface IItem {
  single_unit_price: number;
  unit_price: number;
  quantity: number;
  tax_rate: number;
  total_tax: number;
  tax_type: string;
  total_discount: number;
  subtotal: number;
  xid: string;
  x_product_id: string;
  product: IOrderProduct;
  order_item_taxes: any[];
}

export interface IOrderProduct {
  name: string;
  image: string;
  xid: string;
  x_unit_id: string;
  image_url: string;
  unit: Unit;
  details: IDetails;
}

export interface IDetails {
  current_stock: number;
  xid: string;
  x_warehouse_id: string;
  x_product_id: string;
  x_tax_id?: any;
}

interface Unit {
  name: string;
  short_name: string;
  xid: string;
}

interface Orderpayment {
  amount: number;
  xid: string;
  x_payment_id: string;
  payment: Payment;
}

interface Payment {
  amount: number;
  date: string;
  notes?: any;
  xid: string;
  x_payment_mode_id: string;
  payment_mode: Warehouse;
}

interface User {
  user_type: string;
  name: string;
  profile_image?: any;
  phone: string;
  xid: string;
  profile_image_url: string;
}

interface Staffmember {
  name: string;
  profile_image?: any;
  user_type: string;
  xid: string;
  profile_image_url: string;
}

interface Warehouse {
  name: string;
  xid: string;
}

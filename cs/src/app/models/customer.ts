import { Coupon } from './coupon';
export class Customer {
  id: number;
  first: string;
  last: string;
  email: string;
  password: string;
  coupons: Coupon[];
}

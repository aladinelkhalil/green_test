export interface Customer {
  id: string;
  name: string;
  age: number;
  address: Address;
  hasDriverLicense: boolean;
  billingAddress?: BillingAddress;
  paymentMethod: PaymentMethod;
}

interface Address {
  street: string;
  zipCode: string;
  city: string;
}

interface BillingAddress extends Address {
  careOf?: string;
  companyName?: string;
}

export enum PaymentMethod {
  PAYPAL = "PayPal",
  MASTERCARD = "Mastercard",
  VISA = "Visa",
  AMEX = "Amex",
}

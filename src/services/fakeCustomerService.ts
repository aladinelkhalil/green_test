import { Customer, PaymentMethod } from "../types/Customer";

const customers: Customer[] = [
  {
    id: "1",
    age: 2,
    name: "Aladin",
    address: {
      street: "Hejvägen 7",
      zipCode: "12345",
      city: "Malmöe",
    },
    hasDriverLicense: true,
    paymentMethod: PaymentMethod.MASTERCARD,
  },
  {
    id: "2",
    age: 2,
    name: "qwwe",
    address: {
      street: "Hejvägen 7",
      zipCode: "12345",
      city: "Malmöe",
    },
    hasDriverLicense: true,
    paymentMethod: PaymentMethod.MASTERCARD,
  },
  {
    id: "3",
    age: 2,
    name: "asd",
    address: {
      street: "Hejvägen 7",
      zipCode: "12345",
      city: "Malmöe",
    },
    hasDriverLicense: true,
    paymentMethod: PaymentMethod.MASTERCARD,
  },
];

export function getCustomers() {
  return customers;
}

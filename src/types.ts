interface User {
  userId: number,
  address: string,
  email: string,
  password: string,
  phone_number: string,
  username: string
}

interface Item {
  itemId: number;
  name: string;
  description: string;
  price: number;
  quantityAvailable: number;
  imageUrl: string;
  user_id: number
}

interface CartItem {
  userId: number;
  itemId: number;
  quantity: number;
  discountPercent: number;
}

interface Order {
  orderId: number;
  userId: number;
  orderDate: string;
  totalAmount: number;
  taxAmount: number;
  discountCode: string;
  orderStatus: string;
}

interface Discount {
  discountId: number;
  code: string;
  discountValue: number;
  experiationDate: string;
  isPercent: boolean
}
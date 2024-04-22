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
}
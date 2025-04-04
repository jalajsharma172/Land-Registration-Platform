export interface Property {
  id: string;
  address: string;
  price: number;
  seller: string;
  status: 'available' | 'pending' | 'sold';
}

export interface Contractor {
  id: string;
  name: string;
  licenseNumber: string;
  isApproved: boolean;
}

export interface User {
  address: string;
  role: 'user' | 'seller' | 'contractor' | 'admin';
}
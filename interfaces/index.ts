export interface Address {
    city: string;
    country: string;
  }
  
  export interface Review {
    name: string;
    avatar: string;
    rating: number;
    comment: string;
  }
  
  export interface PropertyProps {
    id: string;
    name: string;
    rating: number;
    address: Address;
    image: string;
    images: string[];  // additional images
    description: {
      whatWeOffer: string;
      aboutHost: string;
    };
    category: string[]; // amenities
    price: number;
    reviews: Review[];
  }
  
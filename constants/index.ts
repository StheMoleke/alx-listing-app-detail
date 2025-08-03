import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: "seaside-villa",
    name: "Seaside Villa",
    rating: 4.7,
    address: { city: "Cape Town", country: "South Africa" },
    image: "/images/seaside-main.jpg",
    images: [
      "/images/seaside-1.jpg",
      "/images/seaside-2.jpg",
      "/images/seaside-3.jpg"
    ],
    description: {
      whatWeOffer: "Enjoy a luxury stay with sea views and all amenities.",
      aboutHost: "Hosted by John, a local with years of hospitality experience."
    },
    category: ["Wi-Fi", "Pool", "Parking", "Air Conditioning"],
    price: 150,
    reviews: [
      {
        name: "Alice",
        avatar: "/avatars/alice.jpg",
        rating: 5,
        comment: "Amazing stay, very comfortable and beautiful views!"
      },
      {
        name: "Bob",
        avatar: "/avatars/bob.jpg",
        rating: 4,
        comment: "Great location but parking was a bit tight."
      }
    ]
  },
  // add more properties here
];

import { useState } from "react";
import { PropertyProps } from "@/interfaces";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const tabs = ["What we offer", "Reviews", "About host"];

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container mx-auto px-4 py-8 lg:flex lg:space-x-8">
      {/* Left main content */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold">{property.name}</h1>
        <div className="flex items-center space-x-4 mt-2 text-gray-600">
          <span className="text-yellow-500 font-semibold">{property.rating} ★</span>
          <span>{property.address.city}, {property.address.country}</span>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <img
            src={property.image}
            alt={property.name}
            className="col-span-2 h-96 w-full object-cover rounded-lg"
            loading="lazy"
          />
          {property.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${property.name} image ${idx + 1}`}
              className="h-48 w-full object-cover rounded-lg"
              loading="lazy"
            />
          ))}
        </div>

        {/* Tabs */}
        <div className="mt-8">
          <nav className="flex border-b border-gray-300">
            {tabs.map((tab, idx) => (
              <button
                key={tab}
                className={`px-4 py-2 -mb-px font-semibold border-b-2 
                  ${activeTab === idx ? "border-green-500 text-green-600" : "border-transparent text-gray-600 hover:text-green-600"}`}
                onClick={() => setActiveTab(idx)}
              >
                {tab}
              </button>
            ))}
          </nav>

          <div className="mt-4 text-gray-700">
            {activeTab === 0 && <p>{property.description.whatWeOffer}</p>}
            {activeTab === 1 && <ReviewSection reviews={property.reviews} />}
            {activeTab === 2 && <p>{property.description.aboutHost}</p>}
          </div>
        </div>

        {/* Amenities */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">What this place offers</h2>
          <ul className="flex flex-wrap gap-3">
            {property.category.map((amenity, idx) => (
              <li
                key={idx}
                className="flex items-center bg-gray-100 p-2 rounded-md text-sm"
              >
                {/* Optionally add icons here */}
                <span>{amenity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Booking Section */}
      <div className="mt-10 lg:mt-0 lg:w-96">
        <BookingSection price={property.price} />
      </div>
    </div>
  );
};

export default PropertyDetail;

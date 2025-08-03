import { Review } from "@/interfaces";

const ReviewSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  return (
    <div className="space-y-6">
      {reviews.length === 0 && <p>No reviews yet.</p>}
      {reviews.map((review, idx) => (
        <div key={idx} className="border-b pb-4">
          <div className="flex items-center mb-2">
            <img
              src={review.avatar}
              alt={`${review.name} avatar`}
              className="w-12 h-12 rounded-full object-cover mr-4"
              loading="lazy"
            />
            <div>
              <p className="font-semibold">{review.name}</p>
              <p className="text-yellow-500">{review.rating} ★</p>
            </div>
          </div>
          <p className="text-gray-700">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;

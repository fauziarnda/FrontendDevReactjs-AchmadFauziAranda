import StarRating from './StarRating';

export default function ReviewCard({ review }) {
  return (
    <div className="border p-4 gap-4 shadow-sm">
      <div className="flex flex-col gap-2 ">
        <p className="font-medium">{review.name}</p>
        <StarRating rating={review.rating} />
        <p className="text-gray-700 ">{review.text}</p>
        {Array.isArray(review.image) && review.image.length > 0 && (
          <div className="flex gap-2 mb-2 pt-2 overflow-x-auto">
            {review.image.map((imgUrl, index) => (
              <img
                key={index}
                src={imgUrl}
                alt={`Review ${index + 1}`}
                className="w-20 h-20 object-cover rounded"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

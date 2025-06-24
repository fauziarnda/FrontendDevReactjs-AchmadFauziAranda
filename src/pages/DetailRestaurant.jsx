import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ReviewCard from '../components/ReviewCard';
import StarRating from '../components/StarRating';
import { IoIosArrowBack } from 'react-icons/io';

export default function DetailRestaurant() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://685968fe138a18086dfe5470.mockapi.io/api/v1/restaurants/${id}`
    )
      .then((res) => res.json())
      .then((data) => setRestaurant(data))
      .catch((err) => console.error('Restaurant fetch error:', err));

    fetch(
      `https://685968fe138a18086dfe5470.mockapi.io/api/v1/reviews?restaurantId=${id}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error('Reviews fetch error:', err));
  }, [id]);

  if (!restaurant) return <p className="p-6">Loading...</p>;

  return (
    <div className="font-almarai font-light max-w-[1440px] mx-auto px-6 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-950 hover:underline flex items-center gap-1"
      >
        <IoIosArrowBack className="text-xl" />
        Back
      </button>

      <div className="py-6 border-b space-y-4">
        <img
          src={restaurant.photos?.[0] || '/default-image.png'}
          alt={restaurant.name}
          className="w-full max-h-[450px] object-cover  mb-6"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-2">
          {restaurant.name}
        </h1>
        <div className="mb-4">
          <StarRating rating={restaurant.rating} size={32} />
        </div>
      </div>

      <div>
        <h2 className="text-3xl  mb-6 mt-12">Reviews</h2>
        <div className="grid gap-x-8 gap-y-8 md:grid-cols-2">
          {reviews.length === 0 ? (
            <p className="text-gray-500">No reviews yet.</p>
          ) : (
            reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

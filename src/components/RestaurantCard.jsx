import { Link } from 'react-router-dom';
import StarRating from './StarRating';
import { BsCircleFill } from 'react-icons/bs';

export default function RestaurantCard({ restaurant }) {
  const { name, photos, categories, rating, price, isOpen } = restaurant;

  return (
    <div className="hover:shadow-md transition flex flex-col h-full gap-1">
      <img
        src={photos?.[0] || './default-image.png'}
        alt={name}
        className="bg-gray-300 w-full h-[200px] object-cover mb-2"
      />
      <h3 className="text-lg ">{name}</h3>
      <div className="flex items-center gap-1 mb-1">
        <div className="flex items-center space-x-1 text-blue-950 text-md mb-1">
          <StarRating rating={rating} />
        </div>
      </div>
      <div className="flex justify-between text-sm mb-2">
        <p className="text-gray-500">
          {categories?.[0]} • {price}
        </p>
        <p className="font-medium flex items-center gap-1 text-gray-500">
          <BsCircleFill
            className={isOpen ? 'text-green-600' : 'text-red-500'}
            size={10}
          />
          {isOpen ? 'Open Now' : 'Closed'}
        </p>
      </div>

      <div className="mt-auto">
        <Link to={`/restaurant/${restaurant.id}`}>
          <button className="bg-blue-950 text-white p-2 text-center w-full hover:bg-blue-900">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}

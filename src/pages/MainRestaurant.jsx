import { useEffect, useState } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import FilterNavigation from '../components/FilterNavigation';
import { getUniqueCategories } from '../utils/getUniqueCategories';

export default function MainRestaurant() {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [showOpenNow, setShowOpenNow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(8);

  const API_URL =
    'https://685968fe138a18086dfe5470.mockapi.io/api/v1/restaurants';

  useEffect(() => {
    setLoading(true);
    let url = API_URL;

    if (selectedCategory) {
      url += `?categories=${selectedCategory}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRestaurants(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, [selectedCategory]);

  useEffect(() => {
    getUniqueCategories(API_URL).then(setCategoryOptions);
  }, []);

  const filteredRestaurants = restaurants.filter((r) => {
    const isOpenMatch = showOpenNow ? r.isOpen : true;
    const priceMatch = selectedPrice ? r.price === selectedPrice : true;
    return isOpenMatch && priceMatch;
  });

  const visibleRestaurants = filteredRestaurants.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="font-almarai font-light max-w-[1440px] mx-auto px-6 py-8">
      <div className="flex flex-col gap-2 mb-6 max-w-lg">
        <h1 className="text-5xl">Restaurants</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="border-y py-4 items-center">
        <FilterNavigation
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categoryOptions={categoryOptions}
          showOpenNow={showOpenNow}
          setShowOpenNow={setShowOpenNow}
        />
      </div>

      <div className="my-12">
        <h2 className="text-3xl mb-6">All Restaurants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {visibleRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>

      {visibleCount < filteredRestaurants.length && (
        <div onClick={handleLoadMore} className="flex justify-center mt-16">
          <button className="border border-blue-950 text-blue-950 px-8 py-2 text-center w-full max-w-md hover:underline">
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

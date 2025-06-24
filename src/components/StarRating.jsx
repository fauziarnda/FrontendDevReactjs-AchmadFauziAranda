import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io';

export default function StarRating({ rating, size }) {
  const getStarIcon = (index) => {
    if (rating >= index + 1)
      return <IoMdStar size={size} className="text-blue-950" />;
    if (rating >= index + 0.5)
      return <IoMdStarHalf size={size} className=" text-blue-950" />;
    return <IoMdStarOutline size={size} className="text-blue-950" />;
  };

  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} className="text-lg">
          {getStarIcon(i)}
        </span>
      ))}
    </div>
  );
}

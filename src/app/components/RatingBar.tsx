interface RatingBarProps {
  label: string;
  rating: number;
  maxRating?: number;
}

export default function RatingBar({ label, rating, maxRating = 5 }: RatingBarProps) {
  const percentage = (rating / maxRating) * 100;
  
  return (
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm font-medium text-gray-700 w-20">{label}</span>
      <div className="flex-1 mx-3">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
      <span className="text-sm font-semibold text-gray-900 w-8 text-right">{rating}</span>
    </div>
  );
}
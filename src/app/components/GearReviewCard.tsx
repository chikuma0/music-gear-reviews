import Link from 'next/link';
import { GearReview } from '../types/gear';

interface GearReviewCardProps {
  review: GearReview;
}

export default function GearReviewCard({ review }: GearReviewCardProps) {
  return (
    <Link href={`/review/${review.id}`} className="group">
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group-hover:scale-105">
        <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <span className="text-4xl">{getCategoryIcon(review.category)}</span>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {review.brand} {review.model}
              </h3>
              <p className="text-sm text-gray-500 capitalize">{review.category.replace('-', ' ')}</p>
            </div>
            <div className="flex items-center">
              <span className="text-lg font-bold text-yellow-500">★</span>
              <span className="ml-1 text-sm font-medium text-gray-700">{review.rating.overall}</span>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{review.summary}</p>
          
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-green-600">
              ${review.price.current.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500">{review.dateReviewed}</span>
          </div>
          
          <div className="flex flex-wrap gap-1 mt-3">
            {review.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                {tag}
              </span>
            ))}
            {review.tags.length > 3 && (
              <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                +{review.tags.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    'synthesizers': '🎹',
    'daws': '💻',
    'audio-interfaces': '🎚️',
    'studio-monitors': '🔊',
    'headphones': '🎧',
    'midi-controllers': '🎛️',
    'effects-pedals': '⚡',
    'microphones': '🎤',
    'drum-machines': '🥁',
    'samplers': '📀'
  };
  return icons[category] || '🎵';
}
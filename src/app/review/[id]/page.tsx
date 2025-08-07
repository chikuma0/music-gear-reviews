import { notFound } from 'next/navigation';
import { sampleReviews } from '../../data/sampleReviews';
import RatingBar from '../../components/RatingBar';
import Link from 'next/link';

interface ReviewPageProps {
  params: Promise<{ id: string }>;
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const { id } = await params;
  const review = sampleReviews.find(r => r.id === id);
  
  if (!review) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li className="before:content-['/'] before:mx-2">
              <Link href="/reviews" className="hover:text-gray-700">Reviews</Link>
            </li>
            <li className="before:content-['/'] before:mx-2 text-gray-900">
              {review.brand} {review.model}
            </li>
          </ol>
        </nav>
        
        {/* Header */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center mb-4">
                <span className="text-6xl">{getCategoryIcon(review.category)}</span>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {review.brand} {review.model}
                  </h1>
                  <p className="text-lg text-gray-600 capitalize mb-4">
                    {review.category.replace('-', ' ')}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl font-bold text-yellow-500 mr-2">★</span>
                    <span className="text-2xl font-bold text-gray-900">{review.rating.overall}</span>
                    <span className="text-gray-500 ml-1">/5</span>
                  </div>
                  <p className="text-2xl font-bold text-green-600">
                    ${review.price.current.toLocaleString()}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">{review.summary}</p>
              
              {/* Rating Breakdown */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Ratings Breakdown</h3>
                <RatingBar label="Sound" rating={review.rating.sound} />
                <RatingBar label="Build" rating={review.rating.buildQuality} />
                <RatingBar label="Value" rating={review.rating.value} />
                <RatingBar label="Usability" rating={review.rating.usability} />
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {review.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Review Content */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Full Review</h2>
              
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Introduction</h3>
                  <p className="text-gray-700 leading-relaxed">{review.content.introduction}</p>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Sound Quality</h3>
                  <p className="text-gray-700 leading-relaxed">{review.content.soundQuality}</p>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Build & Design</h3>
                  <p className="text-gray-700 leading-relaxed">{review.content.buildAndDesign}</p>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Features</h3>
                  <p className="text-gray-700 leading-relaxed">{review.content.features}</p>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Value for Money</h3>
                  <p className="text-gray-700 leading-relaxed">{review.content.valueForMoney}</p>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Conclusion</h3>
                  <p className="text-gray-700 leading-relaxed">{review.content.conclusion}</p>
                </section>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pros & Cons */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pros & Cons</h3>
              
              <div className="mb-6">
                <h4 className="text-green-600 font-medium mb-2">👍 Pros</h4>
                <ul className="space-y-1">
                  {review.pros.map((pro, index) => (
                    <li key={index} className="text-sm text-gray-700">• {pro}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-red-600 font-medium mb-2">👎 Cons</h4>
                <ul className="space-y-1">
                  {review.cons.map((con, index) => (
                    <li key={index} className="text-sm text-gray-700">• {con}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Specifications */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
              <div className="space-y-2">
                {Object.entries(review.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm">
                    <span className="text-gray-600">{key}:</span>
                    <span className="text-gray-900 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Purchase Links */}
            {review.affiliate && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Where to Buy</h3>
                <div className="space-y-3">
                  {review.affiliate.amazonUrl && (
                    <a 
                      href={review.affiliate.amazonUrl}
                      className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-3 rounded-lg font-medium transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Buy on Amazon
                    </a>
                  )}
                  {review.affiliate.sweetwaterUrl && (
                    <a 
                      href={review.affiliate.sweetwaterUrl}
                      className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-medium transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Buy on Sweetwater
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
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
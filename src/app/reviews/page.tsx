import { sampleReviews } from '../data/sampleReviews';
import GearReviewCard from '../components/GearReviewCard';

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Gear Reviews</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive reviews of the latest music production equipment, 
            tested and rated by our expert team.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter Reviews</h3>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Category</h4>
                <div className="space-y-2">
                  {['All', 'Synthesizers', 'DAWs', 'Audio Interfaces', 'Studio Monitors'].map((category) => (
                    <label key={category} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 mr-2" />
                      <span className="text-sm text-gray-600">{category}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Price Range</h4>
                <div className="space-y-2">
                  {['Under $200', '$200 - $500', '$500 - $1000', '$1000+'].map((range) => (
                    <label key={range} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 mr-2" />
                      <span className="text-sm text-gray-600">{range}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Rating</h4>
                <div className="space-y-2">
                  {['4+ Stars', '3+ Stars', '2+ Stars'].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 mr-2" />
                      <span className="text-sm text-gray-600">{rating}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>
          
          {/* Reviews Grid */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-gray-600">
                Showing {sampleReviews.length} reviews
              </p>
              <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
                <option>Newest First</option>
                <option>Highest Rated</option>
                <option>Lowest Price</option>
                <option>Highest Price</option>
              </select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleReviews.map((review) => (
                <GearReviewCard key={review.id} review={review} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
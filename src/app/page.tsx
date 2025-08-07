import Link from 'next/link';
import { sampleReviews, categories } from './data/sampleReviews';
import GearReviewCard from './components/GearReviewCard';

export default function Home() {
  const featuredCategories = categories.slice(0, 4);
  const latestReviews = sampleReviews.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Music Gear Reviews
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your ultimate resource for music production equipment reviews, comparisons, and recommendations. 
            Discover the gear that will take your music to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reviews" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Browse All Reviews
            </Link>
            <Link href="/about" className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Popular Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCategories.map((category) => (
              <Link key={category.name} href={`/category/${category.slug}`} className="group">
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center group-hover:scale-105 transition-transform">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Reviews Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Latest Reviews</h2>
            <Link href="/reviews" className="text-blue-600 hover:text-blue-800 font-semibold">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestReviews.map((review) => (
              <GearReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

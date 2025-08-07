import Link from 'next/link';

export default function Navigation() {
  const categories = [
    { name: 'Synthesizers', href: '/category/synthesizers' },
    { name: 'DAWs', href: '/category/daws' },
    { name: 'Audio Interfaces', href: '/category/audio-interfaces' },
    { name: 'Studio Monitors', href: '/category/studio-monitors' },
    { name: 'Headphones', href: '/category/headphones' },
    { name: 'MIDI Controllers', href: '/category/midi-controllers' },
    { name: 'Effects Pedals', href: '/category/effects-pedals' },
    { name: 'Microphones', href: '/category/microphones' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Music Gear Reviews</h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center">
                Categories
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1" role="menu">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/reviews" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              All Reviews
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              About
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-700 hover:text-gray-900 p-2">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
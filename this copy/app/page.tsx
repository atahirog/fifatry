"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const featuredCities = [
    { name: 'New York', count: 15 },
    { name: 'Los Angeles', count: 12 },
    { name: 'Chicago', count: 8 },
    { name: 'Miami', count: 6 },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const formattedQuery = searchQuery.toLowerCase().replace(/\s+/g, '-');
      window.location.href = `/city/${formattedQuery}`;
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="text-center space-y-6 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Find Arcade Bars Near You
          </h1>
          <p className="text-xl text-gray-200">
            Discover the best arcade bars in your city
          </p>
          <form onSubmit={handleSearch} className="max-w-md mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter your city..."
              className="w-full px-6 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-purple-500 outline-none"
              aria-label="Search for your city"
            />
          </form>
        </div>
      </section>

      {/* Featured Cities */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Cities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCities.map((city) => (
            <Link
              href={`/city/${city.name.toLowerCase().replace(/\s+/g, '-')}`}
              key={city.name}
              className="group relative h-64 rounded-lg overflow-hidden hover:shadow-xl transition-shadow bg-gradient-to-br from-purple-700 to-indigo-800"
              tabIndex={0}
              aria-label={`View arcade bars in ${city.name}`}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-2xl font-bold">{city.name}</h3>
                <p>{city.count} Arcade Bars</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Arcade Directory</h2>
          <p className="text-gray-600">
            Your ultimate guide to finding the best arcade bars across the country. 
            Whether you&apos;re looking for classic games, pinball machines, or modern 
            gaming setups, we&apos;ve got you covered.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2024 Arcade Bar Directory. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

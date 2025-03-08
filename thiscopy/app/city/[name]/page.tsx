import Link from 'next/link';

interface Bar {
  id: string;
  name: string;
  address: string;
  description: string;
  games: string[];
}

const cityBars: Record<string, Bar[]> = {
  'new-york': [
    {
      id: 'ny1',
      name: 'Barcade',
      address: '148 W 24th St, New York, NY',
      description: 'Classic arcade games and craft beers',
      games: ['Pac-Man', 'Donkey Kong', 'Street Fighter II']
    },
    {
      id: 'ny2',
      name: 'Level Up Arcade',
      address: '123 Broadway, New York, NY',
      description: 'Modern gaming lounge with retro classics',
      games: ['Mario Kart', 'Dance Dance Revolution', 'Pinball']
    }
  ],
  'los-angeles': [
    {
      id: 'la1',
      name: 'Button Mash',
      address: '1391 Sunset Blvd, Los Angeles, CA',
      description: 'Asian fusion cuisine meets arcade gaming',
      games: ['Metal Slug', 'Teenage Mutant Ninja Turtles', 'NBA Jam']
    },
    {
      id: 'la2',
      name: 'Pixel Palace',
      address: '456 Hollywood Blvd, Los Angeles, CA',
      description: 'Upscale gaming experience',
      games: ['Mortal Kombat', 'Galaga', 'Tekken']
    }
  ],
  'chicago': [
    {
      id: 'chi1',
      name: 'Emporium Arcade Bar',
      address: '1366 N Milwaukee Ave, Chicago, IL',
      description: 'Spacious arcade bar with live music',
      games: ['Skee-Ball', 'Air Hockey', 'Ms. Pac-Man']
    },
    {
      id: 'chi2',
      name: 'Pixels Arcade Bar',
      address: '789 State St, Chicago, IL',
      description: 'Retro gaming paradise',
      games: ['Space Invaders', 'Frogger', 'Centipede']
    }
  ],
  'miami': [
    {
      id: 'mia1',
      name: 'Arcade Odyssey',
      address: '234 Ocean Drive, Miami, FL',
      description: 'Beach-side gaming destination',
      games: ['Time Crisis', 'House of the Dead', 'Initial D']
    },
    {
      id: 'mia2',
      name: 'Joystick Lounge',
      address: '567 Collins Ave, Miami, FL',
      description: 'Art deco arcade bar',
      games: ['Dance Dance Revolution', 'Guitar Hero', 'Mario Party']
    }
  ]
};

type PageProps = {
  params: Promise<{ name: string }>;
};

export default async function CityPage({ params }: PageProps) {
  const resolvedParams = await params;
  const cityName = decodeURIComponent(resolvedParams.name as string).toLowerCase().replace(/%20/g, '-');
  const bars = cityBars[cityName] || [];
  const displayName = cityName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <main className="min-h-screen p-8">
      <Link 
        href="/"
        className="inline-block mb-8 text-purple-600 hover:text-purple-800"
      >
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-8">
        Arcade Bars in {displayName}
      </h1>

      <div className="grid gap-8">
        {bars.map((bar) => (
          <div 
            key={bar.id}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-bold mb-2">{bar.name}</h2>
            <p className="text-gray-600 mb-2">{bar.address}</p>
            <p className="mb-4">{bar.description}</p>
            <div>
              <h3 className="font-semibold mb-2">Popular Games:</h3>
              <div className="flex flex-wrap gap-2">
                {bar.games.map((game) => (
                  <span 
                    key={game}
                    className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                  >
                    {game}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
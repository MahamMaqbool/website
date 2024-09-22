import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Hero Section */}
      <div className="bg-white bg-opacity-80 p-8 rounded-xl shadow-lg max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to the Home Page
        </h1>
        

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">About Us</h2>
            <p className="text-gray-600">Learn more about our journey and what we do.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Services</h2>
            <p className="text-gray-600">Discover the services we provide to make your life easier.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Contact</h2>
            <p className="text-gray-600">Get in touch with us for any inquiries or support.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

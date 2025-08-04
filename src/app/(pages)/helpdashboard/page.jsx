import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tiptop Help Center</title>
      </Head>

      <div className="min-h-screen bg-white font-sans">

        {/* Banner image with search bar overlay */}
        <div className="relative w-full">
          <img
            src="/images/Vector(16).png"
            alt="Top Banner"
            className="w-full h-auto object-cover"
          />
          {/* Search bar positioned absolute on top of image, left center */}
          <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
            <input
              type="text"
              placeholder="Search here..."
              className="w-80 p-3 rounded-md text-white border border-gray-300 shadow placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Categories */}
        <section className="py-12 text-center">
          <h2 className="text-2xl text-black font-semibold mb-6">Categories</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
            <div className="bg-gray-100 p-6 rounded-md hover:shadow">
              <img
                src="/images/Vector(15).png"
                alt="New"
                className="mx-auto w-12 h-12 mb-4"
              />
              <h3 className="text-lg text-black font-bold">New to Tiptop Shine</h3>
              <p className="text-sm mt-2 text-black">
                Find everything you need to kickstart your experience
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-md hover:shadow">
              <img
                src="/images/Vector(14).png"
                alt="Pros"
                className="mx-auto w-12 h-12 mb-4"
              />
              <h3 className="text-lg text-black font-bold">Professionals</h3>
              <p className="text-sm mt-2 text-black">
                Help topics for pros using Tiptop Shine
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-md hover:shadow">
              <img
                src="/images/Vector(13).png"
                alt="Customers"
                className="mx-auto w-12 h-12 mb-4"
              />
              <h3 className="text-lg text-black font-bold">Customers</h3>
              <p className="text-sm mt-2 text-black">
                Getting started and using Tiptop Shine easily
              </p>
            </div>
          </div>
        </section>

        {/* Popular */}
        <section className="bg-white py-12">
          <h2 className="text-center text-2xl  text-black font-semibold mb-6">Popular</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto px-4 text-sm text-blue-600">
            <ul className="space-y-2">
              <li>What is Tiptop Shine and how does it work?</li>
              <li>How do ratings work?</li>
              <li>How do I refer a friend?</li>
              <li>How do credits and points work?</li>
              <li>How can I view my invoices?</li>
            </ul>
            <ul className="space-y-2">
              <li>What are credit pack subscriptions?</li>
              <li>What is the cost for cancellations?</li>
              <li>What does it mean for Tiptop Pro?</li>
              <li>What is the impact of my ratings?</li>
              <li>How do I cancel or delete my account?</li>
            </ul>
          </div>
        </section>

        {/* Contact Us */}
        <section className="py-12 bg-gray-50 text-center">
          <h2 className="text-2xl font-semibold text-black mb-6">Connect with us</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto px-4">
            <div className="bg-white p-6 border rounded-md w-full md:w-1/2">
              <p className="font-semibold text-black mb-2">Contact us via support request</p>
              <button className="text-blue-600 underline">Submit a request</button>
            </div>
            <div className="bg-white p-6 border rounded-md w-full md:w-1/2">
              <p className="font-semibold text-black mb-2">Call us</p>
              <p className="text-black">1-855-456-6789</p>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <div className="bg-blue-100 text-center py-6">
          <p className="text-gray-800 mb-2">Need help finding what you need?</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Submit a request
          </button>
        </div>
      </div>
    </>
  );
}

import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      <section className="bg-gray-200 py-20 mb-12 text-center mt-[-70px] flex justify-center items-center h-70">
        <div className="w-[90%] max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">About Samvaad</h1>
          <p className="text-lg">Learn about our mission, vision, and the people behind Samvaad Cultural Club</p>
        </div>
      </section>
      
      <section className="py-12">
        <div className="w-[90%] max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="mb-4">Samvaad was founded in 2018 by a group of passionate individuals who wanted to create a platform for cultural exchange and artistic expression. The name "Samvaad" means "dialogue" in Sanskrit, reflecting our commitment to fostering meaningful conversations through arts and culture.</p>
            <p>What started as small gatherings has now grown into a vibrant community of artists, writers, musicians, and culture enthusiasts from diverse backgrounds.</p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="mb-4">At Samvaad, our mission is to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Promote cultural awareness and appreciation</li>
              <li>Provide a platform for artistic expression</li>
              <li>Foster community connections through shared cultural experiences</li>
              <li>Preserve and celebrate diverse cultural traditions</li>
              <li>Support emerging artists and cultural practitioners</li>Cultural Club
            </ul>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2">Inclusivity</h3>
                <p>We welcome people from all backgrounds and celebrate diversity.</p>
              </div>
              <div className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2">Creativity</h3>
                <p>We encourage innovative expression and artistic exploration.</p>
              </div>
              <div className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p>We build meaningful connections through shared experiences.</p>
              </div>
              <div className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2">Respect</h3>
                <p>We honor diverse traditions and perspectives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <p className='font-bold w-fit p-3 color-gray-700 bg-amber-200 text-sm text-center mx-auto justify-center  py-1.5 rounded-xl'>Samvaad Forever and Whatever comes after ❤️</p>
        </div>
    </div>
  );
};

export default About;

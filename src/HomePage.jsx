import React from 'react';
import Heroimg from './assets/images/constructionhp.jpg';
import Project1 from './assets/images/new-residential-buildings.jpg'
import Project2 from './assets/images/project2.jpg'
import Project3 from './assets/images/project3.jpg'

const Homepage = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-[#f5f4f0] text-black py-20 px-4 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Build With Confidence</h1>
            <p className="text-lg text-gray-600 mb-6">Reliable construction services tailored to your vision.</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition">
              Request a Free Quote
            </button>
          </div>
          <img src={ Heroimg } alt="Construction Graphic" className="w-full md:w-1/2 mt-10 md:mt-0" />
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16 px-4 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          A trusted name in construction, delivering projects on time and on budget with quality and safety at the forefront.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-[#f5f4f0] py-16 px-4 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {['Residential Building', 'Commercial Projects', 'Renovation & Remodeling'].map((service, i) => (
            <div key={i} className="bg-white p-6 shadow-md rounded-xl text-center">
              <div className="mb-4 text-yellow-500 text-4xl">🏗️</div>
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-gray-600 text-sm">Top-notch quality and reliable execution for every project we take on.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              id: 1,
              title: 'Project Title 1',
              location: 'Location 1',
              description: 'Short description of the work done for Project 1.',
              image: Project1,
            },
            {
              id: 2,
              title: 'Project Title 2',
              location: 'Location 2',
              description: 'Short description of the work done for Project 2.',
              image: Project2,
            },
            {
              id: 3,
              title: 'Project Title 3',
              location: 'Location 3',
              description: 'Short description of the work done for Project 3.',
              image: Project3,
            },
          ].map((project) => (
            <div key={project.id} className="rounded-lg overflow-hidden shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.location} - {project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Testimonials */}
      <section className="bg-[#f5f4f0] py-16 px-4 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((testimonial) => (
            <div key={testimonial} className="bg-white p-6 rounded-xl shadow-md">
              <p className="italic text-gray-700 mb-4">“Amazing work! Professional and timely. Highly recommended.”</p>
              <div className="text-sm text-gray-600">- Client Name, Project Info</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Contact Section */}
      <section className="bg-amber-500 text-black py-16 px-4 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="mb-6">Let’s talk about your ideas and how we can help bring them to life.</p>
        <button className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Homepage;

import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaUserAlt, FaGlobe, FaHandsHelping } from 'react-icons/fa';
import hanzala from "../assets/hanzala3.png"
import Asad from "../assets/asad2.png"
import Ahmed from "../assets/ahmed.png"
import { NavLink } from 'react-router-dom';


const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Hero Section */}
      <section className="text-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-16 px-4 rounded-lg shadow-lg">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to BookNest
        </motion.h1>
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Your ultimate destination for discovering books, connecting with readers, and building your literary haven.
        </motion.p>

        <NavLink to="/explore-books">
        <motion.button
          className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-200"
          whileHover={{ scale: 1.1 }}
        >
          Explore Books
        </motion.button>
        </NavLink>
      </section>

      {/* Our Mission */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 mt-4">
            At BookNest, we aim to make books accessible to everyone while building a vibrant community of book lovers.
          </p>
        </div>
        <div className="flex justify-around items-center flex-wrap">
          {[
            { icon: FaBook, title: 'Discover', desc: 'Find your next favorite book.' },
            { icon: FaUserAlt, title: 'Connect', desc: 'Join a global community of readers.' },
            { icon: FaGlobe, title: 'Share', desc: 'Spread your love for books worldwide.' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 m-4 w-64 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <feature.icon className="text-purple-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-12 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
          <p className="text-gray-600 mt-4">
            A passionate group of individuals working to bring the best literary experience to you.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {[
            { name: 'Hanzala Arshad Arain', role: 'CEO & Developer', image: hanzala },
            { name: 'Asad Iqbal kaimKhani', role: 'CTO', image:Asad },
            { name: ' Muhammad Ahmed ', role: ' Web Designer', image:Ahmed },
          ].map((teamMember, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-lg shadow-lg p-6 text-center w-64"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={teamMember.image}
                alt={teamMember.name}
                className="rounded-full h-[150px] w-[150px] object-center  mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-1">{teamMember.name}</h3>
              <p className="text-purple-600 font-semibold">{teamMember.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Join Us?</h2>
        <p className="text-gray-600 mb-6">
          Sign up today and become a part of our growing community of book enthusiasts.
        </p>


        <NavLink to="/login">
        <motion.button
          className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-purple-700"
          whileHover={{ scale: 1.1 }}
        >
          Sign Up Now
        </motion.button>
        </NavLink>
      </section>
    </div>
  );
};

export default AboutUs;

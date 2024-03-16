import { useState } from 'react'
import React from 'react';
import Header from '../components/Public/Header';
import Navbar from '../components/Public/Navbar';
import Footer from '../components/Public/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-4">Welcome to Our Simple Landing Page</h2>
        <p className="text-lg">This is a basic landing page built with React.</p>
        <p className="text-lg">Feel free to explore the navigation menu.</p>
      </div>
      
    </div>
  );
}

export default HomePage;

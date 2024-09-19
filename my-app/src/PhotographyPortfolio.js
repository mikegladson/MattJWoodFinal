import React, { useState } from 'react';
import { X, Instagram, Twitter, Mail } from 'lucide-react';

const PhotographyPortfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAbout, setShowAbout] = useState(false);

  // Replace with your actual photo data
  const photos = [
    { id: 1, src: "my-app/public/images/cityscape.jpg", alt: "Cityscape" },
    { id: 4, src: "my-app/public/images/professional.jpg", alt: "Professional" },
    { id: 5, src: "my-app/public/images/sports.jpg", alt: "Sports" },
    { id: 6, src: "my-app/public/images/wedding.jpg", alt: "Wedding" }
  ];

  // Replace with your actual social media links and email
  const socialLinks = {
    instagram: "https://instagram.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "mailto:your.email@example.com"
  };

  const handleImageClick = (photo) => {
    setSelectedImage(photo);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowAbout(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 right-0 p-4 z-10 flex items-center">
        <button onClick={() => setShowAbout(true)} className="mr-4 hover:text-gray-300">About</button>
        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="mr-4 hover:text-gray-300">
          <Instagram size={20} />
        </a>
        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="mr-4 hover:text-gray-300">
          <Twitter size={20} />
        </a>
        <a href={socialLinks.email} className="hover:text-gray-300">
          <Mail size={20} />
        </a>
      </nav>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-0">
        {photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.src}
            alt={photo.alt}
            className="w-full cursor-pointer"
            onClick={() => handleImageClick(photo)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-20">
          <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-full" />
          <button onClick={closeModal} className="absolute top-4 right-4 text-white">
            <X size={24} />
          </button>
        </div>
      )}

      {showAbout && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-20">
          <div className="bg-white text-black p-8 max-w-2xl rounded-lg">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="mb-4">I'm a passionate photographer specializing in [your specialty]. With [X] years of experience, I've captured moments that tell unique stories...</p>
            <button onClick={closeModal} className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotographyPortfolio;

import React, { useState } from 'react';
import { X, Instagram, Twitter, Mail } from 'lucide-react';

const PhotographyPortfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAbout, setShowAbout] = useState(false);

  // Replace with your actual photo data
  const photos = [
    { id: 1, src: "Images/cityscape.jpg", alt: "Cityscape" },
    { id: 4, src: "GitHub/MattJWoodFinal/my-app/public/Images/professional.jpg", alt: "Professional" },
    { id: 5, src: "images/sports.jpg", alt: "Sports" },
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
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Photography Portfolio</h1>
      <div className="grid grid-cols-2 gap-4">
        {photos.map(photo => (
          <img
            key={photo.id}
            src={photo.src}
            alt={photo.alt}
            className="cursor-pointer"
            onClick={() => handleImageClick(photo)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="relative">
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <button
              className="absolute top-0 right-0 m-4 text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
          </div>
        </div>
      )}
      <div className="mt-4">
        <a href={socialLinks.instagram} className="mr-4">
          <Instagram size={24} />
        </a>
        <a href={socialLinks.twitter} className="mr-4">
          <Twitter size={24} />
        </a>
        <a href={socialLinks.email}>
          <Mail size={24} />
        </a>
      </div>
    </div>
  );
};

export default PhotographyPortfolio;

import { useState } from 'react';
import type { GalleryImage } from '../types';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  // Mock data for gallery images
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: '/images/gallery/image1.jpg',
      alt: 'Annual Festival 2024',
      category: 'festival'
    },
    {
      id: 2,
      src: '/images/gallery/image2.jpg',
      alt: 'Poetry Night',
      category: 'event'
    },
    {
      id: 3,
      src: '/images/gallery/image3.jpg',
      alt: 'Dance Performance',
      category: 'performance'
    },
    {
      id: 4,
      src: '/images/gallery/image4.jpg',
      alt: 'Art Workshop',
      category: 'workshop'
    },
    {
      id: 5,
      src: '/images/gallery/image5.jpg',
      alt: 'Music Concert',
      category: 'performance'
    },
    {
      id: 6,
      src: '/images/gallery/image6.jpg',
      alt: 'Cultural Exhibition',
      category: 'exhibition'
    }
  ];
  
  const openModal = (image: GalleryImage): void => {
    setSelectedImage(image);
  };
  
  const closeModal = (): void => {
    setSelectedImage(null);
  };

  return (
    <div>
      <section className="bg-gray-200 py-16 mb-12 text-center mt-[-70px] flex justify-center items-center h-70">
        <div className="w-[90%] max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Gallery</h1>
          <p className="text-lg">Explore moments from our events and activities</p>
        </div>
      </section>
      
      <section className="py-12">
        <div className="w-[90%] max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map(image => (
              <div 
                key={image.id} 
                className="relative rounded overflow-hidden cursor-pointer h-[200px] group"
                onClick={() => openModal(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 transform translate-y-full transition-all duration-300 group-hover:translate-y-0">
                  <p>{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-[80%] max-h-[80vh]"
            onClick={e => e.stopPropagation()}
          >
            <span 
              className="absolute -top-8 right-0 text-white text-3xl cursor-pointer" 
              onClick={closeModal}
            >
              &times;
            </span>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[70vh] block" 
            />
            <p className="text-white text-center mt-4">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

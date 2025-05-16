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
    <div className="gallery-page">
      <section className="page-header">
        <div className="container">
          <h1>Gallery</h1>
          <p>Explore moments from our events and activities</p>
        </div>
      </section>
      
      <section className="gallery-content">
        <div className="container">
          <div className="gallery-grid">
            {galleryImages.map(image => (
              <div 
                key={image.id} 
                className="gallery-item"
                onClick={() => openModal(image)}
              >
                <img src={image.src} alt={image.alt} />
                <div className="image-overlay">
                  <p>{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <p>{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

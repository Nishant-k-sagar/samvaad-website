import type { Event, TeamMember, GalleryImage } from '../types';

/**
 * Mock API service for the Samvaad website
 * In a real application, this would make actual API calls
 */
class ApiService {
  /**
   * Fetch all events
   */
  async getEvents(): Promise<Event[]> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: 'Annual Cultural Festival',
            date: 'June 15, 2025',
            category: 'festival',
            image: '/images/events/festival.jpg',
            description: 'Join us for a day of music, dance, and cultural celebrations!'
          },
          {
            id: 2,
            title: 'Poetry Night',
            date: 'May 28, 2025',
            category: 'literature',
            image: '/images/events/poetry.jpg',
            description: 'An evening of soulful poetry and literary discussions.'
          },
          {
            id: 3,
            title: 'Classical Dance Workshop',
            date: 'July 10, 2025',
            category: 'workshop',
            image: '/images/events/dance.jpg',
            description: 'Learn the basics of classical dance forms from expert dancers.'
          },
          {
            id: 4,
            title: 'Art Exhibition',
            date: 'August 5-10, 2025',
            category: 'exhibition',
            image: '/images/events/art.jpg',
            description: 'Showcasing works from talented local artists.'
          }
        ]);
      }, 500);
    });
  }

  /**
   * Fetch team members
   */
  async getTeamMembers(): Promise<TeamMember[]> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: 'Priya Sharma',
            role: 'President',
            image: '/images/team/member1.jpg',
            bio: 'Priya is a passionate cultural advocate with 5 years of experience in organizing cultural events.'
          },
          {
            id: 2,
            name: 'Rahul Verma',
            role: 'Vice President',
            image: '/images/team/member2.jpg',
            bio: 'Rahul is a literature enthusiast who brings creative ideas to our events and activities.'
          },
          // More members...
        ]);
      }, 500);
    });
  }

  /**
   * Fetch gallery images
   */
  async getGalleryImages(): Promise<GalleryImage[]> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
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
          // More images...
        ]);
      }, 500);
    });
  }

  /**
   * Submit contact form
   */
  async submitContactForm(): Promise<{ success: boolean; message: string }> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Thank you for your message! We will get back to you soon.'
        });
      }, 800);
    });
  }
}

export default new ApiService();

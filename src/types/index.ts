export interface Event {
    id: number;
    title: string;
    date: string;
    category?: string;
    image: string;
    description: string;
  }
  
  export interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    bio?: string;
  }
  
  export interface GalleryImage {
    id: number;
    src: string;
    alt: string;
    category: string;
  }
  
  export interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  
  export interface FormStatus {
    submitted: boolean;
    success: boolean;
    message: string;
  }
  
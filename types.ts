export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Starters' | 'Mains' | 'Desserts' | 'Drinks';
  image: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  url: string; // Image URL or YouTube Embed URL
  category: 'Food' | 'Interior' | 'Events';
  title: string;
}

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  requests: string;
}
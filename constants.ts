import { MenuItem, GalleryItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 's1',
    name: 'Semitas Napoles',
    description: 'Crispy pastry layered with wild mushrooms and truffle cream.',
    price: 110,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's2',
    name: 'Eoro Dalolor',
    description: 'Seared scallops served on a bed of pea purée with crispy pancetta.',
    price: 145,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's3',
    name: 'Carpaccio Di Manzo',
    description: 'Thinly sliced beef tenderloin, parmesan, capers, and olive oil.',
    price: 130,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1546252988-5c4bc9103c20?auto=format&fit=crop&w=600&q=80'
  },
  // Mains
  {
    id: 'm1',
    name: 'Eoro lodales',
    description: 'Pan-seared sea bass with asparagus risotto and saffron sauce.',
    price: 280,
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'm2',
    name: 'Thue Flates',
    description: 'Grilled ribeye steak (300g) with rosemary potatoes and peppercorn sauce.',
    price: 350,
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'm3',
    name: 'Lamb Shank',
    description: 'Slow-cooked lamb shank in red wine reduction with mash.',
    price: 320,
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1544511916-0148ccdeb877?auto=format&fit=crop&w=600&q=80'
  },
  // Desserts
  {
    id: 'd1',
    name: 'Chocolate Fondant',
    description: 'Warm chocolate cake with a molten center and vanilla bean ice cream.',
    price: 95,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'd2',
    name: 'Crème Brûlée',
    description: 'Classic French custard with a caramelized sugar crust.',
    price: 85,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=600&q=80'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    category: 'Interior',
    title: 'Main Dining Hall'
  },
  {
    id: 'g2',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80',
    category: 'Food',
    title: 'Signature Dish'
  },
  {
    id: 'g3',
    type: 'video',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1', // Placeholder video
    category: 'Events',
    title: 'Summer Gala'
  },
  {
    id: 'g4',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&w=1000&q=80',
    category: 'Food',
    title: 'Plating Art'
  }
];

export const PHONE_NUMBER = "+27711479378"; // For WhatsApp orders


export const BRAND = { 
  name: 'LadyP Kitchen', 
  tagline: 'Chefs at Your Service' 
};

// Social Media & Contact Links
export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/ladykitchen',
  linkedin: 'https://www.linkedin.com/in/ladykitchen',
  youtube: 'https://www.youtubecom/@ladykitchen',
  email: 'paledenis47@gmail.com',
  phone: '+27 (0)71 147 9378',
  address: '123 Sandton Drive, Johannesburg'
};
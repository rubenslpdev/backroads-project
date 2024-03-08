import tours1 from './images/tour-1.jpeg';
import tours2 from './images/tour-2.jpeg';
import tours3 from './images/tour-3.jpeg';
import tours4 from './images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'http://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'http://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'http://www.squarespace.com', icon: 'fab fa-squarespace' },
];

export const services = [
  { id: 1, icon: 'fas fa-wallet fa-fw', title: 'saving money', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.' },
  { id: 2, icon: 'fas fa-tree fa-fw', title: 'endless hiking', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.' },
  { id: 3, icon: 'fas fa-socks fa-fw', title: 'amazing comfort', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.' },
];

export const tours = [
  {
    id: 1,
    image: tours1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',

    location: 'china',
    duration: 6,
    cost: 276,
  },

  {
    id: 2,
    image: tours2,
    date: 'august 26th, 2020',
    title: 'amazon river',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'brazil',
    duration: 13,
    cost: 5467,
  },

  {
    id: 3,
    image: tours3,
    date: 'august 26th, 2020',
    title: 'eifel tower',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',

    location: 'france',
    duration: 2,
    cost: 887,
  },

  {
    id: 4,
    image: tours4,
    date: 'august 26th, 2020',
    title: 'buckinham palace',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',

    location: 'england',
    duration: 5,
    cost: 3456,
  },
];

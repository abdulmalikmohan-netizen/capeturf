export interface Product {
  id: string;
  name: string;
  pileHeight: string;
  price: string;
  oldPrice?: string;
  images: string[];
  description: string;
  onSale: boolean;
  specifications?: {
    stitchRate?: string;
    density?: string;
    warranty?: string;
    application?: string;
  };
}

export const products: Product[] = [
  {
    id: '13mm-multisport-astroturf',
    name: '13mm Multisport Astroturf',
    pileHeight: '13mm',
    price: 'R 319.99',
    images: [
      'https://capeturf.co.za/cdn/shop/files/IMG_6486_e8edbdc0-b400-44ee-97da-4502a626a080.jpg?v=1745185992&width=800'
    ],
    description: 'High-performance multisport surface, ideal for putting greens and sports areas. Durable and designed for heavy use.',
    onSale: false,
    specifications: {
      stitchRate: '250 stitches/100cm',
      density: '63000 stitches/m2',
      warranty: '8 years',
      application: 'Sports/Putting Greens'
    }
  },
  {
    id: '20mm-cape-fern-artificial-grass',
    name: '20mm Cape Fern Artificial Grass',
    pileHeight: '20mm',
    price: 'R 169.99',
    oldPrice: 'R 199.99',
    images: [
      'https://capeturf.co.za/cdn/shop/files/IMG_6402.jpg?v=1745164073&width=800'
    ],
    description: 'A versatile and budget-friendly option for a neat, evergreen look. Perfect for low-traffic areas and balconies.',
    onSale: true,
    specifications: {
      stitchRate: '130 stitches/100cm',
      density: '13650 stitches/m2',
      warranty: '8 years',
      application: 'Landscape/Low traffic'
    }
  },
  {
    id: '25mm-cape-autumn-artificial-grass',
    name: '25mm Cape Autumn Artificial Grass',
    pileHeight: '25mm',
    price: 'R 199.99',
    oldPrice: 'R 209.99',
    images: [
      'https://capeturf.co.za/cdn/shop/files/IMG_6414.jpg?v=1745184147&width=800'
    ],
    description: 'Features a natural autumn thatch for a realistic, multi-tone appearance. Soft underfoot and visually stunning.',
    onSale: true,
    specifications: {
      stitchRate: '140 stitches/100cm',
      density: '14700 stitches/m2',
      warranty: '8 years',
      application: 'Landscape/Residential'
    }
  },
  {
    id: '25mm-cape-fern-artificial-grass',
    name: '25mm Cape Fern Artificial Grass',
    pileHeight: '25mm',
    price: 'R 199.99',
    oldPrice: 'R 209.99',
    images: [
      'https://capeturf.co.za/cdn/shop/files/IMG_6409.jpg?v=1745166667&width=800'
    ],
    description: 'Soft and durable, perfect for residential gardens and play areas. Provides a lush look with minimal maintenance.',
    onSale: true,
    specifications: {
      stitchRate: '140 stitches/100cm',
      density: '14700 stitches/m2',
      warranty: '8 years',
      application: 'Landscape/Residential'
    }
  },
  {
    id: '25mm-cape-spring-artificial-grass',
    name: '25mm Cape Spring Artificial Grass',
    pileHeight: '25mm',
    price: 'R 199.99',
    oldPrice: 'R 209.99',
    images: [
      'https://capeturf.co.za/cdn/shop/files/IMG_6412_9b0228d4-6e03-43c8-9a6c-41d4e234cf8b.jpg?v=1745183905&width=800'
    ],
    description: 'Bright and vibrant green tones that mimic a fresh spring lawn. Ideal for creating a lively outdoor space.',
    onSale: true,
    specifications: {
      stitchRate: '140 stitches/100cm',
      density: '14700 stitches/m2',
      warranty: '8 years',
      application: 'Landscape/Residential'
    }
  },
  {
    id: '30mm-cape-autumn-artificial-grass',
    name: '30mm Cape Autumn Artificial Grass',
    pileHeight: '30mm',
    price: 'R 239.99',
    oldPrice: 'R 249.99',
    images: [
      'https://capeturf.co.za/cdn/shop/files/IMG_6419.jpg?v=1745183436&width=800'
    ],
    description: 'Premium density with a longer pile for a more luxurious feel. The autumn thatch adds depth and realism.',
    onSale: true,
    specifications: {
      stitchRate: '160 stitches/100cm',
      density: '16800 stitches/m2',
      warranty: '8 years',
      application: 'Landscape/Residential'
    }
  },
  {
    id: '30mm-cape-fern-artificial-grass',
    name: '30mm Cape Fern Artificial Grass',
    pileHeight: '30mm',
    price: 'R 249.99',
    images: [
      'https://capeturf.co.za/cdn/shop/files/IMG_6425.jpg?v=1745182428&width=800'
    ],
    description: 'Superior comfort and resilience for high-traffic family gardens. Dense pile that stands up to play and pets.',
    onSale: false,
    specifications: {
      stitchRate: '170 stitches/100cm',
      density: '17850 stitches/m2',
      warranty: '8 years',
      application: 'Landscape/High traffic'
    }
  },
  {
    id: '30mm-cape-spring-artificial-grass',
    name: '30mm Cape Spring Artificial Grass',
    pileHeight: '30mm',
    price: 'R 239.99',
    oldPrice: 'R 249.99',
    images: [
      'https://capeturf.co.za/cdn/shop/files/IMG_6431.jpg?v=1745182861&width=800',
      'https://capeturf.co.za/cdn/shop/files/IMG_6432.jpg?v=1745182861&width=800',
      'https://capeturf.co.za/cdn/shop/files/IMG_6434.jpg?v=1745182861&width=800'
    ],
    description: 'Lush, dense, and vibrant—our top-selling 30mm option. Features firm blades that spring back well underfoot.',
    onSale: true,
    specifications: {
      stitchRate: '170 stitches/100cm',
      density: '17850 stitches/m2',
      warranty: '8 years',
      application: 'Landscape/Medium-High traffic'
    }
  },
  {
    id: '35mm-cape-summer-artificial-grass',
    name: '35mm Cape Summer Artificial Grass',
    pileHeight: '35mm',
    price: 'R 299.99',
    images: [
      'https://capeturf.co.za/cdn/shop/files/IMG_6441.jpg?v=1745184378&width=800'
    ],
    description: 'The ultimate in luxury and realism with a deep, soft pile. Perfect for high-end residential projects.',
    onSale: false,
    specifications: {
      stitchRate: '180 stitches/100cm',
      density: '18900 stitches/m2',
      warranty: '8 years',
      application: 'Landscape/Luxury Residential'
    }
  },
  {
    id: '40mm-cape-diamond-artificial-grass',
    name: '40mm Cape Diamond Artificial Grass',
    pileHeight: '40mm',
    price: 'R 319.99',
    images: [
      'https://capeturf.co.za/cdn/shop/files/IMG_6472.jpg?v=1745184742&width=800'
    ],
    description: 'Our thickest and most premium turf for a truly elite landscape. Unmatched density and comfort.',
    onSale: false,
    specifications: {
      stitchRate: '200 stitches/100cm',
      density: '21000 stitches/m2',
      warranty: '8 years',
      application: 'Landscape/Elite Residential'
    }
  },
];

import { url } from "inspector";

export let users = [
  { user_id: 1, name: 'John Doe', email: 'johndoe@example.com', password: 'password123' },
  { user_id: 2, name: 'Jane Smith', email: 'janesmith@example.com', password: 'password123' },
  { user_id: 3, name: 'Alice Johnson', email: 'alicejohnson@example.com', password: 'password123' },
  { user_id: 4, name: 'Robert Brown', email: 'robertbrown@example.com', password: 'password123' },
  { user_id: 5, name: 'Emily Davis', email: 'emilydavis@example.com', password: 'password123' }
];

export let reviews = [
  { review_id: 1, user_id: 1, exhibition_id: 1, rating: 5, comment: 'Absolutely amazing! The modern art pieces were very inspiring.' },
  { review_id: 2, user_id: 2, exhibition_id: 1, rating: 4, comment: 'Great exhibition, but a bit crowded.' },
  { review_id: 3, user_id: 3, exhibition_id: 1, rating: 5, comment: 'Loved it! A must-visit for art enthusiasts.' },
  { review_id: 4, user_id: 4, exhibition_id: 1, rating: 5, comment: 'Stunning art! Very well organized.' },
  { review_id: 5, user_id: 5, exhibition_id: 1, rating: 4, comment: 'Interesting pieces, but I wish there were more interactive exhibits.' },

  { review_id: 6, user_id: 1, exhibition_id: 2, rating: 5, comment: 'A fascinating journey through history. Very educational.' },
  { review_id: 7, user_id: 2, exhibition_id: 2, rating: 5, comment: 'Incredible artifacts and very well presented.' },
  { review_id: 8, user_id: 3, exhibition_id: 2, rating: 4, comment: 'Great exhibition, but it could use more multimedia displays.' },
  { review_id: 9, user_id: 4, exhibition_id: 2, rating: 5, comment: 'A must-see for history buffs!' },
  { review_id: 10, user_id: 5, exhibition_id: 2, rating: 5, comment: 'Very informative and well-organized.' },

  { review_id: 11, user_id: 1, exhibition_id: 3, rating: 5, comment: 'Mind-blowing innovations on display. Very impressive!' },
  { review_id: 12, user_id: 2, exhibition_id: 3, rating: 4, comment: 'Great fair, but some exhibits were too technical.' },
  { review_id: 13, user_id: 3, exhibition_id: 3, rating: 5, comment: 'Inspiring and educational. Loved the interactive exhibits.' },
  { review_id: 14, user_id: 4, exhibition_id: 3, rating: 5, comment: 'Amazing showcase of future technologies.' },
  { review_id: 15, user_id: 5, exhibition_id: 3, rating: 4, comment: 'Very interesting, but a bit overwhelming at times.' },

  { review_id: 16, user_id: 1, exhibition_id: 4, rating: 5, comment: 'Beautiful traditional art. Very calming and inspiring.' },
  { review_id: 17, user_id: 2, exhibition_id: 4, rating: 4, comment: 'Lovely exhibition, but it could use more explanations on the art pieces.' },
  { review_id: 18, user_id: 3, exhibition_id: 4, rating: 5, comment: 'A wonderful display of Korean craftsmanship.' },
  { review_id: 19, user_id: 4, exhibition_id: 4, rating: 5, comment: 'Stunning art and very informative.' },
  { review_id: 20, user_id: 5, exhibition_id: 4, rating: 4, comment: 'Great exhibition, but a bit small.' },

  { review_id: 21, user_id: 1, exhibition_id: 5, rating: 5, comment: 'Incredible innovations on display. Very futuristic!' },
  { review_id: 22, user_id: 2, exhibition_id: 5, rating: 5, comment: 'Loved it! Very inspiring and educational.' },
  { review_id: 23, user_id: 3, exhibition_id: 5, rating: 4, comment: 'Great exhibition, but some exhibits were not working.' },
  { review_id: 24, user_id: 4, exhibition_id: 5, rating: 5, comment: 'A must-visit for tech enthusiasts.' },
  { review_id: 25, user_id: 5, exhibition_id: 5, rating: 5, comment: 'Very informative and well-organized.' },

  { review_id: 1, user_id: 1, exhibition_id: 6, rating: 5, comment: 'Absolutely amazing! The modern art pieces were very inspiring.' },
  { review_id: 2, user_id: 2, exhibition_id: 6, rating: 4, comment: 'Great exhibition, but a bit crowded.' },
  { review_id: 3, user_id: 3, exhibition_id: 6, rating: 5, comment: 'Loved it! A must-visit for art enthusiasts.' },
  { review_id: 4, user_id: 4, exhibition_id: 6, rating: 5, comment: 'Stunning art! Very well organized.' },
  { review_id: 5, user_id: 5, exhibition_id: 6, rating: 4, comment: 'Interesting pieces, but I wish there were more interactive exhibits.' },

  { review_id: 6, user_id: 1, exhibition_id: 7, rating: 5, comment: 'A fascinating journey through history. Very educational.' },
  { review_id: 7, user_id: 2, exhibition_id: 7, rating: 5, comment: 'Incredible artifacts and very well presented.' },
  { review_id: 8, user_id: 3, exhibition_id: 7, rating: 4, comment: 'Great exhibition, but it could use more multimedia displays.' },
  { review_id: 9, user_id: 4, exhibition_id: 7, rating: 5, comment: 'A must-see for history buffs!' },
  { review_id: 10, user_id: 5, exhibition_id: 7, rating: 5, comment: 'Very informative and well-organized.' },

  { review_id: 11, user_id: 1, exhibition_id: 8, rating: 5, comment: 'Mind-blowing innovations on display. Very impressive!' },
  { review_id: 12, user_id: 2, exhibition_id: 8, rating: 4, comment: 'Great fair, but some exhibits were too technical.' },
  { review_id: 13, user_id: 3, exhibition_id: 8, rating: 5, comment: 'Inspiring and educational. Loved the interactive exhibits.' },
  { review_id: 14, user_id: 4, exhibition_id: 8, rating: 5, comment: 'Amazing showcase of future technologies.' },
  { review_id: 15, user_id: 5, exhibition_id: 8, rating: 4, comment: 'Very interesting, but a bit overwhelming at times.' },

  { review_id: 16, user_id: 1, exhibition_id: 9, rating: 5, comment: 'Beautiful traditional art. Very calming and inspiring.' },
  { review_id: 17, user_id: 2, exhibition_id: 9, rating: 4, comment: 'Lovely exhibition, but it could use more explanations on the art pieces.' },
  { review_id: 18, user_id: 3, exhibition_id: 9, rating: 5, comment: 'A wonderful display of Korean craftsmanship.' },
  { review_id: 19, user_id: 4, exhibition_id: 9, rating: 5, comment: 'Stunning art and very informative.' },
  { review_id: 20, user_id: 5, exhibition_id: 9, rating: 4, comment: 'Great exhibition, but a bit small.' },

  { review_id: 21, user_id: 1, exhibition_id: 10, rating: 5, comment: 'Incredible innovations on display. Very futuristic!' },
  { review_id: 22, user_id: 2, exhibition_id: 10, rating: 5, comment: 'Loved it! Very inspiring and educational.' },
  { review_id: 23, user_id: 3, exhibition_id: 10, rating: 4, comment: 'Great exhibition, but some exhibits were not working.' },
  { review_id: 24, user_id: 4, exhibition_id: 10, rating: 5, comment: 'A must-visit for tech enthusiasts.' },
  { review_id: 25, user_id: 5, exhibition_id: 10, rating: 5, comment: 'Very informative and well-organized.' },

  { review_id: 1, user_id: 1, exhibition_id: 11, rating: 5, comment: 'Absolutely amazing! The modern art pieces were very inspiring.' },
  { review_id: 2, user_id: 2, exhibition_id: 11, rating: 4, comment: 'Great exhibition, but a bit crowded.' },
  { review_id: 3, user_id: 3, exhibition_id: 11, rating: 5, comment: 'Loved it! A must-visit for art enthusiasts.' },
  { review_id: 4, user_id: 4, exhibition_id: 11, rating: 5, comment: 'Stunning art! Very well organized.' },
  { review_id: 5, user_id: 5, exhibition_id: 11, rating: 4, comment: 'Interesting pieces, but I wish there were more interactive exhibits.' },

  { review_id: 6, user_id: 1, exhibition_id: 12, rating: 5, comment: 'A fascinating journey through history. Very educational.' },
  { review_id: 7, user_id: 2, exhibition_id: 12, rating: 5, comment: 'Incredible artifacts and very well presented.' },
  { review_id: 8, user_id: 3, exhibition_id: 12, rating: 4, comment: 'Great exhibition, but it could use more multimedia displays.' },
  { review_id: 9, user_id: 4, exhibition_id: 12, rating: 5, comment: 'A must-see for history buffs!' },
  { review_id: 10, user_id: 5, exhibition_id: 12, rating: 5, comment: 'Very informative and well-organized.' },

  { review_id: 11, user_id: 1, exhibition_id: 13, rating: 5, comment: 'Mind-blowing innovations on display. Very impressive!' },
  { review_id: 12, user_id: 2, exhibition_id: 13, rating: 4, comment: 'Great fair, but some exhibits were too technical.' },
  { review_id: 13, user_id: 3, exhibition_id: 13, rating: 5, comment: 'Inspiring and educational. Loved the interactive exhibits.' },
  { review_id: 14, user_id: 4, exhibition_id: 13, rating: 5, comment: 'Amazing showcase of future technologies.' },
  { review_id: 15, user_id: 5, exhibition_id: 13, rating: 4, comment: 'Very interesting, but a bit overwhelming at times.' },

  { review_id: 16, user_id: 1, exhibition_id: 14, rating: 5, comment: 'Beautiful traditional art. Very calming and inspiring.' },
  { review_id: 17, user_id: 2, exhibition_id: 14, rating: 4, comment: 'Lovely exhibition, but it could use more explanations on the art pieces.' },
  { review_id: 18, user_id: 3, exhibition_id: 14, rating: 5, comment: 'A wonderful display of Korean craftsmanship.' },
  { review_id: 19, user_id: 4, exhibition_id: 14, rating: 5, comment: 'Stunning art and very informative.' },
  { review_id: 20, user_id: 5, exhibition_id: 14, rating: 4, comment: 'Great exhibition, but a bit small.' },

  { review_id: 21, user_id: 1, exhibition_id: 15, rating: 5, comment: 'Incredible innovations on display. Very futuristic!' },
  { review_id: 22, user_id: 2, exhibition_id: 15, rating: 5, comment: 'Loved it! Very inspiring and educational.' },
  { review_id: 23, user_id: 3, exhibition_id: 15, rating: 4, comment: 'Great exhibition, but some exhibits were not working.' },
  { review_id: 24, user_id: 4, exhibition_id: 15, rating: 5, comment: 'A must-visit for tech enthusiasts.' },
  { review_id: 25, user_id: 5, exhibition_id: 15, rating: 5, comment: 'Very informative and well-organized.' },

  { review_id: 1, user_id: 1, exhibition_id: 16, rating: 5, comment: 'Absolutely amazing! The modern art pieces were very inspiring.' },
  { review_id: 2, user_id: 2, exhibition_id: 16, rating: 4, comment: 'Great exhibition, but a bit crowded.' },
  { review_id: 3, user_id: 3, exhibition_id: 16, rating: 5, comment: 'Loved it! A must-visit for art enthusiasts.' },
  { review_id: 4, user_id: 4, exhibition_id: 16, rating: 5, comment: 'Stunning art! Very well organized.' },
  { review_id: 5, user_id: 5, exhibition_id: 16, rating: 4, comment: 'Interesting pieces, but I wish there were more interactive exhibits.' },

  { review_id: 6, user_id: 1, exhibition_id: 17, rating: 5, comment: 'A fascinating journey through history. Very educational.' },
  { review_id: 7, user_id: 2, exhibition_id: 17, rating: 5, comment: 'Incredible artifacts and very well presented.' },
  { review_id: 8, user_id: 3, exhibition_id: 17, rating: 4, comment: 'Great exhibition, but it could use more multimedia displays.' },
  { review_id: 9, user_id: 4, exhibition_id: 17, rating: 5, comment: 'A must-see for history buffs!' },
  { review_id: 10, user_id: 5, exhibition_id: 17, rating: 5, comment: 'Very informative and well-organized.' },

  { review_id: 11, user_id: 1, exhibition_id: 18, rating: 5, comment: 'Mind-blowing innovations on display. Very impressive!' },
  { review_id: 12, user_id: 2, exhibition_id: 18, rating: 4, comment: 'Great fair, but some exhibits were too technical.' },
  { review_id: 13, user_id: 3, exhibition_id: 18, rating: 5, comment: 'Inspiring and educational. Loved the interactive exhibits.' },
  { review_id: 14, user_id: 4, exhibition_id: 18, rating: 5, comment: 'Amazing showcase of future technologies.' },
  { review_id: 15, user_id: 5, exhibition_id: 18, rating: 4, comment: 'Very interesting, but a bit overwhelming at times.' },

  { review_id: 16, user_id: 1, exhibition_id: 19, rating: 5, comment: 'Beautiful traditional art. Very calming and inspiring.' },
  { review_id: 17, user_id: 2, exhibition_id: 19, rating: 4, comment: 'Lovely exhibition, but it could use more explanations on the art pieces.' },
  { review_id: 18, user_id: 3, exhibition_id: 19, rating: 5, comment: 'A wonderful display of Korean craftsmanship.' },
  { review_id: 19, user_id: 4, exhibition_id: 19, rating: 5, comment: 'Stunning art and very informative.' },
  { review_id: 20, user_id: 5, exhibition_id: 19, rating: 4, comment: 'Great exhibition, but a bit small.' },

  { review_id: 21, user_id: 1, exhibition_id: 20, rating: 5, comment: 'Incredible innovations on display. Very futuristic!' },
  { review_id: 22, user_id: 2, exhibition_id: 20, rating: 5, comment: 'Loved it! Very inspiring and educational.' },
  { review_id: 23, user_id: 3, exhibition_id: 20, rating: 4, comment: 'Great exhibition, but some exhibits were not working.' },
  { review_id: 24, user_id: 4, exhibition_id: 20, rating: 5, comment: 'A must-visit for tech enthusiasts.' },
  { review_id: 25, user_id: 5, exhibition_id: 20, rating: 5, comment: 'Very informative and well-organized.' },
];

export const categories = [
  { category_id: 1, name: 'Art' },
  { category_id: 2, name: 'History' },
  { category_id: 3, name: 'Science' },
  { category_id: 4, name: 'Technology' }
];

export const themes = [
  { theme_id: 1, name: 'Modern' },
  { theme_id: 2, name: 'Ancient' },
  { theme_id: 3, name: 'Innovative' },
  { theme_id: 4, name: 'Traditional' }
];

export const audience_types = [
  { audience_type_id: 1, name: 'Family' },
  { audience_type_id: 2, name: 'Couple' },
  { audience_type_id: 3, name: 'Friends' },
  { audience_type_id: 4, name: 'Solo' }
];

export const location_types = [
  { location_type_id: 1, name: 'Seoul' },
  { location_type_id: 2, name: 'Busan' },
  { location_type_id: 3, name: 'Daejeon' },
  { location_type_id: 4, name: 'Gyeongju' },
  { location_type_id: 5, name: 'Jeonju' },
  { location_type_id: 6, name: 'Incheon' },
  { location_type_id: 7, name: 'Daegu' },
  { location_type_id: 8, name: 'Suwon' },
  { location_type_id: 9, name: 'Gwangju' },
  { location_type_id: 10, name: 'Jeju' },
];

export const exhibitions = [
  {
    exhibition_id: 1,
    name: 'Modern Art Expo',
    description: 'An exhibition showcasing modern art from various renowned artists around the world. Visitors will experience the latest trends and styles in contemporary art, offering a fresh perspective on creativity and innovation. \n\nThis expo provides an excellent opportunity for art enthusiasts to engage with cutting-edge works and explore the boundaries of artistic expression. Whether you are an avid collector or a casual observer, the Modern Art Expo promises to inspire and captivate with its diverse range of exhibits.',
    category_id: 1,
    theme_id: 1,
    audience_type_id: 1,
    price: 15000,
    location: 'Busan Art Center',
    location_type_id: 2,
    start_date: '2024-08-01',
    end_date: '2024-09-15',
    image_url: 'https://fake-api-vervel.s3.ap-southeast-2.amazonaws.com/images/expo001.png',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    exhibition_id: 2,
    name: 'Ancient History Exhibition',
    description: 'Explore the rich ancient history of Korea through this comprehensive exhibition. The exhibit features artifacts, documents, and artworks that narrate the story of Korea\'s past, from prehistoric times to the end of the Joseon Dynasty. \n\nDetailed descriptions and interactive displays provide a deeper understanding of the cultural and historical significance of the items on display. This exhibition is a must-visit for history buffs and anyone interested in learning more about Korea\'s storied past.',
    category_id: 2,
    theme_id: 2,
    audience_type_id: 2,
    price: 20000,
    location: 'Gyeongju National Museum',
    location_type_id: 4,
    start_date: '2024-09-01',
    end_date: '2024-10-15',
    image_url: 'https://fake-api-vervel.s3.ap-southeast-2.amazonaws.com/images/expo002new.png',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    exhibition_id: 3,
    name: 'Science and Innovation Fair',
    description: 'A fair featuring the latest advancements in science and technology. Attendees will have the chance to witness groundbreaking inventions and cutting-edge research that are shaping the future of our world. \n\nInteractive exhibits, demonstrations, and presentations from leading scientists and innovators make this fair an educational and inspiring experience. Ideal for students, professionals, and curious minds alike, the Science and Innovation Fair is a celebration of human ingenuity and progress.',
    category_id: 3,
    theme_id: 3,
    audience_type_id: 3,
    price: 10000,
    location: 'Daejeon Science Museum',
    location_type_id: 3,
    start_date: '2024-10-01',
    end_date: '2024-11-15',
    image_url: 'https://fake-api-vervel.s3.ap-southeast-2.amazonaws.com/images/expo003.png',
    updated_at: new Date().toISOString()
  },
  {
    exhibition_id: 4,
    name: 'Traditional Korean Art',
    description: 'An exhibition of traditional Korean art that showcases the beauty and intricacy of historical Korean craftsmanship. Visitors will encounter a variety of artworks including paintings, pottery, and textiles that highlight Korea\'s rich artistic heritage. \n\nThe exhibition offers a glimpse into the techniques and materials used by Korean artists over the centuries, providing a unique educational experience. Perfect for art lovers and cultural enthusiasts, this exhibition celebrates the timeless elegance of Korean art.',
    category_id: 1,
    theme_id: 4,
    audience_type_id: 4,
    price: 0,
    location: 'Jeonju Hanok Village',
    location_type_id: 5,
    start_date: '2024-11-01',
    end_date: '2024-12-15',
    image_url: 'https://fake-api-vervel.s3.ap-southeast-2.amazonaws.com/images/expo004.png',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    exhibition_id: 5,
    name: 'Modern Innovations',
    description: 'A showcase of modern technological innovations that are transforming various industries. From AI and robotics to sustainable energy solutions, this exhibition presents a fascinating look at the future of technology. \n\nVisitors will have the opportunity to interact with prototypes and models, attend informative sessions, and meet the innovators behind these breakthroughs. This event is ideal for tech enthusiasts and professionals looking to stay ahead of the curve in their respective fields.',
    category_id: 4,
    theme_id: 3,
    audience_type_id: 2,
    price: 18000,
    location: 'Incheon Tech Park',
    location_type_id: 6,
    start_date: '2024-12-01',
    end_date: '2025-01-15',
    image_url: 'https://fake-api-vervel.s3.ap-southeast-2.amazonaws.com/images/expo005.png',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    exhibition_id: 6,
    name: 'Historical Artifacts',
    description: 'An exhibition of artifacts from various historical periods, offering a tangible connection to the past. The display includes ancient tools, ceremonial objects, and everyday items that reveal the lifestyles and cultures of previous generations. \n\nWith detailed information and guided tours available, visitors can gain a deeper appreciation for the significance and context of these artifacts. This exhibition is perfect for those with a keen interest in archaeology and history.',
    category_id: 2,
    theme_id: 2,
    audience_type_id: 1,
    price: 15000,
    location: 'Seoul National Museum',
    location_type_id: 1,
    start_date: '2024-08-01',
    end_date: '2024-09-15',
    image_url: 'https://fake-api-vervel.s3.ap-southeast-2.amazonaws.com/images/expo006.png',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    exhibition_id: 7,
    name: 'Innovative Designs',
    description: 'A display of innovative designs and concepts from leading designers and architects. This exhibition explores the intersection of functionality and aesthetics, featuring projects that push the boundaries of conventional design. \n\nFrom futuristic buildings to smart home solutions, the exhibits demonstrate how innovative thinking can address modern challenges. Ideal for design professionals and enthusiasts, this event inspires creativity and showcases the potential of design to improve our lives.',
    category_id: 4,
    theme_id: 3,
    audience_type_id: 3,
    price: 20000,
    location: 'Seoul Design Center',
    location_type_id: 1,
    start_date: '2024-09-01',
    end_date: '2024-10-15',
    image_url: 'https://fake-api-vervel.s3.ap-southeast-2.amazonaws.com/images/expo007.png',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    exhibition_id: 8,
    name: 'Family Science Day',
    description: 'A fun-filled day of science activities for families, designed to spark curiosity and foster a love for science in children. The event features hands-on experiments, educational workshops, and exciting demonstrations. \n\nParents and kids can explore different fields of science together, making it a perfect family outing. From chemistry experiments to physics demonstrations, Family Science Day offers a wide range of activities that are both educational and entertaining.',
    category_id: 3,
    theme_id: 1,
    audience_type_id: 1,
    price: 10000,
    location: 'Daegu Science Center',
    location_type_id: 7,
    start_date: '2024-10-01',
    end_date: '2024-11-15',
    image_url: 'https://fake-api-vervel.s3.ap-southeast-2.amazonaws.com/images/expo008.png',
    updated_at: new Date().toISOString()
  },
  {
    exhibition_id: 9,
    name: 'Romantic Art Evenings',
    description: 'An evening of romantic art exhibitions, perfect for couples looking to enjoy a night out. The exhibition features works that explore themes of love and romance, creating an intimate and enchanting atmosphere. \n\nIn addition to the art, there are special events such as wine tastings and live music, making it a complete evening experience. Whether you are an art lover or just looking for a unique date night, Romantic Art Evenings offers a memorable experience.',
    category_id: 1,
    theme_id: 1,
    audience_type_id: 2,
    price: 22000,
    location: 'Busan Art Center',
    location_type_id: 2,
    start_date: '2024-11-01',
    end_date: '2024-12-15',
    image_url: 'https://fake-api-vervel.s3.ap-southeast-2.amazonaws.com/images/expo009.png',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    exhibition_id: 10,
    name: 'Innovative Science Expo',
    description: 'Explore the latest innovations in science through interactive exhibits and engaging presentations. The expo covers a wide range of topics, including renewable energy, space exploration, and biomedical advancements. \n\nMeet scientists and innovators who are at the forefront of their fields and learn about the research that is shaping the future. This expo is ideal for students, professionals, and anyone with a keen interest in science and technology.',
    category_id: 3,
    theme_id: 3,
    audience_type_id: 3,
    price: 18000,
    location: 'Seoul Science Park',
    location_type_id: 1,
    start_date: '2024-12-01',
    end_date: '2025-01-15',
    image_url: 'https://fake-api-vervel.s3.ap-southeast-2.amazonaws.com/images/expo0010.png',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    exhibition_id: 11,
    name: 'Traditional Crafts Fair',
    description: 'A fair showcasing traditional crafts from various regions of Korea. Visitors can see and purchase handmade items, including pottery, textiles, and woodwork, created by skilled artisans. \n\nThe fair provides an opportunity to learn about the techniques and cultural significance of these crafts through live demonstrations and workshops. It is a great event for those interested in preserving and appreciating Korean cultural heritage.',
    category_id: 1,
    theme_id: 4,
    audience_type_id: 4,
    price: 0,
    location: 'Suwon Cultural Center',
    location_type_id: 8,
    start_date: '2024-08-01',
    end_date: '2024-09-15',
    image_url: 'https://fake-api-vervel.s3.ap-southeast-2.amazonaws.com/images/expo0011.png',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    exhibition_id: 12,
    name: 'Historical Figures Exhibition',
    description: 'Learn about the lives and contributions of important historical figures in Korea through this engaging exhibition. The display includes portraits, personal belongings, and multimedia presentations that bring these figures to life. \n\nVisitors can gain insights into the impact these individuals had on Korean society and their lasting legacies. This exhibition is a must-see for history enthusiasts and anyone interested in learning about the people who shaped Korea.',
    category_id: 2,
    theme_id: 2,
    audience_type_id: 1,
    price: 20000,
    location: 'Gwangju History Museum',
    location_type_id: 9,
    start_date: '2024-09-01',
    end_date: '2024-10-15',
    image_url: 'https://fake-api-vervel.s3.ap-southeast-2.amazonaws.com/images/expo0012.png',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    exhibition_id: 13,
    name: 'Technology and You',
    description: 'An exhibition exploring the role of technology in our daily lives and its impact on society. The display includes interactive exhibits that demonstrate how various technologies work and their practical applications. \n\nVisitors can learn about the latest technological trends and innovations, and participate in hands-on activities that make learning fun and engaging. This exhibition is perfect for those interested in understanding the intersection of technology and everyday life.',
    category_id: 4,
    theme_id: 3,
    audience_type_id: 3,
    price: 15000,
    location: 'Incheon Tech Park',
    location_type_id: 6,
    start_date: '2024-10-01',
    end_date: '2024-12-15',
    image_url: 'https://fake-api-vervel.s3.ap-southeast-2.amazonaws.com/images/expo0013.png',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    exhibition_id: 14,
    name: 'Science for Kids',
    description: 'A kid-friendly science exhibition designed to inspire and educate young minds. The exhibition features interactive displays and hands-on activities that cover a wide range of scientific topics, from biology to space exploration. \n\nParents and children can learn together, making it a fun and educational outing for the whole family. Science for Kids aims to spark a lifelong interest in science and exploration in its young visitors.',
    category_id: 3,
    theme_id: 1,
    audience_type_id: 1,
    price: 8000,
    location: 'Seoul Kids Science Center',
    location_type_id: 1,
    start_date: '2024-11-01',
    end_date: '2024-12-15',
    image_url: 'https://fake-api-vervel.s3.ap-southeast-2.amazonaws.com/images/expo0014.png',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    exhibition_id: 15,
    name: 'Couples Art Night',
    description: 'A special art exhibition designed for couples to enjoy together. The event features romantic-themed artworks and offers a cozy, intimate atmosphere for visitors. \n\nIn addition to the art, there are special activities such as guided tours, live music, and wine tastings, making it a perfect date night experience. Couples Art Night is a unique way to spend an evening with your partner while appreciating beautiful art.',
    category_id: 1,
    theme_id: 1,
    audience_type_id: 2,
    price: 22000,
    location: 'Jeju Art Museum',
    location_type_id: 10,
    start_date: '2024-12-01',
    end_date: '2025-01-15',
    image_url: 'https://fake-api-vervel.s3.ap-southeast-2.amazonaws.com/images/expo0015.png',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    exhibition_id: 16,
    name: 'Innovative Technologies Fair',
    description: 'Showcasing cutting-edge technologies from various industries, this fair offers a glimpse into the future of innovation. Exhibits include advancements in AI, renewable energy, and smart devices that are set to revolutionize our world. \n\nAttendees can interact with prototypes, attend informative sessions, and network with industry leaders. The Innovative Technologies Fair is an excellent opportunity for professionals and tech enthusiasts to stay updated on the latest trends.',
    category_id: 4,
    theme_id: 3,
    audience_type_id: 3,
    price: 18000,
    location: 'Busan Tech Expo Center',
    location_type_id: 2,
    start_date: '2024-08-01',
    end_date: '2024-09-15',
    image_url: 'https://fake-api-vervel.s3.ap-southeast-2.amazonaws.com/images/expo0016.png',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    exhibition_id: 17,
    name: 'History of Korea',
    description: 'An exhibition exploring Korea\'s rich history through artifacts, documents, and multimedia presentations. The display covers significant events and periods in Korean history, offering a comprehensive overview of the country\'s past. \n\nVisitors can learn about the cultural, political, and social developments that have shaped Korea into the nation it is today. This exhibition is ideal for anyone interested in gaining a deeper understanding of Korean history.',
    category_id: 2,
    theme_id: 2,
    audience_type_id: 1,
    price: 20000,
    location: 'Daejeon History Museum',
    location_type_id: 3,
    start_date: '2024-09-01',
    end_date: '2024-10-15',
    image_url: 'https://fake-api-vervel.s3.ap-southeast-2.amazonaws.com/images/expo0017.png',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    exhibition_id: 18,
    name: 'Family Tech Day',
    description: 'A fun day of technology for the whole family, featuring interactive exhibits and hands-on activities. Visitors can explore various fields of technology, from robotics to virtual reality, and learn about their real-world applications. \n\nFamily Tech Day aims to make technology accessible and enjoyable for all ages, fostering a love for innovation and discovery. It is a perfect outing for families looking to spend a day learning and having fun together.',
    category_id: 4,
    theme_id: 1,
    audience_type_id: 1,
    price: 15000,
    location: 'Seoul Tech Park',
    location_type_id: 1,
    start_date: '2024-10-01',
    end_date: '2024-11-15',
    image_url: 'https://fake-api-vervel.s3.ap-southeast-2.amazonaws.com/images/expo0018.png',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    exhibition_id: 19,
    name: 'Friends Art Night',
    description: 'An art exhibition designed for friends to enjoy together. The event features a variety of artworks that cater to different tastes, creating a vibrant and lively atmosphere. \n\nIn addition to the art, there are interactive activities, live performances, and food stalls, making it a fun and engaging experience. Friends Art Night is a great way to spend an evening with friends while appreciating diverse forms of art.',
    category_id: 1,
    theme_id: 1,
    audience_type_id: 3,
    price: 22000,
    location: 'Busan Art Center',
    location_type_id: 2,
    start_date: '2024-11-01',
    end_date: '2024-12-15',
    image_url: 'https://fake-api-vervel.s3.ap-southeast-2.amazonaws.com/images/expo0019.png',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    exhibition_id: 20,
    name: 'Innovative Art Expo',
    description: 'Showcasing innovative and modern art from emerging and established artists. The exhibition features works that push the boundaries of traditional art forms, offering new perspectives and techniques. \n\nVisitors can explore a variety of media, including digital art, installations, and mixed media, making it a dynamic and immersive experience. The Innovative Art Expo is a must-visit for those interested in contemporary art and new artistic expressions.',
    category_id: 1,
    theme_id: 3,
    audience_type_id: 4,
    price: 18000,
    location: 'Incheon Art Park',
    location_type_id: 6,
    start_date: '2024-12-01',
    end_date: '2025-01-15',
    image_url: 'https://fake-api-vervel.s3.ap-southeast-2.amazonaws.com/images/expo0020.png',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

export let wishlists = [];
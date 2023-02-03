const books = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    slug: 'harry-potter-philosophers-stone',
    coverSrc:
      'https://anylang.net/sites/default/files/styles/book_image/public/covers/harry-potter-and-philosophers-stone.jpg',
    synopsis:
      'An orphaned boy enrolls in a school of wizardry and learns the truth about himself and his family.',
    author: 'J.K. Rowling',
    year: 1997,
    tags: ['fantasy', 'adventure'],
    availableQuantity: 35,
    collection: 'Harry Potter',
  },
  {
    title: 'Harry Potter and the Chamber of Secrets',
    slug: 'harry-potter-chamber-of-secrets',
    coverSrc:
      'https://anylang.net/sites/default/files/styles/book_image/public/covers/harry-potter-and-chamber-secrets.jpg',
    synopsis:
      'Harry returns to Hogwarts for his second year and discovers a mysterious chamber that is threatening the school.',
    author: 'J.K. Rowling',
    year: 1998,
    tags: ['fantasy', 'adventure'],
    availableQuantity: 40,
    collection: 'Harry Potter',
  },
  {
    title: 'Harry Potter and the Prisoner of Azkaban',
    slug: 'harry-potter-prisoner-of-azkaban',
    coverSrc:
      'https://anylang.net/sites/default/files/styles/book_image/public/covers/harry-potter-and-prisoner-azkaban.jpg',
    synopsis:
      "Harry's third year at Hogwarts is marked by the escape of a dangerous prisoner and the appearance of a werewolf.",
    author: 'J.K. Rowling',
    year: 1999,
    tags: ['fantasy', 'adventure'],
    availableQuantity: 35,
    collection: 'Harry Potter',
  },
  {
    title: 'Harry Potter and the Goblet of Fire',
    slug: 'harry-potter-goblet-of-fire',
    coverSrc:
      'https://anylang.net/sites/default/files/styles/book_image/public/covers/harry-potter-and-goblet-fire.jpg',
    synopsis:
      'Harry competes in the dangerous Triwizard Tournament and learns the truth about the return of Voldemort.',
    author: 'J.K. Rowling',
    year: 2000,
    tags: ['fantasy', 'adventure', 'mystery'],
    availableQuantity: 30,
    collection: 'Harry Potter',
  },
  {
    title: 'Harry Potter and the Order of Phoenix',
    slug: 'harry-potter-order-of-phoenix',
    coverSrc:
      'https://anylang.net/sites/default/files/styles/book_image/public/covers/harry-potter-and-order-phoenix.jpg',
    synopsis:
      'Harry joins the Order of Phoenix and battles the Ministry of Magic in his fifth year at Hogwarts.',
    author: 'J.K. Rowling',
    year: 2003,
    tags: ['fantasy', 'adventure'],
    availableQuantity: 40,
    collection: 'Harry Potter',
  },
  {
    title: 'Harry Potter and the Half-Blood Prince',
    slug: 'harry-potter-half-blood-prince',
    coverSrc:
      'https://anylang.net/sites/default/files/styles/book_image/public/covers/harry-potter-and-half-blood-prince.jpg',
    synopsis:
      "Harry discovers a powerful secret about Voldemort's past while also navigating his own romantic interests.",
    author: 'J.K. Rowling',
    year: 2005,
    tags: ['fantasy', 'adventure', 'romance'],
    availableQuantity: 50,
    collection: 'Harry Potter',
  },
  {
    title: 'Harry Potter and the Deathly Hallows',
    slug: 'harry-potter-deathly-hallows',
    coverSrc:
      'https://anylang.net/sites/default/files/styles/book_image/public/covers/harry-potter-and-deathly-hallows.jpg',
    synopsis:
      'Harry, Ron, and Hermione set out on a quest to destroy the remaining Horcruxes and defeat Voldemort.',
    author: 'J.K. Rowling',
    year: 2007,
    tags: ['fantasy', 'adventure', 'mystery'],
    availableQuantity: 60,
    collection: 'Harry Potter',
  },
  {
    title: 'The Hunger Games',
    slug: 'hunger-games',
    coverSrc: 'https://m.media-amazon.com/images/I/61+t8dh4BEL.jpg',
    synopsis:
      'In a dystopian future, children are selected from districts to compete in a brutal televised battle to the death.',
    author: 'Suzanne Collins',
    year: 2008,
    tags: ['dystopian', 'action', 'adventure'],
    availableQuantity: 100,
    collection: 'Hunger Games',
  },
  {
    title: 'Catching Fire',
    slug: 'catching-fire',
    coverSrc: 'https://m.media-amazon.com/images/I/61xbLRk5vKL.jpg',
    synopsis:
      'Katniss and Peeta must navigate a rebellion against the Capitol as they prepare for the Quarter Quell.',
    author: 'Suzanne Collins',
    year: 2009,
    tags: ['dystopian', 'action', 'adventure'],
    availableQuantity: 80,
    collection: 'Hunger Games',
  },
  {
    title: 'Mockingjay',
    slug: 'mockingjay',
    coverSrc: 'https://m.media-amazon.com/images/I/51MUfUlmrML.jpg',
    synopsis:
      'Katniss becomes the face of the rebellion as she fights to bring down the Capitol and save Peeta.',
    author: 'Suzanne Collins',
    year: 2010,
    tags: ['dystopian', 'action', 'war'],
    availableQuantity: 70,
    collection: 'Hunger Games',
  },
  {
    title: 'Foundation',
    slug: 'foundation',
    coverSrc:
      'https://kbimages1-a.akamaihd.net/4a4b2cb4-bde2-40be-8165-9b0c7c8bf191/353/569/90/False/foundation-the-foundation-trilogy-book-1-1.jpg',
    synopsis:
      'A mathematician predicts the fall of a galactic empire and lays the foundation for a new one.',
    author: 'Isaac Asimov',
    year: 1951,
    tags: ['science fiction', 'empire', 'politics'],
    availableQuantity: 30,
    collection: 'Foundation',
  },
  {
    title: 'Foundation and Empire',
    slug: 'foundation-and-empire',
    coverSrc:
      'https://kbimages1-a.akamaihd.net/647e2a08-2635-4ed4-9f18-ed4e79522f06/353/569/90/False/foundation-and-empire-the-foundation-trilogy-book-2.jpg',
    synopsis:
      'The Foundation faces a threat from a psychic empire and a rogue trader with a plan for power.',
    author: 'Isaac Asimov',
    year: 1952,
    tags: ['science fiction', 'empire', 'psychic'],
    availableQuantity: 20,
    collection: 'Foundation',
  },
  {
    title: 'Second Foundation',
    slug: 'second-foundation',
    coverSrc:
      'https://kbimages1-a.akamaihd.net/8517f79a-c12c-4bd5-ac1e-9ef8717fb9a2/353/569/90/False/second-foundation-the-foundation-trilogy-book-3-1.jpg',
    synopsis:
      'The search for the Second Foundation, the key to the future of the galaxy, intensifies.',
    author: 'Isaac Asimov',
    year: 1953,
    tags: ['science fiction', 'empire', 'mystery'],
    availableQuantity: 25,
    collection: 'Foundation',
  },
  {
    title: "Foundation's Edge",
    slug: 'foundations-edge',
    coverSrc:
      'https://kbimages1-a.akamaihd.net/ef9b7571-4e28-44c0-a390-4ec877e281b4/353/569/90/False/foundation-s-edge-the-foundation-series-sequels-book-1.jpg',
    synopsis:
      'Golan Trevize sets out on a quest to discover the mysterious location of the Second Foundation.',
    author: 'Isaac Asimov',
    year: 1982,
    tags: ['science fiction', 'empire', 'adventure'],
    availableQuantity: 35,
    collection: 'Foundation',
  },
  {
    title: 'Foundation and Earth',
    slug: 'foundation-and-earth',
    coverSrc:
      'https://kbimages1-a.akamaihd.net/c3aacd63-d83b-4253-aa8e-52c044a69b44/353/569/90/False/foundation-and-earth-the-foundation-series-sequels-book-2.jpg',
    synopsis:
      "Golan Trevize and a companion search for humanity's origin and its destiny.",
    author: 'Isaac Asimov',
    year: 1986,
    tags: ['science fiction', 'empire', 'origin'],
    availableQuantity: 40,
    collection: 'Foundation',
  },
  {
    title: 'A Brief History of Time',
    slug: 'a-brief-history-of-time',
    coverSrc:
      'https://kbimages1-a.akamaihd.net/656aba0c-e1e7-49d2-af70-e07be17007f0/353/569/90/False/a-brief-history-of-time.jpg',
    synopsis:
      "A layman's guide to cosmology and the big bang theory, explaining complex concepts in simple terms.",
    author: 'Stephen Hawking',
    year: 1988,
    tags: ['cosmology', 'physics', 'astronomy'],
    availableQuantity: 50,
    collection: 'Stephen Hawking',
  },
  {
    title: 'The Universe in a Nutshell',
    slug: 'the-universe-in-a-nutshell',
    coverSrc: 'https://m.media-amazon.com/images/I/81bKX7EA4cL.jpg',
    synopsis:
      'An exploration of the latest theories and discoveries in physics, including black holes and string theory.',
    author: 'Stephen Hawking',
    year: 2001,
    tags: ['physics', 'astronomy', 'theory'],
    availableQuantity: 40,
    collection: 'Stephen Hawking',
  },
  {
    title: 'A Briefer History of Time',
    slug: 'a-briefer-history-of-time',
    coverSrc:
      'https://kbimages1-a.akamaihd.net/033123c0-0eda-4ad7-ba5c-be01209a061f/353/569/90/False/a-briefer-history-of-time.jpg',
    synopsis:
      'A shorter, more accessible update of A Brief History of Time, with new developments in cosmology.',
    author: 'Stephen Hawking',
    year: 2005,
    tags: ['cosmology', 'physics', 'astronomy'],
    availableQuantity: 45,
    collection: 'Stephen Hawking',
  },
  {
    title: 'The Grand Design',
    slug: 'the-grand-design',
    coverSrc:
      'https://kbimages1-a.akamaihd.net/98c65264-227a-45b1-b950-6c0ffd10eb80/353/569/90/False/the-grand-design-1.jpg',
    synopsis:
      'A examination of the nature of reality, the laws of physics, and the role of God in the universe.',
    author: 'Stephen Hawking',
    year: 2010,
    tags: ['philosophy', 'physics', 'theology'],
    availableQuantity: 35,
    collection: 'Stephen Hawking',
  },
  {
    title: 'My Brief History',
    slug: 'my-brief-history',
    coverSrc:
      'https://kbimages1-a.akamaihd.net/db632b04-6cd2-4617-8a63-9d756a654f59/353/569/90/False/my-brief-history.jpg',
    synopsis:
      'An autobiography of Stephen Hawking, detailing his life, work, and battle with motor neuron disease.',
    author: 'Stephen Hawking',
    year: 2013,
    tags: ['autobiography', 'physics', 'disability'],
    availableQuantity: 25,
    collection: 'Stephen Hawking',
  },
  {
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    slug: 'clean-code-a-handbook-of-agile-software-craftsmanship',
    coverSrc: 'https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg',
    synopsis:
      "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn't have to be that way.",
    availableQuantity: 5,
    author: 'Robert C. Martin',
    year: 2008,
    tags: ['Software Engineering', 'Agile', 'Best Practices'],
    collection: 'Software Engineering',
  },
  {
    title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
    slug: 'design-patterns-elements-of-reusable-object-oriented-software',
    coverSrc: 'https://covers.openlibrary.org/b/isbn/0201633612-L.jpg',
    synopsis:
      'Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems. Previously undocumented, these 23 patterns allow designers to create more flexible, elegant, and ultimately reusable designs without having to rediscover the design solutions themselves.',
    availableQuantity: 10,
    author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
    year: 1994,
    tags: ['Software Engineering', 'Design Patterns', 'Object-Oriented'],
    collection: 'Software Engineering',
  },
  {
    title: 'The Pragmatic Programmer: From Journeyman to Master',
    slug: 'the-pragmatic-programmer-from-journeyman-to-master',
    coverSrc: 'https://covers.openlibrary.org/b/isbn/020161622X-L.jpg',
    synopsis:
      'The Pragmatic Programmer cuts through the increasing specialization and technicalities of modern software development to examine the core process—what do you do, as an individual and as a team, if you want to create software that’s easy to write, read, and maintain.',
    availableQuantity: 8,
    author: 'Andrew Hunt, David Thomas',
    year: 1999,
    tags: ['Software Engineering', 'Best Practices', 'Career Development'],
    collection: 'Software Engineering',
  },
];
export default books;

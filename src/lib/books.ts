export type Book = {
  id: string;
  title: string;
  author: string;
  gradeLevel: '0' | '1' | '2' | '3' | '4' | '5';
  subject: 'قراءة' | 'علوم' | 'تاريخ' | 'رياضيات' | 'فنون' | 'جغرافيا';
  coverImageId: string;
  googleDriveLink: string;
  content: string; 
};

export const books: Book[] = [
  {
    id: '1',
    title: 'The Magical Math Adventure',
    author: 'Dr. Anna Numerica',
    gradeLevel: '2',
    subject: 'رياضيات',
    coverImageId: 'math-adventure-1',
    googleDriveLink: 'https://docs.google.com/document/d/1B4tN9v4_3q8Sm-5-9zJc-2aL6k8Xo/edit?usp=sharing',
    content: 'Join Leo and his friends as they discover a magical world where numbers come to life. They learn about addition and subtraction through exciting puzzles and challenges in the land of Arithmetica.'
  },
  {
    id: '2',
    title: 'Science Explorers: The Human Body',
    author: 'Prof. Adam Anatomy',
    gradeLevel: '4',
    subject: 'علوم',
    coverImageId: 'science-explorer-2',
    googleDriveLink: 'https://docs.google.com/document/d/1B4tN9v4_3q8Sm-5-9zJc-2aL6k8Xo/edit?usp=sharing',
    content: 'A detailed journey inside the human body. This book explains the functions of major organs, the skeletal system, and how our muscles work, all in an easy-to-understand format for young scientists.'
  },
  {
    id: '3',
    title: 'History Time Travelers: Ancient Egypt',
    author: 'Cleo Patra',
    gradeLevel: '5',
    subject: 'تاريخ',
    coverImageId: 'history-time-3',
    googleDriveLink: 'https://docs.google.com/document/d/1B4tN9v4_3q8Sm-5-9zJc-2aL6k8Xo/edit?usp=sharing',
    content: 'Travel back in time to the age of pharaohs and pyramids. Learn about the daily life of ancient Egyptians, their beliefs, and the great monuments they left behind.'
  },
  {
    id: '4',
    title: 'Fun with Phonics',
    author: 'Betty Alphabet',
    gradeLevel: '1',
    subject: 'قراءة',
    coverImageId: 'reading-fun-4',
    googleDriveLink: 'https://docs.google.com/document/d/1B4tN9v4_3q8Sm-5-9zJc-2aL6k8Xo/edit?usp=sharing',
    content: 'An interactive book designed to make learning to read fun. Each page introduces new letter sounds with colorful illustrations and simple words, building a strong foundation for reading.'
  },
  {
    id: '5',
    title: 'Galaxy Quest: A Math Odyssey',
    author: 'Captain Calculon',
    gradeLevel: '5',
    subject: 'رياضيات',
    coverImageId: 'galaxy-math-5',
    googleDriveLink: 'https://docs.google.com/document/d/1B4tN9v4_3q8Sm-5-9zJc-2aL6k8Xo/edit?usp=sharing',
    content: 'Pilot a spaceship through a galaxy of math problems. This book covers multiplication, division, and fractions with a thrilling space adventure theme.'
  },
  {
    id: '6',
    title: 'Dino Discovery',
    author: 'Dr. Rex Fossil',
    gradeLevel: '3',
    subject: 'علوم',
    coverImageId: 'dino-discovery-6',
    googleDriveLink: 'https://docs.google.com/document/d/1B4tN9v4_3q8Sm-5-9zJc-2aL6k8Xo/edit?usp=sharing',
    content: 'Uncover the secrets of the dinosaurs! This book explores different species of dinosaurs, their habitats, and the world they lived in millions of years ago.'
  },
  {
    id: '7',
    title: 'Tales of the Brave Knights',
    author: 'Sir Reginald Storyteller',
    gradeLevel: '4',
    subject: 'تاريخ',
    coverImageId: 'castle-tales-7',
    googleDriveLink: 'https://docs.google.com/document/d/1B4tN9v4_3q8Sm-5-9zJc-2aL6k8Xo/edit?usp=sharing',
    content: 'Stories of courage and chivalry from the medieval era. Follow the adventures of brave knights, explore majestic castles, and learn about the code of honor they lived by.'
  },
  {
    id: '8',
    title: 'Jungle Journey',
    author: 'Zoe Wild',
    gradeLevel: '2',
    subject: 'قراءة',
    coverImageId: 'jungle-journey-8',
    googleDriveLink: 'https://docs.google.com/document/d/1B4tN9v4_3q8Sm-5-9zJc-2aL6k8Xo/edit?usp=sharing',
    content: 'A reading adventure through the dense Amazon rainforest. Meet talking monkeys, colorful parrots, and sleepy sloths while improving reading skills with engaging stories.'
  }
];

export const gradeLevels = ['0', '1', '2', '3', '4', '5'];
export const subjects: Array<Book['subject']> = ['قراءة', 'علوم', 'تاريخ', 'رياضيات', 'فنون', 'جغرافيا'];

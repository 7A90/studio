export type Book = {
  id: string;
  title: string;
  author: string;
  gradeLevel: '0' | '1' | '2' | '3' | '4' | '5';
  subject: 'رياضيات' | 'لغة عربية' | 'أنشطة رياضيات' | 'أنشطة لغة عربية' | 'تربية مدنية' | 'إنجليزية' | 'تاريخ وجغرافيا' | 'تربية إسلامية' | 'تربية علمية' | 'لغة فرنسية' | 'أنشطة فرنسية' | 'أمازيغية' | 'تاريخ' | 'جغرافيا';
  coverImageId: string;
  googleDriveLink: string;
  content: string; 
};

export const books: Book[] = [
  // Level 0
  { id: 'l0-math', title: 'كتاب الرياضيات', author: 'وزارة التربية', gradeLevel: '0', subject: 'رياضيات', coverImageId: 'l0-math', googleDriveLink: '#', content: 'كتاب الرياضيات للمستوى 0' },
  { id: 'l0-arabic', title: 'كتاب اللغة العربية', author: 'وزارة التربية', gradeLevel: '0', subject: 'لغة عربية', coverImageId: 'l0-arabic', googleDriveLink: '#', content: 'كتاب اللغة العربية للمستوى 0' },

  // Level 1
  { id: 'l1-math', title: 'كتاب الرياضيات', author: 'وزارة التربية', gradeLevel: '1', subject: 'رياضيات', coverImageId: 'l1-math', googleDriveLink: '#', content: 'كتاب الرياضيات للمستوى 1' },
  { id: 'l1-arabic', title: 'كتاب اللغة العربية', author: 'وزارة التربية', gradeLevel: '1', subject: 'لغة عربية', coverImageId: 'l1-arabic', googleDriveLink: '#', content: 'كتاب اللغة العربية للمستوى 1' },
  { id: 'l1-math-activity', title: 'أنشطة الرياضيات', author: 'وزارة التربية', gradeLevel: '1', subject: 'أنشطة رياضيات', coverImageId: 'l1-math-activity', googleDriveLink: '#', content: 'كتاب أنشطة الرياضيات للمستوى 1' },
  { id: 'l1-arabic-activity', title: 'أنشطة اللغة العربية', author: 'وزارة التربية', gradeLevel: '1', subject: 'أنشطة لغة عربية', coverImageId: 'l1-arabic-activity', googleDriveLink: '#', content: 'كتاب أنشطة اللغة العربية للمستوى 1' },
  
  // Level 2
  { id: 'l2-math', title: 'كتاب الرياضيات', author: 'وزارة التربية', gradeLevel: '2', subject: 'رياضيات', coverImageId: 'l2-math', googleDriveLink: '#', content: 'كتاب الرياضيات للمستوى 2' },
  { id: 'l2-arabic', title: 'كتاب اللغة العربية', author: 'وزارة التربية', gradeLevel: '2', subject: 'لغة عربية', coverImageId: 'l2-arabic', googleDriveLink: '#', content: 'كتاب اللغة العربية للمستوى 2' },
  { id: 'l2-math-activity', title: 'أنشطة الرياضيات', author: 'وزارة التربية', gradeLevel: '2', subject: 'أنشطة رياضيات', coverImageId: 'l2-math-activity', googleDriveLink: '#', content: 'كتاب أنشطة الرياضيات للمستوى 2' },
  { id: 'l2-arabic-activity', title: 'أنشطة اللغة العربية', author: 'وزارة التربية', gradeLevel: '2', subject: 'أنشطة لغة عربية', coverImageId: 'l2-arabic-activity', googleDriveLink: '#', content: 'كتاب أنشطة اللغة العربية للمستوى 2' },

  // Level 3
  { id: 'l3-civics', title: 'كتاب التربية المدنية', author: 'وزارة التربية', gradeLevel: '3', subject: 'تربية مدنية', coverImageId: 'l3-civics', googleDriveLink: '#', content: 'كتاب التربية المدنية للمستوى 3' },
  { id: 'l3-english', title: 'كتاب الإنجليزية', author: 'وزارة التربية', gradeLevel: '3', subject: 'إنجليزية', coverImageId: 'l3-english', googleDriveLink: '#', content: 'كتاب الإنجليزية للمستوى 3' },
  { id: 'l3-math', title: 'كتاب الرياضيات', author: 'وزارة التربية', gradeLevel: '3', subject: 'رياضيات', coverImageId: 'l3-math', googleDriveLink: '#', content: 'كتاب الرياضيات للمستوى 3' },
  { id: 'l3-hist-geo', title: 'كتاب التاريخ والجغرافيا', author: 'وزارة التربية', gradeLevel: '3', subject: 'تاريخ وجغرافيا', coverImageId: 'l3-hist-geo', googleDriveLink: '#', content: 'كتاب التاريخ والجغرافيا للمستوى 3' },
  { id: 'l3-islamic', title: 'كتاب التربية الإسلامية', author: 'وزارة التربية', gradeLevel: '3', subject: 'تربية إسلامية', coverImageId: 'l3-islamic', googleDriveLink: '#', content: 'كتاب التربية الإسلامية للمستوى 3' },
  { id: 'l3-science', title: 'كتاب التربية العلمية', author: 'وزارة التربية', gradeLevel: '3', subject: 'تربية علمية', coverImageId: 'l3-science', googleDriveLink: '#', content: 'كتاب التربية العلمية للمستوى 3' },
  { id: 'l3-french', title: 'كتاب اللغة الفرنسية', author: 'وزارة التربية', gradeLevel: '3', subject: 'لغة فرنسية', coverImageId: 'l3-french', googleDriveLink: '#', content: 'كتاب اللغة الفرنسية للمستوى 3' },
  { id: 'l3-math-activity', title: 'أنشطة الرياضيات', author: 'وزارة التربية', gradeLevel: '3', subject: 'أنشطة رياضيات', coverImageId: 'l3-math-activity', googleDriveLink: '#', content: 'كتاب أنشطة الرياضيات للمستوى 3' },
  { id: 'l3-french-activity', title: 'أنشطة الفرنسية', author: 'وزارة التربية', gradeLevel: '3', subject: 'أنشطة فرنسية', coverImageId: 'l3-french-activity', googleDriveLink: '#', content: 'كتاب أنشطة الفرنسية للمستوى 3' },
  { id: 'l3-arabic', title: 'كتاب اللغة العربية', author: 'وزارة التربية', gradeLevel: '3', subject: 'لغة عربية', coverImageId: 'l3-arabic', googleDriveLink: '#', content: 'كتاب اللغة العربية للمستوى 3' },
  { id: 'l3-arabic-activity', title: 'أنشطة اللغة العربية', author: 'وزارة التربية', gradeLevel: '3', subject: 'أنشطة لغة عربية', coverImageId: 'l3-arabic-activity', googleDriveLink: '#', content: 'كتاب أنشطة اللغة العربية للمستوى 3' },

  // Level 4
  { id: 'l4-amazigh', title: 'كتاب الأمازيغية', author: 'وزارة التربية', gradeLevel: '4', subject: 'أمازيغية', coverImageId: 'l4-amazigh', googleDriveLink: '#', content: 'كتاب الأمازيغية للمستوى 4' },
  { id: 'l4-hist-geo', title: 'كتاب التاريخ والجغرافيا', author: 'وزارة التربية', gradeLevel: '4', subject: 'تاريخ وجغرافيا', coverImageId: 'l4-hist-geo', googleDriveLink: '#', content: 'كتاب التاريخ والجغرافيا للمستوى 4' },
  { id: 'l4-islamic', title: 'كتاب التربية الإسلامية', author: 'وزارة التربية', gradeLevel: '4', subject: 'تربية إسلامية', coverImageId: 'l4-islamic', googleDriveLink: '#', content: 'كتاب التربية الإسلامية للمستوى 4' },
  { id: 'l4-science', title: 'كتاب التربية العلمية', author: 'وزارة التربية', gradeLevel: '4', subject: 'تربية علمية', coverImageId: 'l4-science', googleDriveLink: '#', content: 'كتاب التربية العلمية للمستوى 4' },
  { id: 'l4-civics', title: 'كتاب التربية المدنية', author: 'وزارة التربية', gradeLevel: '4', subject: 'تربية مدنية', coverImageId: 'l4-civics', googleDriveLink: '#', content: 'كتاب التربية المدنية للمستوى 4' },
  { id: 'l4-math', title: 'كتاب الرياضيات', author: 'وزارة التربية', gradeLevel: '4', subject: 'رياضيات', coverImageId: 'l4-math', googleDriveLink: '#', content: 'كتاب الرياضيات للمستوى 4' },
  { id: 'l4-english', title: 'كتاب الإنجليزية', author: 'وزارة التربية', gradeLevel: '4', subject: 'إنجليزية', coverImageId: 'l4-english', googleDriveLink: '#', content: 'كتاب الإنجليزية للمستوى 4' },
  { id: 'l4-french', title: 'كتاب اللغة الفرنسية', author: 'وزارة التربية', gradeLevel: '4', subject: 'لغة فرنسية', coverImageId: 'l4-french', googleDriveLink: '#', content: 'كتاب اللغة الفرنسية للمستوى 4' },
  { id: 'l4-math-activity', title: 'أنشطة الرياضيات', author: 'وزارة التربية', gradeLevel: '4', subject: 'أنشطة رياضيات', coverImageId: 'l4-math-activity', googleDriveLink: '#', content: 'كتاب أنشطة الرياضيات للمستوى 4' },
  { id: 'l4-arabic-activity', title: 'أنشطة اللغة العربية', author: 'وزارة التربية', gradeLevel: '4', subject: 'أنشطة لغة عربية', coverImageId: 'l4-arabic-activity', googleDriveLink: '#', content: 'كتاب أنشطة اللغة العربية للمستوى 4' },
  { id: 'l4-french-activity', title: 'أنشطة الفرنسية', author: 'وزارة التربية', gradeLevel: '4', subject: 'أنشطة فرنسية', coverImageId: 'l4-french-activity', googleDriveLink: '#', content: 'كتاب أنشطة الفرنسية للمستوى 4' },
  { id: 'l4-arabic', title: 'كتاب اللغة العربية', author: 'وزارة التربية', gradeLevel: '4', subject: 'لغة عربية', coverImageId: 'l4-arabic', googleDriveLink: '#', content: 'كتاب اللغة العربية للمستوى 4' },

  // Level 5
  { id: 'l5-civics', title: 'كتاب التربية المدنية', author: 'وزارة التربية', gradeLevel: '5', subject: 'تربية مدنية', coverImageId: 'l5-civics', googleDriveLink: '#', content: 'كتاب التربية المدنية للمستوى 5' },
  { id: 'l5-math', title: 'كتاب الرياضيات', author: 'وزارة التربية', gradeLevel: '5', subject: 'رياضيات', coverImageId: 'l5-math', googleDriveLink: '#', content: 'كتاب الرياضيات للمستوى 5' },
  { id: 'l5-amazigh', title: 'كتاب الأمازيغية', author: 'وزارة التربية', gradeLevel: '5', subject: 'أمازيغية', coverImageId: 'l5-amazigh', googleDriveLink: '#', content: 'كتاب الأمازيغية للمستوى 5' },
  { id: 'l5-history', title: 'كتاب التاريخ', author: 'وزارة التربية', gradeLevel: '5', subject: 'تاريخ', coverImageId: 'l5-history', googleDriveLink: '#', content: 'كتاب التاريخ للمستوى 5' },
  { id: 'l5-islamic', title: 'كتاب التربية الإسلامية', author: 'وزارة التربية', gradeLevel: '5', subject: 'تربية إسلامية', coverImageId: 'l5-islamic', googleDriveLink: '#', content: 'كتاب التربية الإسلامية للمستوى 5' },
  { id: 'l5-science', title: 'كتاب التربية العلمية', author: 'وزارة التربية', gradeLevel: '5', subject: 'تربية علمية', coverImageId: 'l5-science', googleDriveLink: '#', content: 'كتاب التربية العلمية للمستوى 5' },
  { id: 'l5-geography', title: 'كتاب الجغرافيا', author: 'وزارة التربية', gradeLevel: '5', subject: 'جغرافيا', coverImageId: 'l5-geography', googleDriveLink: '#', content: 'كتاب الجغرافيا للمستوى 5' },
  { id: 'l5-french', title: 'كتاب اللغة الفرنسية', author: 'وزارة التربية', gradeLevel: '5', subject: 'لغة فرنسية', coverImageId: 'l5-french', googleDriveLink: '#', content: 'كتاب اللغة الفرنسية للمستوى 5' },
  { id: 'l5-math-activity', title: 'أنشطة الرياضيات', author: 'وزارة التربية', gradeLevel: '5', subject: 'أنشطة رياضيات', coverImageId: 'l5-math-activity', googleDriveLink: '#', content: 'كتاب أنشطة الرياضيات للمستوى 5' },
  { id: 'l5-french-activity', title: 'أنشطة الفرنسية', author: 'وزارة التربية', gradeLevel: '5', subject: 'أنشطة فرنسية', coverImageId: 'l5-french-activity', googleDriveLink: '#', content: 'كتاب أنشطة الفرنسية للمستوى 5' },
  { id: 'l5-arabic', title: 'كتاب اللغة العربية', author: 'وزارة التربية', gradeLevel: '5', subject: 'لغة عربية', coverImageId: 'l5-arabic', googleDriveLink: '#', content: 'كتاب اللغة العربية للمستوى 5' },
];

export const gradeLevels = ['0', '1', '2', '3', '4', '5'];
export const subjects: Array<Book['subject']> = [
  'رياضيات',
  'لغة عربية',
  'أنشطة رياضيات',
  'أنشطة لغة عربية',
  'تربية مدنية',
  'إنجليزية',
  'تاريخ وجغرافيا',
  'تربية إسلامية',
  'تربية علمية',
  'لغة فرنسية',
  'أنشطة فرنسية',
  'أمازيغية',
  'تاريخ',
  'جغرافيا'
];


export type Book = {
  id: string;
  title: string;
  author: string;
  gradeLevel: string;
  subject:
    | 'رياضيات'
    | 'لغة عربية'
    | 'أنشطة رياضيات'
    | 'أنشطة لغة عربية'
    | 'تربية مدنية'
    | 'إنجليزية'
    | 'تاريخ وجغرافيا'
    | 'تربية إسلامية'
    | 'تربية علمية'
    | 'لغة فرنسية'
    | 'أنشطة فرنسية'
    | 'أمازيغية'
    | 'تاريخ'
    | 'جغرافيا';
  coverImageId: string;
  googleDriveLink: string;
  content: string;
};

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

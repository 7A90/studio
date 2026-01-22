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
  { id: 'l0-math', title: 'كتاب الرياضيات', author: 'وزارة التربية', gradeLevel: '0', subject: 'رياضيات', coverImageId: 'l0-math', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1wIQ3sZYGJlKV2UYypIK-ZgQYKY8AWJ_G', content: 'كتاب الرياضيات للمستوى 0' },
  { id: 'l0-arabic', title: 'كتاب اللغة العربية', author: 'وزارة التربية', gradeLevel: '0', subject: 'لغة عربية', coverImageId: 'l0-arabic', googleDriveLink: 'https://drive.google.com/uc?export=download&id=11kDqwvAR_FmjRikPypjoKo-h-Yc1E622', content: 'كتاب اللغة العربية للمستوى 0' },

  // Level 1
  { id: 'l1-math', title: 'كتاب الرياضيات', author: 'وزارة التربية', gradeLevel: '1', subject: 'رياضيات', coverImageId: 'l1-math', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1TTQYIAm4jpHDk8nc_EGh0goVoihGZRCL', content: 'كتاب الرياضيات للمستوى 1' },
  { id: 'l1-arabic', title: 'كتاب اللغة العربية', author: 'وزارة التربية', gradeLevel: '1', subject: 'لغة عربية', coverImageId: 'l1-arabic', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1f0az_IoN59wrdfz-bQ3fYFUr9Wzu0XrK', content: 'كتاب اللغة العربية للمستوى 1' },
  { id: 'l1-math-activity', title: 'أنشطة الرياضيات', author: 'وزارة التربية', gradeLevel: '1', subject: 'أنشطة رياضيات', coverImageId: 'l1-math-activity', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1zf3as638Lb1P8L4yz4ZCY-iCxKss-UYd', content: 'كتاب أنشطة الرياضيات للمستوى 1' },
  { id: 'l1-arabic-activity', title: 'أنشطة اللغة العربية', author: 'وزارة التربية', gradeLevel: '1', subject: 'أنشطة لغة عربية', coverImageId: 'l1-arabic-activity', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1drfdNuW5RNaWhdrxUl3wYUD1H452-J2b', content: 'كتاب أنشطة اللغة العربية للمستوى 1' },
  
  // Level 2
  { id: 'l2-math', title: 'كتاب الرياضيات', author: 'وزارة التربية', gradeLevel: '2', subject: 'رياضيات', coverImageId: 'l2-math', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1Qw2HQa5-n2o9_cHNf-JaNSp2gx5_OLcX', content: 'كتاب الرياضيات للمستوى 2' },
  { id: 'l2-arabic', title: 'كتاب اللغة العربية', author: 'وزارة التربية', gradeLevel: '2', subject: 'لغة عربية', coverImageId: 'l2-arabic', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1oYceUUGNtUAO0C-XnkIHMTZ5kknPA_5J', content: 'كتاب اللغة العربية للمستوى 2' },
  { id: 'l2-math-activity', title: 'أنشطة الرياضيات', author: 'وزارة التربية', gradeLevel: '2', subject: 'أنشطة رياضيات', coverImageId: 'l2-math-activity', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1MjT8OUa6NmesJ76dudTjk-lFisz_VRif ', content: 'كتاب أنشطة الرياضيات للمستوى 2' },
  { id: 'l2-arabic-activity', title: 'أنشطة اللغة العربية', author: 'وزارة التربية', gradeLevel: '2', subject: 'أنشطة لغة عربية', coverImageId: 'l2-arabic-activity', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1C7SNCzSqkZK01cmwPdy3reeiuMtOxyuR', content: 'كتاب أنشطة اللغة العربية للمستوى 2' },

  // Level 3
  { id: 'l3-civics', title: 'كتاب التربية المدنية', author: 'وزارة التربية', gradeLevel: '3', subject: 'تربية مدنية', coverImageId: 'l3-civics', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1cMkI0t_K9dY0JOuBgo5SkUVTcTLyGoj2', content: 'كتاب التربية المدنية للمستوى 3' },
  { id: 'l3-english', title: 'كتاب الإنجليزية', author: 'وزارة التربية', gradeLevel: '3', subject: 'إنجليزية', coverImageId: 'l3-english', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1_DgP2RP4SL0S3CoTNn7zNbWkwmn6x2dz', content: 'كتاب الإنجليزية للمستوى 3' },
  { id: 'l3-math', title: 'كتاب الرياضيات', author: 'وزارة التربية', gradeLevel: '3', subject: 'رياضيات', coverImageId: 'l3-math', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1t1LAUB7dTppxBAoUOSd2DmOtGp09Juus', content: 'كتاب الرياضيات للمستوى 3' },
  { id: 'l3-hist-geo', title: 'كتاب التاريخ والجغرافيا', author: 'وزارة التربية', gradeLevel: '3', subject: 'تاريخ وجغرافيا', coverImageId: 'l3-hist-geo', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1g8mjIRS7RQ7vGgNKc33CiPwmrXGZtmzU', content: 'كتاب التاريخ والجغرافيا للمستوى 3' },
  { id: 'l3-islamic', title: 'كتاب التربية الإسلامية', author: 'وزارة التربية', gradeLevel: '3', subject: 'تربية إسلامية', coverImageId: 'l3-islamic', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1s8cjQYOtunVcnZ7gsUum5_QkG0L5wv2_', content: 'كتاب التربية الإسلامية للمستوى 3' },
  { id: 'l3-science', title: 'كتاب التربية العلمية', author: 'وزارة التربية', gradeLevel: '3', subject: 'تربية علمية', coverImageId: 'l3-science', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1IZ9c40P50b9ylh_6OxIM0hcpJyjAeL', content: 'كتاب التربية العلمية للمستوى 3' },
  { id: 'l3-french', title: 'كتاب اللغة الفرنسية', author: 'وزارة التربية', gradeLevel: '3', subject: 'لغة فرنسية', coverImageId: 'l3-french', googleDriveLink: 'https://drive.google.com/uc?export=download&id=H74R0nnRD3p5HI07oWwTfbDJrRj', content: 'كتاب اللغة الفرنسية للمستوى 3' },
  { id: 'l3-math-activity', title: 'أنشطة الرياضيات', author: 'وزارة التربية', gradeLevel: '3', subject: 'أنشطة رياضيات', coverImageId: 'l3-math-activity', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1wy2HQ0YLB0-sBffAiuCwmGpgNeO8kUXC', content: 'كتاب أنشطة الرياضيات للمستوى 3' },
  { id: 'l3-french-activity', title: 'أنشطة الفرنسية', author: 'وزارة التربية', gradeLevel: '3', subject: 'أنشطة فرنسية', coverImageId: 'l3-french-activity', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1qzIuD3LleIntoamVc7yE1oDRNfjZngU0', content: 'كتاب أنشطة الفرنسية للمستوى 3' },
  { id: 'l3-arabic', title: 'كتاب اللغة العربية', author: 'وزارة التربية', gradeLevel: '3', subject: 'لغة عربية', coverImageId: 'l3-arabic', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1J3Ek2uXrKdIZf6N6p0uxLtJado42ujmj', content: 'كتاب اللغة العربية للمستوى 3' },
  { id: 'l3-arabic-activity', title: 'أنشطة اللغة العربية', author: 'وزارة التربية', gradeLevel: '3', subject: 'أنشطة لغة عربية', coverImageId: 'l3-arabic-activity', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1hTuRgqcH5Ulwv2SWJ93SCa-NtU8__UWu', content: 'كتاب أنشطة اللغة العربية للمستوى 3' },

  // Level 4
  { id: 'l4-amazigh', title: 'كتاب الأمازيغية', author: 'وزارة التربية', gradeLevel: '4', subject: 'أمازيغية', coverImageId: 'l4-amazigh', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1JxNzyk-qGRUJpU2Ip91pk4IEBj6tRpiD', content: 'كتاب الأمازيغية للمستوى 4' },
  { id: 'l4-hist-geo', title: 'كتاب التاريخ والجغرافيا', author: 'وزارة التربية', gradeLevel: '4', subject: 'تاريخ وجغرافيا', coverImageId: 'l4-hist-geo', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1AJFeqSVXYXg_uUv0Fate9VPjP6CFOA3V', content: 'كتاب التاريخ والجغرافيا للمستوى 4' },
  { id: 'l4-islamic', title: 'كتاب التربية الإسلامية', author: 'وزارة التربية', gradeLevel: '4', subject: 'تربية إسلامية', coverImageId: 'l4-islamic', googleDriveLink: 'https://drive.google.com/uc?export=download&id1gUfxW2tLu9uLCEjrpCGRSBRqQntOSB3C', content: 'كتاب التربية الإسلامية للمستوى 4' },
  { id: 'l4-science', title: 'كتاب التربية العلمية', author: 'وزارة التربية', gradeLevel: '4', subject: 'تربية علمية', coverImageId: 'l4-science', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1LWqDkMVFS6UDm7Pz7xaDTri0iEGeqdlc', content: 'كتاب التربية العلمية للمستوى 4' },
  { id: 'l4-civics', title: 'كتاب التربية المدنية', author: 'وزارة التربية', gradeLevel: '4', subject: 'تربية مدنية', coverImageId: 'l4-civics', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1LfJ0EmS8BHXo1SptmIV-wVMpJU9Gy9yD', content: 'كتاب التربية المدنية للمستوى 4' },
  { id: 'l4-math', title: 'كتاب الرياضيات', author: 'وزارة التربية', gradeLevel: '4', subject: 'رياضيات', coverImageId: 'l4-math', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1OMFaaxsD6_qPffMo4J9ewUcONGb2LjFI', content: 'كتاب الرياضيات للمستوى 4' },
  { id: 'l4-english', title: 'كتاب الإنجليزية', author: 'وزارة التربية', gradeLevel: '4', subject: 'إنجليزية', coverImageId: 'l4-english', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1tSBmV97GTNL73tgkx45W_VbnDq-_RhPd', content: 'كتاب الإنجليزية للمستوى 4' },
  { id: 'l4-french', title: 'كتاب اللغة الفرنسية', author: 'وزارة التربية', gradeLevel: '4', subject: 'لغة فرنسية', coverImageId: 'l4-french', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1VdNtnHu5Itzg63WmNjO1fkM60xeSom75', content: 'كتاب اللغة الفرنسية للمستوى 4' },
  { id: 'l4-math-activity', title: 'أنشطة الرياضيات', author: 'وزارة التربية', gradeLevel: '4', subject: 'أنشطة رياضيات', coverImageId: 'l4-math-activity', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1s727Nz-6m9vNWFN4NiP15ztdROSotJMK', content: 'كتاب أنشطة الرياضيات للمستوى 4' },
  { id: 'l4-arabic-activity', title: 'أنشطة اللغة العربية', author: 'وزارة التربية', gradeLevel: '4', subject: 'أنشطة لغة عربية', coverImageId: 'l4-arabic-activity', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1byOAfbdD-Y8tAQcFMyWSH7hwO1LUN7W1', content: 'كتاب أنشطة اللغة العربية للمستوى 4' },
  { id: 'l4-french-activity', title: 'أنشطة الفرنسية', author: 'وزارة التربية', gradeLevel: '4', subject: 'أنشطة فرنسية', coverImageId: 'l4-french-activity', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1d5ofJIc7vRcRn733bvalGAuXlNnXmwie', content: 'كتاب أنشطة الفرنسية للمستوى 4' },
  { id: 'l4-arabic', title: 'كتاب اللغة العربية', author: 'وزارة التربية', gradeLevel: '4', subject: 'لغة عربية', coverImageId: 'l4-arabic', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1QLu2nILaE2p5JBp93D3Lwc7YiZpAAB6S', content: 'كتاب اللغة العربية للمستوى 4' },

  // Level 5
  { id: 'l5-civics', title: 'كتاب التربية المدنية', author: 'وزارة التربية', gradeLevel: '5', subject: 'تربية مدنية', coverImageId: 'l5-civics', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1dMqQtqsXEfhVk7QvbdX8ajv99aBd4-Gm', content: 'كتاب التربية المدنية للمستوى 5' },
  { id: 'l5-math', title: 'كتاب الرياضيات', author: 'وزارة التربية', gradeLevel: '5', subject: 'رياضيات', coverImageId: 'l5-math', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1cZ8-0T4M61HAfySXSt2rrHu7gZ1XTOjG', content: 'كتاب الرياضيات للمستوى 5' },
  { id: 'l5-amazigh', title: 'كتاب الأمازيغية', author: 'وزارة التربية', gradeLevel: '5', subject: 'أمازيغية', coverImageId: 'l5-amazigh', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1mk0DHPSsjfZdyS-BL7Lv9hDV9ifCERPQ', content: 'كتاب الأمازيغية للمستوى 5' },
  { id: 'l5-history', title: 'كتاب التاريخ', author: 'وزارة التربية', gradeLevel: '5', subject: 'تاريخ', coverImageId: 'l5-history', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1pKJVckskdvdXg-mtynYXYlblIc6oLZsu', content: 'كتاب التاريخ للمستوى 5' },
  { id: 'l5-islamic', title: 'كتاب التربية الإسلامية', author: 'وزارة التربية', gradeLevel: '5', subject: 'تربية إسلامية', coverImageId: 'l5-islamic', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1BufqoMm7Kq6Fy_7ksl4g_BDxx714n42D', content: 'كتاب التربية الإسلامية للمستوى 5' },
  { id: 'l5-science', title: 'كتاب التربية العلمية', author: 'وزارة التربية', gradeLevel: '5', subject: 'تربية علمية', coverImageId: 'l5-science', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1Trs0LWN7ejOW1IhWf9CCtkCgUPVmJsHe', content: 'كتاب التربية العلمية للمستوى 5' },
  { id: 'l5-geography', title: 'كتاب الجغرافيا', author: 'وزارة التربية', gradeLevel: '5', subject: 'جغرافيا', coverImageId: 'l5-geography', googleDriveLink: 'https://drive.google.com/uc?export=download&id=18CmhHXxs-4rxM5CNhHgPIwGXi90SXrFM', content: 'كتاب الجغرافيا للمستوى 5' },
  { id: 'l5-french', title: 'كتاب اللغة الفرنسية', author: 'وزارة التربية', gradeLevel: '5', subject: 'لغة فرنسية', coverImageId: 'l5-french', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1TerUQ4xr1AKfEriRpV353sa1nr1hpJ09', content: 'كتاب اللغة الفرنسية للمستوى 5' },
  { id: 'l5-math-activity', title: 'أنشطة الرياضيات', author: 'وزارة التربية', gradeLevel: '5', subject: 'أنشطة رياضيات', coverImageId: 'l5-math-activity', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1e4s_Sjy1B8SMPt_QWXOLlJnn8gV5u60L', content: 'كتاب أنشطة الرياضيات للمستوى 5' },
  { id: 'l5-french-activity', title: 'أنشطة الفرنسية', author: 'وزارة التربية', gradeLevel: '5', subject: 'أنشطة فرنسية', coverImageId: 'l5-french-activity', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1-lZqrXXkxyGYu18LuLUNe0aD5otmjlWV', content: 'كتاب أنشطة الفرنسية للمستوى 5' },
  { id: 'l5-arabic', title: 'كتاب اللغة العربية', author: 'وزارة التربية', gradeLevel: '5', subject: 'لغة عربية', coverImageId: 'l5-arabic', googleDriveLink: 'https://drive.google.com/uc?export=download&id=1Bd-VKcxRaULWEYHb-Y5__pdpsu0cn2f9', content: 'كتاب اللغة العربية للمستوى 5' },
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

'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { BookCard } from './book-card';
import { gradeLevels, subjects } from '@/lib/books';
import type { BookWithImage } from './book-card';
import { Search, Scale, BookOpen, Calculator, FilePen, Users, Languages, Map, Moon, FlaskConical, BookText, Landmark, Globe } from 'lucide-react';
import type { Book } from '@/lib/books';

type Subject = Book['subject'];

const subjectIcons: Record<Subject, React.ElementType> = {
  'رياضيات': Scale,
  'لغة عربية': BookOpen,
  'أنشطة رياضيات': Calculator,
  'أنشطة لغة عربية': FilePen,
  'تربية مدنية': Users,
  'إنجليزية': Languages,
  'تاريخ وجغرافيا': Map,
  'تربية إسلامية': Moon,
  'تربية علمية': FlaskConical,
  'لغة فرنسية': Languages,
  'أنشطة فرنسية': FilePen,
  'أمازيغية': BookText,
  'تاريخ': Landmark,
  'جغرافيا': Globe,
};

export function BookCatalog({ books }: { books: BookWithImage[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const filteredBooks = useMemo(() => {
    return books
      .filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .filter(
        (book) => selectedGrade === 'all' || book.gradeLevel === selectedGrade
      )
      .filter(
        (book) => selectedSubject === 'all' || book.subject === selectedSubject
      );
  }, [books, searchQuery, selectedGrade, selectedSubject]);

  return (
    <div className="space-y-8">
      <div className="p-4 bg-card rounded-lg shadow-sm border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative md:col-span-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="ابحث عن كتاب"
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search books by title"
            />
          </div>
          <Select value={selectedGrade} onValueChange={setSelectedGrade}>
            <SelectTrigger aria-label="Filter by grade">
              <SelectValue placeholder="Filter by grade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">كل المستويات</SelectItem>
              {gradeLevels.map((grade) => (
                <SelectItem key={grade} value={grade}>
                  المستوى {grade}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedSubject} onValueChange={setSelectedSubject}>
            <SelectTrigger aria-label="Filter by subject">
              <SelectValue placeholder="Filter by subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">كل المواد</SelectItem>
              {subjects.map((subject) => {
                const Icon = subjectIcons[subject];
                return (
                  <SelectItem key={subject} value={subject}>
                    <div className="flex items-center gap-2">
                      {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
                      {subject}
                    </div>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-card rounded-lg border border-dashed">
          <h3 className="text-xl font-semibold">No Books Found</h3>
          <p className="text-muted-foreground mt-2">
            Try adjusting your search or filter settings.
          </p>
        </div>
      )}
    </div>
  );
}

export interface NewsItem {
  id: number;
  title: string;
  date: Date;
  preview: string;
  content: string;
  image: string;
  category: 'news' | 'promotion' | 'event';
}
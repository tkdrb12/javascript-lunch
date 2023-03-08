export interface Restaurant {
  ID: number;
  category: '한식' | '중식' | '일식' | '아시안' | '양식' | '기타';
  name: string;
  distance: 5 | 10 | 15 | 20 | 30;
  favorites: boolean;
  description?: string;
  link?: string;
}

export type CategoryValue = '전체' | '한식' | '중식' | '일식' | '아시안' | '양식' | '기타';

export type SortTypeValue = 'name' | 'distance';

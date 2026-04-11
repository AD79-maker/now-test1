
export interface BlogPost {
  id: string;
  title: string;
  category: '공지' | '이벤트' | '이용가이드' | '공간소식' | '창업정보';
  content: string;
  createdAt: string;
  author: string;
  thumbnail: string;
  tags: string[];
  metaTitle?: string;
  metaDesc?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
  type: '상주' | '비상주' | '회의실';
}

export interface ContactInquiry {
  id: string;
  name: string;
  phone: string;
  type: string;
  message: string;
  status: 'pending' | 'completed';
  createdAt: string;
}


import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: '공간소개', path: '/' },
    { name: '상주사무실', path: '/resident' },
    { name: '비상주사무실', path: '/virtual' },
    { name: '회의실', path: '/meeting' },
    { name: '갤러리', path: '/gallery' },
    { name: '위치안내', path: '/location' },
  ];

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white border-b border-brand-border/10 py-4 transition-all duration-300 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-heading text-brand-primary tracking-tighter flex items-center group">
          <span className="mr-2 group-hover:text-brand-accent transition-colors">NOW</span>
          <span className="text-xs font-body border-l border-brand-primary pl-2 opacity-60">동탄공유오피스 나우</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-12">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-brand-accent ${location.pathname === item.path ? 'text-brand-accent font-semibold' : 'text-brand-primary'}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="hidden md:block bg-brand-primary text-white px-8 py-2.5 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all shadow-md">
          문의 / 상담하기
        </Link>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-primary p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-brand-bg z-[60] transition-transform duration-500 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-12">
            <span className="text-2xl font-heading text-brand-primary">NOW</span>
            <button onClick={() => setIsMenuOpen(false)} className="text-brand-primary">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl font-heading border-b border-brand-border pb-3 ${location.pathname === item.path ? 'text-brand-accent' : 'text-brand-text'}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block bg-brand-primary text-white text-center py-5 rounded-2xl font-heading text-xl">
              문의 / 상담하기
            </Link>
            <p className="text-center mt-6 text-brand-text/40 text-sm">{CONTACT_INFO.phone}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary text-white/90 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-heading mb-8">NOW DONGTAN</h2>
            <p className="text-sm leading-relaxed mb-6 opacity-60">
              동탄에서 가장 쾌적하고 개방감 있는 프라이빗 워크스페이스.<br />
              단순한 사무 공간을 넘어, 당신의 비즈니스가 몰입하고 성장할 수 있는 최적의 환경을 제안합니다. 실제 사용 경험의 차이를 나우에서 경험하세요.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-heading mb-8 text-brand-accent">주요 서비스</h3>
            <ul className="space-y-4 text-sm opacity-60">
              <li><Link to="/resident" className="hover:text-brand-accent transition-colors">상주 사무실 (1~4인실)</Link></li>
              <li><Link to="/virtual" className="hover:text-brand-accent transition-colors">비상주 사무실 (사업장 주소)</Link></li>
              <li><Link to="/meeting" className="hover:text-brand-accent transition-colors">회의실 및 미팅룸</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-accent transition-colors">공간 투어 갤러리</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-heading mb-8 text-brand-accent">고객 지원</h3>
            <ul className="space-y-4 text-sm opacity-60">
              <li>전화/문자: {CONTACT_INFO.phone}</li>
              <li>카카오톡: {CONTACT_INFO.kakao}</li>
              <li>네이버 톡톡: {CONTACT_INFO.naverTalk}</li>
              <li>{CONTACT_INFO.hours}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-heading mb-8 text-brand-accent">오시는 길</h3>
            <p className="text-sm opacity-60 leading-relaxed mb-4">
              {CONTACT_INFO.address}<br />
              동탄역 차량 5분 거리 / 주차 가능
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-xs opacity-40 space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="mb-1">동탄공유오피스 나우 | 대표: 이영주 | 사업자등록번호: 356-87-02649</p>
            <p>© 2024 NOW Co-working Space. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-8">
            <Link to="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link>
            <Link to="/terms" className="hover:text-white transition-colors">이용약관</Link>
            <Link to="/admin" className="hover:text-white transition-colors">관리자 모드</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col space-y-4">
      <a 
        href="tel:0507-1436-2889" 
        className="bg-brand-accent text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-sm whitespace-nowrap font-heading">전화상담</span>
      </a>
      <a 
        href="http://talk.naver.com/W46NA2" 
        target="_blank" 
        rel="noreferrer" 
        className="bg-[#03C75A] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <span className="font-bold text-sm">톡톡</span>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-sm whitespace-nowrap font-heading">네이버 톡톡</span>
      </a>
    </div>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // 1. 마우스 우클릭 금지
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 2. 단축키 차단 (F12, Ctrl+Shift+I, Ctrl+U 등)
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault();
      }
      // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
      if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
        e.preventDefault();
      }
      // Ctrl+U (소스 보기)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
      }
      // Ctrl+S, Ctrl+P (저장, 인쇄)
      if (e.ctrlKey && (e.key === 's' || e.key === 'p')) {
        e.preventDefault();
      }
    };

    // 3. 이미지 드래그 금지
    const handleDragStart = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
      }
    };

    // 4. 복사 금지
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    // 5. 콘솔 경고 메시지
    console.log(
      '%c나우공유오피스 보안 시스템',
      'color: #1F3A2D; font-size: 24px; font-weight: bold; border: 2px solid #C9A56A; padding: 10px;'
    );
    console.log(
      '%c나우공유오피스의 모든 콘텐츠는 저작권법의 보호를 받습니다. 무단 도용 시 법적 책임을 물을 수 있습니다.',
      'color: #ff0000; font-size: 16px; font-weight: bold;'
    );

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('copy', handleCopy);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('copy', handleCopy);
    };
  }, []);

  return (
    <div 
      className="min-h-screen flex flex-col bg-brand-bg selection:bg-brand-accent selection:text-white"
      style={{
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
      }}
    >
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Layout;

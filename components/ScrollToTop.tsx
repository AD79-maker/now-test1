
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 페이지 이동 시 스크롤을 최상단으로 이동
    // 'smooth' 효과를 주어 부드럽게 이동하도록 설정
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;

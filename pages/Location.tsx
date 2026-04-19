
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Location: React.FC = () => {
  return (
    <div className="animate-fade-in bg-brand-bg min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-heading mb-6">오시는 길</h1>
          <p className="text-brand-text/50 max-w-2xl mx-auto leading-loose">
            동탄역 차량 5분, 사통팔달 교통의 중심지에 위치합니다. <br />
            수도권 어디서든 쉽고 빠르게 나우를 만나실 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          {/* Map Banner Section */}
          <a 
            href="https://naver.me/5oEzr3us" 
            target="_blank" 
            rel="noreferrer"
            className="group relative block overflow-hidden rounded-[3rem] shadow-2xl transition-all duration-500 hover:scale-[1.02] h-[500px]"
          >
            <img 
              src="/images/map-now.avif" 
              alt="Now Dongtan Map" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                console.error('Map image failed to load');
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200';
              }}
            />
            <div className="absolute inset-0 bg-brand-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
              <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-2xl font-heading tracking-tight">네이버 지도로 길찾기</p>
                <p className="text-white/60 text-sm mt-2 font-body">클릭 시 네이버 플레이스로 연결됩니다</p>
              </div>
            </div>
          </a>

          {/* Address & Info Section */}
          <div className="space-y-12">
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-brand-border/50">
              <h2 className="text-sm font-heading text-brand-accent uppercase tracking-[0.3em] mb-4">Detailed Address</h2>
              <h3 className="text-3xl font-heading text-brand-primary mb-6 leading-tight">
                경기도 화성시 동탄순환대로29길 62,<br />
                디스퀘어리버빌딩 3층
              </h3>
              <p className="text-brand-text/60 font-body leading-relaxed">
                1층에 CU가 있는 건물이며 <span className="text-brand-primary font-semibold">3층</span>으로 오시면 <br />
                나우공유오피스 입구가 위치해 있습니다.
              </p>
            </div>

            <div className="space-y-8 px-4">
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-2xl bg-brand-subBg text-brand-primary flex items-center justify-center font-heading mr-6 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h4 className="text-xl font-heading mb-1 text-brand-primary">대중교통 이용 시</h4>
                  <p className="text-brand-text/50 text-sm leading-relaxed font-body">
                    동탄역(SRT/GTX)에서 차량 5분 거리입니다. <br />
                    인근 버스정류장 '영천유치원' 하차 시 도보 1분 내외입니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-2xl bg-brand-subBg text-brand-primary flex items-center justify-center font-heading mr-6 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 10l7-7m0 0l7 7m-7-7v18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h4 className="text-xl font-heading mb-1 text-brand-primary">승용차 이용 시</h4>
                  <p className="text-brand-text/50 text-sm leading-relaxed font-body">
                    내비게이션에 '나우공유오피스' 또는 주소 검색. <br />
                    경부고속도로 기흥IC 및 동탄IC에서 매우 인접합니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-2xl bg-brand-subBg text-brand-primary flex items-center justify-center font-heading mr-6 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h4 className="text-xl font-heading mb-1 text-brand-primary">주차 안내</h4>
                  <p className="text-brand-text/50 text-sm leading-relaxed font-body">
                    건물 내 지하 1층~2층 주차장을 이용해 주세요. <br />
                    방문객 및 입주사 모두에게 넉넉한 주차 지원을 제공합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;

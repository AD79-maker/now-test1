
import React from 'react';
import { Link } from 'react-router-dom';

const ResidentOffice: React.FC = () => {
  const services = [
    "365일 24시간 연중무휴 자유 출입 시스템",
    "지문 및 카드키 보안 + 복도 24시간 CCTV 가동",
    "사무실별 개별 천장형 시스템 냉난방기 설치",
    "기가급 초고속 유/무선 인터넷 기본 제공",
    "인체공학적 고급 사무용 의자 및 광폭 책상",
    "회의실 매월 일정 시간 무료 사용권 부여",
    "프리미엄 원두커피 및 각종 티백 무제한 제공",
    "우편물 및 택배 수령 대행 + 알림 메시지 발송",
    "항상 청결한 오피스 클리닝 서비스",
    "공용 프린터 및 고성능 복합기 무상 지원",
    "사업자 등록 주소지 제공 및 행정 지원 서비스",
    "스타일리시한 비즈니스 카페 및 라운지 이용"
  ];

  return (
    <div className="animate-fade-in bg-brand-bg min-h-screen">
      <section className="py-24 bg-brand-subBg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading mb-10">상주 사무실</h1>
          <p className="text-xl text-brand-text/60 max-w-3xl mx-auto leading-loose font-body">
            나우의 상주 사무실은 단순히 칸막이로 나뉜 방이 아닙니다. <br />
            가장 높은 집중력과 가장 편안한 업무 경험을 위해 설계된 <br />
            당신만을 위한 고유한 업무 공간입니다.
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
            <div className="lg:w-1/2">
              <img 
                src="/images/dongtan-coworking-office-lounge-01.jpg" 
                alt="Office Detail" 
                referrerPolicy="no-referrer"
                className="rounded-[4rem] shadow-2xl" 
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-heading mb-10 leading-tight">답답함을 덜어낸 <br /><span className="text-brand-accent">압도적 개방감</span></h2>
              <div className="space-y-6 text-brand-text/70 leading-loose text-lg font-body">
                <p>
                  나우공유오피스는 동탄 지역 타 오피스 대비 약 1.5배 더 높은 층고를 확보했습니다. 높은 층고는 공간의 답답함을 드라마틱하게 줄여줄 뿐만 아니라, 창의적인 사고와 심리적 안정감을 제공합니다.
                </p>
                <p>
                  모든 사무실에는 이중 차음재를 사용한 특수 방음벽이 설치되어 있습니다. 옆 호실의 소음 걱정 없이 중요한 미팅이나 화상 회의를 프라이빗하게 진행할 수 있는 최적의 환경을 구축했습니다.
                </p>
                <p>
                  냉난방 역시 입주사의 컨디션에 맞출 수 있도록 개별 조절 시스템을 적용했습니다. 중앙 제어 방식의 단점인 온도 불균형을 해소하여 사계절 내내 최상의 업무 컨디션을 유지할 수 있습니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-brand-primary text-white rounded-[5rem] p-16 md:p-24 mb-32">
            <h2 className="text-4xl font-heading mb-16 text-center">풀옵션 인프라 & 서비스</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s, i) => (
                <div key={i} className="flex items-start space-x-4 opacity-90">
                  <svg className="w-6 h-6 text-brand-accent mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-lg leading-snug">{s}</span>
                </div>
              ))}
            </div>
            <p className="mt-20 text-center opacity-40 text-sm italic font-body">※ 월 이용료 외의 관리비, 공과금 등의 추가 비용은 전혀 발생하지 않습니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { t: '1인실', d: '독립된 공간에서 업무에만 몰입하고 싶은 프리랜서 및 창업가에게 추천합니다.', img: '/images/dongtan-shared-office-private-room-01.jpg' },
              { t: '2인실', d: '소규모 팀이나 파트너십 비즈니스에 최적화된 공간 설계입니다.', img: '/images/dongtan-shared-office-private-room-05.jpg' },
              { t: '3~4인실', d: '성장하는 기업을 위한 여유 있는 공간으로 쾌적한 팀워크를 보장합니다.', img: '/images/dongtan-shared-office-private-room-03.jpg' }
            ].map((room, i) => (
              <div key={i} className="bg-white rounded-[3rem] overflow-hidden shadow-sm group border border-brand-border">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={room.img} 
                    alt={room.t} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-heading mb-4 text-brand-primary">{room.t}</h3>
                  <p className="text-brand-text/60 leading-loose h-24 font-body">{room.d}</p>
                  <Link to="/gallery" className="block text-center bg-brand-bg py-4 rounded-full font-heading text-brand-primary hover:bg-brand-primary hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-1">프리미엄 공간 둘러보기</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResidentOffice;


import React from 'react';
import { Link } from 'react-router-dom';

const MeetingRoom: React.FC = () => {
  return (
    <div className="animate-fade-in bg-brand-bg min-h-screen">
      <section className="py-24 bg-brand-subBg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading mb-10">회의실 및 미팅룸</h1>
          <p className="text-xl text-brand-text/60 max-w-3xl mx-auto leading-loose font-body">
            당신의 프레젠테이션이 가장 돋보이는 공간. <br />
            최신 장비와 정돈된 분위기로 비즈니스의 격을 높여드립니다.
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
            <div className="lg:w-1/2">
              <img src="/images/dongtan-coworking-meeting-room-01.avif" alt="Meeting Room" className="rounded-[4rem] shadow-2xl" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-heading mb-10 leading-tight">성공적인 비즈니스를 위한 <br /><span className="text-brand-accent">스마트 미팅 솔루션</span></h2>
              <div className="space-y-6 text-brand-text/70 leading-loose text-lg font-body">
                <p>
                  나우의 회의실은 1인부터 6인까지 수용 가능한 넉넉한 공간을 제공합니다. 55인치 회의용 모니터와 초고속 무선 인터넷을 통해 선명한 자료 공유가 가능하며, 대형 화이트보드로 원활한 브레인스토밍을 지원합니다.
                </p>
                <p>
                  중요한 고객을 모시는 자리인 만큼, 공간의 조도와 온도, 향기까지 세심하게 관리합니다. 장시간 회의에도 피로하지 않은 인체공학적 미팅 체어가 구비되어 있어 성과 있는 대화를 돕습니다.
                </p>
                <p>
                  상주 입주사는 물론 외부 예약 고객님들도 카페 라운지의 프리미엄 커피 서비스를 자유롭게 이용하실 수 있습니다. 동탄역 차량 5분 거리의 뛰어난 접근성으로 외부 바이어 미팅 장소로 최적입니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-brand-subBg rounded-[5rem] p-16 md:p-24 mb-32">
            <h2 className="text-4xl font-heading mb-16 text-center text-brand-primary">이용 안내 및 요금</h2>
            <div className="max-w-4xl mx-auto space-y-10">
              <div className="flex justify-between items-center border-b border-brand-border pb-6">
                <div>
                  <h4 className="text-2xl font-heading text-brand-primary">상주/비상주 입주사</h4>
                  <p className="text-brand-text/50 mt-1">월 일정 시간 무료 제공</p>
                </div>
                <p className="text-3xl font-heading text-brand-accent">Free </p>
              </div>
              <div className="flex justify-between items-center border-b border-brand-border pb-6">
                <div>
                  <h4 className="text-2xl font-heading text-brand-primary">외부 예약</h4>
                  <p className="text-brand-text/50 mt-1">평일 오전 9시 ~ 오후 9시 예약 가능</p>
                </div>
                <p className="text-3xl font-heading text-brand-accent"> 가격은 플레이스 참고</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
                <ul className="space-y-3 opacity-60 font-body text-sm">
                  <li>• 초고속 기가 와이파이 기본 제공</li>
                  <li>• 55인치 회의용 모니터 및 연결 케이블 지원</li>
                  <li>• 대형 화이트 보드 및 마커 제공</li>
                </ul>
                <ul className="space-y-3 opacity-60 font-body text-sm">
                  <li>• 프리미엄 원두 커피 및 티 무제한</li>
                  <li>• 개별 천장형 시스템 냉난방 지원</li>
                  <li>• 주차 지원 </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact" className="bg-brand-primary text-white px-16 py-6 rounded-full text-2xl font-heading hover:scale-105 transition-all shadow-xl inline-block">
              문의 / 상담하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeetingRoom;

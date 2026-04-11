
import React from 'react';
import { Link } from 'react-router-dom';

const VirtualOffice: React.FC = () => {
  return (
    <div className="animate-fade-in bg-brand-bg min-h-screen">
      <section className="py-24 bg-brand-subBg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading mb-10">비상주 사무실</h1>
          <p className="text-xl text-brand-text/60 max-w-3xl mx-auto leading-loose font-body">
            공간은 빌리지 않아도 신뢰는 함께 빌려드립니다. <br />
            나우만의 프리미엄 주소지와 전문 행정 지원 서비스로 <br />
            당신의 비즈니스 가치를 격상시키세요.
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
              <div>
                <h2 className="text-4xl font-heading mb-10 leading-tight">단순한 주소지가 아닌 <br /><span className="text-brand-accent">비즈니스의 얼굴</span></h2>
                <div className="space-y-6 text-brand-text/70 leading-loose text-lg font-body">
                  <p>
                    재택근무자나 프리랜서 활동 시, 자택 주소를 사업장으로 등록하는 것은 개인 정보 노출과 비즈니스 신뢰도 저하의 원인이 될 수 있습니다. 나우공유오피스는 동탄 핵심 상권의 프리미엄 빌딩 주소지를 제공하여 비즈니스의 첫인상을 완벽하게 관리해 드립니다.
                  </p>
                  <p>
                    단순히 주소만 빌려주는 저가형 비상주 서비스와 비교하지 마세요. 나우는 상주 매니저가 상시 근무하며 모든 우편물과 택배를 실시간으로 분류하고 수령 여부를 즉시 알림으로 전송해 드립니다.
                  </p>
                  <p>
                    또한 관공서 실사나 은행 대출 등 실제 공간 확인이 필요한 경우, 전용 미팅룸과 공간을 지원하여 비즈니스에 차질이 없도록 밀착 대응 서비스를 제공합니다.
                  </p>
                </div>
              </div>
              <div className="bg-brand-primary text-white p-16 rounded-[4rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent opacity-20 rounded-full blur-3xl"></div>
                <h3 className="text-2xl font-heading mb-8 text-brand-accent">비상주 핵심 서비스</h3>
                <ul className="space-y-5 opacity-90 font-body">
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-brand-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span>프리미엄 빌딩 정식 주소지 제공</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-brand-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span>관공서/은행 실사 완벽 대응 지원</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-brand-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span>우편물 도착 시 즉시 카톡 알림 발송</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-brand-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span>월 2시간 전용 미팅룸 무료 이용</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-brand-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span>전문 세무사/법무사 연계 지원 서비스</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-4xl font-heading text-center mb-16">계약 및 이용 절차</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-32">
              {[
                { s: '01. 상담 및 신청', d: '전화 또는 온라인 폼을 통해 업종과 기간을 말씀해 주세요.' },
                { s: '02. 구비서류 제출', d: '신분증 및 사업자 유형별 필요 서류를 전달받습니다.' },
                { s: '03. 전자계약 체결', d: '방문 없이 간편한 전자 서명을 통해 계약을 완료합니다.' },
                { s: '04. 주소지 사용 시작', d: '즉시 임대차계약서가 발송되며 사업자 등록이 가능합니다.' }
              ].map((step, i) => (
                <div key={i} className="bg-white p-10 rounded-3xl border border-brand-border text-center">
                  <span className="text-brand-accent font-heading text-xl block mb-4">{step.s}</span>
                  <p className="text-sm leading-relaxed text-brand-text/60 font-body">{step.d}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/contact" className="bg-brand-primary text-white px-20 py-6 rounded-full text-2xl font-heading hover:scale-105 transition-all shadow-xl inline-block">
                비상주 서비스 신청하기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtualOffice;

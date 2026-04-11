
import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-bg py-24 px-4">
        <div className="max-w-md w-full bg-white p-16 rounded-[4rem] shadow-2xl text-center">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h2 className="text-3xl font-heading mb-4">접수가 완료되었습니다!</h2>
          <p className="text-brand-text/60 leading-relaxed mb-10 font-body">
            상담 매니저가 확인 후 1시간 이내에 <br />
            연락드리겠습니다. 감사합니다.
          </p>
          <button onClick={() => setSubmitted(false)} className="bg-brand-primary text-white w-full py-4 rounded-full font-heading text-lg">홈으로 이동</button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in bg-brand-bg min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-2/5">
            <h1 className="text-5xl font-heading mb-10 leading-tight text-brand-primary">투어 및 입주 상담</h1>
            <p className="text-xl text-brand-text/60 mb-12 leading-loose font-body">
              나우공유오피스는 방문 전 예약제로 운영됩니다. <br />
              직접 공간을 보시고 독보적인 개방감을 확인하세요. <br />
              비상주 계약 및 단체 회의실 예약도 환영합니다.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-brand-subBg rounded-3xl flex items-center justify-center text-brand-primary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <p className="text-xs text-brand-text/40 font-heading uppercase tracking-widest mb-1">상담 직통</p>
                  <p className="text-2xl font-heading text-brand-primary">{CONTACT_INFO.phone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-brand-subBg rounded-3xl flex items-center justify-center text-brand-primary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <p className="text-xs text-brand-text/40 font-heading uppercase tracking-widest mb-1">카카오톡 채널</p>
                  <p className="text-2xl font-heading text-brand-primary">{CONTACT_INFO.kakao}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <form onSubmit={handleSubmit} className="bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl border border-brand-border/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-sm font-heading mb-3 uppercase tracking-widest opacity-50">성함 / 기업명 *</label>
                  <input required type="text" className="w-full bg-brand-bg border border-brand-border rounded-2xl px-6 py-5 focus:ring-2 focus:ring-brand-accent outline-none transition-all font-body" placeholder="성함을 입력하세요." />
                </div>
                <div>
                  <label className="block text-sm font-heading mb-3 uppercase tracking-widest opacity-50">연락처 *</label>
                  <input required type="tel" className="w-full bg-brand-bg border border-brand-border rounded-2xl px-6 py-5 focus:ring-2 focus:ring-brand-accent outline-none transition-all font-body" placeholder="010-0000-0000" />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-heading mb-3 uppercase tracking-widest opacity-50">상담 희망 서비스 *</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {['상주 사무실', '비상주 사무실', '회의실 대관'].map(type => (
                    <label key={type} className="flex items-center justify-center border border-brand-border rounded-2xl p-5 cursor-pointer hover:bg-brand-subBg transition-all has-[:checked]:bg-brand-primary has-[:checked]:text-white group">
                      <input type="radio" name="service" value={type} className="hidden" defaultChecked={type === '상주 사무실'} />
                      <span className="text-sm font-heading">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <label className="block text-sm font-heading mb-3 uppercase tracking-widest opacity-50">문의 내용</label>
                <textarea className="w-full bg-brand-bg border border-brand-border rounded-2xl px-6 py-5 h-44 focus:ring-2 focus:ring-brand-accent outline-none transition-all resize-none font-body leading-loose" placeholder="궁금하신 내용을 남겨주세요 (예: 입주 시기, 인원 등)"></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-primary text-white py-6 rounded-full text-2xl font-heading hover:bg-opacity-90 transition-all shadow-xl">
                상담 예약 신청하기
              </button>
              <p className="text-[10px] text-center text-brand-text/30 mt-6 italic">※ 입력하신 정보는 상담 목적으로만 활용되며 안전하게 보호됩니다.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

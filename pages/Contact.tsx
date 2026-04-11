
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const channels = [
    {
      id: 'naver-place',
      name: '네이버 플레이스 예약',
      desc: '간편하게 방문 일정을 예약하세요.',
      btnText: '예약하기',
      link: 'https://naver.me/5oEzr3us',
      icon: (
        <div className="w-14 h-14 bg-[#03C75A] rounded-2xl flex items-center justify-center text-white shadow-lg">
          <span className="text-3xl font-bold">N</span>
        </div>
      ),
      hoverColor: 'hover:border-[#03C75A]/40',
      btnColor: 'bg-[#03C75A]'
    },
    {
      id: 'naver-talk',
      name: '네이버 톡톡 상담',
      desc: '실시간으로 궁금한 점을 문의하세요.',
      btnText: '문의하기',
      link: `https://${CONTACT_INFO.naverTalk}`,
      icon: (
        <div className="w-14 h-14 bg-[#03C75A] rounded-2xl flex items-center justify-center text-white shadow-lg">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2 22l5-1.338c1.47.851 3.179 1.338 5 1.338 5.523 0 10-4.477 10-10S17.523 2 12 2zm0 16c-1.477 0-2.847-.395-4.022-1.082l-.288-.168-2.346.628.628-2.346-.168-.288C5.12 13.57 4.725 12.2 4.725 10.725 4.725 7.01 7.735 4 11.45 4s6.725 3.01 6.725 6.725S15.165 17.45 11.45 17.45z"/>
          </svg>
        </div>
      ),
      hoverColor: 'hover:border-[#03C75A]/40',
      btnColor: 'bg-[#03C75A]'
    },
    {
      id: 'kakao',
      name: '카카오톡 채널',
      desc: '카톡으로 편하게 상담받으세요.',
      btnText: '상담하기',
      link: `https://pf.kakao.com/_DbdJn`,
      icon: (
        <div className="w-14 h-14 bg-[#FEE500] rounded-2xl flex items-center justify-center text-[#3C1E1E] shadow-lg">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.558 1.707 4.8 4.315 6.055-.17.625-.612 2.262-.7 2.584-.113.415.14.408.296.305.12-.08 1.955-1.326 2.738-1.86.44.065.894.1 1.35.1 4.97 0 9-3.186 9-7.116C21 6.185 16.97 3 12 3z"/>
          </svg>
        </div>
      ),
      hoverColor: 'hover:border-[#FEE500]/40',
      btnColor: 'bg-[#FEE500] !text-[#3C1E1E]'
    },
    {
      id: 'phone',
      name: '상담 전화/문자',
      value: CONTACT_INFO.phone,
      desc: '전화로 빠르게 상담하세요.',
      btnText: '전화하기',
      link: `tel:${CONTACT_INFO.phone}`,
      icon: (
        <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center text-white shadow-lg">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
        </div>
      ),
      hoverColor: 'hover:border-brand-primary/40',
      btnColor: 'bg-brand-primary'
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="Office Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/50 backdrop-blur-md"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading mb-8 text-brand-primary tracking-tight">문의 및 상담</h1>
          <p className="text-xl text-brand-text/70 max-w-2xl mx-auto leading-relaxed font-body">
            나우공유오피스는 방문 전 예약제로 운영됩니다.<br />
            직접 공간을 보시고 독보적인 개방감을 확인하세요.<br />
            비상주 계약 및 단체 회의실 예약도 환영합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {channels.map((channel) => (
            <a
              key={channel.id}
              href={channel.link}
              target={channel.id === 'phone' ? undefined : '_blank'}
              rel={channel.id === 'phone' ? undefined : 'noreferrer'}
              className={`group relative bg-white/80 backdrop-blur-2xl p-10 rounded-[3rem] border border-white/60 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/95 ${channel.hoverColor} flex items-center space-x-8`}
            >
              <div className="flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
                {channel.icon}
              </div>
              
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-heading text-brand-primary/50 uppercase tracking-widest text-sm mb-1">{channel.name}</h3>
                  <svg className="w-5 h-5 text-brand-text/20 group-hover:text-brand-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                
                {channel.value ? (
                  <p className="text-3xl font-heading text-brand-primary mb-2 tracking-tight">{channel.value}</p>
                ) : (
                  <h4 className="text-2xl font-heading text-brand-primary mb-2 tracking-tight">{channel.name.split(' ')[0]} {channel.name.split(' ')[1]}</h4>
                )}
                
                <p className="text-sm text-brand-text/50 mb-6 font-body leading-relaxed">{channel.desc}</p>
                
                <div className={`inline-flex items-center px-8 py-3 rounded-full text-sm font-heading text-white transition-all shadow-lg group-hover:shadow-brand-primary/20 ${channel.btnColor}`}>
                  {channel.btnText}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;

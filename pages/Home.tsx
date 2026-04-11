
import React from 'react';
import { Link } from 'react-router-dom';
import { SAMPLE_REVIEWS, SAMPLE_FAQS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center bg-brand-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Main Lobby" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block text-brand-accent font-heading tracking-[0.3em] text-sm mb-6 uppercase">Premium Private Workspace</span>
            <h1 className="text-5xl md:text-7xl font-heading text-white leading-tight mb-8">
              동탄에서 가장 쾌적하고 <br />
              <span className="text-brand-accent">개방감 있는</span> 프라이빗 오피스
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl font-body">
              답답한 칸막이와 좁은 복도는 잊으세요. <br />
              나우공유오피스는 높은 층고와 정제된 공간 설계로 당신의 비즈니스에 <br />
              완벽한 몰입과 새로운 영감을 제공합니다.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact" className="bg-brand-accent text-white px-12 py-5 rounded-full text-lg font-heading hover:bg-opacity-90 transition-all text-center shadow-xl hover:-translate-y-1">
                방문 투어 예약하기
              </Link>
              <Link to="/resident" className="bg-white/5 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-full text-lg font-heading hover:bg-white/10 transition-all text-center">
                상주사무실 둘러보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-brand-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1539628399213-d6aa89c93074?auto=format&fit=crop&q=80&w=1200" alt="Space Detail" className="rounded-[4rem] shadow-2xl relative z-10" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-subBg rounded-full -z-10 animate-pulse"></div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-heading mb-10 leading-tight">우리가 공간을 <br /><span className="text-brand-accent">다르게 정의하는 이유</span></h2>
              <div className="space-y-8 text-brand-text/70 leading-relaxed font-body">
                <p>
                  단순한 사무실 임대를 넘어, 저희는 '업무 경험의 질'을 최우선으로 생각합니다. 장시간 머무는 공간이기에 시각적인 개방감과 실질적인 쾌적함은 업무 성과에 직접적인 영향을 미칩니다.
                </p>
                <p>
                  나우공유오피스는 동탄 내 평균적인 공유오피스보다 1.5배 높은 층고를 확보하여 심리적인 여유를 제공합니다. 또한, 모든 벽체에 특수 방음 설계를 적용하여 프라이빗한 비즈니스 대화가 외부로 유출되지 않도록 철저히 배려했습니다.
                </p>
                <p>
                  감성적인 무드보다는 실제 사용자가 느낄 수 있는 편리함에 집중합니다. 인체공학적 사무가구, 눈이 편안한 조도, 그리고 계절에 상관없이 일정한 쾌적함을 유지하는 개별 냉난방 시스템까지, 나우의 모든 요소는 당신의 몰입을 위해 존재합니다.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div className="border-l-4 border-brand-accent pl-6">
                  <p className="text-3xl font-heading text-brand-primary mb-2">3.5m</p>
                  <p className="text-xs opacity-50 uppercase tracking-widest text-brand-primary">Ceiling Height</p>
                </div>
                <div className="border-l-4 border-brand-accent pl-6">
                  <p className="text-3xl font-heading text-brand-primary mb-2">Private</p>
                  <p className="text-xs opacity-50 uppercase tracking-widest text-brand-primary">Soundproof Solution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-brand-subBg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-heading mb-6">최상의 공간 솔루션</h2>
            <p className="text-brand-text/60">비즈니스의 규모와 성격에 맞춘 다양한 공간 서비스를 제안합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: '상주 사무실', desc: '1~4인용 프라이빗 룸. 높은 층고와 개별 냉난방으로 집중력을 극대화하는 독립 업무 공간입니다.', path: '/resident' },
              { title: '비상주 사무실', desc: '프리미엄 사업장 주소지와 행정 서비스. 신뢰할 수 있는 비즈니스 거점을 합리적으로 제공합니다.', path: '/virtual' },
              { title: '회의실 & 라운지', desc: '스마트 장비가 완비된 미팅룸과 호텔 수준의 라운지. 외부 고객 모시기에 최고의 환경입니다.', path: '/meeting' }
            ].map((s, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all group">
                <h3 className="text-2xl font-heading mb-6 text-brand-primary">{s.title}</h3>
                <p className="text-brand-text/60 mb-10 leading-loose h-32">{s.desc}</p>
                <Link to={s.path} className="inline-block border-b-2 border-brand-primary pb-1 font-heading text-brand-primary group-hover:text-brand-accent group-hover:border-brand-accent transition-colors">자세히 보기 →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-32 bg-brand-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-heading mb-10">나우는 이런 분들께 <br /><span className="text-brand-accent">최고의 해답</span>이 됩니다.</h2>
              <ul className="space-y-6">
                {[
                  { t: '1인 창업가 & 프리랜서', d: '집의 유혹과 카페의 소음에서 벗어나 완벽한 몰입 공간을 찾는 분' },
                  { t: '스타트업 소규모 팀', d: '초기 자본 부담 없이 프리미엄 시설과 인프라를 즉시 구축하려는 팀' },
                  { t: '온라인 사업자', d: '신뢰도 높은 주소지와 철저한 우편물 관리가 필요한 디지털 노마드' },
                  { t: '전문직 수험생', d: '장시간 공부에도 쾌적함을 유지하는 고급스러운 1인 전용 공간이 필요한 분' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-4 group">
                    <span className="w-10 h-10 rounded-full border border-brand-accent flex items-center justify-center text-brand-accent font-heading flex-shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-all">{i+1}</span>
                    <div>
                      <h4 className="text-xl font-heading mb-1">{item.t}</h4>
                      <p className="opacity-60 leading-relaxed">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800" className="rounded-3xl mt-12" alt="Office View" />
              <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800" className="rounded-3xl" alt="Lounge View" />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews & FAQ */}
      <section className="py-32 bg-brand-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading text-center mb-20">입주사 생생 후기</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {SAMPLE_REVIEWS.slice(0, 4).map(r => (
              <div key={r.id} className="bg-white p-10 rounded-3xl border border-brand-border/50">
                <div className="flex text-brand-accent mb-4">
                  {[...Array(r.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  ))}
                </div>
                <p className="text-sm italic text-brand-text/70 leading-relaxed mb-6">"{r.content}"</p>
                <div className="border-t pt-4 text-xs">
                  <span className="font-heading">{r.author}</span>
                  <span className="opacity-40 ml-2">| {r.type}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading text-center mb-16">자주 묻는 질문</h2>
            <div className="space-y-4">
              {SAMPLE_FAQS.map(faq => (
                <details key={faq.id} className="group bg-white rounded-2xl border border-brand-border">
                  <summary className="flex justify-between items-center p-8 cursor-pointer list-none font-heading text-lg">
                    {faq.question}
                    <span className="text-brand-accent transform group-open:rotate-180 transition-transform">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                  </summary>
                  <div className="px-8 pb-8 text-brand-text/60 leading-loose">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-primary text-white text-center">
        <h2 className="text-4xl font-heading mb-10 leading-tight">성공을 위한 첫 단추, <br />나우공유오피스와 함께하세요.</h2>
        <Link to="/contact" className="bg-brand-accent text-white px-16 py-6 rounded-full text-xl font-heading hover:scale-105 transition-all shadow-xl inline-block">
          무료 투어 예약하기
        </Link>
      </section>
    </div>
  );
};

export default Home;

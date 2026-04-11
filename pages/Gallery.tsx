
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { src: '/images/dongtan-virtual-office-entrance-02.jpg', t: '테라스', d: '나우 공유오피스의 치동천을 바라보면 편안한 휴식을 제공하는 공간입니다.' },
    { src: '/images/dongtan-virtual-office-entrance-04.jpg', t: '치동천 전경', d: '치동천의 아름다운 전경은 나우의 얼굴입니다.' },
    { src: '/images/dongtan-virtual-office-entrance-03.jpg', t: '야간 오피스 풍경', d: '24시간 안전하고 쾌적하게 유지되는 나우의 밤입니다.' },
    { src: '/images/dongtan-shared-office-private-room-01.jpg', t: '1인 전용실', d: '독보적인 층고와 집중력을 높여주는 프라이빗 공간입니다.' },
    { src: '/images/dongtan-shared-office-private-room-03.jpg', t: '1인 전용실', d: '독보적인 층고와 집중력을 높여주는 프라이빗 공간입니다.' },
    { src: '/images/dongtan-coworking-meeting-room-01.jpg', t: '회의실/미팅룸', d: '55인치 회의용 모니터와 대형 화이트 보드가 완비된 전문 회의 공간입니다.' },
    { src: '/images/dongtan-coworking-office-lounge-01.jpg', t: '복도 전경', d: '답답함을 덜어낸 넓은 복도와 세련된 인테리어입니다.' },
    { src: '/images/dongtan-shared-office-private-room-05.jpg', t: '2인 전용실', d: '소규모 팀의 유연한 업무를 지원하는 쾌적한 룸입니다.' },
    { src: '/images/dongtan-virtual-office-entrance-05.jpg', t: '휴게 공간 및 카페테리아', d: '원두커피와 10가지 티와 다양한 다과가 준비된 편의 공간입니다.' }
  ];

  return (
    <div className="animate-fade-in bg-brand-bg min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-heading mb-6">공간 갤러리</h1>
          <p className="text-brand-text/50 max-w-2xl mx-auto leading-loose">
            동탄 나우공유오피스의 구석구석을 미리 살펴보세요. <br />
            사진보다 실물이 더욱 쾌적한 공간임을 약속드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-[3rem] bg-white shadow-lg cursor-pointer">
              <div className="h-80 overflow-hidden">
                <img 
                  src={img.src} 
                  alt={img.t} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="absolute inset-0 bg-brand-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                <h3 className="text-white text-2xl font-heading mb-2">{img.t}</h3>
                <p className="text-white/80 text-sm font-body">{img.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

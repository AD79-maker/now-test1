
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Location: React.FC = () => {
  return (
    <div className="animate-fade-in bg-brand-bg min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-heading mb-6">오시는 길</h1>
          <p className="text-brand-text/50 max-w-2xl mx-auto leading-loose">
            동탄역 도보 5분, 사통팔달 교통의 중심지에 위치합니다. <br />
            수도권 어디서든 쉽고 빠르게 나우를 만나실 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          <div className="bg-brand-subBg rounded-[4rem] h-[500px] flex items-center justify-center border-2 border-dashed border-brand-border">
            <div className="text-center p-10">
              <svg className="w-16 h-16 text-brand-accent mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <h3 className="text-2xl font-heading text-brand-primary mb-2">[ Naver Map Integration ]</h3>
              <p className="text-brand-text/40 text-sm italic">실제 운영 사이트에서는 네이버 지도 API가 활성화됩니다.</p>
              <a href={`https://map.naver.com/v5/search/${CONTACT_INFO.address}`} target="_blank" rel="noreferrer" className="mt-8 inline-block text-brand-primary border-b border-brand-primary font-heading">지도로 보기 →</a>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-heading mb-6 border-l-8 border-brand-accent pl-6">상세 주소</h2>
              <p className="text-xl leading-relaxed text-brand-text/80 font-body">
                {CONTACT_INFO.address}<br />
                나우빌딩 7층 (엘리베이터 하차 후 우측)
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-heading mb-6 border-l-8 border-brand-accent pl-6">교통수단별 안내</h2>
              <div className="space-y-10">
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary text-white flex items-center justify-center font-heading mr-6 group-hover:bg-brand-accent transition-all">역</div>
                  <div>
                    <h4 className="text-2xl font-heading mb-2">지하철 / SRT (동탄역)</h4>
                    <p className="text-brand-text/60 leading-relaxed font-body">
                      SRT 동탄역 2번 출구에서 직진 후, 첫 번째 사거리에서 우회전하여 약 100m 거리입니다. (도보 약 5분 소요)
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary text-white flex items-center justify-center font-heading mr-6 group-hover:bg-brand-accent transition-all">차</div>
                  <div>
                    <h4 className="text-2xl font-heading mb-2">승용차 이용 시</h4>
                    <p className="text-brand-text/60 leading-relaxed font-body">
                      내비게이션에 '나우공유오피스' 검색. 경부고속도로 기흥IC 및 동탄IC에서 10분 내 거리에 위치하고 있습니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary text-white flex items-center justify-center font-heading mr-6 group-hover:bg-brand-accent transition-all">P</div>
                  <div>
                    <h4 className="text-2xl font-heading mb-2">주차 안내</h4>
                    <p className="text-brand-text/60 leading-relaxed font-body">
                      건물 지하 1층~3층에 넉넉한 주차 공간이 확보되어 있습니다. 입주사는 무료 등록 지원, 방문객은 할인권을 제공합니다.
                    </p>
                  </div>
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

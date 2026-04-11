
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResult, setAiResult] = useState('');
  const [loading, setLoading] = useState(false);

  const generateAIContent = async () => {
    if (!aiPrompt) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `당신은 최고 수준의 카피라이터입니다. 다음 주제에 대해 공유오피스 블로그 포스팅 초안을 한국어로 작성하세요. 주제: ${aiPrompt}`,
      });
      setAiResult(response.text || '결과를 생성할 수 없습니다.');
    } catch (error) {
      setAiResult('에러가 발생했습니다: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-fade-in bg-gray-50 min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden min-h-[700px] flex border border-brand-border/30">
          {/* Sidebar */}
          <div className="w-72 bg-brand-primary text-white p-10 flex flex-col">
            <h2 className="text-2xl font-heading mb-10 text-brand-accent">NOW Admin</h2>
            <nav className="space-y-4 flex-grow">
              {[
                { id: 'dashboard', label: '대시보드' },
                { id: 'posts', label: '게시글 관리' },
                { id: 'inquiries', label: '상담 내역' },
                { id: 'ai', label: 'AI 전략 도구' },
                { id: 'settings', label: '기본 설정' }
              ].map(tab => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-6 py-4 rounded-2xl text-sm font-heading transition-all ${activeTab === tab.id ? 'bg-brand-accent text-white shadow-lg' : 'hover:bg-white/5 opacity-60'}`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
            <div className="pt-10 border-t border-white/10 opacity-30 text-[10px] text-center">
              © 2024 NOW Management System
            </div>
          </div>

          {/* Content */}
          <div className="flex-grow p-16 overflow-y-auto max-h-[800px]">
            {activeTab === 'dashboard' && (
              <div className="space-y-10">
                <h3 className="text-3xl font-heading">실시간 현황</h3>
                <div className="grid grid-cols-3 gap-8">
                  <div className="bg-brand-bg p-8 rounded-3xl border border-brand-border">
                    <p className="text-xs opacity-50 uppercase tracking-widest mb-2 font-heading">오늘의 상담</p>
                    <p className="text-4xl font-heading text-brand-primary">12 <span className="text-sm">건</span></p>
                  </div>
                  <div className="bg-brand-bg p-8 rounded-3xl border border-brand-border">
                    <p className="text-xs opacity-50 uppercase tracking-widest mb-2 font-heading">잔여 호실</p>
                    <p className="text-4xl font-heading text-brand-primary">3 <span className="text-sm">개</span></p>
                  </div>
                  <div className="bg-brand-bg p-8 rounded-3xl border border-brand-border">
                    <p className="text-xs opacity-50 uppercase tracking-widest mb-2 font-heading">총 비상주</p>
                    <p className="text-4xl font-heading text-brand-primary">148 <span className="text-sm">개</span></p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'posts' && (
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <h3 className="text-3xl font-heading">게시글 관리</h3>
                  <button className="bg-brand-primary text-white px-8 py-3 rounded-full text-sm font-heading">새 글 작성</button>
                </div>
                <table className="w-full text-left text-sm font-body">
                  <thead className="bg-gray-50 text-gray-400 font-heading">
                    <tr>
                      <th className="p-4">제목</th>
                      <th className="p-4">카테고리</th>
                      <th className="p-4">날짜</th>
                      <th className="p-4 text-right">관리</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {['동탄역 정부 지원금 가이드', '봄맞이 인테리어 리뉴얼', '효율적 오피스 활용법'].map((t, i) => (
                      <tr key={i} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-medium">{t}</td>
                        <td className="p-4">소식</td>
                        <td className="p-4 opacity-40">2024-03-15</td>
                        <td className="p-4 text-right space-x-4">
                          <button className="text-brand-primary hover:underline">수정</button>
                          <button className="text-red-400 hover:underline">삭제</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'ai' && (
              <div className="space-y-8">
                <h3 className="text-3xl font-heading">AI 콘텐츠 전략 어시스턴트</h3>
                <div className="bg-brand-bg p-10 rounded-3xl border border-brand-border">
                  <p className="text-sm font-heading mb-4 text-brand-primary">블로그나 홍보 문구의 주제를 입력하세요.</p>
                  <div className="flex gap-4">
                    <input 
                      type="text" 
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                      className="flex-grow bg-white border border-brand-border rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-accent outline-none" 
                      placeholder="예: 동탄역 맛집과 연계된 사무실 홍보 문구 작성해줘"
                    />
                    <button 
                      onClick={generateAIContent}
                      disabled={loading}
                      className="bg-brand-primary text-white px-10 py-4 rounded-2xl font-heading disabled:opacity-50"
                    >
                      {loading ? '생성 중...' : '생성하기'}
                    </button>
                  </div>
                  {aiResult && (
                    <div className="mt-10 p-8 bg-white rounded-2xl border border-brand-border shadow-inner max-h-[400px] overflow-y-auto whitespace-pre-wrap font-body text-brand-text/80 leading-loose">
                      {aiResult}
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {['inquiries', 'settings'].includes(activeTab) && (
              <div className="flex items-center justify-center h-full text-gray-300 italic font-body">
                해당 기능은 실제 DB 연동 후 활성화됩니다.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

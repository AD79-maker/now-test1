
import React from 'react';
import { SAMPLE_BLOGS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="animate-fade-in bg-brand-bg min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-heading mb-6">나우 소식 & 창업 정보</h1>
          <p className="text-brand-text/50 max-w-2xl mx-auto leading-loose">
            비즈니스에 도움이 되는 꿀팁부터 <br />
            나우공유오피스의 실시간 공간 소식을 전달합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {SAMPLE_BLOGS.map((post) => (
            <article key={post.id} className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all group">
              <div className="h-64 overflow-hidden relative">
                <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <span className="absolute top-6 left-6 bg-brand-accent text-white px-4 py-1.5 rounded-full text-xs font-heading">{post.category}</span>
              </div>
              <div className="p-10">
                <div className="text-xs text-brand-text/40 mb-3 flex space-x-4 font-body">
                  <span>{post.createdAt}</span>
                  <span>|</span>
                  <span>{post.author}</span>
                </div>
                <h3 className="text-2xl font-heading mb-4 text-brand-primary group-hover:text-brand-accent transition-colors leading-tight">{post.title}</h3>
                <p className="text-brand-text/60 leading-loose mb-6 line-clamp-3 font-body">{post.content}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(t => (
                    <span key={t} className="text-[10px] text-brand-text/40 bg-brand-bg px-2 py-1 rounded">#{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="px-12 py-4 border-2 border-brand-primary text-brand-primary rounded-full font-heading hover:bg-brand-primary hover:text-white transition-all">더 많은 소식 보기</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;

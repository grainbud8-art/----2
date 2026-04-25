import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { ArrowLeft, Share2, Calendar, Search, Speaker, History, Stethoscope, ClipboardList, Hospital, Pill } from 'lucide-react';
import { mockRecords } from '../mockData';
import { useState } from 'react';
import BottomNavigation from '../components/BottomNavigation';
import FamilyNavigation from '../components/FamilyNavigation';
import GlobalSideLabels from '../components/GlobalSideLabels';

export default function RecordDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const isFamily = location.pathname.startsWith('/family');
  const [expanded, setExpanded] = useState(true);

  const record = mockRecords.find(r => r.id === id);

  if (!record) return <div className="p-10 text-2xl font-bold">未找到记录</div>;

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-8 border-surface-container shadow-soft flex justify-between items-center h-20 px-5 max-w-7xl mx-auto">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2">
          <ArrowLeft className="w-10 h-10 text-on-surface" />
        </button>
        <h1 className="font-bold text-2xl tracking-tight">{isFamily ? '专业文档详情' : '文档详情'}</h1>
        <button className="p-2 text-primary">
          <Share2 className="w-8 h-8" />
        </button>
      </header>

      <main className="pt-24 pb-32 px-5 max-w-3xl mx-auto flex flex-col gap-8">
        {/* Document Header */}
        <section className="bg-white rounded-[32px] p-8 shadow-soft border-l-[16px] border-primary">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-4xl font-black text-on-surface mb-2">
                {record.attachments?.[0]?.name || record.type}
              </h2>
              <p className="text-2xl font-bold text-on-surface-variant flex items-center gap-2">
                <Calendar className="w-6 h-6" /> {record.date}
              </p>
            </div>
            <span className="bg-primary-container/20 text-primary px-6 py-2 rounded-full text-xl font-black">{record.type}</span>
          </div>

          <div className="flex flex-col gap-3 text-xl font-bold text-on-surface-variant mb-6">
             <div className="flex items-center gap-3">
               <Hospital className="w-6 h-6" />
               {record.hospital} · {record.department}
             </div>
          </div>
          
          {record.attachments && record.attachments.length > 0 && (
            <div className="w-full aspect-[4/3] bg-surface-container rounded-3xl overflow-hidden mb-6 border-4 border-surface-container-high group relative">
              <img 
                src={record.attachments[0].url} 
                alt={record.attachments[0].name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                 <button className="bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 border border-white/30">
                   <Search className="w-6 h-6" /> 点击放大查看
                 </button>
              </div>
            </div>
          )}
        </section>

        {/* AI Analysis (Professional vs Elderly) */}
        <section className={`rounded-[32px] p-8 shadow-soft ${isFamily ? 'bg-secondary text-white' : 'bg-surface-container-high'}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-4 rounded-2xl ${isFamily ? 'bg-white/10' : 'bg-primary/10 text-primary'}`}>
              <Bot iconClassName="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-black">AI 智能解读</h3>
              <p className={`text-lg font-bold opacity-80 ${isFamily ? 'text-white' : 'text-on-surface-variant'}`}>
                {isFamily ? '专业医学术语释义与建议' : '通俗易懂的解读'}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {isFamily ? (
              <div className="space-y-6 leading-relaxed text-lg font-medium">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h4 className="flex items-center gap-2 font-black mb-3">
                    <Stethoscope className="w-5 h-5" /> 诊断分析
                  </h4>
                  <p>{record.diagnosis}</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h4 className="flex items-center gap-2 font-black mb-3">
                    <ClipboardList className="w-5 h-5" /> 就医建议
                  </h4>
                  <p>{record.advice}</p>
                </div>
              </div>
            ) : (
              <div className="space-y-6 text-2xl font-bold leading-snug">
                <p className="flex items-start gap-4">
                  <span className="w-10 h-10 bg-primary/20 text-primary rounded-full flex items-center justify-center shrink-0">1</span>
                  <span>{record.diagnosis.split('，')[0]}，您的指标很平稳。</span>
                </p>
                <p className="flex items-start gap-4 text-primary">
                  <span className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shrink-0">2</span>
                  <span>请放心，检查结果显示恢复良好，请继续保持。</span>
                </p>
                <button className="w-full h-20 bg-primary-container text-white rounded-2xl flex items-center justify-center gap-4 mt-4 shadow-lg active:scale-95 transition-transform">
                  <Speaker className="w-10 h-10" />
                  听语音解读
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 gap-4">
           {isFamily && (
             <button className="w-full h-24 bg-white border-4 border-secondary text-secondary rounded-[32px] text-2xl font-black flex items-center justify-center gap-4 shadow-soft active:scale-95 transition-transform">
               <Share2 className="w-8 h-8" />
               生成专业病程报告
             </button>
           )}
           {!isFamily && (
             <button className="w-full h-24 bg-white border-4 border-primary text-primary rounded-[32px] text-2xl font-black flex items-center justify-center gap-4 shadow-soft active:scale-95 transition-transform">
               <Share2 className="w-8 h-8" />
               分享给子女
             </button>
           )}
        </div>
      </main>

      {!isFamily && <BottomNavigation />}
      {isFamily && <FamilyNavigation />}
      <GlobalSideLabels />
    </div>
  );
}

function Bot({ iconClassName }: { iconClassName?: string }) {
    return (
      <svg
        className={iconClassName}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    );
}

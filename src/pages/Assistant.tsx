import { useNavigate, useLocation } from 'react-router-dom';
import { X, Mic, AudioLines, FileSearch, ChartBar, Bot } from 'lucide-react';
import { motion } from 'motion/react';

export default function Assistant() {
  const navigate = useNavigate();
  const location = useLocation();
  const isFamily = location.pathname.startsWith('/family');

  return (
    <div className={`min-h-screen flex flex-col items-center ${isFamily ? 'bg-slate-50' : 'bg-background'}`}>
      <header className="w-full flex items-center justify-between px-8 py-6">
        <button 
          onClick={() => navigate(-1)}
          className="w-16 h-16 flex items-center justify-center bg-white rounded-full text-on-surface shadow-sm active:scale-95 transition-transform"
        >
          <X className={`w-8 h-8 ${isFamily ? 'text-secondary' : 'text-on-surface'}`} />
        </button>
        {isFamily && (
          <div className="flex bg-white rounded-full p-1 shadow-sm border border-slate-200">
            <button className="px-6 py-2 rounded-full bg-secondary text-white font-bold text-sm">语音咨询</button>
            <button className="px-6 py-2 rounded-full text-slate-500 font-bold text-sm">解析文档</button>
          </div>
        )}
      </header>

      <main className="flex-1 flex flex-col items-center px-8 w-full max-w-2xl text-center">
        <div className="mt-4 flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-outline">
            {isFamily ? '正在分析中...' : '正在听您说...'}
          </h2>
          <h1 className={`text-5xl font-extrabold break-words ${isFamily ? 'text-secondary' : 'text-primary'}`}>
            {isFamily ? '分析本月血检趋势' : '这药怎么吃？'}
          </h1>
        </div>

        <div className="relative w-80 h-80 flex items-center justify-center my-12">
          {/* Animated Ripples */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className={`absolute inset-0 rounded-full ${isFamily ? 'bg-secondary/20' : 'bg-primary-container'}`}
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            className={`absolute inset-10 rounded-full ${isFamily ? 'bg-secondary/20' : 'bg-primary-container'}`}
          />
          <div className={`absolute inset-20 rounded-full flex items-center justify-center shadow-lg border-4 border-white ${isFamily ? 'bg-secondary' : 'bg-primary-container'}`}>
             {isFamily ? <FileSearch className="w-16 h-16 text-white" /> : <AudioLines className="w-16 h-16 text-white" />}
          </div>
        </div>

        {isFamily ? (
          <div className="w-full bg-white border border-slate-200 rounded-[24px] p-6 shadow-soft flex flex-col gap-4 mt-auto">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white">
                   <ChartBar className="w-6 h-6" />
                </div>
                <span className="font-bold text-xl text-secondary">专业医疗助手</span>
             </div>
             <p className="text-lg text-left leading-relaxed text-slate-700">
               分析显示，患者近期 C3 补体水平呈稳步回升趋势（从 0.45g/L 升至 0.62g/L），表明病情正处于低活动期。建议保持当前泼尼松 5mg/d 方案。
             </p>
          </div>
        ) : (
          <div className="w-full bg-white border border-surface-container-high rounded-[24px] p-6 shadow-soft flex flex-col gap-4 mt-auto">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-3xl font-black">
                  <Bot fill="currentColor" strokeWidth={0} />
               </div>
               <span className="font-bold text-xl text-primary">康健助手</span>
            </div>
            <p className="text-xl text-left font-bold leading-relaxed">
              张大爷您好，您可以直接问我“泼尼松怎么吃”或者“今天的药吃了吗”，我会大声读给您听。
            </p>
          </div>
        )}
      </main>

      <div className="w-full px-8 pb-12 pt-16 flex justify-center bg-gradient-to-t from-background via-transparent to-transparent">
        <button className={`w-48 h-48 rounded-full text-white shadow-2xl flex flex-col items-center justify-center gap-2 active:scale-95 transition-transform ${isFamily ? 'bg-secondary' : 'bg-primary'}`}>
          <Mic className="w-12 h-12" />
          <span className="font-bold text-lg tracking-wider">
            {isFamily ? '上传报告解析' : '按住说话'}
          </span>
        </button>
      </div>
    </div>
  );
}

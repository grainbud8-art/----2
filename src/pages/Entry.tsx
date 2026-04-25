import { useNavigate } from 'react-router-dom';
import { User, Users, HeartPulse } from 'lucide-react';
import { motion } from 'motion/react';

export default function Entry() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-from),_transparent_50%)] from-primary-container/10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="w-24 h-24 bg-primary rounded-[32px] mx-auto mb-6 flex items-center justify-center shadow-soft">
          <HeartPulse className="w-12 h-12 text-white" fill="currentColor" strokeWidth={0} />
        </div>
        <h1 className="text-5xl font-black text-black mb-2 tracking-tighter uppercase">云箱</h1>
        <p className="text-base text-black/60 font-black tracking-widest uppercase">您的智能健康守护助手</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl px-4">
        <button 
          onClick={() => navigate('/patient')}
          className="bg-white p-12 rounded-[56px] shadow-soft border-2 border-transparent active:scale-95 active:bg-slate-50 transition-all flex flex-col items-center gap-8 group"
        >
          <div className="w-28 h-28 rounded-3xl bg-primary-container/20 flex items-center justify-center text-on-surface group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-3">
            <User className="w-16 h-16" fill="currentColor" strokeWidth={0} />
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-black mb-3 text-black">我是患者</h2>
            <p className="text-on-surface-variant font-bold text-lg">大字体、高对比度、简单易操作</p>
          </div>
        </button>

        <button 
          onClick={() => navigate('/family')}
          className="bg-white p-12 rounded-[56px] shadow-soft border-2 border-transparent active:scale-95 active:bg-slate-50 transition-all flex flex-col items-center gap-8 group"
        >
          <div className="w-28 h-28 rounded-3xl bg-secondary-container/20 flex items-center justify-center text-on-surface group-hover:bg-secondary group-hover:text-white transition-all transform group-hover:-rotate-3">
            <Users className="w-16 h-16" fill="currentColor" strokeWidth={0} />
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-black mb-3 text-black">我是家属</h2>
            <p className="text-on-surface-variant font-bold text-lg">远程协助、健康看板、数据报告</p>
          </div>
        </button>
      </div>

      <div className="mt-16 text-on-surface-variant/40 font-bold">
        LupusCare © 2024
      </div>
    </div>
  );
}

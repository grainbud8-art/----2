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
        <div className="w-24 h-24 bg-primary rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-soft">
          <HeartPulse className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl font-black text-primary mb-2">云箱</h1>
        <p className="text-lg text-on-surface-variant font-medium">智能医疗健康守护</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        <button 
          onClick={() => navigate('/patient')}
          className="bg-white p-10 rounded-[40px] shadow-soft border-4 border-transparent hover:border-primary-container transition-all flex flex-col items-center gap-6 group"
        >
          <div className="w-24 h-24 rounded-full bg-primary-container/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <User className="w-12 h-12" />
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-black mb-2">我是患者</h2>
            <p className="text-on-surface-variant">大字体、高对比度、简单易用</p>
          </div>
        </button>

        <button 
          onClick={() => navigate('/family')}
          className="bg-white p-10 rounded-[40px] shadow-soft border-4 border-transparent hover:border-primary-container transition-all flex flex-col items-center gap-6 group"
        >
          <div className="w-24 h-24 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
            <Users className="w-12 h-12" />
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-black mb-2">我是家属</h2>
            <p className="text-on-surface-variant">远程协助、健康看板、数据报告</p>
          </div>
        </button>
      </div>

      <div className="mt-16 text-on-surface-variant/40 font-bold">
        LupusCare © 2024
      </div>
    </div>
  );
}

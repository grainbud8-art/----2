import { useNavigate, useLocation } from 'react-router-dom';
import { X, Mic, AudioLines, FileSearch, ChartBar, Bot, Pill, Activity, Microscope, Phone, HelpCircle, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function Assistant() {
  const navigate = useNavigate();
  const location = useLocation();
  const isFamily = location.pathname.startsWith('/family');
  const [isListening, setIsListening] = useState(true);

  // Suggested questions for senior users
  const suggestions = [
    { icon: Pill, text: '这药怎么吃？', color: 'bg-primary' },
    { icon: Activity, text: '今天步数达标了吗？', color: 'bg-secondary' },
    { icon: Microscope, text: '解读体检报告', color: 'bg-success' },
    { icon: Phone, text: '联系急救助手', color: 'bg-error' },
  ];

  return (
    <div className={`min-h-screen flex flex-col ${isFamily ? 'bg-slate-50' : 'bg-background'} selection:bg-primary/10`}>
      {/* Top Header - High Contrast */}
      <header className="w-full flex items-center justify-between px-6 py-6 z-20">
        <button 
          onClick={() => navigate(-1)}
          className="w-16 h-16 flex items-center justify-center bg-white rounded-2xl text-on-surface shadow-soft border border-surface-container active:scale-95 transition-transform"
          aria-label="返回"
        >
          <X className={`w-8 h-8 ${isFamily ? 'text-secondary' : 'text-on-surface'}`} />
        </button>
        
        <div className="bg-white rounded-2xl px-6 py-3 shadow-soft border border-surface-container flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${isListening ? 'bg-primary animate-pulse' : 'bg-outline'}`} />
          <span className="text-xl font-bold text-on-surface">智能助手在线</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col px-6">
        {/* State Display */}
        <div className="mt-8 text-center flex flex-col gap-4">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-black tracking-tight text-on-surface-variant flex items-center justify-center gap-2"
          >
            {isListening ? (
              <>
                <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>正在听您说</motion.span>
                <div className="flex gap-1 h-6 items-end pb-1">
                  {[1, 2, 3].map(i => (
                    <motion.div 
                      key={i}
                      animate={{ height: ['20%', '100%', '20%'] }}
                      transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                      className="w-1 bg-primary rounded-full"
                    />
                  ))}
                </div>
              </>
            ) : '准备就绪'}
          </motion.h2>
          
          <motion.h1 
            key={isListening ? 'listening' : 'idle'}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`text-6xl font-black tracking-tighter leading-none ${isFamily ? 'text-secondary' : 'text-primary'}`}
          >
            {isListening ? '“泼尼松怎么吃”' : '您想问点什么？'}
          </motion.h1>
        </div>

        {/* AI Orb - Interactive Visualization */}
        <div className="relative w-full aspect-square flex items-center justify-center my-8">
          <AnimatePresence>
            {isListening && (
              <>
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className={`absolute w-80 h-80 rounded-full ${isFamily ? 'bg-secondary/30' : 'bg-primary/20'}`}
                />
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                  className={`absolute w-64 h-64 rounded-full ${isFamily ? 'bg-secondary/30' : 'bg-primary/20'}`}
                />
              </>
            )}
          </AnimatePresence>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-48 h-48 rounded-full flex items-center justify-center shadow-2xl border-8 border-white z-10 ${isFamily ? 'bg-secondary text-white' : 'bg-primary text-white'}`}
          >
            <Bot className="w-24 h-24" fill="currentColor" strokeWidth={0} />
          </motion.div>
        </div>

        {/* Dynamic Context Card - Senior Friendly Text */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white border-2 border-surface-container rounded-[40px] p-8 shadow-soft mb-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className={`p-3 rounded-2xl ${isFamily ? 'bg-secondary/10 text-secondary' : 'bg-primary/10 text-primary'}`}>
              <HelpCircle className="w-8 h-8" />
            </div>
            <span className="text-2xl font-black">您可以试试这样问：</span>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {suggestions.map((item, idx) => (
              <button 
                key={idx}
                className="flex items-center justify-between p-6 bg-surface-container-low hover:bg-surface-container transition-colors rounded-3xl group"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-16 h-16 rounded-2xl ${item.color} text-white flex items-center justify-center shadow-lg`}>
                    <item.icon className="w-8 h-8" fill="currentColor" strokeWidth={0} />
                  </div>
                  <span className="text-2xl font-bold text-on-surface">{item.text}</span>
                </div>
                <ChevronRight className="w-8 h-8 text-outline group-hover:text-primary group-hover:translate-x-2 transition-all" />
              </button>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Massive Primary Action Button */}
      <footer className="px-6 pb-12 pt-8 bg-gradient-to-t from-white to-transparent sticky bottom-0">
        <button 
          onMouseDown={() => setIsListening(true)}
          onMouseUp={() => setIsListening(false)}
          onTouchStart={() => setIsListening(true)}
          onTouchEnd={() => setIsListening(false)}
          className={`w-full h-32 rounded-[48px] text-white shadow-2xl flex items-center justify-center gap-6 active:scale-95 transition-all relative overflow-hidden ${isFamily ? 'bg-secondary' : 'bg-primary'}`}
        >
          {isListening && (
            <motion.div 
              layoutId="ripple"
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            />
          )}
          <Mic className="w-12 h-12 relative z-10" />
          <span className="text-4xl font-black tracking-widest relative z-10">
            {isListening ? '正在收听...' : '按住说话'}
          </span>
        </button>
      </footer>
    </div>
  );
}

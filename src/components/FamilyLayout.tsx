import React, { useState, useEffect } from 'react';
import FamilyNavigation from './FamilyNavigation';
import { ArrowLeft, Bell, BellRing, Clock, Hospital, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GlobalSideLabels from './GlobalSideLabels';
import { motion, AnimatePresence } from 'motion/react';

interface FamilyLayoutProps {
  children: React.ReactNode;
  title: string;
  showBack?: boolean;
}

export default function FamilyLayout({ children, title, showBack = false }: FamilyLayoutProps) {
  const navigate = useNavigate();
  const [showReminder, setShowReminder] = useState(false);

  useEffect(() => {
    const handleShowReminder = () => setShowReminder(true);
    window.addEventListener('show-demo-reminder', handleShowReminder);
    return () => window.removeEventListener('show-demo-reminder', handleShowReminder);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-32 relative">
      {/* Global Reminder Popup for Demo */}
      <AnimatePresence>
        {showReminder && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowReminder(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="relative w-full max-w-lg bg-white rounded-[40px] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.3)] border-4 border-white"
            >
              <div className="h-3 bg-secondary w-full" />
              <div className="p-8 flex flex-col items-center">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-6"
                >
                  <BellRing className="w-10 h-10" fill="currentColor" strokeWidth={0} />
                </motion.div>

                <h3 className="text-4xl font-black text-slate-900 mb-2">就诊提醒</h3>
                <p className="text-xl font-bold text-slate-500 mb-8">您的预约时间快到啦！</p>

                <div className="w-full bg-slate-50 rounded-[24px] p-6 mb-8 border border-slate-200">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-secondary shadow-sm">
                        <Clock className="w-7 h-7" fill="currentColor" strokeWidth={0} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-400">就诊时间</span>
                        <span className="text-2xl font-black">10:00 - 11:30</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-secondary shadow-sm">
                        <Hospital className="w-7 h-7" fill="currentColor" strokeWidth={0} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-400">就诊医院</span>
                        <span className="text-2xl font-black">市第一人民医院</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-full gap-3">
                  <button 
                    onClick={() => setShowReminder(false)}
                    className="w-full h-16 bg-secondary text-white rounded-[24px] text-xl font-black transition-transform active:scale-95"
                  >
                    好的，我知道了
                  </button>
                  <button 
                    className="w-full h-16 bg-red-50 text-red-600 rounded-[24px] flex items-center justify-center gap-3 active:scale-95 transition-transform"
                  >
                    <Phone className="w-8 h-8 fill-red-600" strokeWidth={0} />
                    <span className="text-xl font-black">呼叫咨询</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Family Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {showBack && (
              <button onClick={() => navigate(-1)} className="p-2 -ml-2 hover:bg-slate-100 rounded-full transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <h1 className="text-lg font-black tracking-tight text-secondary">
              {title}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('show-demo-reminder'))}
              className="p-2 relative hover:bg-slate-100 rounded-full transition-colors"
            >
              <Bell className="w-5 h-5 text-slate-600" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 px-4 max-w-7xl mx-auto">
        {children}
      </main>

      <FamilyNavigation />
      <GlobalSideLabels />
    </div>
  );
}

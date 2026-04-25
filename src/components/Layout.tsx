import { ReactNode, useState, useEffect } from 'react';
import TopAppBar from './TopAppBar';
import BottomNavigation from './BottomNavigation';
import GlobalSideLabels from './GlobalSideLabels';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { BellRing, Clock, Hospital, Phone } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  title: string;
  showBack?: boolean;
  showNotifications?: boolean;
  hideBottomNav?: boolean;
}

export default function Layout({ 
  children, 
  title, 
  showBack, 
  showNotifications = true,
  hideBottomNav = false
}: LayoutProps) {
  const location = useLocation();
  const [showReminder, setShowReminder] = useState(false);

  useEffect(() => {
    const handleShowReminder = () => setShowReminder(true);
    window.addEventListener('show-demo-reminder', handleShowReminder);
    return () => window.removeEventListener('show-demo-reminder', handleShowReminder);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background relative">
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
              className="relative w-full max-w-lg bg-white rounded-[48px] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.3)] border-4 border-white"
            >
              <div className="h-4 bg-primary w-full" />
              <div className="p-10 flex flex-col items-center">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8"
                >
                  <BellRing className="w-12 h-12" fill="currentColor" strokeWidth={0} />
                </motion.div>

                <h3 className="text-5xl font-black text-on-surface mb-4">就诊提醒</h3>
                <p className="text-2xl font-bold text-on-surface-variant mb-10">您的预约时间快到啦！</p>

                <div className="w-full bg-surface-container/30 rounded-[32px] p-8 mb-10 border-2 border-surface-container">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm">
                        <Clock className="w-8 h-8" fill="currentColor" strokeWidth={0} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xl font-bold text-on-surface-variant">就诊时间</span>
                        <span className="text-3xl font-black">10:00 - 11:30</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm">
                        <Hospital className="w-8 h-8" fill="currentColor" strokeWidth={0} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xl font-bold text-on-surface-variant">就诊医院</span>
                        <span className="text-3xl font-black">市第一人民医院</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-full gap-4">
                  <button 
                    onClick={() => setShowReminder(false)}
                    className="w-full h-24 bg-primary text-white rounded-[32px] text-3xl font-black shadow-xl shadow-primary/20 active:scale-95 transition-transform"
                  >
                    好的，我知道了
                  </button>
                  <button 
                    className="w-full h-24 bg-[#FEE2E2] text-[#B91C1C] rounded-[32px] flex items-center justify-center gap-4 active:scale-95 transition-transform"
                  >
                    <Phone className="w-10 h-10 fill-[#B91C1C]" strokeWidth={0} />
                    <span className="text-3xl font-black">呼叫子女</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <TopAppBar 
        title={title} 
        showBack={showBack} 
        showNotifications={showNotifications} 
      />
      <main className="flex-grow pt-20 pb-36 max-w-3xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="p-5"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      {!hideBottomNav && <BottomNavigation />}
      <GlobalSideLabels />
    </div>
  );
}

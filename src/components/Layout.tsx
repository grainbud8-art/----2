import { ReactNode } from 'react';
import TopAppBar from './TopAppBar';
import BottomNavigation from './BottomNavigation';
import GlobalSideLabels from './GlobalSideLabels';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';

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

  return (
    <div className="min-h-screen flex flex-col bg-background">
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

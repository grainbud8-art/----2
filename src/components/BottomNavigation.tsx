import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Pill, FileText, User } from 'lucide-react';
import { cn } from '../lib/utils';

export default function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { name: '首页', icon: Home, path: '/home/elderly' },
    { name: '医药', icon: Pill, path: '/medicine' },
    { name: '记录', icon: FileText, path: '/documents' },
    { name: '我的', icon: User, path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center h-24 pb-6 bg-white border-t border-surface-container shadow-[0_-10px_30px_rgba(0,0,0,0.05)] rounded-t-[32px] md:hidden">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path || (tab.path !== '/' && location.pathname.startsWith(tab.path));
        return (
          <button
            key={tab.path}
            onClick={() => navigate(tab.path)}
            className={cn(
              "flex flex-col items-center justify-center flex-1 h-full transition-all active:scale-90",
              isActive ? "text-primary" : "text-on-surface-variant"
            )}
          >
            <div className={cn(
              "p-2 px-6 rounded-2xl flex flex-col items-center transition-all",
              isActive ? "bg-primary/5" : ""
            )}>
              <tab.icon className="w-8 h-8 mb-1" fill="currentColor" strokeWidth={0} />
              <span className={cn("font-black text-sm", isActive ? "text-primary" : "text-on-surface-variant")}>{tab.name}</span>
            </div>
          </button>
        );
      })}
    </nav>
  );
}

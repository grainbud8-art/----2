import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Users, BarChart3, User } from 'lucide-react';
import { cn } from '../lib/utils';

export default function FamilyNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { name: '首页', icon: Home, path: '/home/family' },
    { name: '管理', icon: Users, path: '/family/medicine/inventory' },
    { name: '监护', icon: BarChart3, path: '/family/reports' },
    { name: '我的', icon: User, path: '/family/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center h-24 pb-6 bg-white border-t border-surface-container shadow-[0_-10px_30px_rgba(0,0,0,0.05)] rounded-t-[32px]">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path || (tab.path !== '/family' && location.pathname.startsWith(tab.path));
        return (
          <button
            key={tab.path}
            onClick={() => navigate(tab.path)}
            className={cn(
              "flex flex-col items-center justify-center flex-1 h-full transition-all active:scale-90",
              isActive ? "text-secondary" : "text-on-surface-variant"
            )}
          >
            <div className={cn(
              "p-2 px-6 rounded-2xl flex flex-col items-center transition-all",
              isActive ? "bg-secondary/5" : ""
            )}>
              <tab.icon className="w-8 h-8 mb-1" fill="currentColor" strokeWidth={0} />
              <span className={cn("font-black text-sm", isActive ? "text-secondary" : "text-on-surface-variant")}>{tab.name}</span>
            </div>
          </button>
        );
      })}
    </nav>
  );
}

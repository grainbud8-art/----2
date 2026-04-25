import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Bell } from 'lucide-react';

interface TopAppBarProps {
  title: string;
  showBack?: boolean;
  showUser?: boolean;
  showNotifications?: boolean;
}

export default function TopAppBar({ title, showBack, showUser, showNotifications }: TopAppBarProps) {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-8 border-surface-container shadow-soft flex justify-between items-center h-20 px-5 max-w-7xl mx-auto">
      <div className="flex items-center gap-4">
        {showBack ? (
          <button 
            onClick={() => navigate(-1)}
            className="w-[60px] h-[60px] flex items-center justify-center text-primary active:scale-95 transition-transform rounded-full hover:bg-surface-container-low"
          >
            <ArrowLeft className="w-8 h-8" />
          </button>
        ) : (
          <div className="w-[60px] h-[60px] flex items-center justify-center text-primary">
            {/* Branding icon if wanted */}
          </div>
        )}
        <h1 className="font-bold text-2xl tracking-tight text-primary">{title}</h1>
      </div>
      
      <div className="flex items-center gap-2">
        {showNotifications && (
          <button className="w-[60px] h-[60px] flex items-center justify-center text-tertiary active:scale-95 transition-transform rounded-full hover:bg-surface-container-low">
            <Bell className="w-8 h-8" />
          </button>
        )}
        {showUser && (
          <button 
            onClick={() => navigate('/patient/profile')}
            className="w-[60px] h-[60px] flex items-center justify-center text-tertiary active:scale-95 transition-transform rounded-full overflow-hidden border-2 border-primary-container"
          >
            <User className="w-8 h-8" />
          </button>
        )}
      </div>
    </header>
  );
}

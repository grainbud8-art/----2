import React from 'react';
import FamilyNavigation from './FamilyNavigation';
import { ArrowLeft, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GlobalSideLabels from './GlobalSideLabels';

interface FamilyLayoutProps {
  children: React.ReactNode;
  title: string;
  showBack?: boolean;
}

export default function FamilyLayout({ children, title, showBack = false }: FamilyLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-32">
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
            <button className="p-2 relative hover:bg-slate-100 rounded-full transition-colors">
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

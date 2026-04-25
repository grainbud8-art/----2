import { Bot, Bell } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export default function GlobalSideLabels() {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide on entry page
  if (location.pathname === '/') return null;

  const isFamily = location.pathname.startsWith('/family');

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-4 pointer-events-none">
      {/* AI Assistant Side Label */}
      <motion.button
        initial={{ x: 40 }}
        animate={{ x: 0 }}
        onClick={() => navigate(isFamily ? '/family/ai-assistant/chat' : '/ai-assistant/chat')}
        className="pointer-events-auto bg-primary text-white p-3 pr-2 pl-4 rounded-l-2xl shadow-lg flex items-center gap-2 hover:translate-x-[-8px] transition-transform group"
      >
        <div className="flex flex-col items-center">
            <Bot className="w-6 h-6" />
            <span className="text-[10px] font-bold">AI助手</span>
        </div>
      </motion.button>

      {/* Notifications Side Label */}
      <motion.button
        initial={{ x: 40 }}
        animate={{ x: 0 }}
        className="pointer-events-auto bg-white border border-surface-container-high text-on-surface p-3 pr-2 pl-4 rounded-l-2xl shadow-lg flex items-center gap-2 hover:translate-x-[-8px] transition-transform group"
      >
        <div className="flex flex-col items-center">
            <div className="relative">
                <Bell className="w-6 h-6 text-on-surface-variant" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-error rounded-full border border-white"></span>
            </div>
            <span className="text-[10px] font-bold text-on-surface-variant">消息</span>
        </div>
      </motion.button>
    </div>
  );
}

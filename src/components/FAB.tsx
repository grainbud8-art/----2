import { Plus, MessageCircle, Bot, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FAB() {
  const navigate = useNavigate();

  return (
    <div className="fixed right-6 bottom-32 flex flex-col gap-4 z-50">
      <button 
        onClick={() => navigate('/assistant')}
        className="w-[72px] h-[72px] bg-primary text-white rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-transform"
      >
        <Bot className="w-10 h-10" />
      </button>
      <button 
        className="w-[72px] h-[72px] bg-primary text-white rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-transform relative"
      >
        <MessageCircle className="w-10 h-10" />
        <span className="absolute top-4 right-4 w-4 h-4 bg-error rounded-full border-2 border-white"></span>
      </button>
    </div>
  );
}

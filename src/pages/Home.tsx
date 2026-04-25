import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import { Camera, Mic, Bot, AlertTriangle, Pill, Calendar, Thermometer, User, ChevronRight } from 'lucide-react';
import FAB from '../components/FAB';

export default function Home() {
  const navigate = useNavigate();

  return (
    <Layout title="康健守护">
      <div className="flex flex-col gap-8">
        {/* Quick Actions Grid */}
        <section className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => navigate('/documents/upload')}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-card shadow-soft hover:bg-surface-container-low transition-colors min-h-[160px]"
          >
            <div className="w-16 h-16 rounded-full bg-secondary-container/30 flex items-center justify-center mb-4 text-secondary">
              <Camera className="w-8 h-8" />
            </div>
            <span className="font-bold text-lg">拍照上传</span>
          </button>
          
          <button 
            onClick={() => navigate('/ai-assistant/chat')}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-card shadow-soft hover:bg-surface-container-low transition-colors min-h-[160px]"
          >
            <div className="w-16 h-16 rounded-full bg-secondary-container/30 flex items-center justify-center mb-4 text-secondary">
              <Mic className="w-8 h-8" />
            </div>
            <span className="font-bold text-lg">语音识别</span>
          </button>
          
          <button 
            onClick={() => navigate('/ai-assistant/chat')}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-card shadow-soft hover:bg-surface-container-low transition-colors min-h-[160px]"
          >
            <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-4 text-primary">
              <Bot className="w-8 h-8" />
            </div>
            <span className="font-bold text-lg">AI助手</span>
          </button>
          
          <button 
            className="flex flex-col items-center justify-center p-6 bg-error text-on-error rounded-card shadow-soft hover:opacity-90 transition-opacity min-h-[160px]"
          >
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <span className="font-bold text-lg">紧急呼叫</span>
          </button>
        </section>

        {/* Reminders Section */}
        <section className="flex flex-col gap-4">
          <h2 className="font-bold text-3xl">今日提醒</h2>
          
          <div 
            onClick={() => navigate('/medicine')}
            className="bg-white p-6 rounded-card shadow-soft flex items-center gap-6 min-h-[120px] cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0 text-on-tertiary-fixed">
              <Pill className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-xl">用药提醒</h3>
              <p className="text-on-surface-variant text-lg">泼尼松、羟氯喹</p>
            </div>
            <span className="font-bold text-2xl text-primary">12:00</span>
          </div>

          <div 
            onClick={() => navigate('/documents')}
            className="bg-white p-6 rounded-card shadow-soft flex items-center gap-6 min-h-[120px] cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0 text-on-tertiary-fixed">
              <Calendar className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-xl">就诊提醒</h3>
              <p className="text-on-surface-variant text-lg">风湿免疫科复诊</p>
            </div>
            <span className="font-bold text-2xl text-primary">明天</span>
          </div>
        </section>

        {/* Health Data Section */}
        <section className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-3xl">健康数据</h2>
            <button 
                onClick={() => navigate('/health/record/view')}
                className="text-primary font-bold flex items-center gap-1"
            >
                查看趋势 <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div 
                onClick={() => navigate('/health/record/add')}
                className="bg-white p-6 rounded-card shadow-soft border-l-8 border-primary flex flex-col justify-between min-h-[140px] cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <Thermometer className="w-8 h-8 text-primary" />
                <h3 className="font-bold text-xl text-on-surface-variant">体温</h3>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold">37.2</span>
                <span className="text-2xl text-on-surface-variant">℃</span>
                <span className="ml-auto bg-primary-container/10 text-primary px-4 py-2 rounded-full font-bold">正常</span>
              </div>
            </div>
            
            <div 
                onClick={() => navigate('/health/record/add')}
                className="bg-white p-6 rounded-card shadow-soft border-l-8 border-tertiary flex flex-col justify-between min-h-[140px] cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <User className="w-8 h-8 text-tertiary" />
                <h3 className="font-bold text-xl text-on-surface-variant">皮疹情况</h3>
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold">轻微红斑</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FAB />
    </Layout>
  );
}

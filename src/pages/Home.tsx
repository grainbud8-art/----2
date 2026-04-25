import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import { Camera, Mic, Bot, AlertTriangle, Pill, Calendar, Thermometer, User, ChevronRight, Activity } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <Layout title="康健守护">
      <div className="flex flex-col gap-10">
        {/* User Greeting */}
        <div className="flex items-end gap-3 mt-4">
          <h1 className="text-5xl font-black tracking-tighter text-on-surface">你好，对对</h1>
          <div className="h-2.5 w-16 bg-primary rounded-full mb-2" />
        </div>

        {/* Quick Actions Grid */}
        <section className="grid grid-cols-2 gap-5">
          <button 
            onClick={() => navigate('/documents/upload')}
            className="group flex flex-col items-center justify-center p-8 bg-white border-2 border-transparent rounded-[40px] shadow-soft active:scale-95 active:bg-surface-container transition-all min-h-[180px] text-center"
          >
            <div className="w-20 h-20 rounded-3xl bg-secondary-container/20 flex items-center justify-center mb-5 text-on-surface group-hover:bg-secondary-container group-active:bg-secondary transition-colors">
              <Camera className="w-10 h-10" fill="currentColor" strokeWidth={0} />
            </div>
            <span className="font-extrabold text-xl tracking-tight">拍照上传</span>
          </button>
          
          <button 
            onClick={() => navigate('/ai-assistant/chat')}
            className="group flex flex-col items-center justify-center p-8 bg-white border-2 border-transparent rounded-[40px] shadow-soft active:scale-95 active:bg-surface-container transition-all min-h-[180px] text-center"
          >
            <div className="w-20 h-20 rounded-3xl bg-secondary-container/20 flex items-center justify-center mb-5 text-on-surface group-hover:bg-secondary-container group-active:bg-secondary transition-colors">
              <Mic className="w-10 h-10" fill="currentColor" strokeWidth={0} />
            </div>
            <span className="font-extrabold text-xl tracking-tight">语音识别</span>
          </button>
          
          <button 
            onClick={() => navigate('/ai-assistant/chat')}
            className="group flex flex-col items-center justify-center p-8 bg-white border-2 border-transparent rounded-[40px] shadow-soft active:scale-95 active:bg-surface-container transition-all min-h-[180px] text-center"
          >
            <div className="w-20 h-20 rounded-3xl bg-primary-container/20 flex items-center justify-center mb-5 text-on-surface group-hover:bg-primary-container group-active:bg-primary group-active:text-white transition-colors">
              <Bot className="w-10 h-10" fill="currentColor" strokeWidth={0} />
            </div>
            <span className="font-extrabold text-xl tracking-tight">AI助手</span>
          </button>
          
          <button 
            className="group flex flex-col items-center justify-center p-8 bg-error text-on-error rounded-[40px] shadow-soft active:scale-95 active:shadow-inner transition-all min-h-[180px] text-center"
          >
            <div className="w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center mb-5 group-active:bg-white/40 transition-colors">
              <AlertTriangle className="w-10 h-10" fill="currentColor" strokeWidth={0} />
            </div>
            <span className="font-extrabold text-xl tracking-tight">紧急呼叫</span>
          </button>
        </section>

        {/* Reminders Section */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <h2 className="font-black text-3xl tracking-tight">今日提醒</h2>
            <div className="h-1 flex-1 bg-surface-container-highest rounded-full mt-1.5" />
          </div>
          
          <div 
            onClick={() => navigate('/medicine', { state: { fromHome: true } })}
            className="bg-white p-7 rounded-[32px] shadow-soft flex items-center gap-6 min-h-[130px] cursor-pointer active:scale-[0.98] active:bg-surface-container transition-all group"
          >
            <div className="w-20 h-20 rounded-3xl bg-tertiary-fixed flex items-center justify-center shrink-0 text-on-tertiary-fixed group-active:bg-tertiary group-active:text-white transition-colors">
              <Pill className="w-10 h-10" fill="currentColor" strokeWidth={0} />
            </div>
            <div className="flex-1">
              <h3 className="font-black text-2xl">用药提醒</h3>
              <p className="text-on-surface-variant text-lg font-bold">泼尼松、羟氯喹</p>
            </div>
            <span className="font-black text-3xl text-primary">12:00</span>
          </div>

          <div 
            onClick={() => navigate('/documents', { state: { fromHome: true } })}
            className="bg-white p-7 rounded-[32px] shadow-soft flex items-center gap-6 min-h-[130px] cursor-pointer active:scale-[0.98] active:bg-surface-container transition-all group"
          >
            <div className="w-20 h-20 rounded-3xl bg-tertiary-fixed flex items-center justify-center shrink-0 text-on-tertiary-fixed group-active:bg-tertiary group-active:text-white transition-colors">
              <Calendar className="w-10 h-10" fill="currentColor" strokeWidth={0} />
            </div>
            <div className="flex-1">
              <h3 className="font-black text-2xl">就诊提醒</h3>
              <p className="text-on-surface-variant text-lg font-bold">风湿免疫科复诊</p>
            </div>
            <span className="font-black text-3xl text-primary">明天</span>
          </div>
        </section>

        {/* Health Data Section */}
        <section className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 flex-1">
              <h2 className="font-black text-3xl tracking-tight">健康数据</h2>
              <div className="h-1 flex-1 bg-surface-container-highest rounded-full mt-1.5" />
            </div>
            <button 
                onClick={() => navigate('/health/record/view', { state: { fromHome: true } })}
                className="text-primary font-black flex items-center gap-1 active:translate-x-1 transition-transform ml-4"
            >
                查看趋势 <ChevronRight className="w-6 h-6 stroke-[3]" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div 
                onClick={() => navigate('/health/record/add')}
                className="group bg-white p-8 rounded-[40px] shadow-soft border-l-[12px] border-primary flex flex-col justify-between min-h-[160px] cursor-pointer active:scale-[0.98] hover:bg-surface-container transition-all"
            >
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-primary-container/10 flex items-center justify-center text-on-surface group-hover:bg-primary group-hover:text-white transition-colors">
                  <Activity className="w-8 h-8" fill="currentColor" strokeWidth={0} />
                </div>
                <h3 className="font-black text-2xl text-on-surface-variant">今日体温</h3>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-6xl font-black">37.2</span>
                <span className="text-2xl text-on-surface-variant font-bold">℃</span>
                <span className="ml-auto bg-primary-container text-on-primary-container px-5 py-2 rounded-2xl font-black text-lg">正常</span>
              </div>
            </div>
            
            <div 
                onClick={() => navigate('/health/record/add')}
                className="group bg-white p-8 rounded-[40px] shadow-soft border-l-[12px] border-tertiary flex flex-col justify-between min-h-[160px] cursor-pointer active:scale-[0.98] hover:bg-surface-container transition-all"
            >
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-tertiary-fixed flex items-center justify-center text-on-surface group-hover:bg-tertiary group-hover:text-white transition-colors">
                  <User className="w-8 h-8" fill="currentColor" strokeWidth={0} />
                </div>
                <h3 className="font-black text-2xl text-on-surface-variant">皮疹情况</h3>
              </div>
              <div className="flex items-center">
                <span className="text-3xl font-black">轻微红斑</span>
                <span className="ml-auto bg-tertiary-fixed text-on-tertiary-fixed px-5 py-2 rounded-2xl font-black text-lg">稳定</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

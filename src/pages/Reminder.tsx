import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import { Bell, Clock, MapPin, Bus, Info, CheckCircle, Phone, Heart, ArrowLeft, User, Hospital } from 'lucide-react';
import { motion } from 'motion/react';

export default function Reminder() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
       <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-8 border-surface-container shadow-soft flex justify-between items-center h-20 px-5 max-w-7xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="w-[60px] h-[60px] flex items-center justify-center text-primary active:scale-95 transition-transform rounded-full hover:bg-surface-container-low"
        >
          <ArrowLeft className="w-8 h-8" />
        </button>
        <h1 className="font-bold text-2xl tracking-tight text-primary">康健守护</h1>
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-primary-container flex items-center justify-center">
          <User className="w-8 h-8 text-on-surface-variant" />
        </div>
      </header>

      <main className="w-full max-w-3xl flex-grow px-5 pt-32 pb-64 flex flex-col gap-10">
        <section className="flex flex-col items-center text-center gap-6">
          <div className="relative flex items-center justify-center w-40 h-40">
            <motion.div 
               animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
               transition={{ repeat: Infinity, duration: 3 }}
               className="absolute inset-0 bg-primary-container rounded-full blur-xl"
            />
            <div className="relative bg-primary-container w-28 h-28 rounded-full flex items-center justify-center shadow-xl border-8 border-white">
              <Bell className="w-16 h-16 text-white animate-bounce" />
            </div>
          </div>
          <h2 className="text-4xl font-extrabold text-primary">消息提醒</h2>
          <p className="text-3xl font-bold text-on-surface-variant max-w-[320px] leading-tight">
            后天 (11月15日)<br />去市中心医院就诊
          </p>
        </section>

        <section className="grid grid-cols-1 gap-6 w-full">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-[32px] p-8 shadow-soft flex flex-col items-center justify-center gap-4 border-2 border-surface-container-high">
              <Clock className="w-12 h-12 text-primary-container" />
              <div className="text-center">
                <span className="text-lg text-on-surface-variant block">时间</span>
                <span className="text-4xl font-black">10:00</span>
              </div>
            </div>
            
            <div className="bg-white rounded-[32px] p-8 shadow-soft flex flex-col items-center justify-center gap-4 border-2 border-surface-container-high">
              <Heart className="w-12 h-12 text-primary-container" />
              <div className="text-center">
                <span className="text-lg text-on-surface-variant block">科室</span>
                <span className="text-3xl font-black">心内科</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[40px] overflow-hidden shadow-soft border-2 border-surface-container-high flex flex-col">
            <div className="p-8 flex items-start gap-6 bg-surface-container-low border-b-2 border-surface-container">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-surface-container">
                <Hospital className="w-10 h-10 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">市中心医院</span>
                <span className="text-xl text-on-surface-variant">门诊大楼 3层</span>
              </div>
            </div>
            
            <div className="relative h-64 w-full bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" 
                alt="Map" 
                className="w-full h-full object-cover opacity-60 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-secondary-container text-on-secondary-container p-3 rounded-2xl flex items-center justify-center">
                    <Bus className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold">推荐路线</span>
                    <span className="text-2xl text-primary font-black">乘坐 102路 公交车</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[32px] p-8 shadow-soft border-2 border-surface-container-high flex items-start gap-6">
            <Info className="w-10 h-10 text-secondary shrink-0" />
            <p className="text-2xl text-on-surface-variant font-medium leading-relaxed">
               就诊前请注意：<strong className="text-on-surface font-black">空腹抽血</strong>，记得带上医保卡。
            </p>
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t-4 border-surface-container-high p-8 pb-12 flex flex-col gap-5 z-50 shadow-[0_-20px_40px_rgba(0,0,0,0.05)]">
        <button 
          onClick={() => navigate(-1)}
          className="w-full h-24 bg-primary text-white rounded-3xl font-extrabold text-2xl flex items-center justify-center gap-4 shadow-xl hover:bg-primary-container active:scale-[0.98] transition-all"
        >
          <CheckCircle className="w-10 h-10" />
          我知道了
        </button>
        
        <button className="w-full h-24 bg-surface-container text-on-surface rounded-3xl font-extrabold text-2xl flex items-center justify-center gap-4 border-4 border-surface-container-high hover:bg-surface-container-highest active:scale-[0.98] transition-all">
          <Phone className="w-10 h-10 text-primary" />
          一键呼叫子女
        </button>
      </div>
    </div>
  );
}

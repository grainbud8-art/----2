import { useNavigate } from 'react-router-dom';
import { 
  Bell, 
  Activity, 
  AlertCircle, 
  Pill, 
  Calendar, 
  ChevronRight, 
  User, 
  Settings, 
  ArrowUpRight, 
  TrendingUp, 
  ArrowRight, 
  Bot,
  Heart,
  Droplets,
  Thermometer,
  Stethoscope,
  LayoutDashboard,
  Sparkles,
  Plus,
  CheckCircle,
  RotateCcw
} from 'lucide-react';
import FamilyLayout from '../../components/FamilyLayout';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

export default function FamilyHome() {
  const navigate = useNavigate();

  return (
    <FamilyLayout title="SLE 管理">
        <div className="flex flex-col gap-5 pb-32">
            {/* Header Profile Section */}
            <section className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 flex items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-slate-100 overflow-hidden border-2 border-white shadow-sm flex items-center justify-center">
                <User className="w-10 h-10 text-slate-400" fill="currentColor" strokeWidth={0} />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-black text-on-surface tracking-tight">对对的看板</h2>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <span className="text-sm font-bold text-slate-500">今日状态平稳</span>
                </div>
              </div>
            </section>

            {/* Top Action Buttons */}
            <div className="grid grid-cols-1 gap-4">
              <button 
                onClick={() => navigate('/family/medicine/setting')}
                className="w-full h-16 bg-white border-2 border-primary rounded-2xl flex items-center justify-center gap-3 text-primary active:scale-95 transition-all shadow-sm"
              >
                <div className="w-7 h-7 bg-primary text-white rounded-lg flex items-center justify-center">
                   <Plus className="w-5 h-5" />
                </div>
                <span className="text-xl font-black tracking-widest">上传新记录</span>
              </button>
              <button 
                onClick={() => navigate('/family/medicine/setting')}
                className="w-full h-16 bg-white border-2 border-primary rounded-2xl flex items-center justify-center gap-3 text-primary active:scale-95 transition-all shadow-sm"
              >
                 <Pill className="w-6 h-6" />
                <span className="text-xl font-black tracking-widest">用药设置</span>
              </button>
            </div>

            {/* Today's Medicine */}
            <section className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Pill className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black">今日用药</h3>
                </div>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">已服 1/2</span>
              </div>

              <div className="space-y-3">
                <div className="bg-slate-50 p-4 rounded-2xl flex items-center justify-between opacity-60">
                   <div className="flex items-center gap-4">
                     <div className="w-6 h-6 rounded-full bg-slate-400 flex items-center justify-center text-white">
                       <CheckCircle className="w-4 h-4" />
                     </div>
                     <div>
                       <p className="font-bold text-slate-600 line-through">硫酸羟氯喹片 (早)</p>
                       <p className="text-sm font-bold text-slate-400">08:00</p>
                     </div>
                   </div>
                </div>

                <div className="p-[2px] bg-primary rounded-2xl">
                  <div className="bg-white p-4 rounded-[14px] flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                         <div className="w-2 h-2 rounded-full bg-primary" />
                       </div>
                       <div>
                         <p className="font-black text-on-surface">醋酸泼尼松片 (午)</p>
                         <p className="text-sm font-bold text-slate-400">12:30 <span className="bg-primary/5 text-primary px-1.5 rounded">待服</span></p>
                       </div>
                    </div>
                    <button className="bg-primary text-white px-5 py-2 rounded-xl font-black text-sm active:scale-90 transition-transform">
                      提醒
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* To-Do Matters */}
            <section className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-500">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black">待办事项</h3>
                </div>
                <span className="bg-sky-50 text-sky-500 px-3 py-1 rounded-full text-sm font-bold">今日记录</span>
              </div>

              <div className="space-y-3">
                <div className="bg-slate-50 p-4 rounded-2xl flex items-center gap-4 opacity-60">
                   <div className="w-6 h-6 rounded-full bg-slate-400 flex items-center justify-center text-white">
                     <CheckCircle className="w-4 h-4" />
                   </div>
                   <p className="font-bold text-slate-600 line-through">记录今日症状 (关节痛/无皮疹)</p>
                </div>
                <div className="p-[2px] bg-sky-400 rounded-2xl">
                   <div className="bg-white p-4 rounded-[14px] flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full border-2 border-slate-200" />
                        <p className="font-black text-on-surface">测量并记录血压</p>
                      </div>
                      <button className="bg-sky-500 text-white px-5 py-2 rounded-xl font-black text-sm">
                        记录
                      </button>
                   </div>
                </div>
              </div>
            </section>

            {/* Recent History Card */}
            <section className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                  <RotateCcw className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black">近期用药记录</h3>
              </div>
              <div className="space-y-2">
                {['硫酸羟氯喹', '泼尼松'].map((med, i) => (
                  <div key={i} className="bg-slate-50 p-4 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <CheckCircle className="w-5 h-5 text-primary" fill="currentColor" strokeWidth={0} />
                       <span className="font-bold text-on-surface">{med}</span>
                    </div>
                    <span className="text-sm font-bold text-slate-400">已服</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Lab Tests Results */}
            <section className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 flex flex-col gap-4">
               <div className="flex items-center justify-between">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                     <Stethoscope className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-black">近期检查</h3>
                 </div>
                 <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-xs font-black">补体 C3/C4</span>
               </div>
               
               <div className="flex flex-col items-start gap-4">
                 <div className="flex items-baseline gap-2">
                   <span className="text-5xl font-black tracking-tighter">0.85</span>
                   <span className="text-2xl font-black text-slate-300">/0.15</span>
                   <span className="text-sm font-bold text-slate-400 ml-1">g/L</span>
                 </div>
                 <div className="bg-primary/5 text-primary px-4 py-2 rounded-2xl flex items-center gap-2">
                   <CheckCircle className="w-4 h-4" />
                   <span className="font-black text-sm">指标平稳</span>
                 </div>
               </div>
            </section>

            {/* Appointment Reminder */}
            <section className="bg-primary/5 rounded-[32px] p-6 border border-primary/10 flex items-center justify-between shadow-sm active:scale-95 transition-transform group">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                  <Bell className="w-8 h-8" fill="currentColor" />
                </div>
                <div>
                   <h4 className="text-xl font-black text-on-surface">复诊预约提醒</h4>
                   <p className="text-lg font-bold text-primary/60">明天 14:00 · 风湿免疫科</p>
                </div>
              </div>
              <ChevronRight className="w-8 h-8 text-primary/30 group-hover:translate-x-1 transition-transform" />
            </section>
        </div>
    </FamilyLayout>
  );
}


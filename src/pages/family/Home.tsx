import { useNavigate } from 'react-router-dom';
import { Bell, Activity, AlertCircle, Pill, Calendar, ChevronRight, User, Settings, ArrowUpRight, TrendingUp, ArrowRight, Bot } from 'lucide-react';
import FamilyLayout from '../../components/FamilyLayout';

export default function FamilyHome() {
  const navigate = useNavigate();

  return (
    <FamilyLayout title="健康监控看板">
        <div className="flex flex-col gap-8">
            {/* Patient Selector / Status */}
            <section className="bg-white rounded-[40px] p-8 shadow-soft flex items-center justify-between border-2 border-transparent active:scale-[0.98] transition-all">
            <div className="flex items-center gap-5">
                <div className="w-[72px] h-[72px] rounded-3xl bg-slate-100 overflow-hidden border-2 border-primary-container flex items-center justify-center shrink-0">
                <User className="w-12 h-12 text-on-surface" fill="currentColor" strokeWidth={0} />
                </div>
                <div>
                <h2 className="text-2xl font-black text-on-surface">张大爷 (父亲)</h2>
                <div className="mt-1 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(37,177,131,0.6)]"></div>
                    <span className="text-base font-black text-primary tracking-wider">
                        实时监测中
                    </span>
                </div>
                </div>
            </div>
            <button className="bg-surface-container text-on-surface-variant px-6 py-3 rounded-2xl hover:bg-primary hover:text-white transition-all font-black text-sm">
                切换患者
            </button>
            </section>

            {/* Vital Alerts */}
            <section 
                onClick={() => navigate('/family/reports', { state: { fromHome: true } })}
                className="bg-error border-l-[16px] border-black/10 rounded-[32px] p-8 flex items-center gap-6 shadow-soft cursor-pointer active:scale-[0.98] transition-all group"
            >
            <div className="bg-white p-4 rounded-2xl text-error group-active:scale-110 transition-transform">
                <AlertCircle className="w-10 h-10" fill="currentColor" strokeWidth={0} />
            </div>
            <div className="flex-1">
                <h3 className="font-black text-white text-xl tracking-tight">近期异常提醒</h3>
                <p className="text-white/90 font-bold text-lg leading-tight">空腹血糖偏高 (7.8)，建议今日复诊</p>
            </div>
            <ArrowRight className="text-white w-8 h-8" />
            </section>

            {/* Daily Progress Cards */}
            <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-[40px] shadow-soft border-b-[12px] border-primary-container">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary-container/20 flex items-center justify-center text-primary">
                    <Pill className="w-8 h-8" fill="currentColor" strokeWidth={0} />
                  </div>
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-xs font-black">用药进度</div>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black">2</span>
                  <span className="text-on-surface-variant font-black text-2xl">/ 3</span>
                </div>
                <p className="text-sm text-on-surface-variant mt-4 font-bold">剩余：羟氯喹</p>
            </div>

            <div className="bg-white p-8 rounded-[40px] shadow-soft border-b-[12px] border-secondary-container">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-secondary-container/20 flex items-center justify-center text-secondary">
                    <Calendar className="w-8 h-8" fill="currentColor" strokeWidth={0} />
                  </div>
                  <div className="bg-secondary/10 text-secondary px-3 py-1 rounded-lg text-xs font-black">就诊计划</div>
                </div>
                <div className="text-3xl font-black leading-none">11月15日</div>
                <p className="text-sm text-on-surface-variant mt-4 font-bold uppercase tracking-wide">风湿免疫科</p>
            </div>
            </div>

            {/* Reports Preview */}
            <section className="bg-white rounded-[40px] p-8 shadow-soft flex flex-col gap-8">
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-black flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary-container/20 flex items-center justify-center text-secondary">
                  <TrendingUp className="w-8 h-8" fill="currentColor" strokeWidth={0} />
                </div>
                健康趋势 (本周)
                </h3>
                <button 
                onClick={() => navigate('/family/reports', { state: { fromHome: true } })}
                className="text-primary font-black flex items-center text-sm border-2 border-primary/20 px-4 py-2 rounded-full active:bg-primary active:text-white transition-all"
                >
                查看报表 <ArrowUpRight className="w-4 h-4 ml-1" />
                </button>
            </div>
            
            <div className="h-48 bg-slate-50 rounded-3xl flex items-end justify-around p-6 px-10 border-2 border-surface-container">
                {[60, 85, 45, 90, 70, 95, 30].map((h, i) => (
                <div key={i} className="w-8 bg-black/5 rounded-t-xl relative group">
                    <div 
                    className="absolute bottom-0 w-full bg-black rounded-t-xl transition-all duration-700" 
                    style={{ height: `${h}%` }}
                    />
                </div>
                ))}
            </div>
            <div className="text-center text-base text-on-surface-variant font-black tracking-tight">
                服药遵从度较上周提升了 <span className="text-primary">+12%</span>
            </div>
            </section>

            {/* Quick Actions */}
            <div className="flex flex-col gap-5">
            <button 
                onClick={() => navigate('/family/medicine/setting', { state: { fromHome: true } })}
                className="w-full h-20 bg-white border-2 border-surface-container-high rounded-3xl flex items-center justify-between px-8 shadow-sm active:scale-[0.98] active:bg-slate-50 transition-all group"
            >
                <span className="font-black text-lg tracking-tight">修改患者用药方案</span>
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-on-surface-variant group-hover:rotate-90 transition-transform">
                  <Settings className="w-8 h-8" fill="currentColor" strokeWidth={0} />
                </div>
            </button>
            <button 
                onClick={() => navigate('/family/ai-assistant/chat')}
                className="w-full h-24 bg-black text-white rounded-3xl flex items-center justify-center gap-5 shadow-2xl active:scale-95 transition-all group"
            >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Bot className="w-10 h-10" fill="currentColor" strokeWidth={0} />
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-black text-xl tracking-tighter">咨询 AI 助手</span>
                  <span className="text-[10px] font-black text-white/50 tracking-[0.2em] uppercase">多模态报告解读</span>
                </div>
            </button>
            </div>
        </div>
    </FamilyLayout>
  );
}

import { useNavigate } from 'react-router-dom';
import { Bell, Activity, AlertCircle, Pill, Calendar, ChevronRight, User, Settings, ArrowUpRight, TrendingUp } from 'lucide-react';
import FamilyLayout from '../../components/FamilyLayout';

export default function FamilyHome() {
  const navigate = useNavigate();

  return (
    <FamilyLayout title="健康监控看板">
        <div className="flex flex-col gap-6">
            {/* Patient Selector / Status */}
            <section className="bg-white rounded-[32px] p-6 shadow-soft flex items-center justify-between border-2 border-primary-container/10">
            <div className="flex items-center gap-4">
                <div className="w-[60px] h-[60px] rounded-full bg-slate-100 overflow-hidden border-2 border-primary-container flex items-center justify-center">
                <User className="w-10 h-10 text-on-surface-variant" />
                </div>
                <div>
                <h2 className="text-xl font-bold text-on-surface">张大爷 (父亲)</h2>
                <span className="text-sm font-bold text-primary flex items-center gap-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    当前状态良好
                </span>
                </div>
            </div>
            <button className="text-on-surface-variant px-4 py-2 rounded-full hover:bg-surface-container transition-colors font-bold">
                切换
            </button>
            </section>

            {/* Vital Alerts */}
            <section 
                onClick={() => navigate('/family/reports')}
                className="bg-error-container/20 border-l-[12px] border-error rounded-[24px] p-6 flex items-center gap-4 shadow-sm cursor-pointer hover:bg-error-container/30 transition-colors"
            >
            <div className="bg-white p-3 rounded-2xl text-error">
                <AlertCircle className="w-8 h-8" />
            </div>
            <div className="flex-1">
                <h3 className="font-bold text-error">近期异常提醒</h3>
                <p className="text-on-error-container font-medium">空腹血糖偏高 (7.8)，已建议今日复诊</p>
            </div>
            <ChevronRight className="text-error" />
            </section>

            {/* Daily Progress Cards */}
            <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-[32px] shadow-soft border-b-8 border-primary-container">
                <div className="flex items-center gap-3 mb-4">
                <Pill className="text-primary w-6 h-6" />
                <h4 className="font-bold text-on-surface-variant">今日服药</h4>
                </div>
                <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black">2</span>
                <span className="text-on-surface-variant font-bold">/ 3</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-2">剩余：羟氯喹 (20:00)</p>
            </div>

            <div className="bg-white p-6 rounded-[32px] shadow-soft border-b-8 border-secondary-container">
                <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-secondary w-6 h-6" />
                <h4 className="font-bold text-on-surface-variant">就诊计划</h4>
                </div>
                <div className="text-xl font-black">11月15日</div>
                <p className="text-xs text-on-surface-variant mt-2 font-bold">后天 · 心内科</p>
            </div>
            </div>

            {/* Reports Preview */}
            <section className="bg-white rounded-[32px] p-6 shadow-soft flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold flex items-center gap-3">
                <TrendingUp className="text-secondary w-6 h-6" />
                健康趋势 (本周)
                </h3>
                <button 
                onClick={() => navigate('/family/reports')}
                className="text-primary font-bold flex items-center text-sm"
                >
                详细报告 <ArrowUpRight className="w-4 h-4" />
                </button>
            </div>
            
            <div className="h-40 bg-slate-50 rounded-2xl flex items-end justify-around p-4 px-8">
                {[60, 85, 45, 90, 70, 95, 30].map((h, i) => (
                <div key={i} className="w-6 bg-primary-container/20 rounded-t-lg relative group">
                    <div 
                    className="absolute bottom-0 w-full bg-primary rounded-t-lg transition-all duration-500" 
                    style={{ height: `${h}%` }}
                    />
                </div>
                ))}
            </div>
            <div className="text-center text-sm text-on-surface-variant font-medium">
                服药遵从度较上周提升了 <span className="text-primary font-bold">12%</span>
            </div>
            </section>

            {/* Quick Actions */}
            <div className="flex flex-col gap-4">
            <button 
                onClick={() => navigate('/family/medicine/setting')}
                className="w-full h-16 bg-white border-2 border-surface-container-high rounded-2xl flex items-center justify-between px-6 shadow-sm hover:bg-surface-container transition-colors"
            >
                <span className="font-bold">修改患者用药方案</span>
                <Settings className="w-6 h-6 text-on-surface-variant" />
            </button>
            <button 
                onClick={() => navigate('/family/ai-assistant/chat')}
                className="w-full h-16 bg-secondary text-white rounded-2xl flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-transform"
            >
                <Bot className="w-6 h-6" />
                <span className="font-bold">咨询 AI 助手 (多模态报告解读)</span>
            </button>
            </div>
        </div>
    </FamilyLayout>
  );
}

function Bot(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    );
}

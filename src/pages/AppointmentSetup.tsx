import Layout from '../components/Layout';
import FamilyLayout from '../components/FamilyLayout';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Clock, 
  Hospital, 
  Stethoscope, 
  Bell, 
  Phone, 
  Save, 
  ChevronDown, 
  SquarePlus 
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export default function AppointmentSetup() {
  const navigate = useNavigate();
  const location = useLocation();
  const isFamily = location.pathname.startsWith('/family');
  const [reminder, setReminder] = useState(true);

  const Wrapper = isFamily ? FamilyLayout : Layout;

  return (
    <Wrapper title="就诊设置" showBack={true}>
      <div className="flex flex-col gap-8 pb-12">
        {/* 就诊信息 Section */}
        <section className="bg-white rounded-[40px] p-8 shadow-soft border border-surface-container flex flex-col gap-8">
          <h2 className="text-4xl font-black text-on-surface">就诊信息</h2>
          
          <div className="h-[1px] bg-surface-container-high w-full"></div>

          <div className="space-y-8">
            {/* 就诊时间 */}
            <div className="flex flex-col gap-4">
              <label className="text-2xl font-bold text-on-surface flex items-center gap-3">
                 <Clock className="w-8 h-8 text-primary" fill="currentColor" strokeWidth={0} />
                 就诊时间
              </label>
              <div className="relative">
                <input 
                  type="text"
                  placeholder="mm/dd/yyyy, --:-- --"
                  className="w-full h-20 rounded-2xl border-4 border-surface-container px-6 text-2xl font-bold focus:border-primary-container focus:ring-0 transition-colors"
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Clock className="w-8 h-8 text-on-surface" />
                </div>
              </div>
            </div>

            {/* 就诊医院 */}
            <div className="flex flex-col gap-4">
              <label className="text-2xl font-bold text-on-surface flex items-center gap-3">
                 <SquarePlus className="w-8 h-8 text-primary" fill="currentColor" strokeWidth={0} />
                 就诊医院
              </label>
              <div className="relative">
                <div className="w-full h-20 rounded-2xl border-4 border-surface-container px-6 flex items-center justify-between group cursor-pointer">
                  <span className="text-2xl font-medium text-on-surface-variant">请选择或输入医院名称</span>
                  <ChevronDown className="w-8 h-8 text-outline" />
                </div>
              </div>
            </div>

            {/* 就诊科室 */}
            <div className="flex flex-col gap-4">
              <label className="text-2xl font-bold text-on-surface flex items-center gap-3">
                 <Hospital className="w-8 h-8 text-primary" fill="currentColor" strokeWidth={0} />
                 就诊科室
              </label>
              <input 
                placeholder="如：心内科、骨科"
                className="h-20 rounded-2xl border-4 border-surface-container px-6 text-2xl font-bold focus:border-primary-container focus:ring-0 transition-colors placeholder:text-on-surface-variant placeholder:font-medium"
              />
            </div>
          </div>
        </section>

        {/* 提醒设置 Section */}
        <section className="bg-surface-container/20 rounded-[40px] p-8 shadow-soft border border-surface-container/50 flex flex-col gap-8">
          <h2 className="text-4xl font-black text-on-surface flex items-center gap-4">
            <Bell className="w-10 h-10 text-primary" fill="currentColor" strokeWidth={0} />
            提醒设置
          </h2>
          <div className="bg-white rounded-3xl p-8 flex items-center justify-between shadow-sm">
            <span className="text-3xl font-bold text-on-surface leading-tight max-w-[60%]">就诊前15分钟提醒我</span>
            <button 
              onClick={() => setReminder(!reminder)}
              className={cn(
                "w-24 h-12 rounded-full transition-colors relative flex items-center px-1",
                reminder ? "bg-primary" : "bg-outline/30"
              )}
            >
              <div className={cn(
                "w-10 h-10 bg-white rounded-full transition-transform shadow-md",
                reminder ? "translate-x-12" : "translate-x-0"
              )} />
            </button>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex flex-col gap-6 mt-8">
          <button 
            className="w-full h-28 bg-[#FEE2E2] text-[#B91C1C] rounded-[32px] flex items-center justify-center gap-6 shadow-soft active:scale-95 transition-transform"
          >
            <Phone className="w-12 h-12 fill-[#B91C1C]" strokeWidth={0} />
            <span className="text-3xl font-black tracking-widest">呼叫子女</span>
          </button>
          
          <button 
             onClick={() => navigate(-1)}
             className="w-full h-28 bg-primary text-white rounded-[32px] flex items-center justify-center gap-6 shadow-xl shadow-primary/20 active:scale-95 transition-transform"
          >
            <Save className="w-12 h-12" fill="currentColor" strokeWidth={0} />
            <span className="text-3xl font-black tracking-widest">保存设置并同步</span>
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

import Layout from '../components/Layout';
import FamilyLayout from '../components/FamilyLayout';
import { useNavigate, useLocation } from 'react-router-dom';
import { Calendar, Hospital, Stethoscope, Bell, Phone, Save, ChevronDown } from 'lucide-react';

export default function AppointmentSetup() {
  const navigate = useNavigate();
  const location = useLocation();
  const isFamily = location.pathname.startsWith('/family');

  const Wrapper = isFamily ? FamilyLayout : Layout;

  return (
    <Wrapper title={isFamily ? "就诊与方案设置" : "就诊设置"} showBack>
      <div className="flex flex-col gap-8">
        <section className="bg-white rounded-[32px] p-8 shadow-soft flex flex-col gap-8">
          <h2 className="text-3xl font-bold border-b-8 border-surface-container pb-4">就诊信息</h2>
          
          <div className="space-y-8">
            <div className="flex flex-col gap-4">
              <label className="text-xl font-bold text-on-surface-variant flex items-center gap-3">
                 <Calendar className="w-8 h-8 text-primary" />
                 就诊时间
              </label>
              <input 
                type="datetime-local"
                className="h-20 rounded-2xl border-4 border-surface-container px-6 text-xl font-bold focus:border-primary-container focus:ring-0 transition-colors"
                defaultValue="2023-11-15T10:00"
              />
            </div>

            <div className="flex flex-col gap-4">
              <label className="text-xl font-bold text-on-surface-variant flex items-center gap-3">
                 <Hospital className="w-8 h-8 text-primary" />
                 就诊医院
              </label>
              <div className="relative">
                <select className="h-20 w-full appearance-none rounded-2xl border-4 border-surface-container px-6 text-xl font-bold focus:border-primary-container focus:ring-0 transition-colors bg-transparent">
                  <option>市中心医院</option>
                  <option>省级人民医院</option>
                  <option>社区卫生服务中心</option>
                </select>
                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 text-outline pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <label className="text-xl font-bold text-on-surface-variant flex items-center gap-3">
                 <Stethoscope className="w-8 h-8 text-primary" />
                 就诊科室
              </label>
              <input 
                placeholder="如：心内科、骨科"
                className="h-20 rounded-2xl border-4 border-surface-container px-6 text-xl font-bold focus:border-primary-container focus:ring-0 transition-colors"
                defaultValue="心内科"
              />
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low rounded-[32px] p-8 shadow-soft border-4 border-surface-container-high flex flex-col gap-6">
          <h2 className="text-3xl font-bold flex items-center gap-4">
            <Bell className="w-10 h-10 text-secondary fill-secondary" />
            提醒设置
          </h2>
          <div className="bg-white rounded-2xl p-6 flex items-center justify-between shadow-sm">
            <span className="text-2xl font-bold">就诊前15分钟提醒我</span>
            <div className="relative inline-flex items-center cursor-pointer">
              <div className="w-20 h-10 bg-primary-container rounded-full flex items-center px-1">
                 <div className="w-8 h-8 bg-white rounded-full translate-x-10"></div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-4">
          <button className="w-full h-24 bg-error-container text-on-error-container rounded-3xl flex items-center justify-center gap-4 shadow-sh active:scale-95 transition-transform">
            <Phone className="w-10 h-10 fill-on-error-container" />
            <span className="text-2xl font-bold">一键呼叫子女陪同</span>
          </button>
          
          <button 
             onClick={() => navigate('/reminder')}
             className="w-full h-24 bg-primary text-white rounded-3xl flex items-center justify-center gap-4 shadow-xl active:scale-95 transition-transform"
          >
            <Save className="w-10 h-10" />
            <span className="text-2xl font-bold">保存设置并同步</span>
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

import Layout from '../components/Layout';
import FamilyLayout from '../components/FamilyLayout';
import { useNavigate, useLocation } from 'react-router-dom';
import { User, Activity, Settings, ShieldCheck, HelpCircle, ChevronRight, Speaker, Type } from 'lucide-react';

export default function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  const isFamily = location.pathname.startsWith('/family');

  const Wrapper = isFamily ? FamilyLayout : Layout;

  return (
    <Wrapper title="个人中心">
      <div className="flex flex-col gap-6">
        {/* Profile Info */}
        <section className="bg-white rounded-[24px] shadow-soft p-6 flex items-center gap-6">
          <div className="w-[100px] h-[100px] rounded-full bg-primary-container text-white flex items-center justify-center shrink-0 shadow-lg">
            <User className="w-16 h-16" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-on-surface">对对</h2>
            <div className="inline-flex items-center gap-2 bg-secondary-container/20 text-on-secondary-container px-4 py-2 rounded-full mt-2 w-fit">
              <Activity className="w-5 h-5" />
              <span className="font-bold">SLE病程 11 年</span>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <div className="flex flex-col gap-4">
          <button 
             onClick={() => navigate('/documents')}
             className="w-full h-20 bg-primary text-white rounded-[24px] flex items-center justify-center gap-4 shadow-lg active:scale-95 transition-transform"
          >
            <span className="text-2xl font-bold">健康记录</span>
          </button>
          <button className="w-full h-20 bg-error text-white rounded-[24px] flex items-center justify-center gap-4 shadow-lg active:scale-95 transition-transform">
            <span className="text-2xl font-bold">呼叫子女</span>
          </button>
        </div>

        {/* Accessibility Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-white rounded-[24px] shadow-soft p-6 flex flex-col gap-4 justify-between min-h-[160px]">
            <div className="flex items-center gap-3">
              <Type className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold">字体调节</h3>
            </div>
            <div className="flex items-center justify-between bg-surface-container-high rounded-full p-2">
              <button className="w-14 h-14 rounded-full bg-white text-on-surface flex items-center justify-center shadow-sm">
                <span className="text-xl font-bold">A-</span>
              </button>
              <span className="text-2xl font-bold">特大</span>
              <button className="w-14 h-14 rounded-full bg-primary-container text-white flex items-center justify-center shadow-sm">
                <span className="text-2xl font-bold">A+</span>
              </button>
            </div>
          </section>

          <section className="bg-white rounded-[24px] shadow-soft p-6 flex flex-col gap-4 justify-between min-h-[160px]">
             <div className="flex items-center gap-3">
              <Speaker className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold">音量调节</h3>
            </div>
            <div className="flex items-center justify-between bg-surface-container-high rounded-full p-2">
              <button className="w-14 h-14 rounded-full bg-white text-on-surface flex items-center justify-center shadow-sm">
                 <span className="text-xl font-bold">-</span>
              </button>
              <span className="text-2xl font-bold">大</span>
              <button className="w-14 h-14 rounded-full bg-primary-container text-white flex items-center justify-center shadow-sm">
                 <span className="text-2xl font-bold">+</span>
              </button>
            </div>
          </section>
        </div>

        {/* Settings List */}
        <section className="bg-white rounded-[24px] shadow-soft overflow-hidden">
          <button 
            onClick={() => navigate('/profile')}
            className="w-full flex items-center justify-between p-6 border-b border-surface-container hover:bg-surface-container-low transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary">
                <Settings className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">账号设置</span>
            </div>
            <ChevronRight className="w-8 h-8 text-outline" />
          </button>
          
          <button className="w-full flex items-center justify-between p-6 border-b border-surface-container hover:bg-surface-container-low transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">授权管理</span>
            </div>
            <ChevronRight className="w-8 h-8 text-outline" />
          </button>
          
          <button className="w-full flex items-center justify-between p-6 border-b border-surface-container hover:bg-surface-container-low transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary">
                <HelpCircle className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">使用帮助</span>
            </div>
            <ChevronRight className="w-8 h-8 text-outline" />
          </button>

          <button 
            onClick={() => navigate('/')}
            className="w-full flex items-center justify-between p-6 hover:bg-surface-container-low transition-colors text-error"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-error/10 flex items-center justify-center">
                <User className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">退出并切换角色</span>
            </div>
            <ChevronRight className="w-8 h-8 text-outline" />
          </button>
        </section>
      </div>
    </Wrapper>
  );
}

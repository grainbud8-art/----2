import Layout from '../components/Layout';
import FamilyLayout from '../components/FamilyLayout';
import { useNavigate, useLocation } from 'react-router-dom';
import { User, Activity, Settings, ShieldCheck, HelpCircle, ChevronRight, Speaker, Type, Bell } from 'lucide-react';

export default function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  const isFamily = location.pathname.startsWith('/family');

  const Wrapper = isFamily ? FamilyLayout : Layout;

  if (isFamily) {
    return (
      <Wrapper title="个人中心">
        <div className="flex flex-col gap-6">
          {/* Header Profile Info */}
          <section className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-slate-100 overflow-hidden border-2 border-white shadow-md flex items-center justify-center shrink-0">
               {/* Using a placeholder for the avatar as in the reference image */}
               <img 
                 src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop" 
                 alt="Profile" 
                 className="w-full h-full object-cover"
               />
            </div>
            <div className="flex flex-col">
              <h2 className="text-4xl font-black text-on-surface tracking-tighter">林晓云</h2>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-xl font-black text-slate-400">主监护人</span>
              </div>
            </div>
          </section>

          {/* Action List */}
          <div className="flex flex-col gap-5">
            {/* 关联长辈管理 */}
            <button className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 flex items-center justify-between group active:scale-[0.98] transition-all">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                  <User className="w-10 h-10" fill="currentColor" strokeWidth={0} />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-2xl font-black text-on-surface tracking-tight">关联长辈管理</span>
                  <span className="text-lg font-bold text-slate-400">添加或切换被监护的长辈账号</span>
                </div>
              </div>
              <ChevronRight className="w-8 h-8 text-slate-200 group-hover:text-primary transition-colors" />
            </button>

            {/* 监护与权限设置 */}
            <button className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 flex items-center justify-between group active:scale-[0.98] transition-all">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-sky-400 flex items-center justify-center text-white shrink-0">
                  <ShieldCheck className="w-10 h-10" fill="currentColor" strokeWidth={0} />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-2xl font-black text-on-surface tracking-tight">监护与权限设置</span>
                  <span className="text-lg font-bold text-slate-400">管理其他家属的查看或编辑权限</span>
                </div>
              </div>
              <ChevronRight className="w-8 h-8 text-slate-200 group-hover:text-primary transition-colors" />
            </button>

            {/* 预警与通知设置 */}
            <button className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 flex items-center justify-between group active:scale-[0.98] transition-all">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-rose-200 flex items-center justify-center text-rose-500 shrink-0">
                  <Bell className="w-10 h-10" fill="currentColor" strokeWidth={0} />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-2xl font-black text-on-surface tracking-tight">预警与通知设置</span>
                  <span className="text-lg font-bold text-slate-400">设置异常健康数据的提醒方式</span>
                </div>
              </div>
              <ChevronRight className="w-8 h-8 text-slate-200 group-hover:text-primary transition-colors" />
            </button>
          </div>

          {/* Logout button at the bottom */}
          <button 
            onClick={() => navigate('/')}
            className="mt-4 w-full h-20 bg-slate-50 border border-slate-100 rounded-[32px] flex items-center justify-center gap-4 text-slate-400 font-black text-xl active:scale-95 transition-all"
          >
            退出并切换角色
          </button>
        </div>
      </Wrapper>
    );
  }

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

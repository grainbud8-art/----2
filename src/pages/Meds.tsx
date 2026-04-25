import Layout from '../components/Layout';
import FamilyLayout from '../components/FamilyLayout';
import { useNavigate, useLocation } from 'react-router-dom';
import { PlusCircle, Pill, CheckCircle, Calendar, ChevronRight, Settings, AlertTriangle } from 'lucide-react';
import { mockMedications } from '../mockData';
import { cn } from '../lib/utils';

export default function Meds() {
  const navigate = useNavigate();
  const location = useLocation();
  const isFamily = location.pathname.startsWith('/family');

  const Wrapper = isFamily ? FamilyLayout : Layout;

  return (
    <Wrapper title="用药管理" showBack={location.state?.fromHome}>
      <div className="flex flex-col gap-8">
        <section className="flex flex-col gap-2">
          <p className="text-on-surface-variant text-lg">请按时服用您的药物，保持病情稳定。</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">今日需服药物</h2>
              <button className="text-primary font-bold flex items-center gap-2 px-4 py-2 rounded-full hover:bg-surface-container transition-colors">
                <PlusCircle className="w-6 h-6" fill="currentColor" strokeWidth={0} />
                添加提醒
              </button>
            </div>

            {mockMedications.map((med) => (
              <div 
                key={med.id}
                onClick={() => navigate(`/medicine/detail/${med.id}`)}
                className="bg-white rounded-[24px] p-6 shadow-soft flex flex-col gap-6 relative overflow-hidden border-2 border-transparent hover:border-primary-container/20 transition-all cursor-pointer"
              >
                {med.stockRemainingDays && med.stockRemainingDays <= 5 && (
                  <div className="absolute top-0 right-0 bg-error text-white px-4 py-2 rounded-bl-2xl text-sm font-bold flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" fill="currentColor" strokeWidth={0} />
                    库存剩余{med.stockRemainingDays}天
                  </div>
                )}
                
                <div className="flex items-center gap-6 mt-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary-container/10 flex items-center justify-center text-on-surface group-hover:bg-primary group-hover:text-white transition-colors">
                    <Pill className="w-8 h-8" fill="currentColor" strokeWidth={0} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-black leading-tight">{med.name}</h3>
                    <span className="text-on-surface-variant text-lg font-bold">{med.dosage} · {med.frequency}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {med.times.map(time => (
                    <div key={time} className="bg-surface-container h-12 px-6 rounded-full flex items-center justify-center font-bold">
                      {time === '08:00' ? '早晨' : '晚上'} {time}
                    </div>
                  ))}
                  <div className="bg-error-container/30 text-on-error-container h-12 px-6 rounded-full flex items-center justify-center font-bold">
                    {med.instructions}
                  </div>
                </div>

                <button 
                  onClick={(e) => { e.stopPropagation(); }}
                  className="w-full h-16 bg-primary text-white font-black rounded-[24px] flex items-center justify-center gap-4 active:scale-95 transition-all shadow-lg shadow-primary/20"
                >
                  <CheckCircle className="w-8 h-8" fill="currentColor" strokeWidth={0} />
                  确认已服药
                </button>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-primary text-white rounded-[24px] p-6 shadow-soft flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">本周记录</h3>
                <Calendar className="w-8 h-8 opacity-80" fill="currentColor" strokeWidth={0} />
              </div>
              <div className="grid grid-cols-7 gap-2 text-center">
                {['一', '二', '三', '四', '五', '六', '日'].map((day, i) => (
                  <div key={day} className="flex flex-col gap-2 items-center">
                    <span className="text-xs opacity-80">{day}</span>
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center font-bold",
                      i < 2 ? "bg-white text-primary" : i === 2 ? "border-2 border-white" : "opacity-30"
                    )}>
                      {i < 2 ? <CheckCircle className="w-6 h-6" fill="currentColor" strokeWidth={0} /> : (12+i)}
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full h-14 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-colors">
                查看完整日历
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="bg-white rounded-[24px] p-4 shadow-soft flex flex-col">
              <button className="w-full h-20 flex items-center justify-between px-4 hover:bg-surface-container-low rounded-xl transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface">
                    <PlusCircle className="w-6 h-6" fill="currentColor" strokeWidth={0} />
                  </div>
                  <span className="text-xl font-bold">库存管理</span>
                </div>
                <ChevronRight className="w-8 h-8 text-outline" />
              </button>
              <div className="h-[1px] bg-outline-variant/30 mx-4"></div>
              <button className="w-full h-20 flex items-center justify-between px-4 hover:bg-surface-container-low rounded-xl transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface">
                    <Settings className="w-6 h-6" fill="currentColor" strokeWidth={0} />
                  </div>
                  <span className="text-xl font-bold">用药设置</span>
                </div>
                <ChevronRight className="w-8 h-8 text-outline" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

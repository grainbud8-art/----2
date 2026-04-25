import Layout from '../components/Layout';
import FamilyLayout from '../components/FamilyLayout';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  PlusCircle, 
  Pill, 
  CheckCircle, 
  Calendar, 
  ChevronRight, 
  Settings, 
  AlertTriangle, 
  Hospital, 
  Stethoscope, 
  ClipboardList, 
  Hospital as HospitalIcon, 
  Clock,
  MapPin,
  FlaskConical,
  Microscope,
  ClipboardCheck,
  BellRing,
  Contact,
  Activity,
  Phone
} from 'lucide-react';
import { mockMedications, mockRecords } from '../mockData';
import { cn } from '../lib/utils';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Meds() {
  const navigate = useNavigate();
  const location = useLocation();
  const isFamily = location.pathname.startsWith('/family');
  const [activeTab, setActiveTab] = useState<'medication' | 'medical'>('medical'); // Default to medical for previewing changes

  // Auto-trigger reminder after a delay for demo purposes on this page
  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new CustomEvent('show-demo-reminder'));
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const Wrapper = isFamily ? FamilyLayout : Layout;

  return (
    <Wrapper title="医药管理" showBack={location.state?.fromHome}>
      <div className="flex flex-col gap-8 overflow-x-hidden relative">
        {/* Tab Switcher */}
        <div className="flex justify-center px-4">
          <div className="flex w-full bg-white border border-surface-container rounded-full p-1.5 h-16 shadow-sm max-w-md">
            <button 
              onClick={() => setActiveTab('medical')}
              className={cn(
                "flex-1 rounded-full font-bold text-lg transition-all flex items-center justify-center",
                activeTab === 'medical' ? "bg-primary/5 border border-primary text-primary" : "text-on-surface-variant hover:bg-surface-container/50"
              )}
            >
              就医管理
            </button>
            <button 
              onClick={() => setActiveTab('medication')}
              className={cn(
                "flex-1 rounded-full font-bold text-lg transition-all flex items-center justify-center",
                activeTab === 'medication' ? "bg-primary/5 border border-primary text-primary" : "text-on-surface-variant hover:bg-surface-container/50"
              )}
            >
              用药管理
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'medication' ? (
            <motion.div 
              key="medication"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-8"
            >
              <section className="flex flex-col gap-2 px-4">
                <p className="text-on-surface-variant text-lg">请按时服用您的药物，保持病情稳定。</p>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
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
                    <button 
                      onClick={() => navigate('/medicine/setting')}
                      className="w-full h-20 flex items-center justify-between px-4 hover:bg-surface-container-low rounded-xl transition-colors"
                    >
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
            </motion.div>
          ) : (
            <motion.div 
              key="medical"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6 px-4 pb-12"
            >
              {/* 近期就诊计划 */}
              <section className="bg-white rounded-[32px] p-6 shadow-soft border border-surface-container">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-8 h-8 text-primary" fill="currentColor" strokeWidth={0} />
                  <h3 className="text-3xl font-black text-on-surface">近期就诊计划</h3>
                </div>

                <div className="bg-surface-container/20 rounded-[28px] p-6 relative overflow-hidden border-l-[6px] border-primary">
                  <div className="flex flex-col gap-4">
                    <div className="inline-flex self-start bg-surface-container/50 px-4 py-1.5 rounded-full text-base font-bold text-on-surface-variant">
                      10月25日 (周三)
                    </div>
                    
                    <h4 className="text-3xl font-black tracking-tight">风湿免疫科 - 复查</h4>
                    
                    <div className="flex items-center gap-3 text-on-surface-variant">
                      <MapPin className="w-6 h-6 text-primary/60 shrink-0" fill="currentColor" strokeWidth={0} />
                      <span className="text-xl font-bold">市第一人民医院 门诊大楼 3楼</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* 需携带单据及检查内容 */}
              <section className="bg-white rounded-[32px] p-6 shadow-soft border border-surface-container">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 text-primary p-1.5 rounded-lg">
                    <ClipboardCheck className="w-7 h-7" fill="currentColor" strokeWidth={0} />
                  </div>
                  <h3 className="text-3xl font-black text-on-surface">需携带单据及检查</h3>
                </div>

                <div className="flex flex-col gap-3">
                  {/* Item 1 */}
                  <div className="bg-surface-container/20 rounded-2xl p-5 flex items-center justify-between group cursor-pointer hover:bg-surface-container/40 transition-colors">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                        <FlaskConical className="w-8 h-8" fill="currentColor" strokeWidth={0} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xl font-black">补体C3/C4检测报告</span>
                        <span className="text-base text-on-surface-variant font-medium">上周二已检，请带纸质版</span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-outline/20 shrink-0"></div>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-surface-container/20 rounded-2xl p-5 flex items-center justify-between group cursor-pointer hover:bg-surface-container/40 transition-colors">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                        <Microscope className="w-8 h-8" fill="currentColor" strokeWidth={0} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xl font-black">自身抗体全套 (ANA等)</span>
                        <span className="text-base text-error font-bold">需空腹前往医院抽血</span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-outline/20 shrink-0"></div>
                  </div>

                  {/* Item 3 */}
                  <div className="bg-surface-container/20 rounded-2xl p-5 flex items-center justify-between group cursor-pointer hover:bg-surface-container/40 transition-colors">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                        <ClipboardList className="w-8 h-8" fill="currentColor" strokeWidth={0} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xl font-black">近期用药记录本</span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-outline/20 shrink-0"></div>
                  </div>
                </div>
              </section>

              {/* 就务中心 - Unified Records and Settings */}
              <section className="bg-white rounded-[32px] p-6 shadow-soft border border-surface-container mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-1.5 rounded-lg">
                    <Settings className="w-8 h-8 text-primary" fill="currentColor" strokeWidth={0} />
                  </div>
                  <h3 className="text-3xl font-black text-on-surface">就务中心</h3>
                </div>

                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => navigate('/records')}
                    className="flex items-center justify-between p-5 bg-surface-container/10 rounded-2xl group active:scale-98 transition-all border border-surface-container/30"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary/5 transition-colors">
                        <Stethoscope className="w-7 h-7" fill="currentColor" strokeWidth={0} />
                      </div>
                      <span className="text-xl font-black">就诊记录</span>
                    </div>
                    <ChevronRight className="w-6 h-6 text-outline" />
                  </button>

                  <div className="h-[1px] bg-surface-container/50 mx-2 my-1"></div>

                  <button 
                    onClick={() => navigate('/medicine/setting')}
                    className="flex items-center justify-between p-5 bg-surface-container/10 rounded-2xl group active:scale-98 transition-all border border-surface-container/30"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary/5 transition-colors">
                        <Settings className="w-7 h-7" fill="currentColor" strokeWidth={0} />
                      </div>
                      <span className="text-xl font-black">就诊设置</span>
                    </div>
                    <ChevronRight className="w-6 h-6 text-outline" />
                  </button>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Wrapper>
  );
}

import FamilyLayout from '../../components/FamilyLayout';
import { ClipboardList, AlertCircle, CheckCircle2, History, ArrowRight, UserCheck } from 'lucide-react';
import { mockRecords } from '../../mockData';

export default function FamilyMedicineManagement() {
  return (
    <FamilyLayout title="医疗就诊管理" showBack>
      <div className="flex flex-col gap-6">
        {/* Latest Medical Decision */}
        <section className="bg-primary/5 border-2 border-primary/10 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <UserCheck className="w-6 h-6 text-primary" />
              最新就诊方案确认
            </h2>
            <span className="text-sm bg-warning/10 text-warning px-3 py-1 rounded-full font-bold">待确认</span>
          </div>
          
          <div className="bg-white rounded-2xl p-5 shadow-sm border-l-8 border-primary">
            <div className="flex justify-between items-start mb-3">
              <span className="text-sm font-bold text-on-surface-variant flex items-center gap-2">
                <History className="w-4 h-4" /> 2023-11-15 14:30
              </span>
              <span className="text-primary text-sm font-bold">复查方案</span>
            </div>
            <h3 className="text-lg font-bold mb-2">省级人民医院 · 风湿免疫科</h3>
            <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
              医生建议维持目前波尼松剂量，增加一份钙剂。请确认为【对对】更新用药提醒。
            </p>
            <div className="flex gap-3 mt-4">
              <button className="flex-1 h-12 bg-primary text-white rounded-xl font-bold text-sm shadow-sm active:scale-95 transition-all">
                确认并同步提醒
              </button>
              <button className="h-12 px-6 bg-surface-container rounded-xl font-bold text-sm text-on-surface-variant">
                稍后
              </button>
            </div>
          </div>
        </section>

        {/* History of changes */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold px-2">方案变更历史</h2>
          <div className="relative border-l-4 border-surface-container-high ml-4 pl-8 space-y-8 py-2">
            {[1, 2].map((_, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[38px] top-1 w-5 h-5 rounded-full bg-surface-container-high border-4 border-white shadow-sm"></div>
                <div className="bg-white rounded-2xl p-5 shadow-soft">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-on-surface-variant">2023-08-10</span>
                    <span className="text-success text-xs font-black flex items-center gap-1">
                       <CheckCircle2 className="w-3 h-3" /> 已同步
                    </span>
                  </div>
                  <h4 className="font-bold mb-1">调整激素用量</h4>
                  <p className="text-xs text-on-surface-variant">波尼松 10mg &rarr; 5mg</p>
                  <button className="mt-4 text-primary text-xs font-bold flex items-center gap-1">
                    查看详情 <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Prescription Verification */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold px-2">处方真伪/详细对比</h2>
          <div className="bg-white rounded-3xl p-6 shadow-soft border-2 border-dashed border-outline-variant flex flex-col items-center justify-center gap-4 text-center">
             <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-primary">
               <AlertCircle className="w-8 h-8" />
             </div>
             <div>
               <p className="font-bold">上传处方照片或扫码</p>
               <p className="text-xs text-on-surface-variant mt-1">AI 将自动比对数据库，确保药物正确性</p>
             </div>
             <button className="mt-2 bg-primary text-white px-8 h-12 rounded-full font-bold shadow-sm">
               立即识别
             </button>
          </div>
        </section>
      </div>
    </FamilyLayout>
  );
}

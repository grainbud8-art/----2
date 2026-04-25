import { useNavigate } from 'react-router-dom';
import { TrendingUp, Calendar, AlertTriangle, FileText, Share2, Download, Filter } from 'lucide-react';
import FamilyLayout from '../../components/FamilyLayout';

export default function FamilyReports() {
  const navigate = useNavigate();

  return (
    <FamilyLayout title="专项监控周报" showBack>
      <div className="flex flex-col gap-8">
        {/* Actions (Standalone from header) */}
        <div className="flex justify-end gap-3 -mt-4">
          <button className="w-10 h-10 flex items-center justify-center text-on-surface-variant bg-white shadow-sm border border-surface-container rounded-full active:scale-90 transition-transform">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-on-surface-variant bg-white shadow-sm border border-surface-container rounded-full active:scale-90 transition-transform">
            <Download className="w-5 h-5" />
          </button>
        </div>

        {/* Range Selector */}
        <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-surface-container">
           <div className="flex items-center gap-3">
             <Calendar className="text-primary w-5 h-5" />
             <span className="font-bold">2023.11.06 - 2023.11.12</span>
           </div>
           <button className="bg-surface-container-low px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold">
             <Filter className="w-4 h-4" /> 筛选
           </button>
        </div>

        {/* Compliance Summary */}
        <section className="bg-white rounded-[32px] p-8 shadow-soft border-l-[16px] border-primary">
          <h3 className="text-2xl font-black mb-8">用药遵从度概览</h3>
          <div className="flex items-center justify-around mb-8">
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="64" cy="64" r="54" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-100" />
                  <circle cx="64" cy="64" r="54" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="339.29" strokeDashoffset="33.93" className="text-primary" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-black">90%</span>
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase">遵从率</span>
                </div>
              </div>
              <span className="text-sm font-bold text-primary">良好 (↑5%)</span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <div>
                  <div className="text-xs text-on-surface-variant font-bold">准时服药</div>
                  <div className="font-bold">18 次</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-secondary-container" />
                <div>
                  <div className="text-xs text-on-surface-variant font-bold">延迟或漏服</div>
                  <div className="font-bold">2 次</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Analysis */}
        <section className="flex flex-col gap-4">
           <h3 className="text-xl font-bold px-2">关键异常点分析</h3>
           <div className="bg-error-container/10 rounded-[24px] p-6 border-2 border-error/10 flex items-start gap-4">
             <AlertTriangle className="text-error w-8 h-8 shrink-0" />
             <div>
               <h4 className="font-bold text-error mb-1">漏服提醒：11月10日 晚</h4>
               <p className="text-sm text-on-error-container font-medium leading-relaxed">
                 患者在该时间段未确认服药（羟氯喹）。经AI助手沟通，反馈为“忘记喝水因此耽搁”，已建议设置更响亮的音频提醒。
               </p>
             </div>
           </div>

           <div className="bg-white rounded-[24px] p-6 shadow-soft flex items-start gap-4 border border-surface-container">
             <FileText className="text-secondary w-8 h-8 shrink-0" />
             <div>
               <h4 className="font-bold mb-1">健康数据波动 (体温)</h4>
               <p className="text-sm text-on-surface-variant font-medium leading-relaxed">
                 本周体温存在微弱波动 (37.1℃ - 37.3℃)，属于正常恢复期范畴，皮疹面积相较上周减少约 15%。
               </p>
             </div>
           </div>
        </section>

        {/* Doctor Summary Output */}
        <section className="bg-secondary text-white rounded-[32px] p-8 shadow-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-bl-full"></div>
           <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
             <TrendingUp className="w-5 h-5" /> 专家建议
           </h3>
           <p className="text-lg font-medium leading-relaxed opacity-90">
             目前病情趋于稳定，建议保持当前狼疮治疗方案。提醒其加强手部关节保暖。下周一可安排常规血检以监控补体水平。
           </p>
           <button className="mt-6 bg-white text-secondary px-8 py-3 rounded-xl font-black text-sm flex items-center gap-2 active:scale-95 transition-transform">
             发送给主治医生 <Share2 className="w-4 h-4" />
           </button>
        </section>
      </div>
    </FamilyLayout>
  );
}

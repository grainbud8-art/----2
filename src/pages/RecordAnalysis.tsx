import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import { Stethoscope, Pill, AlertTriangle, Send, Volume2, Share2, Activity, Info, Menu } from 'lucide-react';

export default function RecordAnalysis() {
  const navigate = useNavigate();

  return (
    <Layout title="分析报告" showBack showNotifications={false}>
      <div className="flex flex-col gap-8">
        {/* Header Actions */}
        <div className="flex justify-between items-start">
          <h2 className="text-3xl font-bold text-on-surface max-w-[280px] leading-tight">供医生参考的病程分析</h2>
          <div className="flex gap-3">
            <button aria-label="朗读报告" className="w-16 h-16 bg-surface-container-high text-on-surface-variant rounded-full flex justify-center items-center active:scale-95 transition-transform">
              <Volume2 className="w-8 h-8 fill-on-surface-variant" />
            </button>
            <button aria-label="分享报告" className="w-16 h-16 bg-primary text-white rounded-full flex justify-center items-center active:scale-95 transition-transform shadow-lg">
              <Share2 className="w-8 h-8" />
            </button>
          </div>
        </div>

        {/* Disease Overview Card */}
        <section className="bg-white border-4 border-primary-container/20 rounded-3xl shadow-soft p-8">
          <div className="flex items-center gap-3 mb-6">
            <Stethoscope className="text-primary w-10 h-10" />
            <h3 className="text-2xl font-bold text-primary">病情概览</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl border-2 border-surface-container-high">
            <div className="flex items-center justify-between py-4 border-b-2 border-surface-container">
              <span className="text-xl text-on-surface-variant">主要诊断</span>
              <span className="text-3xl font-black text-on-surface">高血压</span>
            </div>
            <div className="flex items-center justify-between py-4">
              <span className="text-xl text-on-surface-variant">次要诊断</span>
              <span className="text-3xl font-black text-on-surface">2型糖尿病</span>
            </div>
          </div>
        </section>

        {/* Medication Stats Card */}
        <section className="bg-white border-4 border-secondary-container/20 rounded-3xl shadow-soft p-8">
          <div className="flex items-center gap-3 mb-6">
            <Pill className="text-secondary w-10 h-10" />
            <h3 className="text-2xl font-bold text-secondary">用药统计</h3>
          </div>
          <div className="flex items-center justify-between bg-white p-8 rounded-2xl border-2 border-surface-container-high mb-6">
            <span className="text-xl text-on-surface-variant">近期服药依从性</span>
            <span className="text-5xl font-black text-primary">95%</span>
          </div>
          <div className="bg-white rounded-2xl border-2 border-surface-container-high overflow-hidden">
            <h4 className="text-xl font-bold text-on-surface bg-surface-container-high px-6 py-4">当前服用药品</h4>
            <ul className="divide-y-2 divide-surface-container">
              <li className="p-6 flex justify-between items-center">
                <span className="text-2xl font-bold text-on-surface">氨氯地平片</span>
                <span className="text-lg text-on-surface-variant">每日一次</span>
              </li>
              <li className="p-6 flex justify-between items-center">
                <span className="text-2xl font-bold text-on-surface">二甲双胍</span>
                <span className="text-lg text-on-surface-variant">每日两次</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Abnormal Results Card */}
        <section className="bg-error-container/20 border-4 border-error/10 rounded-3xl shadow-soft p-8">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="text-error w-10 h-10" />
            <h3 className="text-2xl font-bold text-error">检查异常</h3>
          </div>
          <div className="bg-white p-8 rounded-2xl border-4 border-error">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-lg text-on-surface-variant block mb-2">最近一次化验单异常项</span>
                <span className="text-3xl font-black text-error block leading-tight">空腹血糖偏高</span>
              </div>
              <span className="text-6xl font-black text-error">7.8</span>
            </div>
            <div className="mt-4 text-right">
              <span className="text-lg text-on-surface-variant">正常参考值: 3.9 - 6.1 mmol/L</span>
            </div>
          </div>
        </section>

        <button className="w-full h-24 bg-primary text-white text-2xl font-bold rounded-2xl shadow-xl active:scale-95 transition-transform mb-8 flex items-center justify-center gap-4">
          <Send className="w-10 h-10 fill-white" />
          发送给医生
        </button>
      </div>
    </Layout>
  );
}

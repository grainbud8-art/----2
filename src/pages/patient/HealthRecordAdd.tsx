import Layout from '../../components/Layout';
import { useNavigate } from 'react-router-dom';
import { Thermometer, Heart, Droplets, Mic, CheckCircle, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function HealthRecordAdd() {
  const navigate = useNavigate();

  return (
    <Layout title="记录健康数据" showBack>
      <div className="flex flex-col gap-8">
        <section className="bg-white rounded-[32px] p-8 shadow-soft flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <label className="text-2xl font-bold flex items-center gap-3">
              <Thermometer className="w-8 h-8 text-primary" />
              您的体温是多少？
            </label>
            <div className="flex items-center gap-4">
                <input 
                    type="number" 
                    step="0.1" 
                    placeholder="36.5"
                    className="flex-1 h-24 bg-surface-container-low rounded-3xl border-4 border-surface-container px-8 text-4xl font-black text-center focus:border-primary-container focus:ring-0"
                />
                <span className="text-3xl font-bold text-on-surface-variant">℃</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-2xl font-bold flex items-center gap-3">
              <Heart className="w-8 h-8 text-error" />
              您的心率是多少？
            </label>
            <div className="flex items-center gap-4">
                <input 
                    type="number" 
                    placeholder="75"
                    className="flex-1 h-24 bg-surface-container-low rounded-3xl border-4 border-surface-container px-8 text-4xl font-black text-center focus:border-primary-container focus:ring-0"
                />
                <span className="text-3xl font-bold text-on-surface-variant">次/分</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-2xl font-bold flex items-center gap-3">
              <Droplets className="w-8 h-8 text-secondary" />
              其他症状 (可多选)
            </label>
            <div className="grid grid-cols-2 gap-4">
                {['无异常', '轻微红斑', '关节疼痛', '头晕', '食欲减退', '疲劳'].map(tag => (
                    <button 
                        key={tag}
                        className="h-16 rounded-2xl border-2 border-surface-container-high font-bold text-lg hover:bg-primary-container/10 hover:border-primary-container transition-all"
                    >
                        {tag}
                    </button>
                ))}
            </div>
          </div>
        </section>

        <button className="w-full h-24 bg-primary-container text-white rounded-4xl shadow-soft flex flex-col items-center justify-center gap-2 active:scale-95 transition-transform">
           <Mic className="w-8 h-8" />
           <span className="text-xl font-bold">语音快速录入</span>
        </button>

        <button 
            onClick={() => navigate('/health/record/view')}
            className="w-full h-24 bg-primary text-white rounded-4xl shadow-xl flex items-center justify-center gap-4 active:scale-95 transition-transform"
        >
            <CheckCircle className="w-10 h-10" />
            <span className="text-3xl font-black">保存记录</span>
        </button>
      </div>
    </Layout>
  );
}

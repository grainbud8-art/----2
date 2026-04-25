import Layout from '../../components/Layout';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Plus, ChevronRight, Activity, Thermometer, Droplets } from 'lucide-react';

export default function HealthRecordView() {
  const navigate = useNavigate();

  return (
    <Layout title="健康数据趋势" showBack>
      <div className="flex flex-col gap-8">
        <section className="bg-white rounded-[32px] p-6 shadow-soft flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-black flex items-center gap-3">
                    <Thermometer className="text-on-surface w-8 h-8" fill="currentColor" strokeWidth={0} />
                    近七日体温
                </h3>
            </div>
            <div className="h-48 bg-slate-50 rounded-2xl flex items-end justify-around p-4 px-8 border border-surface-container">
                {[36.6, 36.5, 36.8, 37.2, 37.0, 36.9, 37.1].map((val, i) => {
                    const height = ((val - 36) / 2) * 100;
                    return (
                        <div key={i} className="flex flex-col items-center gap-2 flex-1">
                            <div className="w-4 bg-primary/20 rounded-full h-32 relative">
                                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-primary">{val}</span>
                                <div 
                                    className="absolute bottom-0 w-full bg-primary rounded-full transition-all duration-700"
                                    style={{ height: `${height}%` }}
                                />
                            </div>
                            <span className="text-xs font-bold text-on-surface-variant">{i+6}日</span>
                        </div>
                    );
                })}
            </div>
        </section>

        <section className="bg-white rounded-[32px] p-6 shadow-soft flex flex-col gap-4">
            <h3 className="text-2xl font-black mb-2">历史记录列表</h3>
            <div className="flex flex-col gap-4">
                {[
                    { date: '今天', time: '08:30', temp: '37.1', symptom: '轻微红斑', status: '正常' },
                    { date: '昨天', time: '09:00', temp: '36.9', symptom: '无异常', status: '良好' },
                    { date: '11月10日', time: '08:45', temp: '37.0', symptom: '关节疼痛', status: '注意' },
                ].map((item, i) => (
                    <div key={i} className="bg-surface-container-low p-6 rounded-2xl flex items-center justify-between border-2 border-transparent hover:border-primary-container transition-all cursor-pointer">
                        <div className="flex flex-col">
                            <span className="text-xl font-black">{item.date} {item.time}</span>
                            <span className="text-on-surface-variant font-bold text-lg">{item.symptom}</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="text-right">
                                <span className="text-3xl font-black text-primary">{item.temp}</span>
                                <span className="text-lg font-bold text-on-surface-variant">℃</span>
                            </div>
                            <ChevronRight className="w-8 h-8 text-outline" />
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <button 
            onClick={() => navigate('/health/record/add')}
            className="w-full h-24 bg-primary text-white rounded-4xl shadow-xl flex items-center justify-center gap-4 active:scale-95 transition-transform"
        >
            <Plus className="w-10 h-10" />
            <span className="text-3xl font-black">添加新记录</span>
        </button>
      </div>
    </Layout>
  );
}

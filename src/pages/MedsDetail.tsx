import Layout from '../components/Layout';
import { useNavigate, useParams } from 'react-router-dom';
import { Pill, Activity, Clock, AlertCircle, Volume2, ChevronRight } from 'lucide-react';
import { mockMedications } from '../mockData';

export default function MedsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const med = mockMedications.find(m => m.id === id);

  if (!med) return <div>Medicine not found</div>;

  return (
    <Layout title="药品详情" showBack>
      <div className="flex flex-col gap-8">
        <section className="bg-white rounded-[32px] p-6 shadow-soft flex flex-col gap-6">
          <div className="w-full h-64 bg-surface-container rounded-[24px] overflow-hidden flex items-center justify-center">
             <img 
              alt={med.name} 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800" 
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold">{med.name}</h2>
            <p className="text-xl text-on-surface-variant mt-2">规格：100mg * 30片</p>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <div className="bg-white rounded-[32px] p-6 shadow-soft flex items-start gap-6">
            <div className="bg-primary-container/10 p-4 rounded-2xl text-on-surface shrink-0">
              <Activity className="w-10 h-10" fill="currentColor" strokeWidth={0} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-primary mb-2">【功效】</h3>
              <p className="text-xl leading-relaxed">
                清热解毒，缓解轻至中度疼痛，如头痛、牙痛、神经痛、肌肉痛等。
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[32px] p-6 shadow-soft flex items-start gap-6">
            <div className="bg-primary-container/10 p-4 rounded-2xl text-on-surface shrink-0">
              <Clock className="w-10 h-10" fill="currentColor" strokeWidth={0} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-primary mb-2">【用法用量】</h3>
              <div className="bg-surface-container-low p-6 rounded-2xl border-2 border-outline-variant/30 flex flex-col items-center gap-4">
                <span className="text-2xl font-bold">{med.frequency}</span>
                <div className="w-full h-px bg-outline-variant/30"></div>
                <span className="text-2xl font-bold">每次 {med.dosage}</span>
              </div>
              <p className="text-lg text-on-surface-variant mt-4 text-center">{med.instructions} 温水送服。</p>
            </div>
          </div>

          <div className="bg-error-container/20 border-2 border-error/10 rounded-[32px] p-6 shadow-soft flex items-start gap-6">
            <div className="bg-white/50 p-4 rounded-2xl text-on-surface shrink-0">
              <AlertCircle className="w-10 h-10" fill="currentColor" strokeWidth={0} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-error mb-2">【禁忌】</h3>
              <ul className="list-disc pl-6 text-xl space-y-2">
                <li>孕妇禁用</li>
                <li>胃及十二指肠溃疡患者禁用</li>
                <li>对本品过敏者禁用</li>
              </ul>
            </div>
          </div>
        </section>

        <button className="w-full h-20 bg-primary text-white rounded-full flex items-center justify-center gap-4 shadow-lg active:scale-95 transition-transform">
          <Volume2 className="w-10 h-10" fill="currentColor" strokeWidth={0} />
          <span className="text-2xl font-bold">语音播报</span>
        </button>
      </div>
    </Layout>
  );
}

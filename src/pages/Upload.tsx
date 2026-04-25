import Layout from '../components/Layout';
import { useNavigate, useLocation } from 'react-router-dom';
import { Camera, Mic, CheckCircle, History, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function Upload() {
  const navigate = useNavigate();
  const location = useLocation();
  const isFamily = location.pathname.startsWith('/family');

  return (
    <Layout title="上传新文档" showBack>
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <p className="text-xl font-bold text-on-surface-variant">请把纸放平，拍清楚</p>
        </div>

        <button className="w-full h-[320px] border-4 border-dashed border-primary-container rounded-[32px] flex flex-col items-center justify-center gap-4 bg-surface-container-low hover:bg-surface-container active:scale-[0.98] transition-all">
          <div className="w-24 h-24 bg-primary-container text-white rounded-full flex items-center justify-center shadow-lg">
            <Camera className="w-12 h-12" />
          </div>
          <span className="text-2xl font-bold text-primary-container">点击拍照</span>
        </button>

        <button className="w-full min-h-[140px] bg-white border-2 border-surface-container-high rounded-[32px] shadow-soft p-6 flex flex-col items-center justify-center gap-4 active:scale-[0.98] transition-all">
          <div className="flex items-center gap-3 text-primary">
            <Mic className="w-8 h-8" />
            <span className="text-2xl font-bold">语音录入描述</span>
          </div>
          {/* Waveform Representation */}
          <div className="flex items-center justify-center gap-2 h-8">
            {[0.4, 0.6, 1, 0.8, 0.9, 0.5, 0.3].map((op, i) => (
              <motion.div 
                key={i}
                animate={{ height: [8, 24, 8] }}
                transition={{ repeat: Infinity, duration: 1, delay: i * 0.1 }}
                style={{ opacity: op }}
                className="w-1.5 bg-primary rounded-full"
              />
            ))}
          </div>
          <p className="text-lg text-on-surface-variant text-center">点击说话，告诉我这是什么报告</p>
        </button>

        <div className="flex flex-col gap-4 mt-4">
          <button 
             onClick={() => navigate(isFamily ? '/family/home' : '/home/elderly')}
             className="w-full h-20 bg-primary-container text-white rounded-2xl font-bold text-2xl shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-3"
          >
            <CheckCircle className="w-8 h-8" />
            确认上传
          </button>
          
          <button 
            onClick={() => navigate(isFamily ? '/family/documents' : '/documents')}
            className="w-full h-20 bg-white border-2 border-primary-container text-primary-container rounded-2xl font-bold text-2xl shadow-soft active:scale-[0.98] transition-all flex items-center justify-center gap-3"
          >
            <History className="w-8 h-8" />
            查阅文档时间轴
          </button>
        </div>
      </div>
    </Layout>
  );
}

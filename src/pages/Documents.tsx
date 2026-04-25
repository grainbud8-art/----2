import Layout from '../components/Layout';
import FamilyLayout from '../components/FamilyLayout';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Camera,
  Mic,
  CheckCircle,
  History,
  Sparkles,
  Calendar,
  ChevronRight,
  Plus,
  X,
  Zap,
  ZapOff,
  Image as ImageIcon,
  RotateCcw,
  Maximize,
  ScanLine
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { mockRecords } from '../mockData';

export default function Documents() {
  const navigate = useNavigate();
  const location = useLocation();
  const isFamily = location.pathname.startsWith('/family');
  const [isRecording, setIsRecording] = useState(false);
  const [view, setView] = useState<'upload' | 'timeline'>('upload');
  const [isFlashOn, setIsFlashOn] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const [hasCaptured, setHasCaptured] = useState(false);

  const Wrapper = isFamily ? FamilyLayout : Layout;

  // Auto-open camera if navigated from "拍照上传"
  useEffect(() => {
    if (location.pathname === '/documents/upload') {
      setIsCapturing(true);
    }
  }, [location.pathname]);

  const handleCapture = () => {
    setIsCapturing(false);
    setHasCaptured(true);
  };

  // If capturing, show the immersive full-screen camera (Reference UI)
  if (isCapturing) {
    return (
      <div className="fixed inset-0 z-[100] bg-black flex flex-col overflow-hidden">
        {/* IMMERSIVE CAMERA INTERFACE */}
        <div className="flex-1 flex flex-col h-full bg-[#050505] relative overflow-hidden">
          {/* Fake Camera Preview Viewport */}
          <div className="absolute inset-0 z-0 bg-neutral-900 flex items-center justify-center">
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1586339949916-3e945cbe6a39?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale-[0.5]" />
          </div>

          {/* Top Controls Overlay */}
          <div className="absolute top-8 left-0 right-0 px-8 flex items-center justify-between z-20">
            <button 
              onClick={() => setIsCapturing(false)}
              className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white active:scale-90 transition-transform border border-white/10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="bg-black/40 backdrop-blur-xl px-6 py-2.5 rounded-full flex items-center gap-3 text-white border border-white/10 shadow-lg">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-lg font-black tracking-widest">自动拍摄</span>
            </div>

            <button 
              onClick={() => setIsFlashOn(!isFlashOn)}
              className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white active:scale-90 transition-transform border border-white/10"
            >
              {isFlashOn ? <Zap className="w-7 h-7 text-yellow-400" fill="currentColor" /> : <ZapOff className="w-7 h-7" />}
            </button>
          </div>

          {/* Viewfinder & Scanning Area */}
          <div className="flex-1 flex items-center justify-center p-8 relative z-10">
            <div className="w-full max-w-sm aspect-[3/4] relative">
              {/* Intelligent Scanning Corners */}
              <div className="absolute -top-1 -left-1 w-20 h-20 border-t-[10px] border-l-[10px] border-primary rounded-tl-[40px] shadow-[0_0_30px_rgba(37,177,131,0.6)]" />
              <div className="absolute -top-1 -right-1 w-20 h-20 border-t-[10px] border-r-[10px] border-primary rounded-tr-[40px] shadow-[0_0_30px_rgba(37,177,131,0.6)]" />
              <div className="absolute -bottom-1 -left-1 w-20 h-20 border-b-[10px] border-l-[10px] border-primary rounded-bl-[40px] shadow-[0_0_30px_rgba(37,177,131,0.6)]" />
              <div className="absolute -bottom-1 -right-1 w-20 h-20 border-b-[10px] border-r-[10px] border-primary rounded-br-[40px] shadow-[0_0_30px_rgba(37,177,131,0.6)]" />
              
              {/* Dynamic Laser Scanning Line */}
              <motion.div 
                animate={{ top: ['5%', '95%', '5%'] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-4 right-4 h-1.5 bg-gradient-to-r from-transparent via-primary/80 to-transparent shadow-[0_0_25px_rgba(37,177,131,1)] z-20"
              />

              {/* AR Focus Indicator */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-black/60 backdrop-blur-md px-8 py-6 rounded-[32px] flex flex-col items-center gap-3 border border-white/20 shadow-2xl"
                >
                  <div className="relative">
                    <Maximize className="w-12 h-12 text-primary animate-pulse" />
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full scale-150"
                    />
                  </div>
                  <span className="text-white font-black text-xl tracking-widest">AR 智能对焦中</span>
                </motion.div>
              </div>

              {/* Real-time Status Notification */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="absolute -bottom-32 left-0 right-0 bg-primary/95 text-white p-6 rounded-[32px] flex items-center gap-5 shadow-2xl z-20 border border-white/20"
              >
                 <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0">
                   <ScanLine className="w-10 h-10" />
                 </div>
                 <div>
                   <p className="text-2xl font-black mb-0.5">正在扫描报告...</p>
                   <p className="text-sm font-bold text-white/70 tracking-[0.2em] uppercase">手机保持稳定 · 自动优化文字</p>
                 </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Control Console */}
          <div className="h-[220px] bg-gradient-to-t from-black via-black/95 to-transparent flex items-center justify-around px-8 z-20 relative">
            <button className="flex flex-col items-center gap-3 text-white/50 active:scale-95 transition-all group">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/5 group-hover:bg-white/20 transition-colors">
                <ImageIcon className="w-8 h-8" />
              </div>
              <span className="text-sm font-bold tracking-widest">相册导入</span>
            </button>

            <button 
              onClick={handleCapture}
              className="relative flex items-center justify-center w-32 h-32 group"
            >
              <div className="absolute inset-0 rounded-full border-[5px] border-white/20 group-hover:border-primary/30 transition-colors" />
              <div className="absolute inset-2.5 rounded-full border-[5px] border-white z-10" />
              <motion.div 
                className="w-20 h-20 bg-white rounded-full shadow-xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-white opacity-20 blur-xl"
              />
            </button>

            <button className="flex flex-col items-center gap-3 text-white/50 active:scale-95 transition-all group">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/5 group-hover:bg-white/20 transition-colors">
                <RotateCcw className="w-8 h-8" />
              </div>
              <span className="text-sm font-bold tracking-widest">镜头翻转</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Wrapper title={view === 'upload' ? "上传新文档" : "文档时间轴"} showBack={true}>
      <AnimatePresence mode="wait">
        {view === 'upload' ? (
          <motion.div 
            key="upload"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="flex flex-col items-center gap-10 pb-32 px-6 selection:bg-primary/20 max-w-2xl mx-auto"
          >
            <motion.header 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mt-6 flex flex-col gap-3"
            >
              <h2 className="text-4xl font-black text-on-surface tracking-tighter leading-tight">
                {hasCaptured ? "文件已准备好" : "请把纸放平"} <br /> {hasCaptured ? "点击确定上传" : "保证光线充足"}
              </h2>
              <p className="text-xl font-medium text-slate-500 bg-slate-100/50 py-1 px-4 rounded-full inline-self-center">清晰的图片能帮助助手更准确运行</p>
            </motion.header>

            {/* Selection Tiles */}
            <div className="grid grid-cols-1 w-full gap-8">
              {/* Camera Tile */}
              <motion.div 
                onClick={() => setIsCapturing(true)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="relative w-full aspect-[2/1] bg-white rounded-[44px] shadow-soft border border-surface-container overflow-hidden group flex flex-col items-center justify-center gap-4 cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 bg-primary rounded-[32px] flex items-center justify-center text-white shadow-lg">
                    <Camera className="w-12 h-12" fill="currentColor" strokeWidth={0} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-on-surface tracking-tight">智能拍照</span>
                    <span className="text-lg font-medium text-slate-400">自动对焦与增强</span>
                  </div>
                </div>
              </motion.div>

              {/* Voice Tile */}
              <motion.div 
                onClick={() => setIsRecording(!isRecording)}
                className={cn(
                  "relative w-full aspect-[2/1] rounded-[44px] shadow-soft border transition-all flex flex-col items-center justify-center gap-4 cursor-pointer overflow-hidden",
                  isRecording ? "bg-primary border-primary" : "bg-white border-surface-container"
                )}
              >
                <div className="flex items-center gap-6 relative z-10">
                  <div className={cn(
                    "w-24 h-24 rounded-[32px] flex items-center justify-center transition-all",
                    isRecording ? "bg-white text-primary" : "bg-primary/10 text-primary"
                  )}>
                    <Mic className="w-12 h-12" fill="currentColor" strokeWidth={0} />
                  </div>
                  <div className="flex flex-col">
                    <span className={cn(
                      "text-3xl font-black tracking-tight",
                      isRecording ? "text-white" : "text-on-surface"
                    )}>
                      语音备注
                    </span>
                    <span className={cn(
                      "text-lg font-medium",
                      isRecording ? "text-white/70" : "text-slate-400"
                    )}>
                      {isRecording ? "正在倾听..." : "说出病情记录"}
                    </span>
                  </div>
                </div>
                {isRecording && (
                   <motion.div 
                     animate={{ opacity: [0.1, 0.3, 0.1] }}
                     transition={{ repeat: Infinity, duration: 2 }}
                     className="absolute inset-0 bg-white"
                   />
                )}
              </motion.div>
            </div>

            {/* Actions */}
            <div className="flex flex-col w-full gap-5 mt-4">
              <AnimatePresence>
                {hasCaptured && (
                  <motion.button 
                    onClick={() => navigate('/records')}
                    initial={{ opacity: 0, height: 0, y: 20 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: 20 }}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.96 }}
                    className="w-full h-24 bg-primary text-white rounded-[32px] flex items-center justify-center gap-4 shadow-[0_25px_60px_-15px_rgba(0,188,162,0.4)] active:shadow-none transition-all mb-2"
                  >
                    <CheckCircle className="w-10 h-10" fill="currentColor" strokeWidth={0} />
                    <span className="text-3xl font-black tracking-[0.2em] text-shadow-sm">确认上传</span>
                  </motion.button>
                )}
              </AnimatePresence>

              <motion.button 
                 onClick={() => setView('timeline')}
                 whileHover={{ y: -2 }}
                 whileTap={{ scale: 0.98 }}
                 className="w-full h-20 bg-white border-2 border-slate-200 text-slate-500 rounded-[32px] flex items-center justify-center gap-4 transition-all hover:bg-slate-50 font-bold"
              >
                <History className="w-8 h-8 opacity-60" />
                <span className="text-2xl tracking-widest leading-none">查看历史文档</span>
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="timeline"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-6 pb-32 px-6"
          >
            <header className="flex items-center justify-between mt-4">
              <h2 className="text-3xl font-black text-on-surface">历史记录</h2>
              <button 
                onClick={() => setView('upload')}
                className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-bold active:scale-95 transition-all"
              >
                <Plus className="w-5 h-5" />
                <span>新上传</span>
              </button>
            </header>

            <div className="relative flex flex-col gap-8 before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-[2px] before:bg-slate-200">
              {mockRecords.map((record, index) => (
                <motion.div 
                  key={record.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12 group"
                >
                  <div className="absolute left-0 top-6 w-10 h-10 -translate-x-[2px] rounded-full border-4 border-white bg-primary shadow-sm z-10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" fill="currentColor" strokeWidth={0} />
                  </div>
                  
                  <div className="bg-white rounded-[24px] p-6 shadow-soft border border-surface-container active:bg-slate-50 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xl font-black text-slate-400 font-mono tracking-tighter">
                        {record.date}
                      </span>
                      <ChevronRight className="w-6 h-6 text-slate-300" />
                    </div>
                    
                    <h3 className="text-2xl font-black text-on-surface mb-1">
                      {record.hospital}
                    </h3>
                    <div className="flex items-center gap-2">
                       <span className="px-3 py-1 bg-surface-container rounded-full text-lg font-bold text-on-surface-variant">
                         {record.department}
                       </span>
                       <span className="text-lg font-bold text-slate-400">· {record.type}</span>
                    </div>

                    {record.diagnosis && (
                      <p className="mt-4 text-xl text-slate-500 font-medium line-clamp-2 leading-relaxed">
                        描述：{record.diagnosis}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

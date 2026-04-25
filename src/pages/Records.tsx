import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Calendar, ChevronRight, Camera, Info, History } from 'lucide-react';
import { mockRecords } from '../mockData';
import FAB from '../components/FAB';

export default function Records() {
  const navigate = useNavigate();

  return (
    <Layout title="医疗文档">
      <div className="flex flex-col gap-8">
        {/* Search & Filter */}
        <section className="flex flex-col gap-6">
          <div className="bg-white rounded-3xl p-4 shadow-soft flex items-center gap-4 h-[72px]">
            <Search className="w-8 h-8 text-outline" />
            <input 
              className="border-none bg-transparent focus:ring-0 text-xl font-bold w-full placeholder:text-outline-variant" 
              placeholder="按名称或日期搜索.." 
              type="text"
            />
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
            <button className="bg-primary-container text-white px-8 h-14 rounded-full text-lg font-bold flex-shrink-0">全部</button>
            <button className="bg-white text-on-surface px-8 h-14 rounded-full text-lg font-bold border border-outline-variant flex-shrink-0">检查报告</button>
            <button className="bg-white text-on-surface px-8 h-14 rounded-full text-lg font-bold border border-outline-variant flex-shrink-0">处方笺</button>
          </div>
        </section>

        {/* Timeline */}
        <div className="relative space-y-12 before:content-[''] before:absolute before:left-5 before:top-0 before:bottom-0 before:w-1 before:bg-surface-container-highest">
          {/* Month Group: October */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-1 w-10 h-10 bg-primary-container/20 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>
            <h2 className="text-3xl font-extrabold text-primary mb-6">2023年10月</h2>
            
            <div className="space-y-8">
              {mockRecords.filter(r => r.date.startsWith('2023-10')).map(record => (
                <div 
                  key={record.id}
                  onClick={() => navigate(`/documents/detail/${record.id}`)}
                  className="bg-white rounded-[24px] p-6 shadow-soft border border-surface-container flex flex-col gap-6 hover:scale-[0.98] transition-all cursor-pointer"
                >
                  <div className="w-full h-48 bg-surface-container rounded-2xl overflow-hidden">
                    <img 
                      className="w-full h-full object-cover" 
                      src={record.attachments?.[0]?.url || "https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=800"} 
                      alt={record.attachments?.[0]?.name}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold">{record.attachments?.[0]?.name || record.type}</h3>
                    <p className="text-on-surface-variant text-lg font-medium">{record.hospital} - {record.department}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 text-tertiary">
                        <Calendar className="w-6 h-6" />
                        <span className="text-lg font-medium">{record.date}</span>
                      </div>
                      <ChevronRight className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Month Group: September */}
          <div className="relative pl-12">
             <div className="absolute left-0 top-1 w-10 h-10 bg-surface-container-highest rounded-full flex items-center justify-center border-4 border-white shadow-sm">
              <div className="w-3 h-3 bg-on-surface-variant rounded-full"></div>
            </div>
            <h2 className="text-3xl font-extrabold text-on-surface-variant mb-6">2023年9月</h2>
            <div className="bg-white rounded-[24px] p-6 shadow-soft opacity-60">
              <p className="text-center py-4 font-bold text-on-surface-variant">暂无重要文档</p>
            </div>
          </div>
        </div>
        
        {/* Floating Prompt */}
        <div className="fixed bottom-24 left-0 right-0 px-5 pb-4 md:hidden">
          <div className="bg-primary-container/10 border-2 border-primary-container rounded-2xl p-4 flex items-center justify-between shadow-soft backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="bg-primary-container p-2 rounded-full text-white">
                <Info className="w-7 h-7" />
              </div>
              <span className="text-on-primary-container font-extrabold text-xl">点击拍照上传新材料</span>
            </div>
            <ChevronRight className="w-6 h-6 text-primary-container" />
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => navigate('/documents/upload')}
        className="fixed bottom-36 right-6 w-20 h-20 bg-primary-container text-white rounded-full shadow-2xl flex items-center justify-center z-50 active:scale-95 transition-transform border-4 border-white"
      >
        <Camera className="w-10 h-10" />
      </button>
    </Layout>
  );
}

import Layout from '../components/Layout';
import FamilyLayout from '../components/FamilyLayout';
import { useLocation, useNavigate } from 'react-router-dom';
import { mockRecords } from '../mockData';
import { ChevronRight, Calendar } from 'lucide-react';

export default function Records() {
  const location = useLocation();
  const navigate = useNavigate();
  const isFamily = location.pathname.startsWith('/family');
  const Wrapper = isFamily ? FamilyLayout : Layout;

  return (
    <Wrapper title="就诊记录" showBack={true}>
      <div className="flex flex-col gap-6 pb-32 px-6">
        <div className="mt-4 flex flex-col gap-4">
          {mockRecords.map((record) => (
            <div 
              key={record.id}
              onClick={() => navigate(isFamily ? `/family/documents/detail-pro/${record.id}` : `/documents/detail/${record.id}`)}
              className="bg-white rounded-[32px] p-8 shadow-soft border border-surface-container active:scale-98 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-primary font-bold text-xl">
                  <Calendar className="w-6 h-6" />
                  <span>{record.date}</span>
                </div>
                <ChevronRight className="w-6 h-6 text-slate-300" />
              </div>
              
              <h3 className="text-3xl font-black text-on-surface mb-2">{record.hospital}</h3>
              <div className="flex items-center gap-3">
                <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-lg font-bold">
                  {record.department}
                </span>
                <span className="text-xl text-slate-400 font-bold">{record.type}</span>
              </div>
              
              {record.diagnosis && (
                <p className="mt-6 text-xl text-slate-500 font-medium line-clamp-2 leading-relaxed">
                  结论：{record.diagnosis}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}


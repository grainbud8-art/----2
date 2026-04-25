import FamilyLayout from '../../components/FamilyLayout';
import { Pill, AlertTriangle, ShoppingCart, RefreshCw, PlusCircle, ChevronRight } from 'lucide-react';
import { mockMedications } from '../../mockData';

export default function FamilyMedicineInventory() {
  return (
    <FamilyLayout title="用药库存管理">
      <div className="flex flex-col gap-6">
        {/* Urgent Warnings */}
        <section className="bg-error/5 border-2 border-error/10 rounded-3xl p-6">
          <div className="flex items-center gap-3 text-error mb-4">
            <AlertTriangle className="w-8 h-8" />
            <h2 className="text-xl font-bold">库存告急</h2>
          </div>
          <div className="space-y-4">
            {mockMedications.filter(m => m.stockRemainingDays && m.stockRemainingDays <= 5).map(med => (
              <div key={med.id} className="bg-white rounded-2xl p-5 shadow-sm flex items-center justify-between border-l-8 border-error">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-error/10 flex items-center justify-center text-error">
                    <Pill className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{med.name}</h3>
                    <p className="text-sm text-error font-medium">预计仅够使用 {med.stockRemainingDays} 天</p>
                  </div>
                </div>
                <button className="bg-error text-white px-6 py-2 rounded-full font-bold shadow-sm active:scale-95 transition-transform flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  去购药
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Inventory List */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold px-2 flex items-center justify-between">
            全部药品清单
            <button className="text-primary text-sm flex items-center gap-1">
               <PlusCircle className="w-4 h-4" /> 添加新药
            </button>
          </h2>
          {mockMedications.map(med => (
            <div key={med.id} className="bg-white rounded-3xl p-6 shadow-soft flex items-center justify-between">
               <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center text-on-surface-variant">
                    <Pill className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{med.name}</h3>
                    <p className="text-sm text-on-surface-variant">{med.dosage} · {med.frequency}</p>
                    <div className="mt-2 flex items-center gap-2">
                       <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                         (med.stockRemainingDays || 0) > 10 ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
                       }`}>
                         库存约 {med.stockRemainingDays || '--'} 天
                       </span>
                    </div>
                  </div>
               </div>
               <div className="flex flex-col gap-2">
                 <button className="p-3 bg-surface-container rounded-full text-primary active:scale-90 transition-transform">
                   <RefreshCw className="w-6 h-6" />
                 </button>
                 <button className="p-3 bg-surface-container rounded-full text-on-surface-variant active:scale-90 transition-transform">
                   <ChevronRight className="w-6 h-6" />
                 </button>
               </div>
            </div>
          ))}
        </section>

        {/* Global Action */}
        <button className="w-full h-16 bg-secondary text-white rounded-2xl font-bold shadow-lg flex items-center justify-center gap-3">
          <ShoppingCart className="w-6 h-6" />
          一键补齐所有告急药品
        </button>
      </div>
    </FamilyLayout>
  );
}

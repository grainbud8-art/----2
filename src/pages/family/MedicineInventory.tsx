import FamilyLayout from '../../components/FamilyLayout';
import { 
  Pill, 
  Calendar, 
  FileText, 
  ChevronRight, 
  Activity, 
  Stethoscope, 
  Upload, 
  Settings,
  History,
  ShoppingCart,
  Clock,
  ScanSearch
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

export default function FamilyMedicineInventory() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "医药管理",
      icon: Pill,
      color: "bg-primary/10 text-primary",
      borderColor: "border-primary/20",
      items: [
        { name: "用药方案设置", desc: "调整每日服药时间与剂量", icon: Settings, path: "/family/medicine/setting" },
        { name: "药品库存监控", desc: "查看药品剩余量并快捷补药", icon: ShoppingCart, path: "/family/medicine/inventory" },
        { name: "历史用药记录", desc: "复盘过去一月的用药依从性", icon: History, path: "/family/reports" },
      ]
    },
    {
      title: "就诊管理",
      icon: Stethoscope,
      color: "bg-rose-50 text-rose-500",
      borderColor: "border-rose-100",
      items: [
        { name: "复诊预约设置", desc: "添加下一次就诊提醒", icon: Calendar, path: "/family/medical/appointment" },
        { name: "就诊流程规划", desc: "医院科室导航与准备清单", icon: Activity, path: "/family/reports" },
        { name: "指标阈值设置", desc: "设置心率/血糖预警阈值", icon: Settings, path: "/family/medicine/management" },
      ]
    },
    {
      title: "文档管理",
      icon: FileText,
      color: "bg-sky-50 text-sky-500",
      borderColor: "border-sky-100",
      items: [
        { name: "扫描上传病历", desc: "智能提取报告关键数据", icon: Upload, path: "/family/medical/upload" },
        { name: "数字化时间轴", desc: "按时间查看所有检查报告", icon: Clock, path: "/family/medical/record" },
        { name: "全文智能搜索", desc: "快速查找过往化验单细节", icon: ScanSearch, path: "/family/documents" },
      ]
    }
  ];

  return (
    <FamilyLayout title="管理中心">
      <div className="flex flex-col gap-8 pb-32">
        {/* Hub Header Header */}
        <div className="flex flex-col gap-2 px-2">
            <h2 className="text-3xl font-black text-on-surface tracking-tighter">管理看板</h2>
            <p className="text-lg font-bold text-slate-400">统筹管理对对的所有医疗事务</p>
        </div>

        <div className="flex flex-col gap-10">
          {sections.map((section, sIdx) => (
            <motion.section 
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sIdx * 0.1 }}
              className="flex flex-col gap-5"
            >
              <div className="flex items-center gap-4 px-2">
                <div className={`w-12 h-12 rounded-2xl ${section.color} flex items-center justify-center`}>
                  <section.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-on-surface">{section.title}</h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {section.items.map((item, iIdx) => (
                  <motion.button
                    key={item.name}
                    onClick={() => navigate(item.path)}
                    whileHover={{ scale: 1.01, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className={`bg-white rounded-[32px] p-6 shadow-sm border ${section.borderColor} flex items-center justify-between group transition-all`}
                  >
                    <div className="flex items-center gap-5">
                      <div className={`w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:shadow-md transition-all`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="text-xl font-black text-on-surface tracking-tight">{item.name}</span>
                        <span className="text-sm font-bold text-slate-400">{item.desc}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-7 h-7 text-slate-200 group-hover:text-primary transition-colors" />
                  </motion.button>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </FamilyLayout>
  );
}

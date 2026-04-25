import { Medication, MedicalRecord, HealthData } from './types';

export const mockMedications: Medication[] = [
  {
    id: '1',
    name: '泼尼松',
    dosage: '5mg',
    frequency: '每日一次',
    times: ['08:00'],
    instructions: '饭后服用',
    stockRemainingDays: 5,
  },
  {
    id: '2',
    name: '羟氯喹',
    dosage: '0.2g',
    frequency: '每日两次',
    times: ['08:00', '20:00'],
    instructions: '随餐服用',
  },
];

export const mockRecords: MedicalRecord[] = [
  {
    id: 'rec1',
    date: '2023-10-15',
    hospital: '省级人民医院',
    department: '风湿免疫科',
    doctor: '李建国 主任医师',
    diagnosis: 'SLE活动期控制良好，各项指标平稳。',
    advice: '继续当前用药方案。注意防晒，避免过度劳累。3个月后复查补体及血常规。',
    type: '复查',
    attachments: [
      { id: 'att1', name: '处方单据', type: 'prescription', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxYDz0LflzKSRl_cORFGaWTU4hEnxgu7UV-mEB4huxiQgvY4-dMn78IRIlp2ij5vAhgDAbh-1oqe7EZQDhqjQnYyh4pUlqirFj-4s4WMjiWAyZAE88FeHcgDEN2ltYaWiCbJzjii7LMbd8ORNcbfbPUbXgXybeWYtSCm37lXfdvyChu2z2xIkbFzSQXMwz8iFwXvL6Lvu5RcA8TC1g75Uhyo50uV3rSd-zy4X40AwIod5i5F1MkLVdTU31Q5fP4AlcCt_eCu3BXgw' },
      { id: 'att2', name: '检验报告', type: 'report', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB75VoALBjzFWEwF4IOQcf4iWm2q86OfPm6wIcUuCnl9VTzYLYSyx2atdLdNhrkRFER3Xiwu22Ydec4w7onUOKtHw7N9ukoUvMZZ3XpGxR0EZv59I0_LUWVkXZgFFsK7_YDcpdPyJF-xAikWf4VkroWaJlYnlKkl9TUrq0g2W1DZblIX-L72_xp0T9fbF0VOF70VSiMcZUcZuYBOXDeCLwjn-xLba1IKdJ3YwqvgnI8W8NKxki1hWZZ3Vp-LXOsC6vDW3PUNxwdZUM' },
    ],
  },
  {
    id: 'rec2',
    date: '2023-07-10',
    hospital: '省级人民医院',
    department: '风湿免疫科',
    doctor: '王强 副主任医师',
    diagnosis: '狼疮肾炎，蛋白尿轻度异常。',
    advice: '调整免疫抑制剂剂量，注意低盐低脂饮食。监测血压。',
    type: '复查',
  },
  {
    id: 'rec3',
    date: '2023-04-05',
    hospital: '市中心医院',
    department: '风湿免疫科',
    doctor: '张晓丽 医师',
    diagnosis: '首次确诊系统性红斑狼疮，开启标准化治疗方案。',
    advice: '标准化治疗开启。',
    type: '初诊',
  },
];

export const mockHealthData: HealthData = {
  temperature: 37.2,
  rash: '轻微红斑',
  date: '2023-11-13',
};

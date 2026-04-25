export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  times: string[];
  instructions: string;
  stockRemainingDays?: number;
  lastTaken?: string; // ISO date string
}

export interface MedicalRecord {
  id: string;
  date: string;
  hospital: string;
  department: string;
  doctor: string;
  diagnosis: string;
  advice: string;
  type: '初诊' | '复查';
  attachments?: {
    id: string;
    url: string;
    type: 'report' | 'prescription' | 'xray';
    name: string;
  }[];
}

export interface HealthData {
  temperature: number;
  rash: string;
  date: string;
}

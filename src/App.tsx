import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Entry from './pages/Entry';

// Patient (Elderly) Pages
import Home from './pages/Home';
import Meds from './pages/Meds';
import MedsDetail from './pages/MedsDetail';
import Records from './pages/Records';
import Documents from './pages/Documents';
import RecordDetail from './pages/RecordDetail';
import Upload from './pages/Upload';
import Profile from './pages/Profile';
import Assistant from './pages/Assistant';
import Reminder from './pages/Reminder';
import HealthRecordAdd from './pages/patient/HealthRecordAdd';
import HealthRecordView from './pages/patient/HealthRecordView';

// Family Pages
import FamilyHome from './pages/family/Home';
import FamilyReports from './pages/family/Reports';
import FamilyMedicineInventory from './pages/family/MedicineInventory';
import FamilyMedicineManagement from './pages/family/MedicineManagement';
import AppointmentSetup from './pages/AppointmentSetup';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Entry />} />
        
        {/* 老年用户端 Elderly Patient persona */}
        <Route path="/home/elderly" element={<Home />} />
        <Route path="/ai-assistant/chat" element={<Assistant />} />
        <Route path="/medicine" element={<Meds />} />
        <Route path="/medicine/setting" element={<AppointmentSetup />} /> {/* Reused for setting */}
        <Route path="/medicine/record" element={<Records />} />
        <Route path="/medicine/detail/:id" element={<MedsDetail />} />
        
        <Route path="/documents" element={<Documents />} />
        <Route path="/records" element={<Records />} />
        <Route path="/documents/upload" element={<Documents />} />
        <Route path="/documents/timeline" element={<Documents />} />
        <Route path="/documents/detail/:id" element={<RecordDetail />} />
        
        <Route path="/health/record/add" element={<HealthRecordAdd />} />
        <Route path="/health/record/view" element={<HealthRecordView />} />
        
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/account" element={<Profile />} /> {/* Reused for profile */}

        {/* 家属端 Family persona */}
        <Route path="/home/family" element={<FamilyHome />} />
        <Route path="/family/ai-assistant/chat" element={<Assistant />} />
        
        {/* 用药模块 */}
        <Route path="/family/medicine" element={<Meds />} />
        <Route path="/family/medicine/inventory" element={<FamilyMedicineInventory />} />
        <Route path="/family/medicine/management" element={<FamilyMedicineManagement />} />
        <Route path="/family/medicine/setting" element={<AppointmentSetup />} />
        
        {/* 医疗管理 */}
        <Route path="/family/medical" element={<Records />} />
        <Route path="/family/medical/appointment" element={<AppointmentSetup />} />
        <Route path="/family/medical/upload" element={<Upload />} />
        <Route path="/family/medical/record" element={<Records />} />
        <Route path="/family/medical/management" element={<FamilyMedicineManagement />} />
        
        <Route path="/family/documents" element={<Records />} />
        <Route path="/family/documents/upload" element={<Upload />} />
        <Route path="/family/documents/timeline-pro" element={<Records />} />
        <Route path="/family/documents/detail-pro/:id" element={<RecordDetail />} />
        
        <Route path="/family/reports" element={<FamilyReports />} />
        
        <Route path="/family/profile" element={<Profile />} />
        <Route path="/family/profile/account" element={<Profile />} />
        <Route path="/family/profile/patients" element={<Profile />} />
        <Route path="/family/profile/special-reports" element={<FamilyReports />} />
        
        <Route path="/family/dashboard" element={<FamilyHome />} />

        {/* Global/Shared */}
        <Route path="/reminder" element={<Reminder />} />
        
        {/* Old path fallbacks for backward compatibility if any internal links remain */}
        <Route path="/patient" element={<Navigate to="/home/elderly" />} />
        <Route path="/family" element={<Navigate to="/home/family" />} />
        <Route path="/patient/meds" element={<Navigate to="/medicine" />} />
        <Route path="/patient/meds/:id" element={<Navigate to="/medicine/detail/:id" />} />
        <Route path="/patient/records" element={<Navigate to="/documents" />} />
        <Route path="/family/monitor" element={<Navigate to="/family/profile/special-reports" />} />
      </Routes>
    </Router>
  );
}

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, UserPlus, FileText, ShieldCheck, Building2, Stethoscope, Pill, FlaskConical, ScanLine, Syringe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { PROVIDER_TYPES } from '@/constants/providerTypes';

const content = {
  fr: {
    badge: 'Inscription Professionnelle',
    title: 'Rejoignez CityHealth en 3 étapes',
    subtitle: 'Inscrivez votre établissement gratuitement et commencez à recevoir des patients dès aujourd\'hui.',
    cta: 'Commencer l\'inscription',
    steps: [
    { title: 'Choisissez votre type', desc: 'Sélectionnez votre spécialité parmi nos catégories.' },
    { title: 'Complétez votre profil', desc: 'Ajoutez vos informations, horaires et services.' },
    { title: 'Vérification & publication', desc: 'Notre équipe valide votre profil sous 24h.' }]

  },
  ar: {
    badge: 'التسجيل المهني',
    title: 'انضم إلى CityHealth في 3 خطوات',
    subtitle: 'سجّل مؤسستك مجانًا وابدأ في استقبال المرضى اليوم.',
    cta: 'ابدأ التسجيل',
    steps: [
    { title: 'اختر نوعك', desc: 'حدد تخصصك من بين فئاتنا.' },
    { title: 'أكمل ملفك', desc: 'أضف معلوماتك وساعات العمل والخدمات.' },
    { title: 'التحقق والنشر', desc: 'فريقنا يتحقق من ملفك خلال 24 ساعة.' }]

  },
  en: {
    badge: 'Professional Registration',
    title: 'Join CityHealth in 3 Steps',
    subtitle: 'Register your facility for free and start receiving patients today.',
    cta: 'Start Registration',
    steps: [
    { title: 'Choose your type', desc: 'Select your specialty from our categories.' },
    { title: 'Complete your profile', desc: 'Add your info, schedule, and services.' },
    { title: 'Verification & publish', desc: 'Our team validates your profile within 24h.' }]

  }
};

const stepIcons = [UserPlus, FileText, ShieldCheck];

const providerTypes = [
{ key: PROVIDER_TYPES.HOSPITAL, icon: Building2, color: 'from-red-500 to-red-600' },
{ key: PROVIDER_TYPES.CLINIC, icon: Building2, color: 'from-cyan-500 to-cyan-600' },
{ key: PROVIDER_TYPES.DOCTOR, icon: Stethoscope, color: 'from-blue-500 to-blue-600' },
{ key: PROVIDER_TYPES.PHARMACY, icon: Pill, color: 'from-emerald-500 to-emerald-600' },
{ key: PROVIDER_TYPES.LAB, icon: FlaskConical, color: 'from-purple-500 to-purple-600' },
{ key: PROVIDER_TYPES.RADIOLOGY_CENTER, icon: ScanLine, color: 'from-indigo-500 to-indigo-600' },
{ key: PROVIDER_TYPES.DENTIST, icon: Stethoscope, color: 'from-teal-500 to-teal-600' },
{ key: PROVIDER_TYPES.BLOOD_CABIN, icon: Syringe, color: 'from-rose-500 to-rose-600' }];


const typeLabels: Record<string, Record<string, string>> = {
  hospital: { fr: 'Hôpital', ar: 'مستشفى', en: 'Hospital' },
  clinic: { fr: 'Clinique', ar: 'عيادة', en: 'Clinic' },
  doctor: { fr: 'Médecin', ar: 'طبيب', en: 'Doctor' },
  pharmacy: { fr: 'Pharmacie', ar: 'صيدلية', en: 'Pharmacy' },
  lab: { fr: 'Laboratoire', ar: 'مختبر', en: 'Laboratory' },
  radiology_center: { fr: 'Radiologie', ar: 'أشعة', en: 'Radiology' },
  dentist: { fr: 'Dentiste', ar: 'طبيب أسنان', en: 'Dentist' },
  blood_cabin: { fr: 'Cabine de sang', ar: 'كابينة دم', en: 'Blood Cabin' }
};

export const ProviderRegistrationSection = () => {
  const { language, isRTL } = useLanguage();
  const t = content[language];

  return (
    <section className={`py-16 md:py-24 px-4 relative overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl hidden md:block" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl hidden md:block" />

      




















































































      
    </section>);

};
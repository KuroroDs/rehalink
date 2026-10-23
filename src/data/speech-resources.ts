import { sitePath } from './site';

export const speechAgeGroups = [
  { value: '2-4', label: '2-4 سنوات', min: 2, max: 4 },
  { value: '4-6', label: '4-6 سنوات', min: 4, max: 6 },
  { value: '6-8', label: '6-8 سنوات', min: 6, max: 8 },
  { value: '8-12', label: '8-12 سنة', min: 8, max: 12 },
  { value: '12+', label: '12+ سنة', min: 12, max: Number.POSITIVE_INFINITY },
] as const;

export const speechLanguages = [
  { value: 'ar', label: 'العربية' },
  { value: 'fr', label: 'الفرنسية' },
  { value: 'en', label: 'الإنجليزية' },
] as const;

export type SpeechResourceType = 'اختبار' | 'مورد تعليمي' | 'نشاط تدريبي';

export interface SpeechResource {
  id: string;
  title: string;
  category: string;
  ageRange: { min: number; max: number } | null;
  languages: readonly string[];
  type: SpeechResourceType;
  price: number | null;
  createdAt: string | null;
  popularity: number | null;
  image: string;
  imageAlt: string;
  description: string;
  status: 'sample';
}

export const speechResources: SpeechResource[] = [
  {
    id: 'articulation',
    title: 'نموذج توضيحي: النطق ومخارج الحروف',
    category: 'النطق ومخارج الحروف',
    ageRange: null,
    languages: [],
    type: 'اختبار',
    price: null,
    createdAt: null,
    popularity: null,
    image: sitePath('/images/therapist-consultation.jpg'),
    imageAlt: 'أخصائية صحية تراجع ملفاً خلال استشارة مهنية',
    description: 'مثال على مورد محتمل للتوعية بالنطق. ليس اختباراً منشوراً أو أداة لتقييم النطق.',
    status: 'sample',
  },
  {
    id: 'language',
    title: 'نموذج توضيحي: اللغة والتواصل',
    category: 'اللغة والتواصل',
    ageRange: null,
    languages: [],
    type: 'مورد تعليمي',
    price: null,
    createdAt: null,
    popularity: null,
    image: sitePath('/images/rehab-support.svg'),
    imageAlt: 'رسم توضيحي يرمز إلى الدعم والتواصل',
    description: 'مثال على مادة تعليمية مقترحة حول التواصل. المحتوى الفعلي قيد الإعداد.',
    status: 'sample',
  },
  {
    id: 'fluency',
    title: 'نموذج توضيحي: التلعثم والطلاقة الكلامية',
    category: 'التلعثم والطلاقة الكلامية',
    ageRange: null,
    languages: [],
    type: 'مورد تعليمي',
    price: null,
    createdAt: null,
    popularity: null,
    image: sitePath('/images/therapist-consultation.jpg'),
    imageAlt: 'أخصائية صحية تراجع ملفاً خلال استشارة مهنية',
    description: 'مثال على موضوع توعوي محتمل عن الطلاقة. لا يتضمن أسئلة تشخيصية أو إرشادات علاجية.',
    status: 'sample',
  },
  {
    id: 'voice',
    title: 'نموذج توضيحي: الصوت والتواصل اليومي',
    category: 'الصوت',
    ageRange: null,
    languages: [],
    type: 'نشاط تدريبي',
    price: null,
    createdAt: null,
    popularity: null,
    image: sitePath('/images/rehab-support.svg'),
    imageAlt: 'رسم توضيحي هادئ يرمز إلى المرافقة والدعم',
    description: 'مثال على نشاط مقترح للتوعية بالصوت. لا توجد حالياً تعليمات أو تمارين منشورة.',
    status: 'sample',
  },
  {
    id: 'phonological-awareness',
    title: 'نموذج توضيحي: الوعي الصوتي والاستعداد للقراءة',
    category: 'الوعي الصوتي والاستعداد للقراءة',
    ageRange: null,
    languages: [],
    type: 'نشاط تدريبي',
    price: null,
    createdAt: null,
    popularity: null,
    image: sitePath('/images/rehab-support.svg'),
    imageAlt: 'رسم توضيحي تعليمي بألوان هادئة',
    description: 'مثال على نشاط تعليمي محتمل. لم تُنشر مادة قابلة للاستخدام أو التنزيل بعد.',
    status: 'sample',
  },
  {
    id: 'learning-activities',
    title: 'نموذج توضيحي: أنشطة تعليمية للتواصل',
    category: 'موارد تعليمية وأنشطة تدريبية',
    ageRange: null,
    languages: [],
    type: 'مورد تعليمي',
    price: null,
    createdAt: null,
    popularity: null,
    image: sitePath('/images/therapist-consultation.jpg'),
    imageAlt: 'ملف موارد على مكتب في بيئة مهنية',
    description: 'مثال على مورد وأنشطة قيد التخطيط، وليس ملفاً متاحاً للتحميل حالياً.',
    status: 'sample',
  },
];

export const speechCategories = [...new Set(speechResources.map((resource) => resource.category))];

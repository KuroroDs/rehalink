import { sitePath } from './site';

export const assessments = [
  {
    slug: 'speech',
    title: 'اختبارات النطق والتواصل',
    specialty: 'Orthophonie · Speech & Language',
    description: 'استكشف صعوبات النطق، والتواصل، والطلاقة الكلامية، واللغة، والصوت من خلال أسئلة مبسطة.',
    topics: [
      'النطق ومخارج الحروف.',
      'تأخر اللغة والتواصل.',
      'التلعثم والطلاقة الكلامية.',
      'الصوت والتواصل اليومي.',
    ],
    image: sitePath('/images/therapist-consultation.jpg'),
    imageAlt: 'أخصائية صحية تراجع ملفاً خلال استشارة مهنية',
    imagePosition: '24% center',
    tone: 'speech',
    cta: 'ابدأ اختبار النطق',
    guidance: 'تمهيد للتفكير في التواصل والنطق، لا يحدد وجود اضطراب ولا يغني عن تقييم أخصائي النطق واللغة.',
  },
  {
    slug: 'wellbeing',
    title: 'اختبارات الحالة النفسية',
    specialty: 'Psychologie · Well-being',
    description: 'خذ لحظة لفهم حالتك النفسية والتأمل في مؤشرات التوتر والقلق والمزاج والنوم والراحة النفسية.',
    topics: [
      'التوتر والضغط النفسي.',
      'مؤشرات القلق.',
      'المزاج والراحة النفسية.',
      'النوم والتوازن العاطفي.',
    ],
    image: sitePath('/images/rehab-support.svg'),
    imageAlt: 'رسم توضيحي هادئ يرمز إلى الدعم والمرافقة',
    imagePosition: 'center',
    tone: 'wellbeing',
    cta: 'اكتشف حالتك النفسية',
    guidance: 'مساحة للتأمل والتوعية، وليست تشخيصاً نفسياً أو بديلاً عن الحديث مع أخصائي الصحة النفسية.',
  },
  {
    slug: 'movement',
    title: 'اختبارات الحركة والقدرات الحركية',
    specialty: 'Kinésithérapie · Movement',
    description: 'تعرّف على بعض الصعوبات المرتبطة بالحركة والتوازن والتنسيق والأنشطة اليومية، واكتشف متى قد تحتاج إلى استشارة مختص.',
    topics: [
      'الحركة والمرونة الوظيفية.',
      'التوازن والتنسيق.',
      'صعوبات الأنشطة اليومية.',
      'الحركة بعد الإصابة أو أثناء إعادة التأهيل.',
    ],
    image: sitePath('/images/doctors-photo.jpg'),
    imageAlt: 'شخص يتدرّب على صعود الدرج ضمن إعادة التأهيل الحركي',
    imagePosition: 'center 58%',
    tone: 'movement',
    cta: 'ابدأ اختبار الحركة',
    guidance: 'لا تتضمن هذه المساحة تمارين أو مناورات حركية. لا تحاول اختبار توازنك أو حركتك وحدك إذا كان ذلك قد يعرّضك للسقوط أو الألم.',
  },
] as const;

export type Assessment = (typeof assessments)[number];

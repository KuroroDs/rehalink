export interface InfoCard {
  id: string;
  text: string;
  sourceLabel: string;
  sourceUrl: string;
}

export const infoCards: InfoCard[] = [
  {
    id: "language-development",
    text: "تطور اللغة عند الطفل يعتمد على التفاعل اليومي مع البالغين، والاهتمام السريع بالإشارات المبكرة يساعد في دعم التعلم اللاحق.",
    sourceLabel: "منظمة الصحة العالمية",
    sourceUrl: "https://www.who.int/health-topics/childhood-disorders"
  },
  {
    id: "speech-signals",
    text: "إذا لاحظت تأخراً في الكلمات أو صعوبة في التواصل، فمن المفيد تقييم الطفل مبكراً قبل أن تتفاقم الصعوبات الأكاديمية والاجتماعية.",
    sourceLabel: "مراكز الوقاية والمرض CDC",
    sourceUrl: "https://www.cdc.gov/ncbddd/actearly"
  },
  {
    id: "stammering",
    text: "التأتأة عند الأطفال قد تكون مؤقتة في بعض الحالات، لكنها تستدعي متابعة مختصة إذا استمرت أو أثرت على الثقة أو التواصل اليومي.",
    sourceLabel: "الجامعة الأمريكية للسمعيات",
    sourceUrl: "https://www.asha.org/public/speech/disorders/stuttering/"
  },
  {
    id: "reading-skills",
    text: "القراءة والكتابة تحتاجان إلى تنمية الوعي الصوتي، اللغة، والقدرة على التركيز معاً، وليس فقط زيادة العمر أو التكرار.",
    sourceLabel: "منظمة التدريس والدراسات التنموية",
    sourceUrl: "https://dyslexiaida.org/"
  },
  {
    id: "support-timely",
    text: "التدخل المبكر يقلل التوتر الذي قد يرافق الطفل والأسرة، ويساعد على بناء مهارات التواصل بثقة أكبر مع مرور الوقت.",
    sourceLabel: "يونيسف",
    sourceUrl: "https://www.unicef.org/"
  }
];


import type { IconName } from './icons'

export const navItems = [
  { label: 'Főoldal', href: '/' },
  { label: 'Szolgáltatások és Árak', href: '/szolgaltatasok' },
  { label: 'Rólam', href: '/rolam' },
  { label: 'Kapcsolat', href: '/kapcsolat' },
] as const

// TODO: Calendly link cseréje
export const CALENDLY_URL = 'https://calendly.com/PLACEHOLDER'

// TODO: E-mail cím megadása (contact form + footer)
// export const CONTACT_EMAIL = 'info@hslogivam.hu'
export const CONTACT_EMAIL = 'cj_core@hotmail.com'

// TODO: Telefonszám megadása
export const CONTACT_PHONE = '+36 XX XXX XXXX'

// TODO: LinkedIn profil link
export const LINKEDIN_URL = 'https://linkedin.com/in/PLACEHOLDER'

// TODO: Adószám kitöltése
export const TAX_NUMBER = '[Megadandó]'

export const urgencyCards = [
  {
    id: 'ppwr',
    icon: 'package' as IconName,
    title: 'PPWR – Csomagolási rendelet',
    description:
      '2026. augusztus 12-től kötelező a PFAS-mentesség igazolása és a Műszaki Dokumentációs Fájlok (TDF) vezetése.',
    badge: 'Határidő: 2026. aug. 12.',
    badgeColor: 'bg-amber-100 text-amber-800',
    accentColor: 'bg-amber-400',
  },
  {
    id: 'eudr',
    icon: 'tree' as IconName,
    title: 'EUDR – Erdőirtásmentes import',
    description:
      'Szigorú, GPS-koordináta alapú nyomonkövetés az EU TRACES rendszerében az élelmiszer- és papírláncokban.',
    badge: 'Státusz: Élesben fut',
    badgeColor: 'bg-orange-100 text-orange-800',
    accentColor: 'bg-orange-400',
  },
  {
    id: 'cbam',
    icon: 'factory' as IconName,
    title: 'CBAM – Karbonvám',
    description:
      'Negyedéves CO₂-adatszolgáltatás a határon. Tudja, hogyan érvényesítheti az 50 tonna alatti mentességet?',
    badge: 'Határidő: Negyedévente',
    badgeColor: 'bg-red-100 text-red-800',
    accentColor: 'bg-red-400',
  },
] as const

export const uspPoints = [
  { icon: 'building' as IconName, text: 'Éles vállalati referencia (húsipar, gyártás)' },
  { icon: 'file' as IconName, text: 'Kész, azonnal használható sablon-eszköztár' },
  { icon: 'book' as IconName, text: 'Folyamatos szakmai képzés, naprakész tudás' },
  { icon: 'receipt' as IconName, text: 'Kiszámítható, transzparens díjszabás' },
] as const

export const packagePreviews = [
  {
    icon: 'search' as IconName,
    title: 'Moduláris Auditok',
    subtitle: 'Ha csak egy konkrét problémát akar eloltani',
    detail: 'PPWR vagy EUDR modul',
    price: '35 000 Ft/óratól',
    cta: 'Részletek →',
    href: '/szolgaltatasok',
    featured: false,
  },
  {
    icon: 'layers' as IconName,
    title: 'Kombinált Csomagok',
    subtitle: 'Kulcsrakész zöld- és vámszakmai felkészítés',
    detail: 'Kedvezményes fix áron',
    price: '',
    cta: 'Megnézem a csomagokat →',
    href: '/szolgaltatasok',
    featured: true,
  },
  {
    icon: 'shield' as IconName,
    title: 'Havi Fix Átalánydíj',
    subtitle: 'Folyamatos külsős referensi biztonság',
    detail: 'Folyamatos védelem',
    price: '',
    cta: 'Részletek →',
    href: '/szolgaltatasok#retainer',
    featured: false,
  },
] as const

export const credentials = [
  {
    icon: 'graduation' as IconName,
    text: 'Wekerle Sándor Üzleti Főiskola/Egyetem – kereskedelem és marketing (logisztika szakirány)',
  },
  {
    icon: 'award' as IconName,
    text: 'GS1 Hungary · CSAOSZ · BDO Magyarország · Bureau Veritas képzések',
  },
  {
    icon: 'chart' as IconName,
    text: 'Felsőfokú Logisztikai Menedzser és Pénzügyi-Számviteli végzettség',
  },
] as const

export const basicServices = [
  {
    id: 'code-of-conduct',
    icon: 'file' as IconName,
    name: 'Beszállítói Magatartási Kódex (Code of Conduct)',
    price: '120 000 Ft (egyszeri)',
    items: [
      'Vállalkozásra szabott hivatalos kódex (etika, munkajog, környezetvédelem, PPWR/EUDR elvárások)',
      'Beszállítói Elfogadó Nyilatkozat jogi mintájának átadása',
    ],
    duration: '3–5 munkanap',
  },
  {
    id: 'consulting',
    icon: 'users' as IconName,
    name: 'Személyes és Stratégiai Tanácsadás',
    price: '35 000 Ft/óra',
    items: ['Online konzultáció (Teams/Zoom), rugalmas időbeosztás'],
    duration: '',
  },
  {
    id: 'ppwr',
    icon: 'package' as IconName,
    name: 'PPWR Alapszintű Megfelelési Csomag',
    price: '185 000 Ft (egyszeri)',
    items: [
      'PFAS-mentességi nyilatkozatsablon (5 fő csomagolási kategória)',
      'Műszaki Dokumentációs Fájl (TDF) sablon + kitöltési útmutató',
      'Speak-easy összefoglaló az anyaggazdálkodási csapatnak',
    ],
    duration: '5–7 munkanap',
  },
  {
    id: 'eudr',
    icon: 'tree' as IconName,
    name: 'EUDR Alapszintű Megfelelési Csomag',
    price: '195 000 Ft (egyszeri)',
    items: [
      'Kockázatalapú földrajzi besorolás (érintett termékek azonosítása)',
      'TRACES NT regisztrációs útmutató + első DDS adatlap sablon',
      'Kész beszállítói adatbekérő levelek és nyilatkozatok (GPS, tanúsítvány)',
    ],
    duration: '5–8 munkanap',
  },
  {
    id: 'cbam',
    icon: 'factory' as IconName,
    name: 'CBAM Adatgyűjtési és Riportolási Keretrendszer',
    price: '210 000 Ft (egyszeri)',
    items: [
      'CBAM-hatókör meghatározás és mentességi elemzés (50 t alatti küszöb)',
      'Negyedéves CO₂-adatlap sablon + adatbeszerzési folyamat tervezése',
      'Útmutató a CBAM Átmeneti Nyilvántartóhoz (CBAM Transitional Registry)',
    ],
    duration: '5–8 munkanap',
  },
] as const

export const comboPackages = [
  {
    id: 'ppwr-eudr',
    icon: 'layers' as IconName,
    name: 'PPWR + EUDR Kettős Megfelelési Csomag',
    price: '325 000 Ft (egyszeri)',
    savings: 'Megtakarítás: 55 000 Ft',
    items: [
      'PPWR Alapcsomag + EUDR Alapcsomag összes elemét',
      'Összevont Kockázati Mátrix az összes érintett termékre',
    ],
    duration: '10–12 munkanap',
    badge: 'Legjobb ár/érték',
    featured: false,
  },
  {
    id: 'flagship',
    icon: 'shieldCheck' as IconName,
    name: 'Teljes Zöld Megfelelési Alap (Flagship)',
    price: '490 000 Ft (egyszeri)',
    savings: 'Megtakarítás: 120 000 Ft',
    items: [
      'PPWR + EUDR + CBAM alapcsomagok + Code of Conduct',
      '2 óra személyes stratégiai tanácsadás',
      '30 napos e-mail utókövetési támogatás',
    ],
    duration: '15–20 munkanap',
    badge: 'Legnépszerűbb',
    featured: true,
  },
  {
    id: 'customs-green',
    icon: 'briefcase' as IconName,
    name: 'Vám + Zöld Kombinált Gyorscsomag',
    price: '380 000 Ft (egyszeri)',
    savings: '',
    items: ['EUDR Alapcsomag + CBAM Alap + 3 óra vámjogi tanácsadás'],
    duration: '10–14 munkanap',
    badge: '',
    featured: false,
  },
] as const

export const faqItems = [
  {
    question: 'Mikor szükséges a PPWR megfelelés?',
    answer:
      '2026. augusztus 12-től kötelező a PFAS-mentesség igazolása és a TDF-ek vezetése minden csomagolt terméket forgalmazó vállalkozás számára az EU-ban.',
  },
  {
    question: 'Az EUDR csak az élelmiszeripart érinti?',
    answer:
      'Nem. Az EUDR a szarvasmarhát, kakaót, kávét, pálmaolajat, szóját, fát és gumit, valamint ezek feldolgozott termékeit (beleértve a bútort, papírt, csokoládét stb.) tartalmazó termékekre vonatkozik.',
  },
  {
    question: 'Mi az alanyi ÁFA-mentesség?',
    answer:
      'Herke-Szilágyi Ágnes egyéni vállalkozóként alanyi ÁFA-mentes, ezért a feltüntetett díjak tartalmazzák az összes költséget, ÁFA-t nem számít fel.',
  },
  {
    question: 'Hogyan zajlik a Quick Scan audit?',
    answer:
      '45 perces, ingyenes online egyeztetés (Teams/Zoom), amely során feltérképezzük az Ön vállalkozásának PPWR/EUDR/CBAM kitettségét és meghatározzuk a prioritásokat.',
  },
  {
    question: 'Mennyi idő alatt készülnek el a dokumentumok?',
    answer:
      'Az alapcsomagoknál 3–8 munkanapon belül, a kombinált csomagoknál 10–20 munkanapon belül.',
  },
] as const

export const timelineItems = [
  {
    icon: 'graduation' as IconName,
    title: 'Wekerle Sándor Üzleti Főiskola / Egyetem',
    subtitle: 'Kereskedelem és marketing – logisztika szakirány (folyamatban)',
    detail: 'Fókusz: fenntartható beszerzési és ellátási lánc stratégiák',
  },
  {
    icon: 'award' as IconName,
    title: 'Célzott EU-s szakmai képzések',
    subtitle: 'GS1 Hungary · CSAOSZ · BDO Magyarország · Bureau Veritas',
    detail: 'EUDR és PPWR gyakorlati alkalmazás',
  },
  {
    icon: 'chart' as IconName,
    title: 'Szakmai végzettségek',
    subtitle: 'Felsőfokú Logisztikai Menedzser',
    detail: 'Pénzügyi-Számviteli szakmai végzettség',
  },
] as const

export const trustCards = [
  {
    icon: 'building' as IconName,
    title: 'Éles húsipari referencia',
    text: 'Elindítottam és közreműködtem a húsipari beszállítói láncok EUDR-felkészítésében, sikeres szakmai prezentációt tartottam a partnerek részére.',
  },
  {
    icon: 'globe' as IconName,
    title: 'Naprakész nemzetközi tudás',
    text: 'Folyamatosan a piac legfontosabb szakmai fórumain gyűjtöm a legfrissebb információkat.',
  },
  {
    icon: 'file' as IconName,
    title: 'Kész, azonnali eszköztár',
    text: 'Saját fejlesztésű, élesben bevált Code of Conduct, PPWR és CBAM sablonok – nem kell a nulláról fejleszteni.',
  },
  {
    icon: 'shieldCheck' as IconName,
    title: 'Teljes körű biztonság',
    text: 'Olyan stabil folyamatokat építek ki, amelyek hatósági és üzleti biztonságot garantálnak az Ön vállalkozásának.',
  },
] as const

export const contactTopics = [
  'PPWR megfelelés',
  'EUDR megfelelés',
  'CBAM adatszolgáltatás',
  'Kombinált csomag',
  'Havi retainer',
  'Egyéb',
] as const

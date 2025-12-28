export const company = {
  name: 'MNS Transport',
  tagline: {
    ro: 'Transport marfă România & Europa',
    en: 'Freight Transport Romania & Europe',
  },
  description: {
    ro: 'Servicii profesionale de transport rutier cu cap tractor și prelată în România și Europa.',
    en: 'Professional road freight transport services with curtain-sider trucks in Romania and Europe.',
  },
  contact: {
    phone: '+40 XXX XXX XXX',
    phoneClean: '+40XXXXXXXXX',
    email: 'contact@mnstransport.ro',
    whatsapp: '+40XXXXXXXXX',
    address: {
      ro: 'Str. Exemplu nr. 1, București, România',
      en: 'Example Street no. 1, Bucharest, Romania',
    },
  },
  businessHours: {
    ro: 'Luni - Vineri: 08:00 - 18:00 | Sâmbătă: 08:00 - 14:00',
    en: 'Monday - Friday: 08:00 - 18:00 | Saturday: 08:00 - 14:00',
  },
  stats: {
    yearsInBusiness: 5,
    trucks: 3,
    onTimeDelivery: 99,
    kmPerMonth: 25000,
    insuranceCoverage: true,
  },
  sla: {
    responseTime: {
      ro: 'Răspundem în aceeași zi',
      en: 'Same-day response',
    },
  },
  social: {
    facebook: '',
    linkedin: '',
    instagram: '',
  },
}

export const trustPromises = {
  ro: [
    { icon: 'Clock', text: 'Răspuns rapid în aceeași zi' },
    { icon: 'Shield', text: 'Asigurare inclusă pentru fiecare transport' },
    { icon: 'MapPin', text: 'Actualizări live despre transport' },
    { icon: 'CheckCircle', text: '99% livrări la timp' },
    { icon: 'Truck', text: 'Flotă modernă și întreținută' },
    { icon: 'Banknote', text: 'Cel mai bun preț' },
  ],
  en: [
    { icon: 'Clock', text: 'Same-day response' },
    { icon: 'Shield', text: 'Insurance coverage included' },
    { icon: 'MapPin', text: 'Live transport updates' },
    { icon: 'CheckCircle', text: '99% on-time delivery' },
    { icon: 'Truck', text: 'Modern and maintained fleet' },
    { icon: 'Banknote', text: 'Best price guarantee' },
  ],
}

export const services = {
  ro: [
    {
      id: 'domestic',
      title: 'Transport România',
      description: 'Acoperire națională completă cu livrări rapide și sigure în toată România.',
      icon: 'MapPin',
    },
    {
      id: 'international',
      title: 'Transport Internațional',
      description:
        'Rute regulate către Ungaria, Polonia și alte țări europene cu documentație completă.',
      icon: 'Globe',
    },
    {
      id: 'dedicated',
      title: 'Transport Dedicat',
      description: 'Soluții personalizate pentru nevoile dumneavoastră specifice de transport.',
      icon: 'Target',
    },
    {
      id: 'weekend',
      title: 'Livrări Weekend',
      description: 'Disponibilitate și în weekend pentru urgențe și termene strânse.',
      icon: 'Calendar',
    },
    {
      id: 'support',
      title: 'Suport 24/7',
      description: 'Echipa noastră este disponibilă non-stop pentru asistență și tracking.',
      icon: 'Headphones',
    },
    {
      id: 'tracking',
      title: 'Tracking Live',
      description: 'Monitorizați transportul în timp real cu actualizări regulate.',
      icon: 'Radar',
    },
  ],
  en: [
    {
      id: 'domestic',
      title: 'Romania Transport',
      description: 'Complete national coverage with fast and safe deliveries across Romania.',
      icon: 'MapPin',
    },
    {
      id: 'international',
      title: 'International Transport',
      description:
        'Regular routes to Hungary, Poland and other European countries with complete documentation.',
      icon: 'Globe',
    },
    {
      id: 'dedicated',
      title: 'Dedicated Transport',
      description: 'Customized solutions for your specific transport needs.',
      icon: 'Target',
    },
    {
      id: 'weekend',
      title: 'Weekend Deliveries',
      description: 'Weekend availability for emergencies and tight deadlines.',
      icon: 'Calendar',
    },
    {
      id: 'support',
      title: '24/7 Support',
      description: 'Our team is available around the clock for assistance and tracking.',
      icon: 'Headphones',
    },
    {
      id: 'tracking',
      title: 'Live Tracking',
      description: 'Monitor your transport in real-time with regular updates.',
      icon: 'Radar',
    },
  ],
}

export const cargoTypes = {
  ro: [
    'Paleți standard și euro',
    'Mărfuri generale',
    'Produse industriale',
    'Materiale de construcții',
    'Piese auto și echipamente',
    'Produse alimentare (non-refrigerate)',
    'Mobilier și articole voluminoase',
    'Orice se încadrează în dimensiunile prelatei',
  ],
  en: [
    'Standard and euro pallets',
    'General cargo',
    'Industrial products',
    'Construction materials',
    'Auto parts and equipment',
    'Food products (non-refrigerated)',
    'Furniture and bulky items',
    'Anything that fits curtain-sider dimensions',
  ],
}

export const coverage = {
  countries: [
    { code: 'RO', name: { ro: 'România', en: 'Romania' }, highlighted: true },
    { code: 'HU', name: { ro: 'Ungaria', en: 'Hungary' }, highlighted: true },
    { code: 'PL', name: { ro: 'Polonia', en: 'Poland' }, highlighted: true },
    { code: 'DE', name: { ro: 'Germania', en: 'Germany' }, highlighted: false },
    { code: 'AT', name: { ro: 'Austria', en: 'Austria' }, highlighted: false },
    { code: 'CZ', name: { ro: 'Cehia', en: 'Czech Republic' }, highlighted: false },
    { code: 'SK', name: { ro: 'Slovacia', en: 'Slovakia' }, highlighted: false },
  ],
  leadTimes: {
    ro: {
      domestic: '24-48 ore',
      hungary: '2-3 zile',
      poland: '2-4 zile',
      other: '3-5 zile',
    },
    en: {
      domestic: '24-48 hours',
      hungary: '2-3 days',
      poland: '2-4 days',
      other: '3-5 days',
    },
  },
}

export const fleet = {
  vehicles: [
    {
      type: {
        ro: 'Cap Tractor cu Prelată',
        en: 'Tractor with Curtain-sider Trailer',
      },
      specs: {
        length: '13.6m',
        width: '2.45m',
        height: '2.7m',
        capacity: '24t',
        pallets: '33 europallets',
      },
      features: {
        ro: [
          'Încărcare laterală, superioară și posterioară',
          'GPS tracking în timp real',
          'Podea antiderapantă',
          'Sistem de fixare marfă',
          'Prelată rezistentă la intemperii',
        ],
        en: [
          'Side, top and rear loading',
          'Real-time GPS tracking',
          'Anti-slip floor',
          'Cargo securing system',
          'Weather-resistant tarpaulin',
        ],
      },
    },
  ],
  maintenance: {
    ro: 'Toate vehiculele sunt întreținute conform standardelor UE și verificate regulat.',
    en: 'All vehicles are maintained according to EU standards and regularly inspected.',
  },
}

export const process = {
  steps: {
    ro: [
      {
        step: 1,
        title: 'Cerere ofertă',
        description: 'Completați formularul sau contactați-ne direct pentru o ofertă personalizată.',
        icon: 'FileText',
      },
      {
        step: 2,
        title: 'Planificare',
        description:
          'Confirmăm detaliile și programăm ridicarea conform necesităților dumneavoastră.',
        icon: 'Calendar',
      },
      {
        step: 3,
        title: 'Ridicare marfă',
        description: 'Echipa noastră ajunge la timp pentru încărcarea în siguranță a mărfii.',
        icon: 'Package',
      },
      {
        step: 4,
        title: 'Transport & Tracking',
        description: 'Urmăriți transportul în timp real cu actualizări regulate.',
        icon: 'Truck',
      },
      {
        step: 5,
        title: 'Livrare',
        description: 'Livrăm la destinație conform programului stabilit.',
        icon: 'CheckCircle',
      },
      {
        step: 6,
        title: 'Documente',
        description: 'Primiti toate documentele necesare prin email sau WhatsApp.',
        icon: 'FileCheck',
      },
    ],
    en: [
      {
        step: 1,
        title: 'Request Quote',
        description: 'Fill out the form or contact us directly for a personalized quote.',
        icon: 'FileText',
      },
      {
        step: 2,
        title: 'Planning',
        description: 'We confirm details and schedule pickup according to your needs.',
        icon: 'Calendar',
      },
      {
        step: 3,
        title: 'Cargo Pickup',
        description: 'Our team arrives on time for safe loading of your cargo.',
        icon: 'Package',
      },
      {
        step: 4,
        title: 'Transport & Tracking',
        description: 'Track your transport in real-time with regular updates.',
        icon: 'Truck',
      },
      {
        step: 5,
        title: 'Delivery',
        description: 'We deliver to destination according to the agreed schedule.',
        icon: 'CheckCircle',
      },
      {
        step: 6,
        title: 'Documents',
        description: 'Receive all necessary documents via email or WhatsApp.',
        icon: 'FileCheck',
      },
    ],
  },
}

export const faqs = {
  ro: [
    {
      question: 'Cât durează să primesc o ofertă?',
      answer:
        'Răspundem în aceeași zi lucrătoare. Pentru cereri urgente, contactați-ne telefonic pentru un răspuns imediat.',
    },
    {
      question: 'Ce documente sunt necesare pentru transport internațional?',
      answer:
        'Gestionăm toată documentația necesară: CMR, facturi, certificate de origine și documente vamale dacă este cazul.',
    },
    {
      question: 'Marfa mea este asigurată?',
      answer:
        'Da, toate transporturile sunt acoperite de asigurare completă. Asigurarea este inclusă în preț fără costuri suplimentare.',
    },
    {
      question: 'Pot urmări transportul în timp real?',
      answer:
        'Da, oferim actualizări regulate despre statusul transportului prin telefon, email sau WhatsApp.',
    },
    {
      question: 'Ce tipuri de marfă transportați?',
      answer:
        'Transportăm orice se încadrează în dimensiunile standard ale prelatei: paleți, mărfuri generale, materiale de construcții, echipamente industriale și multe altele.',
    },
    {
      question: 'Oferiți transport în weekend?',
      answer:
        'Da, oferim servicii de transport și în weekend pentru situații urgente sau la cerere.',
    },
    {
      question: 'Care sunt modalitățile de plată acceptate?',
      answer:
        'Acceptăm transfer bancar și plata la livrare pentru clienții cu contract. Discutăm termenii de plată la momentul ofertei.',
    },
    {
      question: 'Cum se calculează prețul transportului?',
      answer:
        'Prețul depinde de distanță, greutate, volum, urgență și rută. Oferim prețuri competitive și transparente.',
    },
  ],
  en: [
    {
      question: 'How long does it take to get a quote?',
      answer:
        'We respond on the same business day. For urgent requests, call us for an immediate response.',
    },
    {
      question: 'What documents are needed for international transport?',
      answer:
        'We handle all necessary documentation: CMR, invoices, certificates of origin and customs documents if applicable.',
    },
    {
      question: 'Is my cargo insured?',
      answer:
        'Yes, all transports are covered by full insurance. Insurance is included in the price at no extra cost.',
    },
    {
      question: 'Can I track the transport in real-time?',
      answer:
        'Yes, we provide regular updates about transport status via phone, email or WhatsApp.',
    },
    {
      question: 'What types of cargo do you transport?',
      answer:
        'We transport anything that fits standard curtain-sider dimensions: pallets, general cargo, construction materials, industrial equipment and more.',
    },
    {
      question: 'Do you offer weekend transport?',
      answer: 'Yes, we offer transport services on weekends for urgent situations or upon request.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept bank transfer and payment on delivery for contracted clients. We discuss payment terms at quote time.',
    },
    {
      question: 'How is the transport price calculated?',
      answer:
        'Price depends on distance, weight, volume, urgency and route. We offer competitive and transparent pricing.',
    },
  ],
}

export const testimonials = [
  {
    id: 1,
    name: 'Client Placeholder 1',
    company: 'Companie Exemplu SRL',
    text: {
      ro: 'Servicii excelente și livrare la timp. Recomand cu încredere!',
      en: 'Excellent services and on-time delivery. Highly recommended!',
    },
    rating: 5,
  },
  {
    id: 2,
    name: 'Client Placeholder 2',
    company: 'Firma Demo SA',
    text: {
      ro: 'Comunicare excelentă și prețuri corecte. Partener de încredere pentru transport.',
      en: 'Excellent communication and fair prices. Reliable transport partner.',
    },
    rating: 5,
  },
  {
    id: 3,
    name: 'Client Placeholder 3',
    company: 'Industrial Corp',
    text: {
      ro: 'Rapiditate și profesionalism. Transportul a ajuns exact când era planificat.',
      en: 'Speed and professionalism. The transport arrived exactly as planned.',
    },
    rating: 5,
  },
]

export const legal = {
  privacy: {
    ro: `Politica de Confidențialitate

Ultima actualizare: [DATA]

MNS Transport respectă confidențialitatea datelor dumneavoastră personale. Această politică explică modul în care colectăm, utilizăm și protejăm informațiile personale.

Date colectate:
- Informații de contact (nume, telefon, email)
- Detalii despre transport (adrese de ridicare/livrare, tipul mărfii)
- Date de facturare

Scopul utilizării:
- Procesarea cererilor de ofertă
- Comunicarea privind transporturile
- Îmbunătățirea serviciilor noastre

Drepturile dumneavoastră:
- Acces la datele personale
- Rectificarea datelor incorecte
- Ștergerea datelor (dreptul de a fi uitat)
- Portabilitatea datelor

Contact: ${company.contact.email}`,
    en: `Privacy Policy

Last updated: [DATE]

MNS Transport respects the privacy of your personal data. This policy explains how we collect, use and protect personal information.

Data collected:
- Contact information (name, phone, email)
- Transport details (pickup/delivery addresses, cargo type)
- Billing data

Purpose of use:
- Processing quote requests
- Communication regarding transports
- Improving our services

Your rights:
- Access to personal data
- Rectification of incorrect data
- Deletion of data (right to be forgotten)
- Data portability

Contact: ${company.contact.email}`,
  },
  cookies: {
    ro: `Politica Cookies

Acest site folosește cookie-uri minime, doar cele esențiale pentru funcționarea corectă a site-ului.

Nu utilizăm cookie-uri de tracking sau publicitate.

Cookie-uri utilizate:
- Preferința de limbă (localStorage)
- Sesiune formulare (temporar)

Nu partajăm date cu terți pentru scopuri publicitare.`,
    en: `Cookies Policy

This website uses minimal cookies, only those essential for proper site functionality.

We do not use tracking or advertising cookies.

Cookies used:
- Language preference (localStorage)
- Form session (temporary)

We do not share data with third parties for advertising purposes.`,
  },
  terms: {
    ro: `Termeni și Condiții

[Placeholder pentru termenii și condițiile complete ale serviciilor de transport]`,
    en: `Terms and Conditions

[Placeholder for complete terms and conditions of transport services]`,
  },
}

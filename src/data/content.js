// All editable content lives here. Guidelines and the four core-team contacts come from the supplied posters.
// Anything marked PLACEHOLDER has not been supplied: replace it before launch.
export const SITE = {
  name: "GARBA-EVE'26",
  eyebrow: 'JSS GROUP OF INSTITUTIONS NOIDA INVITES YOU TO',
  description: 'Dandiya in hand. Dhol in your chest. One night you’ll dance about for years.',
  tagline: 'One night. Endless circles. Every beat, your own story.',
  instagram: { handle: '@jss_garba2k26', href: 'https://instagram.com/jss_garba2k26?srtk=MWFodTRianFyZnh4dQ%3D%3D' },
  signInHref: 'https://luma.com/p4ugem08', // no auth system: Sign in jumps to Contact
}
export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'guidelines', label: 'Guidelines' },
  { id: 'contact', label: 'Contact us' },
]
export const TICKER = ['Prior registration', 'Physical ID required', 'Traditional attire', 'Bring your dandiya sticks', 'Handbags only', 'No cars on campus', 'No smoking or alcohol', 'Contact the core team']

// accent: sun | burnt     icon: any lucide-react icon name registered in tones.js
export const GUIDELINES = [
  {
    title: 'Prior Registration Required',
    text: 'All participants must register in advance to attend the event.',
    points: [
      'Registration must be completed in advance before arriving at campus.',
      'Entry is strictly restricted to participants with confirmed registrations.',
      'On-spot registrations will not be entertained at the gate.',
    ],
    icon: 'ClipboardCheck',
    accent: 'sun',
  },
  {
    title: 'No Entry Without ID & Confirmation',
    text: 'Show a valid physical college ID card and your registration confirmation at the gate. Without both, you can’t enter the celebration area.',
    points: [
      'A valid physical college ID card is mandatory at the entrance.',
      'Registration confirmation pass must be presented at the gate.',
      'Entry will not be granted without both documents verified.',
    ],
    icon: 'IdCard',
    accent: 'burnt',
  },
  {
    title: 'Traditional Attire Only',
    text: 'Wear clothing that fits the occasion and honors the cultural importance of Garba. Bring your own dandiya sticks.',
    points: [
      'Ethnic / traditional Indian wear is required to honor Garba culture.',
      'Casual or Western clothing will not be permitted in the dance arena.',
      'Participants must bring their own dandiya sticks to dance.',
    ],
    icon: 'Shirt',
    accent: 'sun',
  },
  {
    title: 'Handbags Only',
    text: 'No other bags are allowed, for the safety and security of all participants. Plan accordingly.',
    points: [
      'Only small personal handbags / clutches are allowed inside.',
      'Backpacks, large bags, and luggage are strictly prohibited.',
      'Mandatory security screening will be conducted at entry gates.',
    ],
    icon: 'ShoppingBag',
    accent: 'burnt',
  },
  {
    title: 'No Personal Cars on Campus',
    text: 'Personal cars aren’t allowed on college premises during the event. Use public transport or carpool.',
    points: [
      'Personal cars and private 4-wheelers are prohibited on campus premises.',
      'Please use metro, public transport, or carpooling to arrive.',
      'Campus parking remains closed for attendee vehicles.',
    ],
    icon: 'CarFront',
    accent: 'sun',
  },
  {
    title: 'No Smoking or Alcohol',
    text: 'Both are strictly prohibited on college premises. Anyone found engaging will be suspended from the event immediately.',
    points: [
      'Smoking, alcohol, and any prohibited substances are strictly banned.',
      'Zero-tolerance policy will be strictly enforced across the campus.',
      'Violators will be removed immediately from the event premises.',
    ],
    icon: 'CigaretteOff',
    accent: 'burnt',
  },
]
// PLACEHOLDER descriptions: edit freely. No contact details are invented.
export const CONTACT_PANELS = [
  { title: 'General enquiries', text: 'Questions about registration, entry or anything else? Reach any core team member below.', icon: 'MessageCircle', tone: 'sun' },
  { title: 'Event support', text: 'Need help on the day? The core team is available to resolve your questions quickly.', icon: 'LifeBuoy', tone: 'burnt' },
  { title: 'Partnerships', text: 'Interested in working with us? Get in touch through the core team or on Instagram.', icon: 'Handshake', tone: 'bone' },
]
export const PEOPLE = [
  { name: 'Ayan Khan', role: 'Core team', phone: '9140551042', img: '/assets/img/ayan-khan.jpg', imgPosition: 'center top', instagram: null },
  { name: 'Paras', role: 'Core team', phone: '7459097899', img: '/assets/img/paras.jpg', imgPosition: 'center top', instagram: null },
  { name: 'Saksham Raghuvanshi', role: 'Core team', phone: '8318427726', img: '/assets/img/saksham-raghuvanshi.jpg', imgPosition: 'center 40%', instagram: null },
]

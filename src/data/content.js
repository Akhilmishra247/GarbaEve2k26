// All editable content lives here. Guidelines and the four core-team contacts come from the supplied posters.
// Anything marked PLACEHOLDER has not been supplied: replace it before launch.
export const SITE = {
  name: "GARBA-EVE'26",
  eyebrow: 'JSS UNIVERSITY INVITES YOU TO',
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

// tone: ink | sun | burnt | bone     icon: any lucide-react icon name registered in GuidelinePanel
export const GUIDELINES = [
  { title: 'Prior registration required', text: 'All participants must register in advance to attend the event.', icon: 'ClipboardCheck', tone: 'ink' },
  { title: 'No entry without ID and confirmation', text: 'Show a valid physical college ID card and your registration confirmation at the gate. Without both, you can’t enter the celebration area.', icon: 'IdCard', tone: 'sun' },
  { title: 'Traditional attire only', text: 'Wear clothing that fits the occasion and honors the cultural importance of Garba. Bring your own dandiya sticks.', icon: 'Shirt', tone: 'burnt' },
  { title: 'Separate spaces', text: 'Separate space is allotted for girls and boys during the event.', icon: 'Users', tone: 'bone' },
  { title: 'Handbags only', text: 'No other bags are allowed, for the safety and security of all participants. Plan accordingly.', icon: 'ShoppingBag', tone: 'sun' },
  { title: 'No cars', text: 'Personal cars aren’t allowed on college premises during the event. Use public transport or carpool.', icon: 'CarFront', tone: 'ink' },
  { title: 'No smoking or alcohol', text: 'Both are strictly prohibited on college premises. Anyone found engaging will be suspended from the event immediately.', icon: 'CigaretteOff', tone: 'burnt' },
]
// PLACEHOLDER descriptions: edit freely. No contact details are invented.
export const CONTACT_PANELS = [
  { title: 'General enquiries', text: 'Questions about registration, entry or anything else? Reach any core team member below.', icon: 'MessageCircle', tone: 'sun' },
  { title: 'Event support', text: 'Need help on the day? The core team is available to resolve your questions quickly.', icon: 'LifeBuoy', tone: 'burnt' },
  { title: 'Partnerships', text: 'Interested in working with us? Get in touch through the core team or on Instagram.', icon: 'Handshake', tone: 'bone' },
]
// Role and photo are PLACEHOLDERS (not supplied). Set img to a portrait in public/assets/img and add an instagram URL per person if wanted.
export const PEOPLE = [
  { name: 'Mantavya Mishra', role: 'Core team', phone: '80049 99099', img: '/assets/img/person-placeholder.svg', instagram: null },
  { name: 'Parth Mishra', role: 'Core team', phone: '82659 73550', img: '/assets/img/person-placeholder.svg', instagram: null },
  { name: 'Harsh Gupta', role: 'Core team', phone: '89576 73715', img: '/assets/img/person-placeholder.svg', instagram: null },
  { name: 'Pranjal Sharma', role: 'Core team', phone: '88877 19341', img: '/assets/img/person-placeholder.svg', instagram: null },
]

export type PageRoute = 'home' | 'resume' | 'biodata';

export const IDENTITY = {
  brandLogo: 'MUBEEN',
  initials: 'MN',
  fullName: 'Mubeen Navalgund',
  roleLine: 'B.E. Computer Science and Engineering Student',
  yearStatus: 'Currently Pursuing – 3rd Year',
  college: 'Jain College of Engineering & Technology',
  location: 'Dharwad, Karnataka, India',
  email: 'navalgundmubeen@gmail.com',
  phone: '7349850601',
} as const;

export const HOME_DATA = {
  hero: {
    kicker: 'COMPUTER SCIENCE & ENGINEERING STUDENT',
    greeting: "Hello, I'm",
    name: 'Mubeen Navalgund.',
    subtitle: 'B.E. Computer Science and Engineering Student',
    status: 'Currently Pursuing – 3rd Year',
    introduction:
      'A curious Computer Science and Engineering student interested in technology, programming, problem-solving and building useful digital solutions. I enjoy exploring new technologies, learning programming concepts and developing practical projects.',
    profileCard: {
      initials: 'MN',
      eyebrow: 'CURRENTLY PURSUING',
      degree: 'B.E. in Computer Science & Engineering',
      institution: 'Jain College of Engineering & Technology',
      year: 'Currently in 3rd Year',
      tagline: 'LEARNING • CREATING • IMPROVING',
    },
  },
  about: {
    kicker: 'GET TO KNOW ME',
    heading: 'Curiosity drives my learning.',
    description:
      'I am a third-year Computer Science and Engineering student interested in technology and software development. I enjoy improving my programming knowledge, exploring new ideas and working on practical projects.',
    cards: [
      {
        id: 'academic',
        title: 'Academic Journey',
        items: [
          'B.E. Computer Science and Engineering.',
          'Currently pursuing 3rd Year.',
        ],
      },
      {
        id: 'technical',
        title: 'Technical Interests',
        items: [
          'Programming.',
          'Web Development.',
          'Problem Solving.',
        ],
      },
      {
        id: 'personal',
        title: 'Personal Interests',
        items: [
          'Reading.',
          'Sports.',
          'Music.',
        ],
      },
    ],
  },
  projects: {
    heading: 'Selected Projects',
    subtitle: "Ideas and practical projects I've explored.",
    items: [
      {
        number: '01',
        category: 'Web Application',
        title: 'Scheme Saathi',
        subtitle: 'Government Schemes and Services Assistant.',
        description:
          'A web-based assistant designed to help users discover Indian government schemes and services, understand scheme information and explore relevant eligibility and application details.',
      },
      {
        number: '02',
        category: 'Software Project',
        title: 'Event Management System',
        subtitle: 'Event Organization & Activity Management.',
        description:
          'A software project focused on organizing event-related information and managing event activities.',
      },
    ],
  },
  skills: {
    heading: 'Technologies & Skills',
    subtitle: 'Technical concepts and tools I am learning and exploring.',
    groups: [
      {
        label: 'PROGRAMMING',
        items: ['C', 'C++', 'Python', 'Java'],
      },
      {
        label: 'WEB TECHNOLOGIES',
        items: ['HTML', 'CSS'],
      },
      {
        label: 'ADDITIONAL',
        items: ['Data Structures and Algorithms', 'MS Excel'],
      },
    ],
  },
  contact: {
    heading: "Let's Connect.",
    description:
      'Interested in connecting, discussing technology or exploring opportunities? Feel free to contact me.',
  },
} as const;

export const RESUME_DATA = {
  header: {
    name: 'MUBEEN NAVALGUND',
    subtitle: 'B.E. Computer Science and Engineering Student',
    location: 'Dharwad, Karnataka, India',
    email: 'navalgundmubeen@gmail.com',
    phone: '7349850601',
  },
  careerObjective:
    'Motivated third-year Computer Science and Engineering student seeking opportunities to apply my programming knowledge, technical skills and problem-solving abilities. Interested in learning new technologies, developing practical software applications and gaining professional experience while contributing to meaningful projects.',
  education: [
    {
      qualification: 'B.E. Computer Science and Engineering',
      institution: 'Jain College of Engineering & Technology',
      status: 'Currently Pursuing – 3rd Year',
      score: '8.9 CGPA',
    },
    {
      qualification: 'PUC',
      institution: 'Kittle College',
      status: 'Completed',
      score: '90%',
    },
    {
      qualification: 'SSLC',
      institution: 'S.G.R.V. School',
      status: 'Completed',
      score: '96%',
    },
  ],
  technicalSkills: [
    {
      category: 'Programming Languages',
      items: ['C', 'C++', 'Python', 'Java'],
    },
    {
      category: 'Web Technologies',
      items: ['HTML', 'CSS'],
    },
    {
      category: 'Additional Technical Knowledge',
      items: ['Data Structures and Algorithms (DSA)', 'MS Excel'],
    },
  ],
  projects: [
    {
      title: 'Scheme Saathi – Government Schemes and Services Assistant.',
      description:
        'A web-based assistant designed to help users discover Indian government schemes and services, understand scheme information and explore relevant eligibility and application details.',
    },
    {
      title: 'Event Management System.',
      description:
        'A software project focused on organizing event-related information and managing event activities.',
    },
  ],
  professionalInterests: [
    'Programming',
    'Technology',
    'Problem Solving',
    'Software Development',
  ],
  contactInfo: {
    email: 'navalgundmubeen@gmail.com',
    phone: '7349850601',
    location: 'Dharwad, Karnataka, India',
  },
} as const;

export const BIODATA_DATA = {
  title: 'BIO-DATA',
  subtitle: 'MUBEEN NAVALGUND',
  personalDetails: [
    { label: 'Name', value: 'Mubeen Navalgund' },
    { label: 'Date of Birth', value: '07 August 2005' },
    { label: 'Gender', value: 'Female' },
    { label: 'Nationality', value: 'Indian' },
    { label: 'Languages Known', value: 'English, Hindi, Kannada' },
    {
      label: 'Qualification',
      value: 'B.E. Computer Science and Engineering (Pursuing)',
    },
    {
      label: 'Hobbies',
      value: 'Reading, Sports, Programming, Listening to Music',
    },
    {
      label: 'Address',
      value: 'Uppin Betageri, Taluk Dharwad, Karnataka',
    },
    { label: 'Email', value: 'navalgundmubeen@gmail.com' },
    { label: 'Phone', value: '7349850601' },
  ],
  declaration:
    'I hereby declare that the information provided above is true and correct to the best of my knowledge and belief.',
  place: 'Dharwad',
  signatureName: 'Mubeen Navalgund',
} as const;

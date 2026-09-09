// Central content file for Thameem Institute of Technology.
// Editing anything here updates the whole website.

export const institute = {
  name: 'Thameem Institute of Technology',
  short: 'TIT',
  tagline: 'Knowledge · Character · Service',
  established: 1998,
  address: '112, Grand Southern Trunk Road, Vandalur, Chennai - 600 048, Tamil Nadu, India',
  phone: '+91 44 2275 8100',
  admissionsPhone: '+91 98400 55120',
  email: 'info@thameemtech.edu.in',
  admissionsEmail: 'admissions@thameemtech.edu.in',
  hours: 'Monday to Friday, 8.30 am - 4.30 pm | Saturday, 9.00 am - 1.00 pm',
  affiliation: 'An autonomous institution approved by AICTE and affiliated to Anna University',
  accreditation: 'NAAC "A+" accredited | NBA accredited programmes | NIRF band 101-150 (Engineering)',
}

// Student identification shown across the site (assignment requirement)
export const student = {
  developedBy: 'Ridha',
  note: 'This website was designed and developed by Ridha using AI prompting techniques.',
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Academics', to: '/academics' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Faculty', to: '/faculty' },
  { label: 'Campus Life', to: '/campus-life' },
  { label: 'Placements', to: '/placements' },
  { label: 'Research', to: '/research' },
  { label: 'News & Events', to: '/news' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export const stats = [
  { value: '27+', label: 'Years of academic service' },
  { value: '6,400', label: 'Students on campus' },
  { value: '312', label: 'Faculty members' },
  { value: '94%', label: 'Placement rate (2025-26)' },
]

export const highlights = [
  {
    title: 'Outcome based curriculum',
    text: 'Every programme is mapped to programme outcomes, reviewed each year with an industry advisory board and delivered through project based learning.',
    icon: 'book',
  },
  {
    title: 'Industry connected campus',
    text: 'Centres of excellence run with partner companies in cloud computing, embedded systems, data science and renewable energy.',
    icon: 'chip',
  },
  {
    title: 'Research from year one',
    text: 'Undergraduate students join funded research groups, publish with faculty mentors and file student patents through our IPR cell.',
    icon: 'flask',
  },
  {
    title: 'Care beyond the classroom',
    text: 'Mentor groups of fifteen students, a full time counselling cell, earn while you learn schemes and merit cum means scholarships.',
    icon: 'heart',
  },
]

export const schools = [
  {
    name: 'School of Computing',
    dept: 'Computer Science, Information Technology, Artificial Intelligence & Data Science',
    programmes: 'B.E. CSE · B.Tech IT · B.Tech AI & DS · M.E. CSE · MCA',
    seats: 420,
    icon: 'chip',
  },
  {
    name: 'School of Electrical Sciences',
    dept: 'Electronics & Communication, Electrical & Electronics, Instrumentation',
    programmes: 'B.E. ECE · B.E. EEE · M.E. VLSI Design · M.E. Power Systems',
    seats: 300,
    icon: 'bolt',
  },
  {
    name: 'School of Mechanical & Civil Engineering',
    dept: 'Mechanical, Mechatronics, Civil and Structural Engineering',
    programmes: 'B.E. Mechanical · B.E. Civil · M.E. Structural Engineering',
    seats: 240,
    icon: 'gear',
  },
  {
    name: 'School of Management & Sciences',
    dept: 'Management Studies, Mathematics, Physics, Chemistry and English',
    programmes: 'MBA · M.Sc. Applied Mathematics · Ph.D. programmes',
    seats: 180,
    icon: 'chart',
  },
]

export const programmes = [
  { level: 'Undergraduate', name: 'B.E. Computer Science and Engineering', duration: '4 years', intake: 180, eligibility: 'Pass in +2 with Mathematics, Physics and Chemistry' },
  { level: 'Undergraduate', name: 'B.Tech Artificial Intelligence and Data Science', duration: '4 years', intake: 120, eligibility: 'Pass in +2 with Mathematics, Physics and Chemistry' },
  { level: 'Undergraduate', name: 'B.E. Electronics and Communication Engineering', duration: '4 years', intake: 120, eligibility: 'Pass in +2 with Mathematics, Physics and Chemistry' },
  { level: 'Undergraduate', name: 'B.E. Mechanical Engineering', duration: '4 years', intake: 120, eligibility: 'Pass in +2 with Mathematics, Physics and Chemistry' },
  { level: 'Undergraduate', name: 'B.E. Civil Engineering', duration: '4 years', intake: 60, eligibility: 'Pass in +2 with Mathematics, Physics and Chemistry' },
  { level: 'Postgraduate', name: 'M.E. Computer Science and Engineering', duration: '2 years', intake: 36, eligibility: 'B.E. / B.Tech in a relevant branch with 50% marks' },
  { level: 'Postgraduate', name: 'M.E. VLSI Design', duration: '2 years', intake: 24, eligibility: 'B.E. / B.Tech in ECE, EEE or equivalent' },
  { level: 'Postgraduate', name: 'Master of Computer Applications (MCA)', duration: '2 years', intake: 60, eligibility: 'Any degree with Mathematics at +2 or degree level' },
  { level: 'Postgraduate', name: 'Master of Business Administration (MBA)', duration: '2 years', intake: 120, eligibility: 'Any degree with 50% marks and a valid TANCET score' },
  { level: 'Research', name: 'Ph.D. in Engineering, Science and Management', duration: '3 to 5 years', intake: 40, eligibility: "Master's degree with 55% marks and entrance test" },
]

export const leadership = [
  {
    name: 'Dr. M. Thameem Ansari',
    role: 'Founder & Chairman',
    qualification: 'Ph.D., Educational Administration',
    focus: 'Founded the institute in 1998 with a single engineering block and a promise of affordable, high quality technical education.',
    initials: 'TA',
  },
  {
    name: 'Dr. S. Shameera Begum',
    role: 'Dean - Academics',
    qualification: 'Ph.D., Computer Science and Engineering',
    focus: 'Leads curriculum design, the autonomous examination system and outcome based accreditation.',
    initials: 'SB',
  },
  {
    name: 'Dr. A. Anwer Hussain',
    role: 'Dean - Research and Development',
    qualification: 'Ph.D., Electronics Engineering',
    focus: 'Heads funded research, the IPR cell and collaboration with national laboratories.',
    initials: 'AH',
  },
  {
    name: 'Dr. K. Sabrina Yasmin',
    role: 'Dean - Student Affairs',
    qualification: 'Ph.D., Management Studies',
    focus: 'Oversees mentoring, clubs, hostels, counselling and the student welfare committee.',
    initials: 'SY',
  },
  {
    name: 'Dr. R. Srimathi',
    role: 'Dean - Examinations and Quality Assurance',
    qualification: 'Ph.D., Applied Mathematics',
    focus: 'Runs the internal quality assurance cell, audits and the autonomous evaluation process.',
    initials: 'SR',
  },
  {
    name: 'Dr. V. Sreedhar',
    role: 'Dean - Training and Placements',
    qualification: 'Ph.D., Mechanical Engineering',
    focus: 'Builds recruiter relationships, internships and the four year employability training path.',
    initials: 'SD',
  },
]

export const faculty = [
  { name: 'Dr. S. Shameera Begum', role: 'Professor & Head', dept: 'Computer Science and Engineering', area: 'Machine learning, software testing', exp: '22 years', initials: 'SB' },
  { name: 'Dr. R. Srimathi', role: 'Professor & Head', dept: 'Artificial Intelligence and Data Science', area: 'Data mining, applied statistics', exp: '19 years', initials: 'SR' },
  { name: 'Dr. A. Anwer Hussain', role: 'Professor & Head', dept: 'Electronics and Communication', area: 'VLSI design, embedded systems', exp: '21 years', initials: 'AH' },
  { name: 'Dr. V. Sreedhar', role: 'Professor & Head', dept: 'Mechanical Engineering', area: 'Thermal engineering, additive manufacturing', exp: '18 years', initials: 'SD' },
  { name: 'Dr. K. Sabrina Yasmin', role: 'Professor & Head', dept: 'Management Studies', area: 'Organisational behaviour, marketing analytics', exp: '17 years', initials: 'SY' },
  { name: 'Dr. M. Thameem Ansari', role: 'Professor', dept: 'Civil Engineering', area: 'Structural health monitoring', exp: '24 years', initials: 'TA' },
  { name: 'Prof. F. Shameera Banu', role: 'Associate Professor', dept: 'Information Technology', area: 'Cloud computing, DevOps', exp: '13 years', initials: 'SB' },
  { name: 'Prof. N. Anwer Basha', role: 'Associate Professor', dept: 'Electrical and Electronics', area: 'Power electronics, smart grids', exp: '14 years', initials: 'AB' },
  { name: 'Prof. G. Srimathi Devi', role: 'Associate Professor', dept: 'Mathematics', area: 'Graph theory, optimisation', exp: '12 years', initials: 'SD' },
  { name: 'Prof. P. Sreedhar Reddy', role: 'Assistant Professor', dept: 'Mechatronics', area: 'Robotics, control systems', exp: '9 years', initials: 'SR' },
  { name: 'Prof. H. Sabrina Farhath', role: 'Assistant Professor', dept: 'English and Communication', area: 'Technical communication, soft skills', exp: '8 years', initials: 'SF' },
  { name: 'Prof. J. Thameem Sultan', role: 'Assistant Professor', dept: 'Physics', area: 'Nanomaterials, thin films', exp: '10 years', initials: 'TS' },
]

export const facultyDepartments = [
  'All departments',
  ...Array.from(new Set(faculty.map((f) => f.dept))),
]

export const admissionSteps = [
  { step: '01', title: 'Apply online', text: 'Fill the application form on this website or at the admission office. A single form covers all programmes you are eligible for.' },
  { step: '02', title: 'Upload documents', text: 'Marksheets, transfer certificate, community certificate, entrance score card and a passport size photograph.' },
  { step: '03', title: 'Counselling and interaction', text: 'Shortlisted candidates attend a counselling session with the department head and a parent interaction.' },
  { step: '04', title: 'Confirm your seat', text: 'Pay the first instalment, collect the student handbook and complete hostel and transport registration.' },
]

export const importantDates = [
  { date: '15 March 2026', event: 'Online application opens for the 2026-27 academic year' },
  { date: '30 May 2026', event: 'Last date to submit the completed application' },
  { date: '12 June 2026', event: 'Merit list and scholarship list published' },
  { date: '24 - 28 June 2026', event: 'Counselling and seat allotment' },
  { date: '15 July 2026', event: 'Orientation programme and commencement of classes' },
]

export const fees = [
  { programme: 'B.E. / B.Tech (all branches)', tuition: '₹ 85,000', exam: '₹ 4,500', total: '₹ 89,500 per year' },
  { programme: 'M.E. / M.Tech', tuition: '₹ 62,000', exam: '₹ 4,500', total: '₹ 66,500 per year' },
  { programme: 'MCA', tuition: '₹ 58,000', exam: '₹ 4,000', total: '₹ 62,000 per year' },
  { programme: 'MBA', tuition: '₹ 70,000', exam: '₹ 4,000', total: '₹ 74,000 per year' },
]

export const scholarships = [
  { name: 'Founder\'s merit scholarship', detail: '100% tuition waiver for the top ten rank holders in each entering batch.' },
  { name: 'Merit cum means award', detail: '50% tuition waiver for students with above 85% in +2 and family income below ₹ 3 lakh.' },
  { name: 'Sports and cultural grant', detail: 'Up to 40% waiver for state and national level representation.' },
  { name: 'Alumni supported fund', detail: 'Laptop, hostel and examination fee support for first generation learners.' },
]

export const facilities = [
  { name: 'Central library', text: '48,000 volumes, 120 journals, IEEE and Springer digital access and a 24 hour reading hall during examinations.', icon: 'book' },
  { name: 'Laboratories', text: '52 laboratories including high performance computing, IoT, VLSI, CAD/CAM, structural testing and renewable energy labs.', icon: 'flask' },
  { name: 'Hostels', text: 'Separate residences for men and women with 1,800 beds, wardens, Wi-Fi, mess committee and a resident nurse.', icon: 'home' },
  { name: 'Sports complex', text: 'Cricket and football grounds, a 400 m track, indoor courts, gymnasium and a certified physical director.', icon: 'trophy' },
  { name: 'Transport', text: '38 buses covering Chennai, Chengalpattu, Tambaram and Kanchipuram routes with GPS tracking for parents.', icon: 'bus' },
  { name: 'Health and counselling', text: 'On campus medical room, tie up with a multi speciality hospital and a full time student counsellor.', icon: 'heart' },
]

export const clubs = [
  'Coding Club and ACM Student Chapter',
  'Robotics and Innovation Club',
  'IEEE Student Branch',
  'Entrepreneurship Development Cell',
  'Literary and Debate Society',
  'Fine Arts and Music Club',
  'National Service Scheme (NSS)',
  'Photography and Media Club',
  'Women Empowerment Cell',
]

export const placementStats = [
  { value: '94%', label: 'Students placed in 2025-26' },
  { value: '₹ 21.5 L', label: 'Highest package offered' },
  { value: '₹ 6.2 L', label: 'Average package' },
  { value: '186', label: 'Companies visited campus' },
]

export const recruiters = [
  'Zoho', 'TCS', 'Infosys', 'Wipro', 'HCLTech', 'Cognizant',
  'Freshworks', 'Ashok Leyland', 'L&T Construction', 'Hyundai', 'Amazon', 'Accenture',
]

export const placementTraining = [
  { year: 'First year', text: 'Communication laboratory, aptitude foundation and a career awareness workshop.' },
  { year: 'Second year', text: 'Coding practice sprints, data structures bootcamp and personality development sessions.' },
  { year: 'Third year', text: 'Mock interviews, group discussion practice, internships and certification support.' },
  { year: 'Final year', text: 'Company specific training, resume clinics and on campus recruitment drives.' },
]

export const topOffers = [
  { name: 'Placed student, B.E. CSE', company: 'Zoho Corporation', role: 'Member Technical Staff', package: '₹ 21.5 LPA' },
  { name: 'Placed student, B.Tech AI & DS', company: 'Freshworks', role: 'Data Engineer', package: '₹ 14.0 LPA' },
  { name: 'Placed student, B.E. ECE', company: 'Qualcomm India', role: 'Hardware Engineer', package: '₹ 12.4 LPA' },
  { name: 'Placed student, MBA', company: 'Accenture', role: 'Business Analyst', package: '₹ 9.5 LPA' },
]

export const researchCentres = [
  { name: 'Centre for Applied Artificial Intelligence', lead: 'Dr. R. Srimathi', text: 'Work on medical image analysis, regional language NLP and responsible AI, supported by two funded projects.' },
  { name: 'Centre for VLSI and Embedded Systems', lead: 'Dr. A. Anwer Hussain', text: 'Low power circuit design, FPGA prototyping and an industry sponsored chip design laboratory.' },
  { name: 'Centre for Sustainable Energy', lead: 'Dr. V. Sreedhar', text: 'Solar thermal systems, battery management and energy audits for local industries.' },
  { name: 'Centre for Structural Engineering', lead: 'Dr. M. Thameem Ansari', text: 'Structural health monitoring, sustainable concrete and retrofitting studies for heritage structures.' },
]

export const researchStats = [
  { value: '412', label: 'Scopus indexed papers' },
  { value: '38', label: 'Patents filed' },
  { value: '₹ 4.6 Cr', label: 'Funded projects' },
  { value: '64', label: 'Ph.D. scholars' },
]

export const news = [
  {
    date: '02 September 2026',
    tag: 'Achievement',
    title: 'TIT team wins the state level Smart India Hackathon qualifier',
    text: 'A six member team from the School of Computing built an assistive learning platform and won the regional round held at Chennai.',
  },
  {
    date: '28 August 2026',
    tag: 'Research',
    title: 'Centre for Sustainable Energy receives a ₹ 84 lakh grant',
    text: 'The Department of Science and Technology has sanctioned a three year project on hybrid solar drying systems for farm produce.',
  },
  {
    date: '18 August 2026',
    tag: 'Campus',
    title: 'New innovation and incubation block inaugurated',
    text: 'A 12,000 sq ft facility with prototyping bays, a design studio and twelve start up cabins is now open to students of every year.',
  },
  {
    date: '05 August 2026',
    tag: 'Placement',
    title: 'Placement season 2026-27 opens with 42 offers on day one',
    text: 'Six core companies and eleven software firms completed their first round of drives during the opening week.',
  },
]

export const events = [
  { date: '19 Sep 2026', title: 'TECHNOVA 2026 - National technical symposium', place: 'Main auditorium', text: 'Paper presentations, hackathon, robo race and a project expo open to students from all colleges.' },
  { date: '02 Oct 2026', title: 'Gandhi Jayanti community service drive', place: 'Vandalur and nearby villages', text: 'NSS volunteers conduct a cleanliness drive, health camp and digital literacy sessions.' },
  { date: '14 Oct 2026', title: 'Industry connect: careers in semiconductor design', place: 'Seminar hall, ECE block', text: 'A guest lecture and recruitment briefing by senior engineers from the semiconductor industry.' },
  { date: '07 Nov 2026', title: 'Alumni homecoming and mentorship meet', place: 'Convention centre', text: 'Alumni share career journeys and register as mentors for final year project teams.' },
]

export const notices = [
  'Odd semester internal assessment II timetable published - check the student portal.',
  'Scholarship renewal forms due on 20 September 2026.',
  'Hostel room allotment for the second semester opens on 25 September 2026.',
  'Anti ragging committee meeting scheduled for 30 September 2026.',
]

export const gallery = [
  { title: 'Main academic block', caption: 'The east facade of the 1998 foundation building.', tone: 'from-brand-700 to-brand-900' },
  { title: 'Central library', caption: 'Reading hall with 600 seats and digital access terminals.', tone: 'from-slate-600 to-slate-800' },
  { title: 'Computing laboratory', caption: 'High performance computing lab in the School of Computing.', tone: 'from-brand-500 to-brand-800' },
  { title: 'Convocation 2026', caption: 'The twenty fourth convocation held in March 2026.', tone: 'from-gold-500 to-brand-800' },
  { title: 'Robotics club', caption: 'Students preparing for the national robo race.', tone: 'from-brand-600 to-slate-800' },
  { title: 'Sports meet', caption: 'Annual athletic meet at the 400 m track.', tone: 'from-slate-700 to-brand-700' },
  { title: 'Innovation block', caption: 'Prototyping bays inside the new incubation centre.', tone: 'from-brand-800 to-slate-900' },
  { title: 'Cultural festival', caption: 'Kalaivizha, the annual cultural festival.', tone: 'from-gold-400 to-brand-700' },
  { title: 'Campus greens', caption: 'The 42 acre campus retains over 900 mature trees.', tone: 'from-brand-400 to-brand-800' },
]

export const testimonials = [
  {
    quote: 'The mentor system meant that somebody knew my name from the first week. My mentor pushed me to join a research group in second year and that decided my career.',
    name: 'Alumna, B.E. CSE 2024 batch',
    role: 'Software engineer, Chennai',
  },
  {
    quote: 'As a first generation learner I was worried about fees. The merit cum means award and the earn while you learn scheme made four years possible for my family.',
    name: 'Student, B.E. Mechanical',
    role: 'Final year',
  },
  {
    quote: 'We recruit from Thameem Institute every year because the students arrive with real project experience, not only marks.',
    name: 'Campus recruiter',
    role: 'Technology services company',
  },
]

export const milestones = [
  { year: '1998', text: 'The institute opens with three engineering branches and 180 students.' },
  { year: '2005', text: 'Postgraduate programmes and the first research centre are established.' },
  { year: '2012', text: 'NBA accreditation granted to four undergraduate programmes.' },
  { year: '2017', text: 'Autonomous status conferred; outcome based curriculum introduced.' },
  { year: '2021', text: 'NAAC "A+" grade awarded in the second cycle of accreditation.' },
  { year: '2026', text: 'Innovation and incubation block opens; 6,400 students on campus.' },
]

export const departmentContacts = [
  { name: 'Admissions office', phone: '+91 98400 55120', email: 'admissions@thameemtech.edu.in' },
  { name: 'Examination cell', phone: '+91 44 2275 8112', email: 'exams@thameemtech.edu.in' },
  { name: 'Training and placement', phone: '+91 44 2275 8130', email: 'placement@thameemtech.edu.in' },
  { name: 'Hostel and transport', phone: '+91 44 2275 8145', email: 'hostel@thameemtech.edu.in' },
]

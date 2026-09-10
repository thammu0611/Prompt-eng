const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, PageBreak,
  Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle, LevelFormat, Footer, PageNumber,
} = require('docx')
const fs = require('fs')

const ACCENT = '116649'
const DARK = '0C3F30'
const GREY = '4A5568'
const W = 9026 // usable A4 width in DXA

const P = (text, opts = {}) =>
  new Paragraph({
    spacing: { after: opts.after ?? 120, line: 300 },
    alignment: opts.align,
    indent: opts.indent,
    border: opts.border,
    shading: opts.shading,
    children: [
      new TextRun({
        text,
        size: opts.size ?? 22,
        bold: opts.bold,
        italics: opts.italics,
        color: opts.color ?? '2D3748',
        font: opts.font ?? 'Calibri',
      }),
    ],
  })

const H = (text, level = HeadingLevel.HEADING_1) =>
  new Paragraph({
    heading: level,
    spacing: { before: level === HeadingLevel.HEADING_1 ? 320 : 240, after: 140 },
    children: [
      new TextRun({
        text,
        bold: true,
        size: level === HeadingLevel.HEADING_1 ? 30 : 25,
        color: level === HeadingLevel.HEADING_1 ? DARK : ACCENT,
        font: 'Calibri',
      }),
    ],
  })

const bullet = (text) =>
  new Paragraph({
    numbering: { reference: 'bullets', level: 0 },
    spacing: { after: 80, line: 300 },
    children: [new TextRun({ text, size: 22, color: '2D3748', font: 'Calibri' })],
  })

// A prompt block: label + the prompt text in a shaded box + the result
const promptBlock = (n, title, prompt, result) => [
  new Paragraph({
    spacing: { before: 260, after: 100 },
    children: [
      new TextRun({ text: `Prompt ${n}: `, bold: true, size: 23, color: ACCENT, font: 'Calibri' }),
      new TextRun({ text: title, bold: true, size: 23, color: DARK, font: 'Calibri' }),
    ],
  }),
  new Paragraph({
    spacing: { after: 100, line: 300 },
    indent: { left: 200, right: 200 },
    shading: { type: ShadingType.CLEAR, fill: 'F1F6F3' },
    border: { left: { style: BorderStyle.SINGLE, size: 18, color: ACCENT, space: 8 } },
    children: [new TextRun({ text: prompt, size: 21, italics: true, color: '1A365D', font: 'Calibri' })],
  }),
  new Paragraph({
    spacing: { after: 140, line: 300 },
    children: [
      new TextRun({ text: 'Output obtained: ', bold: true, size: 21, color: GREY, font: 'Calibri' }),
      new TextRun({ text: result, size: 21, color: '2D3748', font: 'Calibri' }),
    ],
  }),
]

const cell = (text, { bold = false, head = false, width, align } = {}) =>
  new TableCell({
    width: { size: width, type: WidthType.DXA },
    shading: { type: ShadingType.CLEAR, fill: head ? DARK : 'FFFFFF' },
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
    children: [
      new Paragraph({
        alignment: align,
        spacing: { after: 0, line: 280 },
        children: [
          new TextRun({
            text,
            bold: bold || head,
            size: 20,
            color: head ? 'FFFFFF' : '2D3748',
            font: 'Calibri',
          }),
        ],
      }),
    ],
  })

const table = (widths, rows) =>
  new Table({
    columnWidths: widths,
    width: { size: W, type: WidthType.DXA },
    rows: rows.map(
      (r, i) =>
        new TableRow({
          tableHeader: i === 0,
          children: r.map((c, j) => cell(c, { head: i === 0, width: widths[j] })),
        })
    ),
  })

const rule = new Paragraph({
  spacing: { after: 200 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: 'CBD5E0', space: 6 } },
  children: [new TextRun({ text: '' })],
})

/* ------------------------------ content ------------------------------ */

const titlePage = [
  new Paragraph({ spacing: { before: 1400, after: 60 }, alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: 'ASSIGNMENT - 1', bold: true, size: 26, color: ACCENT, font: 'Calibri', characterSpacing: 60 })] }),
  new Paragraph({ spacing: { after: 200 }, alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: 'WEBSITE DEVELOPMENT USING PROMPTS', bold: true, size: 44, color: DARK, font: 'Calibri' })] }),
  new Paragraph({ spacing: { after: 500 }, alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: 'For the Educational Domain', size: 26, color: GREY, font: 'Calibri' })] }),
  new Paragraph({ spacing: { after: 100 }, alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: 'PROMPT DOCUMENTATION', bold: true, size: 24, color: ACCENT, font: 'Calibri' })] }),
  new Paragraph({ spacing: { after: 700 }, alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: 'Project: Thameem Institute of Technology - Official Website', size: 24, color: '2D3748', font: 'Calibri' })] }),
  table([3200, 5826], [
    ['Detail', 'Description'],
    ['Assignment title', 'Assignment-1: Website Development Using Prompts - Educational Domain'],
    ['Maximum marks', '100'],
    ['Website developed', 'Thameem Institute of Technology (educational institution website)'],
    ['Number of pages', '11 pages and a 404 page, with shared navigation and footer'],
    ['Technology used', 'React.js, Vite, Tailwind CSS, React Router'],
    ['AI tool used', 'Claude (conversational AI assistant) for prompt based development'],
    ['Submitted by', 'Ridha'],
    ['Date of submission', '10 September 2026'],
  ]),
  new Paragraph({ children: [new PageBreak()] }),
]

const intro = [
  H('1. Objective of the Assignment'),
  P('The objective of this assignment is to design and develop a professional, responsive website for an educational institution using AI prompting techniques, with minimal or no manual coding. The assignment also requires a prompt document that records every prompt given to the AI tool, so that the development process itself can be evaluated along with the finished website.'),
  P('For this submission an educational institution concept was created - Thameem Institute of Technology, an autonomous engineering institution at Vandalur, Chennai. The complete website was produced by prompting an AI assistant, reviewing the generated output, and refining it through follow up prompts.'),

  H('2. Tools and Technology'),
  table([2600, 6426], [
    ['Component', 'Choice and reason'],
    ['AI tool', 'Claude - used for generating the project structure, page layouts, content and styling through natural language prompts'],
    ['Build tool', 'Vite - fast development server and optimised production build'],
    ['UI library', 'React.js 18 - component based structure so the header, footer and cards are written once and reused'],
    ['Routing', 'React Router 6 - client side navigation between the eleven pages'],
    ['Styling', 'Tailwind CSS 3 - utility classes with a custom emerald and slate theme defined in the config file'],
    ['Icons and images', 'Hand written inline SVG icons and CSS gradients, so the site has no external image dependency'],
  ]),

  H('3. Prompting Methodology'),
  P('The website was not produced from a single prompt. A staged approach was followed, because each stage gives the AI tool the context it needs for the next one:'),
  bullet('Stage 1 - Planning: describe the institution, the audience and the list of pages required.'),
  bullet('Stage 2 - Setup: prompt for the project scaffold, the Tailwind theme and the routing structure.'),
  bullet('Stage 3 - Shared components: prompt for the navigation bar, footer and reusable section blocks.'),
  bullet('Stage 4 - Page by page generation: one prompt per page, describing the sections that page must contain.'),
  bullet('Stage 5 - Refinement: prompts to fix spacing, mobile behaviour, contrast and content wording.'),
  bullet('Stage 6 - Verification: prompts to check responsiveness, navigation links and the identification details.'),
  P('Two rules were followed while writing prompts. First, every prompt states the role, the context and the expected output format, rather than a one line instruction. Second, whenever the output was not satisfactory, a corrective prompt was written naming the exact problem instead of asking the tool to "try again".'),
  new Paragraph({ children: [new PageBreak()] }),
]

const promptLogIntro = [
  H('4. Prompt Log'),
  P('The table below summarises the prompts in the order they were used. The full text of each prompt is given in the sections that follow.'),
  table([900, 3300, 4826], [
    ['No.', 'Purpose', 'Stage'],
    ['1', 'Define the institution and page list', 'Planning'],
    ['2', 'Create the React + Vite + Tailwind project structure', 'Setup'],
    ['3', 'Define the colour theme and typography', 'Setup'],
    ['4', 'Build the navigation bar', 'Shared components'],
    ['5', 'Build the footer with identification details', 'Shared components'],
    ['6', 'Build the home page', 'Page generation'],
    ['7', 'Build the about page', 'Page generation'],
    ['8', 'Build the academics page', 'Page generation'],
    ['9', 'Build the admissions page with an enquiry form', 'Page generation'],
    ['10', 'Build the faculty page with dean and staff details', 'Page generation'],
    ['11', 'Build the campus life page', 'Page generation'],
    ['12', 'Build the placements page', 'Page generation'],
    ['13', 'Build the research page', 'Page generation'],
    ['14', 'Build the news and events page', 'Page generation'],
    ['15', 'Build the gallery page', 'Page generation'],
    ['16', 'Build the contact page with a map panel and form', 'Page generation'],
    ['17', 'Separate all content into a single data file', 'Refinement'],
    ['18', 'Fix mobile responsiveness', 'Refinement'],
    ['19', 'Improve accessibility and contrast', 'Refinement'],
    ['20', 'Final verification of the whole website', 'Verification'],
  ]),
  new Paragraph({ children: [new PageBreak()] }),
]

const prompts = [
  [1, 'Planning the institution and the page list',
    '"I have to build a website for an educational institution as a college assignment. The institution is Thameem Institute of Technology, a fictional autonomous engineering college in Chennai, India. Suggest the complete page list that a real engineering college website would have, and for each page list the sections it should contain. Keep it realistic for an Indian technical institution - include admissions, placements and research."',
    'A structure of eleven pages was proposed - home, about, academics, admissions, faculty, campus life, placements, research, news and events, gallery and contact - with the sections each page should contain. This became the plan for the rest of the work.'],

  [2, 'Creating the project structure',
    '"Create a React.js project using Vite and Tailwind CSS for this college website. Set up React Router with routes for the eleven pages we planned. Use a folder structure with src/components for shared parts, src/pages for the page files and src/data for the content. Give me the package.json, vite.config.js, tailwind.config.js, postcss.config.js, index.html, main.jsx and App.jsx."',
    'The complete project scaffold was generated with routing configured for all eleven pages, a 404 route, and Tailwind wired through PostCSS. HashRouter was used so the built site also runs when opened directly from a file.'],

  [3, 'Defining the visual theme',
    '"Design the visual identity for this college website in the Tailwind config. Use a deep emerald green as the primary colour with slate grey text and a warm off white background, and a muted gold as the accent for highlights. Add a custom colour scale from 50 to 950 for the brand colour. Use Playfair Display for headings and Inter for body text from Google Fonts. Also create reusable component classes for buttons, cards, section titles and form fields."',
    'A custom brand colour scale, a gold accent, two font families and a set of reusable classes (btn-primary, btn-gold, card, eyebrow, field, container-x) were added, so every page uses the same design language.'],

  [4, 'Building the navigation bar',
    '"Create a sticky navigation bar component for the college website. It should have a top utility strip showing the campus address, phone number and email on desktop only, and below it the logo with the institute name and tagline, the main menu links, and a contact button. Since there are eleven pages, show six main links and put the rest inside a More dropdown. On mobile, collapse everything into a hamburger menu that lists all pages. Highlight the link of the page that is currently open."',
    'A responsive Navbar component with an active link state, a dropdown for secondary pages and a full mobile menu that closes automatically when a link is selected.'],

  [5, 'Building the footer with identification details',
    '"Create the footer for the website. It should have four columns - the institute logo with a short description and accreditation line, quick links to all eleven pages, contact details with icons, and a bottom strip with the copyright. The assignment requires my identification to be visible, so add the line \'Website designed and developed by Ridha\' in the bottom strip of every page."',
    'A four column footer on a dark green background with the developer credit displayed on every page of the website, satisfying the identification requirement of the assignment.'],

  [6, 'Building the home page',
    '"Build the home page for Thameem Institute of Technology. Include a hero section with the tagline knowledge, character and service, an admissions open badge, two call to action buttons and an at a glance statistics panel with the counselling helpline. Below the hero add three quick link tiles, an about snippet with a quote from the Dean of Academics, four commitment cards, the four schools of study, a dark placement statistics band with recruiter names, latest news with upcoming events, testimonials and a closing call to action."',
    'A complete home page with ten distinct sections. All numbers, names and text are consistent with the rest of the site because they are read from one shared data file.'],

  [7, 'Building the about page',
    '"Build the about page. It needs the history of the institute written as three paragraphs covering its founding in 1998, its growth and its present size, an institute at a glance information panel, separate cards for vision, mission and values, a vertical timeline of six milestones from 1998 to 2026, profile cards for the chairman and the five deans, and a strip of key statistics. Write the history in plain, believable language, not marketing language."',
    'An about page with a timeline, a leadership section and a factual tone. The developer credit is repeated here in a project information box.'],

  [8, 'Building the academics page',
    '"Build the academics page. Show the four schools of study with their departments and intake, then a table of all programmes with level, duration, intake and eligibility. Add filter buttons above the table so the visitor can switch between all levels, undergraduate, postgraduate and research. Below that explain the academic model in four points and show the academic calendar for 2026-27 as a list of dates and events. Make the table scroll horizontally on small screens."',
    'A filterable programme table built with React state, plus an academic calendar. The table is wrapped in a horizontally scrollable container so it does not break the mobile layout.'],

  [9, 'Building the admissions page',
    '"Build the admissions page with a four step admission process, an eligibility list, a timeline of important dates for 2026-27, a fee structure table, four scholarship cards, and an application enquiry form. The form should collect name, mobile number, email, programme, qualifying percentage and a message. Use React state for the form and show a confirmation message after submission, with a note that it is a demonstration form and no data is sent anywhere."',
    'A complete admissions page with a working controlled form. The programme dropdown is generated from the same programme list used on the academics page, so the two pages can never disagree.'],

  [10, 'Building the faculty page with the dean and staff details',
    '"Build the faculty page. The leadership team and the faculty must use these names only - Thameem, Shameera, Anwer, Sabrina, Srimathi and Sreedhar. Give each of them a full Indian style name, a role such as Founder and Chairman or Dean of Academics, a qualification and a one line responsibility. Then build a faculty directory of twelve teachers using the same six names with different initials and departments, showing role, department, area of specialisation and years of experience. Add filter buttons so the directory can be filtered by department."',
    'A leadership section with the chairman and five deans, and a filterable directory of twelve faculty members. Initials are shown in a coloured avatar circle so no photographs are required.'],

  [11, 'Building the campus life page',
    '"Build the campus life page with six facility cards for the library, laboratories, hostels, sports complex, transport and health and counselling. Add a section listing the nine student clubs as pill shaped tags, a table showing how a day on campus runs from 6 am to 7 pm, and four cards on student welfare and safety covering counselling, anti ragging, grievance redressal and the women empowerment cell."',
    'A campus life page that covers facilities, clubs, daily routine and the statutory committees that a real institution website lists.'],

  [12, 'Building the placements page',
    '"Build the placements page. Start with four statistics - placement percentage, highest package, average package and number of companies. Then show the four year training path from first year to final year, a grid of twelve recruiter names, a table of notable offers for 2025-26, and two panels at the end, one for recruiters explaining the campus facilities and one for students explaining the eligibility rules. Do not use real student names in the offers table, write the programme instead."',
    'A placements page with statistics, a training roadmap and an offers table. Student names are deliberately withheld and a privacy note explains why.'],

  [13, 'Building the research page',
    '"Build the research page with four statistics on publications, patents, funded projects and doctoral scholars, four research centre cards each naming the faculty member who leads it, a section describing the Ph.D. programme in four points, and a list of five recent funded projects with the funding agency, amount and duration."',
    'A research page that links back to the same faculty names used on the faculty page, keeping the site internally consistent.'],

  [14, 'Building the news and events page',
    '"Build the news and events page. Show four news articles with a category tag, a date, a heading and a short paragraph. Add a sidebar with a notice board of four current notices and a subscribe box for the monthly bulletin. Below that list four upcoming events with the date in a coloured box, the venue and a register button."',
    'A newsroom page with a notice board sidebar and an events list, matching the layout used by real college websites.'],

  [15, 'Building the gallery page',
    '"Build a gallery page with nine campus photographs. I do not want to depend on external image files, so create the tiles using CSS gradients in the brand colours with the title and caption over the bottom of each tile. When a tile is clicked, open a lightbox showing the larger tile with its caption and a close button. Make the lightbox close when the background is clicked as well."',
    'A nine tile gallery with a working lightbox, built entirely with gradients so the website has no external image dependency and loads instantly.'],

  [16, 'Building the contact page',
    '"Build the contact page with four information cards for address, telephone, email and office hours, a contact form with name, email, subject and message that shows a confirmation after submission, a campus location panel drawn with a CSS grid pattern instead of an embedded map, directions by train, bus and air, and a list of four department contacts with phone numbers and email addresses."',
    'A contact page with a working form and a map style panel. The developer identification is repeated at the bottom of this page as well.'],

  [17, 'Separating the content from the components',
    '"Move every piece of text, name, number and list used across the website into a single file at src/data/site.js and import it into the pages. I want to be able to change the institute name, the staff names or the fee structure by editing one file only."',
    'All content was extracted into src/data/site.js, which now holds the institute details, leadership, faculty, programmes, fees, facilities, placements, research, news, events and gallery data. This also removed duplicated text between pages.'],

  [18, 'Fixing mobile responsiveness',
    '"Check the whole website at a mobile width of 390 pixels. The page must not scroll sideways on any screen. Make the wide tables scroll inside their own container, stack the multi column grids into a single column, reduce the heading sizes on small screens, and make sure the mobile menu button and the hamburger icon are large enough to tap."',
    'Responsive fixes across all pages - grids collapse to one column, tables scroll inside their own container, and the layout was verified at 390 pixels with no horizontal overflow.'],

  [19, 'Improving readability and accessibility',
    '"Review the site for accessibility. Add aria labels to the menu button and the navigation, connect every form input to its label, make sure the text on the dark green sections has enough contrast, and add a visible hover and focus state to every button and link."',
    'Labels were linked to inputs using htmlFor and id, aria attributes were added to the menu controls, and hover and focus states were standardised through the shared button classes.'],

  [20, 'Final verification',
    '"Go through the finished website page by page. Confirm that all eleven links in the navigation and the footer open the correct page, that the developer credit appears on every page, that the filters on the academics and faculty pages work, that both forms show their confirmation message, and that there are no console errors in the production build."',
    'All eleven routes were opened and checked, the filters and forms were tested, the production build compiled without errors, and the developer credit was confirmed on every page through the shared footer.'],
]

const closing = [
  H('6. Website Structure Delivered'),
  table([2400, 6626], [
    ['Page', 'Main sections'],
    ['Home', 'Hero, quick links, about snippet, four commitments, schools, placement band, news, events, testimonials, call to action'],
    ['About', 'History, institute at a glance, vision, mission and values, milestone timeline, chairman and deans, statistics'],
    ['Academics', 'Four schools, filterable programme table, academic model, academic calendar 2026-27'],
    ['Admissions', 'Four step process, eligibility, important dates, fee table, scholarships, enquiry form, document checklist'],
    ['Faculty', 'Chairman and five deans, filterable faculty directory, faculty development'],
    ['Campus Life', 'Six facilities, nine student clubs, a day on campus, welfare and safety'],
    ['Placements', 'Statistics, four year training path, recruiters, notable offers, recruiter and student information'],
    ['Research', 'Research statistics, four centres, Ph.D. programme, funded projects'],
    ['News & Events', 'News articles, notice board, subscribe box, upcoming events'],
    ['Gallery', 'Nine campus tiles with a lightbox'],
    ['Contact', 'Contact cards, enquiry form, campus location panel, directions, department contacts'],
  ]),

  H('7. Observations on Prompt Based Development'),
  bullet('Detailed prompts produce usable output on the first attempt. A prompt that names the sections, the data each section holds and the behaviour expected saves several rounds of correction.'),
  bullet('Context has to be carried forward. Because the earlier prompts had established the theme and the shared components, later page prompts only needed to describe the content of that page.'),
  bullet('Corrective prompts must name the defect. "The table breaks the layout on mobile" produced a working fix, while a general request to improve the page did not.'),
  bullet('Content and code are best separated. Asking for all content to be moved into one data file made later corrections much faster, because a wording change no longer meant editing a component.'),
  bullet('The AI tool does not replace review. Every generated page was opened and checked, and the responsiveness and navigation were verified manually before submission.'),

  H('8. Conclusion'),
  P('The complete website for Thameem Institute of Technology - eleven pages with shared navigation and footer, two working forms, two filterable listings and a gallery with a lightbox - was developed entirely through the twenty prompts recorded in this document, using React.js, Vite and Tailwind CSS. No page was written manually from scratch; manual effort was limited to reviewing the generated output and writing the corrective prompts listed above.'),
  P('The exercise showed that the quality of a generated website depends almost entirely on the quality of the prompt: the clearer the description of the institution, the audience and the sections required, the closer the first output was to the final result.'),
  rule,
  P('Website designed and developed by Ridha.', { bold: true, color: DARK }),
  P('Submitted for Assignment-1: Website Development Using Prompts - Educational Domain, 10 September 2026.', { size: 20, color: GREY }),
]

const doc = new Document({
  creator: 'Ridha',
  title: 'Prompt Documentation - Thameem Institute of Technology Website',
  description: 'Prompt document for Assignment-1: Website Development Using Prompts',
  numbering: {
    config: [
      {
        reference: 'bullets',
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: '•',
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 460, hanging: 260 } } },
          },
        ],
      },
    ],
  },
  sections: [
    {
      properties: { page: { margin: { top: 1300, bottom: 1300, left: 1440, right: 1440 } } },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: 'Prompt Documentation | Thameem Institute of Technology | Ridha | Page ', size: 18, color: '718096', font: 'Calibri' }),
                new TextRun({ children: [PageNumber.CURRENT], size: 18, color: '718096', font: 'Calibri' }),
              ],
            }),
          ],
        }),
      },
      children: [
        ...titlePage,
        ...intro,
        ...promptLogIntro,
        H('5. Prompts Used, in Order'),
        P('Each prompt below is reproduced exactly as it was given to the AI tool, followed by the output obtained from it.'),
        ...prompts.flatMap(([n, t, p, r]) => promptBlock(n, t, p, r)),
        new Paragraph({ children: [new PageBreak()] }),
        ...closing,
      ],
    },
  ],
})

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync('/mnt/user-data/outputs/Prompt-Document-Thameem-Institute-Website.docx', buf)
  console.log('written', buf.length, 'bytes')
})

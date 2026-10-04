import cvUrl from "./imports/CV_Badr_Mouline_last_version.pdf?url";

const linkedinUrl = "https://www.linkedin.com/in/badr-mouline/?locale=en-US";
const emailUrl = "mailto:badrmouline1@gmail.com";

const projects = [
  {
    number: "01",
    title: "MaVille",
    type: "Software engineering",
    description:
      "A smart-city application that coordinates roadwork between residents, city agents, and contractors using Montreal Open Data.",
    stack: "Java · C4 Architecture · JUnit · Maven",
  },
  {
    number: "02",
    title: "Space Y",
    type: "Data science",
    description:
      "A machine learning model inspired by SpaceX, designed to estimate rocket landing success, cost, and reusability.",
    stack: "Python · Machine Learning · Data visualization",
  },
  {
    number: "03",
    title: "Cyclist Case Study",
    type: "Data analytics",
    description:
      "An end-to-end analysis of cyclist behavior, from data collection and cleaning to statistical validation and visual storytelling.",
    stack: "R · Data analysis · Statistics · Visualization",
  },
  {
    number: "04",
    title: "OCR Document System",
    type: "Computer vision",
    description:
      "An optical character recognition solution that extracts and processes text from scanned documents and images.",
    stack: "Python · OpenCV · Tesseract · Image processing",
  },
  {
    number: "05",
    title: "SantéHub",
    type: "Product development",
    description:
      "An accessible and responsive health dashboard for tracking habits, exploring progress, and building better routines.",
    stack: "JavaScript · HTML/CSS · jQuery · Figma",
  },
];

const capabilities = [
  {
    title: "Software engineering",
    text: "Building structured, reliable applications with Java, Python, JavaScript, data structures, and automated testing.",
  },
  {
    title: "Data and AI",
    text: "Machine learning, NLP, statistical analysis, data cleaning, and clear visual communication of complex results.",
  },
  {
    title: "Cloud and tools",
    text: "AWS, Git and GitHub, Maven, SQL databases, Tableau, Power BI, and collaborative development workflows.",
  },
  {
    title: "Product thinking",
    text: "Figma prototyping, accessibility, user-centered design, and attention to simple, useful digital experiences.",
  },
];

const credentials = [
  ["AWS Cloud Solutions Architect", "Amazon Web Services"],
  ["IBM Data Science", "IBM"],
  ["Google Data Analytics", "Google"],
  ["Google UX Design", "Google"],
  ["Python 3 Programming", "University of Michigan"],
  ["Introduction to Machine Learning", "Duke University"],
];

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 19 19 5M9 5h10v10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
        {eyebrow}
      </p>
      <h2 className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-6xl">
        {title}
      </h2>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="fixed inset-x-0 top-0 z-30 border-b border-black/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a className="text-sm font-semibold tracking-tight" href="#home">
            Badr Mouline
          </a>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 text-sm text-neutral-600 md:flex"
          >
            <a className="transition-colors hover:text-black" href="#work">
              Work
            </a>
            <a className="transition-colors hover:text-black" href="#about">
              About
            </a>
            <a className="transition-colors hover:text-black" href="#experience">
              Experience
            </a>
          </nav>
          <a
            className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </header>

      <main>
        <section
          className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-5 pb-16 pt-28 text-center sm:px-8 lg:px-12"
          id="home"
        >
          <div className="flex w-full max-w-5xl flex-col items-center">
            <div className="mb-10 flex items-center gap-3 text-sm text-neutral-600">
              <span className="h-2 w-2 rounded-full bg-black" />
              Montreal, Canada
            </div>
            <h1 className="text-6xl font-medium leading-none tracking-[-0.06em] sm:text-8xl lg:text-9xl">
              Badr Mouline
            </h1>
            <p className="mt-7 font-['Instrument_Serif'] text-2xl italic leading-tight text-neutral-600 sm:text-4xl">
              Computer Science Student
            </p>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.12em] text-neutral-500 sm:text-base">
              Software Engineering · Data Science · AI
            </p>
            <p className="mt-9 max-w-2xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
              Building thoughtful software and data-driven products with a
              focus on clarity, reliability, and real-world impact.
            </p>
            <a
              className="group mt-10 flex items-center gap-3 text-sm font-semibold"
              href="#work"
            >
              View selected work
              <span className="grid h-10 w-10 place-items-center rounded-full border border-black transition-colors group-hover:bg-black group-hover:text-white">
                <Arrow className="h-4 w-4" />
              </span>
            </a>
          </div>
        </section>

        <section className="border-t border-black bg-black text-white" id="work">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <div className="flex flex-col gap-8 border-b border-white/25 pb-12 md:flex-row md:items-end md:justify-between">
              <SectionHeading eyebrow="01 / Selected work" title="Projects built to solve real problems." />
              <p className="max-w-sm leading-relaxed text-neutral-400">
                Academic and personal projects across software engineering,
                data science, and product development.
              </p>
            </div>

            <div>
              {projects.map((project) => (
                <article
                  className="grid gap-6 border-b border-white/25 py-10 md:grid-cols-[0.15fr_0.55fr_1fr] md:gap-10 lg:py-14"
                  key={project.title}
                >
                  <p className="font-mono text-xs text-neutral-500">
                    {project.number}
                  </p>
                  <div>
                    <p className="mb-3 text-xs uppercase tracking-[0.16em] text-neutral-500">
                      {project.type}
                    </p>
                    <h3 className="text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                      {project.title}
                    </h3>
                  </div>
                  <div>
                    <p className="max-w-2xl text-lg leading-relaxed text-neutral-300">
                      {project.description}
                    </p>
                    <p className="mt-6 font-mono text-xs leading-relaxed text-neutral-500">
                      {project.stack}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
          id="about"
        >
          <SectionHeading
            eyebrow="02 / Capabilities"
            title="Technical depth, with a focus on people."
          />
          <div className="mt-16 grid border-l border-t border-black/15 sm:grid-cols-2">
            {capabilities.map((capability, index) => (
              <article
                className="min-h-64 border-b border-r border-black/15 p-7 sm:p-9"
                key={capability.title}
              >
                <p className="font-mono text-xs text-neutral-400">
                  0{index + 1}
                </p>
                <h3 className="mt-12 text-2xl font-medium tracking-[-0.03em]">
                  {capability.title}
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-neutral-600">
                  {capability.text}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-y border-black/15 py-6 font-mono text-xs uppercase tracking-wider text-neutral-600">
            {[
              "Python",
              "Java",
              "R",
              "SQL",
              "JavaScript",
              "C",
              "HTML/CSS",
              "Machine Learning",
              "AWS",
              "Git/GitHub",
              "Tableau",
              "Power BI",
            ].map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="border-t border-black/15 bg-neutral-50" id="experience">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
              <SectionHeading
                eyebrow="03 / Professional experience"
                title="Experience in real working environments."
              />
              <div className="border-t border-black">
                {[
                  {
                    date: "Oct — Dec 2023",
                    title: "IT Assistant Intern",
                    place: "Ministry of Economy and Finance · Rabat, Morocco",
                    description:
                      "Maintained and upgraded IT equipment, diagnosed network and hardware issues, and supported the administrative management of legal files.",
                  },
                  {
                    date: "Jul — Nov 2023",
                    title: "Accounting Clerk Intern",
                    place: "IT Services Company · Rabat, Morocco",
                    description:
                      "Worked with Sage 100 and Mega Compta, entered invoices, verified balances, and helped prepare payroll and monthly financial statements.",
                  },
                ].map((item) => (
                  <article
                    className="grid gap-3 border-b border-black/15 py-8 sm:grid-cols-[0.36fr_1fr]"
                    key={item.title}
                  >
                    <p className="font-mono text-xs text-neutral-500">{item.date}</p>
                    <div>
                      <h3 className="text-xl font-medium tracking-[-0.02em]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-neutral-600">{item.place}</p>
                      <p className="mt-4 max-w-2xl leading-relaxed text-neutral-500">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-24 grid gap-12 border-t border-black pt-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
                  Education
                </p>
                <p className="mt-5 max-w-sm leading-relaxed text-neutral-600">
                  Academic training in artificial intelligence and computerized
                  management.
                </p>
              </div>
              <div>
                <div className="border-b border-black/15 py-5">
                  <p className="font-medium">
                    BSc in Computer Science — Artificial Intelligence
                  </p>
                  <p className="mt-1 text-sm text-neutral-500">
                    Université de Montréal · 2025 — Present · Excellence
                    Scholarship
                  </p>
                </div>
                <div className="border-b border-black/15 py-5">
                  <p className="font-medium">
                    Diploma in Computerized Management
                  </p>
                  <p className="mt-1 text-sm text-neutral-500">
                    MIAGE Group · 2023 · Valedictorian
                  </p>
                </div>
                <div className="border-b border-black/15 py-5">
                  <p className="font-medium">
                    Professional Qualification Diploma in Data Entry
                  </p>
                  <p className="mt-1 text-sm text-neutral-500">
                    MIAGE Group · 2021
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-20 grid gap-12 border-t border-black pt-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
                  Certifications
                </p>
                <p className="mt-5 max-w-sm leading-relaxed text-neutral-600">
                  Continuous learning across cloud computing, data, and digital
                  product design.
                </p>
              </div>
              <div className="grid gap-x-8 sm:grid-cols-2">
                {credentials.map(([name, issuer]) => (
                  <div className="border-b border-black/15 py-5" key={name}>
                    <p className="font-medium">{name}</p>
                    <p className="mt-1 text-sm text-neutral-500">{issuer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 grid gap-12 border-t border-black pt-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
                  Recognition
                </p>
                <p className="mt-5 max-w-sm leading-relaxed text-neutral-600">
                  Academic awards and languages that support my work in diverse,
                  international teams.
                </p>
              </div>
              <div className="grid gap-x-8 sm:grid-cols-2">
                <div>
                  <p className="border-b border-black pb-3 text-sm font-medium">
                    Awards
                  </p>
                  <div className="border-b border-black/15 py-5">
                    <p className="font-medium">
                      Excellence Scholarship — Talented Students
                    </p>
                    <p className="mt-1 text-sm text-neutral-500">
                      Université de Montréal · 2025–2028
                    </p>
                  </div>
                  <div className="border-b border-black/15 py-5">
                    <p className="font-medium">
                      Valedictorian — Computerized Management
                    </p>
                    <p className="mt-1 text-sm text-neutral-500">
                      MIAGE Group · 2023
                    </p>
                  </div>
                  <div className="border-b border-black/15 py-5">
                    <p className="font-medium">
                      Second in graduating class — Data Entry
                    </p>
                    <p className="mt-1 text-sm text-neutral-500">
                      MIAGE Group · 2021
                    </p>
                  </div>
                </div>
                <div>
                  <p className="border-b border-black pb-3 text-sm font-medium">
                    Languages
                  </p>
                  {[
                    ["French", "Fluent"],
                    ["Arabic", "Fluent"],
                    ["English", "Intermediate"],
                    ["Japanese", "Beginner"],
                  ].map(([language, level]) => (
                    <div
                      className="flex justify-between border-b border-black/15 py-5"
                      key={language}
                    >
                      <p className="font-medium">{language}</p>
                      <p className="text-sm text-neutral-500">{level}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black text-white" id="contact">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
              04 / Get in touch
            </p>
            <div className="mt-8 flex flex-col gap-12 border-b border-white/25 pb-16 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="max-w-5xl text-6xl font-medium leading-[0.9] tracking-[-0.06em] sm:text-8xl lg:text-9xl">
                Let’s make something{" "}
                <span className="font-['Instrument_Serif'] italic">useful.</span>
              </h2>
              <a
                aria-label="Send Badr an email"
                className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-white text-black transition-transform hover:rotate-45 sm:h-24 sm:w-24"
                href={emailUrl}
              >
                <Arrow className="h-8 w-8" />
              </a>
            </div>
            <div className="flex flex-col gap-8 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
              <a className="font-medium hover:underline" href={emailUrl}>
                badrmouline1@gmail.com
              </a>
              <div className="flex gap-7">
                <a
                  className="text-neutral-400 transition-colors hover:text-white"
                  href={linkedinUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
                <a
                  className="text-neutral-400 transition-colors hover:text-white"
                  download
                  href={cvUrl}
                >
                  Download résumé
                </a>
              </div>
              <p className="text-neutral-500">Montreal, Canada</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const portfolio = [
  {
    plan: "Starter Plan",
    pages: "1 to 3 pages",
    demos: [
      {
        title: "Ember & Olive",
        category: "Restaurant · Hospitality",
        image: "/images/ember-optimized.webp",
        description:
          "A stylish restaurant website with menu and reservation experience.",
        url: "https://ember-olive.prabhakarsamitipoguj.workers.dev",
        gradient: "from-orange-600/40 to-red-950/70",
      },
      {
        title: "Lexora Legal",
        category: "Legal · Law Firm Website",
        image: "/images/lexora-optimized.webp",
        description:
          "A refined law firm website highlighting legal services and client enquiries.",
        url: "https://lexora-legalcd.prabhakarsamitipoguj.workers.dev",
        gradient: "from-slate-500/40 to-indigo-950/70",
      },
    ],
  },
  {
    plan: "Professional Plan",
    pages: "Up to 5 pages",
    demos: [
      {
        title: "Auren Interiors",
        category: "Interior Design · Business Website",
        image: "/images/auren.webp",
        description:
          "An elegant digital presence for an interior design studio.",
        url: "https://vebnora-interior-demo.prabhakarsamitipoguj.workers.dev",
        gradient: "from-amber-600/40 to-orange-950/70",
      },
      {
        title: "Everwell Dental Studio",
        category: "Healthcare · Dental Website",
        image: "/images/everwell.webp",
        description:
          "A welcoming dental clinic website presenting treatments and appointments.",
        url: "https://everwell-dental.prabhakarsamitipoguj.workers.dev",
        gradient: "from-cyan-600/40 to-blue-950/70",
      },
    ],
  },
  {
    plan: "Business Plus Plan",
    pages: "Up to 7 pages",
    demos: [
      {
        title: "Havenstone Realty",
        category: "Real Estate · Property Website",
        image: "/images/havenstone.webp",
        description:
          "A professional real estate website designed to present properties.",
        url: "https://havenstone-realty.prabhakarsamitipoguj.workers.dev",
        gradient: "from-emerald-600/40 to-green-950/70",
      },
      {
        title: "Aurelia International School",
        category: "Education · School Website",
        image: "/images/aurelia.webp",
        description:
          "A modern school website showcasing learning, campus facilities and admissions.",
        url: "https://private-school-democd.prabhakarsamitipoguj.workers.dev",
        gradient: "from-purple-600/50 to-violet-950/70",
      },
    ],
  },
];

const faqs = [
  {
    q: "How long will my website take?",
    a: "Starter takes 4–6 days, Professional 7–10 days and Business Plus 12–15 days. The time starts after we receive your content and the advance payment.",
  },
  {
    q: "What do I need to give you?",
    a: "Your business name, logo (if you have one), a few photos, your services or products, contact details and your address. If something is missing, I will guide you.",
  },
  {
    q: "How does payment work?",
    a: "We start with a 50% advance. The remaining amount is paid before your website goes live.",
  },
  {
    q: "Are domain and hosting included?",
    a: "No, they are extra. A domain usually costs around ₹800–1,200 per year and is bought in your own name. For most small business websites, hosting costs very little. I will explain the options and help you set it up.",
  },
  {
    q: "Can I ask for changes after launch?",
    a: "Yes. Small changes are free for 7 days after launch. After that, our maintenance plans take care of updates.",
  },
  {
    q: "Will my website work on mobile phones?",
    a: "Yes. Every website is designed to look neat and load fast on phones, tablets and laptops.",
  },
  {
    q: "Will my website show up on Google?",
    a: "Basic SEO is included, which helps Google understand your website. Rankings depend on competition and time, so no one can promise a number one position.",
  },
  {
    q: "Can you add features like booking or login?",
    a: "Yes. Features like appointment booking, login and admin sections are part of the Business Plus plan.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b18] text-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative mx-auto flex min-h-[650px] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <div className="absolute left-1/2 top-24 -z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

        <div className="relative z-10">
          <span className="inline-flex rounded-full border border-violet-400/30 bg-violet-400/10 px-5 py-2 text-sm text-violet-200">
            ✦ Digital Experiences That Matter
          </span>

          <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-black leading-tight tracking-tight sm:text-6xl md:text-7xl">
            We Build Websites
            <br />
            That Make Your
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              Business Stand Out.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
            We help businesses grow online with modern, beautiful and
            high-performing websites designed to turn visitors into customers.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-8 py-4 font-bold shadow-lg shadow-violet-900/30 transition hover:scale-105"
            >
              Start Your Project ↗
            </a>
            <a
              href="#work"
              className="rounded-full border border-white/20 px-8 py-4 font-bold transition hover:bg-white/10"
            >
              Explore Our Work
            </a>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold">Modern</h2>
              <p className="mt-2 text-sm text-gray-300">Creative Design</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">Responsive</h2>
              <p className="mt-2 text-sm text-gray-300">All Devices</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">Reliable</h2>
              <p className="mt-2 text-sm text-gray-300">Ongoing Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
          What We Do
        </p>
        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Digital Solutions for
          <span className="text-violet-400"> Your Growth.</span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Business Websites",
              description:
                "Professional websites that build trust and showcase your business.",
            },
            {
              number: "02",
              title: "Landing Pages",
              description:
                "Focused pages designed to present your services and generate enquiries.",
            },
            {
              number: "03",
              title: "Website Maintenance",
              description:
                "Ongoing updates and support to keep your website running smoothly.",
            },
          ].map((service) => (
            <div
              key={service.number}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-2 hover:border-violet-400/50"
            >
              <span className="text-sm text-violet-400">{service.number}</span>
              <h3 className="mt-8 text-2xl font-bold">{service.title}</h3>
              <p className="mt-4 leading-7 text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
          Selected Work
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Ideas Into <span className="text-violet-400">Experiences.</span>
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-gray-300">
          Explore our website concepts across different industries. Each demo is
          built to show what is possible in each plan.
        </p>

        <div className="mt-12 space-y-16">
          {portfolio.map((group) => (
            <div key={group.plan}>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-bold">{group.plan} Demos</h3>
                <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-xs font-semibold text-violet-200">
                  {group.pages}
                </span>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {group.demos.map((project) => (
                  <a
                    key={project.title}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex min-h-72 flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${project.gradient} p-6 transition duration-300 hover:-translate-y-2 hover:border-violet-400/50`}
                  >
                    <div className="mb-6 aspect-video overflow-hidden rounded-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <p className="text-sm font-semibold text-violet-200">
                      Live Demo
                    </p>

                    <h4 className="mt-3 text-2xl font-bold">{project.title}</h4>

                    <p className="mt-2 text-xs font-medium uppercase tracking-wider text-gray-300">
                      {project.category}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-gray-300">
                      {project.description}
                    </p>

                    <span className="mt-6 inline-block text-sm font-bold text-violet-200 transition group-hover:translate-x-2">
                      Visit Website ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About - Meet the Founder */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-[320px_1fr] lg:grid-cols-[380px_1fr]">
          <div className="mx-auto w-full max-w-xs md:max-w-none">
            <div className="overflow-hidden rounded-3xl border border-violet-400/30 bg-white/[0.04] p-2">
              <img
                src="/images/founder.jpg"
                alt="S J Prabhakar, Founder and Web Developer at Vebnora"
                width={700}
                height={700}
                loading="lazy"
                className="aspect-square w-full rounded-2xl object-cover"
              />
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
              Meet the Founder
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              S J Prabhakar
            </h2>
            <p className="mt-3 text-lg font-semibold text-violet-300">
              Founder & Web Developer · Hyderabad
            </p>

            <p className="mt-6 max-w-2xl leading-8 text-gray-300">
              Hi, I'm Prabhakar, founder of Vebnora in Hyderabad. I build fast,
              good-looking websites that help small businesses and startups get
              more customers online: shops, clinics, salons, restaurants and
              more.
            </p>
            <p className="mt-4 max-w-2xl leading-8 text-gray-300">
              Your website is built with modern technologies like{" "}
              <span className="font-semibold text-white">Next.js</span> and{" "}
              <span className="font-semibold text-white">React</span>, the same
              tools big companies use. So it loads fast, works perfectly on
              mobile, and shows up better on Google.
            </p>
            <p className="mt-4 max-w-2xl leading-8 text-gray-300">
              No technical headache for you. Tell me about your business, and I
              take care of design, setup and launch, with a clear price and no
              hidden charges.
            </p>
            <p className="mt-4 max-w-2xl font-semibold leading-8 text-white">
              Your business deserves to be found. Let's get it online.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm text-violet-200">
                Next.js
              </span>
              <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm text-violet-200">
                React
              </span>
              <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm text-violet-200">
                Mobile Friendly
              </span>
              <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm text-violet-200">
                Basic SEO
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
            How We Work
          </p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Simple Process.{" "}
            <span className="text-violet-400">Great Results.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: "01",
              title: "Discover",
              description:
                "We understand your business, goals and requirements.",
            },
            {
              number: "02",
              title: "Design",
              description: "We create a website concept that fits your brand.",
            },
            {
              number: "03",
              title: "Develop",
              description: "We build, test and refine your website.",
            },
            {
              number: "04",
              title: "Launch",
              description:
                "We publish your website and provide handover support.",
            },
          ].map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
            >
              <span className="text-3xl font-black text-violet-400">
                {step.number}
              </span>
              <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Website Maintenance */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-blue-950/80 via-violet-950/60 to-[#080b18] p-8 md:p-14">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
                Ongoing Support
              </p>
              <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
                Your Website.
                <br />
                <span className="text-violet-400">Always Up to Date.</span>
              </h2>
              <p className="mt-6 leading-8 text-gray-300">
                Your website needs attention even after launch. We offer ongoing
                maintenance to help keep your website updated, secure and
                running smoothly.
              </p>
              <Link
                href="/pricing#maintenance"
                className="mt-8 inline-block rounded-full bg-white px-7 py-4 font-bold text-gray-900 transition hover:bg-violet-200"
              >
                View Maintenance Plans ↗
              </Link>
            </div>

            <div className="space-y-4">
              {[
                "Website content updates",
                "Image and text changes",
                "Routine website checks",
                "Technical support",
                "Backup assistance where supported",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/20 text-violet-300">
                    ✓
                  </span>
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-4xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
            FAQ
          </p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Questions? <span className="text-violet-400">Answered.</span>
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 open:border-violet-400/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-2xl text-violet-400 group-open:hidden"
                >
                  +
                </span>
                <span
                  aria-hidden="true"
                  className="hidden shrink-0 text-2xl text-violet-400 group-open:inline"
                >
                  −
                </span>
              </summary>
              <p className="mt-4 leading-7 text-gray-300">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-6 mb-10 rounded-3xl bg-gradient-to-r from-blue-700 to-violet-700 px-6 py-20 md:mx-auto md:max-w-7xl"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-black md:text-5xl">
            Have a Project in Mind?
          </h2>
          <p className="mt-5 text-blue-100">
            Tell us about your project. Let's create something great for your
            business.
          </p>
        </div>

        {/* Direct Contact */}
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
          <a
            href="https://wa.me/919014467699"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-700 px-6 py-3 text-sm font-bold text-white transition hover:scale-105 hover:bg-green-600"
          >
            💬 Chat on WhatsApp
          </a>
          <a
            href="mailto:Prabhakarsamitipoguj@gmail.com"
            className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/20"
          >
            ✉️ Prabhakarsamitipoguj@gmail.com
          </a>
        </div>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="mx-auto mt-10 grid max-w-2xl gap-5 rounded-2xl bg-white p-6 text-gray-900 shadow-2xl md:p-8"
        >
          <input
            type="hidden"
            name="access_key"
            value="0bc0e9a8-86da-4402-a066-cd82fd23d5d7"
          />
          <input
            type="hidden"
            name="subject"
            value="New Vebnora Website Enquiry"
          />
          <input type="hidden" name="from_name" value="Vebnora Website" />
          <input
            type="hidden"
            name="_subject"
            value="New Vebnora Website Enquiry"
          />
          <input type="hidden" name="_captcha" value="true" />
          <input type="hidden" name="_template" value="table" />

          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-semibold">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter your name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-semibold">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label
              htmlFor="website"
              className="mb-2 block text-sm font-semibold"
            >
              Website Type
            </label>
            <select
              id="website"
              name="website"
              required
              defaultValue=""
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-violet-500"
            >
              <option value="" disabled>
                Select website type
              </option>
              <option value="Business Website">Business Website</option>
              <option value="Landing Page">Landing Page</option>
              <option value="E-commerce Website">E-commerce Website</option>
              <option value="Portfolio Website">Portfolio Website</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold"
            >
              Project Details
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-violet-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-blue-700 to-violet-700 px-8 py-4 font-bold text-white transition hover:scale-[1.02]"
          >
            Send Enquiry →
          </button>

          <p className="text-center text-xs text-gray-600">
            We will get back to you as soon as possible.
          </p>
        </form>
      </section>

      <SiteFooter />
    </main>
  );
}

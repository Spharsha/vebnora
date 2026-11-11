import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b18] text-white">
      {/* Navbar */}

      <nav className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/vebnora-logo.png"
            alt="Vebnora"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <a href="#services" className="hover:text-white">
            Services
          </a>
          <a href="#work" className="hover:text-white">
            Samples (Demo)
          </a>
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#pricing" className="hover:text-white">
            Pricing
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>

        {/* Desktop Contact Button */}
        <a
          href="#contact"
          className="hidden rounded-full bg-white px-5 py-3 text-sm font-bold text-gray-900 transition hover:bg-violet-200 md:inline-block"
        >
          Let's Talk ↗
        </a>

        {/* Mobile Navigation */}
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold">
            Menu ☰
          </summary>
          <div className="absolute right-0 top-14 z-50 w-52 rounded-2xl border border-white/10 bg-[#15172a] p-4 shadow-xl">
            <div className="flex flex-col gap-4 text-sm text-gray-300">
              <a href="#services">Services</a>
              <a href="#work">Samples (Demo)</a>
              <a href="#about">About</a>
              <a href="#pricing">Pricing</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </details>
      </nav>

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

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
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
              <h3 className="text-3xl font-bold">Modern</h3>
              <p className="mt-2 text-sm text-gray-400">Creative Design</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">Responsive</h3>
              <p className="mt-2 text-sm text-gray-400">All Devices</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">Reliable</h3>
              <p className="mt-2 text-sm text-gray-400">Ongoing Support</p>
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
              <p className="mt-4 leading-7 text-gray-400">
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

        <p className="mt-5 max-w-2xl leading-7 text-gray-400">
          Explore our website concepts across different industries. Each project
          demonstrates our approach to modern design and user experience.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              number: "Featured Project 01",
              title: "Aurelia International School",
              category: "Education · School Website",
              image: "/images/aurelia.png",
              description:
                "A modern school website showcasing learning, campus facilities and admissions.",
              url: "https://private-school-democd.prabhakarsamitipoguj.workers.dev",
              gradient: "from-purple-600/50 to-violet-950/70",
            },
            {
              number: "Live Demo 02",
              title: "Auren Interiors",
              category: "Interior Design · Business Website",
              image: "/images/auren.png",
              description:
                "An elegant digital presence for an interior design studio.",
              url: "https://vebnora-interior-demo.prabhakarsamitipoguj.workers.dev",
              gradient: "from-amber-600/40 to-orange-950/70",
            },
            {
              number: "Live Demo 03",
              title: "Ember & Olive",
              category: "Restaurant · Hospitality",
              image: "/images/ember.png",
              description:
                "A stylish restaurant website with menu and reservation experience.",
              url: "https://ember-olive.prabhakarsamitipoguj.workers.dev",
              gradient: "from-orange-600/40 to-red-950/70",
            },
            {
              number: "Live Demo 04",
              title: "Havenstone Realty",
              category: "Real Estate · Property Website",
              image: "/images/havenstone.png",
              description:
                "A professional real estate website designed to present properties.",
              url: "https://havenstone-realty.prabhakarsamitipoguj.workers.dev",
              gradient: "from-emerald-600/40 to-green-950/70",
            },
            {
              number: "Live Demo 05",
              title: "Everwell Dental Studio",
              category: "Healthcare · Dental Website",
              image: "/images/everwell.png",
              description:
                "A welcoming dental clinic website presenting treatments and appointments.",
              url: "https://everwell-dental.prabhakarsamitipoguj.workers.dev",
              gradient: "from-cyan-600/40 to-blue-950/70",
            },
            {
              number: "Live Demo 06",
              title: "Lexora Legal",
              category: "Legal · Law Firm Website",
              image: "/images/lexora.png",
              description:
                "A refined law firm website highlighting legal services and client enquiries.",
              url: "https://lexora-legalcd.prabhakarsamitipoguj.workers.dev",
              gradient: "from-slate-500/40 to-indigo-950/70",
            },
          ].map((project) => (
            <a
              key={project.number}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex min-h-72 flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${project.gradient} p-6 transition duration-300 hover:-translate-y-2 hover:border-violet-400/50`}
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-6 h-44 w-full rounded-2xl object-cover"
                />
              )}

              <p className="text-sm font-semibold text-violet-200">
                {project.number}
              </p>

              <h3 className="mt-3 text-2xl font-bold">{project.title}</h3>

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
      </section>

      {/* About - Meet the Founder */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-[320px_1fr] lg:grid-cols-[380px_1fr]">
          <div className="mx-auto w-full max-w-xs md:max-w-none">
            <div className="overflow-hidden rounded-3xl border border-violet-400/30 bg-white/[0.04] p-2">
              <img
                src="/images/founder.jpg"
                alt="S. Prabhakar, Founder and Web Developer at Vebnora"
                className="aspect-square w-full rounded-2xl object-cover"
              />
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
              Meet the Founder
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              S. Prabhakar
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
            <p className="mt-4 max-w-2xl leading-8 text-gray-400">
              Your website is built with modern technologies like{" "}
              <span className="font-semibold text-white">Next.js</span> and{" "}
              <span className="font-semibold text-white">React</span>, the same
              tools big companies use. So it loads fast, works perfectly on
              mobile, and shows up better on Google.
            </p>
            <p className="mt-4 max-w-2xl leading-8 text-gray-400">
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

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
            Simple Pricing
          </p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Plans That Fit Your{" "}
            <span className="text-violet-400">Business.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Flexible website packages to help your business build a strong
            online presence.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Starter",
              price: "₹7,999",
              delivery: "3–5 days",
              description: "For individuals and small businesses.",
              features: [
                "One-page website",
                "Mobile responsive",
                "Contact section",
                "WhatsApp chat button",
                "Basic SEO",
              ],
            },
            {
              name: "Professional",
              price: "₹14,999",
              delivery: "7–10 days",
              description: "For growing businesses.",
              features: [
                "Up to 5 pages",
                "Modern custom design",
                "Contact integration",
                "Google Maps",
                "Basic SEO",
                "Deployment support",
              ],
              popular: true,
            },
            {
              name: "Business Plus",
              price: "₹29,999+",
              delivery: "12–15 days",
              description: "For businesses needing more.",
              features: [
                "Up to 7 pages",
                "Custom design",
                "Custom features with Next.js / React",
                "Advanced sections (booking, login, admin)",
                "Basic SEO",
                "Deployment support",
              ],
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-8 ${
                plan.popular
                  ? "border-violet-400 bg-violet-500/10"
                  : "border-white/10 bg-white/[0.04]"
              }`}
            >
              {plan.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-violet-500 px-3 py-1 text-xs font-bold">
                  POPULAR
                </span>
              )}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="mt-3 text-sm text-gray-400">{plan.description}</p>
              <p className="mt-8 text-4xl font-black">{plan.price}</p>
              <p className="mt-1 text-sm text-gray-500">Starting price</p>
              <p className="mt-4 inline-block rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-1 text-sm font-semibold text-violet-200">
                ⏱ Delivery: {plan.delivery}
              </p>
              <div className="my-8 h-px bg-white/10" />
              <ul className="space-y-4 text-sm text-gray-300">
                {plan.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-10 block rounded-full bg-white px-5 py-3 text-center font-bold text-gray-900 transition hover:bg-violet-200"
              >
                Get Started ↗
              </a>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs leading-6 text-gray-500">
          Indicative starting prices only. Domain, hosting, premium services and
          additional requirements may cost extra. Final pricing depends on
          project scope. Delivery time starts after we receive your content and
          advance payment.
        </p>
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
              <p className="mt-3 text-sm leading-7 text-gray-400">
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
              <a
                href="#contact"
                className="mt-8 inline-block rounded-full bg-white px-7 py-4 font-bold text-gray-900 transition hover:bg-violet-200"
              >
                Ask About Maintenance ↗
              </a>
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

          {/* Maintenance Plans */}
          <div className="mt-12 grid gap-4 border-t border-white/10 pt-10 md:grid-cols-3">
            {[
              {
                name: "Basic",
                price: "₹1,499",
                unit: "/month",
                description:
                  "3 small text or image changes per month, backup and website checks.",
              },
              {
                name: "Standard",
                price: "₹2,999",
                unit: "/month",
                description:
                  "8 changes per month, priority support and a monthly report.",
              },
              {
                name: "Yearly",
                price: "₹14,999",
                unit: "/year",
                description: "Basic plan for a full year, with 2 months free.",
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-6"
              >
                <h3 className="text-lg font-bold">{plan.name}</h3>
                <p className="mt-3 text-3xl font-black">
                  {plan.price}
                  <span className="text-sm font-medium text-gray-400">
                    {plan.unit}
                  </span>
                </p>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {plan.description}
                </p>
              </div>
            ))}
          </div>
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
            className="rounded-full bg-green-500 px-6 py-3 text-sm font-bold text-white transition hover:scale-105 hover:bg-green-600"
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

          <p className="text-center text-xs text-gray-500">
            We will get back to you as soon as possible.
          </p>
        </form>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919014467699"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-110 hover:bg-green-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-8 w-8"
        >
          <path d="M12 2a9.9 9.9 0 0 0-8.5 15l-1 4 4.1-1.1A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.4.6.6-2.3-.2-.4A8 8 0 1 1 12 20Zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8.9-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 3.8 3.4.5.2.9.4 1.2.4.5.2 1 .2 1.4.1.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z" />
        </svg>
      </a>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-gray-500">
        <p className="flex justify-center">
          <img
            src="/images/vebnora-logo.png"
            alt="Vebnora"
            className="h-12 w-auto object-contain"
          />
        </p>
        <p className="mt-2 text-gray-400">
          S. Prabhakar · Founder & Web Developer
        </p>
        <p className="mt-1 text-gray-400">Hyderabad, Telangana, India</p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <a
            href="https://wa.me/919014467699"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 transition hover:text-violet-400"
          >
            💬 WhatsApp
          </a>
          <a
            href="mailto:Prabhakarsamitipoguj@gmail.com"
            className="text-gray-300 transition hover:text-violet-400"
          >
            ✉️ Prabhakarsamitipoguj@gmail.com
          </a>
        </div>
        <div className="mb-4 mt-5 flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/privacy"
            className="text-gray-400 transition hover:text-violet-400"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-gray-400 transition hover:text-violet-400"
          >
            Terms & Conditions
          </Link>
        </div>
        © {new Date().getFullYear()} Vebnora. All rights reserved.
      </footer>
    </main>
  );
}

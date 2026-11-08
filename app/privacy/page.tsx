export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#171222] px-6 py-20 text-[#D8D0E5]">
      <div className="mx-auto max-w-4xl">
        <a
          href="/"
          className="text-sm font-semibold text-[#C5A5EF] transition hover:text-white hover:underline"
        >
          ← Back to Home
        </a>

        <h1 className="mt-10 text-4xl font-black text-white md:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-4 text-sm text-[#A99BBE]">
          Last Updated: November 8, 2026
        </p>

        <p className="mt-8 leading-8">
          At Vebnora, we respect your privacy and are committed to protecting
          the personal information you share with us. This Privacy Policy
          explains what information we collect, how we use it, and how we
          protect it when you visit our website or contact us.
        </p>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold text-[#C5A5EF]">
            1. Information We Collect
          </h2>
          <p className="leading-8">
            When you submit an enquiry through our website, we may collect the
            following information:
          </p>
          <ul className="list-disc space-y-2 pl-6 leading-8">
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your phone number, if provided</li>
            <li>Your preferred website type</li>
            <li>Project details and messages you submit</li>
          </ul>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold text-[#C5A5EF]">
            2. How We Use Your Information
          </h2>
          <p className="leading-8">We use the information you provide to:</p>
          <ul className="list-disc space-y-2 pl-6 leading-8">
            <li>Respond to your enquiries.</li>
            <li>Understand your website requirements.</li>
            <li>Prepare project proposals and quotations.</li>
            <li>Communicate about our services.</li>
            <li>Improve our website and customer experience.</li>
          </ul>
          <p className="leading-8">
            We do not sell your personal information to third parties.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold text-[#C5A5EF]">
            3. Third-Party Services
          </h2>
          <p className="leading-8">
            Our contact form uses Web3Forms to process and deliver enquiry
            submissions to us. Information submitted through the form may be
            processed by Web3Forms under its own privacy practices and policies.
          </p>
          <p className="leading-8">
            Our website is hosted using Cloudflare services. Cloudflare may
            process technical information associated with website requests to
            provide hosting, security, and service functionality.
          </p>
          <p className="leading-8">
            We encourage you to review the privacy policies of these third-party
            service providers.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold text-[#C5A5EF]">
            4. Cookies and Tracking
          </h2>
          <p className="leading-8">
            Vebnora does not currently use Google Analytics, Meta Pixel,
            Cloudflare Web Analytics, or similar analytics and advertising
            tracking tools on this website.
          </p>
          <p className="leading-8">
            We have not intentionally configured analytics or advertising
            cookies. However, our hosting platform and third-party service
            providers may use essential cookies or similar technologies where
            necessary to provide, maintain, and secure their services.
          </p>
          <p className="leading-8">
            The use of such technologies by third-party providers is subject to
            their respective privacy policies.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold text-[#C5A5EF]">
            5. Data Security
          </h2>
          <p className="leading-8">
            We take reasonable steps to protect the information shared with us.
            However, no method of internet transmission or electronic storage is
            completely secure. We cannot guarantee absolute security.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold text-[#C5A5EF]">
            6. Data Retention
          </h2>
          <p className="leading-8">
            We retain enquiry information only for as long as reasonably
            necessary to respond to requests, manage projects, maintain business
            records, and meet applicable legal requirements.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold text-[#C5A5EF]">
            7. Your Privacy Rights
          </h2>
          <p className="leading-8">
            You may contact us to request access to, correction of, or deletion
            of personal information you have shared with us, subject to
            applicable legal requirements.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold text-[#C5A5EF]">
            8. External Links
          </h2>
          <p className="leading-8">
            Our website may contain links to external websites. We are not
            responsible for the privacy practices or content of those websites.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold text-[#C5A5EF]">
            9. Changes to This Policy
          </h2>
          <p className="leading-8">
            We may update this Privacy Policy from time to time. Any changes
            will be published on this page with an updated revision date.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold text-[#C5A5EF]">10. Contact Us</h2>
          <p className="leading-8">
            If you have questions about this Privacy Policy or your personal
            information, contact us:
          </p>
          <p className="font-semibold text-white">
            Email:{" "}
            <a
              href="mailto:prabhakarsamitipoguj@gmail.com"
              className="text-[#C5A5EF] transition hover:text-white hover:underline"
            >
              prabhakarsamitipoguj@gmail.com
            </a>
          </p>
          <p className="leading-8">Website: Vebnora</p>
        </section>

        <div className="mt-16 border-t border-[#49345F] pt-6 text-sm text-[#A99BBE]">
          © {new Date().getFullYear()} Vebnora. All rights reserved.
        </div>
      </div>
    </main>
  );
}

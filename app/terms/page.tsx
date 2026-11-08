import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#171222] px-6 py-20 text-[#D8D0E5]">
      <div className="mx-auto max-w-4xl">
        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center text-sm text-violet-400 transition hover:text-violet-300"
        >
          ← Back to Home
        </Link>

        {/* Header */}
        <div className="mt-12 border-b border-white/10 pb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            Vebnora
          </p>

          <h1 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Terms & Conditions
          </h1>

          <p className="mt-5 text-sm text-gray-400">
            Last Updated: November 8, 2026
          </p>

          <p className="mt-6 leading-8 text-gray-300">
            Welcome to Vebnora. These Terms & Conditions explain the terms under
            which we provide website design, development and related services.
            By requesting or purchasing our services, you agree to these terms.
          </p>
        </div>

        {/* 1 */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-violet-300">
            1. Our Services
          </h2>
          <p className="mt-4 leading-8 text-gray-400">
            Vebnora provides website design, website development, landing pages,
            website maintenance and related digital services. The exact work,
            features and deliverables will be agreed upon with each client
            before a project begins.
          </p>
        </section>

        {/* 2 */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-violet-300">
            2. Pricing and Payments
          </h2>
          <p className="mt-4 leading-8 text-gray-400">
            Project pricing will be shared with the client before work begins.
            Unless a different arrangement is agreed in writing, our standard
            payment schedule is:
          </p>

          <ul className="mt-5 space-y-3 text-gray-400">
            <li className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <strong className="text-white">50% Advance Payment:</strong>{" "}
              Required before project work begins.
            </li>
            <li className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <strong className="text-white">50% Final Payment:</strong> Payable
              when the agreed website work is completed and presented for final
              approval, before final handover or deployment where applicable.
            </li>
          </ul>

          <p className="mt-5 leading-8 text-gray-400">
            Additional features or work outside the agreed project scope may
            involve extra charges. Such charges will be discussed with the
            client before the additional work is started.
          </p>
        </section>

        {/* 3 */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-violet-300">
            3. Project Scope and Changes
          </h2>
          <p className="mt-4 leading-8 text-gray-400">
            The project scope, pages, features and deliverables will be agreed
            upon before development begins. Requests that go beyond the agreed
            scope may require additional time and payment.
          </p>
          <p className="mt-4 leading-8 text-gray-400">
            We will communicate any significant changes in cost or delivery time
            before proceeding with them.
          </p>
        </section>

        {/* 4 */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-violet-300">4. Revisions</h2>
          <p className="mt-4 leading-8 text-gray-400">
            Reasonable design and content revisions within the agreed project
            scope may be included. Major redesigns, new pages or additional
            functionality may be treated as separate work and quoted separately.
          </p>
          <p className="mt-4 leading-8 text-gray-400">
            The number and nature of included revisions will be confirmed in the
            project proposal or written agreement.
          </p>
        </section>

        {/* 5 */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-violet-300">
            5. Cancellations and Refunds
          </h2>
          <p className="mt-4 leading-8 text-gray-400">
            If a client wishes to cancel a project, they should contact Vebnora
            in writing as soon as possible.
          </p>
          <p className="mt-4 leading-8 text-gray-400">
            Payments will be reviewed based on the work already completed, time
            spent, and any non-recoverable costs or third-party expenses
            incurred for the project.
          </p>
          <p className="mt-4 leading-8 text-gray-400">
            Any refund due for work not performed will be assessed fairly and in
            accordance with applicable law and the written project agreement. No
            blanket guarantee of a non-refundable advance payment is intended by
            these terms.
          </p>
        </section>

        {/* 6 */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-violet-300">
            6. Domain and Hosting
          </h2>
          <p className="mt-4 leading-8 text-gray-400">
            Domain registration, hosting, premium themes, paid plugins, email
            services and other third-party services are not included in project
            pricing unless specifically stated.
          </p>
          <p className="mt-4 leading-8 text-gray-400">
            Where required, these costs will be communicated to the client
            separately. Third-party services are subject to their own terms,
            pricing and availability.
          </p>
        </section>

        {/* 7 */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-violet-300">
            7. Client Responsibilities
          </h2>
          <p className="mt-4 leading-8 text-gray-400">
            Clients are responsible for providing accurate business information,
            content, images, logos and other materials required for their
            project.
          </p>
          <p className="mt-4 leading-8 text-gray-400">
            Clients must ensure that they have the necessary rights or
            permissions to use any materials they provide.
          </p>
        </section>

        {/* 8 */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-violet-300">
            8. Ownership and Handover
          </h2>
          <p className="mt-4 leading-8 text-gray-400">
            Subject to full payment and any separate written agreement,
            ownership or usage rights in the custom website deliverables will be
            transferred to the client as agreed for the project.
          </p>
          <p className="mt-4 leading-8 text-gray-400">
            Third-party software, frameworks, fonts, plugins and other licensed
            materials remain subject to their respective licences and terms.
          </p>
        </section>

        {/* 9 */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-violet-300">
            9. Website Maintenance and Support
          </h2>
          <p className="mt-4 leading-8 text-gray-400">
            Ongoing maintenance, updates and technical support are provided only
            where included in the selected package or separately agreed with the
            client.
          </p>
          <p className="mt-4 leading-8 text-gray-400">
            Support does not automatically include major redesigns, additional
            features or work outside the agreed maintenance scope.
          </p>
        </section>

        {/* 10 */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-violet-300">
            10. Third-Party Services
          </h2>
          <p className="mt-4 leading-8 text-gray-400">
            Websites may use third-party services such as hosting providers,
            payment services, email platforms and external integrations. Vebnora
            is not responsible for outages, policy changes or service
            interruptions caused by independent third-party providers.
          </p>
        </section>

        {/* 11 */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-violet-300">
            11. Limitation of Liability
          </h2>
          <p className="mt-4 leading-8 text-gray-400">
            Vebnora will make reasonable efforts to deliver services
            professionally and according to the agreed scope. We do not
            guarantee specific business results, sales, search rankings or
            website traffic.
          </p>
          <p className="mt-4 leading-8 text-gray-400">
            Nothing in these terms excludes or limits liability where such
            exclusion or limitation is not permitted by applicable law.
          </p>
        </section>

        {/* 12 */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-violet-300">
            12. Changes to These Terms
          </h2>
          <p className="mt-4 leading-8 text-gray-400">
            We may update these Terms & Conditions from time to time. Updated
            versions will be published on this page with a revised Last Updated
            date.
          </p>
        </section>

        {/* 13 */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-violet-300">13. Contact Us</h2>
          <p className="mt-4 leading-8 text-gray-400">
            If you have questions about these Terms & Conditions, please contact
            us:
          </p>
          <p className="mt-4 text-gray-300">
            Email:{" "}
            <a
              href="mailto:prabhakarsamitipoguj@gmail.com"
              className="text-violet-400 transition hover:text-violet-300"
            >
              prabhakarsamitipoguj@gmail.com
            </a>
          </p>
        </section>

        {/* Footer */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <Link
            href="/"
            className="text-sm text-violet-400 transition hover:text-violet-300"
          >
            ← Return to Vebnora Home
          </Link>
          <p className="mt-5 text-xs text-gray-500">
            © {new Date().getFullYear()} Vebnora. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}

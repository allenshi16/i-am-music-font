import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How I Am Music Font handles data: everything is generated locally in your browser, plus cookies and Google AdSense advertising disclosures.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <h1>Privacy Policy</h1>
      <p className="legal-updated">Last updated: 2026-09-18</p>

      <h2>Everything runs in your browser</h2>
      <p>
        The generator processes your text entirely on your device. Exported PNG and SVG files are
        created locally and no phrase you type is ever uploaded to us. We do not require an account
        and we do not ask for personal information.
      </p>

      <h2>Cookies and local storage</h2>
      <p>
        We use browser local storage to remember small preferences such as your last style settings.
        This data never leaves your device and can be cleared at any time from your browser
        settings.
      </p>

      <h2>Advertising</h2>
      <p>
        This site may display advertisements served by Google AdSense. Third-party vendors,
        including Google, use cookies to serve ads based on your prior visits to this and other
        websites.
      </p>
      <ul>
        <li>
          Google&apos;s use of advertising cookies enables it and its partners to serve ads based on
          your visits to this site and/or other sites on the Internet.
        </li>
        <li>
          You may opt out of personalized advertising by visiting{" "}
          <a href="https://www.google.com/settings/ads" rel="noopener nofollow">
            Google Ads Settings
          </a>{" "}
          or{" "}
          <a href="https://www.aboutads.info" rel="noopener nofollow">
            www.aboutads.info
          </a>
          .
        </li>
        <li>
          Where required by law (for example in the EEA and the UK), we ask for your consent before
          serving personalized ads, and you can withdraw it at any time.
        </li>
      </ul>
      <p>
        For more information about how Google uses data, see{" "}
        <a href="https://policies.google.com/technologies/partner-sites" rel="noopener nofollow">
          Google&apos;s Privacy &amp; Terms
        </a>
        .
      </p>

      <h2>Changes to this policy</h2>
      <p>If we change this policy materially, we will update the date at the top of this page.</p>
    </main>
  );
}

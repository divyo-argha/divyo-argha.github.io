import { Section } from "@/components/primitives/Section";
import { Portrait } from "@/components/primitives/Portrait";
import { IconMail, IconScholar, IconGithub, IconLinkedin } from "@/components/primitives/Icons";
import { profile, socialLinks } from "@/content/profile";
import styles from "./Hero.module.css";

const IDENTITY_LINE = profile.focusLine.split(" · ").slice(0, 3).join(" · ");

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Email: IconMail,
  "Google Scholar": IconScholar,
  GitHub: IconGithub,
  LinkedIn: IconLinkedin,
};

export function Hero() {
  return (
    <>
      <h1 className="visually-hidden">
        Argha Pratim Saha (Divyo Argha / Argha Saha) — Human-Centered Security &amp; Privacy Researcher
      </h1>

      {/* Mobile profile introduction (< 1040px) */}
      <div className={styles.mobileProfileHeader}>
        <div className={styles.mobilePortraitWrap}>
          <Portrait src="/media/people/portrait.webp" alt="Argha Pratim Saha (Divyo Argha / Argha Saha)" priority />
        </div>

        <div className={styles.mobileProfileMeta}>
          <div className={styles.mobileStatusBadge}>
            <span className={styles.mobileStatusDot} />
            <span>{profile.status}</span>
          </div>
          <p className={styles.mobileIdentityLine}>{IDENTITY_LINE}</p>

          <ul className={styles.mobileSocials}>
            {socialLinks
              .filter((link) => link.label !== "CV (PDF)")
              .map((link) => {
                const Icon = iconMap[link.label];
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className={styles.mobileSocialLink}
                      aria-label={link.label}
                      title={link.label}
                    >
                      {Icon ? <Icon size={16} /> : null}
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>

      <Section
        id="top"
        label="About"
        title="Argha Pratim Saha"
        lede={
          <span className={styles.subtitle}>
            Research Assistant @{" "}
            <a
              href="https://www.bracu.ac.bd/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.academicLink}
            >
              BRAC University
            </a>
          </span>
        }
      >
        {/* Narrative flow - plain, single-column academic intro */}
        <div className={styles.intro}>

          <p className={styles.statement}>
            Hi, I&apos;m <span className={styles.nameAccent}>Argha</span>, pronounced as{" "}
            <span className={styles.pronunciation}>
              Or + gho [think as &quot;ghost&quot; without the &quot;st&quot; :) ]
            </span>
            .
          </p>

          <p className={styles.statement}>
            I am a part-time Research Assistant at{" "}
            <a
              href="https://www.bracu.ac.bd/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.academicLink}
            >
              BRAC University
            </a>
            , where I am advised by{" "}
            <a
              href="https://cse.bracu.ac.bd/faculty_profile/211/dr_farida_chowdhury"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.academicLink}
            >
              Dr. Farida Chowdhury
            </a>
            . I graduated from{" "}
            <a
              href="https://www.sust.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.academicLink}
            >
              Shahjalal University of Science and Technology (SUST)
            </a>{" "}
            in July 2025, where my undergraduate thesis focused on HCI, more specifically, usable
            security education, under the supervision of{" "}
            <a
              href="https://cse.bracu.ac.bd/faculty_profile/211/dr_farida_chowdhury"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.academicLink}
            >
              Dr. Farida Chowdhury
            </a>
            ,{" "}
            <a
              href="https://msferdous.info"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.academicLink}
            >
              Dr. Md Sadek Ferdous
            </a>
            , and{" "}
            <a
              href="https://www.sust.edu/departments/cse/faculty/masum@sust.edu"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.academicLink}
            >
              Md Masum
            </a>
            .
          </p>

          <p className={styles.statement}>
            I&apos;m interested in Usable Security &amp; Privacy and Human-Computer Interaction, where
            I want to understand the human factors behind security and privacy decisions,
            and how context and circumstances shape their security behavior. I&apos;m also
            interested in designing more effective and engaging interventions for users who may be
            more vulnerable to security and privacy risks, and in exploring security problems from both
            human-centered and technical perspectives.
          </p>

          <p className={styles.statement}>
            I’m currently looking for{" "}
            <span className={styles.phdHighlight}>PhD opportunities for Fall 2027</span>.
          </p>
        </div>
      </Section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  Shield, Terminal, Code2, Bug, Lock, Server, Cloud, Cpu, Github, Linkedin, Mail,
  ArrowUpRight, ChevronRight, Sparkles, Activity, Globe, Smartphone, Database,
  GitBranch, Container, Zap, FileSearch, KeyRound, Network, Wrench, BookOpen,
  Award, CheckCircle2, Send,
} from "lucide-react";
import { TerminalWindow } from "@/components/terminal-window";
import { MouseGlow } from "@/components/mouse-glow";
import { Counter } from "@/components/counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samuel Alexander — Penetration Tester & Backend Developer" },
      { name: "description", content: "Portfolio of Samuel Alexander (Alex) — cybersecurity student, penetration tester, backend developer, and security researcher." },
      { property: "og:title", content: "Samuel Alexander — Security Engineer Portfolio" },
      { property: "og:description", content: "Securing applications. Building solutions. Breaking assumptions." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <BackgroundFX />
      <MouseGlow />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Certifications />
        <Journey />
        <Stats />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Background ---------- */
function BackgroundFX() {
  return (
    <>
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 cyber-grid opacity-60" />
        <div
          className="absolute inset-x-0 top-0 h-[80vh]"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="absolute -left-40 top-40 h-[480px] w-[480px] rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(circle, var(--neon), transparent 60%)" }} />
        <div className="absolute -right-40 top-[60vh] h-[420px] w-[420px] rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, var(--cyber), transparent 60%)" }} />
      </div>
    </>
  );
}

/* ---------- Nav ---------- */
const NAV = [
  ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"],
  ["Research", "#research"], ["Certs", "#certs"], ["Contact", "#contact"],
];

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display font-semibold tracking-tight">
          <span className="relative grid h-8 w-8 place-items-center rounded-lg glass">
            <Shield className="h-4 w-4 text-[color:var(--neon)]" />
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-[color:var(--cyber)] animate-pulse-dot" />
          </span>
          <span>alex<span className="text-[color:var(--neon)]">.sec</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {NAV.map(([label, href]) => (
            <a key={href} href={href}
              className="px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition">
              {label}
            </a>
          ))}
        </nav>
        <a href="#contact"
          className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium glass rounded-lg px-3.5 py-2 hover:shadow-[var(--shadow-glow-sm)] transition">
          Hire me <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
const HERO_TAGS = [
  { icon: Bug, label: "Penetration Testing" },
  { icon: Globe, label: "Web Security" },
  { icon: Server, label: "Backend Dev" },
  { icon: KeyRound, label: "API Security" },
  { icon: Smartphone, label: "Android Security" },
];

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 lg:pt-28 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 reveal">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs font-mono text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--cyber)] animate-pulse-dot" />
            Available for security engagements · 2026
          </div>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
            <span className="text-gradient">Securing applications.</span><br />
            <span className="text-gradient">Building solutions.</span><br />
            <span className="text-neon-gradient">Breaking assumptions.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Cybersecurity student, penetration tester, backend developer, and security researcher
            focused on identifying vulnerabilities, building secure systems, and creating innovative
            technology solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium bg-[color:var(--neon)] text-primary-foreground hover:shadow-[var(--shadow-glow)] transition">
              View Projects <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
            </a>
            <a href="#contact"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium glass hover:bg-white/5 transition">
              Contact Me <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {HERO_TAGS.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-1.5 glass rounded-full px-3 py-1.5 text-xs text-muted-foreground">
                <Icon className="h-3.5 w-3.5 text-[color:var(--neon)]" /> {label}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 reveal space-y-4">
          <TerminalWindow />
          <SecurityMetrics />
        </div>
      </div>
    </section>
  );
}

function SecurityMetrics() {
  const metrics = [
    { label: "Threat Posture", value: "Hardened", color: "var(--cyber)" },
    { label: "Active Scans", value: "12", color: "var(--neon)" },
    { label: "Coverage", value: "94%", color: "var(--neon)" },
  ];
  return (
    <div className="glass rounded-xl p-4 grid grid-cols-3 gap-3">
      {metrics.map((m) => (
        <div key={m.label} className="rounded-lg bg-black/30 p-3 hairline">
          <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted-foreground">
            <Activity className="h-3 w-3" style={{ color: m.color }} /> {m.label}
          </div>
          <div className="mt-1.5 font-display text-lg font-semibold" style={{ color: m.color }}>{m.value}</div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Marquee ---------- */
function Marquee() {
  const items = ["OWASP", "Burp Suite", "Nmap", "Metasploit", "Wireshark", "Frida", "Docker", "Django", "Spring Boot", "React", "AWS", "Hashcat"];
  return (
    <div className="border-y border-white/5 bg-black/20 py-5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 flex items-center gap-10 overflow-x-auto no-scrollbar text-xs font-mono uppercase tracking-widest text-muted-foreground">
        <span className="text-[color:var(--neon)]">// trusted toolchain</span>
        {items.map((i) => <span key={i} className="whitespace-nowrap">{i}</span>)}
      </div>
    </div>
  );
}

/* ---------- About ---------- */
const INTERESTS = [
  { icon: Bug, t: "Penetration Testing" },
  { icon: Globe, t: "Web App Security" },
  { icon: Smartphone, t: "Android Security" },
  { icon: Server, t: "Secure Backend Dev" },
  { icon: Cloud, t: "Cloud Security" },
  { icon: KeyRound, t: "API Security" },
  { icon: FileSearch, t: "Vulnerability Research" },
  { icon: Zap, t: "Security Automation" },
];

function About() {
  return (
    <Section id="about" eyebrow="Profile" title="Who Am I?">
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed reveal">
          <p>
            <span className="text-foreground font-medium">Samuel Alexander</span> is a Computer Science student
            passionate about cybersecurity, application security, backend engineering, and vulnerability research.
          </p>
          <p>
            He actively performs security assessments on web and Android applications, explores modern
            attack techniques, and develops secure software solutions.
          </p>
          <p>
            His work combines offensive security knowledge with development expertise — allowing him to
            understand both attacker and defender perspectives.
          </p>
        </div>
        <div className="lg:col-span-5 reveal">
          <ProfileCard />
        </div>
      </div>
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 reveal">
        {INTERESTS.map(({ icon: Icon, t }) => (
          <div key={t} className="group relative glass rounded-xl p-4 hover:bg-white/5 transition overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
              style={{ background: "radial-gradient(120px 80px at 50% 0%, color-mix(in oklab, var(--neon) 25%, transparent), transparent)" }} />
            <Icon className="h-5 w-5 text-[color:var(--neon)] relative" />
            <div className="mt-3 text-sm font-medium relative">{t}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ProfileCard() {
  return (
    <div className="relative glass rounded-2xl p-6 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="relative flex items-center gap-4">
        <div className="relative h-20 w-20 rounded-2xl bg-gradient-to-br from-[color:var(--neon)] to-[color:var(--cyber)] grid place-items-center font-display text-2xl font-bold text-background">
          SA
          <span className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full grid place-items-center bg-background border border-white/10">
            <Shield className="h-3 w-3 text-[color:var(--neon)]" />
          </span>
        </div>
        <div>
          <div className="font-display text-lg font-semibold">Samuel Alexander</div>
          <div className="text-xs text-muted-foreground font-mono">Pentester · Backend Dev · Researcher</div>
        </div>
      </div>
      <dl className="relative mt-6 grid grid-cols-2 gap-3 text-sm">
        {[
          ["Focus", "AppSec / Backend"],
          ["Studying", "Computer Science"],
          ["Stack", "Python · Java · JS"],
          ["Mindset", "Offense ↔ Defense"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-lg bg-black/30 p-3 hairline">
            <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">{k}</dt>
            <dd className="mt-0.5 font-medium">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/* ---------- Skills ---------- */
const SKILLS = [
  {
    icon: Bug, title: "Offensive Security",
    items: [
      ["Web Application Pentesting", 92], ["OWASP Top 10", 95], ["API Security Testing", 88],
      ["Android Application Testing", 80], ["Network Enumeration", 85],
      ["Vulnerability Assessment", 90], ["Threat Modeling", 78], ["Security Research", 82],
    ],
  },
  {
    icon: Code2, title: "Development",
    items: [
      ["Python", 92], ["Java", 80], ["JavaScript", 85], ["Django", 88],
      ["Flask", 80], ["Spring Boot", 75], ["React", 85], ["REST APIs", 90],
    ],
  },
  {
    icon: Wrench, title: "Security Tools",
    items: [
      ["Burp Suite", 92], ["Nmap", 90], ["Wireshark", 80], ["Metasploit", 78],
      ["SQLMap", 85], ["Gobuster / FFUF", 82], ["Hashcat / John", 78], ["Frida / Objection", 75],
    ],
  },
  {
    icon: Cloud, title: "Cloud & Infrastructure",
    items: [
      ["Docker", 85], ["Linux", 92], ["Git", 90], ["AWS Security Basics", 72], ["CI/CD Security", 75],
    ],
  },
] as const;

function Skills() {
  return (
    <Section id="skills" eyebrow="Capabilities" title="Skills & Toolkit"
      subtitle="A practitioner's stack across offensive security, secure development, and infrastructure.">
      <div className="grid md:grid-cols-2 gap-5">
        {SKILLS.map((cat) => (
          <div key={cat.title} className="reveal glass rounded-2xl p-6 hover:shadow-[var(--shadow-glow-sm)] transition">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-[color:var(--neon)]/10 text-[color:var(--neon)]">
                <cat.icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
            </div>
            <ul className="mt-5 space-y-3.5">
              {cat.items.map(([name, pct]) => (
                <li key={name}>
                  <div className="flex justify-between text-sm">
                    <span>{name}</span>
                    <span className="font-mono text-xs text-muted-foreground">{pct}%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-1000"
                      style={{ width: `${pct}%`, background: "linear-gradient(90deg, var(--neon), var(--cyber))" }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Projects ---------- */
const PROJECTS = [
  {
    title: "Conversational SIEM Assistant", tag: "AI · Security Ops",
    desc: "AI-powered security operations assistant that converts natural language into security queries for Elastic and Wazuh.",
    features: ["Natural Language → KQL", "Multi-turn Conversations", "Security Dashboards", "Automated Reporting", "SOAR Integration"],
    stack: ["Python", "Django", "React", "AI"],
    icon: Sparkles,
    href: "#",
  },
  {
    title: "LeetCode Clone Platform", tag: "Full-stack · Sandbox",
    desc: "Coding interview preparation platform with secure multi-language execution and real-time judging.",
    features: ["Multi-language Execution", "Secure Sandbox", "Leaderboards", "User Profiles", "Real-time Judging"],
    stack: ["React", "Django", "Redis", "Docker"],
    icon: Code2,
    href: "#",
  },
  {
    title: "IoT Crash Detection System", tag: "Embedded · Safety",
    desc: "Smart vehicle safety system capable of detecting crashes and sending emergency alerts.",
    features: ["Sensor Fusion", "Emergency Alerts", "Low-latency", "GPS Aware"],
    stack: ["ESP32", "Sensors", "Embedded"],
    icon: Cpu,
    href: "#",
  },
  {
    title: "Smart Pill Dispenser", tag: "Embedded · Health",
    desc: "Automated medicine reminder and dispensing solution for safer adherence.",
    features: ["Scheduled Dispensing", "RTC Sync", "Servo Control", "Alerts"],
    stack: ["ESP32", "RTC", "Servo"],
    icon: Container,
    href: "#",
  },
];

function Projects() {
  return (
    <Section id="projects" eyebrow="Selected Work" title="Featured Projects"
      subtitle="Shipping security-focused tooling and full-stack systems end-to-end.">
      <div className="grid md:grid-cols-2 gap-5">
        {PROJECTS.map((p) => (
          <a key={p.title} href={p.href} target="_blank" rel="noopener noreferrer"
            className="reveal group relative glass rounded-2xl p-6 overflow-hidden hover:-translate-y-0.5 transition block">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
              style={{ background: "radial-gradient(400px 200px at 0% 0%, color-mix(in oklab, var(--neon) 18%, transparent), transparent)" }} />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-widest font-mono text-[color:var(--neon)]">{p.tag}</div>
                <h3 className="mt-1 font-display text-xl font-semibold">{p.title}</h3>
              </div>
              <span className="grid h-10 w-10 place-items-center rounded-lg glass shrink-0">
                <p.icon className="h-5 w-5 text-[color:var(--neon)]" />
              </span>
            </div>
            <p className="relative mt-3 text-sm text-muted-foreground">{p.desc}</p>
            <ul className="relative mt-4 grid grid-cols-2 gap-1.5 text-xs">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-1.5 text-muted-foreground">
                  <CheckCircle2 className="h-3 w-3 text-[color:var(--cyber)]" /> {f}
                </li>
              ))}
            </ul>
            <div className="relative mt-5 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span key={s} className="rounded-md bg-white/5 px-2 py-1 text-[10px] font-mono text-muted-foreground hairline">{s}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Research ---------- */
const RESEARCH = [
  "Android Application Security Testing",
  "Authentication & Session Security",
  "API Security Assessments",
  "Access Control Vulnerabilities",
  "Insecure Data Storage",
  "Mobile Application Analysis",
  "SSL/TLS Security Reviews",
  "Security Architecture Analysis",
];

function Research() {
  return (
    <Section id="research" eyebrow="Field Notes" title="Security Research & Vulnerability Assessments"
      subtitle="A growing body of work across mobile, web, and API surfaces.">
      <div className="relative">
        <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-[color:var(--neon)]/40 to-transparent" />
        <ul className="space-y-4">
          {RESEARCH.map((t, i) => (
            <li key={t} className="reveal relative pl-12 sm:pl-16">
              <span className="absolute left-2 sm:left-4 top-3 grid h-5 w-5 place-items-center rounded-full bg-background hairline">
                <span className="h-2 w-2 rounded-full bg-[color:var(--neon)] animate-pulse-dot" />
              </span>
              <div className="glass rounded-xl p-4 flex items-center justify-between gap-4 hover:bg-white/5 transition">
                <div>
                  <div className="font-mono text-[10px] text-muted-foreground">CASE / 0{i + 1}</div>
                  <div className="mt-0.5 font-medium">{t}</div>
                </div>
                <FileSearch className="h-5 w-5 text-[color:var(--neon)]" />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-8 text-sm text-muted-foreground reveal text-center">
        <Lock className="inline h-3.5 w-3.5 mr-1.5 text-[color:var(--cyber)]" />
        Responsible disclosure and ethical security testing practices are always followed.
      </p>
    </Section>
  );
}

/* ---------- Certifications ---------- */
const CERTS = [
  { t: "TryHackMe — Web Fundamentals", issuer: "TryHackMe", pct: 100, href: "#" },
  { t: "TryHackMe — Metasploit Badge", issuer: "TryHackMe", pct: 100, href: "#" },
  { t: "Junior Penetration Tester Path", issuer: "TryHackMe", pct: 85, href: "#" },
  { t: "Google AI for App Building", issuer: "Google", pct: 100, href: "#" },
  { t: "Intro to Cyber Security Careers", issuer: "Cisco", pct: 100, href: "#" },
];

function Certifications() {
  return (
    <Section id="certs" eyebrow="Credentials" title="Certifications"
      subtitle="Continuous learning across offensive security and modern engineering.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CERTS.map((c) => (
          <div key={c.t} className="reveal glass rounded-2xl p-5 relative overflow-hidden">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground">{c.issuer}</div>
                <h4 className="mt-1 font-medium leading-snug">{c.t}</h4>
              </div>
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-[color:var(--neon)]/10 text-[color:var(--neon)] shrink-0">
                <Award className="h-5 w-5" />
              </span>
            </div>
            <div className="mt-5">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{c.pct === 100 ? "Completed" : "In Progress"}</span>
                <span className="font-mono">{c.pct}%</span>
              </div>
              <div className="mt-1.5 h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${c.pct}%`, background: "linear-gradient(90deg, var(--neon), var(--cyber))" }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Journey ---------- */
const JOURNEY = [
  ["Began programming journey", "Built fundamentals across Python, Java, and the web."],
  ["Entered cybersecurity field", "Hands-on with offensive security primitives and labs."],
  ["Completed penetration testing labs", "Networks, web, and privilege escalation challenges."],
  ["Security research projects", "Deep dives into auth, sessions, and access control."],
  ["Android security assessments", "Frida instrumentation, MASVS-aligned reviews."],
  ["Backend development projects", "Production-grade APIs with Django and Spring Boot."],
  ["AI security project development", "Built a conversational SIEM assistant for SOC ops."],
];

function Journey() {
  return (
    <Section id="journey" eyebrow="Trajectory" title="Experience & Learning Journey">
      <ol className="relative grid md:grid-cols-2 gap-5">
        {JOURNEY.map(([t, d], i) => (
          <li key={t} className="reveal glass rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[color:var(--neon)]">0{i + 1}</span>
              <span className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] uppercase font-mono text-muted-foreground">milestone</span>
            </div>
            <h4 className="mt-3 font-display text-base font-semibold">{t}</h4>
            <p className="mt-1 text-sm text-muted-foreground">{d}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ---------- Stats ---------- */
const STATS = [
  { label: "Security Labs Completed", v: 120, suffix: "+" },
  { label: "Vulnerabilities Identified", v: 45, suffix: "+" },
  { label: "Projects Built", v: 18 },
  { label: "Technologies Learned", v: 30, suffix: "+" },
  { label: "Certifications Earned", v: 5 },
];

function Stats() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass rounded-3xl p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-30" />
          <div className="relative grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {STATS.map((s) => (
              <div key={s.label} className="reveal">
                <div className="font-display text-4xl sm:text-5xl font-semibold text-neon-gradient">
                  <Counter to={s.v} suffix={s.suffix ?? ""} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Blog ---------- */
const BLOG = [
  { cat: "Web Security", t: "Modern XSS in SPA frameworks", icon: Globe },
  { cat: "Android Security", t: "Bypassing root detection with Frida", icon: Smartphone },
  { cat: "API Security", t: "BOLA in REST and GraphQL", icon: KeyRound },
  { cat: "CTF Writeups", t: "HackTheBox: Active Directory chain", icon: Terminal },
  { cat: "Security Research", t: "Session pinning revisited", icon: FileSearch },
  { cat: "Development Notes", t: "Hardening Django by default", icon: Code2 },
];

function Blog() {
  return (
    <Section id="blog" eyebrow="Writing" title="Blog & Writeups"
      subtitle="Notes from the lab — coming soon.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {BLOG.map((b) => (
          <article key={b.t} className="reveal glass rounded-2xl p-5 group hover:bg-white/5 transition">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-widest text-[color:var(--neon)]">
                <b.icon className="h-3 w-3" /> {b.cat}
              </span>
              <span className="text-[10px] font-mono text-muted-foreground">draft</span>
            </div>
            <h4 className="mt-4 font-display text-lg font-semibold">{b.t}</h4>
            <div className="mt-6 flex items-center gap-1.5 text-xs text-muted-foreground">
              <BookOpen className="h-3.5 w-3.5" /> Read soon
              <ArrowUpRight className="h-3.5 w-3.5 ml-auto opacity-0 group-hover:opacity-100 transition" />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <Section id="contact" eyebrow="Get in touch" title="Let's Build Something Secure"
      subtitle="Available for security assessments, backend engineering, and research collaborations.">
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 space-y-3 reveal">
          {[
            { icon: Mail, label: "Email", v: "alex@samuelalexander.dev" },
            { icon: Github, label: "GitHub", v: "github.com/samuelalexander" },
            { icon: Linkedin, label: "LinkedIn", v: "linkedin.com/in/samuelalexander" },
            { icon: Shield, label: "TryHackMe", v: "tryhackme.com/p/samuelalexander" },
          ].map((c) => (
            <a key={c.label} href="#"
              className="flex items-center gap-3 glass rounded-xl p-4 hover:bg-white/5 transition group">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-[color:var(--neon)]/10 text-[color:var(--neon)]">
                <c.icon className="h-5 w-5" />
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground">{c.label}</div>
                <div className="text-sm truncate">{c.v}</div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition" />
            </a>
          ))}
        </div>
        <form className="lg:col-span-3 glass rounded-2xl p-6 reveal space-y-4"
          onSubmit={(e) => e.preventDefault()}>
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground border-b border-white/5 pb-3">
            <Lock className="h-3.5 w-3.5 text-[color:var(--cyber)]" />
            encrypted message · TLS 1.3
          </div>
          <Field label="Name" placeholder="Your name" />
          <Field label="Email" placeholder="you@domain.com" type="email" />
          <Field label="Subject" placeholder="Security assessment / collaboration" />
          <div>
            <label className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground">Message</label>
            <textarea rows={5} placeholder="Tell me about the scope, timeline, and goals..."
              className="mt-1.5 w-full rounded-lg bg-black/30 hairline px-3.5 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[color:var(--neon)]/40" />
          </div>
          <button type="submit"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium bg-[color:var(--neon)] text-primary-foreground hover:shadow-[var(--shadow-glow)] transition">
            Send Secure Message <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground">{label}</label>
      <input {...rest}
        className="mt-1.5 w-full rounded-lg bg-black/30 hairline px-3.5 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[color:var(--neon)]/40" />
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 mt-10">
      <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-display font-semibold">
            <Shield className="h-4 w-4 text-[color:var(--neon)]" /> alex<span className="text-[color:var(--neon)]">.sec</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            <span className="text-foreground">Security is not a feature. It's a foundation.</span>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} className="text-muted-foreground hover:text-foreground transition">{l}</a>
          ))}
        </div>
        <div className="flex md:justify-end gap-3">
          {[Github, Linkedin, Mail].map((Icon, i) => (
            <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-lg glass hover:bg-white/5 transition">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-muted-foreground font-mono">
          <span>© {new Date().getFullYear()} Samuel Alexander. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--cyber)] animate-pulse-dot" />
            system: operational
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Section primitive ---------- */
function Section({ id, eyebrow, title, subtitle, children }: {
  id?: string; eyebrow?: string; title: string; subtitle?: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal max-w-3xl mb-12">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 text-[10px] uppercase font-mono tracking-widest text-[color:var(--neon)]">
              <span className="h-px w-8 bg-[color:var(--neon)]" /> {eyebrow}
            </div>
          )}
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-gradient">{title}</h2>
          {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

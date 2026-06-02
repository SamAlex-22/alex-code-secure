import { useEffect, useState } from "react";

const LINES = [
  { p: "alex@sec", c: "~", cmd: "whoami", out: "samuel.alexander — pentester / backend dev" },
  { p: "alex@sec", c: "~", cmd: "nmap -sV target.app", out: "22/tcp open  ssh   OpenSSH 9.6\n443/tcp open  https nginx" },
  { p: "alex@sec", c: "~", cmd: "burp scan --auth oauth2", out: "[+] 3 findings · 1 high · 0 critical" },
  { p: "alex@sec", c: "~", cmd: "echo 'breaking assumptions.'", out: "breaking assumptions." },
];

export function TerminalWindow() {
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState("");
  const [showOut, setShowOut] = useState(false);

  useEffect(() => {
    const line = LINES[step % LINES.length];
    setTyped("");
    setShowOut(false);
    let i = 0;
    const typer = setInterval(() => {
      i++;
      setTyped(line.cmd.slice(0, i));
      if (i >= line.cmd.length) {
        clearInterval(typer);
        setTimeout(() => setShowOut(true), 250);
        setTimeout(() => setStep((s) => s + 1), 2400);
      }
    }, 55);
    return () => clearInterval(typer);
  }, [step]);

  const history = LINES.slice(0, step % LINES.length);
  const current = LINES[step % LINES.length];

  return (
    <div className="glass rounded-xl overflow-hidden shadow-[var(--shadow-panel)] relative">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-black/30">
        <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.65_0.18_25)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.16_85)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.17_155)]" />
        <span className="ml-2 text-xs font-mono text-muted-foreground">~/recon — zsh</span>
        <span className="ml-auto text-[10px] font-mono text-muted-foreground/70">secure shell</span>
      </div>
      <div className="p-5 font-mono text-[13px] leading-relaxed min-h-[260px] relative">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-[color-mix(in_oklab,var(--neon)_8%,transparent)] to-transparent animate-scan" />
        </div>
        {history.map((l, i) => (
          <div key={i} className="opacity-70">
            <Prompt p={l.p} c={l.c} /> <span className="text-foreground">{l.cmd}</span>
            <pre className="text-muted-foreground whitespace-pre-wrap">{l.out}</pre>
          </div>
        ))}
        <div>
          <Prompt p={current.p} c={current.c} />{" "}
          <span className="text-foreground">{typed}</span>
          <span className="cursor-blink" />
          {showOut && (
            <pre className="text-[color:var(--cyber)] whitespace-pre-wrap">{current.out}</pre>
          )}
        </div>
      </div>
    </div>
  );
}

function Prompt({ p, c }: { p: string; c: string }) {
  return (
    <span>
      <span className="text-[color:var(--neon)]">{p}</span>
      <span className="text-muted-foreground">:</span>
      <span className="text-[color:var(--cyber)]">{c}</span>
      <span className="text-muted-foreground">$</span>
    </span>
  );
}

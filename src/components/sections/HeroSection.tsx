import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Circle } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const TypingText = () => {
    const { t } = useTranslation();
    const roles = t("hero.roles", { returnObjects: true }) as string[];
    const [current, setCurrent] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const target = roles[current];
        const timeout = deleting ? 30 : 60;

        if (!deleting && text === target) {
            setTimeout(() => setDeleting(true), 2000);
            return;
        }

        if (deleting && text === "") {
            setDeleting(false);
            setCurrent((c) => (c + 1) % roles.length);
            return;
        }

        const timer = setTimeout(() => {
            setText(deleting ? target.slice(0, text.length - 1) : target.slice(0, text.length + 1));
        }, timeout);

        return () => clearTimeout(timer);
    }, [text, deleting, current, roles]);

    return (
        <span className="text-primary">
            {text}
            <span className="animate-pulse">|</span>
        </span>
    );
};

const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="relative min-h-screen flex items-center section-padding bg-grid overflow-hidden">
            {/* Glow orbs */}
            <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/3 blur-[100px] pointer-events-none" />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-5 gap-12 items-center">
                    {/* Left - Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-3"
                    >
                        {/* Status badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6"
                        >
                            <Circle size={8} className="fill-purple-400 text-purple-400 animate-pulse" />
                            <span className="text-xs font-heading text-primary tracking-wide">🎮 {t("hero.status")}</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-4">
                            {t("hero.title")}{" "}
                            <span className="text-gradient">{t("hero.subtitle")}</span>
                        </h1>

                        <div className="text-lg md:text-xl font-heading mb-6 h-8">
                            <TypingText />
                        </div>

                        <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 font-body leading-relaxed">
                            {t("hero.description").split("<code").map((part, i) => {
                                if (i === 0) return part;
                                const end = part.indexOf("</code>");
                                const code = part.slice(part.indexOf(">") + 1, end);
                                const rest = part.slice(end + 7);
                                return (
                                    <span key={i}>
                                        <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-sm">{code}</code>
                                        {rest}
                                    </span>
                                );
                            })}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button variant="hero" size="lg" asChild>
                                <a href="#projects">
                                    <ArrowDown size={18} />
                                    {t("hero.buttons.projects")}
                                </a>
                            </Button>
                            <Button variant="heroOutline" size="lg" asChild>
                                <a href="#contact">
                                    <Mail size={18} />
                                    {t("hero.buttons.contact")}
                                </a>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right - Terminal card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                        className="lg:col-span-2 hidden lg:block"
                    >
                        <div className="bg-card border border-border rounded-lg overflow-hidden glow-box">
                            {/* Terminal header */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                                <div className="w-3 h-3 rounded-full bg-purple-500/60" />
                                <span className="ml-2 text-xs text-muted-foreground font-heading">filipe@dev:~</span>
                            </div>
                            {/* Terminal content */}
                            <div className="p-5 font-heading text-sm space-y-2">
                                <p className="text-muted-foreground">
                                    <span className="text-primary">$</span> {t("hero.terminal.command")}
                                </p>
                                <div className="text-muted-foreground pl-2 space-y-1">
                                    <p>{"{"}</p>
                                    <p className="pl-4">
                                        <span className="text-primary">"{t("hero.terminal.nameKey")}"</span>: <span className="text-purple-400">"{t("hero.terminal.name")}"</span>,
                                    </p>
                                    <p className="pl-4">
                                        <span className="text-primary">"{t("hero.terminal.stackKey")}"</span>: <span className="text-purple-400">{JSON.stringify(t("hero.terminal.stack", { returnObjects: true }))}</span>,
                                    </p>
                                    <p className="pl-4">
                                        <span className="text-primary">"{t("hero.terminal.rankKey")}"</span>: <span className="text-purple-400">"{t("hero.terminal.rank")}"</span>,
                                    </p>
                                    <p className="pl-4">
                                        <span className="text-primary">"{t("hero.terminal.statusKey")}"</span>: <span className="text-purple-400">"{t("hero.terminal.status")}"</span>
                                    </p>
                                    <p>{"}"}</p>
                                </div>
                                <p className="text-muted-foreground mt-2">
                                    <span className="text-primary">$</span> <span className="animate-pulse">▊</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

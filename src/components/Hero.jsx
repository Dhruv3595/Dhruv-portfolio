import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const roles = [
    'Full Stack Web Applications',
    'AI-Powered Solutions',
    'Data Science & Analytics',
    'Modern User Interfaces',
    'Scalable Software Systems',
];

function AnimatedCounter({ target, suffix = '', decimals = 0 }) {
    const [count, setCount] = useState(target);
    const ref = useRef(null);
    const counted = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const startCount = () => {
            if (counted.current) return;
            counted.current = true;
            const num = parseFloat(target);
            const duration = 1200;
            const steps = 40;
            const increment = num / steps;
            let current = 0;
            const timer = setInterval(() => {
                current += increment;
                if (current >= num) {
                    current = num;
                    clearInterval(timer);
                }
                setCount(decimals > 0 ? current.toFixed(decimals) : Math.floor(current));
            }, duration / steps);
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting || entry.intersectionRatio > 0) {
                    startCount();
                }
            },
            { threshold: 0.01, rootMargin: '50px 0px' }
        );

        observer.observe(el);

        // Immediate check if element is in viewport on mobile
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100 && rect.bottom > 0) {
            startCount();
        }

        return () => observer.unobserve(el);
    }, [target, decimals]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState(roles[0]);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout;
        if (!isDeleting && text === currentRole) {
            timeout = setTimeout(() => setIsDeleting(true), 2200);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
            timeout = setTimeout(() => {
                setText(
                    isDeleting
                        ? currentRole.substring(0, text.length - 1)
                        : currentRole.substring(0, text.length + 1)
                );
            }, isDeleting ? 30 : 60);
        }
        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-16 relative">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-xl"
                >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-medium text-slate-300 tracking-wide">
                        Available for New Opportunities
                    </span>
                </motion.div>

                {/* Hero Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="space-y-4"
                >
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.1]">
                        <span>Hi, I'm </span>
                        <span className="gradient-text-luxury">Dhruv Pandya</span>
                    </h1>

                    {/* Dynamic Typewriter Subhead */}
                    <div className="h-10 flex items-center justify-center text-lg sm:text-2xl font-display font-medium text-slate-300">
                        <span className="text-slate-500 mr-2">I craft</span>
                        <span className="text-cyan-400 font-semibold">{text}</span>
                        <span className="typewriter-cursor" />
                    </div>
                </motion.div>

                {/* Bio Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-sans"
                >
                    Software Engineer crafting beautiful, performant web applications and
                    data-driven solutions with modern tech stacks.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2"
                >
                    <a href="#projects" className="btn-primary">
                        <span>View My Work</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </a>
                    <a href="#contact" className="btn-secondary">
                        <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <span>Get In Touch</span>
                    </a>
                </motion.div>

                {/* Metric Counter Bento Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 max-w-3xl mx-auto"
                >
                    {[
                        { target: '2', suffix: '+', label: 'Years Exp.' },
                        { target: '5', suffix: '+', label: 'Projects' },
                        { target: '4', suffix: '', label: 'Companies' },
                        { target: '9.22', suffix: '', label: 'CGPA', decimals: 2 },
                    ].map((stat, i) => (
                        <div key={i} className="bento-card p-5 text-center group">
                            <div className="text-2xl sm:text-3xl font-display font-black text-white group-hover:text-indigo-400 transition-colors">
                                <AnimatedCounter target={stat.target} suffix={stat.suffix} decimals={stat.decimals || 0} />
                            </div>
                            <div className="text-xs text-slate-400 font-medium tracking-wider uppercase mt-1">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

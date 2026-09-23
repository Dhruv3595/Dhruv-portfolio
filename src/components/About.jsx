import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const traits = [
    {
        icon: (
            <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
        ),
        label: 'Clean Code',
        desc: 'Writing maintainable, scalable, and well-documented code',
    },
    {
        icon: (
            <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
            </svg>
        ),
        label: 'Data Driven',
        desc: 'Extracting insights using ML and analytics',
    },
    {
        icon: (
            <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
            </svg>
        ),
        label: 'Pixel Perfect',
        desc: 'Crafting beautiful, responsive interfaces',
    },
    {
        icon: (
            <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
        label: 'Fast Learner',
        desc: 'Quickly adapting to new technologies',
    },
];

export default function About() {
    const [ref, isInView] = useInView(0.01);
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <section id="about" ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-16">
                {/* Section Header */}
                <div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-3 mb-3"
                    >
                        <div className="h-px w-8 bg-gradient-to-r from-indigo-500 to-transparent" />
                        <span className="text-xs uppercase tracking-[0.3em] text-indigo-400 font-medium font-sans">
                            About
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-display font-extrabold text-white leading-tight"
                    >
                        Passionate about building <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            digital experiences
                        </span>
                    </motion.h2>
                </div>

                {/* Grid Layout: Left Photo (2/5 cols) & Right Text Narrative (3/5 cols) */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                    {/* Left Photo Frame with Pill Pagination Dots */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="lg:col-span-2 flex flex-col items-center"
                    >
                        <div
                            className="relative w-full max-w-[360px] aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer"
                            onClick={() => setIsFlipped(!isFlipped)}
                        >
                            <img
                                src={isFlipped ? '/DHRUV.jpg' : '/Dhruv_formal.jfif'}
                                alt="Dhruv Pandya"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Pagination Pill Dots */}
                        <div className="flex justify-center gap-2.5 mt-6">
                            {[0, 1].map((i) => (
                                <button
                                    key={i}
                                    onClick={() => setIsFlipped(i === 1)}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${
                                        isFlipped === (i === 1)
                                            ? 'w-8 bg-gradient-to-r from-indigo-500 to-cyan-400 shadow-[0_0_10px_rgba(99,102,241,0.5)]'
                                            : 'w-1.5 bg-white/20 hover:bg-white/40'
                                    }`}
                                    aria-label={`Show photo ${i + 1}`}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Text Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="lg:col-span-3 space-y-6"
                    >
                        <p className="text-base sm:text-lg text-slate-300/80 leading-[1.8] font-sans">
                            I am a <span className="text-white font-semibold">Software Engineer</span> with
                            hands-on industry experience in frontend development, full-stack web applications, and
                            data-driven solutions. My journey began with web design and evolved into building
                            scalable, production-ready applications using modern technologies.
                        </p>
                        <p className="text-base sm:text-lg text-slate-300/80 leading-[1.8] font-sans">
                            With expertise in{' '}
                            <span className="text-indigo-400 font-medium">React.js, JavaScript, Node.js, Python, and SQL databases</span>,
                            I focus on clean architecture, reusable components, and performance optimization.
                            I transform complex business requirements into intuitive digital experiences.
                        </p>
                        <p className="text-base sm:text-lg text-slate-300/80 leading-[1.8] font-sans">
                            Currently working as a <span className="text-white font-semibold">Data Science Engineer</span> —
                            building applications that are both <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent font-semibold">visually stunning and intelligent</span>.
                        </p>
                    </motion.div>
                </div>

                {/* Trait Cards Below */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                    {traits.map((trait, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bento-card p-6 text-center cursor-default group"
                        >
                            <div className="inline-flex p-3 rounded-xl bg-slate-900 border border-white/10 mb-4 transition-transform group-hover:scale-110">
                                {trait.icon}
                            </div>
                            <h3 className="text-sm font-bold text-white mb-2 font-display">{trait.label}</h3>
                            <p className="text-xs text-slate-400 leading-relaxed font-sans">{trait.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

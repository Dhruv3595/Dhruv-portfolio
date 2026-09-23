import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        onComplete();
                    }, 150);
                    return 100;
                }
                return prev + 10;
            });
        }, 15);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[99999] bg-[#07080c] flex flex-col justify-center items-center font-sans overflow-hidden px-6"
        >
            {/* Ambient Background Glows */}
            <div className="absolute w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* Center Brand Glass Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-full max-w-sm rounded-2xl p-8 bg-[#10121b]/80 border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col items-center text-center space-y-4"
            >
                {/* Logo Box */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 flex items-center justify-center font-display font-extrabold text-white text-2xl shadow-lg shadow-indigo-500/30">
                    DP
                </div>

                {/* Name & Tagline */}
                <div>
                    <h1 className="font-display font-extrabold text-2xl text-white tracking-tight">
                        Dhruv Pandya<span className="text-indigo-400">.</span>
                    </h1>
                    <p className="text-xs text-slate-400 font-medium mt-1">
                        Software &amp; Data Science Engineer
                    </p>
                </div>
            </motion.div>

            {/* Loading Indicator Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative z-10 mt-8 flex flex-col items-center space-y-4 w-full max-w-xs"
            >
                {/* Animated Pulsing Dots */}
                <div className="flex items-center gap-1.5">
                    {[0, 1, 2].map((i) => (
                        <motion.span
                            key={i}
                            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                            className="w-1.5 h-1.5 rounded-full bg-indigo-400"
                        />
                    ))}
                </div>

                {/* Tracking Text */}
                <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-slate-400 font-medium">
                    INITIALIZING EXPERIENCE
                </div>

                {/* Progress Bar Container */}
                <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden border border-white/5 relative">
                    <motion.div
                        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}

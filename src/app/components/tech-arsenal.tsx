"use client";
import {
	IconBrandJavascript,
	IconBrandNextjs,
	IconBrandNodejs,
	IconBrandReact,
	IconBrandTypescript,
	IconWriting,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

export const TechArsenal = () => {
	return (
		<motion.div
			initial="initial"
			animate="animate"
			whileHover="hover"
			whileTap="hover"
			className="row-span-1 w-full md:col-span-2"
		>
			<Link
				href="/"
				className="row-span-1 h-full flex flex-col space-y-4 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border hover:border-transparent justify-between"
			>
				<div className="flex flex-1 w-full items-center justify-center gap-2 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row">
					<motion.div
						variants={{ initial: { x: 90, y: 5, rotate: -10 }, hover: { x: 0, y: 0, rotate: 0 } }}
						className="origin-bottom-right z-auto h-full w-1/5 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
					>
						<IconBrandNodejs size={30} color="#417e38" />
						<p className="sm:text-sm text-xs text-center font-semibold text-neutral-400 mt-4">Node.js</p>
					</motion.div>
					<motion.div
						variants={{ initial: { x: 40, rotate: -5 }, hover: { x: 0, rotate: 0 } }}
						className="origin-center z-10 h-full w-1/5 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
					>
						<IconBrandReact size={30} color="#149eca" />
						<p className="sm:text-sm text-xs text-center font-semibold text-neutral-400 mt-4">React</p>
					</motion.div>
					<motion.div
						variants={{ initial: { y: -10 }, hover: { y: 0 } }}
						className="z-20 h-full w-1/5 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
					>
						<IconBrandJavascript size={30} color="#efd81b" />
						<p className="sm:text-sm text-xs text-center font-semibold text-neutral-400 mt-4">JavaScript</p>
					</motion.div>
					<motion.div
						variants={{ initial: { x: -40, rotate: 5 }, hover: { x: 0, rotate: 0 } }}
						className="origin-center z-10 h-full w-1/5 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
					>
						<IconBrandTypescript size={30} color="#2f74c0" />
						<p className="sm:text-sm text-xs text-center font-semibold text-neutral-400 mt-4">TypeScript</p>
					</motion.div>
					<motion.div
						variants={{ initial: { x: -90, y: 5, rotate: 10 }, hover: { x: 0, y: 0, rotate: 0 } }}
						className="origin-bottom-left z-auto h-full w-1/5 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
					>
						<IconBrandNextjs size={30} className="color-[#FFFFFF] dark:color-[#000000]" />
						<p className="sm:text-sm text-xs text-center font-semibold text-neutral-400 mt-4">Next.js</p>
					</motion.div>
				</div>
				<div className="group-hover/bento:translate-x-2 transition duration-200">
					<IconWriting size={20} className="text-neutral-500" />
					<h2 className="font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">Tech Arsenal</h2>
					<p className="font-normal text-neutral-600 text-xs dark:text-neutral-300">
						My software & product engineering insights.
					</p>
				</div>
			</Link>
		</motion.div>
	);
};

"use client";
import { IconRoad } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

export const CareerJourney = () => {
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
				<div className="flex flex-1 w-full items-center dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 overflow-hidden max-h-32"></div>
				<div className="group-hover/bento:translate-x-2 transition duration-200">
					<IconRoad size={20} className="text-neutral-500" />
					<h2 className="font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">Career Journey</h2>
					<p className="font-normal text-neutral-600 text-xs dark:text-neutral-300">
						My path in the software development landscape.
					</p>
				</div>
			</Link>
		</motion.div>
	);
};

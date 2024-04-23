"use client";

import { cn } from "@/utils";
import { motion } from "framer-motion";
import Link from "next/link";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div className={cn("grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ", className)}>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	href,
	className,
	title,
	description,
	header,
	icon,
}: {
	href: string;
	className?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	header?: React.ReactNode;
	icon?: React.ReactNode;
}) => {
	return (
		<motion.div initial="initial" animate="animate" whileHover="hover" className={cn("row-span-1 w-full", className)}>
			<Link
				href={href}
				className="row-span-1 h-full flex flex-col space-y-4 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border hover:border-transparent justify-between"
			>
				{header}
				<div className="group-hover/bento:translate-x-2 transition duration-200">
					{icon}
					<h2 className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">{title}</h2>
					<p className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">{description}</p>
				</div>
			</Link>
		</motion.div>
	);
};

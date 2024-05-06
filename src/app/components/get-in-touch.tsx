"use client";
import { IconMessage } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

export const GetInTouch = () => {
	return (
		<motion.div
			initial="initial"
			animate="animate"
			whileHover="hover"
			whileTap="hover"
			className="row-span-1 w-full md:col-span-1"
		>
			<Link
				href="/"
				className="row-span-1 h-full flex flex-col space-y-4 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border hover:border-transparent justify-between"
			>
				<div className="flex flex-1 w-full items-center dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 overflow-hidden max-h-32">
					<motion.div
						variants={{ initial: { y: 0 }, hover: { y: -50 } }}
						className="flex flex-row rounded-2xl p-3 self-start space-x-2 w-fit bg-green-100 rounded-tl-sm dark:bg-green-900"
					>
						<p className="text-green-900 text-xs dark:text-green-100">Got any magic tricks for new projects?</p>
					</motion.div>
					<motion.div
						variants={{ initial: { y: 0 }, hover: { y: -90 } }}
						className="flex flex-row rounded-2xl p-3 self-end space-x-2 w-fit ml-auto bg-blue-100 rounded-br-sm dark:bg-blue-900"
					>
						<p className="text-blue-900 text-xs dark:text-blue-100">Tell me about it.</p>
					</motion.div>
					<motion.div
						variants={{ initial: { y: 35 }, hover: { y: -92 } }}
						className="flex flex-row rounded-2xl p-3 self-start space-x-2 w-fit bg-green-100 rounded-tl-sm dark:bg-green-900"
					>
						<p className="text-green-900 text-xs dark:text-green-100">
							I'm brewing up a something special and need some coding wizardry. Think you can cast a spell?
						</p>
					</motion.div>
					<motion.div
						variants={{ initial: { y: 35 }, hover: { y: -90 } }}
						className="flex flex-row rounded-2xl p-3 self-end space-x-2 w-fit ml-auto bg-blue-100 rounded-br-sm dark:bg-blue-900"
					>
						<p className="text-blue-900 text-xs dark:text-blue-100">Let's discuss details and make it fly!</p>
					</motion.div>
				</div>
				<div className="group-hover/bento:translate-x-2 transition duration-200">
					<IconMessage size={20} className="text-neutral-500" />
					<h2 className="font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">Get in touch!</h2>
					<p className="font-normal text-neutral-600 text-xs dark:text-neutral-300">
						Connect for your next project or tech chat
					</p>
				</div>
			</Link>
		</motion.div>
	);
};

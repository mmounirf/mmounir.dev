"use client";
import { motion } from "framer-motion";

export const GetInTouch = () => {
	return (
		<div className="flex flex-1 w-full items-center dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 overflow-hidden max-h-32">
			<motion.div
				variants={{ initial: { y: 0 }, hover: { y: -50 } }}
				className="flex flex-row rounded-2xl p-3 self-start space-x-2 w-fit bg-green-100 rounded-tl-sm dark:bg-green-900"
			>
				<p className="text-slate-500 text-xs dark:text-neutral-300">Got any magic tricks for new projects?</p>
			</motion.div>
			<motion.div
				variants={{ initial: { y: 0 }, hover: { y: -90 } }}
				className="flex flex-row rounded-2xl p-3 self-end space-x-2 w-fit ml-auto bg-blue-100 rounded-br-sm dark:bg-blue-900"
			>
				<p className="text-slate-500 text-xs dark:text-neutral-300">Tell me about it.</p>
			</motion.div>
			<motion.div
				variants={{ initial: { y: 128 }, hover: { y: -92 } }}
				className="flex flex-row rounded-2xl p-3 self-start space-x-2 w-fit bg-green-100 rounded-tl-sm dark:bg-green-900"
			>
				<p className="text-slate-500 text-xs dark:text-neutral-300">
					I'm brewing up a something special and need some coding wizardry. Think you can cast a spell?
				</p>
			</motion.div>
			<motion.div
				variants={{ initial: { y: 128 }, hover: { y: -90 } }}
				className="flex flex-row rounded-2xl p-3 self-end space-x-2 w-fit ml-auto bg-blue-100 rounded-br-sm dark:bg-blue-900"
			>
				<p className="text-slate-500 text-xs dark:text-neutral-300">Let's discuss details and make it fly!</p>
			</motion.div>
		</div>
	);
};

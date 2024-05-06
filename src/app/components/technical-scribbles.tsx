"use client";
import { IconWriting } from "@tabler/icons-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import type { MouseEvent } from "react";

export const TechnicalScribbles = () => {
	const mouseX = useMotionValue(125);
	const mouseY = useMotionValue(62);

	function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
		if (!currentTarget) return;

		const { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	function onMouseLeave() {
		mouseX.set(125);
		mouseY.set(62);
	}

	const maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, black, transparent)`;
	const style = { maskImage, WebkitMaskImage: maskImage };

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
				<div
					className="flex flex-1 w-full items-center dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row"
					onMouseMove={onMouseMove}
					onMouseLeave={onMouseLeave}
				>
					<div className=" bg-transparent aspect-square flex items-center justify-center w-full h-32 relative">
						<div className="group/card rounded-lg w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full">
							<div className="pointer-events-none">
								<motion.div
									className="absolute inset-0 rounded-lg bg-gradient-to-r from-white to-transparent dark:from-black dark:to-transparent blur-sm group-hover/card:blur-[0px] transition duration-500"
									style={style}
								>
									<p className="font-mono absolute inset-x-0 text-xs p-2 h-full break-words whitespace-pre-wrap text-neutral-400">
										We design the product's building blocks and how they work together. Then, we define the data
										structure and where it resides. Following that, we establish clear communication channels between
										components.
									</p>
								</motion.div>
							</div>
						</div>
					</div>
				</div>
				<div className="group-hover/bento:translate-x-2 transition duration-200">
					<IconWriting size={20} className="text-neutral-500" />
					<h2 className="font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">Technical Scribbles</h2>
					<p className="font-normal text-neutral-600 text-xs dark:text-neutral-300">
						My software & product engineering insights.
					</p>
				</div>
			</Link>
		</motion.div>
	);
};

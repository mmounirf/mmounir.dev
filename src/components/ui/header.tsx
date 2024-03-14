import { Button } from "@/components/ui";
import Link from "next/link";

import { Github, Linkedin } from "@/components/icons";
import { IconDownload } from "@tabler/icons-react";

export function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 max-w-screen-2xl items-center justify-between">
				<h1 className="font-display lowercase text-lg sm:text-2xl font-bold">Mohamed Mounir</h1>
				<div className="flex items-center gap-2 sm:gap-3">
					<nav className="flex items-center gap-2 sm:gap-3">
						<a title="Github" href="https://github.com/mmounirf/" target="_blank" rel="noreferrer">
							<Github className="h-4 w-4 sm:w-5 sm:h-5" />
						</a>
						<a title="LinkedIn" href="https://www.linkedin.com/in/mmounirf/" target="_blank" rel="noreferrer">
							<Linkedin className="h-4 w-4 sm:w-5 sm:h-5" />
						</a>
					</nav>
					<Button variant="outline" size="sm" asChild>
						<Link
							href="/Mohamed Mounir - Senior Software Engineer.pdf"
							download
							target="_blank"
							rel="noopener noreferrer"
							className="gap-1"
						>
							<IconDownload size="16" />
							Resume
						</Link>
					</Button>
				</div>
			</div>
		</header>
	);
}

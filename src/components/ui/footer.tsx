import { ThemeSwitcher } from "@/components/ui";

export function Footer() {
	return (
		<footer className="w-full h-14  border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 max-w-screen-2xl items-center justify-between">
				<p className="text-balance text-center text-xs sm:text-sm leading-loose text-muted-foreground">
					The source code is avilable at{" "}
					<a
						className="font-medium underline underline-offset-4"
						title="Github"
						href="https://github.com/mmounirf/mmounir.dev"
						target="_blank"
						rel="noreferrer"
					>
						Github
					</a>
					.
				</p>
				<ThemeSwitcher />
			</div>
		</footer>
	);
}

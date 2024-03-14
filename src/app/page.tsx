import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className="relative flex min-h-screen flex-col dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
			<main className={styles.main}>
				<h1>Hi there</h1>
				<ThemeSwitcher />
			</main>
		</div>
	);
}

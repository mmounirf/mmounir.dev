"use client";

import { IconDeviceImac, IconMoonStars, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ThemeSwitcher() {
	const { setTheme, theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<ToggleGroup
			type="single"
			size="sm"
			value={theme}
			className="flex items-center justify-center gap-1 border rounded-full p-1"
		>
			<ToggleGroupItem value="system" onClick={() => setTheme("system")}>
				<IconDeviceImac size="16" />
			</ToggleGroupItem>
			<ToggleGroupItem value="dark" onClick={() => setTheme("dark")}>
				<IconMoonStars size="16" />
			</ToggleGroupItem>
			<ToggleGroupItem value="light" onClick={() => setTheme("light")}>
				<IconSun size="16" />
			</ToggleGroupItem>
		</ToggleGroup>
	);
}

"use client";

import {
  IconCircle,
  IconMoon,
  IconSettingsAutomation,
  IconSun,
} from "@tabler/icons-react";
import { ThemeProvider, useTheme } from "next-themes";
import { useId } from "react";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import useColorScheme, { colorSchemes } from "./useColorScheme";

const colors = {
  default: "fill-blue-700",
  stone: "fill-stone-700",
  red: "fill-red-700",
  pink: "fill-pink-700",
  orange: "fill-orange-700",
  green: "fill-green-700",
  blue: "fill-blue-700",
  yellow: "fill-yellow-700",
  violet: "fill-violet-700",
};

function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const { setColorScheme, colorScheme } = useColorScheme();
  const uuid = useId();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <IconSun className="dark:-rotate-90 size-5 rotate-0 scale-100 transition-all dark:scale-0" />
          <IconMoon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {colorSchemes.map((color, index) => (
          <DropdownMenuItem
            // biome-ignore lint/suspicious/noArrayIndexKey: TODO: improve this
            key={`${uuid}:${index}`}
            onClick={() => setColorScheme?.(color)}
          >
            {colorScheme === color ? (
              <IconCircle className={colors[color]} />
            ) : (
              <IconCircle className="text-transparent" />
            )}
            {color}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setTheme("light")}>
          {theme === "light" ? (
            <IconSun />
          ) : (
            <IconCircle className="text-transparent" />
          )}
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          {theme === "dark" ? (
            <IconMoon />
          ) : (
            <IconCircle className="text-transparent" />
          )}
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          {theme === "system" ? (
            <IconSettingsAutomation />
          ) : (
            <IconCircle className="text-transparent" />
          )}
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { ThemeProvider, ThemeToggle };

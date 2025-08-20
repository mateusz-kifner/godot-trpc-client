"use client";

import { useLocalStorage } from "@mantine/hooks";

export const colorSchemes = [
  "default",
  "stone",
  "red",
  "pink",
  "orange",
  "green",
  "blue",
  "yellow",
  "violet",
] as const;

type ColorSchemeType = (typeof colorSchemes)[number];

export default function useColorScheme(
  defaultValue: ColorSchemeType = "default",
) {
  const [colorScheme, _setColorScheme] = useLocalStorage({
    key: "color-scheme",
    defaultValue,
  });
  const setColorScheme = (value: ColorSchemeType) => {
    document.documentElement?.setAttribute("data-color-scheme", value);
    _setColorScheme(value);
  };

  return {
    colorScheme,
    setColorScheme,
  };
}

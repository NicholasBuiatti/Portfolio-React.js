import { useUIStore } from "../../store/uiStore";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useUIStore();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}

import React from 'react';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, Moon, Sun, User } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

const flagEmojis = {
  pt: "🇧🇷",
  en: "🇺🇸", 
  es: "🇪🇸"
};

const languageNames = {
  pt: "PT",
  en: "EN",
  es: "ES"
};

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="absolute top-6 right-6 z-50 hidden xl:block">
      <div className="flex items-center gap-3">
        {/* Language Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 px-3 py-2 h-auto gap-2"
            >
              <span className="text-lg">{flagEmojis[language]}</span>
              <span className="font-medium">{languageNames[language]}</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            {(Object.keys(flagEmojis) as Language[]).map((lang) => (
              <DropdownMenuItem 
                key={lang}
                onClick={() => setLanguage(lang)}
                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
              >
                <span className="text-lg mr-2">{flagEmojis[lang]}</span>
                <span>{languageNames[lang]}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Theme Toggle */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 px-3 py-2 h-auto gap-2"
            >
              {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              <span className="font-medium">{t('nav.theme')}</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <DropdownMenuItem 
              onClick={() => !isDark && toggleTheme()}
              className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
            >
              <Sun className="w-4 h-4 mr-2" />
              <span>{t('theme.light')}</span>
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => isDark && toggleTheme()}
              className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
            >
              <Moon className="w-4 h-4 mr-2" />
              <span>{t('theme.dark')}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Sign Up Button */}
        <Button 
          variant="outline" 
          className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 px-4 py-2 h-auto gap-2 font-medium"
        >
          <User className="w-4 h-4" />
          {t('nav.signup')}
        </Button>
      </div>
    </header>
  );
};
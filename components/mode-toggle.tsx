"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle({ isMenu }: { isMenu?: boolean }) {
  const { setTheme, theme } = useTheme();
  
  const toggleMode = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      {isMenu ? (
        <Button
          variant="outline"
          size="icon"
          className={"w-full mt-2 cursor-pointer z-50"}
          onClick={() => {
            if (theme == "dark") {
              setTheme("light");
            } else {
              setTheme("dark");
            }
          }}
        >
          {isMenu ? (
            <div className="flex items-center gap-2">
              <p>تغيير الوضع</p>
              {theme == "dark" ? (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
              )}
            </div>
          ) : (
            <>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">تغيير الوضع</span>
            </>
          )}
        </Button>
      ) : (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" onClick={toggleMode}>
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">تغيير الوضع</span>
              </Button>
            </DropdownMenuTrigger>
            {/* <DropdownMenuContent align="center">
              <div dir="rtl">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  فاتح
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  داكن
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
         حسب الجهاز
       </DropdownMenuItem>
              </div>
            </DropdownMenuContent> */}
          </DropdownMenu>
        </>
      )}
    </>
  );
}

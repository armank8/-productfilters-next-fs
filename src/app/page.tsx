"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const SORT_OPTIONS = [
  { name: "None", value: "none" },
  { name: "Price:Low to High", value: "price-asc" },
  { name: "Price:High to Low", value: "price-desc" },
] as const;

export default function Home() {
  const [filter, setFilter] = useState({
    sort: "none",
  });

  console.log(filter);
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          High Quality Cotton Selection
        </h1>

        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="group inline-flex justify-between text-sm font-medium text-gray-700 hover:text-gray-900">
              Sort
              <ChevronDown className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"></ChevronDown>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {SORT_OPTIONS.map((option) => (
                <button
                  key={option.name}
                  className=""
                  onClick={() => {
                    setFilter((prev) => ({
                      ...prev,
                      sort: option.value,
                    }));
                  }}
                >
                  {option.name}
                </button>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </main>
  );
}

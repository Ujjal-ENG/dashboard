"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

type TabType = "progress" | "pass" | "failed" | "pending";

export default function ProgressTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("progress");

  const tabs = [
    { id: "progress", label: "Progress" },
    { id: "pass", label: "Pass" },
    { id: "failed", label: "Failed" },
    { id: "pending", label: "Pending" },
  ];

  return (
    <div className="flex mb-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id as TabType)}
          className={cn(
            "px-4 py-1 text-sm font-medium rounded mx-1 first:ml-0 bg-[radial-gradient(70.71%_70.71%_at_50%_50%,rgba(255,255,255,0.12)_0%,rgba(0,0,0,0.00)_100%)] shadow-[1.44px_1.44px_2.879px_0px_rgba(255,255,255,0.24)_inset,0px_1.44px_4.319px_0px_rgba(10,124,255,0.24),0px_2.879px_8.638px_0px_rgba(10,124,255,0.24),0px_5.759px_11.517px_0px_rgba(10,124,255,0.12),0px_23.035px_46.07px_-11.517px_rgba(10,124,255,0.48)]",
            activeTab === tab.id
              ? "bg-[#171B21] text-white border border-gray-700"
              : "bg-transparent text-gray-400 hover:text-white"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

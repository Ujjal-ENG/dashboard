"use client"
import { useState } from 'react';
import { cn } from '@/lib/utils';

type TabType = 'progress' | 'pass' | 'failed' | 'pending';

export default function ProgressTabs() {
  const [activeTab, setActiveTab] = useState<TabType>('progress');
  
  const tabs = [
    { id: 'progress', label: 'Progress' },
    { id: 'pass', label: 'Pass' },
    { id: 'failed', label: 'Failed' },
    { id: 'pending', label: 'Pending' }
  ];
  
  return (
    <div className="flex mb-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id as TabType)}
          className={cn(
            "px-4 py-1 text-sm font-medium rounded mx-1 first:ml-0",
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
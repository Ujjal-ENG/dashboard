'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BarChart2, 
  ArrowUpRight, 
  FileText, 
  User, 
  HelpCircle,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

function SidebarItem({ icon, label, href, active }: SidebarItemProps) {
  return (
    <Link 
      href={href} 
      className={`flex items-center gap-3 px-4 py-3 text-sm ${
        active ? 'bg-[#171B21] text-white' : 'text-gray-400 hover:text-white'
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  
  const routes = [
    { 
      path: '/', 
      label: 'Overview', 
      icon: <BarChart2 className="h-5 w-5" /> 
    },
    { 
      path: '/platform', 
      label: 'Platform', 
      icon: <ArrowUpRight className="h-5 w-5" /> 
    },
    { 
      path: '/withdrawal', 
      label: 'Withdrawal', 
      icon: <ArrowUpRight className="h-5 w-5" /> 
    },
    { 
      path: '/billing', 
      label: 'Billing History', 
      icon: <FileText className="h-5 w-5" /> 
    },
    { 
      path: '/support', 
      label: 'Support', 
      icon: <HelpCircle className="h-5 w-5" /> 
    },
    { 
      path: '/profile', 
      label: 'Profile', 
      icon: <User className="h-5 w-5" /> 
    },
  ];
  
  return (
    <div className="w-48 bg-[#0D1117] border-r border-gray-800 flex flex-col h-full">
      <div className="p-4">
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          Start Challenge
        </Button>
      </div>
      
      <div className="flex-1">
        {routes.map((route) => (
          <SidebarItem 
            key={route.path}
            icon={route.icon} 
            label={route.label} 
            href={route.path}
            active={pathname === route.path} 
          />
        ))}
      </div>
      
      <div className="mt-auto p-4">
        <Button variant="ghost" className="flex items-center gap-2 text-red-500 hover:text-red-400 w-full justify-start px-4">
          <LogOut className="h-5 w-5" />
          <span>Log Out</span>
        </Button>
      </div>
    </div>
  );
}

import Image from 'next/image';
import { Bell } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown, Plus } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-[#0D1117] border-b border-gray-800">
      <div className="flex items-center">
        <Image 
          src="/logo.png" 
          alt="RSN Logo" 
          width={40} 
          height={40} 
          className="mr-2"
        />
        <span className="text-white font-semibold">RSN</span>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="bg-blue-600 rounded-full h-8 w-8 p-0">
          <span className="text-white text-xs">$</span>
        </Button>
        
        <div className="bg-[#171B21] px-3 py-1 rounded-md flex items-center">
          <span className="text-gray-400 text-xs mr-1">BALANCE</span>
          <span className="text-white font-medium">$1380.001</span>
          <ChevronDown className="ml-1 h-4 w-4 text-gray-400" />
        </div>
        
        <Button variant="ghost" className="bg-blue-600 rounded-full h-8 w-8 p-0">
          <Plus className="h-4 w-4 text-white" />
        </Button>
        
        <Button variant="ghost" className="relative p-0 h-8 w-8">
          <Bell className="h-5 w-5 text-white" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 bg-transparent border-0">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/user.png" />
                <AvatarFallback>JG</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <span className="text-white text-sm">Jelly Grande</span>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
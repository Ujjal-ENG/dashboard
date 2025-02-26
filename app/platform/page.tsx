import Image from 'next/image';
import Link from 'next/link';
import {  ChevronLeft, MoveLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Leaderboard from '@/components/dashboard/Leaderboard';
import GameCard from '@/components/dashboard/GameCard';



export default function PlatformPage() {
  return (
    <div className="bg-[#0D1117] min-h-screen text-white">
      {/* Hero Banner */}
      <div className="relative h-64 overflow-hidden rounded-lg mx-6 mt-6 mb-8">
        <Image
          src="/casino-banner.png"
          alt="Casino"
          fill
          className="object-cover"
        />
        
        <div className="absolute inset-0 bg-black/10 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            Profits 90% up to $200,000
          </h1>
          <Button className="bg-blue-600 hover:bg-blue-700 w-36">
            Start Challenge
          </Button>
        </div>
        
        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          <div className="h-2 w-2 rounded-full bg-blue-600"></div>
          <div className="h-2 w-2 rounded-full bg-white/50"></div>
          <div className="h-2 w-2 rounded-full bg-white/50"></div>
        </div>
      </div>
      
      <div className="px-6">
        <h2 className="text-xl font-bold mb-6">Game Accounts</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GameCard 
            title="Demo"
            description="Get the majority have suffered alteration in some form, by injected humour, or randomised"
            color="bg-purple-600"
            image="/roulette.png"
          />
          
          <GameCard 
            title="2 Phase Challenge"
            id="8232234"
            description="Get the majority have suffered alteration in some form, by injected humour, or randomised"
            color="bg-purple-800"
            image="/slot-machine.png"
          />
          
          <GameCard 
            title="Instant Fund"
            id="8232231"
            description="Get the majority have suffered alteration in some form, by injected humour, or randomised"
            color="bg-blue-500"
            image="/money.png"
          />
        </div>
        <Leaderboard />
      </div>
      
      {/* Back Button */}
      <div className="fixed bottom-6 right-6 flex gap-2">
        <Button className="rounded-full h-10 w-10 p-0 bg-gray-800 hover:bg-gray-700">
          <ChevronLeft className="h-5 w-5 text-white" />
        </Button>
        <Link href="/">
          <Button className="rounded-full h-10 w-10 p-0 bg-blue-600 hover:bg-blue-700">
            <MoveLeft className="h-5 w-5 text-white" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
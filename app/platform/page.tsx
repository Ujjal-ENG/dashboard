import GameCard from "@/components/dashboard/GameCard";
import Leaderboard from "@/components/dashboard/Leaderboard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function PlatformPage() {
  return (
    <div className="bg-[#0D1117] min-h-screen text-white">
      {/* Hero Banner */}
      <div className="relative rounded-[19.955px] shadow-[0px_5.701px_5.701px_0px_rgba(0,0,0,0.25),0px_0px_10.548px_0px_#0A7CFF] bg-[linear-gradient(182deg,rgba(0,0,0,0.00)_1.7%,rgba(0,0,0,0.80)_61.11%)] h-[432px] overflow-hidden mx-6 mt-6 mb-8">
        <Image
          src="/casino-banner.png"
          alt="Casino"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/10 p-8 flex flex-col justify-center">
          <h1 className="text-6xl font-bold text-white mb-24">
            Profits 90% up to $200,000
          </h1>
          <Button className="inline-flex w-full max-w-[295px] px-5 py-7 items-center gap-4 rounded-[68.417px] bg-[#0A7CFF] shadow-[1.425px_1.425px_2.851px_0px_rgba(255,255,255,0.24)_inset,0px_1.425px_4.276px_0px_rgba(10,124,255,0.24),0px_2.851px_8.552px_0px_rgba(10,124,255,0.24),0px_5.701px_11.403px_0px_rgba(10,124,255,0.12),0px_22.806px_45.611px_-11.403px_rgba(10,124,255,0.48)]">
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
            description="Get the majority have suffered alteration in some form, by injected humour, or randomized"
            color="bg-gradient-to-r from-[#8A25DA] to-[#6E29DF]"
            image="/roulette.png"
          />

          <GameCard
            title="2 Phase Challenge"
            id="8232234"
            description="Get the majority have suffered alteration in some form, by injected humour, or randomized"
            color="bg-gradient-to-r from-[#5743E0] to-[#6E29DF]"
            image="/slot-machine.png"
          />

          <GameCard
            title="Instant Fund"
            id="8232231"
            description="Get the majority have suffered alteration in some form, by injected humour, or randomized"
            color="bg-gradient-to-r from-[#369CDD] to-[#6E29DF]"
            image="/money.png"
          />
        </div>
        {/* Back Button */}
        <div className="flex justify-end items-center mt-5 gap-2">
          <Button className="rounded-full h-10 w-10 p-0 bg-gray-800 hover:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M10.7607 19.3804L3.76074 12.3804M3.76074 12.3804L10.7607 5.38037M3.76074 12.3804L21.7607 12.3804"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <Link href="/">
            <Button className="rounded-full h-10 w-10 p-0 bg-blue-600 hover:bg-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M14.7607 5.38037L21.7607 12.3804M21.7607 12.3804L14.7607 19.3804M21.7607 12.3804L3.76074 12.3804"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </Link>
        </div>
        <Leaderboard />
      </div>
    </div>
  );
}

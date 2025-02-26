import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';

export default function TimerCard() {
  return (
    <Card className="bg-[#171B21] border-gray-800 h-full flex flex-col justify-between">
      <CardContent className="p-4 flex flex-col items-center justify-center h-full">
        <p className="text-gray-400 text-sm mb-1">Time Remaining</p>
        
        <div className="relative w-40 h-40">
          {/* Circular Progress */}
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="#1e293b" 
              strokeWidth="8" 
            />
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="#2563eb" 
              strokeWidth="8" 
              strokeDasharray="283" 
              strokeDashoffset="70" 
              strokeLinecap="round" 
            />
          </svg>
          
          {/* Time Display */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-white text-2xl font-semibold">08 : 24 : 00</div>
            <div className="text-gray-400 text-xs mt-1">hr : min : sec</div>
            <div className="text-gray-400 text-xs mt-1">Resets at 6 PM</div>
          </div>
        </div>
        
        <div className="flex items-center text-gray-400 text-xs mt-6">
          <Clock className="h-3 w-3 mr-1" />
          <span>EOD Reset Time</span>
        </div>
      </CardContent>
    </Card>
  );
}
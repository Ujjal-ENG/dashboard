import { Card, CardContent } from '@/components/ui/card';
import { InfoIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  previousDay: string;
  percentChange: number;
  highWaterMark: string;
  chartColor: string;
  isDrawdown?: boolean;
}

function StatCard({ 
  title, 
  value, 
  previousDay, 
  percentChange, 
  highWaterMark,
  chartColor,
  isDrawdown = false
}: StatCardProps) {
  return (
    <Card className="bg-black border-gray-800 overflow-hidden ">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-white text-sm font-semibold mb-1">{title}</h3>
            <p className="text-white font-semibold">{value}</p>
            <p className="text-gray-500 text-xs">Previous Day: {previousDay}</p>
          </div>
          <div className="flex items-start gap-2">
            <div className={`text-red-500 text-xs font-medium flex items-center ${isDrawdown ? 'text-red-500' : ''}`}>
              <span className="mr-1">↓</span> {percentChange}%
            </div>
            <InfoIcon className="h-4 w-4 text-gray-500" />
          </div>
        </div>
        
        {/* Chart SVG */}
        <div className="w-full h-12 mt-4 mb-3 relative">
          <svg width="100%" height="100%" viewBox="0 0 200 48">
            <path 
              d="M0,24 C20,36 40,12 60,24 C80,36 100,8 120,18 C140,28 160,20 180,28 C190,32 200,24 200,24" 
              fill="none"
              stroke={chartColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* Chart dot */}
            <circle 
              cx="180" 
              cy="28" 
              r="4" 
              fill={isDrawdown ? '#10B981' : '#EF4444'} 
            />
          </svg>
        </div>
        
        <div className="border-t border-gray-800 pt-2 mt-2">
          <p className="text-white text-sm font-medium">High-Water Mark: {highWaterMark}</p>
          <p className="text-gray-500 text-xs">Higher peak in balance has been reached</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ChallengeStatistics() {
  return (
    <div className="px-6 mb-6">
      <h2 className="text-white text-lg font-semibold mb-4">Challenge Statistics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard 
          title="Account Balance"
          value="$393.70982"
          previousDay="$1314513"
          percentChange={11.5}
          highWaterMark="$1415531"
          chartColor="#EF4444"
        />
        
        <StatCard 
          title="Challenge Target Balance"
          value="$393.70982"
          previousDay="$1314513"
          percentChange={11.5}
          highWaterMark="$1415531"
          chartColor="#EF4444"
        />
        
        <StatCard 
          title="Challenge Drawdown"
          value="$393.70982"
          previousDay="$1314513"
          percentChange={11.5}
          highWaterMark="$1415531"
          chartColor="#10B981"
          isDrawdown={true}
        />
      </div>
    </div>
  );
}
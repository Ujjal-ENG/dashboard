import { Card, CardContent } from "@/components/ui/card";
import React from "react";

// Simple SVG line chart component to avoid recharts dependency issues
const SimpleLineChart: React.FC<{
  data: number[];
  color: string;
  showDot?: boolean;
}> = ({ data, color, showDot = false }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  // Normalize data to fit in the SVG viewbox
  const normalizedData = data.map(
    (value) => 100 - ((value - min) / range) * 80
  );

  // Create path data
  const points = normalizedData
    .map((point, i) => `${(i / (normalizedData.length - 1)) * 100},${point}`)
    .join(" ");

  const pathData = `M ${points}`;

  return (
    <div className="h-24 w-full">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          d={pathData}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {showDot && (
          <circle
            cx={100}
            cy={normalizedData[normalizedData.length - 1]}
            r="2"
            fill={color}
          />
        )}
      </svg>
    </div>
  );
};

interface StatCardProps {
  title: string;
  amount: string;
  previousAmount: string;
  percentChange: string;
  isNegative: boolean;
  highWaterMark: string;
  chartData: number[];
  lineColor: string;
  showDot?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  amount,
  previousAmount,
  percentChange,
  isNegative,
  highWaterMark,
  chartData,
  lineColor,
  showDot = true,
}) => {
  return (
    <Card className="bg-black border border-gray-800 rounded-[10px] overflow-hidden">
      <CardContent className="p-0">
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-base font-bold text-white">{title}</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            <path
              d="M18.7483 22.0402H17.3707V16.5299H15.9931M17.3707 11.0196H17.3845M29.7689 16.5299C29.7689 23.3772 24.218 28.9281 17.3707 28.9281C10.5234 28.9281 4.97253 23.3772 4.97253 16.5299C4.97253 9.68257 10.5234 4.13171 17.3707 4.13171C24.218 4.13171 29.7689 9.68257 29.7689 16.5299Z"
              stroke="white"
              strokeWidth="2.75515"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="px-4 pb-2">
          <div className="text-xl font-bold text-white">{amount}</div>
          <div className="flex justify-between items-center space-x-2">
            <p className="text-gray-400 text-sm">
              Previous Day: {previousAmount}
            </p>
            <p
              className={`text-sm ${
                isNegative ? "text-red-500" : "text-green-500"
              }`}
            >
              {isNegative ? "↘" : "↗"} {percentChange}
            </p>
          </div>
        </div>

        <SimpleLineChart data={chartData} color={lineColor} showDot={showDot} />

        <div className="border-t border-gray-800 p-4">
          <div className="text-base font-bold text-white">
            High-Water Mark: {highWaterMark}
          </div>
          <div className="text-gray-400 text-sm">
            Higher peak in balance has been reached
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ChallengeStatistics: React.FC = () => {
  // Sample data for charts
  const accountData = [
    1200000, 1100000, 1000000, 950000, 900000, 850000, 800000, 750000, 700000,
    650000, 600000, 393709,
  ];

  const drawdownData = [
    700000, 750000, 800000, 850000, 900000, 950000, 1000000, 1050000, 1100000,
    1200000, 1300000, 1400000,
  ];

  return (
    <div className="flex flex-col w-full bg-black text-white p-6">
      <h1 className="text-xl font-medium mb-6">Challenge Statistics</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Account Balance Card */}
        <StatCard
          title="Account Balance"
          amount="$393.70982"
          previousAmount="$1314513"
          percentChange="1.15%"
          isNegative={true}
          highWaterMark="$1415531"
          chartData={accountData}
          lineColor="#ff3333"
          showDot={true}
        />

        {/* Challenge Target Balance Card */}
        <StatCard
          title="Challenge Target Balance"
          amount="$393.70982"
          previousAmount="$1314513"
          percentChange="1.15%"
          isNegative={true}
          highWaterMark="$1415531"
          chartData={accountData}
          lineColor="#ff3333"
          showDot={true}
        />

        {/* Challenge Drawdown Card */}
        <StatCard
          title="Challenge Drawdown"
          amount="$393.70982"
          previousAmount="$1314513"
          percentChange="1.15%"
          isNegative={false}
          highWaterMark="$1415531"
          chartData={drawdownData}
          lineColor="#2ecc71"
          showDot={true}
        />
      </div>
    </div>
  );
};

export default ChallengeStatistics;

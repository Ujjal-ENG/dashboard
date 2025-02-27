import { Button } from "@/components/ui/button";
import { LifeBuoy, Share } from "lucide-react";
import ProgressTabs from "./ProgressTabs";

export default function AccountOverview() {
  return (
    <div className="px-6 py-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-full w-12 h-12 flex items-center justify-center border border-gray-700">
            <User className="text-gray-400 h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-white">
              Account Overview
            </h1>
            <div className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-sm inline-block mt-1">
              Challenge Account
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button className="flex items-center gap-2 bg-transparent border border-gray-700 hover:bg-gray-800 text-white rounded">
            <Share className="h-4 w-4" />
            <span>Share Sales</span>
          </Button>
          <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
            <LifeBuoy className="h-4 w-4" />
            <span>Contact Support</span>
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded">
            Credential
          </Button>
        </div>
      </div>

      <ProgressTabs />

      <div className="mt-4">
        <h2 className="text-base font-medium text-white mb-2">
          Challenge Account ID: 78252
        </h2>

        <div className="flex gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">Type:</span>
            <span className="text-blue-500 text-sm">Challenge</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">Starting Balance:</span>
            <span className="text-white text-sm">$234.4</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// User icon component
function User(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

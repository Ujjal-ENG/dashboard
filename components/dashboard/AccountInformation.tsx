import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Copy } from 'lucide-react';
import TimerCard from './TimerCard';

export default function AccountInformation() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 p-6 bg-[#0D1117] rounded-lg border border-gray-800">
      <div className="lg:col-span-3">
        <h3 className="text-white font-medium mb-2">Account Information</h3>
        <p className="text-gray-400 text-sm mb-4">Here&apos;s your credentials, login using MetaApp.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Card className="bg-[#171B21] border-gray-800">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-400 text-xs mb-1">User ID</p>
                  <p className="text-white text-base">76252</p>
                </div>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <Copy className="h-4 w-4 text-gray-400" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#171B21] border-gray-800">
            <CardContent className="p-4">
              <div className="flex justify-between items-center ">
                <div>
                  <p className="text-gray-400 text-xs ">Access to the  platform from the PC</p>
                </div>
                <Button variant="ghost" className="text-gray-400">
                  <span className="flex items-center gap-1">
                    Click here <ArrowRight />
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-[#171B21] border-gray-800">
            <CardContent className="p-4">
              <div>
                <p className="text-gray-400 text-xs mb-1">Date Started</p>
                <p className="text-white text-base">12-Jan-2025</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#171B21] border-gray-800">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-400 text-xs mb-1">Withdraw Profits</p>
                  <p className="text-white text-base">$568.70</p>
                </div>
                <Button variant="ghost" className="text-gray-400">
                  <span className="flex items-center gap-1">
                    Withdraw Now <ArrowRight className="h-4 w-4" />
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="lg:col-span-2">
        <TimerCard />
      </div>
    </div>
  );
}
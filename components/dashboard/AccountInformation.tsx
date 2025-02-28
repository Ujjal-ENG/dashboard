import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TimerCard from "./TimerCard";

export default function AccountInformation() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 p-6 bg-[#0D1117] rounded-lg border border-gray-800">
      <div className="lg:col-span-3">
        <h3 className="text-white font-medium mb-2">Account Information</h3>
        <p className="text-gray-400 text-sm mb-4">
          Here&apos;s your credentials, login using MetaApp.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Card className="bg-[#171B21] border-gray-800">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-400 text-xs mb-1">User ID</p>
                  <p className="text-white text-base">76252</p>
                </div>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                  >
                    <path
                      d="M11.7497 23.2104H8.87034C7.28011 23.2104 5.99097 21.9212 5.99097 20.331V8.81351C5.99097 7.22328 7.28011 5.93414 8.87034 5.93414H20.3878C21.9781 5.93414 23.2672 7.22328 23.2672 8.81351V11.6929M14.6291 28.9691H26.1466C27.7368 28.9691 29.0259 27.68 29.0259 26.0897V14.5723C29.0259 12.982 27.7368 11.6929 26.1466 11.6929H14.6291C13.0388 11.6929 11.7497 12.982 11.7497 14.5723V26.0897C11.7497 27.68 13.0388 28.9691 14.6291 28.9691Z"
                      stroke="white"
                      strokeWidth="1.43969"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#171B21] border-gray-800">
            <CardContent className="p-4">
              <div className="flex justify-between items-center ">
                <div>
                  <p className="text-gray-400 text-xs ">
                    Access to the platform from the PC
                  </p>
                </div>
                <Button variant="ghost" className="text-gray-400">
                  <span className="flex items-center gap-1">
                    Click here
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20.2163 10.0575H10.6184C6.37778 10.0575 2.94008 13.4952 2.94008 17.7358V19.6554M20.2163 10.0575L14.4576 15.8162M20.2163 10.0575L14.4576 4.29877"
                        stroke="white"
                        strokeWidth="2.87937"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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
                    Withdraw Now{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20.2163 10.0575H10.6184C6.37778 10.0575 2.94008 13.4952 2.94008 17.7358V19.6554M20.2163 10.0575L14.4576 15.8162M20.2163 10.0575L14.4576 4.29877"
                        stroke="white"
                        strokeWidth="2.87937"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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

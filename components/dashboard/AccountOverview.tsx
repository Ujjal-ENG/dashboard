import { Button } from "@/components/ui/button";
import ProfileIcon from "./ProfileIcon";
import ProgressTabs from "./ProgressTabs";

export default function AccountOverview() {
  return (
    <div className="px-6 py-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <ProfileIcon />
          <div>
            <h1 className="text-xl font-semibold text-white">
              Account Overview
            </h1>
            <div className="rounded-[7.198px] bg-gradient-to-b from-[#000] to-[#0A7CFF] p-3 flex justify-center">
              Challenge Account
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded">
            Credential
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <ProgressTabs />
        <div className="flex flex-col gap-3">
          <div className="flex justify-between gap-4">
            <Button className="flex items-center gap-2 bg-transparent border border-gray-700 hover:bg-gray-800 text-white rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="35"
                viewBox="0 0 36 35"
                fill="none"
              >
                <path
                  d="M30.2104 10.2702L17.973 3.07175L5.73572 10.2702V24.667L17.973 31.8655L30.2104 24.667V10.2702Z"
                  stroke="white"
                  strokeWidth="2.01556"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.9749 16.029V21.7877M23.7337 13.1496V21.7877M12.2162 18.9084V21.7877"
                  stroke="white"
                  strokeWidth="2.01556"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Share Sales</span>
            </Button>
            <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="31"
                viewBox="0 0 24 31"
                fill="none"
              >
                <path
                  d="M9.04501 20.1451L9.03207 20.1151C8.8377 20.0623 8.64498 20.0037 8.45416 19.9394L8.43978 19.9337C6.45384 19.2586 4.73006 17.9833 3.50974 16.2864C2.28943 14.5895 1.63366 12.5559 1.63423 10.4702C1.63359 7.9106 2.62085 5.44819 4.39266 3.59018C6.16448 1.73218 8.58591 0.620075 11.1582 0.48294C13.7305 0.345804 16.2578 1.19408 18.2195 2.85304C20.1812 4.512 21.428 6.85532 21.703 9.40032C21.7662 9.98884 21.2775 10.4702 20.6823 10.4702C20.0871 10.4702 19.6113 9.98742 19.5322 9.40175C19.341 8.01939 18.7828 6.71256 17.915 5.61556C17.0471 4.51856 15.901 3.67096 14.5943 3.15988C13.2876 2.64879 11.8675 2.49266 10.48 2.70752C9.09243 2.92239 7.78751 3.50049 6.6993 4.38243C5.61109 5.26437 4.77885 6.41833 4.28811 7.72571C3.79738 9.03309 3.66584 10.4467 3.90703 11.8213C4.14822 13.196 4.75343 14.482 5.66047 15.5472C6.5675 16.6124 7.74364 17.4185 9.06801 17.8825C9.3348 17.2833 9.80076 16.7934 10.3878 16.495C10.9748 16.1965 11.6473 16.1077 12.2924 16.2433C12.9376 16.3789 13.5162 16.7307 13.9313 17.2398C14.3464 17.7489 14.5728 18.3843 14.5725 19.0395C14.5732 19.6998 14.3436 20.34 13.9229 20.8511C13.5022 21.3623 12.9162 21.7128 12.2648 21.8431C11.6133 21.9734 10.9365 21.8755 10.3495 21.5659C9.76248 21.2563 9.30152 20.7543 9.04501 20.1451ZM7.57148 21.9021C5.87647 21.2972 4.33698 20.3275 3.0632 19.0624C2.2756 19.1534 1.54909 19.5287 1.02168 20.1171C0.494278 20.7054 0.202719 21.4657 0.202393 22.2535V23.5677C0.202393 24.3848 0.458283 25.1819 0.935563 25.8475C3.15233 28.9387 6.7808 30.4686 11.6974 30.4686C16.6139 30.4686 20.2438 28.9373 22.4649 25.8475C22.9444 25.1812 23.2022 24.3826 23.2024 23.5634V22.2521C23.2024 21.4002 22.862 20.5831 22.256 19.9805C21.65 19.3778 20.8281 19.0388 19.9707 19.0381H16.7289C16.7291 20.1021 16.3878 21.1384 15.7544 21.9963C15.121 22.8542 14.2288 23.489 13.2073 23.8083C12.1859 24.1276 11.0886 24.1148 10.075 23.7717C9.06138 23.4286 8.18436 22.7746 7.57148 21.9021ZM17.4477 10.4702C17.4477 9.6352 17.2635 8.81031 16.9081 8.05364C16.5527 7.29697 16.0347 6.6269 15.3905 6.0906C14.7926 5.5936 14.0992 5.22259 13.3525 5.00012C12.6058 4.77765 11.8213 4.70837 11.0468 4.79649C10.2723 4.8846 9.52396 5.12828 8.84718 5.5127C8.17039 5.89712 7.57934 6.41426 7.10994 7.03269C6.64054 7.65112 6.30259 8.35794 6.11662 9.11018C5.93066 9.86242 5.90057 10.6444 6.02818 11.4085C6.15579 12.1727 6.43843 12.9031 6.85894 13.5553C7.27944 14.2076 7.82902 14.768 8.47428 15.2027C9.37869 14.4526 10.5193 14.0416 11.6974 14.0414C12.9236 14.0414 14.0478 14.477 14.9219 15.2027C15.7 14.679 16.3372 13.9738 16.7775 13.1488C17.2179 12.3238 17.448 11.4041 17.4477 10.4702Z"
                  fill="white"
                />
              </svg>
              <span>Contact Support</span>
            </Button>
          </div>
        </div>
      </div>

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
            <span className="text-[#2D99FE] text-sm">$234.4</span>
          </div>
        </div>
      </div>
    </div>
  );
}

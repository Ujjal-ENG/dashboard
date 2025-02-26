
import AccountOverview from '@/components/dashboard/AccountOverview';
import AccountInformation from '@/components/dashboard/AccountInformation';
import ChallengeStatistics from '@/components/dashboard/ChallengeStatistics';

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-screen bg-[#0D1117] text-white">    
        <main className="flex-1">
          <AccountOverview />
          <div className="px-6 mb-6">
            <AccountInformation />
          </div>
          <ChallengeStatistics />
        </main>
    </div>
  );
}
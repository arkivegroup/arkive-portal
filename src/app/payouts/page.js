import Payouts from "@/sections/payouts/payouts-view";
import DashboardLayout from "@/layouts/dashboard/dashboard-layout";
import AuthGuard from "@/auth/auth-guard";

export default async function PayoutsPage() {
  return (
    <AuthGuard>
      <DashboardLayout>
        <Payouts />
      </DashboardLayout>
    </AuthGuard>
  );
}

import Account from "@/sections/account/account-view";
import DashboardLayout from "@/layouts/dashboard/dashboard-layout";
import AuthGuard from "@/auth/auth-guard";

export default async function AccountPage() {
  return (
    <AuthGuard>
      <DashboardLayout>
        <Account />
      </DashboardLayout>
    </AuthGuard>
  );
}

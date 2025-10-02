import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Profile = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto fade-in-up">
        <h1 className="text-4xl font-bold text-foreground mb-8">User Profile</h1>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Name</label>
                <p className="text-card-foreground">John Doe</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Email</label>
                <p className="text-card-foreground">johndoe@example.com</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Phone</label>
                <p className="text-card-foreground">(123) 456-7890</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-3 text-sm font-medium text-muted-foreground">Username</td>
                      <td className="py-3 text-sm text-card-foreground">johndoe</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-sm font-medium text-muted-foreground">Password</td>
                      <td className="py-3 text-sm text-card-foreground">********</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-sm font-medium text-muted-foreground">
                        Account Status
                      </td>
                      <td className="py-3">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                          Active
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">No recent activity to display.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;

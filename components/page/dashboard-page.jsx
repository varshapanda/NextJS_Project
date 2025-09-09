import Card from "../global/card";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card title="Courses">You are enrolled in 3 courses</Card>
      <Card title="Progress">75% Completed</Card>
      <Card title="Notifications">2 new messages</Card>
    </div>
  );
}

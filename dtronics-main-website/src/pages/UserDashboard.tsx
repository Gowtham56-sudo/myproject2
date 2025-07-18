
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { User, Package, Calendar, Eye } from "lucide-react";

const UserDashboard = () => {
  const [userOrders] = useState([
    {
      id: "ORD-001",
      product: "Smart IoT Controller Pro",
      quantity: 2,
      total: "$598",
      status: "processing",
      date: "2024-01-15",
      trackingNumber: "TF123456789"
    },
    {
      id: "ORD-004",
      product: "Wireless Sensor Network",
      quantity: 1,
      total: "$199",
      status: "completed",
      date: "2024-01-10",
      trackingNumber: "TF987654321"
    },
    {
      id: "ORD-007",
      product: "Mobile Control App",
      quantity: 1,
      total: "$99",
      status: "pending",
      date: "2024-01-12",
      trackingNumber: "TF456789123"
    }
  ]);

  const [userInfo] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, Anytown, USA 12345",
    memberSince: "January 2024"
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
            <p className="text-gray-600">Welcome back, {userInfo.name}!</p>
          </div>
          <div className="flex items-center space-x-2">
            <User className="w-6 h-6 text-blue-600" />
            <span className="text-lg font-semibold">User Portal</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* User Info Card */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>Profile Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Name</p>
                <p className="font-medium">{userInfo.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium">{userInfo.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-medium">{userInfo.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Address</p>
                <p className="font-medium">{userInfo.address}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Member Since</p>
                <p className="font-medium">{userInfo.memberSince}</p>
              </div>
            </CardContent>
          </Card>

          {/* Order Summary Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userOrders.length}</div>
                <p className="text-xs text-muted-foreground">All time orders</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$896</div>
                <p className="text-xs text-muted-foreground">Lifetime spending</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Orders Table */}
        <Card>
          <CardHeader>
            <CardTitle>My Orders</CardTitle>
            <CardDescription>View your order history and track shipments</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Tracking</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {userOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.product}</TableCell>
                    <TableCell>{order.quantity}</TableCell>
                    <TableCell>{order.total}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>Track</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;

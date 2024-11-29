import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag } from "lucide-react";

export const NoOrders = () => (
    <Card className="text-center py-12">
      <CardContent>
        <ShoppingBag className="w-16 h-16 mx-auto text-blue-500 mb-4" />
        <h3 className="text-2xl font-semibold text-red-700 mb-2">No Orders Yet</h3>
        <p className="text-red-600 mb-6">Looks like you have not placed any orders. Start shopping to fill your basket!</p>
        <Button className="bg-blue-500 hover:bg-green-600 text-white">
          Start Shopping
        </Button>
      </CardContent>
    </Card>
  )
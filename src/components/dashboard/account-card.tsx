import { Banknote, Users, Lock } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import type { Account } from "@/lib/data";
import { formatCurrency, maskAccountNumber } from "@/lib/utils";

interface AccountCardProps {
  account: Account;
}

export function AccountCard({ account }: AccountCardProps) {
  const isLocked = account.status === "Locked";

  const getStatusVariant = (status: Account['status']) => {
    switch (status) {
      case 'Active':
        return 'default';
      case 'Locked':
        return 'destructive';
      default:
        return 'secondary';
    }
  }

  return (
    <Card className="relative overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{account.type} Account</CardTitle>
        <Banknote className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{formatCurrency(account.balance)}</div>
        <CardDescription className="text-xs text-muted-foreground">
          {maskAccountNumber(account.accountNumber)}
        </CardDescription>
        <div className="mt-4 flex items-center space-x-2">
            <Badge variant={getStatusVariant(account.status)}>{account.status}</Badge>
            {isLocked && (
                 <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Lock className="h-4 w-4 text-destructive" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Account locked during transaction</p>
                        </TooltipContent>
                    </Tooltip>
                 </TooltipProvider>
            )}
            {account.concurrentUser && (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Users className="h-4 w-4 text-yellow-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Another user is viewing this account</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            )}
        </div>
      </CardContent>
    </Card>
  );
}

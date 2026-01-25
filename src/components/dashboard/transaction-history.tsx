"use client";

import { useState } from "react";
import { ListFilter, MoreHorizontal } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuCheckboxItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Transaction } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TransactionHistoryProps {
  transactions: Transaction[];
}

type StatusFilter = "All" | "Success" | "Pending" | "Failed";

export function TransactionHistory({ transactions }: TransactionHistoryProps) {
    const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");

    const getStatusVariant = (status: Transaction['status']) => {
        switch (status) {
          case 'Success':
            return 'default';
          case 'Pending':
            return 'secondary';
          case 'Failed':
            return 'destructive';
          default:
            return 'outline';
        }
    }

    const filteredTransactions = transactions.filter(t => statusFilter === "All" || t.status === statusFilter);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
            <CardTitle>Transaction History</CardTitle>
            <CardDescription>
                A record of your recent account activity.
            </CardDescription>
        </div>
        <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                        <ListFilter className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:ml-2">Filter</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by status</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {(["All", "Success", "Pending", "Failed"] as StatusFilter[]).map(status => (
                        <DropdownMenuCheckboxItem 
                            key={status}
                            checked={statusFilter === status}
                            onCheckedChange={() => setStatusFilter(status)}
                        >
                            {status}
                        </DropdownMenuCheckboxItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-96">
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead>Description</TableHead>
                <TableHead className="hidden sm:table-cell">Type</TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {filteredTransactions.map(transaction => (
                    <TableRow key={transaction.id}>
                        <TableCell>
                            <div className="font-medium">{transaction.description}</div>
                            <div className="text-sm text-muted-foreground md:hidden">{transaction.date}</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">{transaction.type}</TableCell>
                        <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant={getStatusVariant(transaction.status)}>
                                {transaction.status}
                            </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">{transaction.date}</TableCell>
                        <TableCell className={`text-right font-medium ${transaction.type === 'Deposit' ? 'text-green-600' : 'text-foreground'}`}>
                            {transaction.type === 'Deposit' ? '+' : '-'}{formatCurrency(transaction.amount)}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            </Table>
            {filteredTransactions.length === 0 && (
                <div className="text-center p-8 text-muted-foreground">
                    No transactions found for this filter.
                </div>
            )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

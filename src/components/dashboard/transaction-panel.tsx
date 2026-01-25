"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, ArrowRight } from "lucide-react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"
import type { Account } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";


interface TransactionPanelProps {
  accounts: Account[];
  onTransaction: (transactionData: { type: 'Deposit' | 'Withdrawal' | 'Transfer', amount: number, fromAccountId: string, toAccountId?: string }) => void;
}

const depositSchema = z.object({
  amount: z.coerce.number().positive({ message: "Amount must be positive." }),
  toAccountId: z.string().min(1, { message: "Please select an account." }),
});

const withdrawSchema = z.object({
  amount: z.coerce.number().positive({ message: "Amount must be positive." }),
  fromAccountId: z.string().min(1, { message: "Please select an account." }),
});

const transferSchema = z.object({
  amount: z.coerce.number().positive({ message: "Amount must be positive." }),
  fromAccountId: z.string().min(1, { message: "Please select an account." }),
  toAccountId: z.string().min(1, { message: "Please select an account." }),
}).refine(data => data.fromAccountId !== data.toAccountId, {
    message: "Cannot transfer to the same account.",
    path: ["toAccountId"],
});

type FormType = "deposit" | "withdraw" | "transfer";

export function TransactionPanel({ accounts, onTransaction }: TransactionPanelProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<FormType>("deposit");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [transferDetails, setTransferDetails] = useState<z.infer<typeof transferSchema> | null>(null);

  const activeAccounts = accounts.filter(a => a.status === 'Active');

  const depositForm = useForm<z.infer<typeof depositSchema>>({
    resolver: zodResolver(depositSchema),
  });
  const withdrawForm = useForm<z.infer<typeof withdrawSchema>>({
    resolver: zodResolver(withdrawSchema),
  });
  const transferForm = useForm<z.infer<typeof transferSchema>>({
    resolver: zodResolver(transferSchema),
  });

  const getForm = (type: FormType) => {
    switch (type) {
        case "deposit": return depositForm;
        case "withdraw": return withdrawForm;
        case "transfer": return transferForm;
    }
  }

  const handleTransaction = (values: any) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
        onTransaction({ type: activeTab.charAt(0).toUpperCase() + activeTab.slice(1) as any, ...values });
        setIsLoading(false);
        getForm(activeTab).reset();
    }, 1500);
  };
  
  const onTransferSubmit = (values: z.infer<typeof transferSchema>) => {
    setTransferDetails(values);
    setShowConfirmation(true);
  }

  const confirmTransfer = () => {
    if (transferDetails) {
        handleTransaction(transferDetails);
    }
    setShowConfirmation(false);
    setTransferDetails(null);
  }

  const fromAccount = transferDetails ? accounts.find(a => a.id === transferDetails.fromAccountId) : null;
  const toAccount = transferDetails ? accounts.find(a => a.id === transferDetails.toAccountId) : null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transactions</CardTitle>
        <CardDescription>
          Quickly deposit, withdraw, or transfer funds.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="deposit" className="w-full" onValueChange={(value) => setActiveTab(value as FormType)}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="deposit">Deposit</TabsTrigger>
            <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
            <TabsTrigger value="transfer">Transfer</TabsTrigger>
          </TabsList>
          
          <TabsContent value="deposit">
            <Form {...depositForm}>
              <form onSubmit={depositForm.handleSubmit(handleTransaction)} className="space-y-4 mt-4">
                <FormField control={depositForm.control} name="amount" render={({ field }) => (
                  <FormItem><FormLabel>Amount</FormLabel><FormControl><Input type="number" placeholder="0.00" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={depositForm.control} name="toAccountId" render={({ field }) => (
                    <FormItem><FormLabel>To Account</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select account" /></SelectTrigger></FormControl><SelectContent>{activeAccounts.map(acc => <SelectItem key={acc.id} value={acc.id}>{acc.type} (...{acc.accountNumber.slice(-4)})</SelectItem>)}</SelectContent></Select><FormMessage /></FormItem>
                )} />
                <Button className="w-full" type="submit" disabled={isLoading}>{isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}Deposit Funds</Button>
              </form>
            </Form>
          </TabsContent>

          <TabsContent value="withdraw">
            <Form {...withdrawForm}>
              <form onSubmit={withdrawForm.handleSubmit(handleTransaction)} className="space-y-4 mt-4">
                <FormField control={withdrawForm.control} name="amount" render={({ field }) => (
                    <FormItem><FormLabel>Amount</FormLabel><FormControl><Input type="number" placeholder="0.00" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={withdrawForm.control} name="fromAccountId" render={({ field }) => (
                    <FormItem><FormLabel>From Account</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select account" /></SelectTrigger></FormControl><SelectContent>{activeAccounts.map(acc => <SelectItem key={acc.id} value={acc.id}>{acc.type} (...{acc.accountNumber.slice(-4)})</SelectItem>)}</SelectContent></Select><FormMessage /></FormItem>
                )} />
                <Button className="w-full" type="submit" disabled={isLoading}>{isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}Withdraw Funds</Button>
              </form>
            </Form>
          </TabsContent>

          <TabsContent value="transfer">
            <Form {...transferForm}>
              <form onSubmit={transferForm.handleSubmit(onTransferSubmit)} className="space-y-4 mt-4">
              <FormField control={transferForm.control} name="amount" render={({ field }) => (
                    <FormItem><FormLabel>Amount</FormLabel><FormControl><Input type="number" placeholder="0.00" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
              <FormField control={transferForm.control} name="fromAccountId" render={({ field }) => (
                    <FormItem><FormLabel>From Account</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select account" /></SelectTrigger></FormControl><SelectContent>{activeAccounts.map(acc => <SelectItem key={acc.id} value={acc.id}>{acc.type} (...{acc.accountNumber.slice(-4)})</SelectItem>)}</SelectContent></Select><FormMessage /></FormItem>
                )} />
              <FormField control={transferForm.control} name="toAccountId" render={({ field }) => (
                    <FormItem><FormLabel>To Account</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select account" /></SelectTrigger></FormControl><SelectContent>{accounts.map(acc => <SelectItem key={acc.id} value={acc.id}>{acc.type} (...{acc.accountNumber.slice(-4)})</SelectItem>)}</SelectContent></Select><FormMessage /></FormItem>
                )} />
                <Button className="w-full" type="submit" disabled={isLoading}>{isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}Initiate Transfer</Button>
              </form>
            </Form>
          </TabsContent>
        </Tabs>

        <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Confirm Transfer</AlertDialogTitle>
                <AlertDialogDescription>
                    Please review the details below before confirming the transfer.
                </AlertDialogDescription>
                </AlertDialogHeader>
                {transferDetails && fromAccount && toAccount && (
                    <div className="space-y-4 text-sm">
                        <div className="flex justify-between items-center bg-muted p-3 rounded-md">
                            <span className="text-muted-foreground">Amount</span>
                            <span className="font-semibold">{formatCurrency(transferDetails.amount)}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-center p-2 rounded-md flex-1">
                                <p className="font-semibold">{fromAccount.type}</p>
                                <p className="text-muted-foreground text-xs">...{fromAccount.accountNumber.slice(-4)}</p>
                            </div>
                            <ArrowRight className="h-5 w-5 text-muted-foreground mx-2" />
                            <div className="text-center p-2 rounded-md flex-1">
                                <p className="font-semibold">{toAccount.type}</p>
                                <p className="text-muted-foreground text-xs">...{toAccount.accountNumber.slice(-4)}</p>
                            </div>
                        </div>
                    </div>
                )}
                <AlertDialogFooter>
                <AlertDialogCancel onClick={() => setTransferDetails(null)}>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={confirmTransfer} disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Confirm & Transfer
                </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

      </CardContent>
    </Card>
  );
}

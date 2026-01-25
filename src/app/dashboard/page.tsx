"use client";

import { useState } from 'react';
import { AccountCard } from '@/components/dashboard/account-card';
import { TransactionPanel } from '@/components/dashboard/transaction-panel';
import { TransactionHistory } from '@/components/dashboard/transaction-history';
import { accountsData, transactionsData, type Account, type Transaction } from '@/lib/data';
import { useToast } from "@/hooks/use-toast";

export default function DashboardPage() {
    const [accounts, setAccounts] = useState<Account[]>(accountsData);
    const [transactions, setTransactions] = useState<Transaction[]>(transactionsData);
    const { toast } = useToast();

    const handleTransaction = (transactionData: { type: 'Deposit' | 'Withdrawal' | 'Transfer', amount: number, fromAccountId?: string, toAccountId?: string }) => {
        const { type, amount, fromAccountId, toAccountId } = transactionData;

        let transactionStatus: 'Success' | 'Failed' | 'Pending' = 'Pending';
        let failureReason = "";

        const newTransaction: Transaction = {
            id: `txn_${Date.now()}`,
            date: new Date().toISOString().split('T')[0],
            description: `${type} transaction`,
            type,
            amount,
            status: transactionStatus,
            from: fromAccountId ? accounts.find(a => a.id === fromAccountId)?.type : undefined,
            to: toAccountId ? accounts.find(a => a.id === toAccountId)?.type : undefined,
        };

        setTransactions(prev => [newTransaction, ...prev]);

        // Lock accounts
        const involvedAccountIds = [fromAccountId, toAccountId].filter(Boolean) as string[];
        setAccounts(prev => prev.map(acc => involvedAccountIds.includes(acc.id) ? { ...acc, status: 'Locked' } : acc));
        
        // Simulate processing and validation
        setTimeout(() => {
            setAccounts(prevAccounts => {
                const updatedAccounts = [...prevAccounts];
                let fromAccount = fromAccountId ? updatedAccounts.find(a => a.id === fromAccountId) : null;
                let toAccount = toAccountId ? updatedAccounts.find(a => a.id === toAccountId) : null;

                if (type === 'Withdrawal' || type === 'Transfer') {
                    if (!fromAccount) {
                        transactionStatus = 'Failed';
                        failureReason = "Invalid source account.";
                    } else if (fromAccount.balance < amount) {
                        transactionStatus = 'Failed';
                        failureReason = "Insufficient balance.";
                    }
                }
                
                if (type === 'Deposit' || type === 'Transfer') {
                    if (!toAccount) {
                        transactionStatus = 'Failed';
                        failureReason = "Invalid destination account.";
                    }
                }

                if (transactionStatus !== 'Failed') {
                    if (fromAccount && (type === 'Withdrawal' || type === 'Transfer')) {
                        fromAccount.balance -= amount;
                    }
                    if (toAccount && (type === 'Deposit' || type === 'Transfer')) {
                        toAccount.balance += amount;
                    }
                    transactionStatus = 'Success';
                }

                setTransactions(prevTx => prevTx.map(tx => tx.id === newTransaction.id ? { ...tx, status: transactionStatus } : tx));

                if (transactionStatus === 'Success') {
                    toast({ title: "Transaction Successful", description: `${type} of ${amount} was successful.` });
                } else {
                    toast({ variant: 'destructive', title: "Transaction Failed", description: failureReason });
                }

                // Unlock accounts
                return updatedAccounts.map(acc => involvedAccountIds.includes(acc.id) ? { ...acc, status: 'Active' } : acc);
            });

        }, 2000);
    };

    return (
        <div className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {accounts.map((account) => (
                    <AccountCard key={account.id} account={account} />
                ))}
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
                <TransactionPanel accounts={accounts} onTransaction={handleTransaction} />
                <TransactionHistory transactions={transactions} />
            </div>
        </div>
    );
}

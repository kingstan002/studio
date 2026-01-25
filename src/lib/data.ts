import { PlaceHolderImages } from "./placeholder-images";

const userAvatar = PlaceHolderImages.find(p => p.id === 'user-avatar');

export type Account = {
  id: string;
  type: 'Savings' | 'Current';
  accountNumber: string;
  balance: number;
  status: 'Active' | 'Locked';
  concurrentUser?: boolean;
};

export type Transaction = {
  id: string;
  date: string;
  description: string;
  type: 'Deposit' | 'Withdrawal' | 'Transfer';
  amount: number;
  status: 'Success' | 'Failed' | 'Pending';
  from?: string;
  to?: string;
};

export const accountsData: Account[] = [
  {
    id: 'acc_1',
    type: 'Savings',
    accountNumber: '1234567890123456',
    balance: 25032.75,
    status: 'Active',
    concurrentUser: true,
  },
  {
    id: 'acc_2',
    type: 'Current',
    accountNumber: '9876543210987654',
    balance: 7654.21,
    status: 'Active',
  },
  {
    id: 'acc_3',
    type: 'Savings',
    accountNumber: '5555666677778888',
    balance: 123.45,
    status: 'Locked',
  }
];

export const transactionsData: Transaction[] = [
  { id: 'txn_1', date: '2024-07-22', description: 'Netflix Subscription', type: 'Withdrawal', amount: 15.99, status: 'Success', from: 'Current' },
  { id: 'txn_2', date: '2024-07-21', description: 'Salary Deposit', type: 'Deposit', amount: 3500.00, status: 'Success', to: 'Current' },
  { id: 'txn_3', date: '2024-07-20', description: 'Transfer to Savings', type: 'Transfer', amount: 1000.00, status: 'Success', from: 'Current', to: 'Savings' },
  { id: 'txn_4', date: '2024-07-19', description: 'Online Purchase', type: 'Withdrawal', amount: 250.00, status: 'Pending', from: 'Savings' },
  { id: 'txn_5', date: '2024-07-18', description: 'ATM Withdrawal', type: 'Withdrawal', amount: 100.00, status: 'Success', from: 'Current' },
  { id: 'txn_6', date: '2024-07-17', description: 'Failed Transfer', type: 'Transfer', amount: 500.00, status: 'Failed', from: 'Savings', to: 'External' },
  { id: 'txn_7', date: '2024-07-16', description: 'Grocery Shopping', type: 'Withdrawal', amount: 78.50, status: 'Success', from: 'Current' },
  { id: 'txn_8', date: '2024-07-15', description: 'Friend payback', type: 'Deposit', amount: 50.00, status: 'Success', to: 'Savings' },
];

export const userData = {
  name: 'Alex Doe',
  email: 'alex.doe@example.com',
  avatar: userAvatar,
  lastLogin: '2024-07-22, 10:30 AM',
};

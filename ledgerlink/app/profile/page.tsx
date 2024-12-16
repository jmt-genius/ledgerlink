'use client';

import { useWallet } from '@/components/providers/wallet-provider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatEther, truncateAddress } from '@/lib/utils';
import { Wallet, Shield, History } from 'lucide-react';

export default function ProfilePage() {
  const { address, balance, disconnect } = useWallet();

  if (!address) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Please connect your wallet</h1>
        <p className="text-muted-foreground">Connect your wallet to view your profile</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Profile</h1>
        
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wallet className="mr-2 h-5 w-5" />
                Wallet Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><span className="font-medium">Address:</span> {address}</p>
                <p><span className="font-medium">Balance:</span> {formatEther(balance || '0')}</p>
                <Button variant="outline" onClick={disconnect}>Disconnect Wallet</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Active Policies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No active policies found</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <History className="mr-2 h-5 w-5" />
                Claims History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No claims history found</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
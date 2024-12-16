'use client';

import { useState } from 'react';
import { useWallet } from '@/components/providers/wallet-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';

export default function ClaimPage() {
  const { address } = useWallet();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmitClaim = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address) {
      toast({
        title: 'Wallet Required',
        description: 'Please connect your wallet to submit a claim',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    // Implement claim submission logic here
    setTimeout(() => {
      setLoading(false);
      toast({
        title: 'Claim Submitted',
        description: 'Your claim has been successfully submitted',
      });
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Submit Insurance Claim</CardTitle>
            <CardDescription>
              File a new insurance claim for processing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmitClaim} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="policyNumber">Policy Number</Label>
                <Input id="policyNumber" placeholder="Enter your policy number" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="claimType">Claim Type</Label>
                <Input id="claimType" placeholder="e.g., Health, Car, or Crop" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Claim Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe your claim in detail"
                  className="min-h-[100px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={loading || !address}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting Claim
                  </>
                ) : (
                  'Submit Claim'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
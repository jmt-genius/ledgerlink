'use client';

import { useState } from 'react';
import { useWallet } from '@/components/providers/wallet-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { InsuranceField } from '@/lib/insurance/types';

interface InsuranceFormProps {
  title: string;
  description: string;
  type: 'health' | 'car' | 'crop';
  fields: InsuranceField[];
}

export function InsuranceForm({ title, description, type, fields }: InsuranceFormProps) {
  const { address } = useWallet();
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address) {
      toast({
        title: 'Wallet Required',
        description: 'Please connect your wallet to apply for insurance',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    try {
      // Implement blockchain contract interaction here
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast({
        title: 'Application Submitted',
        description: 'Your insurance application has been submitted successfully',
      });
      router.push('/profile');
    } catch (error) {
      toast({
        title: 'Submission Failed',
        description: 'Failed to submit insurance application. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {fields.map((field) => (
                <div key={field.id} className="space-y-2">
                  <Label htmlFor={field.id}>{field.label}</Label>
                  <Input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    value={formData[field.id] || ''}
                    onChange={(e) => 
                      setFormData((prev) => ({ ...prev, [field.id]: e.target.value }))
                    }
                  />
                </div>
              ))}

              <Button type="submit" className="w-full" disabled={loading || !address}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting Application
                  </>
                ) : (
                  'Submit Application'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
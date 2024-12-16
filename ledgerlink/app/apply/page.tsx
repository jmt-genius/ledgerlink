'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Car, Heart, Wheat } from 'lucide-react';
import Link from 'next/link';

export default function ApplyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Choose Insurance Type</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <Link href="/apply/health">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <Heart className="w-10 h-10 mb-4 text-primary" />
              <CardTitle>Health Insurance</CardTitle>
              <CardDescription>
                Comprehensive health coverage with blockchain-verified claims
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/apply/car">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <Car className="w-10 h-10 mb-4 text-primary" />
              <CardTitle>Car Insurance</CardTitle>
              <CardDescription>
                Smart contract-powered auto insurance with IoT integration
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/apply/crop">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <Wheat className="w-10 h-10 mb-4 text-primary" />
              <CardTitle>Crop Insurance</CardTitle>
              <CardDescription>
                Weather-indexed crop insurance with automated payouts
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  );
}
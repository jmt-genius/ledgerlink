'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Car, Heart, Wheat, ShieldCheck, Zap, Clock } from 'lucide-react';
import Link from 'next/link';

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Choose Your Insurance Coverage
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Secure your future with blockchain-powered insurance solutions
          </p>
        </div>

        {/* Insurance Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Link href="/apply/health" className="group">
            <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary/10 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 dark:from-primary/10 dark:to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="text-center relative z-10">
                <div className="mx-auto rounded-full p-3 bg-primary/10 dark:bg-primary/20 mb-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold mb-2">Health Insurance</CardTitle>
                <CardDescription className="text-base">
                  Comprehensive health coverage with smart contract verification
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/apply/car" className="group">
            <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary/10 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 dark:from-primary/10 dark:to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="text-center relative z-10">
                <div className="mx-auto rounded-full p-3 bg-primary/10 dark:bg-primary/20 mb-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Car className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold mb-2">Car Insurance</CardTitle>
                <CardDescription className="text-base">
                  IoT-integrated vehicle coverage with real-time monitoring
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/apply/crop" className="group">
            <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary/10 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 dark:from-primary/10 dark:to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="text-center relative z-10">
                <div className="mx-auto rounded-full p-3 bg-primary/10 dark:bg-primary/20 mb-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Wheat className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold mb-2">Crop Insurance</CardTitle>
                <CardDescription className="text-base">
                  Weather-indexed protection with automated claim processing
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        {/* Features Section */}
        <Card className="border-none bg-gradient-to-b from-background to-primary/5 dark:from-background dark:to-primary/10">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold mb-4">Why Choose Our Platform?</CardTitle>
            <CardDescription className="text-base">
              Experience the future of insurance with blockchain technology
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="mx-auto rounded-full p-3 bg-primary/10 dark:bg-primary/20 mb-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Secure & Transparent</h3>
                <p className="text-muted-foreground">
                  Blockchain-backed security and complete transparency
                </p>
              </div>

              <div className="text-center group">
                <div className="mx-auto rounded-full p-3 bg-primary/10 dark:bg-primary/20 mb-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Instant Processing</h3>
                <p className="text-muted-foreground">
                  Quick claim verification and automated payouts
                </p>
              </div>

              <div className="text-center group">
                <div className="mx-auto rounded-full p-3 bg-primary/10 dark:bg-primary/20 mb-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">24/7 Coverage</h3>
                <p className="text-muted-foreground">
                  Round-the-clock protection and support
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LineIcon from "@/components/LineIcon";
import Link from "next/link";

interface NewsletterProps {
  showWorkButtons?: boolean;
}

export default function Newsletter({ showWorkButtons = true }: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter your email address');
      setIsSuccess(false);
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setIsSuccess(true);
        setEmail(''); // Clear form on success
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage('Network error. Please check your connection and try again.');
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <Card className="p-12 bg-white shadow-lg">
          <CardContent className="p-0 text-center">
            <h2 className="text-3xl font-bold text-oxford-blue mb-6">
              Get More Marketing Insights Like This
            </h2>
            <p className="text-xl text-charcoal mb-8">
              Join 2,500+ service business owners who get practical, actionable insights every Tuesday.
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 mb-8">
              <div className="space-y-2">
                <Input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address" 
                  className="px-4 py-3 rounded-full text-oxford-blue focus:outline-none focus:ring-4 focus:ring-azure/30 border border-slate-300"
                  disabled={isLoading}
                />
              </div>
              <Button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-azure text-white hover:bg-oxford-blue py-3 rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </Button>
              {message && (
                <div className={`text-sm font-medium ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
                  {message}
                </div>
              )}
              <p className="text-sm text-charcoal/70">
                <LineIcon type="shield" className="inline mr-2" size={16} />
                No spam. Practical, actionable insights only. Unsubscribe anytime.
              </p>
            </form>
            {showWorkButtons && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gamboge text-oxford-blue hover:bg-yellow-400 px-8 py-3 rounded-full font-bold">
                  <Link href="/consulting">Work With Me</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-azure text-azure hover:bg-azure hover:text-white px-8 py-3 rounded-full font-bold">
                  <Link href="/workshops">Join a Workshop</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
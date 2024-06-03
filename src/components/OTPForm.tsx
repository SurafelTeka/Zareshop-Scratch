import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

interface OTPFormProps {
  phoneNumber: string;
  onVerified: () => void;
  onBack: () => void;
}

export const OTPForm: React.FC<OTPFormProps> = ({ phoneNumber, onVerified, onBack }) => {
  const [otp, setOtp] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const { toast } = useToast();

  const handleVerifyOTP = async () => {
    if (!otp || otp.length !== 6) {
      toast({
        title: 'Invalid OTP',
        description: 'Please enter a valid 6-digit OTP',
        variant: 'destructive'
      });
      return;
    }

    setIsVerifying(true);
    try {
      const response = await fetch(
        'https://vdnvpolivbxtdtyaldan.supabase.co/functions/v1/7baf638c-7c41-49eb-94cb-61c9e8a4218c',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phoneNumber, code: otp })
        }
      );

      const result = await response.json();
      
      if (result.success && result.data.status === 'approved') {
        toast({
          title: 'Success',
          description: 'Phone number verified successfully!'
        });
        onVerified();
      } else {
        toast({
          title: 'Verification Failed',
          description: 'Invalid OTP. Please try again.',
          variant: 'destructive'
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to verify OTP. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendOTP = async () => {
    setIsResending(true);
    try {
      const response = await fetch(
        'https://vdnvpolivbxtdtyaldan.supabase.co/functions/v1/419e02ce-3688-4a9d-8312-465bb5ebd808',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phoneNumber })
        }
      );

      const result = await response.json();
      
      if (result.success) {
        toast({
          title: 'OTP Sent',
          description: 'A new OTP has been sent to your phone.'
        });
      } else {
        toast({
          title: 'Error',
          description: 'Failed to resend OTP. Please try again.',
          variant: 'destructive'
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to resend OTP. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-lg font-semibold">Verify Phone Number</h3>
        <p className="text-sm text-gray-600 mt-2">
          We've sent a 6-digit code to {phoneNumber}
        </p>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="otp">Enter OTP</Label>
        <Input
          id="otp"
          type="text"
          placeholder="000000"
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
          className="text-center text-lg tracking-widest"
          maxLength={6}
        />
      </div>
      
      <div className="flex flex-col space-y-2">
        <Button 
          onClick={handleVerifyOTP} 
          disabled={isVerifying || otp.length !== 6}
          className="w-full bg-orange-500 hover:bg-orange-600"
        >
          {isVerifying && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Verify OTP
        </Button>
        
        <Button 
          variant="outline" 
          onClick={handleResendOTP}
          disabled={isResending}
          className="w-full"
        >
          {isResending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Resend OTP
        </Button>
        
        <Button variant="ghost" onClick={onBack} className="w-full">
          Back
        </Button>
      </div>
    </div>
  );
};
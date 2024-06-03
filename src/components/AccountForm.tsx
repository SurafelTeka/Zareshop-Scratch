import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, User, Phone, IdCard, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { OTPForm } from './OTPForm';

interface AccountFormProps {
  onClose: () => void;
}

const AccountForm: React.FC<AccountFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '+251',
    idUpload: null as File | null
  });
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { login } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, idUpload: file }));
  };

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phoneNumber || !formData.idUpload) {
      toast({ title: 'Error', description: 'Please fill all fields', variant: 'destructive' });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        'https://vdnvpolivbxtdtyaldan.supabase.co/functions/v1/419e02ce-3688-4a9d-8312-465bb5ebd808',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phoneNumber: formData.phoneNumber })
        }
      );

      const result = await response.json();
      if (result.success) {
        setStep(2);
        toast({ title: 'OTP Sent', description: 'Check your phone for the verification code' });
      } else {
        toast({ title: 'Error', description: 'Failed to send OTP', variant: 'destructive' });
      }
    } catch (error) {
      toast({ title: 'Error', description: 'Network error', variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleOTPVerified = async () => {
    setIsLoading(true);
    try {
      const faydaIdPhotoUrl = `https://example.com/uploads/${Date.now()}-${formData.idUpload?.name}`;
      
      const response = await fetch(
        'https://vdnvpolivbxtdtyaldan.supabase.co/functions/v1/a319e35f-a6ab-4a6d-be2b-6228cc9cff72',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.fullName,
            phoneNumber: formData.phoneNumber,
            faydaIdPhotoUrl
          })
        }
      );

      const result = await response.json();
      if (result.success) {
        login(result.user);
        toast({ title: 'Success', description: 'Account created successfully!' });
        onClose();
      } else {
        toast({ title: 'Error', description: 'Failed to create account', variant: 'destructive' });
      }
    } catch (error) {
      toast({ title: 'Error', description: 'Registration failed', variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Create Account
            <Button variant="ghost" size="sm" onClick={onClose}>×</Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {step === 1 ? (
            <form onSubmit={handleSendOTP} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="flex items-center gap-2">
                  <User className="w-4 h-4" />Full Name
                </Label>
                <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />Phone Number
                </Label>
                <Input id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="idUpload" className="flex items-center gap-2">
                  <IdCard className="w-4 h-4" />ID Upload
                </Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                  <Input id="idUpload" type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                  <Label htmlFor="idUpload" className="cursor-pointer text-sm text-gray-600">
                    {formData.idUpload ? formData.idUpload.name : 'Click to upload Fayda ID'}
                  </Label>
                </div>
              </div>
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Send OTP
              </Button>
            </form>
          ) : (
            <OTPForm
              phoneNumber={formData.phoneNumber}
              onVerified={handleOTPVerified}
              onBack={() => setStep(1)}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountForm;
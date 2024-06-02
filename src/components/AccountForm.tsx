import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, User, Phone, IdCard } from 'lucide-react';

interface AccountFormProps {
  onClose: () => void;
}

const AccountForm: React.FC<AccountFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '+251',
    idUpload: null as File | null,
    otpCode: ''
  });
  const [step, setStep] = useState(1); // 1: form, 2: OTP verification

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      idUpload: file
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      // Move to OTP verification
      setStep(2);
    } else {
      // Complete registration
      console.log('Account created:', formData);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {step === 1 ? 'Create Account' : 'Verify Phone Number'}
            <Button variant="ghost" size="sm" onClick={onClose}>×</Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {step === 1 ? (
              <>
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="+251 9XX XXX XXX"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="idUpload" className="flex items-center gap-2">
                    <IdCard className="w-4 h-4" />
                    ID Upload
                  </Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <Input
                      id="idUpload"
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <Label htmlFor="idUpload" className="cursor-pointer text-sm text-gray-600">
                      {formData.idUpload ? formData.idUpload.name : 'Click to upload ID/Fayda ID'}
                    </Label>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                  Send OTP
                </Button>
              </>
            ) : (
              <>
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-600">
                    We sent a verification code to {formData.phoneNumber}
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="otpCode">Enter OTP Code</Label>
                  <Input
                    id="otpCode"
                    name="otpCode"
                    value={formData.otpCode}
                    onChange={handleInputChange}
                    placeholder="Enter 6-digit code"
                    maxLength={6}
                    required
                  />
                </div>

                <div className="flex space-x-2">
                  <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                    Back
                  </Button>
                  <Button type="submit" className="flex-1 bg-orange-500 hover:bg-orange-600">
                    Verify & Create Account
                  </Button>
                </div>
              </>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountForm;
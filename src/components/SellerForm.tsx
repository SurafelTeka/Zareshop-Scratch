import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { X, Upload } from 'lucide-react';

interface SellerFormProps {
  onClose: () => void;
}

const SellerForm: React.FC<SellerFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    businessName: '',
    phoneNumber: '',
    businessLicense: null as File | null,
    idDocument: null as File | null,
    package: 'basic'
  });

  const handleFileUpload = (field: 'businessLicense' | 'idDocument', file: File | null) => {
    setFormData(prev => ({ ...prev, [field]: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Become a Seller</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="businessName">Full Business Name</Label>
              <Input
                id="businessName"
                value={formData.businessName}
                onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                required
              />
            </div>

            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <div className="flex">
                <div className="bg-gray-100 px-3 py-2 border border-r-0 rounded-l-md text-sm">
                  +251
                </div>
                <Input
                  id="phoneNumber"
                  className="rounded-l-none"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                  required
                />
              </div>
            </div>

            <div>
              <Label>Business License Photo</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload('businessLicense', e.target.files?.[0] || null)}
                  className="hidden"
                  id="businessLicense"
                />
                <label htmlFor="businessLicense" className="cursor-pointer text-sm text-blue-600">
                  Click to upload business license
                </label>
                {formData.businessLicense && (
                  <p className="text-xs text-green-600 mt-1">{formData.businessLicense.name}</p>
                )}
              </div>
            </div>

            <div>
              <Label>ID/Fayda ID Upload</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload('idDocument', e.target.files?.[0] || null)}
                  className="hidden"
                  id="idDocument"
                />
                <label htmlFor="idDocument" className="cursor-pointer text-sm text-blue-600">
                  Click to upload ID document
                </label>
                {formData.idDocument && (
                  <p className="text-xs text-green-600 mt-1">{formData.idDocument.name}</p>
                )}
              </div>
            </div>

            <div>
              <Label>Business Package</Label>
              <RadioGroup
                value={formData.package}
                onValueChange={(value) => setFormData(prev => ({ ...prev, package: value }))}
                className="mt-2"
              >
                <div className="flex items-center space-x-2 p-3 border rounded-lg">
                  <RadioGroupItem value="basic" id="basic" />
                  <label htmlFor="basic" className="flex-1 cursor-pointer">
                    <div className="font-medium">Basic Package</div>
                    <div className="text-sm text-gray-600">599 ETB/month</div>
                  </label>
                </div>
                <div className="flex items-center space-x-2 p-3 border rounded-lg">
                  <RadioGroupItem value="premium" id="premium" />
                  <label htmlFor="premium" className="flex-1 cursor-pointer">
                    <div className="font-medium">Premium Package</div>
                    <div className="text-sm text-gray-600">899 ETB/month</div>
                  </label>
                </div>
              </RadioGroup>
            </div>

            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
              Submit Application
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SellerForm;
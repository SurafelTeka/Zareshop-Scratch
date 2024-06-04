import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import { User, Settings, LogOut, Moon, Sun } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/components/theme-provider';

interface AccountDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const AccountDropdown: React.FC<AccountDropdownProps> = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth();
  const { theme, setTheme } = useTheme();

  if (!isOpen || !user) return null;

  const handleLogout = () => {
    logout();
    onClose();
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarFallback className="bg-orange-500 text-white">
              {user.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-sm">{user.name}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">{user.phone_number}</p>
          </div>
        </div>
      </div>
      
      <div className="p-2">
        <Button
          variant="ghost"
          className="w-full justify-start text-left p-3 h-auto"
          onClick={onClose}
        >
          <User className="h-4 w-4 mr-3" />
          <span>Profile</span>
        </Button>
        
        <div className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
          <div className="flex items-center">
            {theme === 'dark' ? (
              <Moon className="h-4 w-4 mr-3" />
            ) : (
              <Sun className="h-4 w-4 mr-3" />
            )}
            <span className="text-sm">Dark Mode</span>
          </div>
          <Switch
            checked={theme === 'dark'}
            onCheckedChange={toggleTheme}
            className="data-[state=checked]:bg-orange-500"
          />
        </div>
        
        <Button
          variant="ghost"
          className="w-full justify-start text-left p-3 h-auto"
          onClick={onClose}
        >
          <Settings className="h-4 w-4 mr-3" />
          <span>Settings</span>
        </Button>
        
        <Button
          variant="ghost"
          className="w-full justify-start text-left p-3 h-auto text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4 mr-3" />
          <span>Logout</span>
        </Button>
      </div>
    </div>
  );
};

export default AccountDropdown;
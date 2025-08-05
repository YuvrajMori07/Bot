import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot, MessageCircle, Settings } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/app', icon: MessageCircle, label: 'Chat' },
    { path: '/settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Header for mobile */}
      <header className="lg:hidden bg-white dark:bg-gray-800 shadow-sm px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bot  className="h-8 w-8 text-blue-500" />
          <span className="text-xl font-bold text-gray-800 dark:text-white">Yuvi-bot</span>
        </div>

      </header>

      {/* Sidebar for desktop */}
      <nav className="hidden lg:flex lg:flex-col lg:w-64 bg-white dark:bg-gray-800 shadow-lg">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <Bot className="h-10 w-10 text-blue-500" />
            <span className="text-2xl font-bold text-gray-800 dark:text-white">Yuvi-bot</span>
          </div>
          

          <div className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 overflow-hidden">
        {children}
      </main>

      {/* Bottom navigation for mobile */}
      <nav className="lg:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-4 py-2">
        <div className="flex justify-around">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
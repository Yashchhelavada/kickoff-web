
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Calendar, Users, User, Trophy, Bell, Sun, Moon, Zap } from 'lucide-react';

const Navigation = () => {
  const [hasNotifications, setHasNotifications] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Initialize dark mode on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      document.body.style.background = 'linear-gradient(135deg, hsl(210 30% 8%) 0%, hsl(210 40% 6%) 100%)';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      document.body.style.background = 'linear-gradient(135deg, hsl(210 30% 98%) 0%, hsl(210 40% 95%) 100%)';
    }
  };

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Calendar, label: 'Matches', path: '/matches' },
    { icon: Trophy, label: 'Leagues', path: '/leagues' },
    { icon: Users, label: 'Teams', path: '/teams' },
    { icon: User, label: 'Players', path: '/players' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold neon-text">KickOff!</span>
          </div>
          
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-primary/20 text-primary neon-glow'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/30"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-400" />
              )}
            </button>
            <NavLink 
              to="/notifications"
              className="relative p-2 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <Bell className="w-5 h-5" />
              {hasNotifications && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse-neon" />
              )}
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-t border-border">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-primary neon-glow'
                    : 'text-muted-foreground'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navigation;

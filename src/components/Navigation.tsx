
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Trophy, Home, Calendar, Users, User, Bell, Menu, X, Sun, Moon, Plus } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check for saved theme preference or default to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Matches', icon: Calendar, path: '/matches' },
    { name: 'Leagues', icon: Trophy, path: '/leagues' },
    { name: 'Teams', icon: Users, path: '/teams' },
    { name: 'Players', icon: User, path: '/players' },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavigation('/')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center group-hover:neon-glow transition-all duration-300">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold neon-text">KickOff!</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-foreground hover:bg-muted/50 hover:text-primary'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </button>
              );
            })}
            
            {/* Create Match Button */}
            <button
              onClick={() => handleNavigation('/create-match')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700 ${
                location.pathname === '/create-match'
                  ? 'ring-2 ring-green-400'
                  : ''
              }`}
            >
              <Plus className="w-4 h-4" />
              <span className="font-medium">Create Match</span>
            </button>
            
            {/* Notifications */}
            <button
              onClick={() => handleNavigation('/notifications')}
              className={`p-2 rounded-lg transition-all duration-300 ${
                location.pathname === '/notifications'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-muted/50 hover:text-primary'
              }`}
            >
              <Bell className="w-5 h-5" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-300 text-foreground hover:bg-muted/50 hover:text-primary"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-300 text-foreground hover:bg-muted/50"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg transition-all duration-300 text-foreground hover:bg-muted/50"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-in-up">
            <div className="space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.path)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-foreground hover:bg-muted/50'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                );
              })}
              
              {/* Mobile Create Match Button */}
              <button
                onClick={() => handleNavigation('/create-match')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 bg-gradient-to-r from-green-600 to-blue-600 text-white ${
                  location.pathname === '/create-match'
                    ? 'ring-2 ring-green-400'
                    : ''
                }`}
              >
                <Plus className="w-5 h-5" />
                <span className="font-medium">Create Match</span>
              </button>
              
              <button
                onClick={() => handleNavigation('/notifications')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  location.pathname === '/notifications'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted/50'
                }`}
              >
                <Bell className="w-5 h-5" />
                <span className="font-medium">Notifications</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

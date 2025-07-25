
import { Trophy, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border mt-20" style={{ backgroundColor: 'hsl(var(--footer-bg))', color: 'hsl(var(--footer-text))' }}>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          
          {/* Brand Section */}
          <div className="space-y-3 md:space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">KickOff!</span>
            </div>
            <p className="text-white/80 text-sm">
              Your ultimate destination for live football scores, matches, and the latest transfer news. 
              Stay connected with the beautiful game.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-white/80 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-white/80 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-white/80 hover:text-white cursor-pointer transition-colors" />
                <Youtube className="w-5 h-5 text-white/80 hover:text-white cursor-pointer transition-colors" />
              </div>
              <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors w-fit">
                Download App
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-white/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="/matches" className="text-white/80 hover:text-white transition-colors">Live Matches</a></li>
              <li><a href="/leagues" className="text-white/80 hover:text-white transition-colors">Leagues</a></li>
              <li><a href="/teams" className="text-white/80 hover:text-white transition-colors">Teams</a></li>
              <li><a href="/players" className="text-white/80 hover:text-white transition-colors">Players</a></li>
            </ul>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Features</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-white/80">Live Score Updates</span></li>
              <li><span className="text-white/80">Transfer News</span></li>
              <li><span className="text-white/80">Match Highlights</span></li>
              <li><span className="text-white/80">Team Statistics</span></li>
              <li><span className="text-white/80">Player Profiles</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-white/80">
                <Mail className="w-4 h-4" />
                <span>ykchhelavada@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Phone className="w-4 h-4" />
                <span>+91 9632587415</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <MapPin className="w-4 h-4" />
                <span>Ahmedabad, India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/80">
            © 2025 KickOff! All rights reserved. Built with ❤️ for football fans.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

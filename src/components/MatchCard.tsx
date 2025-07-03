
import { useState } from 'react';
import { Clock, MapPin, Users } from 'lucide-react';

interface Match {
  id: string;
  homeTeam: {
    name: string;
    logo: string;
    score?: number;
  };
  awayTeam: {
    name: string;
    logo: string;
    score?: number;
  };
  status: 'LIVE' | 'FT' | 'HT' | 'SCHEDULED';
  minute?: string;
  time?: string;
  league: string;
  venue?: string;
  attendance?: string;
}

interface MatchCardProps {
  match: Match;
  onClick?: () => void;
}

const MatchCard = ({ match, onClick }: MatchCardProps) => {
  const [showPreview, setShowPreview] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'LIVE': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'HT': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'FT': return 'bg-muted/20 text-muted-foreground border-muted/30';
      default: return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

  return (
    <div 
      className="relative group cursor-pointer"
      onMouseEnter={() => setShowPreview(true)}
      onMouseLeave={() => setShowPreview(false)}
      onClick={onClick}
    >
      <div className="glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
        {/* League Badge */}
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs text-muted-foreground font-medium">{match.league}</span>
          <span className={`text-xs px-2 py-1 rounded-full border ${getStatusColor(match.status)}`}>
            {match.status === 'LIVE' && match.minute ? match.minute : match.status}
          </span>
        </div>

        {/* Teams */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3 flex-1">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                {match.homeTeam.name.substring(0, 2).toUpperCase()}
              </span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">{match.homeTeam.name}</p>
            </div>
          </div>

          {/* Score */}
          <div className="flex items-center space-x-3 mx-4">
            {match.homeTeam.score !== undefined ? (
              <>
                <span className="text-2xl font-bold text-primary">{match.homeTeam.score}</span>
                <span className="text-muted-foreground">-</span>
                <span className="text-2xl font-bold text-primary">{match.awayTeam.score}</span>
              </>
            ) : (
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{match.time}</span>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-3 flex-1 justify-end">
            <div className="flex-1 text-right">
              <p className="font-semibold text-sm">{match.awayTeam.name}</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                {match.awayTeam.name.substring(0, 2).toUpperCase()}
              </span>
            </div>
          </div>
        </div>

        {/* Live indicator */}
        {match.status === 'LIVE' && (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-green-400 font-medium">LIVE</span>
          </div>
        )}
      </div>

      {/* Preview Popup */}
      {showPreview && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50 animate-fade-in-scale">
          <div className="glass-card p-4 rounded-lg border border-primary/30">
            <div className="space-y-2">
              {match.venue && (
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span>{match.venue}</span>
                </div>
              )}
              {match.attendance && (
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Users className="w-3 h-3" />
                  <span>{match.attendance} attendance</span>
                </div>
              )}
              <div className="flex space-x-2 pt-2">
                <button className="flex-1 py-2 px-3 bg-primary/20 text-primary rounded-lg text-xs font-medium hover:bg-primary/30 transition-colors">
                  Watch Live
                </button>
                <button className="flex-1 py-2 px-3 bg-muted/20 text-muted-foreground rounded-lg text-xs font-medium hover:bg-muted/30 transition-colors">
                  View Stats
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchCard;

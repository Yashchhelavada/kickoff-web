
import { useState } from 'react';
import { Clock, MapPin, Users, Trophy } from 'lucide-react';

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
      case 'FT': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

  const formatMatchTime = (time?: string) => {
    if (!time) return '';
    try {
      const date = new Date(time);
      return date.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      });
    } catch {
      return time;
    }
  };

  return (
    <div 
      className="relative group cursor-pointer"
      onMouseEnter={() => setShowPreview(true)}
      onMouseLeave={() => setShowPreview(false)}
      onClick={onClick}
    >
      <div className="glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-cyan-400/20">
        {/* League Badge and Status */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-2">
            <Trophy className="w-4 h-4 text-cyan-400" />
            <span className="text-xs text-muted-foreground font-medium">{match.league}</span>
          </div>
          <span className={`text-xs px-3 py-1 rounded-full border font-semibold ${getStatusColor(match.status)}`}>
            {match.status === 'FT' ? 'FULL TIME' : match.status}
          </span>
        </div>

        {/* Teams and Score */}
        <div className="flex items-center justify-between mb-4">
          {/* Home Team */}
          <div className="flex items-center space-x-3 flex-1">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">
                {match.homeTeam.name.substring(0, 2).toUpperCase()}
              </span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">{match.homeTeam.name}</p>
            </div>
          </div>

          {/* Score */}
          <div className="flex items-center space-x-4 mx-6">
            {match.homeTeam.score !== undefined && match.awayTeam.score !== undefined ? (
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-primary bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {match.homeTeam.score}
                </span>
                <span className="text-2xl text-muted-foreground font-bold">-</span>
                <span className="text-3xl font-bold text-primary bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {match.awayTeam.score}
                </span>
              </div>
            ) : (
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">{formatMatchTime(match.time)}</span>
              </div>
            )}
          </div>

          {/* Away Team */}
          <div className="flex items-center space-x-3 flex-1 justify-end">
            <div className="flex-1 text-right">
              <p className="font-semibold text-sm">{match.awayTeam.name}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">
                {match.awayTeam.name.substring(0, 2).toUpperCase()}
              </span>
            </div>
          </div>
        </div>

        {/* Match Time for Finished Matches */}
        {match.status === 'FT' && match.time && (
          <div className="text-center">
            <span className="text-xs text-muted-foreground">
              Finished at {formatMatchTime(match.time)}
            </span>
          </div>
        )}

        {/* Live indicator */}
        {match.status === 'LIVE' && (
          <div className="flex items-center justify-center space-x-2 mt-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-green-400 font-medium">LIVE</span>
          </div>
        )}
      </div>

      {/* Enhanced Preview Popup */}
      {showPreview && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50 animate-fade-in-scale">
          <div className="glass-card p-4 rounded-lg border border-primary/30 bg-gradient-to-r from-cyan-400/5 to-purple-400/5">
            <div className="space-y-3">
              {match.venue && (
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  <span>{match.venue}</span>
                </div>
              )}
              {match.attendance && (
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Users className="w-3 h-3 text-purple-400" />
                  <span>{match.attendance} attendance</span>
                </div>
              )}
              <div className="flex space-x-2 pt-2">
                <button className="flex-1 py-2 px-3 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-cyan-400 rounded-lg text-xs font-medium hover:from-cyan-400/30 hover:to-blue-500/30 transition-all duration-300 border border-cyan-400/30">
                  View Highlights
                </button>
                <button className="flex-1 py-2 px-3 bg-gradient-to-r from-purple-400/20 to-pink-500/20 text-purple-400 rounded-lg text-xs font-medium hover:from-purple-400/30 hover:to-pink-500/30 transition-all duration-300 border border-purple-400/30">
                  Match Stats
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


import { useEffect, useState } from 'react';

interface TickerMatch {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  minute: string;
  status: string;
}

const MatchTicker = () => {
  const [matches] = useState<TickerMatch[]>([
    { id: '1', homeTeam: 'Arsenal', awayTeam: 'Chelsea', homeScore: 2, awayScore: 1, minute: '78\'', status: 'LIVE' },
    { id: '2', homeTeam: 'Barcelona', awayTeam: 'Real Madrid', homeScore: 1, awayScore: 1, minute: '45\'', status: 'HT' },
    { id: '3', homeTeam: 'Liverpool', awayTeam: 'Man City', homeScore: 3, awayScore: 2, minute: 'FT', status: 'FT' },
    { id: '4', homeTeam: 'PSG', awayTeam: 'Bayern', homeScore: 0, awayScore: 1, minute: '23\'', status: 'LIVE' },
  ]);

  return (
    <div className="fixed top-16 md:top-16 left-0 right-0 z-40 bg-card/80 backdrop-blur-sm border-b border-border overflow-hidden">
      <div className="flex animate-slide-in-up">
        <div className="flex space-x-8 animate-marquee whitespace-nowrap py-3">
          {[...matches, ...matches].map((match, index) => (
            <div key={`${match.id}-${index}`} className="flex items-center space-x-3 px-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">{match.homeTeam}</span>
                <div className="flex items-center space-x-1">
                  <span className="text-lg font-bold text-primary">{match.homeScore}</span>
                  <span className="text-muted-foreground">-</span>
                  <span className="text-lg font-bold text-primary">{match.awayScore}</span>
                </div>
                <span className="text-sm font-medium">{match.awayTeam}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  match.status === 'LIVE' ? 'bg-green-500/20 text-green-400' :
                  match.status === 'HT' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-muted/20 text-muted-foreground'
                }`}>
                  {match.minute}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchTicker;

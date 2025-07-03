
import { useFootballData } from '@/hooks/useFootballData';

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
  const { liveMatches, isLoading } = useFootballData();

  // Transform real-time data for ticker display
  const tickerMatches: TickerMatch[] = liveMatches.map(match => ({
    id: match.id,
    homeTeam: match.homeTeam.name,
    awayTeam: match.awayTeam.name,
    homeScore: match.homeTeam.score || 0,
    awayScore: match.awayTeam.score || 0,
    minute: match.minute || 'LIVE',
    status: match.status,
  }));

  // Fallback data when no live matches or loading
  const fallbackMatches: TickerMatch[] = [
    { id: '1', homeTeam: 'Loading...', awayTeam: 'Live Data', homeScore: 0, awayScore: 0, minute: '...', status: 'LIVE' }
  ];

  const matches = tickerMatches.length > 0 ? tickerMatches : fallbackMatches;

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

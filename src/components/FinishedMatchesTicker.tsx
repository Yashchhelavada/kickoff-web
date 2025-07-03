
import { useFootballData } from '@/hooks/useFootballData';

interface TickerMatch {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
}

const FinishedMatchesTicker = () => {
  const { todayMatches, isLoading } = useFootballData();

  // Get finished matches for ticker
  const finishedMatches: TickerMatch[] = todayMatches
    .filter(match => match.status === 'FT')
    .slice(0, 10)
    .map(match => ({
      id: match.id,
      homeTeam: match.homeTeam.name,
      awayTeam: match.awayTeam.name,
      homeScore: match.homeTeam.score || 0,
      awayScore: match.awayTeam.score || 0,
    }));

  // Fallback data when no finished matches
  const fallbackMatches: TickerMatch[] = [
    { id: '1', homeTeam: 'Loading...', awayTeam: 'Finished Matches', homeScore: 0, awayScore: 0 }
  ];

  const matches = finishedMatches.length > 0 ? finishedMatches : fallbackMatches;

  if (matches.length === 0 || isLoading) {
    return null;
  }

  return (
    <div className="fixed top-16 md:top-16 left-0 right-0 z-40 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20 backdrop-blur-sm border-b border-purple-500/30 overflow-hidden">
      <div className="flex animate-slide-in-up">
        <div className="flex space-x-8 animate-marquee whitespace-nowrap py-3">
          {[...matches, ...matches].map((match, index) => (
            <div key={`${match.id}-${index}`} className="flex items-center space-x-4 px-6">
              <div className="flex items-center space-x-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg px-4 py-2 border border-purple-500/20">
                <span className="text-sm font-semibold text-cyan-400">{match.homeTeam}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-purple-400">{match.homeScore}</span>
                  <span className="text-purple-300">-</span>
                  <span className="text-lg font-bold text-cyan-400">{match.awayScore}</span>
                </div>
                <span className="text-sm font-semibold text-purple-400">{match.awayTeam}</span>
              </div>
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinishedMatchesTicker;

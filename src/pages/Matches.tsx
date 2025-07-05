
import Navigation from '@/components/Navigation';
import MatchCard from '@/components/MatchCard';
import { useFootballData } from '@/hooks/useFootballData';
import { Calendar } from 'lucide-react';

const Matches = () => {
  const { liveMatches, todayMatches, isLoading, error } = useFootballData();

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="pt-20 md:pt-20 pb-20 md:pb-8">
        <div className="container mx-auto px-4 space-y-8">
          
          <section className="text-center py-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Football Matches
            </h1>
            <p className="text-xl text-muted-foreground">Live and today's football matches</p>
          </section>

          {isLoading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              <span className="ml-4 text-muted-foreground">Loading matches...</span>
            </div>
          )}

          {error && (
            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 text-center">
              <p className="text-destructive">Unable to load match data</p>
            </div>
          )}

          {/* Live Matches */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <h2 className="text-2xl font-bold">Live Matches</h2>
              <span className="text-sm text-muted-foreground">({liveMatches.length} live)</span>
            </div>
            {liveMatches.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {liveMatches.map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            ) : (
              <div className="glass-card p-8 rounded-xl text-center">
                <p className="text-muted-foreground">No live matches at the moment</p>
              </div>
            )}
          </section>

          {/* Today's Matches */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <Calendar className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Today's Matches</h2>
              <span className="text-sm text-muted-foreground">({todayMatches.length} matches)</span>
            </div>
            {todayMatches.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {todayMatches.map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            ) : (
              <div className="glass-card p-8 rounded-xl text-center">
                <p className="text-muted-foreground">No matches scheduled for today</p>
              </div>
            )}
          </section>

        </div>
      </main>
    </div>
  );
};

export default Matches;

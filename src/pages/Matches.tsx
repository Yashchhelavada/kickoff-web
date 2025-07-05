
import Navigation from '@/components/Navigation';
import MatchCard from '@/components/MatchCard';
import MatchTicker from '@/components/MatchTicker';
import FinishedMatchesTicker from '@/components/FinishedMatchesTicker';
import Footer from '@/components/Footer';
import { useFootballData } from '@/hooks/useFootballData';
import { Trophy, Clock, Calendar } from 'lucide-react';

const Matches = () => {
  const { liveMatches, todayMatches, isLoading, error } = useFootballData();

  const finishedMatches = todayMatches.filter(match => match.status === 'FT');
  const upcomingMatches = todayMatches.filter(match => match.status === 'SCHEDULED');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <MatchTicker />
      <FinishedMatchesTicker />
      
      <main className="pt-40 md:pt-36 pb-20 md:pb-8">
        <div className="container mx-auto px-4 space-y-8">
          
          <section className="text-center py-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
              Football Matches
            </h1>
            <p className="text-xl text-muted-foreground">Complete schedule of today's matches</p>
          </section>

          {isLoading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              <span className="ml-4 text-muted-foreground">Loading matches...</span>
            </div>
          )}

          {error && (
            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 text-center">
              <p className="text-destructive">Unable to load match data.</p>
            </div>
          )}

          {/* Live Matches */}
          {liveMatches.length > 0 && (
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <h2 className="text-2xl font-bold text-foreground">Live Matches</h2>
                <span className="text-sm text-muted-foreground">({liveMatches.length} live)</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {liveMatches.map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            </section>
          )}

          {/* Finished Matches */}
          {finishedMatches.length > 0 && (
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <Trophy className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Finished Matches</h2>
                <span className="text-sm text-muted-foreground">({finishedMatches.length} completed)</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {finishedMatches.map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            </section>
          )}

          {/* Upcoming Matches */}
          {upcomingMatches.length > 0 && (
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-6 h-6 text-secondary" />
                <h2 className="text-2xl font-bold text-foreground">Upcoming Matches</h2>
                <span className="text-sm text-muted-foreground">({upcomingMatches.length} scheduled)</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingMatches.map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            </section>
          )}

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Matches;

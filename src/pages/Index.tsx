import { useState } from 'react';
import Navigation from '@/components/Navigation';
import MatchTicker from '@/components/MatchTicker';
import FinishedMatchesTicker from '@/components/FinishedMatchesTicker';
import MatchCard from '@/components/MatchCard';
import { Trophy, Star, TrendingUp, Users, Calendar, Bell, Clock } from 'lucide-react';
import { useFootballData } from '@/hooks/useFootballData';

const Index = () => {
  const { liveMatches, todayMatches, isLoading, error } = useFootballData();

  // Get finished matches from today's matches (filtered for FT status)
  const finishedMatches = todayMatches
    .filter(match => match.status === 'FT')
    .slice(0, 6);

  const [topLeagues] = useState([
    { name: 'Premier League', country: 'England', teams: 20, icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    { name: 'La Liga', country: 'Spain', teams: 20, icon: '🇪🇸' },
    { name: 'Serie A', country: 'Italy', teams: 20, icon: '🇮🇹' },
    { name: 'Bundesliga', country: 'Germany', teams: 18, icon: '🇩🇪' },
    { name: 'Ligue 1', country: 'France', teams: 20, icon: '🇫🇷' },
    { name: 'Champions League', country: 'Europe', teams: 32, icon: '🏆' }
  ]);

  const [todayHighlights] = useState([
    { 
      title: 'Arsenal extends winning streak', 
      description: 'The Gunners secure their 8th consecutive victory',
      time: '2 hours ago',
      type: 'goal'
    },
    { 
      title: 'El Clasico ends in thrilling draw', 
      description: 'Barcelona and Real Madrid share points in heated encounter',
      time: '1 hour ago',
      type: 'match'
    },
    { 
      title: 'Mbappe breaks scoring record', 
      description: 'French striker becomes youngest to reach 200 goals',
      time: '45 minutes ago',
      type: 'record'
    }
  ]);

  if (error) {
    console.error('Football data error:', error);
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <MatchTicker />
      <FinishedMatchesTicker />
      
      {/* Main Content */}
      <main className="pt-40 md:pt-36 pb-20 md:pb-8">
        <div className="container mx-auto px-4 space-y-8">
          
          {/* Hero Section */}
          <section className="text-center py-8 animate-slide-in-up">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Kickoff!
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Follow live matches, get real-time scores, and dive deep into football analytics with our modern platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:neon-glow transition-all duration-300 transform hover:scale-105">
                <Bell className="w-5 h-5 inline mr-2" />
                Enable Live Notifications
              </button>
              <button className="px-8 py-4 glass-card rounded-xl font-semibold hover:bg-muted/10 transition-all duration-300">
                <Calendar className="w-5 h-5 inline mr-2" />
                View Full Schedule
              </button>
            </div>
          </section>

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              <span className="ml-4 text-muted-foreground">Loading live matches...</span>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 text-center">
              <p className="text-destructive">Unable to load live data. Showing cached results.</p>
              <p className="text-sm text-muted-foreground mt-2">
                Please check your internet connection or try again later.
              </p>
            </div>
          )}

          {/* Live Matches Section */}
          <section className="animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
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

          {/* Finished Matches Section */}
          <section className="animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center space-x-3 mb-6">
              <Trophy className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Today's Finished Matches
              </h2>
              <span className="text-sm text-muted-foreground">({finishedMatches.length} completed)</span>
            </div>
            {finishedMatches.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {finishedMatches.map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            ) : (
              <div className="glass-card p-8 rounded-xl text-center border border-purple-500/20">
                <div className="mb-4">
                  <Trophy className="w-12 h-12 text-purple-400 mx-auto opacity-50" />
                </div>
                <p className="text-muted-foreground">No finished matches available for today</p>
                <p className="text-sm text-muted-foreground/70 mt-2">Check back later for completed match results</p>
              </div>
            )}
          </section>

          {/* Top Leagues Section */}
          <section className="animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center space-x-3 mb-6">
              <Trophy className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Top Leagues</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {topLeagues.map((league, index) => (
                <div key={index} className="glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-3xl">{league.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{league.name}</h3>
                      <p className="text-sm text-muted-foreground">{league.country}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{league.teams} teams</span>
                    <span className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>Follow</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Today's Highlights Section */}
          <section className="animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center space-x-3 mb-6">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Today's Highlights</h2>
            </div>
            <div className="space-y-4">
              {todayHighlights.map((highlight, index) => (
                <div key={index} className="glass-card p-6 rounded-xl hover:bg-muted/5 transition-all duration-300 cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      highlight.type === 'goal' ? 'bg-green-500/20' :
                      highlight.type === 'match' ? 'bg-blue-500/20' :
                      'bg-purple-500/20'
                    }`}>
                      {highlight.type === 'goal' ? '⚽' : 
                       highlight.type === 'match' ? '🏟️' : '🏆'}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{highlight.title}</h3>
                      <p className="text-muted-foreground mb-2">{highlight.description}</p>
                      <span className="text-sm text-muted-foreground">{highlight.time}</span>
                    </div>
                    <Star className="w-5 h-5 text-muted-foreground hover:text-yellow-400 transition-colors cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default Index;

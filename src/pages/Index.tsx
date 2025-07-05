
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import MatchTicker from '@/components/MatchTicker';
import FinishedMatchesTicker from '@/components/FinishedMatchesTicker';
import MatchCard from '@/components/MatchCard';
import Footer from '@/components/Footer';
import { Trophy, Star, TrendingUp, Users, Calendar, Bell, Clock, ArrowRight } from 'lucide-react';
import { useFootballData } from '@/hooks/useFootballData';
import { getTransferNews } from '@/services/transferNews';

const Index = () => {
  const navigate = useNavigate();
  const { liveMatches, todayMatches, isLoading, error } = useFootballData();
  const transferNews = getTransferNews();

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

  if (error) {
    console.error('Football data error:', error);
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <MatchTicker />
      <FinishedMatchesTicker />
      
      {/* Main Content */}
      <main className="pt-40 md:pt-36 pb-20 md:pb-8">
        <div className="container mx-auto px-4 space-y-8">
          
          {/* Hero Section with Football Background */}
          <section className="relative text-center py-16 animate-slide-in-up overflow-hidden">
            {/* Enhanced Football collage background */}
            <div className="absolute inset-0 opacity-5 flex items-center justify-center">
              <div className="grid grid-cols-5 gap-8 transform rotate-12">
                <div className="text-8xl select-none animate-bounce" style={{animationDelay: '0s'}}>⚽</div>
                <div className="text-6xl select-none animate-bounce" style={{animationDelay: '0.5s'}}>🏆</div>
                <div className="text-8xl select-none animate-bounce" style={{animationDelay: '1s'}}>⚽</div>
                <div className="text-6xl select-none animate-bounce" style={{animationDelay: '1.5s'}}>🥅</div>
                <div className="text-8xl select-none animate-bounce" style={{animationDelay: '2s'}}>⚽</div>
                <div className="text-6xl select-none animate-bounce" style={{animationDelay: '0.3s'}}>🏟️</div>
                <div className="text-8xl select-none animate-bounce" style={{animationDelay: '0.8s'}}>⚽</div>
                <div className="text-6xl select-none animate-bounce" style={{animationDelay: '1.3s'}}>🏆</div>
                <div className="text-8xl select-none animate-bounce" style={{animationDelay: '1.8s'}}>⚽</div>
                <div className="text-6xl select-none animate-bounce" style={{animationDelay: '2.3s'}}>🥅</div>
                <div className="text-8xl select-none animate-bounce" style={{animationDelay: '0.2s'}}>⚽</div>
                <div className="text-6xl select-none animate-bounce" style={{animationDelay: '0.7s'}}>🏟️</div>
                <div className="text-8xl select-none animate-bounce" style={{animationDelay: '1.2s'}}>⚽</div>
                <div className="text-6xl select-none animate-bounce" style={{animationDelay: '1.7s'}}>🏆</div>
                <div className="text-8xl select-none animate-bounce" style={{animationDelay: '2.2s'}}>⚽</div>
              </div>
            </div>
            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
                KickOff!
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Follow live matches, get real-time scores, and dive deep into football analytics with our modern platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => navigate('/notifications')}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:neon-glow transition-all duration-300 transform hover:scale-105"
                >
                  <Bell className="w-5 h-5 inline mr-2" />
                  Enable Live Notifications
                </button>
                <button 
                  onClick={() => navigate('/matches')}
                  className="px-8 py-4 glass-card rounded-xl font-semibold hover:bg-muted/10 transition-all duration-300 text-foreground"
                >
                  <Calendar className="w-5 h-5 inline mr-2" />
                  View Full Schedule
                </button>
              </div>
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
          {liveMatches.length > 0 && (
            <section className="animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <h2 className="text-2xl font-bold">Live Matches</h2>
                <span className="text-sm text-muted-foreground">({liveMatches.length} live)</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {liveMatches.slice(0, 6).map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            </section>
          )}

          {/* Finished Matches Section */}
          {finishedMatches.length > 0 && (
            <section className="animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center space-x-3 mb-6">
                <Trophy className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Today's Finished Matches
                </h2>
                <span className="text-sm text-muted-foreground">({finishedMatches.length} completed)</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {finishedMatches.map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            </section>
          )}

          {/* Transfer News Section */}
          <section className="animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Latest Transfer News</h2>
              </div>
              <button className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
                <span className="text-sm">View All</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4">
              {transferNews.slice(0, 4).map((news) => (
                <div key={news.id} className="glass-card p-6 rounded-xl hover:bg-muted/5 transition-all duration-300 cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      news.type === 'transfer' ? 'bg-green-500/20' :
                      news.type === 'loan' ? 'bg-blue-500/20' :
                      'bg-yellow-500/20'
                    }`}>
                      {news.type === 'transfer' ? '✅' : 
                       news.type === 'loan' ? '🔄' : '📰'}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-lg">{news.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          news.type === 'transfer' ? 'bg-green-500/20 text-green-400' :
                          news.type === 'loan' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {news.type.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-2">{news.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{news.fromTeam} → {news.toTeam}</span>
                        <div className="flex items-center space-x-4">
                          <span className="text-primary font-medium">{news.fee}</span>
                          <div className="flex items-center space-x-1 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{news.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Top Leagues Section */}
          <section className="animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
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

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

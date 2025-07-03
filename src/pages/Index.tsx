
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import MatchTicker from '@/components/MatchTicker';
import MatchCard from '@/components/MatchCard';
import { Trophy, Star, TrendingUp, Users, Calendar, Bell } from 'lucide-react';

const Index = () => {
  const [liveMatches] = useState([
    {
      id: '1',
      homeTeam: { name: 'Arsenal', logo: '', score: 2 },
      awayTeam: { name: 'Chelsea', logo: '', score: 1 },
      status: 'LIVE' as const,
      minute: '78\'',
      league: 'Premier League',
      venue: 'Emirates Stadium',
      attendance: '60,000'
    },
    {
      id: '2',
      homeTeam: { name: 'Barcelona', logo: '', score: 1 },
      awayTeam: { name: 'Real Madrid', logo: '', score: 1 },
      status: 'HT' as const,
      minute: 'HT',
      league: 'La Liga',
      venue: 'Camp Nou',
      attendance: '99,354'
    },
    {
      id: '3',
      homeTeam: { name: 'Liverpool', logo: '', score: 3 },
      awayTeam: { name: 'Man City', logo: '', score: 2 },
      status: 'FT' as const,
      league: 'Premier League',
      venue: 'Anfield',
      attendance: '54,074'
    }
  ]);

  const [upcomingMatches] = useState([
    {
      id: '4',
      homeTeam: { name: 'PSG', logo: '' },
      awayTeam: { name: 'Bayern Munich', logo: '' },
      status: 'SCHEDULED' as const,
      time: '20:00',
      league: 'Champions League',
      venue: 'Parc des Princes'
    },
    {
      id: '5',
      homeTeam: { name: 'Juventus', logo: '' },
      awayTeam: { name: 'AC Milan', logo: '' },
      status: 'SCHEDULED' as const,
      time: '18:45',
      league: 'Serie A',
      venue: 'Allianz Stadium'
    }
  ]);

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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <MatchTicker />
      
      {/* Main Content */}
      <main className="pt-32 md:pt-28 pb-20 md:pb-8">
        <div className="container mx-auto px-4 space-y-8">
          
          {/* Hero Section */}
          <section className="text-center py-8 animate-slide-in-up">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Live Football Experience
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

          {/* Live Matches Section */}
          <section className="animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <h2 className="text-2xl font-bold">Live Matches</h2>
              <span className="text-sm text-muted-foreground">({liveMatches.length} live)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </section>

          {/* Upcoming Matches Section */}
          <section className="animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center space-x-3 mb-6">
              <Clock className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Upcoming Matches</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
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

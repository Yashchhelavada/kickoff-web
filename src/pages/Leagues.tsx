
import Navigation from '@/components/Navigation';
import { Trophy, Users, Star } from 'lucide-react';

const Leagues = () => {
  const topLeagues = [
    { name: 'Premier League', country: 'England', teams: 20, icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', founded: 1992, url: 'https://www.premierleague.com' },
    { name: 'La Liga', country: 'Spain', teams: 20, icon: '🇪🇸', founded: 1929, url: 'https://www.laliga.com' },
    { name: 'Serie A', country: 'Italy', teams: 20, icon: '🇮🇹', founded: 1898, url: 'https://www.legaseriea.it' },
    { name: 'Bundesliga', country: 'Germany', teams: 18, icon: '🇩🇪', founded: 1963, url: 'https://www.bundesliga.com' },
    { name: 'Ligue 1', country: 'France', teams: 20, icon: '🇫🇷', founded: 1932, url: 'https://www.ligue1.com' },
    { name: 'Champions League', country: 'Europe', teams: 32, icon: '🏆', founded: 1955, url: 'https://www.uefa.com/uefachampionsleague' },
    { name: 'Europa League', country: 'Europe', teams: 48, icon: '🥈', founded: 1971, url: 'https://www.uefa.com/uefaeuropaleague' },
    { name: 'Premier League 2', country: 'England', teams: 28, icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', founded: 2012, url: 'https://www.premierleague.com/premier-league-2' }
  ];

  const handleLeagueClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 md:pt-20 pb-20 md:pb-8">
        <div className="container mx-auto px-4 space-y-8">
          
          <section className="text-center py-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
              Football Leagues
            </h1>
            <p className="text-xl text-muted-foreground">Explore top football leagues around the world</p>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-6">
              <Trophy className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Top Leagues</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {topLeagues.map((league, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300 cursor-pointer group"
                  onClick={() => handleLeagueClick(league.url)}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl">{league.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors text-foreground">{league.name}</h3>
                      <p className="text-sm text-muted-foreground">{league.country}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{league.teams} teams</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Est. {league.founded}</span>
                      </span>
                    </div>
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

export default Leagues;

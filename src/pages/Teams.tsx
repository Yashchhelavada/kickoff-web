
import Navigation from '@/components/Navigation';
import { Users, Trophy, Target, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Teams = () => {
  const navigate = useNavigate();
  
  const topTeams = [
    { 
      name: 'Manchester City', 
      league: 'Premier League', 
      country: 'England', 
      founded: 1880, 
      logo: 'https://logos-world.net/wp-content/uploads/2020/06/Manchester-City-Logo.png'
    },
    { 
      name: 'Real Madrid', 
      league: 'La Liga', 
      country: 'Spain', 
      founded: 1902, 
      logo: 'https://logoeps.com/wp-content/uploads/2013/03/real-madrid-vector-logo.png'
    },
    { 
      name: 'Barcelona', 
      league: 'La Liga', 
      country: 'Spain', 
      founded: 1899, 
      logo: 'https://logoeps.com/wp-content/uploads/2013/03/barcelona-vector-logo.png'
    },
    { 
      name: 'Bayern Munich', 
      league: 'Bundesliga', 
      country: 'Germany', 
      founded: 1900, 
      logo: 'https://logoeps.com/wp-content/uploads/2013/03/bayern-munich-vector-logo.png'
    },
    { 
      name: 'Paris Saint-Germain', 
      league: 'Ligue 1', 
      country: 'France', 
      founded: 1970, 
      logo: 'https://logoeps.com/wp-content/uploads/2014/11/paris-saint-germain-vector-logo.png'
    },
    { 
      name: 'Liverpool', 
      league: 'Premier League', 
      country: 'England', 
      founded: 1892, 
      logo: 'https://logoeps.com/wp-content/uploads/2013/03/liverpool-vector-logo.png'
    },
    { 
      name: 'Juventus', 
      league: 'Serie A', 
      country: 'Italy', 
      founded: 1897, 
      logo: 'https://logoeps.com/wp-content/uploads/2013/03/juventus-vector-logo.png'
    },
    { 
      name: 'Arsenal', 
      league: 'Premier League', 
      country: 'England', 
      founded: 1886, 
      logo: 'https://logoeps.com/wp-content/uploads/2013/03/arsenal-vector-logo.png'
    }
  ];

  const handleTeamClick = (team: any) => {
    // Navigate to a team detail page (we'll create this route)
    navigate(`/team/${team.name.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 md:pt-20 pb-20 md:pb-8">
        <div className="container mx-auto px-4 space-y-8">
          
          <section className="text-center py-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
              Football Teams
            </h1>
            <p className="text-xl text-muted-foreground">Discover top football clubs worldwide</p>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-6">
              <Users className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Top Teams</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {topTeams.map((team, index) => (
                <div 
                  key={index} 
                  className="glass-card p-4 md:p-6 rounded-xl hover:neon-glow transition-all duration-300 cursor-pointer group"
                  onClick={() => handleTeamClick(team)}
                >
                  <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-white/10 flex items-center justify-center flex-shrink-0">
                      <img 
                        src={team.logo} 
                        alt={`${team.name} logo`}
                        className="w-6 h-6 md:w-8 md:h-8 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(team.name)}&background=326eb8&color=fff&size=64`;
                        }}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-sm md:text-lg group-hover:text-primary transition-colors text-foreground truncate">{team.name}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">{team.league}</p>
                    </div>
                  </div>
                  <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Target className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                      <span>{team.country}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Trophy className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                      <span>Founded {team.founded}</span>
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

export default Teams;

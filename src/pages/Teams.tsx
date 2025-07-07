
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
      logo: 'https://logos-world.net/wp-content/uploads/2020/06/Real-Madrid-Logo.png'
    },
    { 
      name: 'Barcelona', 
      league: 'La Liga', 
      country: 'Spain', 
      founded: 1899, 
      logo: 'https://logos-world.net/wp-content/uploads/2020/06/Barcelona-Logo.png'
    },
    { 
      name: 'Bayern Munich', 
      league: 'Bundesliga', 
      country: 'Germany', 
      founded: 1900, 
      logo: 'https://logos-world.net/wp-content/uploads/2020/06/Bayern-Munich-Logo.png'
    },
    { 
      name: 'Paris Saint-Germain', 
      league: 'Ligue 1', 
      country: 'France', 
      founded: 1970, 
      logo: 'https://logos-world.net/wp-content/uploads/2020/06/Paris-Saint-Germain-PSG-Logo.png'
    },
    { 
      name: 'Liverpool', 
      league: 'Premier League', 
      country: 'England', 
      founded: 1892, 
      logo: 'https://logos-world.net/wp-content/uploads/2020/06/Liverpool-Logo.png'
    },
    { 
      name: 'Juventus', 
      league: 'Serie A', 
      country: 'Italy', 
      founded: 1897, 
      logo: 'https://logos-world.net/wp-content/uploads/2020/06/Juventus-Logo.png'
    },
    { 
      name: 'Arsenal', 
      league: 'Premier League', 
      country: 'England', 
      founded: 1886, 
      logo: 'https://logos-world.net/wp-content/uploads/2020/06/Arsenal-Logo.png'
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {topTeams.map((team, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300 cursor-pointer group"
                  onClick={() => handleTeamClick(team)}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                      <img 
                        src={team.logo} 
                        alt={`${team.name} logo`}
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(team.name)}&background=326eb8&color=fff&size=64`;
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors text-foreground">{team.name}</h3>
                      <p className="text-sm text-muted-foreground">{team.league}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Target className="w-4 h-4" />
                      <span>{team.country}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Trophy className="w-4 h-4" />
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

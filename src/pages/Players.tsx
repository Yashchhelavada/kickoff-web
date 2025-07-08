
import Navigation from '@/components/Navigation';
import { User, Trophy, Target, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Players = () => {
  const navigate = useNavigate();
  
  // Updated with working player photos
  const topPlayers = [
    { 
      name: 'Lionel Messi', 
      team: 'Inter Miami', 
      position: 'Forward', 
      nationality: '🇦🇷', 
      age: 37,
      photo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=face'
    },
    { 
      name: 'Cristiano Ronaldo', 
      team: 'Al Nassr', 
      position: 'Forward', 
      nationality: '🇵🇹', 
      age: 39,
      photo: 'https://images.unsplash.com/photo-1594736797933-d0301ba1fe65?w=400&h=400&fit=crop&crop=face'
    },
    { 
      name: 'Kylian Mbappé', 
      team: 'Real Madrid', 
      position: 'Forward', 
      nationality: '🇫🇷', 
      age: 25,
      photo: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400&h=400&fit=crop&crop=face'
    },
    { 
      name: 'Erling Haaland', 
      team: 'Manchester City', 
      position: 'Forward', 
      nationality: '🇳🇴', 
      age: 24,
      photo: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop&crop=face'
    },
    { 
      name: 'Vinicius Jr.', 
      team: 'Real Madrid', 
      position: 'Winger', 
      nationality: '🇧🇷', 
      age: 24,
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face'
    },
    { 
      name: 'Kevin De Bruyne', 
      team: 'Manchester City', 
      position: 'Midfielder', 
      nationality: '🇧🇪', 
      age: 33,
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    { 
      name: 'Mohamed Salah', 
      team: 'Liverpool', 
      position: 'Forward', 
      nationality: '🇪🇬', 
      age: 32,
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    { 
      name: 'Robert Lewandowski', 
      team: 'Barcelona', 
      position: 'Forward', 
      nationality: '🇵🇱', 
      age: 35,
      photo: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=400&fit=crop&crop=face'
    }
  ];

  const handlePlayerClick = (player: any) => {
    // Navigate to a player detail page (we'll create this route)
    navigate(`/player/${player.name.toLowerCase().replace(' ', '-')}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 md:pt-20 pb-20 md:pb-8">
        <div className="container mx-auto px-4 space-y-8">
          
          <section className="text-center py-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
              Football Players
            </h1>
            <p className="text-xl text-muted-foreground">Meet the world's top football stars</p>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-6">
              <User className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Top Players</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {topPlayers.map((player, index) => (
                <div 
                  key={index} 
                  className="glass-card p-4 md:p-6 rounded-xl hover:neon-glow transition-all duration-300 cursor-pointer group"
                  onClick={() => handlePlayerClick(player)}
                >
                  <div className="text-center mb-3 md:mb-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-2 md:mb-3 rounded-full overflow-hidden bg-muted/20 border-2 border-primary/20">
                      <img 
                        src={player.photo} 
                        alt={player.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(player.name)}&background=326eb8&color=fff&size=128`;
                        }}
                      />
                    </div>
                    <h3 className="font-semibold text-base md:text-lg group-hover:text-primary transition-colors text-foreground line-clamp-2">{player.name}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{player.team}</p>
                  </div>
                  <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center space-x-1">
                        <Target className="w-3 h-3 md:w-4 md:h-4" />
                        <span>{player.position}</span>
                      </span>
                      <span>{player.nationality}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center space-x-1">
                        <Star className="w-3 h-3 md:w-4 md:h-4" />
                        <span>Age {player.age}</span>
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

export default Players;

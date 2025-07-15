import Navigation from '@/components/Navigation';
import { User, Trophy, Target, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Players = () => {
  const navigate = useNavigate();
  
  const topPlayers = [
    { 
      name: 'Lionel Messi', 
      team: 'Inter Miami', 
      position: 'Forward', 
      nationality: '🇦🇷', 
      age: 37,
      photo: 'https://tmssl.akamaized.net/images/foto/galerie/lionel-messi-argentina-2022-1670235169-95573.jpg?lm=1670235507'
    },
    { 
      name: 'Cristiano Ronaldo', 
      team: 'Al Nassr', 
      position: 'Forward', 
      nationality: '🇵🇹', 
      age: 39,
      photo: 'https://tmssl.akamaized.net/images/foto/galerie/cristiano-ronaldo-portugal-wm-2022-1670235324-95847.jpg?lm=1670235398'
    },
    { 
      name: 'Xavi Hernandez', 
      team: 'Barcelona', 
      position: 'Midfielder', 
      nationality: '🇪🇸', 
      age: 44,
      photo: 'https://img.a.transfermarkt.technology/portrait/big/8022-1694610602.jpg?lm=1694610602'
    },
    { 
      name: 'Iniesta', 
      team: 'Vissel Kobe', 
      position: 'Midfielder', 
      nationality: '🇪🇸', 
      age: 40,
      photo: 'https://img.a.transfermarkt.technology/portrait/big/7600-1694427853.jpg?lm=1694427853'
    },
    { 
      name: 'Thierry Henry', 
      team: 'Arsenal', 
      position: 'Forward', 
      nationality: '🇫🇷', 
      age: 47,
      photo: 'https://img.a.transfermarkt.technology/portrait/big/3207-1611929715.jpg?lm=1611929715'
    },
    { 
      name: 'Ronaldinho', 
      team: 'Barcelona', 
      position: 'Forward', 
      nationality: '🇧🇷', 
      age: 44,
      photo: 'https://img.a.transfermarkt.technology/portrait/big/3373-1611929679.jpg?lm=1611929679'
    },
    { 
      name: 'Zinedine Zidane', 
      team: 'Real Madrid', 
      position: 'Midfielder', 
      nationality: '🇫🇷', 
      age: 52,
      photo: 'https://img.a.transfermarkt.technology/portrait/big/3111-1639050949.jpg?lm=1639050949'
    },
    { 
      name: 'Kaka', 
      team: 'AC Milan', 
      position: 'Midfielder', 
      nationality: '🇧🇷', 
      age: 42,
      photo: 'https://img.a.transfermarkt.technology/portrait/big/3368-1611929668.jpg?lm=1611929668'
    }
  ];

  const handlePlayerClick = (player: any) => {
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
                  className="glass-card p-4 md:p-6 rounded-xl hover:neon-glow transition-all duration-300 cursor-pointer group border-2 border-primary/20"
                  onClick={() => handlePlayerClick(player)}
                >
                  <div className="text-center mb-3 md:mb-4">
                    <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-2 md:mb-3 rounded-full overflow-hidden bg-white/90 border-3 border-primary/30 shadow-lg">
                      <img 
                        src={player.photo} 
                        alt={player.name}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(player.name)}&background=3d74b6&color=fff&size=128`;
                        }}
                      />
                    </div>
                    <h3 className="font-bold text-base md:text-lg group-hover:text-primary transition-colors text-foreground line-clamp-2">{player.name}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground font-medium">{player.team}</p>
                  </div>
                  <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center space-x-1">
                        <Target className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                        <span className="font-medium">{player.position}</span>
                      </span>
                      <span className="text-lg">{player.nationality}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center space-x-1">
                        <Star className="w-3 h-3 md:w-4 md:h-4 text-secondary" />
                        <span className="font-medium">Age {player.age}</span>
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

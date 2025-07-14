
import Navigation from '@/components/Navigation';
import { User, Trophy, Target, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Players = () => {
  const navigate = useNavigate();
  
  // Updated with original player photos
  const topPlayers = [
    { 
      name: 'Lionel Messi', 
      team: 'Inter Miami', 
      position: 'Forward', 
      nationality: '🇦🇷', 
      age: 37,
      photo: 'https://assets.goal.com/images/v3/blt7bf19b9e7e7a999a/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202024-01-19T121710.791.jpg?auto=webp&format=jpg&quality=60&width=1200&height=800'
    },
    { 
      name: 'Cristiano Ronaldo', 
      team: 'Al Nassr', 
      position: 'Forward', 
      nationality: '🇵🇹', 
      age: 39,
      photo: 'https://assets.goal.com/images/v3/blt7b8c6f9f4a7e2e7b/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202024-01-19T121710.791.jpg?auto=webp&format=jpg&quality=60&width=1200&height=800'
    },
    { 
      name: 'Kylian Mbappé', 
      team: 'Real Madrid', 
      position: 'Forward', 
      nationality: '🇫🇷', 
      age: 25,
      photo: 'https://www.realmadrid.com/img/vertical_380px/mbappe_380x501_20240716034152.jpg'
    },
    { 
      name: 'Erling Haaland', 
      team: 'Manchester City', 
      position: 'Forward', 
      nationality: '🇳🇴', 
      age: 24,
      photo: 'https://www.mancity.com/meta/media/xshcpfxo/erling-haaland.png'
    },
    { 
      name: 'Vinicius Jr.', 
      team: 'Real Madrid', 
      position: 'Winger', 
      nationality: '🇧🇷', 
      age: 24,
      photo: 'https://www.realmadrid.com/img/vertical_380px/vinicius_380x501_20240716030626.jpg'
    },
    { 
      name: 'Kevin De Bruyne', 
      team: 'Manchester City', 
      position: 'Midfielder', 
      nationality: '🇧🇪', 
      age: 33,
      photo: 'https://www.mancity.com/meta/media/eq3jqkpb/kevin-de-bruyne.png'
    },
    { 
      name: 'Mohamed Salah', 
      team: 'Liverpool', 
      position: 'Forward', 
      nationality: '🇪🇬', 
      age: 32,
      photo: 'https://assets.liverpoolfc.com/Transform/ffb8b2c3-d8e4-47cf-8e1e-26e4d7f9ec16/SalahM_Profile2324'
    },
    { 
      name: 'Robert Lewandowski', 
      team: 'Barcelona', 
      position: 'Forward', 
      nationality: '🇵🇱', 
      age: 35,
      photo: 'https://www.fcbarcelona.com/photo-resources/2023/08/31/da34bfc6-3c2d-4f1c-9f12-761e36cbc8b0/LEWANDOWSKI.png'
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

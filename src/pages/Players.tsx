
import Navigation from '@/components/Navigation';
import { User, Trophy, Target, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Players = () => {
  const navigate = useNavigate();
  
  // Updated with more realistic player data and actual photos
  const topPlayers = [
    { 
      name: 'Lionel Messi', 
      team: 'Inter Miami', 
      position: 'Forward', 
      nationality: '🇦🇷', 
      age: 37,
      photo: 'https://cdn.vox-cdn.com/thumbor/kQy8uIPu4s3kKDLWdFZbZLdNEbE=/0x0:2700x1799/1200x800/filters:focal(1134x683:1566x1115)/cdn.vox-cdn.com/uploads/chorus_image/image/72651332/1537934106.0.jpg'
    },
    { 
      name: 'Cristiano Ronaldo', 
      team: 'Al Nassr', 
      position: 'Forward', 
      nationality: '🇵🇹', 
      age: 39,
      photo: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt3b5a93d4b0bbebc6/64b94b659ba5480013dd0a97/Cristiano_Ronaldo_Al_Nassr_2023-24.jpg'
    },
    { 
      name: 'Kylian Mbappé', 
      team: 'Real Madrid', 
      position: 'Forward', 
      nationality: '🇫🇷', 
      age: 25,
      photo: 'https://www.sportingnews.com/ca/soccer/news/kylian-mbappe-real-madrid-ballon-dor-vinicius/d5ba6e3c0b3f8f2e3d9a8b7c'
    },
    { 
      name: 'Erling Haaland', 
      team: 'Manchester City', 
      position: 'Forward', 
      nationality: '🇳🇴', 
      age: 24,
      photo: 'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk2NDU4NzM2NzMzNzI1NzY2/erling-haaland-manchester-city-premier-league-2023.jpg'
    },
    { 
      name: 'Vinicius Jr.', 
      team: 'Real Madrid', 
      position: 'Winger', 
      nationality: '🇧🇷', 
      age: 24,
      photo: 'https://e0.365dm.com/23/04/1600x900/skysports-vinicius-jr-real-madrid_6127579.jpg?20230427175258'
    },
    { 
      name: 'Kevin De Bruyne', 
      team: 'Manchester City', 
      position: 'Midfielder', 
      nationality: '🇧🇪', 
      age: 33,
      photo: 'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk2NDU4NzM2NzMzNzI1NzY2/kevin-de-bruyne-manchester-city-premier-league-2023.jpg'
    },
    { 
      name: 'Mohamed Salah', 
      team: 'Liverpool', 
      position: 'Forward', 
      nationality: '🇪🇬', 
      age: 32,
      photo: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2023/12/17/16/salah-liverpool.jpg'
    },
    { 
      name: 'Robert Lewandowski', 
      team: 'Barcelona', 
      position: 'Forward', 
      nationality: '🇵🇱', 
      age: 35,
      photo: 'https://fcbarcelona.com/fcbarcelona/photo/2022/08/22/ae5252d1-b79b-4950-9e34-6e67fac09bb0/LewandowskiRobert_2223_FCBarca_wallpaper.png'
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {topPlayers.map((player, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300 cursor-pointer group"
                  onClick={() => handlePlayerClick(player)}
                >
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-muted/20 border-2 border-primary/20">
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
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors text-foreground">{player.name}</h3>
                    <p className="text-sm text-muted-foreground">{player.team}</p>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center space-x-1">
                        <Target className="w-4 h-4" />
                        <span>{player.position}</span>
                      </span>
                      <span>{player.nationality}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
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


import Navigation from '@/components/Navigation';
import { User, Trophy, Target, Star } from 'lucide-react';

const Players = () => {
  // Updated with more realistic player data
  const topPlayers = [
    { 
      name: 'Lionel Messi', 
      team: 'Inter Miami', 
      position: 'Forward', 
      nationality: '🇦🇷', 
      age: 37,
      photo: 'https://img.a.transfermarkt.technology/portrait/big/28003-1671435885.jpg?lm=1'
    },
    { 
      name: 'Cristiano Ronaldo', 
      team: 'Al Nassr', 
      position: 'Forward', 
      nationality: '🇵🇹', 
      age: 39,
      photo: 'https://img.a.transfermarkt.technology/portrait/big/8198-1694609670.jpg?lm=1'
    },
    { 
      name: 'Kylian Mbappé', 
      team: 'Real Madrid', 
      position: 'Forward', 
      nationality: '🇫🇷', 
      age: 25,
      photo: 'https://img.a.transfermarkt.technology/portrait/big/342229-1669136701.jpg?lm=1'
    },
    { 
      name: 'Erling Haaland', 
      team: 'Manchester City', 
      position: 'Forward', 
      nationality: '🇳🇴', 
      age: 24,
      photo: 'https://img.a.transfermarkt.technology/portrait/big/418560-1661177767.jpg?lm=1'
    },
    { 
      name: 'Vinicius Jr.', 
      team: 'Real Madrid', 
      position: 'Winger', 
      nationality: '🇧🇷', 
      age: 24,
      photo: 'https://img.a.transfermarkt.technology/portrait/big/371998-1661177642.jpg?lm=1'
    },
    { 
      name: 'Kevin De Bruyne', 
      team: 'Manchester City', 
      position: 'Midfielder', 
      nationality: '🇧🇪', 
      age: 33,
      photo: 'https://img.a.transfermarkt.technology/portrait/big/88755-1661177515.jpg?lm=1'
    },
    { 
      name: 'Mohamed Salah', 
      team: 'Liverpool', 
      position: 'Forward', 
      nationality: '🇪🇬', 
      age: 32,
      photo: 'https://img.a.transfermarkt.technology/portrait/big/148455-1661177400.jpg?lm=1'
    },
    { 
      name: 'Robert Lewandowski', 
      team: 'Barcelona', 
      position: 'Forward', 
      nationality: '🇵🇱', 
      age: 35,
      photo: 'https://img.a.transfermarkt.technology/portrait/big/38253-1661177665.jpg?lm=1'
    }
  ];

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
                <div key={index} className="glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300 cursor-pointer group">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-muted/20 border-2 border-primary/20">
                      <img 
                        src={player.photo} 
                        alt={player.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                        <User className="w-10 h-10 text-primary" />
                      </div>
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

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
      name: 'Thierry Henry', 
      team: 'Arsenal', 
      position: 'Forward', 
      nationality: '🇫🇷', 
      age: 47,
      photo: 'https://tmssl.akamaized.net/images/foto/galerie/thierry-henry-arsenal-1999-2007-1606142367-63827.jpg?lm=1606142490'
    },
    { 
      name: 'Zinedine Zidane', 
      team: 'Real Madrid', 
      position: 'Midfielder', 
      nationality: '🇫🇷', 
      age: 52,
      photo: 'https://tmssl.akamaized.net/images/foto/galerie/zinedine-zidane-real-madrid-2001-2006-1606140967-63625.jpg?lm=1606141098'
    },
    { 
      name: 'Luka Modric', 
      team: 'Real Madrid', 
      position: 'Midfielder', 
      nationality: '🇭🇷', 
      age: 39,
      photo: 'https://tmssl.akamaized.net/images/foto/galerie/luka-modric-real-madrid-2022-1670235969-95677.jpg?lm=1670236101'
    },
    { 
      name: 'Kylian Mbappe', 
      team: 'Real Madrid', 
      position: 'Forward', 
      nationality: '🇫🇷', 
      age: 26,
      photo: 'https://tmssl.akamaized.net/images/foto/galerie/kylian-mbappe-france-2022-1670236169-95751.jpg?lm=1670236299'
    },
    { 
      name: 'Andres Iniesta', 
      team: 'Emirates Club', 
      position: 'Midfielder', 
      nationality: '🇪🇸', 
      age: 40,
      photo: 'https://tmssl.akamaized.net/images/foto/galerie/andres-iniesta-barcelona-2009-2018-1606141467-63697.jpg?lm=1606141598'
    },
    { 
      name: 'Xavi Hernandez', 
      team: 'Al Sadd', 
      position: 'Midfielder', 
      nationality: '🇪🇸', 
      age: 44,
      photo: 'https://tmssl.akamaized.net/images/foto/galerie/xavi-hernandez-barcelona-2009-2015-1606141567-63717.jpg?lm=1606141699'
    },
    { 
      name: 'Ronaldo Nazario', 
      team: 'Retired', 
      position: 'Forward', 
      nationality: '🇧🇷', 
      age: 48,
      photo: 'https://tmssl.akamaized.net/images/foto/galerie/ronaldo-nazario-brazil-2002-1606142667-63967.jpg?lm=1606142799'
    },
    { 
      name: 'Ronaldinho', 
      team: 'Retired', 
      position: 'Forward', 
      nationality: '🇧🇷', 
      age: 44,
      photo: 'https://tmssl.akamaized.net/images/foto/galerie/ronaldinho-barcelona-2003-2008-1606142467-63897.jpg?lm=1606142599'
    },
    { 
      name: 'Zlatan Ibrahimovic', 
      team: 'Retired', 
      position: 'Forward', 
      nationality: '🇸🇪', 
      age: 43,
      photo: 'https://tmssl.akamaized.net/images/foto/galerie/zlatan-ibrahimovic-ac-milan-2019-2023-1606142967-64097.jpg?lm=1606143099'
    },
    { 
      name: 'Kevin De Bruyne', 
      team: 'Manchester City', 
      position: 'Midfielder', 
      nationality: '🇧🇪', 
      age: 33,
      photo: 'https://tmssl.akamaized.net/images/foto/galerie/kevin-de-bruyne-manchester-city-2022-1670236469-95867.jpg?lm=1670236599'
    },
    { 
      name: 'Toni Kroos', 
      team: 'Retired', 
      position: 'Midfielder', 
      nationality: '🇩🇪', 
      age: 34,
      photo: 'https://tmssl.akamaized.net/images/foto/galerie/toni-kroos-real-madrid-2022-1670236669-95997.jpg?lm=1670236799'
    },
    { 
      name: 'Sergio Ramos', 
      team: 'Sevilla', 
      position: 'Defender', 
      nationality: '🇪🇸', 
      age: 38,
      photo: 'https://tmssl.akamaized.net/images/foto/galerie/sergio-ramos-sevilla-2023-1670236969-96097.jpg?lm=1670237099'
    },
    { 
      name: 'Karim Benzema', 
      team: 'Al-Ittihad', 
      position: 'Forward', 
      nationality: '🇫🇷', 
      age: 36,
      photo: 'https://tmssl.akamaized.net/images/foto/galerie/karim-benzema-al-ittihad-2023-1670237169-96197.jpg?lm=1670237299'
    },
    { 
      name: 'Robert Lewandowski', 
      team: 'Barcelona', 
      position: 'Forward', 
      nationality: '🇵🇱', 
      age: 35,
      photo: 'https://tmssl.akamaized.net/images/foto/galerie/robert-lewandowski-barcelona-2022-1670237369-96297.jpg?lm=1670237499'
    },
    { 
      name: 'Kaka', 
      team: 'Retired', 
      position: 'Midfielder', 
      nationality: '🇧🇷', 
      age: 42,
      photo: 'https://tmssl.akamaized.net/images/foto/galerie/kaka-ac-milan-2003-2009-1606142767-64027.jpg?lm=1606142899'
    },
    { 
      name: 'Neymar', 
      team: 'Al Hilal', 
      position: 'Forward', 
      nationality: '🇧🇷', 
      age: 32,
      photo: 'https://tmssl.akamaized.net/images/foto/galerie/neymar-al-hilal-2023-1670237569-96397.jpg?lm=1670237699'
    }
  ];

  const handlePlayerClick = (player: any) => {
    navigate(`/player/${player.name.toLowerCase().replace(/\s+/g, '-')}`);
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

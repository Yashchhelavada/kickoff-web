
import Navigation from '@/components/Navigation';
import { ArrowLeft, User, Trophy, Target, Star } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const PlayerDetail = () => {
  const navigate = useNavigate();
  const { playerId } = useParams();

  // Mock player data - in a real app, you'd fetch this based on the playerId
  const player = {
    name: playerId?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Player',
    team: 'Football Club',
    position: 'Forward',
    nationality: '🌍',
    age: 25,
    photo: 'https://ui-avatars.com/api/?name=Player&background=326eb8&color=fff&size=256',
    stats: {
      goals: 45,
      assists: 12,
      matches: 38,
      rating: 8.5
    },
    bio: 'A talented footballer known for exceptional skills and dedication to the sport.'
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 md:pt-20 pb-20 md:pb-8">
        <div className="container mx-auto px-4 space-y-8">
          
          <div className="flex items-center space-x-4 mb-6">
            <button 
              onClick={() => navigate('/players')}
              className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Players</span>
            </button>
          </div>

          <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center md:text-left">
                <div className="w-32 h-32 mx-auto md:mx-0 mb-6 rounded-full overflow-hidden bg-muted/20 border-4 border-primary/20">
                  <img 
                    src={player.photo} 
                    alt={player.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{player.name}</h1>
                <p className="text-xl text-muted-foreground mb-4">{player.team}</p>
                <p className="text-muted-foreground">{player.bio}</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Player Info</h2>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Target className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">Position:</span>
                      <span className="text-foreground font-medium">{player.position}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">Age:</span>
                      <span className="text-foreground font-medium">{player.age}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{player.nationality}</span>
                      <span className="text-muted-foreground">Nationality</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Season Stats</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-card p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-primary">{player.stats.goals}</div>
                      <div className="text-sm text-muted-foreground">Goals</div>
                    </div>
                    <div className="glass-card p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-primary">{player.stats.assists}</div>
                      <div className="text-sm text-muted-foreground">Assists</div>
                    </div>
                    <div className="glass-card p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-primary">{player.stats.matches}</div>
                      <div className="text-sm text-muted-foreground">Matches</div>
                    </div>
                    <div className="glass-card p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-primary">{player.stats.rating}</div>
                      <div className="text-sm text-muted-foreground">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default PlayerDetail;

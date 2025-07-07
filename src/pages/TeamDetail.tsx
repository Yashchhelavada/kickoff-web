
import Navigation from '@/components/Navigation';
import { ArrowLeft, Users, Trophy, Target, Star } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const TeamDetail = () => {
  const navigate = useNavigate();
  const { teamId } = useParams();

  // Mock team data - in a real app, you'd fetch this based on the teamId
  const team = {
    name: teamId?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Team',
    league: 'Premier League',
    country: 'England',
    founded: 1900,
    logo: 'https://ui-avatars.com/api/?name=Team&background=326eb8&color=fff&size=256',
    stadium: 'Home Stadium',
    capacity: 50000,
    manager: 'Team Manager',
    stats: {
      matches: 38,
      wins: 25,
      draws: 8,
      losses: 5,
      points: 83
    },
    description: 'A prestigious football club with a rich history and passionate fanbase.'
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 md:pt-20 pb-20 md:pb-8">
        <div className="container mx-auto px-4 space-y-8">
          
          <div className="flex items-center space-x-4 mb-6">
            <button 
              onClick={() => navigate('/teams')}
              className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Teams</span>
            </button>
          </div>

          <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center md:text-left">
                <div className="w-32 h-32 mx-auto md:mx-0 mb-6 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                  <img 
                    src={team.logo} 
                    alt={`${team.name} logo`}
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{team.name}</h1>
                <p className="text-xl text-muted-foreground mb-4">{team.league}</p>
                <p className="text-muted-foreground">{team.description}</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Club Info</h2>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Target className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">Country:</span>
                      <span className="text-foreground font-medium">{team.country}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Trophy className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">Founded:</span>
                      <span className="text-foreground font-medium">{team.founded}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">Stadium:</span>
                      <span className="text-foreground font-medium">{team.stadium}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">Manager:</span>
                      <span className="text-foreground font-medium">{team.manager}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Season Stats</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-card p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-primary">{team.stats.wins}</div>
                      <div className="text-sm text-muted-foreground">Wins</div>
                    </div>
                    <div className="glass-card p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-primary">{team.stats.draws}</div>
                      <div className="text-sm text-muted-foreground">Draws</div>
                    </div>
                    <div className="glass-card p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-primary">{team.stats.losses}</div>
                      <div className="text-sm text-muted-foreground">Losses</div>
                    </div>
                    <div className="glass-card p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-primary">{team.stats.points}</div>
                      <div className="text-sm text-muted-foreground">Points</div>
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

export default TeamDetail;

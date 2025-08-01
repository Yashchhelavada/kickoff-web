
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, User, Trophy, Calendar, MapPin, TrendingUp, Star, Target } from 'lucide-react';

const PlayerDetail = () => {
  const { playerId } = useParams();
  const navigate = useNavigate();

  const playerData: { [key: string]: any } = {
    'lionel-messi': {
      name: 'Lionel Messi',
      fullName: 'Lionel Andrés Messi',
      currentTeam: 'Inter Miami',
      position: 'Right Winger',
      nationality: 'Argentina',
      flag: '🇦🇷',
      age: 37,
      height: '1.70m',
      marketValue: '€25.00m',
      photo: 'https://tmssl.akamaized.net/images/foto/galerie/lionel-messi-argentina-2022-1670235169-95573.jpg?lm=1670235507',
      description: 'Lionel Messi is widely regarded as one of the greatest football players of all time.',
      careerStats: { appearances: 1069, goals: 838, assists: 378, yellowCards: 105 },
      achievements: ['8 Ballon d\'Or awards', 'FIFA World Cup winner 2022', '4 UEFA Champions League titles'],
      previousClubs: [
        { club: 'FC Barcelona', years: '2004-2021', appearances: 778, goals: 672 },
        { club: 'Paris Saint-Germain', years: '2021-2023', appearances: 75, goals: 32 }
      ]
    },
    'cristiano-ronaldo': {
      name: 'Cristiano Ronaldo',
      fullName: 'Cristiano Ronaldo dos Santos Aveiro',
      currentTeam: 'Al Nassr',
      position: 'Centre-Forward',
      nationality: 'Portugal',
      flag: '🇵🇹',
      age: 39,
      height: '1.87m',
      marketValue: '€15.00m',
      photo: 'https://tmssl.akamaized.net/images/foto/galerie/cristiano-ronaldo-portugal-wm-2022-1670235324-95847.jpg?lm=1670235398',
      description: 'Cristiano Ronaldo is one of the most successful footballers in history.',
      careerStats: { appearances: 1235, goals: 908, assists: 255, yellowCards: 156 },
      achievements: ['5 Ballon d\'Or awards', '5 UEFA Champions League titles', 'European Championship winner 2016'],
      previousClubs: [
        { club: 'Manchester United', years: '2003-2009', appearances: 292, goals: 118 },
        { club: 'Real Madrid', years: '2009-2018', appearances: 438, goals: 451 }
      ]
    }
  };

  const player = playerData[playerId || ''];

  if (!player) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Player Not Found</h1>
            <Button onClick={() => navigate('/players')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Players
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <Button variant="outline" onClick={() => navigate('/players')} className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Players
          </Button>

          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-white shadow-lg">
              <img src={player.photo} alt={player.name} className="w-full h-full object-cover object-top" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              {player.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">{player.fullName}</p>
            <div className="flex items-center justify-center space-x-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">{player.currentTeam}</Badge>
              <span className="text-3xl">{player.flag}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-primary" />
                  <span>Player Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Position: {player.position}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Nationality: {player.nationality}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Age: {player.age}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Market Value: {player.marketValue}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Career Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-muted/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{player.careerStats.goals}</div>
                    <div className="text-xs text-muted-foreground">Goals</div>
                  </div>
                  <div className="text-center p-3 bg-muted/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{player.careerStats.assists}</div>
                    <div className="text-xs text-muted-foreground">Assists</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <span>Major Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {player.achievements.map((achievement: string, index: number) => (
                    <li key={index} className="text-sm flex items-center space-x-2">
                      <Star className="w-3 h-3 text-yellow-500" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PlayerDetail;

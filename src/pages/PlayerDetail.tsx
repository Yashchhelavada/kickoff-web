
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
    },
    'thierry-henry': {
      name: 'Thierry Henry',
      fullName: 'Thierry Daniel Henry',
      currentTeam: 'Retired',
      position: 'Centre-Forward',
      nationality: 'France',
      flag: '🇫🇷',
      age: 47,
      height: '1.88m',
      marketValue: 'Retired',
      photo: 'https://tmssl.akamaized.net/images/foto/galerie/thierry-henry-arsenal-1999-2007-1606142367-63827.jpg?lm=1606142490',
      description: 'Thierry Henry revolutionized the role of the number 9 in soccer.',
      careerStats: { appearances: 792, goals: 411, assists: 162, yellowCards: 75 },
      achievements: ['FIFA World Cup winner', 'UEFA European Championship winner', '2 Premier League titles'],
      previousClubs: [
        { club: 'Arsenal', years: '1999-2007', appearances: 377, goals: 228 },
        { club: 'FC Barcelona', years: '2007-2010', appearances: 121, goals: 49 }
      ]
    },
    'zinedine-zidane': {
      name: 'Zinedine Zidane',
      fullName: 'Zinedine Yazid Zidane',
      currentTeam: 'Retired',
      position: 'Attacking Midfielder',
      nationality: 'France',
      flag: '🇫🇷',
      age: 52,
      height: '1.85m',
      marketValue: 'Retired',
      photo: 'https://tmssl.akamaized.net/images/foto/galerie/zinedine-zidane-real-madrid-2001-2006-1606140967-63625.jpg?lm=1606141098',
      description: 'Zinedine Zidane transformed soccer into a form of art.',
      careerStats: { appearances: 797, goals: 125, assists: 93, yellowCards: 71 },
      achievements: ['FIFA World Cup winner', 'UEFA European Championship winner', 'Ballon d\'Or winner'],
      previousClubs: [
        { club: 'Juventus', years: '1996-2001', appearances: 212, goals: 31 },
        { club: 'Real Madrid', years: '2001-2006', appearances: 230, goals: 49 }
      ]
    },
    'luka-modric': {
      name: 'Luka Modrić',
      fullName: 'Luka Modrić',
      currentTeam: 'Real Madrid',
      position: 'Central Midfielder',
      nationality: 'Croatia',
      flag: '🇭🇷',
      age: 39,
      height: '1.72m',
      marketValue: '€10.00m',
      photo: 'https://tmssl.akamaized.net/images/foto/galerie/luka-modric-real-madrid-2022-1670235969-95677.jpg?lm=1670236101',
      description: 'Luka Modrić is fundamental to creating Madrid\'s relentless winning culture.',
      careerStats: { appearances: 534, goals: 39, assists: 80, yellowCards: 89 },
      achievements: ['Ballon d\'Or winner', '6 UEFA Champions League titles', 'World Cup finalist'],
      previousClubs: [
        { club: 'Tottenham Hotspur', years: '2008-2012', appearances: 160, goals: 17 },
        { club: 'Real Madrid', years: '2012-present', appearances: 534, goals: 39 }
      ]
    },
    'kylian-mbappe': {
      name: 'Kylian Mbappé',
      fullName: 'Kylian Mbappé Lottin',
      currentTeam: 'Real Madrid',
      position: 'Centre-Forward',
      nationality: 'France',
      flag: '🇫🇷',
      age: 26,
      height: '1.78m',
      marketValue: '€180.00m',
      photo: 'https://tmssl.akamaized.net/images/foto/galerie/kylian-mbappe-france-2022-1670236169-95751.jpg?lm=1670236299',
      description: 'Arguably the best soccer player in the world right now.',
      careerStats: { appearances: 308, goals: 244, assists: 108, yellowCards: 34 },
      achievements: ['FIFA World Cup winner', '7 Ligue 1 titles', '4 French Cup winners'],
      previousClubs: [
        { club: 'AS Monaco', years: '2015-2017', appearances: 60, goals: 27 },
        { club: 'Paris Saint-Germain', years: '2017-2024', appearances: 308, goals: 244 }
      ]
    },
    'andres-iniesta': {
      name: 'Andrés Iniesta',
      fullName: 'Andrés Iniesta Luján',
      currentTeam: 'Emirates Club',
      position: 'Central Midfielder',
      nationality: 'Spain',
      flag: '🇪🇸',
      age: 40,
      height: '1.71m',
      marketValue: '€2.00m',
      photo: 'https://tmssl.akamaized.net/images/foto/galerie/andres-iniesta-barcelona-2009-2018-1606141467-63697.jpg?lm=1606141598',
      description: 'An elegant, skillful playmaker who scored the goal that won Spain their first World Cup.',
      careerStats: { appearances: 674, goals: 57, assists: 135, yellowCards: 50 },
      achievements: ['FIFA World Cup winner', '2 UEFA European Championship titles', '4 UEFA Champions League titles'],
      previousClubs: [
        { club: 'FC Barcelona', years: '2002-2018', appearances: 674, goals: 57 },
        { club: 'Vissel Kobe', years: '2018-2023', appearances: 134, goals: 26 }
      ]
    },
    'xavi-hernandez': {
      name: 'Xavi Hernández',
      fullName: 'Xavier Hernández Creus',
      currentTeam: 'Al Sadd (Coach)',
      position: 'Central Midfielder',
      nationality: 'Spain',
      flag: '🇪🇸',
      age: 44,
      height: '1.70m',
      marketValue: 'Retired',
      photo: 'https://tmssl.akamaized.net/images/foto/galerie/xavi-hernandez-barcelona-2009-2015-1606141567-63717.jpg?lm=1606141699',
      description: 'Arguably the game\'s best-ever passer who registered 20 assists in 35 LaLiga matches.',
      careerStats: { appearances: 767, goals: 85, assists: 185, yellowCards: 89 },
      achievements: ['FIFA World Cup winner', '2 UEFA European Championship titles', '8 LaLiga titles'],
      previousClubs: [
        { club: 'FC Barcelona', years: '1998-2015', appearances: 767, goals: 85 },
        { club: 'Al Sadd', years: '2015-2019', appearances: 87, goals: 12 }
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

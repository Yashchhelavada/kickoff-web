
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Users, Trophy, Calendar, MapPin, Globe, TrendingUp, Shield } from 'lucide-react';

const TeamDetail = () => {
  const { teamId } = useParams();
  const navigate = useNavigate();

  // Team data based on Transfermarkt information
  const teamData: { [key: string]: any } = {
    'manchester-united': {
      name: 'Manchester United',
      fullName: 'Manchester United Football Club',
      league: 'Premier League',
      country: 'England',
      city: 'Manchester',
      founded: 1878,
      logo: 'https://logos-world.net/wp-content/uploads/2020/06/Manchester-United-Logo.png',
      stadium: 'Old Trafford',
      capacity: 74879,
      manager: 'Erik ten Hag',
      marketValue: '€885.50m',
      website: 'www.manutd.com',
      description: 'Manchester United Football Club is a professional football club based in Old Trafford, Greater Manchester, England. The club competes in the Premier League, the top division in the English football league system.',
      achievements: [
        '20 Premier League titles',
        '12 FA Cups',
        '3 European Cups/Champions League',
        '1 Europa League',
        '1 Cup Winners Cup'
      ],
      topPlayers: [
        { name: 'Marcus Rashford', position: 'LW', marketValue: '€80.00m', nationality: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
        { name: 'Bruno Fernandes', position: 'AM', marketValue: '€70.00m', nationality: '🇵🇹' },
        { name: 'Casemiro', position: 'CDM', marketValue: '€25.00m', nationality: '🇧🇷' },
        { name: 'Raphaël Varane', position: 'CB', marketValue: '€30.00m', nationality: '🇫🇷' },
      ],
      recentTransfers: [
        { player: 'Mason Mount', type: 'In', fee: '€64.20m', from: 'Chelsea FC' },
        { player: 'André Onana', type: 'In', fee: '€51.20m', from: 'Inter Milan' },
        { player: 'Rasmus Højlund', type: 'In', fee: '€75.00m', from: 'Atalanta BC' }
      ]
    },
    'real-madrid': {
      name: 'Real Madrid',
      fullName: 'Real Madrid Club de Fútbol',
      league: 'La Liga',
      country: 'Spain',
      city: 'Madrid',
      founded: 1902,
      logo: 'https://logos-world.net/wp-content/uploads/2020/06/Real-Madrid-Logo.png',
      stadium: 'Santiago Bernabéu',
      capacity: 81044,
      manager: 'Carlo Ancelotti',
      marketValue: '€1.02bn',
      website: 'www.realmadrid.com',
      description: 'Real Madrid Club de Fútbol is a Spanish professional football club based in Madrid. Founded in 1902 as Madrid Football Club, the club has traditionally worn a white home kit since inception.',
      achievements: [
        '35 La Liga titles',
        '19 Copa del Rey',
        '14 European Cups/Champions League',
        '2 UEFA Cups',
        '4 UEFA Super Cups'
      ],
      topPlayers: [
        { name: 'Vinícius Júnior', position: 'LW', marketValue: '€150.00m', nationality: '🇧🇷' },
        { name: 'Jude Bellingham', position: 'CM', marketValue: '€180.00m', nationality: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
        { name: 'Kylian Mbappé', position: 'CF', marketValue: '€180.00m', nationality: '🇫🇷' },
        { name: 'Thibaut Courtois', position: 'GK', marketValue: '€45.00m', nationality: '🇧🇪' },
      ],
      recentTransfers: [
        { player: 'Kylian Mbappé', type: 'In', fee: 'Free transfer', from: 'Paris Saint-Germain' },
        { player: 'Endrick', type: 'In', fee: '€47.50m', from: 'Palmeiras' },
        { player: 'Arda Güler', type: 'In', fee: '€20.00m', from: 'Fenerbahçe' }
      ]
    },
    'barcelona': {
      name: 'Barcelona',
      fullName: 'Futbol Club Barcelona',
      league: 'La Liga',
      country: 'Spain',
      city: 'Barcelona',
      founded: 1899,
      logo: 'https://logos-world.net/wp-content/uploads/2020/06/Barcelona-Logo.png',
      stadium: 'Spotify Camp Nou',
      capacity: 99354,
      manager: 'Xavi Hernández',
      marketValue: '€696.20m',
      website: 'www.fcbarcelona.com',
      description: 'Futbol Club Barcelona is a Spanish professional football club based in Barcelona, Catalonia, Spain. Founded in 1899 by a group of Swiss, Catalan, German, and English footballers led by Joan Gamper.',
      achievements: [
        '27 La Liga titles',
        '31 Copa del Rey',
        '5 European Cups/Champions League',
        '4 Cup Winners Cups',
        '3 UEFA Cups'
      ],
      topPlayers: [
        { name: 'Robert Lewandowski', position: 'CF', marketValue: '€15.00m', nationality: '🇵🇱' },
        { name: 'Pedri', position: 'CM', marketValue: '€100.00m', nationality: '🇪🇸' },
        { name: 'Gavi', position: 'CM', marketValue: '€90.00m', nationality: '🇪🇸' },
        { name: 'Frenkie de Jong', position: 'CM', marketValue: '€70.00m', nationality: '🇳🇱' },
      ],
      recentTransfers: [
        { player: 'Robert Lewandowski', type: 'In', fee: '€45.00m', from: 'Bayern Munich' },
        { player: 'Raphinha', type: 'In', fee: '€58.00m', from: 'Leeds United' },
        { player: 'Jules Koundé', type: 'In', fee: '€50.00m', from: 'Sevilla FC' }
      ]
    },
    'bayern-munich': {
      name: 'Bayern Munich',
      fullName: 'FC Bayern München',
      league: 'Bundesliga',
      country: 'Germany',
      city: 'Munich',
      founded: 1900,
      logo: 'https://logos-world.net/wp-content/uploads/2020/06/Bayern-Munich-Logo.png',
      stadium: 'Allianz Arena',
      capacity: 75024,
      manager: 'Thomas Tuchel',
      marketValue: '€853.40m',
      website: 'www.fcbayern.com',
      description: 'FC Bayern München is a German professional sports club based in Munich, Bavaria. It is best known for its professional football team, which plays in the Bundesliga, the top tier of the German football league system.',
      achievements: [
        '32 Bundesliga titles',
        '20 DFB-Pokal',
        '6 European Cups/Champions League',
        '1 UEFA Cup',
        '2 UEFA Cup Winners Cups'
      ],
      topPlayers: [
        { name: 'Harry Kane', position: 'CF', marketValue: '€100.00m', nationality: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
        { name: 'Jamal Musiala', position: 'CAM', marketValue: '€110.00m', nationality: '🇩🇪' },
        { name: 'Joshua Kimmich', position: 'CDM', marketValue: '€70.00m', nationality: '🇩🇪' },
        { name: 'Alphonso Davies', position: 'LB', marketValue: '€70.00m', nationality: '🇨🇦' },
      ],
      recentTransfers: [
        { player: 'Harry Kane', type: 'In', fee: '€100.00m', from: 'Tottenham Hotspur' },
        { player: 'Kim Min-jae', type: 'In', fee: '€50.00m', from: 'SSC Napoli' },
        { player: 'Konrad Laimer', type: 'In', fee: 'Free transfer', from: 'RB Leipzig' }
      ]
    },
    'ac-milan': {
      name: 'AC Milan',
      fullName: 'Associazione Calcio Milan',
      league: 'Serie A',
      country: 'Italy',
      city: 'Milan',
      founded: 1899,
      logo: 'https://logos-world.net/wp-content/uploads/2020/06/AC-Milan-Logo.png',
      stadium: 'San Siro',
      capacity: 75923,
      manager: 'Stefano Pioli',
      marketValue: '€536.80m',
      website: 'www.acmilan.com',
      description: 'Associazione Calcio Milan, commonly referred to as AC Milan or simply Milan, is a professional football club in Milan, Italy, founded in 1899. The club has spent its entire history, with the exception of the 1980–81 and 1982–83 seasons, in the top flight of Italian football.',
      achievements: [
        '19 Serie A titles',
        '5 Coppa Italia',
        '7 European Cups/Champions League',
        '1 Cup Winners Cup',
        '5 UEFA Super Cups'
      ],
      topPlayers: [
        { name: 'Rafael Leão', position: 'LW', marketValue: '€90.00m', nationality: '🇵🇹' },
        { name: 'Théo Hernández', position: 'LB', marketValue: '€65.00m', nationality: '🇫🇷' },
        { name: 'Mike Maignan', position: 'GK', marketValue: '€60.00m', nationality: '🇫🇷' },
        { name: 'Sandro Tonali', position: 'CM', marketValue: '€45.00m', nationality: '🇮🇹' },
      ],
      recentTransfers: [
        { player: 'Christian Pulisic', type: 'In', fee: '€22.00m', from: 'Chelsea FC' },
        { player: 'Yunus Musah', type: 'In', fee: '€20.00m', from: 'Valencia CF' },
        { player: 'Tijjani Reijnders', type: 'In', fee: '€20.00m', from: 'AZ Alkmaar' }
      ]
    },
    'liverpool': {
      name: 'Liverpool',
      fullName: 'Liverpool Football Club',
      league: 'Premier League',
      country: 'England',
      city: 'Liverpool',
      founded: 1892,
      logo: 'https://logos-world.net/wp-content/uploads/2020/06/Liverpool-Logo.png',
      stadium: 'Anfield',
      capacity: 53394,
      manager: 'Jürgen Klopp',
      marketValue: '€874.70m',
      website: 'www.liverpoolfc.com',
      description: 'Liverpool Football Club is a professional football club based in Liverpool, England. The club competes in the Premier League, the top tier of English football. Founded in 1892, the club joined the Football League the following year.',
      achievements: [
        '19 League titles',
        '8 FA Cups',
        '6 European Cups/Champions League',
        '3 UEFA Cups',
        '4 UEFA Super Cups'
      ],
      topPlayers: [
        { name: 'Mohamed Salah', position: 'RW', marketValue: '€65.00m', nationality: '🇪🇬' },
        { name: 'Virgil van Dijk', position: 'CB', marketValue: '€35.00m', nationality: '🇳🇱' },
        { name: 'Sadio Mané', position: 'LW', marketValue: '€30.00m', nationality: '🇸🇳' },
        { name: 'Alisson', position: 'GK', marketValue: '€60.00m', nationality: '🇧🇷' },
      ],
      recentTransfers: [
        { player: 'Alexis Mac Allister', type: 'In', fee: '€42.00m', from: 'Brighton & Hove Albion' },
        { player: 'Dominik Szoboszlai', type: 'In', fee: '€70.00m', from: 'RB Leipzig' },
        { player: 'Ryan Gravenberch', type: 'In', fee: '€40.00m', from: 'Bayern Munich' }
      ]
    },
    'juventus': {
      name: 'Juventus',
      fullName: 'Juventus Football Club',
      league: 'Serie A',
      country: 'Italy',
      city: 'Turin',
      founded: 1897,
      logo: 'https://logos-world.net/wp-content/uploads/2020/06/Juventus-Logo.png',
      stadium: 'Allianz Stadium',
      capacity: 41507,
      manager: 'Massimiliano Allegri',
      marketValue: '€469.40m',
      website: 'www.juventus.com',
      description: 'Juventus Football Club, colloquially known as Juventus and Juve, is a professional football club based in Turin, Piedmont, Italy, that competes in the Serie A, the top tier of the Italian football league system.',
      achievements: [
        '36 Serie A titles',
        '14 Coppa Italia',
        '2 European Cups/Champions League',
        '1 Cup Winners Cup',
        '3 UEFA Cups'
      ],
      topPlayers: [
        { name: 'Dušan Vlahović', position: 'CF', marketValue: '€70.00m', nationality: '🇷🇸' },
        { name: 'Federico Chiesa', position: 'RW', marketValue: '€55.00m', nationality: '🇮🇹' },
        { name: 'Adrien Rabiot', position: 'CM', marketValue: '€35.00m', nationality: '🇫🇷' },
        { name: 'Weston McKennie', position: 'CM', marketValue: '€30.00m', nationality: '🇺🇸' },
      ],
      recentTransfers: [
        { player: 'Dušan Vlahović', type: 'In', fee: '€81.60m', from: 'ACF Fiorentina' },
        { player: 'Denis Zakaria', type: 'In', fee: '€8.50m', from: 'Borussia Mönchengladbach' },
        { player: 'Angel Di María', type: 'In', fee: 'Free transfer', from: 'Paris Saint-Germain' }
      ]
    },
    'arsenal': {
      name: 'Arsenal',
      fullName: 'Arsenal Football Club',
      league: 'Premier League',
      country: 'England',
      city: 'London',
      founded: 1886,
      logo: 'https://logos-world.net/wp-content/uploads/2020/06/Arsenal-Logo.png',
      stadium: 'Emirates Stadium',
      capacity: 60260,
      manager: 'Mikel Arteta',
      marketValue: '€901.50m',
      website: 'www.arsenal.com',
      description: 'Arsenal Football Club is a professional football club based in Islington, London, England. Arsenal plays in the Premier League, the top flight of English football. The club has won 13 league titles and a record 14 FA Cups.',
      achievements: [
        '13 League titles',
        '14 FA Cups',
        '2 League Cups',
        '1 Cup Winners Cup',
        '1 Inter-Cities Fairs Cup'
      ],
      topPlayers: [
        { name: 'Bukayo Saka', position: 'RW', marketValue: '€120.00m', nationality: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
        { name: 'Martin Ødegaard', position: 'CAM', marketValue: '€110.00m', nationality: '🇳🇴' },
        { name: 'Gabriel Jesus', position: 'CF', marketValue: '€70.00m', nationality: '🇧🇷' },
        { name: 'William Saliba', position: 'CB', marketValue: '€80.00m', nationality: '🇫🇷' },
      ],
      recentTransfers: [
        { player: 'Declan Rice', type: 'In', fee: '€116.60m', from: 'West Ham United' },
        { player: 'Kai Havertz', type: 'In', fee: '€75.00m', from: 'Chelsea FC' },
        { player: 'Jurriën Timber', type: 'In', fee: '€40.00m', from: 'Ajax Amsterdam' }
      ]
    }
  };

  const team = teamData[teamId || ''];

  if (!team) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Team Not Found</h1>
            <Button onClick={() => navigate('/teams')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Teams
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
          
          {/* Back Button */}
          <Button 
            variant="outline" 
            onClick={() => navigate('/teams')}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Teams
          </Button>

          {/* Team Header */}
          <div className="text-center mb-8 animate-slide-in-up">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-primary/20">
              <img 
                src={team.logo} 
                alt={`${team.name} logo`}
                className="w-20 h-20 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(team.name)}&background=3d74b6&color=fff&size=128`;
                }}
              />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              {team.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">{team.fullName}</p>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {team.league}
            </Badge>
          </div>

          {/* Team Information */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            
            {/* Basic Info */}
            <Card className="animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>Club Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{team.city}, {team.country}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Founded {team.founded}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{team.website}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Manager: {team.manager}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Market Value: {team.marketValue}</span>
                </div>
              </CardContent>
            </Card>

            {/* Stadium Info */}
            <Card className="animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle>Stadium</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-bold text-lg mb-2">{team.stadium}</h3>
                <p className="text-muted-foreground mb-4">Capacity: {team.capacity.toLocaleString()} seats</p>
                <div className="w-full h-32 bg-gradient-to-r from-green-600 to-green-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{team.stadium}</span>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <span>Major Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {team.achievements.map((achievement: string, index: number) => (
                    <li key={index} className="text-sm flex items-center space-x-2">
                      <Trophy className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Description */}
          <Card className="mb-8 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle>About {team.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{team.description}</p>
            </CardContent>
          </Card>

          {/* Top Players */}
          <Card className="mb-8 animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle>Top Players</CardTitle>
              <CardDescription>Key players in the current squad</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {team.topPlayers.map((player: any, index: number) => (
                  <div key={index} className="p-4 bg-muted/20 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-lg">{player.nationality}</span>
                      <div>
                        <h4 className="font-bold text-sm">{player.name}</h4>
                        <p className="text-xs text-muted-foreground">{player.position}</p>
                      </div>
                    </div>
                    <p className="text-xs font-medium text-primary">{player.marketValue}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Transfers */}
          <Card className="animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
            <CardHeader>
              <CardTitle>Recent Transfers</CardTitle>
              <CardDescription>Latest incoming transfers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {team.recentTransfers.map((transfer: any, index: number) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                    <div>
                      <h4 className="font-bold">{transfer.player}</h4>
                      <p className="text-sm text-muted-foreground">From: {transfer.from}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant={transfer.type === 'In' ? 'default' : 'secondary'}>
                        {transfer.type}
                      </Badge>
                      <p className="text-sm font-medium text-primary mt-1">{transfer.fee}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TeamDetail;

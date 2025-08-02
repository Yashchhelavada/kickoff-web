
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import { Plus, Minus, Save, Play, Clock, Users, Square, Trophy } from 'lucide-react';

interface Player {
  id: string;
  name: string;
  position: string;
}

interface Team {
  name: string;
  players: Player[];
  score: number;
  goalScorers: string[];
}

const CreateMatch = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  const [matchTitle, setMatchTitle] = useState('');
  const [matchTime, setMatchTime] = useState('90');
  const [currentTime, setCurrentTime] = useState('0');
  const [isMatchRunning, setIsMatchRunning] = useState(false);
  const [showEndDialog, setShowEndDialog] = useState(false);
  const [team1, setTeam1] = useState<Team>({
    name: '',
    players: [{ id: '1', name: '', position: 'GK' }],
    score: 0,
    goalScorers: []
  });
  const [team2, setTeam2] = useState<Team>({
    name: '',
    players: [{ id: '1', name: '', position: 'GK' }],
    score: 0,
    goalScorers: []
  });

  const positions = ['GK', 'DEF', 'MID', 'FWD'];

  // Timer functionality
  useEffect(() => {
    if (isMatchRunning) {
      timerRef.current = setInterval(() => {
        setCurrentTime(prevTime => {
          const newTime = parseInt(prevTime) + 1;
          if (newTime >= parseInt(matchTime)) {
            setIsMatchRunning(false);
            setShowEndDialog(true);
            if (timerRef.current) {
              clearInterval(timerRef.current);
            }
            return matchTime;
          }
          return newTime.toString();
        });
      }, 1000); // 1 second = 1 minute for demo purposes
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isMatchRunning, matchTime]);

  const startMatch = () => {
    if (!matchTitle || !team1.name || !team2.name) {
      toast({
        title: "Missing Information",
        description: "Please fill in match title and team names to start the match.",
        variant: "destructive"
      });
      return;
    }

    setIsMatchRunning(true);
    toast({
      title: "Match Started!",
      description: `${team1.name} vs ${team2.name} is now live!`,
    });
  };

  const stopMatch = () => {
    setIsMatchRunning(false);
    setShowEndDialog(true);
  };

  const handleEndMatch = (save: boolean) => {
    if (save) {
      saveMatch();
    } else {
      // Reset match
      setMatchTitle('');
      setTeam1({ name: '', players: [{ id: '1', name: '', position: 'GK' }], score: 0, goalScorers: [] });
      setTeam2({ name: '', players: [{ id: '1', name: '', position: 'GK' }], score: 0, goalScorers: [] });
      setCurrentTime('0');
      toast({
        title: "Match Deleted",
        description: "The match has been deleted.",
      });
    }
    setShowEndDialog(false);
  };

  const addPlayer = (teamNumber: 1 | 2) => {
    const newPlayer: Player = {
      id: Date.now().toString(),
      name: '',
      position: 'MID'
    };

    if (teamNumber === 1) {
      setTeam1(prev => ({
        ...prev,
        players: [...prev.players, newPlayer]
      }));
    } else {
      setTeam2(prev => ({
        ...prev,
        players: [...prev.players, newPlayer]
      }));
    }
  };

  const removePlayer = (teamNumber: 1 | 2, playerId: string) => {
    if (teamNumber === 1) {
      if (team1.players.length > 1) {
        setTeam1(prev => ({
          ...prev,
          players: prev.players.filter(p => p.id !== playerId)
        }));
      }
    } else {
      if (team2.players.length > 1) {
        setTeam2(prev => ({
          ...prev,
          players: prev.players.filter(p => p.id !== playerId)
        }));
      }
    }
  };

  const updatePlayer = (teamNumber: 1 | 2, playerId: string, field: 'name' | 'position', value: string) => {
    if (teamNumber === 1) {
      setTeam1(prev => ({
        ...prev,
        players: prev.players.map(p => 
          p.id === playerId ? { ...p, [field]: value } : p
        )
      }));
    } else {
      setTeam2(prev => ({
        ...prev,
        players: prev.players.map(p => 
          p.id === playerId ? { ...p, [field]: value } : p
        )
      }));
    }
  };

  const updateScore = (teamNumber: 1 | 2, increment: boolean) => {
    if (teamNumber === 1) {
      const newScore = increment ? team1.score + 1 : Math.max(0, team1.score - 1);
      if (increment && newScore > team1.score) {
        // Add goal scorer
        const playerName = prompt(`Who scored for ${team1.name}?`);
        if (playerName) {
          setTeam1(prev => ({
            ...prev,
            score: newScore,
            goalScorers: [...prev.goalScorers, playerName]
          }));
        } else {
          setTeam1(prev => ({ ...prev, score: newScore }));
        }
      } else if (!increment && newScore < team1.score) {
        // Remove last goal scorer
        setTeam1(prev => ({
          ...prev,
          score: newScore,
          goalScorers: prev.goalScorers.slice(0, -1)
        }));
      }
    } else {
      const newScore = increment ? team2.score + 1 : Math.max(0, team2.score - 1);
      if (increment && newScore > team2.score) {
        // Add goal scorer
        const playerName = prompt(`Who scored for ${team2.name}?`);
        if (playerName) {
          setTeam2(prev => ({
            ...prev,
            score: newScore,
            goalScorers: [...prev.goalScorers, playerName]
          }));
        } else {
          setTeam2(prev => ({ ...prev, score: newScore }));
        }
      } else if (!increment && newScore < team2.score) {
        // Remove last goal scorer
        setTeam2(prev => ({
          ...prev,
          score: newScore,
          goalScorers: prev.goalScorers.slice(0, -1)
        }));
      }
    }
  };

  const saveMatch = () => {
    if (!matchTitle || !team1.name || !team2.name) {
      toast({
        title: "Missing Information",
        description: "Please fill in match title and team names.",
        variant: "destructive"
      });
      return;
    }

    const matchData = {
      id: Date.now().toString(),
      title: matchTitle,
      team1,
      team2,
      matchTime: parseInt(matchTime),
      currentTime: parseInt(currentTime),
      createdAt: new Date().toISOString()
    };

    // Save to localStorage for demo purposes
    const savedMatches = JSON.parse(localStorage.getItem('customMatches') || '[]');
    savedMatches.push(matchData);
    localStorage.setItem('customMatches', JSON.stringify(savedMatches));

    toast({
      title: "Match Created!",
      description: "Your custom match has been saved successfully.",
    });

    // Reset form
    setMatchTitle('');
    setTeam1({ name: '', players: [{ id: '1', name: '', position: 'GK' }], score: 0, goalScorers: [] });
    setTeam2({ name: '', players: [{ id: '1', name: '', position: 'GK' }], score: 0, goalScorers: [] });
    setCurrentTime('0');
  };

  const previewMatch = () => {
    if (!matchTitle || !team1.name || !team2.name) {
      toast({
        title: "Missing Information",
        description: "Please fill in match title and team names to preview.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Match Preview",
      description: `${team1.name} ${team1.score} - ${team2.score} ${team2.name} (${currentTime}')`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Header */}
          <div className="text-center mb-8 animate-slide-in-up">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Create Custom Match
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Design your own football match with custom teams, players, scores, and timing. 
              Perfect for creating scenarios, tracking local games, or just for fun!
            </p>
          </div>

          {/* Match Settings */}
          <Card className="mb-8 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Play className="w-5 h-5 text-primary" />
                <span>Match Settings</span>
              </CardTitle>
              <CardDescription>Configure basic match information and timing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="matchTitle">Match Title</Label>
                  <Input
                    id="matchTitle"
                    value={matchTitle}
                    onChange={(e) => setMatchTitle(e.target.value)}
                    placeholder="e.g., Custom Derby Match"
                  />
                </div>
                <div>
                  <Label htmlFor="matchTime">Match Duration (minutes)</Label>
                  <Input
                    id="matchTime"
                    type="number"
                    value={matchTime}
                    onChange={(e) => setMatchTime(e.target.value)}
                    min="1"
                    max="120"
                  />
                </div>
                <div>
                  <Label htmlFor="currentTime">Current Time (minutes)</Label>
                  <Input
                    id="currentTime"
                    type="number"
                    value={currentTime}
                    onChange={(e) => setCurrentTime(e.target.value)}
                    min="0"
                    max={matchTime}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Match Preview */}
          <Card className="mb-8 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Match Preview</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <h2 className="text-3xl font-bold mb-4">{matchTitle || 'Your Custom Match'}</h2>
                <div className="flex items-center justify-center space-x-8 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-500 mb-2">{team1.name || 'Team 1'}</div>
                    <div className="text-6xl font-bold">{team1.score}</div>
                    {team1.goalScorers.length > 0 && (
                      <div className="text-sm text-muted-foreground mt-2">
                        <p className="font-medium">⚽ Goal scorers:</p>
                        {team1.goalScorers.map((scorer, i) => (
                          <p key={i} className="text-xs">{scorer}</p>
                        ))}
                      </div>
                    )}
                    {isMatchRunning && (
                      <div className="flex justify-center space-x-2 mt-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateScore(1, false)}
                          disabled={team1.score <= 0}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateScore(1, true)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                    <div className="text-sm text-muted-foreground mt-2">{team1.players.length} players</div>
                  </div>
                  <div className="text-4xl font-bold text-muted-foreground">VS</div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500 mb-2">{team2.name || 'Team 2'}</div>
                    <div className="text-6xl font-bold">{team2.score}</div>
                    {team2.goalScorers.length > 0 && (
                      <div className="text-sm text-muted-foreground mt-2">
                        <p className="font-medium">⚽ Goal scorers:</p>
                        {team2.goalScorers.map((scorer, i) => (
                          <p key={i} className="text-xs">{scorer}</p>
                        ))}
                      </div>
                    )}
                    {isMatchRunning && (
                      <div className="flex justify-center space-x-2 mt-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateScore(2, false)}
                          disabled={team2.score <= 0}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateScore(2, true)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                    <div className="text-sm text-muted-foreground mt-2">{team2.players.length} players</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{currentTime}' / {matchTime}'</span>
                  {isMatchRunning && <span className="text-green-500 ml-2">● LIVE</span>}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Teams Configuration */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            
            {/* Team 1 */}
            <Card className="animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-blue-500" />
                    <span>Team 1</span>
                  </div>
                  {!isMatchRunning && (
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateScore(1, false)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="text-2xl font-bold text-blue-500">{team1.score}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateScore(1, true)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="team1Name">Team Name</Label>
                  <Input
                    id="team1Name"
                    value={team1.name}
                    onChange={(e) => setTeam1(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter team name"
                  />
                </div>
                
                <Separator />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Label>Players ({team1.players.length})</Label>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => addPlayer(1)}
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Add Player
                    </Button>
                  </div>
                  
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {team1.players.map((player, index) => (
                      <div key={player.id} className="flex items-center space-x-2 p-3 bg-muted/20 rounded-lg">
                        <span className="text-sm font-medium w-6">{index + 1}</span>
                        <Input
                          value={player.name}
                          onChange={(e) => updatePlayer(1, player.id, 'name', e.target.value)}
                          placeholder="Player name"
                          className="flex-1"
                        />
                        <select
                          value={player.position}
                          onChange={(e) => updatePlayer(1, player.id, 'position', e.target.value)}
                          className="px-3 py-2 bg-background border border-border rounded-md text-sm"
                        >
                          {positions.map(pos => (
                            <option key={pos} value={pos}>{pos}</option>
                          ))}
                        </select>
                        {team1.players.length > 1 && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removePlayer(1, player.id)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team 2 */}
            <Card className="animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-red-500" />
                    <span>Team 2</span>
                  </div>
                  {!isMatchRunning && (
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateScore(2, false)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="text-2xl font-bold text-red-500">{team2.score}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateScore(2, true)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="team2Name">Team Name</Label>
                  <Input
                    id="team2Name"
                    value={team2.name}
                    onChange={(e) => setTeam2(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter team name"
                  />
                </div>
                
                <Separator />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Label>Players ({team2.players.length})</Label>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => addPlayer(2)}
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Add Player
                    </Button>
                  </div>
                  
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {team2.players.map((player, index) => (
                      <div key={player.id} className="flex items-center space-x-2 p-3 bg-muted/20 rounded-lg">
                        <span className="text-sm font-medium w-6">{index + 1}</span>
                        <Input
                          value={player.name}
                          onChange={(e) => updatePlayer(2, player.id, 'name', e.target.value)}
                          placeholder="Player name"
                          className="flex-1"
                        />
                        <select
                          value={player.position}
                          onChange={(e) => updatePlayer(2, player.id, 'position', e.target.value)}
                          className="px-3 py-2 bg-background border border-border rounded-md text-sm"
                        >
                          {positions.map(pos => (
                            <option key={pos} value={pos}>{pos}</option>
                          ))}
                        </select>
                        {team2.players.length > 1 && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removePlayer(2, player.id)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>


          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
            {!isMatchRunning ? (
              <>
                <Button onClick={previewMatch} variant="outline" size="lg">
                  <Play className="w-5 h-5 mr-2" />
                  Preview Match
                </Button>
                <Button onClick={startMatch} size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                  <Play className="w-5 h-5 mr-2" />
                  Start Match
                </Button>
                <Button onClick={saveMatch} variant="outline" size="lg">
                  <Save className="w-5 h-5 mr-2" />
                  Save Match
                </Button>
              </>
            ) : (
              <Button onClick={stopMatch} variant="destructive" size="lg">
                <Square className="w-5 h-5 mr-2" />
                Stop Match
              </Button>
            )}
          </div>

          {/* End Match Dialog */}
          <AlertDialog open={showEndDialog} onOpenChange={setShowEndDialog}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="flex items-center space-x-2">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  <span>Match Finished!</span>
                </AlertDialogTitle>
                <AlertDialogDescription>
                  <div className="text-center py-4">
                    <div className="text-2xl font-bold mb-4">Final Score</div>
                    <div className="flex items-center justify-center space-x-6 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-500">{team1.name}</div>
                        <div className="text-4xl font-bold">{team1.score}</div>
                      </div>
                      <div className="text-2xl font-bold text-muted-foreground">-</div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-red-500">{team2.name}</div>
                        <div className="text-4xl font-bold">{team2.score}</div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Full Time: {matchTime} minutes
                    </div>
                  </div>
                  Would you like to save this match result or delete it?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={() => handleEndMatch(false)}>
                  Delete Match
                </AlertDialogCancel>
                <AlertDialogAction onClick={() => handleEndMatch(true)}>
                  Save Match
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CreateMatch;

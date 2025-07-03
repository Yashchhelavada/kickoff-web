
import { useQuery } from '@tanstack/react-query';
import { footballApi, type Fixture } from '@/services/footballApi';

export const useFootballData = () => {
  const {
    data: liveMatches = [],
    isLoading: liveLoading,
    error: liveError,
  } = useQuery({
    queryKey: ['liveMatches'],
    queryFn: footballApi.getLiveMatches,
    refetchInterval: 30000, // Refetch every 30 seconds for live data
    retry: 3,
  });

  const {
    data: todayMatches = [],
    isLoading: todayLoading,
    error: todayError,
  } = useQuery({
    queryKey: ['todayMatches'],
    queryFn: footballApi.getTodayMatches,
    refetchInterval: 60000, // Refetch every minute for today's matches
    retry: 3,
  });

  const transformFixtureToMatch = (fixture: Fixture) => {
    const getStatusDisplay = () => {
      switch (fixture.fixture.status.short) {
        case '1H':
        case '2H':
          return {
            status: 'LIVE' as const,
            minute: fixture.fixture.status.elapsed ? `${fixture.fixture.status.elapsed}'` : 'LIVE',
          };
        case 'HT':
          return {
            status: 'HT' as const,
            minute: 'HT',
          };
        case 'FT':
          return {
            status: 'FT' as const,
            minute: 'FT',
          };
        case 'NS':
          return {
            status: 'SCHEDULED' as const,
            time: new Date(fixture.fixture.date).toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
            }),
          };
        default:
          return {
            status: 'SCHEDULED' as const,
            time: new Date(fixture.fixture.date).toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
            }),
          };
      }
    };

    const statusData = getStatusDisplay();

    return {
      id: fixture.fixture.id.toString(),
      homeTeam: {
        name: fixture.teams.home.name,
        logo: fixture.teams.home.logo,
        score: fixture.goals.home,
      },
      awayTeam: {
        name: fixture.teams.away.name,
        logo: fixture.teams.away.logo,
        score: fixture.goals.away,
      },
      league: fixture.league.name,
      venue: fixture.fixture.venue.name || undefined,
      ...statusData,
    };
  };

  const transformedLiveMatches = liveMatches.map(transformFixtureToMatch);
  const transformedTodayMatches = todayMatches.map(transformFixtureToMatch);

  return {
    liveMatches: transformedLiveMatches,
    todayMatches: transformedTodayMatches,
    isLoading: liveLoading || todayLoading,
    error: liveError || todayError,
  };
};

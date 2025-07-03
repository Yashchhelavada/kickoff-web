
const API_KEY = '6853c5acb66147e2a80eda32be0931fd';
const BASE_URL = 'https://v3.football.api-sports.io';

interface ApiResponse<T> {
  get: string;
  parameters: any;
  errors: any[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: T;
}

interface Fixture {
  fixture: {
    id: number;
    referee: string | null;
    timezone: string;
    date: string;
    timestamp: number;
    periods: {
      first: number | null;
      second: number | null;
    };
    venue: {
      id: number | null;
      name: string | null;
      city: string | null;
    };
    status: {
      long: string;
      short: string;
      elapsed: number | null;
    };
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    round: string;
  };
  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
      winner: boolean | null;
    };
    away: {
      id: number;
      name: string;
      logo: string;
      winner: boolean | null;
    };
  };
  goals: {
    home: number | null;
    away: number | null;
  };
  score: {
    halftime: {
      home: number | null;
      away: number | null;
    };
    fulltime: {
      home: number | null;
      away: number | null;
    };
    extratime: {
      home: number | null;
      away: number | null;
    };
    penalty: {
      home: number | null;
      away: number | null;
    };
  };
}

const apiRequest = async <T>(endpoint: string, params: Record<string, string> = {}): Promise<T> => {
  const url = new URL(`${BASE_URL}${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  console.log('Making API request to:', url.toString());

  try {
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'v3.football.api-sports.io'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponse<T> = await response.json();
    console.log('API response:', data);
    
    if (data.errors && data.errors.length > 0) {
      throw new Error(`API Error: ${data.errors.join(', ')}`);
    }

    return data.response;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

export const footballApi = {
  getLiveMatches: () => apiRequest<Fixture[]>('/fixtures', { live: 'all' }),
  getTodayMatches: () => {
    const today = new Date().toISOString().split('T')[0];
    return apiRequest<Fixture[]>('/fixtures', { date: today });
  },
  getFixturesByDate: (date: string) => apiRequest<Fixture[]>('/fixtures', { date }),
  getLeagues: () => apiRequest<any[]>('/leagues'),
};

export type { Fixture };


interface TransferNews {
  id: string;
  title: string;
  description: string;
  player: string;
  fromTeam: string;
  toTeam: string;
  fee: string;
  time: string;
  type: 'transfer' | 'rumor' | 'loan';
}

// Mock transfer news data (in a real app, this would come from an API)
export const getTransferNews = (): TransferNews[] => {
  return [
    {
      id: '1',
      title: 'Mbappé completes Real Madrid move',
      description: 'French superstar Kylian Mbappé officially joins Real Madrid on a free transfer from PSG',
      player: 'Kylian Mbappé',
      fromTeam: 'PSG',
      toTeam: 'Real Madrid',
      fee: 'Free Transfer',
      time: '2 hours ago',
      type: 'transfer'
    },
    {
      id: '2',
      title: 'Arsenal target new striker',
      description: 'Arsenal are reportedly interested in signing Viktor Gyökeres from Sporting CP',
      player: 'Viktor Gyökeres',
      fromTeam: 'Sporting CP',
      toTeam: 'Arsenal',
      fee: '€80M',
      time: '4 hours ago',
      type: 'rumor'
    },
    {
      id: '3',
      title: 'Chelsea loan deal confirmed',
      description: 'Chelsea midfielder Conor Gallagher joins Atlético Madrid on a season-long loan',
      player: 'Conor Gallagher',
      fromTeam: 'Chelsea',
      toTeam: 'Atlético Madrid',
      fee: 'Loan Deal',
      time: '6 hours ago',
      type: 'loan'
    },
    {
      id: '4',
      title: 'Liverpool consider defensive reinforcement',
      description: 'Liverpool are monitoring Sevilla centre-back Loïc Badé as potential January signing',
      player: 'Loïc Badé',
      fromTeam: 'Sevilla',
      toTeam: 'Liverpool',
      fee: '€40M',
      time: '8 hours ago',
      type: 'rumor'
    }
  ];
};

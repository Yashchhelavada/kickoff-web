
import Navigation from '@/components/Navigation';
import { Bell, Clock, Trophy, Users } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'match',
      title: 'Match Starting Soon',
      message: 'Arsenal vs Chelsea starts in 15 minutes',
      time: '2 min ago',
      icon: Trophy,
      read: false
    },
    {
      id: 2,
      type: 'goal',
      title: 'GOAL!',
      message: 'Manchester City 2-1 Liverpool - Haaland scores!',
      time: '5 min ago',
      icon: Trophy,
      read: false
    },
    {
      id: 3,
      type: 'transfer',
      title: 'Transfer News',
      message: 'Mbappé officially joins Real Madrid',
      time: '1 hour ago',
      icon: Users,
      read: true
    },
    {
      id: 4,
      type: 'match',
      title: 'Match Result',
      message: 'Barcelona 3-0 Real Madrid - El Clasico finished',
      time: '2 hours ago',
      icon: Trophy,
      read: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 md:pt-20 pb-20 md:pb-8">
        <div className="container mx-auto px-4 space-y-8">
          
          <section className="text-center py-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
              Notifications
            </h1>
            <p className="text-xl text-muted-foreground">Stay updated with the latest football news</p>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-6">
              <Bell className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Recent Notifications</h2>
            </div>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`glass-card p-6 rounded-xl hover:bg-primary/5 transition-all duration-300 cursor-pointer border-2 border-primary/20 ${
                    !notification.read ? 'border-l-4 border-l-secondary' : ''
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 ${
                      notification.type === 'goal' ? 'bg-green-500/20 border-green-500/30' :
                      notification.type === 'match' ? 'bg-primary/20 border-primary/30' :
                      'bg-secondary/20 border-secondary/30'
                    }`}>
                      <notification.icon className={`w-6 h-6 ${
                        notification.type === 'goal' ? 'text-green-600' :
                        notification.type === 'match' ? 'text-primary' :
                        'text-secondary'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-bold text-lg text-foreground">{notification.title}</h3>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-secondary rounded-full" />
                        )}
                      </div>
                      <p className="text-muted-foreground mb-2 font-medium">{notification.message}</p>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="font-medium">{notification.time}</span>
                      </div>
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

export default Notifications;

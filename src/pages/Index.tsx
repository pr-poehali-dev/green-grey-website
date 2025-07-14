import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [matrixChars, setMatrixChars] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'Digital Marketing Matrix v2.0 Initialized...',
    'Loading portfolio data...',
    'Connecting to client database...',
    'System ready. Welcome to the Matrix.'
  ]);

  const matrixCharacters = ['0', '1', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ы', 'Э', 'Ю', 'Я'];

  useEffect(() => {
    const interval = setInterval(() => {
      setMatrixChars(prev => {
        const newChars = [...prev];
        for (let i = 0; i < 20; i++) {
          newChars[i] = matrixCharacters[Math.floor(Math.random() * matrixCharacters.length)];
        }
        return newChars.slice(0, 100);
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "SEO Optimization",
      description: "Поисковая оптимизация сайтов",
      icon: "Search",
      status: "ACTIVE"
    },
    {
      title: "PPC Management",
      description: "Управление контекстной рекламой",
      icon: "Target",
      status: "ONLINE"
    },
    {
      title: "Social Media",
      description: "Продвижение в социальных сетях",
      icon: "Users",
      status: "RUNNING"
    },
    {
      title: "Analytics",
      description: "Веб-аналитика и отчетность",
      icon: "BarChart3",
      status: "MONITORING"
    }
  ];

  const portfolioItems = [
    {
      title: "E-commerce Boost",
      description: "Увеличение продаж на 400%",
      metrics: "ROI: 420%",
      tech: "Google Ads, Facebook Ads"
    },
    {
      title: "B2B Lead Generation",
      description: "Генерация лидов для IT-компании",
      metrics: "CTR: 12.5%",
      tech: "LinkedIn Ads, Email Marketing"
    },
    {
      title: "Brand Awareness",
      description: "Повышение узнаваемости бренда",
      metrics: "Reach: 2M+",
      tech: "Instagram, TikTok, YouTube"
    }
  ];

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentCommand.trim()) {
      setTerminalHistory(prev => [...prev, `> ${currentCommand}`, 'Command executed successfully.']);
      setCurrentCommand('');
    }
  };

  return (
    <div className="min-h-screen bg-black text-matrix-green relative overflow-hidden">
      {/* Matrix Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 matrix-bg opacity-10"></div>
        {matrixChars.map((char, index) => (
          <div
            key={index}
            className="absolute text-matrix-green/30 font-mono text-sm animate-matrix-rain"
            style={{
              left: `${(index % 20) * 5}%`,
              top: `${Math.floor(index / 20) * 10}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {char}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-matrix-green/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Icon name="Code" className="text-matrix-green" />
                <span className="text-xl font-bold matrix-text">DIGITAL.MATRIX</span>
              </div>
              <div className="hidden md:flex space-x-6">
                <a href="#main" className="hover:text-matrix-green/80 transition-colors">ГЛАВНАЯ</a>
                <a href="#portfolio" className="hover:text-matrix-green/80 transition-colors">ПОРТФОЛИО</a>
                <a href="#services" className="hover:text-matrix-green/80 transition-colors">УСЛУГИ</a>
                <a href="#contact" className="hover:text-matrix-green/80 transition-colors">КОНТАКТЫ</a>
              </div>
              <Button size="sm" className="bg-matrix-green text-black hover:bg-matrix-green/80">
                CONNECT
              </Button>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section id="main" className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="mb-8 relative">
              <img 
                src="/img/faeef459-f556-496b-a1a0-c8aaecf01068.jpg" 
                alt="Digital Marketing Specialist"
                className="w-32 h-32 rounded-full mx-auto mb-6 terminal-border"
              />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-matrix-green rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-glitch">
              <span className="matrix-text">DIGITAL</span>
              <br />
              <span className="text-white">МАРКЕТОЛОГ</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-matrix-green/80 font-mono">
              &gt; Погружаем ваш бизнес в цифровую реальность
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-matrix-green text-black hover:bg-matrix-green/80 matrix-glow">
                НАЧАТЬ ПРОЕКТ
              </Button>
              <Button size="lg" variant="outline" className="border-matrix-green text-matrix-green hover:bg-matrix-green/10">
                СМОТРЕТЬ КЕЙСЫ
              </Button>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 matrix-text">
              &lt;ПОРТФОЛИО /&gt;
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item, index) => (
                <Card key={index} className="bg-matrix-gray/50 border-matrix-green/20 backdrop-blur-sm hover:matrix-glow transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-matrix-green font-mono">{item.title}</CardTitle>
                    <CardDescription className="text-matrix-green/70">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-mono text-sm">РЕЗУЛЬТАТ:</span>
                        <Badge className="bg-matrix-green text-black">{item.metrics}</Badge>
                      </div>
                      <div className="text-matrix-green/60 text-sm font-mono">
                        STACK: {item.tech}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 matrix-text">
              &lt;УСЛУГИ /&gt;
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="bg-matrix-gray/50 border-matrix-green/20 backdrop-blur-sm terminal-border">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Icon name={service.icon} className="text-matrix-green" />
                        <CardTitle className="text-matrix-green font-mono">{service.title}</CardTitle>
                      </div>
                      <Badge className="bg-matrix-green/20 text-matrix-green border-matrix-green">
                        {service.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-matrix-green/70 font-mono">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Terminal Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <Card className="bg-black border-matrix-green terminal-border">
              <CardHeader>
                <CardTitle className="text-matrix-green font-mono flex items-center space-x-2">
                  <Icon name="Terminal" />
                  <span>MATRIX TERMINAL</span>
                  <div className="flex space-x-1 ml-auto">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-matrix-green rounded-full"></div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4 h-40 overflow-y-auto">
                  {terminalHistory.map((line, index) => (
                    <div key={index} className="text-matrix-green font-mono text-sm">
                      {line}
                    </div>
                  ))}
                </div>
                <form onSubmit={handleTerminalSubmit} className="flex items-center space-x-2">
                  <span className="text-matrix-green font-mono">&gt;</span>
                  <Input
                    value={currentCommand}
                    onChange={(e) => setCurrentCommand(e.target.value)}
                    placeholder="Введите команду..."
                    className="bg-transparent border-none text-matrix-green font-mono focus:ring-matrix-green"
                  />
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 matrix-text">
              &lt;КОНТАКТЫ /&gt;
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-matrix-gray/50 border-matrix-green/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-matrix-green font-mono">СВЯЗАТЬСЯ</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input
                      placeholder="Ваше имя"
                      className="bg-transparent border-matrix-green/30 text-matrix-green"
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      className="bg-transparent border-matrix-green/30 text-matrix-green"
                    />
                    <Textarea
                      placeholder="Сообщение"
                      className="bg-transparent border-matrix-green/30 text-matrix-green"
                      rows={4}
                    />
                    <Button className="w-full bg-matrix-green text-black hover:bg-matrix-green/80">
                      ОТПРАВИТЬ
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
              <Card className="bg-matrix-gray/50 border-matrix-green/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-matrix-green font-mono">СИСТЕМА INFO</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex justify-between">
                      <span className="text-matrix-green/70">STATUS:</span>
                      <span className="text-matrix-green">ONLINE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-matrix-green/70">LOCATION:</span>
                      <span className="text-matrix-green">MOSCOW, RU</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-matrix-green/70">RESPONSE TIME:</span>
                      <span className="text-matrix-green">&lt; 1 HOUR</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-matrix-green/70">TELEGRAM:</span>
                      <span className="text-matrix-green">@digitalmatrix</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-matrix-green/70">EMAIL:</span>
                      <span className="text-matrix-green">hello@matrix.dev</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-matrix-green/20 py-8 px-4">
          <div className="container mx-auto text-center">
            <p className="text-matrix-green/70 font-mono text-sm">
              © 2024 DIGITAL.MATRIX - Все права защищены | Powered by React Matrix
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
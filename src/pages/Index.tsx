import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeTab, setActiveTab] = useState('services');

  const services = [
    {
      title: "Контекстная реклама",
      description: "Google Ads, Яндекс.Директ с высоким ROAS",
      icon: "Target",
      roas: "400%"
    },
    {
      title: "Таргетированная реклама",
      description: "Facebook, Instagram, VKontakte",
      icon: "Users",
      roas: "350%"
    },
    {
      title: "SEO продвижение",
      description: "Органический трафик и лиды",
      icon: "TrendingUp",
      roas: "280%"
    },
    {
      title: "Аналитика и отчеты",
      description: "Полная аналитика результатов",
      icon: "BarChart3",
      roas: "Постоянно"
    }
  ];

  const cases = [
    {
      title: "Интернет-магазин электроники",
      description: "Увеличение продаж в 4 раза",
      before: "500K ₽",
      after: "2M ₽",
      roas: "420%",
      period: "3 месяца"
    },
    {
      title: "B2B IT-услуги",
      description: "Генерация качественных лидов",
      before: "10 лидов",
      after: "85 лидов",
      roas: "380%",
      period: "2 месяца"
    },
    {
      title: "Образовательные курсы",
      description: "Масштабирование рекламы",
      before: "200K ₽",
      after: "1.2M ₽",
      roas: "460%",
      period: "4 месяца"
    }
  ];

  const stats = [
    { label: "Средний ROAS", value: "400%", icon: "TrendingUp" },
    { label: "Проектов запущено", value: "250+", icon: "Rocket" },
    { label: "Лет опыта", value: "8+", icon: "Award" },
    { label: "Клиентов", value: "180+", icon: "Users" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/50 sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Zap" className="text-primary-foreground" size={20} />
              </div>
              <span className="text-2xl font-bold">AD Matrix</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
              <a href="#cases" className="text-muted-foreground hover:text-foreground transition-colors">Кейсы</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">Обо мне</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Начать проект
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Трафик с высоким ROAS
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Увеличу ваши продажи в{" "}
              <span className="text-gradient">4 раза</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Работаю с хайроллерами и прибыльными источниками трафика. 
              Средний ROAS моих проектов — 400%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground green-glow">
                Получить аудит бесплатно
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-muted">
                Посмотреть кейсы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon} className="text-primary" size={24} />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр digital-маркетинга для масштабирования вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="card-hover bg-card/50 backdrop-blur border-border/50">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Средний ROAS</span>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {service.roas}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Кейсы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты моих клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((case_item, index) => (
              <Card key={index} className="card-hover bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{case_item.title}</CardTitle>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {case_item.roas}
                    </Badge>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {case_item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Было</span>
                      <span className="font-medium">{case_item.before}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Стало</span>
                      <span className="font-medium text-primary">{case_item.after}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Период</span>
                      <span className="text-sm">{case_item.period}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Обо мне</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Привет! Я digital-маркетолог с 8-летним опытом в области 
                  контекстной и таргетированной рекламы.
                </p>
                <p>
                  Специализируюсь на проектах с высоким ROAS и работаю только 
                  с прибыльными источниками трафика. За годы работы запустил 
                  250+ проектов для клиентов разных ниш.
                </p>
                <p>
                  Мой подход — это не просто настройка рекламы, а создание 
                  комплексной воронки продаж с глубокой аналитикой и 
                  постоянной оптимизацией.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Badge variant="secondary">Google Ads</Badge>
                <Badge variant="secondary">Facebook Ads</Badge>
                <Badge variant="secondary">Яндекс.Директ</Badge>
                <Badge variant="secondary">SEO</Badge>
                <Badge variant="secondary">Analytics</Badge>
                <Badge variant="secondary">CRO</Badge>
              </div>
            </div>
            <div className="text-center">
              <div className="relative inline-block">
                <img 
                  src="/img/5cfddbad-4ef6-4007-a09e-bb75ed3247e5.jpg" 
                  alt="Digital Marketing Specialist"
                  className="w-80 h-80 object-cover rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Award" className="text-primary" size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Готов обсудить ваш проект и показать, как можно увеличить продажи
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Напишите мне</CardTitle>
                <CardDescription>
                  Расскажите о своем проекте, и я предложу решение
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Имя"
                      className="bg-background/50 border-border/50"
                    />
                    <Input
                      placeholder="Компания"
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-background/50 border-border/50"
                  />
                  <Input
                    placeholder="Телефон"
                    className="bg-background/50 border-border/50"
                  />
                  <Textarea
                    placeholder="Расскажите о проекте..."
                    className="bg-background/50 border-border/50"
                    rows={4}
                  />
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-8">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">hello@admatrix.pro</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="MessageCircle" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Telegram</h3>
                      <p className="text-muted-foreground">@admatrix_pro</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Телефон</h3>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <h3 className="font-semibold text-primary mb-2">Бесплатный аудит</h3>
                <p className="text-sm text-muted-foreground">
                  Проведу бесплатный аудит вашей текущей рекламы и покажу, 
                  где можно улучшить результаты.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 AD Matrix - Digital Marketing with High ROAS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
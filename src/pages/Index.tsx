import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const bonuses = [
    {
      icon: "Gift",
      title: "Бонус на первый депозит",
      description: "+500% к депозиту до 75 000 ₽",
      badge: "ТОП"
    },
    {
      icon: "Sparkles",
      title: "Фриспины",
      description: "200 бесплатных вращений на слоты",
      badge: "НОВОЕ"
    },
    {
      icon: "Trophy",
      title: "Кэшбэк",
      description: "До 30% возврат от проигрыша",
      badge: "КАЖДУЮ НЕДЕЛЮ"
    },
    {
      icon: "Zap",
      title: "Турниры",
      description: "Призовой фонд 1 000 000 ₽",
      badge: "МЕГА"
    }
  ];

  const faqs = [
    {
      question: "Как получить бонус?",
      answer: "Зарегистрируйтесь по реферальной ссылке, пополните счёт и бонус автоматически начислится на ваш баланс. Никаких промокодов не требуется!"
    },
    {
      question: "Сколько времени действует бонус?",
      answer: "Бонус действует 30 дней с момента активации. За это время необходимо выполнить условия отыгрыша."
    },
    {
      question: "Какие способы пополнения доступны?",
      answer: "Доступны все популярные способы: банковские карты, электронные кошельки, криптовалюта. Минимальный депозит от 100 ₽."
    },
    {
      question: "Можно ли вывести бонус?",
      answer: "Бонус нужно отыграть с вейджером x35. После выполнения условий можно вывести выигрыш любым удобным способом."
    },
    {
      question: "Есть ли мобильное приложение?",
      answer: "Да! Доступны приложения для iOS и Android с полным функционалом. Играйте где угодно и когда угодно."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              🎮 WIN PROMO
            </h1>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('bonuses')} className="text-foreground/80 hover:text-foreground transition-colors">
                Бонусы
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-foreground/80 hover:text-foreground transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection('register')} className="text-foreground/80 hover:text-foreground transition-colors">
                Регистрация
              </button>
            </div>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 hover-scale">
              Войти
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge className="bg-accent text-accent-foreground text-sm px-4 py-2">
                🔥 ЭКСКЛЮЗИВНЫЕ БОНУСЫ
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                ВЫИГРЫВАЙ С
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse-slow">
                  1WIN & MELLSTROY
                </span>
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Получи мощные бонусы на старте! До 500% на первый депозит + 200 фриспинов. Начни выигрывать прямо сейчас!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 hover-scale"
                  onClick={() => scrollToSection('register')}
                >
                  <Icon name="Rocket" size={24} className="mr-2" />
                  Забрать бонус
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 border-2 hover-scale"
                  onClick={() => scrollToSection('bonuses')}
                >
                  Узнать больше
                  <Icon name="ChevronDown" size={24} className="ml-2" />
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/b3e95e0f-0a70-440d-88cc-00f9f68faebe/files/7e7d59fb-3e8b-430b-8fac-119e536ea8db.jpg" 
                alt="Gaming" 
                className="relative rounded-3xl shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="bonuses" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary text-primary-foreground text-sm px-4 py-2">
              💎 ПРЕМИУМ БОНУСЫ
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black">Твои преимущества</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Эксклюзивные бонусы для новых игроков. Начни с максимальной выгодой!
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonuses.map((bonus, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-all duration-300 hover-scale bg-card/80 backdrop-blur"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl">
                      <Icon name={bonus.icon as any} size={32} className="text-primary-foreground" />
                    </div>
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      {bonus.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{bonus.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg text-foreground/70">
                    {bonus.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-secondary text-secondary-foreground text-sm px-4 py-2">
              ❓ ЧАСТЫЕ ВОПРОСЫ
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black">Есть вопросы?</h2>
            <p className="text-xl text-foreground/70">
              Ответы на самые популярные вопросы о бонусах и регистрации
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 border-border rounded-xl px-6 bg-card/80 backdrop-blur hover:border-primary transition-colors"
              >
                <AccordionTrigger className="text-lg font-bold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="register" className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-primary/50 bg-card/90 backdrop-blur-xl shadow-2xl">
            <CardHeader className="text-center space-y-6 pb-8">
              <div className="flex justify-center">
                <Badge className="bg-accent text-accent-foreground text-lg px-6 py-3">
                  🚀 НАЧНИ ВЫИГРЫВАТЬ
                </Badge>
              </div>
              <CardTitle className="text-4xl md:text-6xl font-black">
                Регистрируйся и получай бонус!
              </CardTitle>
              <CardDescription className="text-xl text-foreground/70">
                Три простых шага до твоего первого выигрыша
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-4 p-6 rounded-xl bg-muted/50 hover-scale">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-3xl font-black">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Регистрация</h3>
                  <p className="text-foreground/70">Создай аккаунт по реф-ссылке</p>
                </div>
                <div className="text-center space-y-4 p-6 rounded-xl bg-muted/50 hover-scale">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-3xl font-black">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Депозит</h3>
                  <p className="text-foreground/70">Пополни счёт от 100 ₽</p>
                </div>
                <div className="text-center space-y-4 p-6 rounded-xl bg-muted/50 hover-scale">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-3xl font-black">
                    3
                  </div>
                  <h3 className="text-xl font-bold">Играй</h3>
                  <p className="text-foreground/70">Получи бонус и выигрывай</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  size="lg" 
                  className="flex-1 text-xl px-8 py-7 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 hover-scale font-bold"
                  onClick={() => window.open('https://www.youtube.com/watch?v=zCPyygJ-7E0&t=29s', '_blank')}
                >
                  <Icon name="ExternalLink" size={24} className="mr-2" />
                  1WIN - Регистрация
                </Button>
                <Button 
                  size="lg" 
                  className="flex-1 text-xl px-8 py-7 bg-gradient-to-r from-accent via-secondary to-primary hover:opacity-90 hover-scale font-bold"
                >
                  <Icon name="Gamepad2" size={24} className="mr-2" />
                  Mellstroy Games
                </Button>
              </div>
              <p className="text-center text-sm text-foreground/50">
                Играй ответственно. 18+
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border bg-muted/30">
        <div className="container mx-auto text-center space-y-4">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            🎮 WIN PROMO
          </h3>
          <p className="text-foreground/60">
            Лучшие бонусы и предложения от 1Win и Mellstroy Games
          </p>
          <p className="text-sm text-foreground/40">
            © 2024 Win Promo. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
import { useEffect, useState, useRef } from 'react';
import { 
  Code2, 
  Shield, 
  MessageSquare, 
  Bug, 
  ExternalLink,
  Zap,
  Terminal,
  Cpu,
  Globe,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Skill {
  name: string;
  percentage: number;
  icon: React.ReactNode;
  color: string;
  description: string;
}

const skills: Skill[] = [
  {
    name: 'Backend Development',
    percentage: 30,
    icon: <Code2 className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-400',
    description: 'Building robust server-side solutions and APIs'
  },
  {
    name: 'Penetration Testing',
    percentage: 40,
    icon: <Shield className="w-6 h-6" />,
    color: 'from-orange-500 to-red-400',
    description: 'Ethical hacking and security assessments'
  },
  {
    name: 'Discord Development',
    percentage: 90,
    icon: <MessageSquare className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-400',
    description: 'Creating powerful Discord bots and applications'
  },
  {
    name: 'Debugging',
    percentage: 50,
    icon: <Bug className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-400',
    description: 'Tracking down and fixing complex issues'
  }
];

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    [heroRef, aboutRef, skillsRef, experienceRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 grid-bg pointer-events-none" />
      
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        />
      ))}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div 
          className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300"
          style={{
            background: scrollY > 50 
              ? 'rgba(18, 18, 26, 0.9)' 
              : 'transparent',
            backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none',
            border: scrollY > 50 ? '1px solid rgba(59, 130, 246, 0.2)' : 'none'
          }}
        >
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-bold text-lg gradient-text">Blazebolt</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(aboutRef)}
              className="text-muted-foreground hover:text-foreground hover:bg-secondary"
            >
              About
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(skillsRef)}
              className="text-muted-foreground hover:text-foreground hover:bg-secondary"
            >
              Skills
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(experienceRef)}
              className="text-muted-foreground hover:text-foreground hover:bg-secondary"
            >
              Experience
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className="min-h-screen flex flex-col items-center justify-center relative px-6"
      >
        <div 
          className={`text-center transition-all duration-1000 ${
            visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Avatar/Logo */}
          <div className="relative mb-8 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent p-1 glow-blue">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <Zap className="w-16 h-16 text-primary" />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center border-4 border-background">
              <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
            </div>
          </div>

          {/* Name */}
          <h1 
            className="text-6xl md:text-8xl font-black mb-4 glitch"
            data-text="BLAZEBOLT"
          >
            <span className="gradient-text">BLAZEBOLT</span>
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 flex items-center justify-center gap-3 flex-wrap">
            <span className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-primary" />
              Developer
            </span>
            <span className="text-border">/</span>
            <span className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              Security Enthusiast
            </span>
            <span className="text-border">/</span>
            <span className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-indigo-400" />
              Discord Expert
            </span>
          </p>

          {/* Contact Buttons */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a 
              href="https://discord.com/users/1216084041309229080"
              target="_blank"
              rel="noopener noreferrer"
              className="discord-btn btn-shine inline-flex items-center gap-2 px-6 py-3 rounded-full text-white pulse-discord"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Contact Me</span>
            </a>
            <a 
              href="https://discord.gg/4mMA9J7spG"
              target="_blank"
              rel="noopener noreferrer"
              className="discord-btn btn-shine inline-flex items-center gap-2 px-6 py-3 rounded-full text-white pulse-discord"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Join Discord</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => scrollToSection(aboutRef)}
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={aboutRef}
        className="min-h-screen flex items-center justify-center py-20 px-6"
      >
        <div 
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
            visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Who is <span className="gradient-text">Blazebolt</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-hover bg-card rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">The Developer</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate developer with a focus on backend systems and Discord bot development. 
                I love creating efficient, scalable solutions that make a real impact. While I'm still 
                growing my skills in backend development, I bring creativity and dedication to every project.
              </p>
            </div>

            <div className="card-hover bg-card rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">Security Focus</h3>
              <p className="text-muted-foreground leading-relaxed">
                Security isn't just a skill—it's a mindset. I'm constantly learning about penetration 
                testing and ethical hacking to understand how systems can be protected. From identifying 
                vulnerabilities to implementing secure coding practices, I'm committed to building safe applications.
              </p>
            </div>

            <div className="card-hover bg-card rounded-2xl p-8 border border-border md:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Discord Community Expert</h3>
              <p className="text-muted-foreground leading-relaxed">
                My strongest skill lies in Discord development and community management. I've worked with 
                major servers like <strong className="text-foreground">DonutSMP</strong>, handling giveaways 
                and creating engaging bot experiences. I understand what makes a Discord community thrive 
                and how to build tools that enhance user engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={skillsRef}
        className="min-h-screen flex items-center justify-center py-20 px-6"
      >
        <div 
          className={`max-w-4xl mx-auto w-full transition-all duration-1000 delay-200 ${
            visibleSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">My Skills</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What I <span className="gradient-text">Bring</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Here's a breakdown of my current skill levels across different areas of development and security.
            </p>
          </div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="card-hover bg-card rounded-2xl p-6 border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center flex-shrink-0`}>
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold">{skill.name}</h3>
                      <span className="text-2xl font-black gradient-text">{skill.percentage}%</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} skill-bar-fill`}
                        style={{ 
                          width: `${skill.percentage}%`,
                          animationDelay: `${0.5 + index * 0.2}s`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        ref={experienceRef}
        className="min-h-screen flex items-center justify-center py-20 px-6"
      >
        <div 
          className={`max-w-4xl mx-auto w-full transition-all duration-1000 delay-200 ${
            visibleSections.has('experience') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
              <Terminal className="w-4 h-4 text-green-400" />
              <span className="text-sm text-muted-foreground">Experience</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Where I've <span className="gradient-text">Worked</span>
            </h2>
          </div>

          {/* DonutSMP Experience Card */}
          <div className="card-hover bg-card rounded-3xl p-8 md:p-12 border border-border relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white">
                  DS
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">DonutSMP's Giveaways</h3>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    Giveaways Manager & Discord Developer
                  </p>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <p className="text-lg leading-relaxed">
                  At <strong className="text-foreground">DonutSMP</strong>, one of the most popular 
                  Minecraft SMP communities, I managed and developed giveaway systems that engaged 
                  thousands of community members. This role allowed me to combine my Discord development 
                  skills with community management expertise.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary/50 rounded-xl p-4 border border-border">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-indigo-400" />
                      Discord Bot Development
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Created a custom bot: ticket, application, commands, etc.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-4 border border-border">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-accent" />
                      Event Management
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Organized and executed large-scale giveaway events with thousands of participants.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://discord.gg/4mMA9J7spG"
                target="_blank"
                rel="noopener noreferrer"
                className="discord-btn btn-shine inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-semibold text-lg"
              >
                <MessageSquare className="w-6 h-6" />
                <span>Join DonutSMP Discord</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Interested in working together?
            </p>
            <a
              href="https://discord.gg/4mMA9J7spG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Reach out on Discord</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-bold gradient-text">Blazebolt</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Built with passion and caffeine ⚡
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="https://discord.com/users/1216084041309229080"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-indigo-400 transition-colors"
              title="Message me on Discord"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <a 
              href="https://discord.gg/4mMA9J7spG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-pink-400 transition-colors"
              title="Join DonutSMP Discord"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

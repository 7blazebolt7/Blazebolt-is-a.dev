import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Users, 
  BarChart3, 
  Calendar, 
  CheckCircle2,
  ArrowLeft,
  Star,
  TrendingUp,
  Clock,
  Shield
} from "lucide-react";

const features = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "تتبع الإنجاز اليومي",
    description: "سجل حفظ ومراجعة الطلاب بكل سهولة في ثوانٍ معدودة",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "سجل الطالب الإلكتروني",
    description: "رابط خاص لكل طالب لعرض إنجازاته بدون تسجيل دخول",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "تقارير ذكية",
    description: "إحصائيات وتحليلات متقدمة لأداء الطلاب والحلقات",
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "تقويم دراسي آلي",
    description: "إنشاء التقويم الدراسي تلقائياً حسب مواعيد الحلقة",
  },
];

const testimonials = [
  {
    name: "أحمد المحمد",
    role: "مشرف حلقة الفرقان",
    content: "وفرت المنصة علينا ساعات من العمل اليدوي في متابعة الطلاب وإعداد التقارير",
    rating: 5,
  },
  {
    name: "خالد العمري",
    role: "معلم قرآن",
    content: "سهولة الاستخدام رائعة، أصبح تسجيل إنجاز الطلاب يتم في أقل من دقيقة",
    rating: 5,
  },
  {
    name: "سعد الشمري",
    role: "مشرف مجمع الأبرار",
    content: "الدعم الفني ممتاز والمنصة مستقرة، أنصح بها كل المشرفين",
    rating: 5,
  },
];

const stats = [
  { value: "500+", label: "حلقة قرآن" },
  { value: "15,000+", label: "طالب" },
  { value: "1M+", label: "سجل إنجاز" },
  { value: "99.9%", label: " uptime" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 text-white flex items-center justify-center shadow-lg shadow-primary-500/30">
                <BookOpen className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold text-slate-900">حلقتي</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">المميزات</Link>
              <Link href="#testimonials" className="text-slate-600 hover:text-slate-900 transition-colors">آراء العملاء</Link>
              <Link href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">الأسعار</Link>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button variant="ghost">تسجيل الدخول</Button>
              </Link>
              <Link href="/supervisor">
                <Button>جرب مجاناً</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-8">
              <Star className="h-4 w-4 fill-current" />
              <span>منصة موثوقة من 500+ حلقة قرآن</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
              إدارة حلقات القرآن
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                بذكاء وكفاءة
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              منصة رقمية متكاملة لمتابعة تقدم الطلاب وإدارة الحلقات القرآنية 
              بكل سهولة وفعالية
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/supervisor">
                <Button size="lg" className="gap-2">
                  ابدأ مجاناً
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="#demo">
                <Button size="lg" variant="secondary">
                  شاهد العرض التوضيحي
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              كل ما تحتاجه لإدارة حلقتك
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              أدوات متكاملة مصممة خصيصاً لتلبية احتياجات الحلقات القرآنية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100"
              >
                <div className="h-14 w-14 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              كيف تعمل المنصة؟
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "أنشئ حسابك",
                description: "سجل كمشرف وقم بإعداد حلقتك في دقائق معدودة",
                icon: <Shield className="h-6 w-6" />,
              },
              {
                step: "02",
                title: "أضف طلابك",
                description: "أدخل بيانات الطلاب والمعلمين وحدد الأهداف اليومية",
                icon: <Users className="h-6 w-6" />,
              },
              {
                step: "03",
                title: "ابدأ التتبع",
                description: "سجل الإنجاز اليومي وتابع تقدم الطلاب لحظياً",
                icon: <TrendingUp className="h-6 w-6" />,
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 h-full">
                  <div className="text-5xl font-bold text-primary-100 mb-4">{item.step}</div>
                  <div className="h-12 w-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ماذا يقول عملاؤنا؟
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ابدأ رحلتك في إدارة حلقتك الرقمية
          </h2>
          <p className="text-primary-100 text-lg mb-10">
            انضم إلى مئات الحلقات القرآنية التي تثق بنا في إدارة عملها
          </p>
          <Link href="/supervisor">
            <Button size="lg" className="bg-white text-primary-900 hover:bg-primary-50">
              ابدأ مجاناً الآن
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary-600 text-white flex items-center justify-center">
                  <BookOpen className="h-5 w-5" />
                </div>
                <span className="text-xl font-bold text-white">حلقتي</span>
              </div>
              <p className="text-sm leading-relaxed">
                منصة رقمية متكاملة لإدارة حلقات القرآن الكريم ومتابعة تقدم الطلاب
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">المنتج</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">المميزات</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">الأسعار</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">التحديثات</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">الدعم</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">مركز المساعدة</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">تواصل معنا</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">الشروط والأحكام</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">تواصل معنا</h4>
              <p className="text-sm mb-2">support@halaqati.com</p>
              <p className="text-sm">+966 50 000 0000</p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; 2024 حلقتي. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

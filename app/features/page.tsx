import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Zap, Users, Bot, BarChart3, MessageSquare, Phone } from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      icon: <Zap className="h-12 w-12 text-blue-600" />,
      title: "Real-time Lead Scoring",
      description:
        "Advanced AI algorithms analyze lead behavior, demographics, and engagement patterns to assign accurate scores instantly.",
      benefits: ["Behavioral tracking", "Demographic analysis", "Engagement scoring", "Predictive analytics"],
      cta: "Learn About Voice AI Agent",
      link: "https://salescentri.com/platforms/lead-management/voice-ai-agent",
    },
    {
      icon: <Users className="h-12 w-12 text-green-600" />,
      title: "Advanced Segmentation",
      description:
        "Automatically segment leads based on multiple criteria for targeted campaigns and personalized outreach.",
      benefits: ["Dynamic segmentation", "Custom criteria", "Automated tagging", "Behavioral grouping"],
      cta: "Use Our Chat Bot Tech",
      link: "https://salescentri.com/platforms/lead-management/chat-bot",
    },
    {
      icon: <Bot className="h-12 w-12 text-purple-600" />,
      title: "AI-Powered Automation",
      description:
        "Leverage artificial intelligence to automate lead nurturing, follow-ups, and qualification processes.",
      benefits: ["Smart workflows", "Automated responses", "Lead qualification", "Follow-up sequences"],
      cta: "Try WhatsApp Bot Integration",
      link: "https://salescentri.com/platforms/lead-management/whatsapp-bot",
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-orange-600" />,
      title: "Advanced Analytics",
      description:
        "Comprehensive reporting and analytics to track performance, identify trends, and optimize your sales process.",
      benefits: ["Performance metrics", "Conversion tracking", "ROI analysis", "Custom reports"],
      cta: "View Analytics Dashboard",
      link: "https://salescentri.com/solutions/use-case-navigator/recommendations",
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-indigo-600" />,
      title: "Multi-Channel Integration",
      description: "Connect with leads across email, social media, chat, and phone for comprehensive engagement.",
      benefits: ["Email integration", "Social media sync", "Chat platforms", "Phone systems"],
      cta: "Explore Integration Options",
      link: "https://salescentri.com/contact/partnerships/integration-requests",
    },
    {
      icon: <Phone className="h-12 w-12 text-red-600" />,
      title: "Voice AI Agent",
      description: "Deploy intelligent voice agents for lead qualification and initial customer interactions.",
      benefits: ["Natural conversations", "Lead qualification", "24/7 availability", "Call analytics"],
      cta: "See Voice AI in Action",
      link: "https://salescentri.com/platforms/lead-management/voice-ai-agent",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Features Overview</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for Modern Sales Teams
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our comprehensive iLMS platform transforms your lead management process with intelligent
              automation, advanced analytics, and seamless integrations.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Lead Scoring Walkthrough */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Interactive Lead Scoring Walkthrough</h2>
            <p className="text-xl text-gray-600">
              See how our AI-powered scoring system evaluates and prioritizes your leads in real-time.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Lead Scoring in Action</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-medium">Email Engagement</span>
                    </div>
                    <span className="text-green-600 font-bold">+25 points</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Website Visits</span>
                    </div>
                    <span className="text-blue-600 font-bold">+15 points</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-600" />
                      <span className="font-medium">Demo Request</span>
                    </div>
                    <span className="text-purple-600 font-bold">+40 points</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">Total Score</span>
                    <span className="text-2xl font-bold text-green-600">80/100</span>
                  </div>
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-green-600 h-3 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">HOT</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">High-Priority Lead</h4>
                <p className="text-gray-600 mb-4">This lead is ready for immediate sales contact</p>
                <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                  <a
                    href="https://salescentri.com/platforms/lead-management/lead-generation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See the Lead Generation Engine
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-2xl text-gray-900">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-lg">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-2">
                    {feature.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <a href={feature.link} target="_blank" rel="noopener noreferrer">
                      {feature.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Experience These Features?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            See how our iLMS platform can transform your lead management process with a personalized demo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                Book Your Demo Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-transparent"
            >
              <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                Start Your Free Trial
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

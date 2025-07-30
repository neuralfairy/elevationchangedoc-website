import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, MessageSquare, Phone, Smartphone, Users, Zap } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Real-time Lead Scoring",
      description:
        "Advanced algorithms analyze lead behavior and assign scores instantly, helping you prioritize high-value prospects.",
      cta: "Learn About Voice AI Agent",
      link: "https://salescentri.com/platforms/lead-management/voice-ai-agent",
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Advanced Segmentation",
      description:
        "Automatically segment leads based on demographics, behavior, and engagement patterns for targeted campaigns.",
      cta: "Use Our Chat Bot Tech",
      link: "https://salescentri.com/platforms/lead-management/chat-bot",
    },
    {
      icon: <Bot className="h-8 w-8 text-purple-600" />,
      title: "AI-Powered Automation",
      description:
        "Leverage artificial intelligence to automate lead nurturing, follow-ups, and qualification processes.",
      cta: "Try WhatsApp Bot Integration",
      link: "https://salescentri.com/platforms/lead-management/whatsapp-bot",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-orange-600" />,
      title: "Multi-Channel Integration",
      description: "Connect with leads across email, social media, chat, and phone for comprehensive engagement.",
      cta: "Explore Integration Options",
      link: "https://salescentri.com/contact/partnerships/integration-requests",
    },
    {
      icon: <Phone className="h-8 w-8 text-red-600" />,
      title: "Voice AI Agent",
      description: "Deploy intelligent voice agents for lead qualification and initial customer interactions.",
      cta: "See Voice AI in Action",
      link: "https://salescentri.com/platforms/lead-management/voice-ai-agent",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-indigo-600" />,
      title: "Mobile-First Design",
      description: "Access your lead management system anywhere with our responsive mobile interface.",
      cta: "View Mobile Features",
      link: "https://salescentri.com/solutions/use-case-navigator",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Sales Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to capture, score, nurture, and convert leads into customers with our comprehensive iLMS
            platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  asChild
                  className="w-full text-black border-gray-300 hover:bg-gray-50 bg-transparent"
                >
                  <a href={feature.link} target="_blank" rel="noopener noreferrer">
                    {feature.cta}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white">
            <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
              Start Your Free Trial
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

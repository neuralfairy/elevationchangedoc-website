import { Button } from "@/components/ui/button"
import { ArrowDown, Filter, Target, TrendingUp } from "lucide-react"

export function LeadFunnel() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Intelligent Lead Management Pipeline</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how our iLMS transforms raw prospects into qualified opportunities with automated scoring and
            intelligent routing.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Lead Capture</h3>
            <p className="text-gray-600">Automatically capture leads from multiple channels and sources</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Scoring</h3>
            <p className="text-gray-600">AI-powered scoring based on behavior, demographics, and engagement</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowDown className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Auto-Routing</h3>
            <p className="text-gray-600">Intelligent assignment to the right sales rep at the right time</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Conversion</h3>
            <p className="text-gray-600">Track and optimize conversion rates with detailed analytics</p>
          </div>
        </div>

        <div className="text-center space-y-4">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white mr-4">
            <a
              href="https://salescentri.com/platforms/lead-management/lead-generation"
              target="_blank"
              rel="noopener noreferrer"
            >
              See the Lead Generation Engine
            </a>
          </Button>
          <Button variant="outline" asChild className="text-black border-gray-300 hover:bg-gray-50 bg-transparent">
            <a
              href="https://salescentri.com/contact/support-request/live-chat"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with a Consultant
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

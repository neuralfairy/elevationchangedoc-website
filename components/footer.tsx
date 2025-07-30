import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">Elevationchangedoc</h3>
            <p className="text-gray-400">
              Intelligent lead management solutions for modern sales teams. Based in Austin, Texas.
            </p>
            <div className="space-y-2">
              <Button
                variant="outline"
                asChild
                className="text-white border-gray-600 hover:bg-gray-800 w-full bg-transparent"
              >
                <a href="https://salescentri.com/contact/sales-inquiry" target="_blank" rel="noopener noreferrer">
                  Contact Our Sales Team
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="https://salescentri.com/platforms/lead-management/lead-generation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Lead Generation
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/platforms/lead-management/voice-ai-agent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Voice AI Agent
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/platforms/lead-management/chat-bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Chat Bot Technology
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/solutions/psa-suite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  PSA Suite
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="https://salescentri.com/resources/tutorials-webinars"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Tutorials & Webinars
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/resources/case-studies/psa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/resources/whitepapers-ebooks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Whitepapers & eBooks
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/docs/api-reference"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="https://salescentri.com/company/about-us/leadership-team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Leadership Team
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/company/team-advisors/career-openings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Career Openings
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/contact/support-request/submit-ticket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/get-started/calendly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Schedule Meeting
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">© 2024 Elevationchangedoc Solutions. All rights reserved.</div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <a
                href="https://salescentri.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Powered by Sales Intelligence Platform
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

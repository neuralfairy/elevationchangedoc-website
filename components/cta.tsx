import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Transform Your Sales Process?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of sales teams who have accelerated their growth with our intelligent lead management system.
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
            <a href="https://salescentri.com/pricing/free-trial" target="_blank" rel="noopener noreferrer">
              View Free Trial Options
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

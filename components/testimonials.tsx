import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "VP of Sales, TechCorp",
      content:
        "Elevationchangedoc's iLMS increased our lead conversion rate by 45% in just three months. The AI scoring is incredibly accurate.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      title: "Sales Director, StartupXYZ",
      content:
        "The automation features saved our team 20 hours per week. We can now focus on closing deals instead of manual lead management.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      title: "Marketing Manager, Enterprise Co.",
      content:
        "The integration capabilities are outstanding. We connected all our marketing channels seamlessly and saw immediate results.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Trusted by Sales Teams Worldwide</h2>
          <p className="text-xl text-gray-600">
            See what our customers are saying about their success with our iLMS platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border border-gray-200">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

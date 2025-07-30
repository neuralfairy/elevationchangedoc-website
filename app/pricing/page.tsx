"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started with lead management",
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        "Up to 1,000 leads per month",
        "Basic lead scoring",
        "Email integration",
        "Standard support",
        "Basic analytics",
        "Mobile app access",
      ],
      cta: "Start Free Trial",
      link: "https://salescentri.com/pricing/free-trial",
      popular: false,
    },
    {
      name: "Professional",
      description: "Advanced features for growing sales teams",
      monthlyPrice: 149,
      annualPrice: 119,
      features: [
        "Up to 10,000 leads per month",
        "Advanced AI lead scoring",
        "Multi-channel integration",
        "Priority support",
        "Advanced analytics & reporting",
        "Voice AI agent",
        "WhatsApp bot integration",
        "Custom workflows",
      ],
      cta: "Start Free Trial",
      link: "https://salescentri.com/pricing/free-trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations",
      monthlyPrice: null,
      annualPrice: null,
      features: [
        "Unlimited leads",
        "Custom AI model training",
        "Full API access",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security features",
        "SLA guarantees",
        "On-premise deployment options",
      ],
      cta: "Contact Sales",
      link: "https://salescentri.com/pricing/enterprise-custom",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Pricing Plans</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Choose the Perfect Plan for Your Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Flexible pricing options designed to scale with your business. Start with a free trial and upgrade as you
              grow.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-lg ${!isAnnual ? "text-gray-900 font-semibold" : "text-gray-500"}`}>Monthly</span>
              <Switch checked={isAnnual} onCheckedChange={setIsAnnual} className="data-[state=checked]:bg-blue-600" />
              <span className={`text-lg ${isAnnual ? "text-gray-900 font-semibold" : "text-gray-500"}`}>Annual</span>
              {isAnnual && <Badge className="bg-green-100 text-green-800 ml-2">Save 20%</Badge>}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-2 ${plan.popular ? "border-blue-600 shadow-xl" : "border-gray-200"} hover:shadow-lg transition-shadow duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl text-gray-900">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 mt-2">{plan.description}</CardDescription>

                  <div className="mt-6">
                    {plan.monthlyPrice ? (
                      <div className="space-y-2">
                        <div className="text-4xl font-bold text-gray-900">
                          ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                          <span className="text-lg font-normal text-gray-600">/month</span>
                        </div>
                        {isAnnual && (
                          <div className="text-sm text-gray-500">Billed annually (${plan.annualPrice * 12}/year)</div>
                        )}
                      </div>
                    ) : (
                      <div className="text-4xl font-bold text-gray-900">Custom</div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-900 hover:bg-gray-800 text-white"}`}
                  >
                    <a href={plan.link} target="_blank" rel="noopener noreferrer">
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional CTAs */}
          <div className="text-center mt-16 space-y-4">
            <p className="text-gray-600">Need help choosing the right plan?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild className="text-black border-gray-300 hover:bg-gray-50 bg-transparent">
                <a href="https://salescentri.com/pricing/free-trial" target="_blank" rel="noopener noreferrer">
                  View Free Trial Options
                </a>
              </Button>
              <Button variant="outline" asChild className="text-black border-gray-300 hover:bg-gray-50 bg-transparent">
                <a href="https://salescentri.com/pricing/enterprise-custom" target="_blank" rel="noopener noreferrer">
                  Explore Enterprise Pricing
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our pricing and plans.</p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I change plans at any time?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll
                prorate any billing adjustments.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a free trial available?</h3>
              <p className="text-gray-600">
                Yes, we offer a 14-day free trial for all plans. No credit card required to get started.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and can arrange invoicing for Enterprise customers.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer discounts for nonprofits or educational institutions?
              </h3>
              <p className="text-gray-600">
                Yes, we offer special pricing for qualified nonprofits and educational institutions. Contact our sales
                team for more information.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href="https://salescentri.com/contact/support-request" target="_blank" rel="noopener noreferrer">
                Still Have Questions?
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

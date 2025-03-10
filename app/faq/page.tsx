"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// FAQ data organized by categories
const faqData = [
  {
    category: "Product Information",
    questions: [
      {
        question: "What types of wigs do you offer?",
        answer:
          "We offer a wide variety of wigs including human hair wigs, synthetic wigs, lace front wigs, full lace wigs, 360 lace wigs, and more. Our collection includes different lengths, colors, textures, and styles to suit every preference.",
      },
      {
        question: "What's the difference between human hair and synthetic wigs?",
        answer:
          "Human hair wigs are made from real human hair, offering the most natural look and feel. They can be styled, colored, and treated like your own hair. Synthetic wigs are made from artificial fibers, are generally more affordable, require less maintenance, and hold their style even after washing.",
      },
      {
        question: "How long do your wigs last?",
        answer:
          "The lifespan of a wig depends on the type and how well it's maintained. Human hair wigs typically last 1-3 years with proper care, while synthetic wigs usually last 4-6 months with regular wear. With careful maintenance and occasional wear, both types can last significantly longer.",
      },
      {
        question: "What is a lace front wig?",
        answer:
          "A lace front wig has a sheer lace panel along the front hairline where individual hairs are hand-tied. This creates the illusion of a natural hairline and allows for styling hair away from the face. The rest of the wig may have a more traditional cap construction.",
      },
      {
        question: "Can I style the wigs?",
        answer:
          "Human hair wigs can be styled using heat tools, colored, and treated much like your natural hair. Synthetic wigs generally come pre-styled and maintain their style after washing, though some heat-friendly synthetic wigs can withstand low-temperature styling tools.",
      },
    ],
  },
  {
    category: "Sizing & Fit",
    questions: [
      {
        question: "How do I determine my wig size?",
        answer:
          "To find your wig size, measure the circumference of your head from the front hairline, behind the ear, to the nape of the neck, and back to the starting point. Most of our wigs come with adjustable straps to fit head circumferences between 21.5-22.5 inches, which fits most adults.",
      },
      {
        question: "Do your wigs fit all head sizes?",
        answer:
          "Most of our wigs come with adjustable straps and elastic bands that can accommodate head sizes from 21.5 to 22.5 inches in circumference, which fits about 95% of customers. We also offer petite and large cap sizes for select styles.",
      },
      {
        question: "How do I make sure my wig stays secure?",
        answer:
          "Our wigs come with adjustable straps, combs, and in some cases, adhesive tape or glue can be used for extra security. For active lifestyles, we recommend wig grips or caps underneath for additional hold.",
      },
      {
        question: "Can I wear a wig if I have hair?",
        answer:
          "Many of our customers have their own hair. You can wear a wig cap to flatten and protect your natural hair. For longer hair, you can braid it or wrap it around your head before putting on the wig cap.",
      },
    ],
  },
  {
    category: "Ordering & Shipping",
    questions: [
      {
        question: "How do I place an order?",
        answer:
          "You can place an order directly through our website by selecting the wig you want, choosing any customization options, and proceeding to checkout. If you need assistance, our customer service team is available via chat, email, or phone.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Shop Pay, and Apple Pay. All transactions are securely processed and your payment information is never stored on our servers.",
      },
      {
        question: "How long will it take to receive my order?",
        answer:
          "Standard shipping typically takes 3-5 business days within the continental US. Express shipping options are available at checkout. International shipping times vary by location, generally taking 7-14 business days. Custom orders may require additional processing time.",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. Import duties and taxes may apply and are the responsibility of the customer.",
      },
      {
        question: "Can I track my order?",
        answer:
          "Yes, once your order ships, you'll receive a confirmation email with tracking information. You can also track your order by logging into your account on our website or contacting our customer service team.",
      },
    ],
  },
  {
    category: "Returns & Exchanges",
    questions: [
      {
        question: "What is your return policy?",
        answer:
          "We offer a 30-day return policy for unworn, unaltered wigs in their original packaging. Custom-made wigs, sale items, and accessories like wig caps and adhesives are final sale for hygiene reasons.",
      },
      {
        question: "How do I initiate a return or exchange?",
        answer:
          "To initiate a return or exchange, please contact our customer service team through email or phone. They will guide you through the process and provide a return authorization number and shipping address.",
      },
      {
        question: "Will I get a full refund?",
        answer:
          "Approved returns will be refunded to the original payment method, minus shipping costs. If the item was received as defective or incorrect, we will also refund the original shipping cost and provide a prepaid return label.",
      },
      {
        question: "Can I exchange my wig for a different style or color?",
        answer:
          "Yes, you can exchange your wig for a different style or color within 30 days of purchase, provided it's unworn and unaltered. If the new item has a different price, you'll either be charged the difference or refunded the balance.",
      },
    ],
  },
  {
    category: "Wig Care & Maintenance",
    questions: [
      {
        question: "How do I wash my wig?",
        answer:
          "For human hair wigs: Use a sulfate-free shampoo and conditioner specifically designed for wigs. Gently wash in cool water, rinse thoroughly, and air dry on a wig stand. For synthetic wigs: Use cool water and synthetic wig shampoo, rinse well, and air dry. Never use regular hair products as they can damage the fibers.",
      },
      {
        question: "How often should I wash my wig?",
        answer:
          "For daily wear, wash human hair wigs every 7-10 wears or when product buildup is noticeable. Synthetic wigs can be washed every 15-20 wears. If you use styling products or experience excessive sweating, you may need to wash more frequently.",
      },
      {
        question: "How should I store my wig when not wearing it?",
        answer:
          "Always store your wig on a wig stand or mannequin head to maintain its shape. Keep it away from direct sunlight, heat, and humidity. For travel, use a wig box or case to protect it from being crushed or damaged.",
      },
      {
        question: "Can I sleep in my wig?",
        answer:
          "We don't recommend sleeping in your wig as it can cause tangling, matting, and premature wear. If you must sleep in your wig, wrap it in a silk or satin scarf to minimize friction and damage.",
      },
      {
        question: "How do I detangle my wig?",
        answer:
          "For both human hair and synthetic wigs, use a wide-tooth comb or wig brush starting from the ends and working your way up. For stubborn tangles, use a detangling spray designed for wigs. Never brush a synthetic wig when wet as it can stretch and damage the fibers.",
      },
    ],
  },
  {
    category: "Custom Orders & Styling Services",
    questions: [
      {
        question: "Do you offer custom wig services?",
        answer:
          "Yes, we offer custom wig services including custom colors, cuts, and styles. We can also create fully custom wigs based on your specifications. Please contact our customer service team for more information and pricing.",
      },
      {
        question: "Can you color or cut my wig for me?",
        answer:
          "Yes, our professional stylists can color or cut your human hair wig to your specifications. These services are available for an additional fee. Please note that we cannot color synthetic wigs, though we can cut them.",
      },
      {
        question: "How long does a custom order take?",
        answer:
          "Custom orders typically take 2-4 weeks to complete, depending on the complexity of the request and our current workload. Rush services may be available for an additional fee.",
      },
      {
        question: "Can I send in my own hair to be made into a wig?",
        answer:
          "Yes, we can create a custom wig using your own hair or a combination of your hair and matching donor hair. Please contact us for specific requirements and pricing for this specialized service.",
      },
    ],
  },
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])

  // Filter questions based on search query
  const filteredFAQs = faqData
    .map((category) => {
      const filteredQuestions = category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      return {
        ...category,
        questions: filteredQuestions,
      }
    })
    .filter((category) => category.questions.length > 0)

  // Toggle category expansion when search is active
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)

    if (query) {
      // Expand all categories with matching questions
      setExpandedCategories(filteredFAQs.map((category) => category.category))
    } else {
      // Collapse all when search is cleared
      setExpandedCategories([])
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>

      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-5 w-5 text-muted-foreground" />
        </div>
        <Input
          type="search"
          placeholder="Search for questions..."
          className="pl-10"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {filteredFAQs.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-lg text-muted-foreground">No questions found matching your search.</p>
          <button onClick={() => setSearchQuery("")} className="mt-4 text-primary hover:underline">
            Clear search
          </button>
        </div>
      ) : (
        filteredFAQs.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
            <Accordion
              type="multiple"
              className="border rounded-lg"
              value={expandedCategories}
              onValueChange={setExpandedCategories}
            >
              {category.questions.map((item, itemIndex) => (
                <AccordionItem key={itemIndex} value={`${category.category}-${itemIndex}`}>
                  <AccordionTrigger className="px-4 hover:no-underline">
                    <span className="text-left">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <p className="text-muted-foreground">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))
      )}

      <div className="mt-12 p-6 bg-muted rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
        <p className="mb-4">Our customer service team is here to help! Contact us through any of these methods:</p>
        <div className="space-y-2">
          <p>
            <strong>Email:</strong> support@wigwebsite.com
          </p>
          <p>
            <strong>Phone:</strong> (555) 123-4567
          </p>
          <p>
            <strong>Hours:</strong> Monday-Friday, 9am-5pm EST
          </p>
        </div>
      </div>
    </div>
  )
}



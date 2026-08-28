export type Project = {
  slug: string
  title: string
  category: string
  description: string
  images: string[]
  technologies: string[]
  duration: string
  team: string
  industry: string
  overview: string
  challenge: string
  solution: string
  results: { metric: string; label: string }[]
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A full-featured e-commerce platform with real-time inventory management and AI-powered recommendations.",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800&h=600&fit=crop",
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "TensorFlow"],
    overview:
      "A comprehensive e-commerce solution built for scale, enabling businesses to manage products, orders, and customers from a single dashboard. The platform integrates AI-powered product recommendations that increased average order value by 28%.",
    challenge:
      "The client needed a platform that could handle 50,000+ SKUs, peak traffic of 10,000 concurrent users, and integrate with multiple third-party logistics providers — all within a 4-month timeline.",
    solution:
      "We architected a microservices-based Next.js frontend with a Node.js API layer, leveraging MongoDB's flexible schema for product variants. A custom TensorFlow recommendation engine was trained on historical purchase data.",
    results: [
      { metric: "28%", label: "Increase in Average Order Value" },
      { metric: "99.9%", label: "Uptime During Peak Sales" },
      { metric: "2.1s", label: "Average Page Load Time" },
      { metric: "40%", label: "Reduction in Cart Abandonment" },
    ],
    duration: "4 months",
    team: "6 engineers",
    industry: "Retail",
    featured: true,
  },
  {
    slug: "healthcare-management-system",
    title: "Healthcare Management System",
    category: "Enterprise Software",
    description:
      "Comprehensive healthcare management solution with electronic health records and telemedicine capabilities.",
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=600&fit=crop",
    ],
    technologies: ["React", "Java Spring", "PostgreSQL", "WebRTC"],
    overview:
      "An end-to-end healthcare management platform serving 120+ clinics. The system unifies patient records, appointment scheduling, telemedicine consultations, and billing into a HIPAA-compliant solution.",
    challenge:
      "Legacy siloed systems meant doctors spent 35% of their time on administrative tasks. The client needed a unified platform that was HIPAA-compliant and could be rolled out without disrupting ongoing patient care.",
    solution:
      "We built a React-based SPA with real-time WebRTC video consultations, backed by a Java Spring microservices architecture. PostgreSQL with row-level security handles sensitive patient data with full audit logging.",
    results: [
      { metric: "35%", label: "Reduction in Admin Time" },
      { metric: "120+", label: "Clinics Onboarded" },
      { metric: "4.8★", label: "Patient Satisfaction Score" },
      { metric: "60%", label: "Faster Appointment Booking" },
    ],
    duration: "6 months",
    team: "8 engineers",
    industry: "Healthcare",
    featured: true,
  },
  {
    slug: "fintech-mobile-app",
    title: "FinTech Mobile App",
    category: "Mobile Development",
    description: "Cross-platform mobile application for personal finance management with AI-driven insights.",
    images: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=600&fit=crop",
    ],
    technologies: ["React Native", "Python", "TensorFlow", "AWS"],
    overview:
      "A cross-platform personal finance app with over 200,000 downloads in its first year. The AI engine categorizes transactions, forecasts spending, and surfaces personalized saving opportunities in real time.",
    challenge:
      "Users were overwhelmed by raw transaction data and struggling to form meaningful savings habits. The product needed to work across iOS and Android while connecting securely to 3,000+ bank institutions.",
    solution:
      "A React Native app with a Python/TensorFlow backend processes transactions via Plaid APIs. The ML model was trained on anonymized spending data to deliver actionable weekly insights per user.",
    results: [
      { metric: "200K+", label: "Downloads in Year One" },
      { metric: "4.7★", label: "App Store Rating" },
      { metric: "22%", label: "Average User Savings Increase" },
      { metric: "3,000+", label: "Bank Integrations" },
    ],
    duration: "5 months",
    team: "5 engineers",
    industry: "FinTech",
    featured: true,
  },
]

export const mockData = {
  company: {
    name: "AKJ BUILDERS",
    tagline: "Defining New Heights in Modern Construction",
    phone: "+1 234 567 8900",
    whatsapp: "+1234567890",
    email: "info@akjbuilders.com",
    address: "123 Construction Ave, Builder's District, NY 10001"
  },
  
  projects: [
    {
      id: 1,
      title: "Skyline Residences",
      location: "Manhattan, NY",
      type: "Residential",
      status: "Completed",
      sqft: "250,000",
      units: 45,
      floors: 28,
      images: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"
      ],
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      description: "Luxury high-rise residential complex featuring modern architecture and premium amenities in the heart of Manhattan.",
      longDescription: "Skyline Residences represents the pinnacle of urban luxury living. This 28-story architectural masterpiece combines cutting-edge design with unparalleled comfort. Each residence features floor-to-ceiling windows, premium finishes, and smart home technology. The building offers world-class amenities including a rooftop infinity pool, state-of-the-art fitness center, and 24/7 concierge services.",
      amenities: ["Swimming Pool", "Gym", "Rooftop Garden", "Parking", "Security", "Concierge", "Smart Home Tech", "Sky Lounge"],
      specifications: {
        architect: "Sterling Architecture Group",
        contractor: "AKJ Builders",
        startDate: "January 2022",
        completionDate: "December 2023",
        investment: "$125 Million",
        sustainability: "LEED Gold Certified"
      }
    },
    {
      id: 2,
      title: "Corporate Plaza",
      location: "Downtown, NY",
      type: "Commercial",
      status: "Under Construction", 
      sqft: "180,000",
      floors: 12,
      images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-4c688155d5a6?w=800&h=600&fit=crop"
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      description: "State-of-the-art commercial complex with sustainable design principles and modern office spaces.",
      longDescription: "Corporate Plaza is designed to be the premier business destination in downtown NY. This innovative commercial complex features flexible office spaces, retail outlets, and dining options. The building incorporates sustainable technologies and provides a collaborative environment for modern businesses.",
      amenities: ["Conference Rooms", "Food Court", "Parking", "Green Building", "High-Speed Internet", "Executive Lounges"],
      specifications: {
        architect: "ProBuild Engineering",
        contractor: "AKJ Builders",
        startDate: "June 2023",
        expectedCompletion: "August 2025",
        investment: "$95 Million",
        sustainability: "LEED Platinum Target"
      }
    },
    {
      id: 3,
      title: "Riverside Villas",
      location: "Brooklyn, NY",
      type: "Residential",
      status: "Planning",
      sqft: "120,000",
      units: 24,
      images: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop"
      ],
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      description: "Premium riverside villas with panoramic water views and modern facilities for luxury living.",
      longDescription: "Riverside Villas offers an exclusive collection of luxury waterfront homes with direct river access. Each villa is meticulously designed to maximize water views while providing privacy and tranquility. The community features private docks, landscaped gardens, and recreational facilities.",
      amenities: ["Private Dock", "Garden", "Clubhouse", "Security", "Waterfront Access", "Tennis Court"],
      specifications: {
        architect: "Sterling Architecture Group",
        contractor: "AKJ Builders",
        startDate: "Planning Phase",
        expectedCompletion: "2026",
        investment: "$85 Million",
        sustainability: "Green Building Certified"
      }
    }
  ],

  stats: {
    yearsInIndustry: 15,
    sqftBuilt: "2.5M",
    awardsWon: 12,
    activeSites: 8
  },

  consulties: [
    {
      id: 1,
      name: "Sterling Architecture Group",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      description: "Leading architectural firm specializing in sustainable design and urban planning.",
      projects: ["Skyline Residences", "Green Valley Complex"],
      established: "2010"
    },
    {
      id: 2,
      name: "ProBuild Engineering",
      logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=100&fit=crop",
      description: "Expert structural engineering consultancy with 20+ years of experience.",
      projects: ["Corporate Plaza", "Metro Station Hub"],
      established: "2005"
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Property Developer",
      company: "Johnson Realty",
      rating: 5,
      review: "AKJ Builders exceeded our expectations with their attention to detail and timely delivery. The quality of construction is unmatched.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c6bd5c79?w=150&h=150&fit=crop"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO",
      company: "TechCorp Solutions",
      rating: 5,
      review: "Professional team, innovative designs, and exceptional project management. Our corporate headquarters turned out exactly as envisioned.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Homeowner",
      company: "Riverside Villas",
      rating: 5,
      review: "Living in our AKJ-built home has been a dream. The craftsmanship and modern amenities make it perfect for our family.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    }
  ],

  gallery: [
    {
      id: 1,
      title: "Modern Architecture",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      category: "exterior"
    },
    {
      id: 2,
      title: "Interior Design",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      category: "interior"
    },
    {
      id: 3,
      title: "Construction Progress",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
      category: "construction"
    },
    {
      id: 4,
      title: "Skyline View",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      category: "exterior"
    },
    {
      id: 5,
      title: "Luxury Amenities",
      image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&h=600&fit=crop",
      category: "amenities"
    },
    {
      id: 6,
      title: "Sustainable Design",
      image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=600&fit=crop",
      category: "exterior"
    }
  ],

  blogPosts: [
    {
      id: 1,
      title: "Sustainable Building Practices in Modern Construction",
      date: "2024-07-15",
      author: "AKJ Team",
      excerpt: "Exploring how sustainable materials and energy-efficient designs are shaping the future of construction.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=250&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Art of Modern Architectural Design",
      date: "2024-07-10",
      author: "Design Team",
      excerpt: "How contemporary architecture balances functionality with aesthetic appeal in urban environments.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=250&fit=crop",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Smart Home Integration in New Construction",
      date: "2024-07-05",
      author: "Tech Team",
      excerpt: "Incorporating cutting-edge technology into residential projects for enhanced living experiences.",
      image: "https://images.unsplash.com/photo-1558618666-4c688155d5a6?w=400&h=250&fit=crop",
      readTime: "6 min read"
    }
  ]
};
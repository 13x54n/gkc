"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import GKC from "@/assets/gkc.png"
import AOS from "aos"
import "aos/dist/aos.css"

import {
  Home,
  Building2,
  Users,
  Phone,
  Mail,
  MapPin,
  Star,
} from "lucide-react"
import LatestListings from "@/components/latest-listings"
import ContactForm from "@/components/contact-form"
import { useEffect } from "react"

export default function RealEstatePortfolio() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 100,
    })

    // Refresh AOS on window resize
    window.addEventListener("resize", () => {
      AOS.refresh()
    })

    return () => {
      window.removeEventListener("resize", () => {
        AOS.refresh()
      })
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Everest Realty Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold">Govinda Khatri</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            {/* <Link href="#listings" className="text-sm font-medium hover:text-primary">
              Listings
            </Link> */}
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <a href="tel:+14165544296">
            <Button size="sm" className="bg-black text-white">
              <Phone className=" h-4 w-4" /> Call Now
            </Button>
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        {/* <section className="relative">
          <div className="absolute inset-0 z-0">
            <ImageWithLoading
              src="/placeholder.svg?height=800&width=1920"
              alt="Luxury home exterior"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-xl space-y-5">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Find Your Dream Home
              </h1>
              <p className="text-xl text-white/90">
                Dedicated real estate professional with over 10 years of experience helping clients buy and sell
                properties.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="font-medium">
                  View Listings
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 text-white border-white/20 backdrop-blur-sm hover:bg-white/20"
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </section> */}

        {/* About Section */}
        <section id="about" className="py-12 md:py-20 border-b relative overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <Image src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80" alt="" fill className="object-cover opacity-90" priority />
            <div className="absolute inset-0 bg-black/83" />
          </div>

          <div className="container relative z-10">
            <div className="grid md:grid-cols-2 gap-5 items-center">
              <div className="relative aspect-square w-full max-w-md mx-auto">
                <Image
                  src={GKC}
                  alt="Real estate agent portrait"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-6 text-white">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">Govinda Khatri</h2>
                <p className="text-lg text-gray-300">
                  With over a decade of experience in the real estate market, I've helped hundreds of clients find their
                  perfect homes, sell, and investment properties.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <Building2 className="h-4 w-4 text-primary" />
                    </div>
                    <span>Sold over 500 properties</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <span>Helped 300+ families find their dream home</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <Star className="h-4 w-4 text-primary" />
                    </div>
                    <span>Top 1% of agents in the region</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span>Mobile: (416) 554-4296</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span>Tel: (905) 956-4449</span>
                  </li>
                  <li>
                    <a href="tel:+14165544296">
                      <Button size="sm" className="bg-white text-black mt-4">
                        <Phone className=" h-4 w-4" /> Call Now
                      </Button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Listings */}
        {/* <section id="listings" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Listings</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Browse through my exclusive selection of premium properties currently available on the market.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

              <Card className="group overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <ImageWithLoading
                    src="/placeholder.svg?height=400&width=600"
                    alt="Modern luxury home"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 text-xs font-medium rounded">
                    For Sale
                  </div>
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 text-xs font-medium rounded">
                    $1,250,000
                  </div>
                </div>
                <CardContent className="p-5 space-y-3">
                  <h3 className="font-semibold text-xl">Modern Luxury Villa</h3>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">Beverly Hills, CA</span>
                  </div>
                  <div className="flex justify-between text-sm pt-2">
                    <div className="flex items-center gap-1">
                      <span className="font-medium">4</span> Beds
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">3.5</span> Baths
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">3,500</span> Sq Ft
                    </div>
                  </div>
                  <Button className="w-full mt-4">View Details</Button>
                </CardContent>
              </Card>


              <Card className="group overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <ImageWithLoading
                    src="/placeholder.svg?height=400&width=600"
                    alt="Waterfront property"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 text-xs font-medium rounded">
                    For Sale
                  </div>
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 text-xs font-medium rounded">
                    $2,750,000
                  </div>
                </div>
                <CardContent className="p-5 space-y-3">
                  <h3 className="font-semibold text-xl">Waterfront Estate</h3>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">Malibu, CA</span>
                  </div>
                  <div className="flex justify-between text-sm pt-2">
                    <div className="flex items-center gap-1">
                      <span className="font-medium">5</span> Beds
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">4.5</span> Baths
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">4,200</span> Sq Ft
                    </div>
                  </div>
                  <Button className="w-full mt-4">View Details</Button>
                </CardContent>
              </Card>


              <Card className="group overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <ImageWithLoading
                    src="/placeholder.svg?height=400&width=600"
                    alt="Downtown penthouse"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 text-xs font-medium rounded">
                    For Sale
                  </div>
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 text-xs font-medium rounded">
                    $3,500,000
                  </div>
                </div>
                <CardContent className="p-5 space-y-3">
                  <h3 className="font-semibold text-xl">Downtown Penthouse</h3>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">Los Angeles, CA</span>
                  </div>
                  <div className="flex justify-between text-sm pt-2">
                    <div className="flex items-center gap-1">
                      <span className="font-medium">3</span> Beds
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">3</span> Baths
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">2,800</span> Sq Ft
                    </div>
                  </div>
                  <Button className="w-full mt-4">View Details</Button>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                View All Listings <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section> */}

        <LatestListings />

        {/* Testimonials */}
        <section id="testimonials" className="py-12 md:py-15 md:pb-20 bg-muted/50 border-b">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">Client Testimonials</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto" data-aos="fade-up">
                Hear what my clients have to say about their experience working with me.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <Card className="p-6" data-aos="fade-up">
                <div className="flex items-center gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-primary text-primary fill-amber-300 text-amber-300" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-2">
                  "Govinda was incredible throughout our entire home buying process. His knowledge of the local market
                  helped us find the perfect home in our desired neighborhood."
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1629888401525-0d11ff26881f?q=80&w=100&h=100"
                      alt="Client"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Michael & Jennifer</h4>
                    <p className="text-sm text-muted-foreground">First-time homebuyers</p>
                  </div>
                </div>
              </Card>

              {/* Testimonial 2 */}
              <Card className="p-6" data-aos="fade-up">
                <div className="flex items-center gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-primary text-primary fill-amber-300 text-amber-300" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-2">
                  "We were selling our family home of 25 years and Govinda made the process smooth and stress-free. He
                  got us multiple offers above asking price!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1528164907495-0c9a3bf6af37?q=80&w=100"
                      alt="Client"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Robert & Susan</h4>
                    <p className="text-sm text-muted-foreground">Home sellers</p>
                  </div>
                </div>
              </Card>

              {/* Testimonial 3 */}
              <Card className="p-6" data-aos="fade-up">
                <div className="flex items-center gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-primary text-primary fill-amber-300 text-amber-300" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-2">
                  "As an investor, I needed an agent who understood ROI and market trends. Govinda's expertise in
                  investment properties has been invaluable to growing my portfolio."
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?q=80&w=100"
                      alt="Client"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">David Chen</h4>
                    <p className="text-sm text-muted-foreground">Property investor</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24 border-b">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">My Services</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto" data-aos="fade-up">
                Comprehensive real estate services tailored to meet your specific needs.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <Card className="p-6 gap-2" data-aos="fade-up">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Residential Sales</h3>
                <p className="text-muted-foreground">
                  Expert guidance through the entire process of buying or selling your home, from initial consultation
                  to closing.
                </p>
              </Card>

              {/* Service 2 */}
              <Card className="p-6 gap-2" data-aos="fade-up">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Investment Properties</h3>
                <p className="text-muted-foreground">
                  Strategic advice on property investments, market analysis, and portfolio management for maximum
                  returns.
                </p>
              </Card>

              {/* Service 3 */}
              <Card className="p-6 gap-2" data-aos="fade-up">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Property Management</h3>
                <p className="text-muted-foreground">
                  Comprehensive management services for property owners, including tenant screening, maintenance, and
                  rent collection.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground border-b">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2" data-aos="fade-up">
                <div className="text-4xl font-bold">500+</div>
                <div className="text-primary-foreground/80">Properties Sold</div>
              </div>
              <div className="space-y-2" data-aos="fade-up">
                <div className="text-4xl font-bold">$250M+</div>
                <div className="text-primary-foreground/80">Sales Volume</div>
              </div>
              <div className="space-y-2" data-aos="fade-up">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-primary-foreground/80">Years Experience</div>
              </div>
              <div className="space-y-2" data-aos="fade-up">
                <div className="text-4xl font-bold">98%</div>
                <div className="text-primary-foreground/80">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div data-aos="fade-up">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Get In Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're looking to buy, sell, or just have questions about the market, I'm here to help. Reach
                  out today!
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">(416) 554-4296 | (905) 956-4449</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">govkha@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Office</h3>
                      <p className="text-muted-foreground">735 TWAIN AVE #2, MISSISSAUGA, ON, L5W1X1</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    The trademarks REALTOR®, REALTORS®, and the REALTOR® logo are controlled by The Canadian Real Estate Association (CREA) and identify real estate professionals who are members of CREA.
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    The trademarks MLS®, Multiple Listing Service® and the associated logos are owned by The Canadian Real Estate Association (CREA) and identify the quality of services provided by real estate professionals who are members of CREA.
                  </p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container py-8 md:py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Everest Realty LTD.. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacypolicy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/termsofservice" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Home, Bed, Bath, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

// Property listing type definition
type PropertyListing = {
    id: string
    address: string
    street: string
    city: string
    province: string
    country: string
    bedrooms: string
    bathrooms: string
    price: string
    status: string
    type: string
    agent: string
    imageUrl: string
}

export default function LatestListings() {
    // Reference to the scrollable container
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    // State for drag functionality
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    // Scroll functions for buttons
    const scrollLeftBtn = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -300,
                behavior: "smooth",
            })
        }
    }

    const scrollRightBtn = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 300,
                behavior: "smooth",
            })
        }
    }

    // Mouse/Touch event handlers for drag scrolling
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return

        setIsDragging(true)
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
        setScrollLeft(scrollContainerRef.current.scrollLeft)

        // Change cursor style
        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.cursor = "grabbing"
        }
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        if (!scrollContainerRef.current) return

        setIsDragging(true)
        setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft)
        setScrollLeft(scrollContainerRef.current.scrollLeft)
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return

        e.preventDefault()
        const x = e.pageX - scrollContainerRef.current.offsetLeft
        const walk = (x - startX) * 2 // Scroll speed multiplier
        scrollContainerRef.current.scrollLeft = scrollLeft - walk
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging || !scrollContainerRef.current) return

        const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft
        const walk = (x - startX) * 2
        scrollContainerRef.current.scrollLeft = scrollLeft - walk
    }

    const stopDragging = () => {
        setIsDragging(false)
        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.cursor = "grab"
        }
    }

    // Add global event listeners for mouse up (to handle releasing outside the container)
    useEffect(() => {
        const handleMouseUp = () => {
            stopDragging()
        }

        document.addEventListener("mouseup", handleMouseUp)
        document.addEventListener("touchend", handleMouseUp)

        return () => {
            document.removeEventListener("mouseup", handleMouseUp)
            document.removeEventListener("touchend", handleMouseUp)
        }
    }, [])

    // Sample property listings data
    const listings: PropertyListing[] = [
        {
            id: "1",
            address: "1034 Meredith Avenue, Mississauga, Ontario, Canada",
            street: "1034 Meredith Avenue",
            city: "Mississauga",
            province: "Ontario",
            country: "Canada",
            bedrooms: "2 + 2",
            bathrooms: "2",
            price: "$1,148,800",
            status: "For Sale",
            type: "Residential",
            agent: "Govinda Khatri",
            imageUrl: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80",
        },
        {
            id: "2",
            address: "7028 Justine Drive, Mississauga, Ontario, Canada",
            street: "7028 Justine Drive",
            city: "Mississauga",
            province: "Ontario",
            country: "Canada",
            bedrooms: "3 + 2",
            bathrooms: "2",
            price: "$849,999",
            status: "For Sale",
            type: "Residential",
            agent: "Govinda Khatri",
            imageUrl: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80",
        },
        {
            id: "3",
            address: "291 Antigua Road, Mississauga, Ontario, Canada",
            street: "291 Antigua Road",
            city: "Mississauga",
            province: "Ontario",
            country: "Canada",
            bedrooms: "3 + 1",
            bathrooms: "2",
            price: "$1,298,000",
            status: "For Sale",
            type: "Residential",
            agent: "Govinda Khatri",
            imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80",
        },
        {
            id: "4",
            address: "507 - 1110 Walden Circle, Mississauga, Ontario, Canada",
            street: "507 - 1110 Walden Circle",
            city: "Mississauga",
            province: "Ontario",
            country: "Canada",
            bedrooms: "2",
            bathrooms: "2",
            price: "$599,000",
            status: "For Sale",
            type: "Residential",
            agent: "Govinda Khatri",
            imageUrl: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80",
        },
        {
            id: "5",
            address: "1474 Sandgate Crescent, Mississauga, Ontario, Canada",
            street: "1474 Sandgate Crescent",
            city: "Mississauga",
            province: "Ontario",
            country: "Canada",
            bedrooms: "2 + 2",
            bathrooms: "2",
            price: "$929,000",
            status: "For Sale",
            type: "Residential",
            agent: "Govinda Khatri",
            imageUrl: "https://images.unsplash.com/photo-1638454795595-0a0abf68614d?q=80",
        },
        {
            id: "6",
            address: "2238 Truscott Drive, Mississauga, Ontario, Canada",
            street: "2238 Truscott Drive",
            city: "Mississauga",
            province: "Ontario",
            country: "Canada",
            bedrooms: "3 + 1",
            bathrooms: "3",
            price: "$1,197,777",
            status: "For Sale",
            type: "Residential",
            agent: "Govinda Khatri",
            imageUrl: "https://images.unsplash.com/photo-1638885930125-85350348d266?q=80",
        },
    ]

    return (
        <section id="listings" className="py-12 md:py-20 relative border-b">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Latest Listings</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Explore our newest properties on the market. Quality homes in prime locations throughout Mississauga.
                    </p>
                </div>

                {/* Navigation Arrows */}
                <div className="absolute top-1/2 left-20 z-10 mt-16 sm:mt-0">
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white"
                        onClick={scrollLeftBtn}
                    >
                        <ChevronLeft className="h-6 w-6" />
                        <span className="sr-only">Scroll left</span>
                    </Button>
                </div>

                <div className="absolute top-1/2 right-20 z-10 mt-16 sm:mt-0">
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white"
                        onClick={scrollRightBtn}
                    >
                        <ChevronRight className="h-6 w-6" />
                        <span className="sr-only">Scroll right</span>
                    </Button>
                </div>

                {/* Scrollable Container with drag functionality */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory cursor-grab"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={stopDragging}
                    onMouseLeave={stopDragging}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={stopDragging}
                >
                    {listings.map((property) => (
                        <div key={property.id} className="flex-none w-[280px] sm:w-[300px] px-2 snap-start">
                            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full p-0 gap-0">
                                <CardHeader className="p-0">
                                    <div className="relative h-45 w-full">
                                        <Image
                                            src={property.imageUrl || "/placeholder.svg"}
                                            alt={property.address}
                                            fill
                                            className="object-cover"
                                        />
                                        
                                    </div>
                                </CardHeader>
                                <CardContent className="p-4">
                                    <h3 className="font-bold text-base truncate mb-1">{property.street}</h3>
                                    <div className="flex items-center text-muted-foreground mb-2">
                                        <MapPin className="h-3 w-3 mr-1" />
                                        <span className="text-xs">{property.city}</span>
                                    </div>
                                    
                                    <div className="text-lg font-bold text-primary">{property.price}</div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


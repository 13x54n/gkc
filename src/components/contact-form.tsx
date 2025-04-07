"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { sendEmail } from "@/app/actions/email"

export default function ContactForm() {
    const [notification, setNotification] = useState<{
        type: "success" | "error"
        message: string
    } | null>(null)

    const [agreed, setAgreed] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setFormData((prev) => ({ ...prev, [id]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!agreed) {
            setNotification({
                type: "error",
                message: "Please agree to the terms before submitting.",
            })
            return
        }

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setNotification({
                type: "error",
                message: "Please fill in all required fields.",
            })
            return
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
            setNotification({
                type: "error",
                message: "Please enter a valid email address.",
            })
            return
        }

        setIsSubmitting(true)

        try {
            const result = await sendEmail(formData)

            if (result.success) {
                setNotification({
                    type: "success",
                    message: "Your message has been sent successfully!",
                })

                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                })
                setAgreed(false)
            } else {
                throw new Error(result.error || "Failed to send message")
            }
        } catch (error) {
            setNotification({
                type: "error",
                message: error instanceof Error ? error.message : "Failed to send message. Please try again later.",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Card className="p-6" data-aos="fade-up">
            <h3 className="text-xl font-bold">Send Me a Message</h3>
            {notification?.type === "error" && (
                <div className={`mt-4 p-2 rounded ${notification.type === "error" && "bg-red-100"}`}>
                    <p className="text-sm text-gray-700">{notification.message}</p>
                </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <Input id="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                        Phone
                    </label>
                    <Input id="phone" placeholder="Your phone number" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                    </label>
                    <Input id="subject" placeholder="What is this regarding?" value={formData.subject} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                        Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                        id="message"
                        placeholder="Your message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label className="flex items-start gap-2">
                        <input type="checkbox" checked={agreed} onChange={() => setAgreed(!agreed)} className="w-4 h-4 mt-1" />
                        <span className="text-sm text-gray-700">
                            I agree to receive marketing and customer service calls and text messages from EVEREST REALTY LTD..
                            Consent is not a condition of purchase. Msg/data rates may apply. Msg frequency varies. Reply STOP to
                            unsubscribe. Privacy Policy & Terms of Service.
                        </span>
                    </label>
                </div>
                <Button type="submit" className="w-full bg-black text-white" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
            </form>
        </Card>
    )
}


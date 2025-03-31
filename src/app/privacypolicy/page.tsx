import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Page() {
    return <div>
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

        <div className="py-12 md:py-20">
            <div className="container max-w-4xl">
                {/* Back Button */}
                <Link href="/" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Home
                </Link>

                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-gray-500">Last Updated: March 31, 2025</p>
                </div>

                {/* Introduction */}
                <section className="mb-10">
                    <p className="text-gray-700 mb-4">
                        This privacy policy has been compiled to better serve those who are concerned with how their 'Personally identifiable information' (PII) is being used online. We understand the power that the Internet holds for changing your life and making things easier for you. These benefits are at risk if people are concerned about their personal privacy. We are committed to providing you with an Internet experience that respects and protects your personal privacy choices and concerns. In general, we gather information about all of our users collectively. We only use such information anonymously and in the aggregate. This information helps us determine what is most beneficial for our users, and how we can continually create a better overall experience for you. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.
                    </p>
                    <p className="text-gray-700 mb-4">
                        <b>Personal Information</b><br />

                        This website functionality requires/requests users to provide contact information (such as their email address) and personal information (such as their names, address phone numbers, and property details). The user’s contact and personal information is used to contact said user when necessary and requested, but is primarily used to collect personal information necessary to effectively market and to sell the property of sellers, to locate, assess and qualify properties for buyers and to otherwise provide professional services to clients and customers.
                    </p>
                </section>

                {/* Acceptance of Terms */}
                <section className="mb-10">
                    <p className="text-gray-700 mb-4">
                        <b>Information Collection and Use</b><br />
                        When subscribing to a newsletter or filling out a form, as appropriate, we collect the information you enter, including but not limited to, your name, email address, mailing address, phone number or other details to help you with your experience.<br />
                        We may use the information we collect from you in the following ways:
                    </p>
                    <span className="text-gray-700 mb-4">
                        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                            <li>
                                To personalize user's experience and to allow us to deliver the type of content and product offerings in which you are most interested.
                            </li>
                            <li>
                                To allow us to better service you in responding to your customer service requests
                            </li>
                            <li>
                                To administer a contest, promotion, survey or other website feature
                            </li>
                            <li>
                                To send periodic emails regarding your interest for property listings and services
                            </li>
                        </ul>
                    </span>
                </section>

                {/* Disclaimer */}
                <section className="mb-10">
                    <p className="text-gray-700 mb-4">
                        This website is the sole owner of the information collected. We will not sell, share, trade or rent this information to others in ways different from what is disclosed in this statement. This website collects information from our users at several different points on our website. We ONLY collect personal information necessary to effectively market and to sell the property of sellers, to locate, assess and qualify properties for buyers and to otherwise provide professional services to clients and customers. We do not sell, trade, transfer, rent or exchange your personal information with anyone. We do not disclose information about your individual visits to this website, or personal information that you provide, such as your name, address, e-mail address, telephone number, etc., to any outside parties, except when we believe the law requires it.
                    </p>
                    <p className="text-gray-700 mb-4">
                        <b>Home Worth / Dream Home / Neighbourhood Buzzer / Free Real Estate Reports</b><br />

                        Since this website is a Real Estate website, we give you the OPTION of requesting FREE Real Estate Information about real estate properties. Your personal Information is stored on our secure database. We ONLY collect personal information necessary to effectively market and to sell the property of sellers, to locate, assess and qualify properties for buyers and to otherwise provide professional services to clients and customers. We do not sell, trade, transfer, rent or exchange your personal information with anyone.
                    </p>
                    <p className="text-gray-700 mb-4">
                        <b>Third Party Disclosure</b><br />
                        We do not sell, trade, or otherwise transfer to outside parties, your personally identifiable information unless we provide you with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our website policies, or protect ours or others' rights, property, or safety. <br />
                        However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
                    </p>
                    <p className="text-gray-700 mb-4">
                        <b>Canada Anti-Spam Law (CASL)</b><br />
                        CASL is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.
                    </p>
                    <p className="text-gray-700 mb-4">
                        We collect your email address in order to:
                    </p>
                    <span className="text-gray-700 mb-4">
                        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                            <li>
                                Send information, respond to inquiries, and/or other requests or questions.
                            </li>
                            <li>
                                Market to our mailing list or continue to send emails to our clients after the original transaction has occurred
                            </li>
                        </ul>
                    </span>
                    <p className="text-gray-700 mb-4">
                        To be in accordance with CASL we agree to the following:
                    </p>
                    <span className="text-gray-700 mb-4">
                        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                            <li>
                                NOT use false, or misleading subjects or email addresses
                            </li>
                            <li>
                                Identify the message as an advertisement in some reasonable way
                            </li>
                            <li>
                                Include the physical address of our business or website headquarters
                            </li>
                            <li>
                                Monitor third party email marketing services for compliance, if one is used.
                            </li>
                            <li>
                                Honor opt-out/unsubscribe requests quickly
                            </li>
                            <li>
                                Allow users to unsubscribe by using the link at the bottom of each email
                            </li>
                        </ul>
                    </span>

                    <p className="text-gray-700 mb-4">
                        <b>Notification of Changes</b><br />
                        This policy may be revised over time as new features are added to the website. We will post those changes so that you will always know what information we gather, how we might use that information, and whether we will disclose it to anyone. Please check this website for information about revisions to our privacy policy. We will notify you directly if there is a material change in our privacy practices. We will take commercially reasonable measures to obtain written or active e-mail consent from the user, if this website is going to be using the information collected from the user in a manner different from that stated at the time of collection. We will also post the changes in our privacy statement 10 days prior to a change.
                    </p>
                    <p className="text-gray-700 mb-4">
                        <b>Legal Disclaimer</b><br />
                        We may disclose personal information when required by law or in the good-faith belief that such action is necessary in order to conform to the edicts of the law or comply with a legal process serviced on our website.
                    </p>
                </section>

                {/* Contact Information */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                    <p className="text-gray-700 mb-4">If you have any questions about these Policy, please contact us at:</p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <p className="font-medium mb-1">Everest Realty Ltd.</p>
                        <p className="text-gray-700 mb-1">735 TWAIN AVE #2</p>
                        <p className="text-gray-700 mb-1">MISSISSAUGA, Ontario, L5W1X1</p>
                        <p className="text-gray-700 mb-1">Canada</p>
                        <p className="text-gray-700 mb-1">Phone: (416) 554-4296 | (905) 956-4449</p>
                    </div>
                </section>

                {/* Footer */}
                <div className="text-center text-gray-500 text-sm mt-16">
                    <p>© {new Date().getFullYear()} Everest Realty Ltd. All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>;
}
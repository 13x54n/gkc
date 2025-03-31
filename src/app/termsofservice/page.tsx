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
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
                    <p className="text-gray-500">Last Updated: March 31, 2025</p>
                </div>

                {/* Introduction */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                    <p className="text-gray-700 mb-4">
                        Welcome to our website. Please note that any access, use, or participation in this website constitutes an immediate acceptance and agreement to be bound by the terms and provision of this agreement. In addition, the use of particular services provided by this website shall subject the user to any posted guidelines or rules applicable to such services, which may be posted and modified from time to time. All such guidelines or rules are hereby incorporated by reference into the Terms of Service. The use of this website is not recommended and highly discouraged for those in disagreement with any part of the Terms of Service.
                    </p>
                    <p className="text-gray-700 mb-4">
                        From herein, the terms 'us' or 'we' or 'our' will refer to the owner of the website. The terms 'you' or 'your' will refer to the user or viewer of this website.
                    </p>
                </section>

                {/* Acceptance of Terms */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">2. Acceptance of Terms</h2>
                    <p className="text-gray-700 mb-4">
                        The use of this website is subject to the following terms of use:
                    </p>
                    <span className="text-gray-700 mb-4">
                        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                            <li>
                                This website and its components are offered for informational purposes only; neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. We shall not be held responsible or liable for the accuracy, usefulness or availability of any information transmitted or made available via the website, and shall not be responsible or liable for any error or omissions in that information. The information in this website is subject to change without notice.
                            </li>
                            <li>
                                Your use of any information or materials in this website is entirely at your own risk, for which we shall not be held liable. It shall be your own responsibility to ensure that any products, services or information available through this website meets your specific requirements.
                            </li>
                            <li>
                                This website uses “cookies” to monitor browsing preferences. Cookies are small pieces of information, including but not limited to, personal information stored by your browser on your computer’s hard drive. Personal information may be stored by us for use by third parties related to this website. Personal information includes but is not limited to, User Name, Password, and E-mail Address credentials used during registration for this website.
                            </li>
                            <li>
                                Our website contains registration forms which require users to provide contact information (first name, last name, phone number), unique identifiers (e-mail address), and demographic information (postal code, city, region). This information will be stored, used, and shared within our brokerage and between members of our brokerage to serve your informational needs.
                            </li>
                            <li>
                                This website contains material which is owned by or licensed to us by InCom Web & e-Marketing Solutions. This material includes, but is not limited to, the design, layout, look, appearance, graphics, and content in this website. Reproduction of said materials is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
                            </li>
                            <li>
                                All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged in the website.
                            </li>
                            <li>
                                Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offence.
                            </li>
                            <li>
                                From time to time, this website may also include links to other website(s) or post(s). These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s) or post(s). We have no responsibility for the content of the linked website(s) or post(s). We the right to add, modify, remove all material of the website in its sole and absolute discretion including, without limitation, links and posts.
                            </li>
                            <li>
                                This website uses YouTube API services to automatically generate YouTube videos of our listings on the YouTube channel. By using those API, we are agreeing to be bound by the YouTube Terms of Service and Google Privacy Policy.
                            </li>
                            <li>
                                Your use of this website and any dispute arising out of such use of the website is subject to the laws of Canada.
                            </li>
                        </ul>
                    </span>
                </section>

                {/* Disclaimer */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
                    <p className="text-gray-700 mb-4">
                        The information contained on this website is based in whole or in part on information that is provided by members of The Canadian Real Estate Association (CREA), who are responsible for its accuracy. CREA reproduces and distributes this information as a service for its members and assumes no responsibility for its accuracy.
                    </p>
                    <p className="text-gray-700 mb-4">
                        This website is operated by <b>Govinda Khatri, EVEREST REALTY LTD.</b> who is a member of The Canadian Real Estate Association.
                    </p>
                    <p className="text-gray-700 mb-4">
                        The listing content on this website is protected by copyright and other laws, and is intended solely for the private, non-commercial use by individuals. Any other reproduction, distribution or use of the content, in whole or in part, is specifically forbidden. The prohibited uses include commercial use, "screen scraping", "database scraping", and any other activity intended to collect, store, reorganize or manipulate data on the pages produced by or displayed on this website.
                    </p>
                    <p className="text-gray-700 mb-4">
                        The information contained in this website is for general information purposes only. The information is provided by <b>Govinda Khatri, EVEREST REALTY LTD.</b> and while we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
                    </p>
                    <p className="text-gray-700 mb-4">
                        In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profit, arising out of, or in connection with, the use of this website.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Through this website you are able to link to other websites which are not under the control of <b>Govinda Khatri, EVEREST REALTY LTD.</b>. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Every effort is made to keep the website up and running smoothly. However, <b>Govinda Khatri, EVEREST REALTY LTD.</b> takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
                    </p>
                </section>

                {/* Contact Information */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
                    <p className="text-gray-700 mb-4">If you have any questions about these Terms, please contact us at:</p>
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
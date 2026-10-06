import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FaShieldAlt, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import { IoIosDocument } from 'react-icons/io';

export default function PrivacyPolicy() {
    const currentYear = new Date().getFullYear();
    const effectiveDate = "September 16, 2026"; // Set the policy effective date

    useEffect(() => {
        window.scroll(0, 0)
    })
    return (
        <div className="bg-gray-500 min-h-screen py-16">
            <Helmet>
                <meta charSet="utf-8" />
                <title> Malani Marbles | privacy policy</title>
                <meta name="description" content="Learn how Malani Marbles collects, uses, and protects your personal information in accordance with our privacy practices and data protection policy."></meta>
                <link rel="canonical" href="https://www.malanimarbles.com/privacy-policy" />
            </Helmet>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <header className="text-center mb-12">
                    {/* <IoIosDocument className="text-6xl text-emerald-600 mx-auto mb-4 dark:text-emerald-400" /> */}
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 mt-6">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-white">
                        Effective Date: <span className="font-semibold">{effectiveDate}</span>
                    </p>
                </header>

                {/* Content Container */}
                <div className="space-y-12 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-xl shadow-2xl">

                    {/* Introduction */}
                    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <FaShieldAlt className="text-emerald-600 dark:text-emerald-400 mr-3" />
                            Introduction:
                        </h2>
                        <p className="leading-relaxed">
                            Malani Marbles Pvt. Ltd. (‘Malani Marbles’, ‘we’, ‘us’ or ‘our’) is dedicated to your privacy and takes steps in safeguarding personal information submitted to us through our website at www.malanimarbles.com (‘Website’).<br /><br />


                            The Privacy Policy will make you aware of the ways in which we collect, use, process, store and protect any information collected from you while using the Website to browse our marble and natural stone products, to obtain quotations, to seek further information or samples or even contacting us.
                            <br /><br />
                            When you visit our Website or voluntarily submit your information to us, you are confirming that you have understood our Privacy Policy.

                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                              Information We Collect
                        </h3>
                        <p className="mb-4">
                            The types of personal information we may collect include, but is not limited to the following, based on the details provided by you:
                        </p>
                        <ul className="space-y-3 list-disc list-inside ml-4">
                            <li>
                                <span className="font-semibold text-gray-900 dark:text-white">Personal Details:</span> Name, email address, phone number, company name, and any other data submitted via contact or inquiry forms.
                            </li>
                            <li>
                                <span className="font-semibold text-gray-900 dark:text-white">Technical Data:</span> Browser type, IP address, device information, and user interaction with the site, collected through cookies and analytics tools.
                            </li>
                        </ul>


                        <h3 className="text-2xl font-bold mt-5 text-gray-900 dark:text-white mb-4">
                         How your information will be used
                        </h3>
                        <p className="mb-4">
                            Your information can be used for:

                        </p>
                        <ul className="space-y-3 list-disc list-inside ml-4">
                            <li>
                                Processing of inquiries and requests

                            </li>
                            <li>
                                Providing you with product information, quotations and samples
                            </li>

                            <li>
                                Determining what you require in terms of products

                            </li>

                            <li>
                                Communicating with you regarding products and services
                            </li>

                            <li>
                                Improving our website and customer experience
                            </li>
                            <li>
                                Protecting our website from any misuse

                            </li>
                            <li>Compliance with applicable laws and regulations.
                            </li>
                            <li>Personal data will be processed only when it is necessary for a legitimate purpose connected to our business operations.
                            </li>
                        </ul>

                    </section>



                    {/* Cookies and Analytics */}
                    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                             Cookies
                        </h2>
                        <p className="leading-relaxed">
                            Cookies and similar technologies may be used on our website in order to enhance our website, analyze traffic on our website and improve your experience. You can control cookies from your browser settings.

                        </p>
                    </section>

                    {/* Sharing of Information */}
                    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                             Exchange of Information
                        </h2>
                        <p className="mb-4">
                            We do not sell or exchange your personal information for any commercial gain.
                            Where required, we will exchange data with our authorized employees, third-party service providers, web hosting providers, security providers, legal consultants, or governmental agencies where required by the law.

                        </p>

                    </section>

                    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                             Personal Information Security and Storage
                        </h2>
                        <p className="mb-4">
                            We keep personal information as long as it is reasonably necessary either to accomplish the purpose of the collection of such information or for some other legitimate reasons under the relevant laws.


                        </p>
                        <p>Personal information is kept as long as:</p>

                        <ul>
                            <li>Type of personal information</li>
                            <li>Purpose of collection of information</li>
                            <li>Natures of inquiries</li>
                            <li>Legislative or regulatory requirements</li>
                            <li>Settling disputes</li>
                            <li>Creation/determination of legal rights</li>

                        </ul>
                        <p className='mt-4'>If personal information is no longer required for legitimate business and legal purposes, we will destroy it in an appropriate manner.</p>
                    </section>


                    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Your Rights
                        </h2>
                        <p className="mb-4">
                            You might have certain rights related to your personal data due to the law applicable in your jurisdiction.
                        </p>
                        <p>They might include the following:
                        </p>

                        <ul>
                            <li>To receive information regarding the personal data we hold about you</li>
                            <li>To receive information regarding the personal data we hold about you
                            </li>
                            <li>To obtain the deletion of your personal data as per law</li>
                            <li>To revoke your consent in case we process your personal data based on your consent</li>
                            <li>To get information regarding the purpose of processing your personal data</li>
                            <li>To make an objection regarding the processing of your personal data</li>

                        </ul>
                        <p className='mt-4'>Please note that some of your rights would depend on your identity being verified.</p>
                    </section>


                    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                             Third-Party Sites
                        </h2>
                        <p className="mb-4">
                            Our site might have links or integration with third-party websites and services. We do not assume any responsibility with respect to the privacy practices or content of such third party sites. Please refer to their privacy policies.
                        </p>

                    </section>

                    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                         Revisions to This Privacy Policy
                        </h2>
                        <p className="mb-4">
                            This Privacy Policy may be amended from time to time in order to make amendments as per any changes in our policies, services or as per any law. The amended version shall be posted on this page.

                        </p>

                    </section>






                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Contact Us
                        </h2>
                        <p className="mb-4">
                            In case you have any questions, grievances, or complaints about this Privacy Policy or personal information processing, please feel free to contact us at the following address:
                            Malani Marbles Pvt. Ltd.

                        </p>

                        <div className="space-y-4 font-medium">
                            <div className="flex items-center text-lg">
                                <FaEnvelope className="text-emerald-600 dark:text-emerald-400 mr-3 w-5 h-5 flex-shrink-0" />
                                <span className="text-gray-900 dark:text-white">Email:</span>
                                <a href="mailto:Sales@malanimarbles.com" className="ml-2 text-emerald-600 dark:text-emerald-400 hover:underline">sales@malanimarbles.com</a>
                            </div>

                            <div className="flex items-center text-lg">
                                <FaPhone className="text-emerald-600 dark:text-emerald-400 mr-3 w-5 h-5 flex-shrink-0" />
                                <span className="text-gray-900 dark:text-white">Phone:</span>
                                <a href="tel:+919810387297" className="ml-2 text-emerald-600 dark:text-emerald-400 hover:underline">9810387297,</a>
                                <a href="tel:+919811012011" className="ml-2 text-emerald-600 dark:text-emerald-400 hover:underline">9811012011</a>
                            </div>

                            <div className="flex items-start text-lg">
                                <FaMapMarkerAlt className="text-emerald-600 dark:text-emerald-400 mr-3 w-5 h-5 mt-1 flex-shrink-0" />
                                <span className="text-gray-900 dark:text-white">Address:</span>
                                <p className="ml-2">Malani Marbles Pvt. Ltd.
                                    Khasra No. 809-810 Chattarpur Mandir Road, Near Tivoli Garden New Delhi- 110074, India </p>


                            </div>

                            <div className="flex items-start text-lg">
                                <FaMapMarkerAlt className="text-emerald-600 dark:text-emerald-400 mr-3 w-5 h-5 mt-1 flex-shrink-0" />
                                <span className="text-gray-900 dark:text-white">Address:</span>
                                <p className="ml-2">A-11, Asola Farms, near Shanidham Mandir Road,
                                    Chattarpur, New Delhi - 110074, India
                                </p>


                            </div>

                            <div className="flex items-center text-lg">
                                <FaGlobe className="text-emerald-600 dark:text-emerald-400 mr-3 w-5 h-5 flex-shrink-0" />
                                <span className="text-gray-900 dark:text-white">Website:</span>
                                <a href="https://www.malanimarbles.com" target="_blank" rel="noopener noreferrer" className="ml-2 text-emerald-600 dark:text-emerald-400 hover:underline">https://www.malanimarbles.com</a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Footer / Copyright Strip */}
            <div className="text-center mt-12 text-sm text-gray-500 dark:text-gray-600">
                © {currentYear} Malani Marbles Pvt. Ltd. All Rights Reserved.
            </div>
        </div>
    );
}
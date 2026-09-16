import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FaShieldAlt, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import { IoIosDocument } from 'react-icons/io';

export default function TermsConditions() {
    const currentYear = new Date().getFullYear();
    const effectiveDate = "September 16, 2026"; // Set the policy effective date

    useEffect(() => {
        window.scroll(0, 0)
    })
    return (
        <div className="bg-gray-500 min-h-screen py-16">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Terms & Conditions | Malani Marbles</title>
                <meta name="description" content="Read 'Malani Marbles' Terms and Conditions concerning website usage, buying marbles, placing orders, payment, delivery, refunds, and customer obligations."></meta>
                <link rel="canonical" href="https://www.malanimarbles.com/term-condition" />
            </Helmet>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <header className="text-center mb-12">
                    {/* <IoIosDocument className="text-6xl text-emerald-600 mx-auto mb-4 dark:text-emerald-400" /> */}
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 mt-6">
                        TERMS AND CONDITIONS
                    </h1>
                    <p className="text-lg text-white">
                        Effective Date: <span className="font-semibold">{effectiveDate}</span>
                    </p>
                </header>

                {/* Content Container */}
                <div className="space-y-12 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-xl shadow-2xl">

                    {/* Introduction */}
                    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">

                        <p className="leading-relaxed">
                            Malani Marbles Pvt. Ltd. (‘Malani Marbles’, ‘we’, ‘us’ or ‘our’) owns and runs the website <a href="https://www.malanimarbles.com" className='text-emerald-400 font-semibold'>www.malanimarbles.com</a> (‘Website’). Using this Website, you agree to these Terms & Conditions.
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                             Use of Website
                        </h3>
                        <p className="mb-4">
                            Website provides information about our marble, granite, onyx, travertino, semi-precious stones, tiles and other natural-stone products.

                        </p>
                        <p>By using the Website, you agree that you will use it in a legal manner. You agree not to abuse Website, make any unauthorised attempts at accessing the Website, introduce any harmful programs, or reproduce our materials without consent.</p>


                        <h3 className="text-2xl font-bold mt-5 text-gray-900 dark:text-white mb-4">

                             Product Information

                        </h3>
                        <p className="mb-4">
                            We do everything possible to update and keep all the information about our products including the product descriptions, images, technical specifications, price and availability, but this information can change without any prior notice.
                        </p>

                        <p className='mt-4'>Information about products on the Website is general in nature, and you have to verify the availability, pricing, dimensions, finishes and technical specifications of products directly with Malani Marbles.</p>

                    </section>

                    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                             Natural Stone Variations
                        </h2>
                        <p className="leading-relaxed">
                            Images posted on Website can be illustrative in nature, and the actual stone slabs can be different depending on the way images were captured and viewed through computer screen.

                        </p>
                        <p className='leading-relaxed mt-5'>Consumers are advised to see or verify the actual product if exact appearance is important.
                        </p>
                    </section>

                    {/* Sharing of Information */}
                    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                         Enquiries and Quotations
                        </h2>
                        <p className="mb-4">
                            Placing an enquiry, requesting quotation or samples via Website does not necessarily mean placing an order or that there will be availability of the products.
                        </p>
                        <p className='mt-4'>The quotations made by Malani Marbles might have specific prices, validity and other business terms.</p>

                        <p className='mt-4'>Pricing of the final product depends on various factors such as the nature, grade, size, thickness, finish, quantity and others.</p>

                    </section>

                    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                         Samples and Products
                        </h2>
                        <p className="mb-4">
                            The samples are meant for overall assessment and may not include all variations that might exist within the full slab.

                        </p>
                        <p>You need to keep in mind the inherent nature of the stone and be sure about the real material used for your project.
                        </p>



                    </section>


                    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                             Intellectual Property Rights

                        </h2>
                        <p className="mb-4">
                            The content on our Website including, but not limited to, the text, pictures, descriptions of products, graphics, logos, designs and any other material is owned by Malani Marbles or its respective licensors.

                        </p>
                        <p>Any reproduction, distribution, modification, retransmission or republication of any Website content without a prior written permission is strictly prohibited.
                        </p>


                    </section>


                    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Other Web Sites
                        </h2>
                        <p className="mb-4">
                            The Website may provide links to other web sites or web services. Malani Marbles shall not be held responsible for the content, privacy and security policies of those websites or services.

                        </p>

                    </section>

                    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Availability of the Website

                        </h2>
                        <p className="mb-4">
                            We endeavor to ensure that the Website remains up to date and available; however, no warranties are made as to its continuous and error free operation.<br />

                            Content on the Website may be altered or discontinued without any notice at any time.

                        </p>

                    </section>



                    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                         Liability
                        </h2>
                        <p className="mb-4">
                            Website content is provided for informational and product enquires purposes only. The Company does not guarantee that all the information, pricing, availability and product pictures provided on the Website are accurate and complete.<br />
                            None of the provisions of these Terms limit any liability that cannot be excluded under applicable law.

                        </p>

                    </section>

                    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                             Privacy
                        </h2>
                        <p className="mb-4">
                            Any information provided by means of the Website is subject to the conditions stated under our  <a href="https://www.malanimarbles.com/privacy-policy" className='text-emerald-400 font-semibold'>Privacy Policy</a> . By using the Website, you confirm that you have read and understood our Privacy Policy.

                        </p>

                    </section>

                    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                             Changes in the Terms

                        </h2>
                        <p className="mb-4">
                            We reserve the right to make changes to the Terms at any time. We will put up the changed Terms on this page along with the date of revision.

                            Further use of the Website after any change in the Terms shall amount to your acceptance of those changes, as far as is possible according to law.

                        </p>

                    </section>

                    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                             Applicable Law
                        </h2>
                        <p className="mb-4">
                            The Terms & Conditions are to be interpreted according to Indian law. Any dispute in connection with the Website or the Terms shall be decided in the courts of Delhi, India, as per relevant laws.

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
                                    Chhatarpur, New Delhi - 110074, India
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
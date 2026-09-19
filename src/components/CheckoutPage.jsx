import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";


export default function CheckoutPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const { product, category, quantity, totalPrice } = location.state || {};

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        paymentMethod: "cod",
    });

    if (!product || !category) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">No Item Selected for Checkout</h2>
                <p className="text-gray-600 mb-6">Please select a product from our marble collection first.</p>
                <Link to="/" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
                    Go to Homepage
                </Link>
            </div>
        );
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Order Placed Successfully!");
        navigate("/");
    };

    useEffect(()=>{
         window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    })

    return (
        <section className="min-h-screen   font-sans pb-12">
            

            <section className="relative mb-8 h-[45vh] md:h-[70vh] w-full overflow-hidden">

        <img
          src="/img/delhi/banner.jpg.jpeg"
          alt="Marble Showroom"
          className="absolute inset-0 w-full h-full object-cover"
        />
        </section>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
                    <Link to="/" className="hover:text-black transition">Home</Link>
                    <span>/</span>
                    <Link to={`/marble-collection/${category.slug}/${product.slug}`} className="hover:text-black transition">
                        {product.name}
                    </Link>
                    <span>/</span>
                    <span className="text-black font-medium">Checkout</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200">
                        <form onSubmit={handleSubmit}>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b">Shipping Details</h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                                <textarea
                                    name="address"
                                    rows="3"
                                    required
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                    placeholder="House/Flat No., Street, Area"
                                ></textarea>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        required
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                                    <input
                                        type="text"
                                        name="state"
                                        required
                                        value={formData.state}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                                    <input
                                        type="text"
                                        name="pincode"
                                        required
                                        value={formData.pincode}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                                </div>
                            </div>

                            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b">Payment Method</h2>
                            {/* <div className="space-y-3 mb-6">
                                <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="online"
                                        checked={formData.paymentMethod === "online"}
                                        onChange={handleChange}
                                        className="w-4 h-4 text-black"
                                    />
                                    <span className="font-medium text-gray-800">Online Payment (UPI, Cards, Netbanking)</span>
                                </label>
                                <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="cod"
                                        checked={formData.paymentMethod === "cod"}
                                        onChange={handleChange}
                                        className="w-4 h-4 text-black"
                                    />
                                    <span className="font-medium text-gray-800">Cash / Payment on Delivery / Advance Quote</span>
                                </label>
                            </div> */}

                            <button
                                type="submit"
                                className="w-full bg-black text-white py-4 rounded-lg font-bold hover:bg-gray-800 transition shadow-lg text-lg"
                            >
                                Place Order (₹{totalPrice?.toLocaleString("en-IN")})
                            </button>

                        </form>
                        <div className="  py-14  p-4 mb-6  rounded-r-lg">
                            <div className="flex items-start">
                                <div className="ml-3">
                                    <h3 className="text-sm font-semibold text-amber-800">
                                        Payment Gateway Notice
                                    </h3>
                                    <p className="text-sm text-amber-700 mt-1">
                                        There are no payment methods available. Please contact us for help placing your order.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="lg:col-span-5">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 sticky top-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b">Order Summary</h2>

                            <div className="flex gap-4 mb-4">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-20 h-20 object-cover rounded-lg border"
                                />
                                <div>
                                    <h3 className="font-bold text-gray-900">{product.name}</h3>
                                    <p className="text-sm text-gray-500">{category.name} Series</p>
                                    <p className="text-sm text-gray-600 mt-1">Quantity: <span className="font-semibold text-black">{quantity}</span></p>
                                </div>
                            </div>

                            <div className="border-t border-b py-3 my-4 space-y-2 text-sm text-gray-600">
                                <div className="flex justify-between">
                                    <span>Unit Price</span>
                                    <span>₹{parseFloat(product.price).toLocaleString("en-IN")}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Quantity</span>
                                    <span>x {quantity}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Estimated Shipping</span>
                                    <span className="text-green-600 font-medium">Calculated at Confirmation</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-lg font-bold text-gray-900">
                                <span>Total Amount</span>
                                <span className="text-green-600">₹{totalPrice?.toLocaleString("en-IN")}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
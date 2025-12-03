import React, { useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import { FaMobileAlt, FaGooglePlay, FaApple, FaTablet, FaDesktop } from 'react-icons/fa';

const DeviceSupport = () => {
    const [activeTab, setActiveTab] = useState('mobile');

    const tabData = {
        mobile: {
            title: 'Travel Guru On The Go',
            description:
                'Order, track, and enjoy your favorite meals anytime, anywhere with our mobile app. Available for both Android and iOS, Travel Guru puts deliciousness in your pocket.',
            img: 'https://i.postimg.cc/XJThZn7r/mobile.png',
            details: [
                'Push notifications for order updates',
                'Save your favorite travel s for quick reordering',
                'Easy mobile payments and secure checkout',
                'Real-time order tracking and Travel  status',
                'Personalized recommendations based on your taste',
            ],
        },
        tablet: {
            title: 'Tablet Experience',
            description:
                'Enjoy Travel Guru on your tablet with a beautiful, responsive interface. Perfect for browsing menus, sharing with friends, and placing group orders from the comfort of your couch.',
            img: 'https://i.postimg.cc/gJwQkxd9/tablet.png',
            details: [
                'Split-screen menu and order view',
                'Great for family or group ordering',
                'Large, touch-friendly controls',
                'Seamless syncing with your Travel Guru account',
                'Perfect for home or office use',
            ],
        },
        desktop: {
            title: 'Full-Featured Web Platform',
            description:
                'Access all Travel Guru features on your desktop or laptop. Manage your orders, explore trending travel s, and enjoy a seamless experience on any browser.',
            img: 'https://i.postimg.cc/9fgshG6t/laptop.png',
            details: [
                'Comprehensive dashboard for order management',
                'Advanced search and filtering',
                'Detailed travel  analytics and reviews',
                'Multi-tab browsing for comparing dishes',
                'Best for power users and travel ies',
            ],
        },
    };

    const tabs = [
        { key: 'mobile', label: 'Mobile', icon: <FaMobileAlt /> },
        { key: 'tablet', label: 'Tablet', icon: <FaTablet /> },
        { key: 'desktop', label: 'Desktop', icon: <FaDesktop /> },
    ];

    const { title, description, img, details } = tabData[activeTab];

    return (
        <div className="max-w-7xl mx-auto px-4 pb-8 md:pb-16 lg:pb-24 bg-base-100">
            <div className="max-w-5xl mx-auto">
                <Slide direction="right">
                    <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-4">
                    Travel Guru <span className="text-secondary border-b-2 border-secondary">Works Everywhere</span>
                </h2>
                </Slide>
                <Slide direction="left">
                    <p className="text-center text-accent mb-10 max-w-2xl mx-auto">
                    Enjoy Travel Guru on any device—mobile, tablet, or desktop. Seamlessly order, track, and manage your meals wherever you are!
                </p>
                </Slide>
                <div className="flex justify-center mb-8 md:mb-12">
                    <div className="flex rounded-full border border-secondary/20 overflow-hidden bg-base-100 shadow-sm">
                        {tabs?.map((tab) => (
                            <button
                                key={tab.key}
                                type="button"
                                className={`px-6 py-2 flex items-center gap-2 font-medium text-sm md:text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary/40 ${activeTab === tab.key
                                    ? 'bg-secondary text-white shadow font-bold'
                                    : 'text-secondary hover:bg-secondary/10 bg-base-100'
                                }`}
                                aria-pressed={activeTab === tab.key}
                                onClick={() => setActiveTab(tab.key)}
                            >
                                {tab.icon} {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="border border-primary/20 rounded-xl shadow p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 bg-base-100">
                    <div className="md:w-1/2 flex justify-center">
                        <div className="w-full max-w-xs md:max-w-sm rounded-lg p-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
                            <img src={img} alt={title} className="rounded-lg w-full object-contain drop-shadow-md" />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">{title}</h3>
                        <p className="text-primary text-base mb-3">{description}</p>
                        <ul className="list-disc pl-5 text-accent text-sm mb-3 space-y-1">
                            {details && details?.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                        {activeTab === 'mobile' && (
                            <div className="flex gap-3 mt-4">
                                <button type="button" className="btn btn-secondary flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-base shadow hover:bg-primary hover:text-white transition">
                                    <FaGooglePlay /> Google Play
                                </button>
                                <button type="button" className="btn btn-secondary flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-base shadow hover:bg-primary hover:text-white transition">
                                    <FaApple /> App Store
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeviceSupport;
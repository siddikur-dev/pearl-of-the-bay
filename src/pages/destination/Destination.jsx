import { MapPin, CalendarDays, Users, Sun, Mountain, Waves, Utensils, Star } from 'lucide-react';
import { useState } from 'react';

const Destination = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [showAllPhotos, setShowAllPhotos] = useState(false);

    const destination = {
        name: "Cox's Bazar",
        location: "Chittagong Division, Bangladesh",
        description: "Home to the world's longest natural sea beach, stretching an incredible 120 kilometers along the Bay of Bengal.",
        highlights: [
            "World's longest natural sea beach",
            "Stunning sunset views",
            "Fresh seatravel  cuisine",
            "Himchari Waterfall",
            "Local tribal culture"
        ],
        bestTimeToVisit: "November to February",
        idealDuration: "3-5 days",
        photos: [
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1568&q=80",
            "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80",
            "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1634&q=80",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
        ],
        attractions: [
            {
                name: "Cox's Bazar Beach",
                description: "The main 120km beach with golden sands and gentle waves",
                icon: <Waves className="h-6 w-6 text-blue-500" />
            },
            {
                name: "Himchari National Park",
                description: "Lush hills with waterfalls and hiking trails",
                icon: <Mountain className="h-6 w-6 text-green-500" />
            },
            {
                name: "Inani Beach",
                description: "Known for its coral stones and clear waters",
                icon: <Sun className="h-6 w-6 text-yellow-500" />
            },
            {
                name: "Local Seatravel  Markets",
                description: "Fresh catches daily with authentic flavors",
                icon: <Utensils className="h-6 w-6 text-red-500" />
            }
        ],
        reviews: [
            {
                user: "Traveler123",
                rating: 5,
                comment: "Absolutely breathtaking views and the most peaceful beach experience I've ever had!"
            },
            {
                user: "AdventureSeeker",
                rating: 4,
                comment: "Great destination for both relaxation and adventure activities."
            }
        ]
    };
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-84 w-full">
                <img
                    src={destination.photos[2]}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-4xl text-gray-900 md:text-6xl font-bold mb-2">{destination.name}</h1>
                        <div className="flex items-center justify-center">
                            <MapPin className="h-5 w-5 mr-1" />
                            <p className="text-xl">{destination.location}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                {/* Tabs */}
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-2 md:space-x-8">
                        <button
                            onClick={() => setActiveTab('overview')}
                            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'overview' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        >
                            Overview
                        </button>
                        <button
                            onClick={() => setActiveTab('attractions')}
                            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'attractions' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        >
                            Attractions
                        </button>
                        <button
                            onClick={() => setActiveTab('photos')}
                            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'photos' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        >
                            Photos
                        </button>
                        <button
                            onClick={() => setActiveTab('reviews')}
                            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'reviews' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        >
                            Reviews
                        </button>
                    </nav>
                </div>

                {/* Tab Content */}
                <div className="py-8">
                    {activeTab === 'overview' && (
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-2">
                                <h2 className="text-2xl font-bold mb-4">About {destination.name}</h2>
                                <p className="text-gray-700 mb-6">{destination.description}</p>

                                <h3 className="text-xl font-semibold mb-3">Highlights</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                    {destination.highlights.map((highlight, index) => (
                                        <li key={index} className="flex items-start">
                                            <Star className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-4">Travel Information</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex items-start">
                                            <div className="bg-blue-100 p-3 rounded-full mr-4">
                                                <CalendarDays className="h-6 w-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Best Time to Visit</h4>
                                                <p className="text-gray-600">{destination.bestTimeToVisit}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="bg-blue-100 p-3 rounded-full mr-4">
                                                <Users className="h-6 w-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Ideal Duration</h4>
                                                <p className="text-gray-600">{destination.idealDuration}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-1">
                                <div className="bg-gray-50 p-6 rounded-lg sticky top-4">
                                    <h3 className="text-xl font-semibold mb-4">Plan Your Trip</h3>
                                    <div className="space-y-4">
                                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium">
                                            Book Hotels
                                        </button>
                                        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium">
                                            Find Tours
                                        </button>
                                        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-4 rounded-lg font-medium">
                                            Get Travel Guide
                                        </button>
                                    </div>

                                    <div className="mt-6">
                                        <h4 className="font-medium mb-2">Quick Facts</h4>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li className="flex justify-between">
                                                <span>Language:</span>
                                                <span>Bengali, English</span>
                                            </li>
                                            <li className="flex justify-between">
                                                <span>Currency:</span>
                                                <span>BDT (৳)</span>
                                            </li>
                                            <li className="flex justify-between">
                                                <span>Time Zone:</span>
                                                <span>GMT+6</span>
                                            </li>
                                            <li className="flex justify-between">
                                                <span>Best For:</span>
                                                <span>Beach lovers, Families</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'attractions' && (
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Top Attractions in {destination.name}</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {destination.attractions.map((attraction, index) => (
                                    <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                                        <div className="p-6">
                                            <div className="flex items-start">
                                                <div className="bg-gray-100 p-3 rounded-full mr-4">
                                                    {attraction.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-semibold mb-1">{attraction.name}</h3>
                                                    <p className="text-gray-600">{attraction.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'photos' && (
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Photos of {destination.name}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {(showAllPhotos ? destination.photos : destination.photos.slice(0, 3)).map((photo, index) => (
                                    <div key={index} className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
                                        <img
                                            src={photo}
                                            alt={`${destination.name} ${index + 1}`}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                                        />
                                    </div>
                                ))}
                            </div>
                            {!showAllPhotos && destination.photos.length > 3 && (
                                <div className="mt-6 text-center">
                                    <button
                                        onClick={() => setShowAllPhotos(true)}
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                                    >
                                        View All {destination.photos.length} Photos
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'reviews' && (
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Traveler Reviews</h2>
                            <div className="space-y-6">
                                {destination.reviews.map((review, index) => (
                                    <div key={index} className="border-b pb-6">
                                        <div className="flex items-center mb-2">
                                            <div className="flex items-center mr-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="font-medium">{review.user}</span>
                                        </div>
                                        <p className="text-gray-700">{review.comment}</p>
                                    </div>
                                ))}
                                <button className="mt-4 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                    Write a Review
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Destination;
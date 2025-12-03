import { MessageSquareMore, ThumbsUp } from 'lucide-react';
import React from 'react';

const Blogs = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Diving to the Deep: Exploring Cox's Bazar Marine Life",
            description: "Discover the vibrant underwater world of Cox's Bazar with our guide to the best diving spots and marine species in the Bay of Bengal.",
            date: "13 Jul 2023",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            likes: "7.4K",
            comments: "81"
        },
        {
            id: 2,
            title: "Conquer the World's Longest Natural Sea Beach",
            description: "Your complete guide to experiencing Cox's Bazar's 120km beach - from sunrise walks to sunset camel rides and local seatravel  delicacies.",
            date: "4 Nov 2023",
            image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80",
            likes: "5.2K",
            comments: "64"
        },
        {
            id: 3,
            title: "Exploring the Beautiful Hill Tracts Near Cox's Bazar",
            description: "Venture beyond the beach to discover stunning hill tracts featuring waterfalls, tribal villages, and breathtaking viewpoints.",
            date: "28 Dec 2023",
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            likes: "8.9K",
            comments: "112"
        },
        {
            id: 4,
            title: "Cox's Bazar by Night: The Ultimate Evening Guide",
            description: "Where to find the best sunset views, night markets, and beachside bonfires in Cox's Bazar after dark.",
            date: "15 Jan 2024",
            image: "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1634&q=80",
            likes: "6.3K",
            comments: "92"
        },
        {
            id: 5,
            title: "Local Cuisine: Must-Try travel s in Cox's Bazar",
            description: "From fresh seatravel  to traditional Bengali sweets - our travel ie's guide to eating your way through Cox's Bazar.",
            date: "22 Feb 2024",
            image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
            likes: "9.1K",
            comments: "134"
        },
        {
            id: 6,
            title: "Budget Travel: Experiencing Cox's Bazar for Under $30/Day",
            description: "How to enjoy Cox's Bazar's beauty without breaking the bank - affordable stays, eats, and activities.",
            date: "5 Mar 2024",
            image: "https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",

            likes: "12.7K",
            comments: "208"
        },
        {
            id: 7,
            title: "Family-Friendly Activities in Cox's Bazar",
            description: "The best ways to enjoy Cox's Bazar with kids - from gentle beach activities to educational cultural experiences.",
            date: "18 Apr 2024",
            image: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
            likes: "5.8K",
            comments: "76"
        },
        {
            id: 8,
            title: "Monsoon Magic: Visiting Cox's Bazar in the Rainy Season",
            description: "Why the monsoon might be the best time to visit - fewer crowds, lush landscapes, and dramatic ocean views.",
            date: "30 May 2024",
            image: "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            likes: "4.5K",
            comments: "63"
        },
        {
            id: 9,
            title: "Luxury Escapes: High-End Resorts in Cox's Bazar",
            description: "The most luxurious places to stay in Cox's Bazar, featuring private beaches, spa treatments, and gourmet dining.",
            date: "12 Jun 2024",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            likes: "3.9K",
            comments: "42"
        },
        {
            id: 10,
            title: "Adventure Sports: Beyond the Beach in Cox's Bazar",
            description: "From parasailing to jet skiing - your guide to adrenaline-pumping activities in Cox's Bazar.",
            date: "25 Jul 2024",
            image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1568&q=80",
            likes: "7.2K",
            comments: "105"
        },
        {
            id: 11,
            title: "Cultural Immersion: Meeting the Local Communities",
            description: "How to respectfully engage with and learn from the diverse communities that call Cox's Bazar home.",
            date: "8 Aug 2024",
            image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80",
            likes: "6.8K",
            comments: "97"
        },
        {
            id: 12,
            title: "Photography Guide: Capturing Cox's Bazar's Beauty",
            description: "The best locations, times of day, and techniques for photographing Cox's Bazar's stunning landscapes.",
            date: "19 Sep 2024",
            image: "https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            likes: "10.3K",
            comments: "156"
        }
    ];

    return (
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
                {blogPosts.map((post) => (
                    <div key={post.id} className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
                        <a href="/" aria-label="Article">
                            <img
                                src={post.image}
                                className="object-cover w-full h-64 rounded-t-lg"
                                alt={post.title}
                                loading="lazy"
                            />
                        </a>
                        <div className="p-6">
                            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                                {post.date}
                            </p>
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-blue-700"
                            >
                                <h3 className="text-2xl font-bold leading-tight md:leading-8">
                                    {post.title}
                                </h3>
                            </a>
                            <p className="mb-4 text-gray-700">
                                {post.description}
                            </p>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <div className="flex items-center space-x-2">
                                    <ThumbsUp className='text-yellow-600' />
                                    <span className="font-medium">{post.likes}</span>
                                </div>
                                <div className="flex items-center space-x-2">

                                    <MessageSquareMore />
                                    <span className="font-medium">{post.comments}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
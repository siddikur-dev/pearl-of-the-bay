import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';
import Button from '../../components/Button';
import { Link } from 'react-router';

const Booking = () => {
    const [origin, setOrigin] = useState('Dhaka');
    const [destination, setDestination] = useState("Cox's Bazar");
    const [departureDate, setDepartureDate] = useState('01/09');
    const [returnDate, setReturnDate] = useState('12/09');
    const [showOriginDropdown, setShowOriginDropdown] = useState(false);
    const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);

    const popularCities = [
        'Dhaka',
        "Cox's Bazar",
        'Chittagong',
        'Sylhet',
        'Rajshahi',
        'Khulna',
        'Barisal',

    ];

    const handleOriginSelect = (city) => {
        setOrigin(city);
        setShowOriginDropdown(false);
    };

    const handleDestinationSelect = (city) => {
        setDestination(city);
        setShowDestinationDropdown(false);
    };

    return (
        <div className='background-img pt-4 md:pt-12'>
            <div className='w-11/12 mx-auto px-4 flex flex-col md:flex-row items-center'>
                <div className='w-full md:w-6/12 text-white space-y-6 text-center md:text-justify mb-8 md:mb-0'>
                    <h3 className='text-3xl md:text-6xl font-semibold'>COX'S BAZAR</h3>
                    <p className='md:w-10/12'> Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach... </p>
                </div>

                <div className="w-full md:max-w-md bg-white rounded-xl shadow-md">
                    <div className="p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                            {/* Origin */}
                            <div className="flex-1 relative">
                                <div className="flex items-center gap-2 text-gray-500">
                                    <MapPin className="h-4 w-4" />
                                    <span className="text-xs font-medium">Origin</span>
                                </div>
                                <div
                                    className="flex items-center justify-between cursor-pointer mt-1"
                                    onClick={() => setShowOriginDropdown(!showOriginDropdown)}
                                >
                                    <h3 className="text-lg font-semibold">{origin}</h3>
                                    <ChevronDown className="h-5 w-5 text-gray-400" />
                                </div>
                                {showOriginDropdown && (
                                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                                        {popularCities.map((city) => (
                                            <div
                                                key={`origin-${city}`}
                                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => handleOriginSelect(city)}
                                            >
                                                {city}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Destination */}
                            <div className="flex-1 relative">
                                <div className="flex items-center gap-2 text-gray-500">
                                    <MapPin className="h-4 w-4" />
                                    <span className="text-xs font-medium">Destination</span>
                                </div>
                                <div
                                    className="flex items-center justify-between cursor-pointer mt-1"
                                    onClick={() => setShowDestinationDropdown(!showDestinationDropdown)}
                                >
                                    <h3 className="text-lg font-semibold">{destination}</h3>
                                    <ChevronDown className="h-5 w-5 text-gray-400" />
                                </div>
                                {showDestinationDropdown && (
                                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                                        {popularCities.map((city) => (
                                            <div
                                                key={`dest-${city}`}
                                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => handleDestinationSelect(city)}
                                            >
                                                {city}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="border-t border-gray-200 my-4"></div>

                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                            {/* Dates */}
                            <div className="flex-1">
                                <div className="flex items-center gap-2 text-gray-500">
                                    <Calendar className="h-4 w-4" />
                                    <span className="text-xs font-medium">From - To</span>
                                </div>
                                <div className="flex gap-2 mt-1">
                                    <input
                                        type="text"
                                        value={departureDate}
                                        onChange={(e) => setDepartureDate(e.target.value)}
                                        className="text-sm font-medium w-16 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                                        placeholder="DD/MM"
                                    />
                                    <span className="text-sm font-medium">-</span>
                                    <input
                                        type="text"
                                        value={returnDate}
                                        onChange={(e) => setReturnDate(e.target.value)}
                                        className="text-sm font-medium w-16 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                                        placeholder="DD/MM"
                                    />
                                </div>
                            </div>

                            {/* Button */}
                            <div className="flex-1 md:text-right">
                                <Link to='/login'> <Button
                                    label='Start Booking'
                                    className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
                                    onClick={() => {
                                        console.log({
                                            origin,
                                            destination,
                                            departureDate,
                                            returnDate
                                        });

                                    }}
                                >

                                </Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
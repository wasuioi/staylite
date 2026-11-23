interface Hotel{
    name: string;
    city: string;
    price: number;
    available: boolean;
}

interface HotelSearchCriteria{
    city: string;
    maxPrice?: number;
    availableOnly: boolean;
}

export function searchHotels(hotels: Hotel[], criteria: HotelSearchCriteria):
Hotel[] {
    return hotels.filter((hotel) =>
        hotel.city === criteria.city &&
        (criteria.maxPrice === undefined || hotel.price <= criteria.maxPrice) &&
        (!criteria.availableOnly || hotel.available)
    );
}
interface Hotel{
    name: string;
    city: string;
    price: number;
}

interface HotelSearchCriteria{
    city: string;
    maxPrice?: number;
}

export function searchHotels(hotels: Hotel[], criteria: HotelSearchCriteria):
Hotel[] {
    return hotels.filter((hotel) =>
        hotel.city === criteria.city &&
        (criteria.maxPrice === undefined || hotel.price <= criteria.maxPrice)
    );
}
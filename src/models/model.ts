export interface FlightContentModels {
    status: "AVAILABLE" | "ERROR";
    price: number;
    currency: string;
}

export interface Flight {
    arrivalDateTimeDisplay: string;
    departureDateTimeDisplay: string;
    destinationAirport: Airport;
    originAirport: Airport;
    flightDuration: string;
    fareCategories: FareCategories;
}

export interface Airport {
    city: City;
    code: string;
    country: Country;
    name: string;
}

export interface City {
    code: string;
    name: string;
}

export interface Country {
    code: string;
    name: string;
}

export interface FareCategories {
    BUSINESS: FareCategory;
    ECONOMY: FareCategory;
}

export interface FareCategory {
    subcategories: SubCategory[];
}

export interface SubCategory {
    brandCode: string;
    order: number;
    status: "AVAILABLE" | "ERROR";
    price: Price;
    rights: string[];
}

export interface Price {
    amount: number;
    currency: string;
}
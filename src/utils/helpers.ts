export function flightsSortByEco(data: any) {
    let flightsCopy = [...data];
    const sortedFlights = flightsCopy.sort((a: any, b: any) => {
      const aPrice = a.fareCategories?.ECONOMY?.subcategories[0]?.price.amount;
      const bPrice = b.fareCategories?.ECONOMY?.subcategories[0]?.price.amount;

      return aPrice - bPrice;
    });

    return sortedFlights;
  }

export function flightsSortByDepartureTime(data: any) {
    const copyData = [...data];
    const sortedFlights = copyData.sort((a: any, b: any) => {
      const parseTime = (time: string) => {
        const [hours, minutes] = time.split(":").map(Number);
        const date = new Date(2024, 1, 1, hours, minutes, 0);
        return date;
      };

      const departureA = parseTime(a.departureDateTimeDisplay);
      const departureB = parseTime(b.departureDateTimeDisplay);

      return departureA.getTime() - departureB.getTime();
    });

    return sortedFlights;
  }

export function appliedPromotionFlights(flights: any) {
  let copyFlightsData = [...flights];

  return copyFlightsData.map((flight: any) => {
    const applyDiscountToEcoFly = (fareCategory: any) => {
      if (!fareCategory) return null;

      const updatedSubcategories = fareCategory.subcategories.map(
        (subcategory: any) => {
          if (subcategory.brandCode === "ecoFly") {
            return {
              ...subcategory,
              price: {
                ...subcategory.price,
                amount: subcategory.price.amount / 2,
              },
            };
          }
          return subcategory;
        }
      );

      return {
        ...fareCategory,
        subcategories: updatedSubcategories,
      };
    };

    const updatedEconomy = applyDiscountToEcoFly(flight.fareCategories?.ECONOMY);
    const updatedBusiness = applyDiscountToEcoFly(flight.fareCategories?.BUSINESS);

    return {
      ...flight,
      fareCategories: {
        ...flight.fareCategories,
        ECONOMY: updatedEconomy || flight.fareCategories?.ECONOMY,
        BUSINESS: updatedBusiness || flight.fareCategories?.BUSINESS,
      },
    };
  });
}
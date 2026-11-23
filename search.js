import { searchHotels } from "./work/build/hotel-search.js";

const checkInInput = document.querySelector("#check-in")
const checkOutInput = document.querySelector("#check-out")
const searchForm = document.querySelector("#search-form")
const destinationInput = document.querySelector("#destination")
const searchSummary = document.querySelector("#search-summary")
const hotelResults = document.querySelector("#hotel-results")
const maxPriceInput= document.querySelector("#max-price")
const availableOnlyInput = document.querySelector("#available-only")



const hotels = [
    {name: "Siam", city: "Bangkok", price: 100, available: true},
    {name: "silom", city: "Bangkok", price: 100, available: false},
    {name: "Some Where", city: "Chiang Mai", price: 50, available: true}
]

checkInInput.addEventListener("change", () => {
    console.log(checkInInput.value)
    const nextDate = checkInInput.valueAsDate;
    if(nextDate === null){
        checkOutInput.min = ""
        return;
    }
    nextDate.setUTCDate(nextDate.getUTCDate()+1)
    checkOutInput.min = nextDate.toISOString().slice(0,10)
    if(checkOutInput.value !== "" && checkOutInput.min > checkOutInput.value)
        checkOutInput.value = ""
    console.log(checkOutInput.min)
    
});

searchForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const destination = destinationInput.value
    const maxPrice = maxPriceInput.valueAsNumber
    const criteria = {
        city: destination,
        availableOnly: availableOnlyInput.checked
    }

    if(!Number.isNaN(maxPrice)) {
        criteria.maxPrice = maxPrice
    }

    searchSummary.textContent = `ผลการค้นหาสำหรับ ${destination}`
    const matchingHotels = searchHotels(hotels, criteria)
    console.log(matchingHotels)

    hotelResults.textContent = "";
    if(matchingHotels.length === 0){
        searchSummary.textContent = `ไม่พบที่พัก ${destination}`
    }else{
        for(const hotel of matchingHotels){
            const item = document.createElement("li")
            item.classList.add("hotel-result")

            const name = document.createElement("strong")
            name.textContent = hotel.name

            const city = document.createElement("p")
            city.textContent = hotel.city

            const price = document.createElement("p")
            price.textContent = `${hotel.price} บาทต่อคืน`

            const availability = document.createElement("p")
            availability.textContent = hotel.available ? "มีห้องว่าง" : "ห้องเต็ม";

            item.append(name,city,price,availability)
            hotelResults.append(item)
        }
    }
    console.log(maxPriceInput.value, typeof maxPriceInput.value)
    console.log(maxPriceInput.valueAsNumber, typeof
        maxPriceInput.valueAsNumber
    )

    console.log(availableOnlyInput.checked)
})
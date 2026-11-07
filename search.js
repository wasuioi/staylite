const checkInInput = document.querySelector("#check-in")
const checkOutInput = document.querySelector("#check-out")
const searchForm = document.querySelector("#search-form")
const destinationInput = document.querySelector("#destination")
const searchSummary = document.querySelector("#search-summary")
const hotelResults = document.querySelector("#hotel-results")

const hotels = [
    {name: "Siam", city: "Bangkok"},
    {name: "Some Where", city: "Chiang Mai"}
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

    const destination = destinationInput.value;
    searchSummary.textContent = `ผลการค้นหาสำหรับ ${destination}`
    const matchingHotels = hotels.filter((hotel) => hotel.city === destination)
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

            item.append(name,city)
            hotelResults.append(item)
        }
    }
})
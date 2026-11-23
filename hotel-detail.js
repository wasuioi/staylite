import { hotels } from "./hotels.js"

const hotelName = document.querySelector("#hotel-name")
const hotelCity = document.querySelector("#hotel-city")
const hotelPrice = document.querySelector("#hotel-price")
const hotelAvailability = document.querySelector("#hotel-availability")

const params = new URLSearchParams(window.location.search)
const hotelId = params.get("id")

console.log(hotelId)
console.log(typeof hotelId)

if(hotelId === null || hotelId.trim() === ""){
    hotelName.textContent = "ไม่ได้ระบุที่พัก"
} else {
    const selectedId = Number(hotelId)
    const selectedHotel = hotels.find((hotel) => hotel.id === selectedId)

    if(selectedHotel === undefined){
        hotelName.textContent = "ไม่พบที่พัก"
    } else {
        hotelName.textContent = selectedHotel.name
        hotelCity.textContent = selectedHotel.city
        hotelPrice.textContent = `${selectedHotel.price} บาทต่อคืน`
        hotelAvailability.textContent = selectedHotel.available ? "มีห้องว่าง" : "ห้องเต็ม"
    }
    console.log(selectedHotel)
}
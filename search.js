const checkInInput = document.querySelector("#check-in")
const checkOutInput = document.querySelector("#check-out")

checkInInput.addEventListener("change", () => {
    console.log(checkInInput.value)
    const nextDate = checkInInput.valueAsDate;
    if(nextDate === null){
        checkOutInput.min = ""
        return;
    }
    nextDate.setUTCDate(nextDate.getUTCDate()+1)
    checkOutInput.min = nextDate.toISOString().slice(0,10)
        console.log(checkOutInput.min)
    
});
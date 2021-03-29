
class Phone {
    call(phone_number) {
        console.log("Calling....");
    }
    taking_photo() {
        console.log("photo has been taken. Check your album.");
    }
}

let landLine = new Phone();
landLine.taking_photo();
// landLine can't take photo

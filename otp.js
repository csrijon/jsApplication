function otpGenare() {
    let digits= '0123456789'
    let otp =''
    let len = digits.length
    for (let i = 0; i <5; i++) {
        otp+= digits[Math.floor(Math.random()*len)]
        
    }
    return otp;
    
}    
console.log("The five Digits otp is :")
console.log(otpGenare())
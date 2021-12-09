const bdayInput = document.querySelector("#date"),
      checkBtn  = document.querySelector(".btn"),
      ouputDiv  = document.querySelector("#output");

const populateOutput = (text) =>{
    ouputDiv.innerHTML = text;
}

const dateToString = (date) =>{
    return date.split("-").join("")
}

const reverse = (text) =>{
    let str = text
    let charList = str.split(''); 
    let reversedList = charList.reverse() 
    return reversedList.join('')
}

const checkPalindrome = (text) => {
    return text === reverse(text)
}

checkBtn.addEventListener("click",()=>{
    let bday = bdayInput.value
    if(bday==="") populateOutput("<span id=\"error\">Please provide valid input</span>");
    else{
        bday = dateToString(bday)
        let result  = checkPalindrome(bday)
        if(result) populateOutput("Yay! It's a palindrome!")
        else populateOutput("oh snap! It's not a palindrome!")
    }
})
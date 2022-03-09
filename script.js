const txtInput = document.querySelector(".inputs input"),
checkBtn = document.querySelector(".inputs button"),
infoTxt = document.querySelector(".info-text");
let filterInput;


checkBtn.addEventListener("click", () =>{

    infoTxt.style.display = "block";
    

    // splitting user input character and join  them in a single line
    let reverseInput = filterInput.split("").reverse().join("");

    if(filterInput != reverseInput){
        return infoTxt.innerHTML = ` No, <span>'${txtInput.value}'</span> isn't  a Palindrome!`;

        // return  console.log("Not Palindrome ");
    }

    return infoTxt.innerHTML = ` Yes, <span>'${txtInput.value}'</span> It's a Palindrome!`;

    // console.log("Yes! Palindrome");
});




txtInput.addEventListener("keyup", () => {

    // removing spaces and all special character from entered value
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");

    if(filterInput){
        return checkBtn.classList.add("active");
    }
    checkBtn.classList.remove("active");
    infoTxt.style.display = "none";
})
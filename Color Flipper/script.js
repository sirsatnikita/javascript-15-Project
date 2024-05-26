// const colors = ["green", "red", "pink", "violet", "yellow", "brown", "rgba(133,122,200)", "#f15025"];
//         const btn = document.getElementById("btn");
//         const color = document.querySelector(".color");

//         btn.addEventListener("click", function () {
//             const randomNumber = getRandomNumber();
//             console.log(randomNumber);

//             document.body.style.background = colors[randomNumber];
//             color.textContent = colors[randomNumber];
//         });

//         function getRandomNumber() {
//             return Math.floor(Math.random() * colors.length);
//         }

console.log('Script Loaded'); // Check if script is loaded

const colors = ["maroon", "navy", "olive","rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

console.log(btn, color); // Check if elements are selected correctly

btn.addEventListener("click", function() {
    const randomnumber = getRandomNumber();
    console.log('Button Clicked', randomnumber); // Check if button click is detected

    document.body.style.backgroundColor = colors[randomnumber];
    color.textContent = colors[randomnumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

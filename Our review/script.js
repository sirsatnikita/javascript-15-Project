// // const review = [
// //     {
// //         id:1,
// //         name:"mithali raj",
// //         job:"Cricketer",
// //         img:
// //         "Our review/Mithali-Raj-Indian-Cricketer.jpg",
// //         text:"mifjr rgrywp ggfugh vfnfhbvgwo vfvfvjfnvfbvfhu v fufhowv vfbv owflvjvnf vuyursdnf vfuvf",
// //     },
// //     {
// //         id:2,
// //         name:"mithali raj",
// //         job:"Cricketer",
// //         img:
// //         "Our review/bussiness woman.png",
// //         text:"mifjr rgrywp ggfugh vfnfhbvgwo vfvfvjfnvfbvfhu v fufhowv vfbv owflvjvnf vuyursdnf vfuvf",  
// //     },
// //     {
// //         id:3,
// //         name:"mithali raj",
// //         job:"Cricketer",
// //         img:
// //         "Our review/women-achievers-of-india-8.jpg",
// //         text:"mifjr rgrywp ggfugh vfnfhbvgwo vfvfvjfnvfbvfhu v fufhowv vfbv owflvjvnf vuyursdnf vfuvf",    
// //     },
// // ];
// // const img = document.getElementById("person-img");
// // const author = document.getElementById("author");
// // const job = document.getElementById("job");
// // const info = document.getElementById("info");

// // const preBtn = document.querySelector(".prev-btn");
// // const nextBtn = document.querySelector(".next-btn");
// // const randomBtn = document.querySelector(".random-btn");

// // let currentItem=0;

// // window.addEventListener("DOMContentLoaded",function(){
// //    showPerson();
// // });
// // function showPerson(){
// //     const item = review[currentItem];
// //     img.src=item.img;
// //     author.textContent=item.name;
// //     job.textContent=item.job;
// //     info.textContent=item.text;
// // };
// // nextBtn.addEventListener("click",function(){
// //     currentItem++;
// //     if (currentItem > review.length-1){
// //     currentItem=0;
// //     }
// //     showPerson();
// // });
// // preBtn.addEventListener("click",function(){
// //     currentItem++;
// //     if (currentItem > review.length-1){
// //     currentItem=0;
// //     }
// //     showPerson();
// // });
// // randomBtn.addEventListener('click',function(){
// //     currentItem=Math.floor(Math.random()*review.length);
// //     console.log showPerson():void;
// //     showPerson();
// // });
// const review = [
//     {
//         id: 1,
//         name: "Mithali Raj",
//         job: "Cricketer",
//         img: "Our review/Mithali-Raj-Indian-Cricketer.jpg",
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//         id: 2,
//         name: "Mithali Raj",
//         job: "Cricketer",
//         img: "Our review/bussiness-woman.png",
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//         id: 3,
//         name: "Mithali Raj",
//         job: "Cricketer",
//         img: "Our review/women-achievers-of-india-8.jpg",
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
// ];

// const img = document.getElementById("person-img");
// const author = document.getElementById("author");
// const job = document.getElementById("job");
// const info = document.getElementById("info");

// const prevBtn = document.querySelector(".prev-btn");
// const nextBtn = document.querySelector(".next-btn");
// const randomBtn = document.querySelector(".random-btn");

// let currentItem = 0;

// window.addEventListener("DOMContentLoaded", function () {
//     showPerson();
// });

// function showPerson() {
//     const item = review[currentItem];
//     img.src = item.img;
//     author.textContent = item.name;
//     job.textContent = item.job;
//     info.textContent = item.text;
// }

// nextBtn.addEventListener("click", function () {
//     currentItem++;
//     if (currentItem > review.length - 1) {
//         currentItem = 0;
//     }
//     showPerson();
// });

// prevBtn.addEventListener("click", function () {
//     currentItem--;
//     if (currentItem < 0) {
//         currentItem = review.length - 1;
//     }
//     showPerson();
// });

// randomBtn.addEventListener("click", function () {
//     currentItem = Math.floor(Math.random() * review.length);
//     showPerson();
// });
const review = [
    {
        id: 1,
        name: "Smriti Mandhana",
        Profession: "Cricketer",
        img: "Mandhana.webp",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        name: "Indra Nooyi",
        Profession: "Entrepreneurs in India",
        img: "bussiness woman.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 3,
        name: "Kalpana Chawla",
        Profession: "astronaut and aerospace engineer",
        img: "kaplana chawla.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showPerson();
});

function showPerson() {
    const item = review[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > review.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = review.length - 1;
    }
    showPerson();
});

randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * review.length);
    showPerson();
});

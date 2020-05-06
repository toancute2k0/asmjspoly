// All animations will take exactly 500ms
// var scroll = new SmoothScroll('.navbar__menu a[href*="#"]', {
// 	speed: 8000
// });
//cuộn page
// const makeNavLinksSmooth = () => {
//     const navLinks = document.querySelectorAll(".navbar__link");

//     for (let n in navLinks) {
//         if (navLinks.hasOwnProperty(n)) {
//             navLinks[n].addEventListener('click', e => {
//                 e.preventDefault();
//                 document.querySelector(navLinks[n].hash)
//                 .scrollIntoView({
//                     behavior: "smooth"
//                 })
//             })
//         }
//     }
// }

// makeNavLinksSmooth();
//Truy xuất icon
const toTop = document.querySelector(".to-top");

window.addEventListener ("scroll", () => {
    if (window.pageYOffset > 390) {
        toTop.classList.add("active");
    }
    else {
        toTop.classList.remove("active");
    }
})

toTop.onclick = function(){
    // lấy chiều cao hiện tại của trang
    var chieucaoht = self.pageYOffset;
    var set = chieucaoht;
    //setInterval để xác định chiều cao sau mỗi giây
    var run = setInterval(function(){
        chieucaoht = chieucaoht - 0.05*set;
        window.scrollTo(0,chieucaoht);    
        if(chieucaoht <= 0){
            clearInterval(run);
        }        
    },20)
}
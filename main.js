const boxEL = document.querySelector('.box');
console.log(boxEL. textContent);
boxEL.textContent = "heropy"
console.log(boxEL.textContent);
/*

let boxEL = document.querySelector(".box");

console.log(boxEL);

boxEL.addEventListener("click", function() {
 console.log("click!!");
 boxEL.classList.add("active");
 console.log(
  boxEL.classList.contains("active")
 );
 boxEL.classList.remove("active");
 console.log(
  boxEL.classList.contains("active")
 );
});
*/




/*
const boxEL = document.querySelector(".box");
boxEL.classList.add("active");
let iscontains = boxEL.classList.contains("active");
console.log(iscontains); 

/*
//html 요소 1개 검색/찾기
const boxEL = document.querySelector(".box");

//html 요소에 적용 할 수 있는 메소드
boxEL.addEventListener();

//인수를 추가 가능!
boxEL.addEventListener(1,2);

//1- 이벤트
boxEL.addEventListener("click",2);

//2- 핸들러
boxEL.addEventListener("click", function(){
  console.log("click");
})
*/
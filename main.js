//main.js
console.log('hello');

//시간표시 함수
function showDate() {
let d =new Date();
// 년도 
let year = d.getFullYear();
//월(+1)
 let month = d.getMonth() +1; 
//일
 let date = d.getDate(); 
 
 document.getElementById('year').innerHTML = year;
 document.getElementById('month').innerHTML = month;
 document.getElementById('date').innerHTML = date;
 }

showDate();

//배경 바꾸기 함수
function changeBG(){
let arr =[
    'images/img-1.jpg',
    'images/img-2.jpg',
    'images/img-3.jpg',
    'images/img-4.jpg',
]

//랜덤값 생성
let i = Math.floor(Math.random() *4);

//배경 변경
document.body.style.backgroundImage = "url(" + arr[i] +")";
}

//일정 시간마다 자동으로 배경 바꾸기
// changeBG();
setInterval(changeBG, 2000); //콜백함수를 추가

setInterval(function(){

    let d =new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    console.log(h);

    // #hour문서객체(요소명)을 선택
    let hour = document.getElementById('hour');

    //문서에 시간 표시
    hour.innerHTML = h;

    //분
    let min = document.getElementById('min');
    min.innerHTML = m;

    //초
    let sec = document.getElementById('sec');
    sec.innerHTML = s;
}, 1000);


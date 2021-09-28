//main.js
const data = [
    {
        name: "본사",
       url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.0471487137293!2d127.12009375139131!3d37.4832137365533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357caf5f00000001%3A0x6296384ca4e09ab2!2z7ZmY7J247KCc7JW9KOyjvCk!5e0!3m2!1sko!2skr!4v1632813805791!5m2!1sko!2skr"
  

    },
    {
        name: "중앙연구소",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1587.0466722476924!2d127.04186107610344!3d37.29292147876551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5b60ee9c540d%3A0x4f48cdfa8c9dfd9e!2z6rK96riw64-E6rK97KCc6rO87ZWZ7KeE7Z2l7JuQ!5e0!3m2!1sko!2skr!4v1632813949361!5m2!1sko!2skr" 


    },
    {
        name: "서울연구소",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.0471487137293!2d127.12009375139131!3d37.4832137365533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357caf5f00000001%3A0x6296384ca4e09ab2!2z7ZmY7J247KCc7JW9KOyjvCk!5e0!3m2!1sko!2skr!4v1632813805791!5m2!1sko!2skr"


    },
    {
        name: "공장",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3185.6736117657447!2d127.24761565138303!3d37.01758216303262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b35abedbe184d%3A0x2f233a90b006df3b!2z6rK96riw64-EIOyViOyEseyLnCDslYjshLEz64-ZIOqzteuLqOuhnCA1MA!5e0!3m2!1sko!2skr!4v1632814004554!5m2!1sko!2skr"


    }
];

//지도 변경 함수(지도번호)
function changeMap(num){
    var name = data[num].name;
    var url = data[num].url;
    // console.log(name, url);

    $('#map iframe').attr('src',url);


    // 버튼 스타일 지움
    $('.tab-group .btn').removeClass('active');

    // 버튼 active
    $('.tab-group .btn').eq(num).addClass('active');
}
'use strict';

// 오늘날짜를 전역변수로 생성
const today = new Date();
const year = today.getFullYear(); // 연도 4자리
const month = today.getMonth() + 1; // 월(기존월보다 1자리 작다 (0부터 시작하기 때문에))
const date = today.getDate(); // 일
const hour = today.getHours(); // 시
const minute = today.getMinutes(); // 분
const second = today.getSeconds(); // 초
const yymmdd = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;

// 표준날짜 출력함수
// java에서, Date, Calendar객체 따로 존재 / JS에서, Date 객체 하나 존재
// 생성법은 java와 동일하게 new 로 생성
function fCheck1() {
  let date1 = new Date(); 
  console.log("date1 : " , date1);
  document.getElementById("demo").innerHTML = date1;
}

// 편집날짜 함수
function fCheck2() {
  let strDate = yymmdd;
  demo.innerHTML = strDate;
}

// 한글날짜 함수
function fCheck3() {
  let str = "";
  str += year + "년 ";
  str += month + "월 ";
  str += date + "일 ";

// 요일 getDay(); : 0(일) 1(월) 2(화) 3(수) 4(목) 5(금) 6(토)
  let week = ["일","월","화","수","목","금","토"];
  // str += today.getDay() + "요일"; // 숫자로 출력 따라서, 배열에 담아 한글로 바꿔줌
  str += week[today.getDay()] + "요일 ";

// 시간
// if) 버튼을 눌러서 시간을 계속 변경하게 하려면, fCheck함수 안에 넣어야 변경됨
  str += hour + "시 "; 
  str += minute + "분 "; 
  str += second + "초"; 

  demo.innerHTML = str;
}

// 시간 출력 함수(elapsed Time: 경과시간)
  function fCheck4() {
    // let strTime = today.getMilliseconds();
    // let startDate = new Date(2022, 11, 4);
    // let lastDate = new Date(2022, 11, 5);
    // let elapsedTime = lastDate.getTime() - startDate;
    
    let startDate = today.getTime();
    strTime = (today.getMilliseconds()) + "초";
    let strDate = elapsedTime / (60*60*24*1000); // (분*시간*하루(24시간)*초) // 시간비교 : 24 빼면 됨! (하루 대신 시간으로 얼마나 차이나는지 출력)
    demo.innerHTML = strDate;
  }
  
// 해당월의 마지막 일자 꺼내는 함수
  function fCheck5() {
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;

    // let strDate = today.getTime(); // 숫자로 시간 출력됨
    // let strTime = today.getMilliseconds();
    let str = new Date(year,month,0); // new Date(년,월,일,시,분,초)
    let strDate = str.getFullYear() + "-";
    strDate += (str.getMonth()+1) + "-";
    strDate += str.getDate();
    strDate = "해당월의 마지막 일자는 : " + strDate;
    demo.innerHTML = strDate;
  }

// 오늘날짜(yyyy-mm-dd) 형식으로 꺼내는 함수
  function fCheck6() {
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;
    let str = new Date(year,month,0); // new Date(년,월,일,시,분,초)
    let strDate = str.getFullYear() + "-";
    
    strDate += (str.getMonth()+1) + "-";
    strDate += str.getDate();

    for(let i=1 ; i<10 ; i++) {
      if (date == "i") { 
        date = "0"+ i; 
      }
    }

    /*선생님 방법*/
    // let strDate = year + "-" + month + "-" + date;
    // let fmtDate = strDate.split("-");
    // let yy = fmtDate[0];
    // let mm = ('0' + fmtDate[1]).slice(-2); // 2월 -> 02월 변경 : 02 -> 002 (뒤에서 2자리만 자르면 됨)
    // let dd = ('0' + fmtDate[2]).slice(-2); // 2일 -> 02일 변경
    // strDate = yy + "-" + mm + "-" + dd;
    demo.innerHTML = strDate;
  }

  // 해당월의 마지막 일자(yyyy-mm-dd) 형식으로 꺼내는 함수 만들기!!!
  function fCheck7() {
    
  }
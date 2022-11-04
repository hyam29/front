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

// 시스템날짜를 가져와 폼에 출력
function dateBring() {
  document.getElementById("startDate").value = yymmdd;
}

// 날짜 비교 함수
function compareDate() {
  let start = document.getElementById("startDate").value; // 2022-2-5 / 년, 월, 일
  let end = document.getElementById("endDate").value;

  // 날짜를 비교하니까, 날짜객체 생성 (문자로 들어온 값을 날짜로 변경)
  const startDate = new Date(start);
  const endDate = new Date(end);

  let result;
  
  // 비교를 위해 함수 만들기 -> isSameDay(startDate, endDate)
  if(isSameDay(startDate, endDate)) {
    result = "입력된 날짜는 같습니다."
  }
  else {
    result = "입력된 날짜는 다릅니다."
  }
  document.getElementById("demo").innerHTML = result;
}

// 비교함수 생성
// === (완전 일치(타입까지 일치)) => 0(false) or 1(true) 나옴
function isSameDay(startDate, endDate) {
  return  startDate.getFullYear() === endDate.getFullYear() && 
          startDate.getMonth() === endDate.getMonth() && 
          startDate.getDate() === endDate.getDate();
}

function compareDate2() {
  let start = document.getElementById("startDate").value;
  let end = document.getElementById("endDate").value;

  const startDate = new Date(start);
  const endDate = new Date(end);

  // 날짜형식데이터를 시간(1/1000초)로 바꿔서 연산처리한다.
  // getTime이 분,시,일 을 모두 milionsecond로 나타내기 때문에, 57행 작성
  let elapsedTime = endDate.getTime() - startDate.getTime();
  let strDate = elapsedTime / (60*60*24*1000); // (분(60초)*1시간(60분)*하루(24시간)*초) // 날(day)수로 변경
  //if) 시간(hour) 비교를 하고 싶다면, 57행에서 (60*60*1000) 작성하면 됨
  strDate = strDate.toFixed(0); // 소수점 시간 반올림
  document.getElementById("demo").innerHTML = strDate;
}

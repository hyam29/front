'use strict';

function regexCheck() {
  //정규표현식 만들기
  const regex1 = /atom/gm; // 문자열이 포함되어 있다면? -> true, 없으면 false
  const regex2 = /mbc|kbs|sbs/g; // JS에서, or = | (java 에선, ||) / gs가 디폴트...
  const regex3 = /홍길(동|순)/g; // 홍길동, 홍길순이 있느냐?
  const regex4 = /[a-z]/g; // 영문 소문자를 포함했니?
  const regex5 = /[^a-z]/g; // 영문 소문자 외 다른 문자를 포함했니?
  const regex6 = /[A-Z]/g; // 영문 대문자를 포함했니?
  const regex7 = /[^A-Z]/g; // 영문 대문자 외 다른 문자를 포함했니?
  const regex8 = /[0-9]/g; // 숫자를 포함하고 있니?
  const regex9 = /[^0-9]/g; // 숫자외 다른 문자를 포함하고 있니?
  const regex10 = /[가-힣]/g; // 한글 포함하고 있니?
  const regex11 = /[a-zA-Z0-9]/g; // 영문 '대/소문자' 나 '숫자'가 포함되어 있어?
  const regex12 = /[^a-zA-Z0-9]/g; // 영문 '대/소문자' 나 '숫자' 외 다른 문자를 포함하고 있어?
  const regex13 = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.*[가-힣])(?!.*[~`!@#$%^&*()\[\]{}'"\-+=<>?,./;])(?!.*[\u0000-\u001F|\u0080-\u10FF|\u1200-\u312F|\u3190-\uABFF|\uD7A4-\uFFFF|\u3130-\u318F])/g;
  const regex14 = /\./g; // 문자열 중에서 점(.)이 있느냐?
  const regex15 = /\d/g; // 숫자를 포함하고 있니?
    // d{2,3} : 2글자부터 3글자까지! [a-z]{2,20} : 영어 2글자부터 20글자까지 의미
  const regex16 = /\D/g; // 숫자를 포함하고 있지 않니?
  const regex17 = /\w/g; // 영문자/숫자/_ 을 포함하고 있니?
  const regex18 = /\W/g; // 영문자/숫자/_ 을 포함하고 있지 않니?
  const regex19 = /\s/g; // 문장 안에 공백을 포함하고 있니? or tab을 포함하니?

  // 와일드카드 (?),(+) : 1개글자에 대한 포함유무 => (?) , 복수개문자에 대한 포함유무 => 1(+) , (*)
  const regex20 = /홍길동?안녕/g; // '홍길동'의 '동' -> '1개' 글자의 포함 여부? (있어도 되고, 없어도 됨)
  const regex21 = /홍길동+안녕/g; // '홍길동'의 '동' -> '1개 이상' 글자의 포함 여부? (있어도 되고, 없어도 됨)
  const regex22 = /홍길동*안녕/g; // '홍길동'의 '동' -> '0개 이상' 글자의 포함 여부? (있어도 되고, 없어도 됨)


  let content = document.getElementById("content").value;

  //정규표현식 실행
  if(content.trim() == "") {
    alert("문자열을 입력하세요.")
    return; // = return false; (false가 디폴트) 문자열 입력하면 더이상 if문 실행할 필요없으니까 return을 작성해줌으로써 if문 작업 종료시켜줌
  }
  else if(!content.match(regex1)) {
    alert("1. atom문자열을 포함하고 있지 않습니다.")
    return false;    
  }
  // else if(!content.match(regex2)) {
  //   alert("2. mbc/kbs/sbs 문자열을 포함하고 있지 않습니다.")
  //   return;
  // }
  // else if(!content.match(regex3)) {
  //   alert("3. 홍길동 또는 홍길순 문자열을 포함하고 있지 않습니다.")
  //   return;
  // }
  // else if(!content.match(regex4)) {
  //   alert("4. 소문자가 포함되어 있지 않습니다.")
  //   return;
  // }
  // else if(regex5.test(content)) {
  //   alert("5. 영어 소문자 외 다른 문자를 포함하고 있습니다.")
  //   return;
  // }
  // else if(!regex6.test(content)) {
  //   alert("6. 영어 대문자 외 다른 문자를 포함하고 있습니다. ")
  //   return;
  // }
  // else if(regex7.test(content)) {
  //   alert("7. 영어 대문자 외 다른 문자를 포함하고 있습니다.")
  //   return;
  // }
  // else if(!regex8.test(content)) {
  //   alert("8. 숫자 외 다른 문자가 포함되어 있습니다.")
  //   return;
  // }
  // else if(regex9.test(content)) {
  //   alert("9. 숫자 외 다른 문자를 포함하고 있습니다.")
  //   return;
  // }
  // else if(!regex10.test(content)) {
  //   alert("10. 한글 외 다른문자를 포함하고 있습니다.")
  //   return;
  // }
  // else if(!regex11.test(content)) {
  //   alert("11. 영문 '대/소문자' 나 숫자 외 다른 문자를 포함하고 있습니다.")
  //   return;
  // }
  // else if(regex12.test(content)) {
  //   alert("12. 영문 '대/소문자' 나 숫자 외 다른 문자를 포함하고 있습니다.")
  //   return;
  // }
  else if(!regex13.test(content)) {
    alert("13. 영문 '대/소문자' 와 숫자만 포함되어야 합니다.")
    return;
  }
  // else if(!regex13.test(content)) {
  //   alert("14. '.' 이 포함되어 있지 않습니다.")
  //   return;
  // }


  alert("작업 끝");
  document.getElementById("content").focus();
}
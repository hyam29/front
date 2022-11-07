'use strict';

// 클래스 만들기
class Member {
  // 생성자
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }

  // getters 생성 + 호출 때 필요한 this. 뒤에 언더바(_) 추가
  get name() {
    return this._name; 
  }
  get age() {
    return this._age;
  }
  get color() {
    return this._color;
  }

  // setters 생성
  set name(name) {
    this._name = name;
  }
  set age(age) {
    this._age = (age < 1) ? age * (-1) : age; // 삼항연산자
  }
  set color(color) {
    if(color == "껌정" || color == "블랙" || color == "흑색" || color == "까망" || color == "깜정" ) {
      this._color = "검정"
    }
    else {
      this._color = color;
    }
  }

  // 메소드
  memberPrint() {
    console.log("성명 : " + this.name + "나이 : " + this.age + "좋아하는 색깔 : " + this.color );
  }
}
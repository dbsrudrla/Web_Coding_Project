// dynamic이라는 아이디를 가진 문서 객체를 선택 
let target = document.querySelector("#dynamic");

function randomString(){
    // 배열 변수 
    let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to JavaScript", "Learn to Python", "Learn to Ruby"];

    // 배열 문자를 랜덤하게 선택 (Math.random * 4 : 4 미만의 랜덤 숫자 생성)
    // Math.floor를 이용하여 소수점을 버림
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];

    // 선택된 문자를 다시 배열로 만들어줌
    // split("") : 단어 하나하나를 쪼개서 배열로 만들어줌
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

// 타이핑 리셋
function resetTyping(){
    target.textContent = "";

    dynamic(randomString());
}

// 한 글자씩 텍스트 출력
function dynamic(randomArr) {
    if (randomArr.length > 0){
        // randomArr의 앞부터 빼내서 출력
        target.textContent += randomArr.shift();
        // 만약 randomArr이 0보다 크면 다시 호출
        // randomArr이 0보다 클 때까지는 함수가 반복적으로 호출됨
        setTimeout(function(){
            dynamic(randomArr);
        }, 80);
    }else {
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());

// 커서 깜박임 효과

// active라는 클래스가 추가되었다가 빠졌다가 하는 속성을 넣음
function blink() {
    target.classList.toggle("active");
}
// setInterval : 반복 함수
setInterval(blink, 500);

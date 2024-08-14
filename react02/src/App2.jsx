
function App2(){
    // 실습 순서 : prompt로 이름 입력받기 >> 현재날짜 >> 달별로 계절 설정
    const Name = prompt("이름을 말해주세요");

    const date = new Date();
    // console.log(date.getMonth());
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth()+1;
    const currentDate = date.getDate();

    let season = "";
    if (currentMonth >= 3 && currentMonth <= 5){
        season = "봄";
         } else if (currentMonth >= 6 && currentMonth <= 8){
            season = "여름";
         } else if (currentMonth >= 9 && currentMonth <= 11) {
            season = "가을";
         } else {
            season = "겨울";}
        
            let myStyle ={
                color : 'red'
            }
    return(
        <div>
            <h1>{currentYear}.{currentMonth}.{currentDate}</h1>
            <hr></hr>

            <p>{Name}님 지금은 {season} 입니다.
                좋은하루 보내세요
            </p>

            {/* JSX 문법에서 자주 사용되어지는 방법
            1. style 적용
            inline(태그안에) 적용시, 객체 형식으로 적용해야 함

            2. 삼항연산자
                : html에서 중괄호는 출력하기 위한 것 >> 중괄호 안에 if조건문 사용x
                 >> html에서 조건에 따른 출력문을 보여주고 싶다면, 삼항연산자 사용!
            */}

            {/* 하은을 제외한 다른 사람은 야근 */}
            { Name === '하은'? 
            <div>
            <h1>칼퇴</h1>
            <h1 style={myStyle}>오늘은 월요일</h1>
            </div>
             : 
             <h1>야근</h1>}

        </div>
    )
}
export default App2;
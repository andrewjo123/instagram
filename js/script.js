document.addEventListener("DOMContentLoaded",function(e){
    // 설정버튼 찾기 querySelector는 첫번째꺼 하나만 all은 전부 배열로 리턴됨
    let configID =document.querySelector("#id");
    let idText=document.querySelector("#id span");

    configID.addEventListener("click",
        function(e){
            idText.textContent=prompt("새로운 아이디를 입력하세요.")
        });
    });
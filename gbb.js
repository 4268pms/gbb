    //가위 바위 보
    var p = 0;
    var playerCommand = prompt("가위,바위,보중에 하나를 입력하세요");

    if(playerCommand == "가위"){
        document.write("My:가위");
        p = 1;
    }else if(playerCommand == "바위"){
        document.write("My:바위");
        p = 2;
        
    }else if(playerCommand == "보"){
        document.write("My:보");
        p = 3;
    }


    var c = Math.floor(Math.random() * 3) + 1; 
    if(c==1){
        c = 1
        document.write("<br>"+"Com:가위");

        
    }
    if(c==2){
        c = 2
        document.write("<br>"+"Com:바위");
    }
    if(c==3){
        c = 3
        document.write("<br>"+"Com:보");
    }

    if(c==1 && p==2 || c==2 && p==3 || c==3 && p==1){
        document.write("<br>"+"이겼습니다");
    }
    if(c==1 && p==3 || c==2 && p==1 || c==3 && p==2){
        document.write("<br>"+"졌습니다");
    }
    if(c==1 && p==1 || c==2 && p==2 || c==3 && p==3){
        document.write("<br>"+"비겼습니다");
    }
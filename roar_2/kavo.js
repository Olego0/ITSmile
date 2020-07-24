const db = {
    1:{},
    2:{},
    3:{},
    4:{}
}

let points=0;
let points1=0;

let a;
let b;
let c;
let ok4=true;
let ok2=true;
let ok3=true;


function mathQuizEasy() {
    let pass="";
    let q="";
    let x="My points";
    while (pass!=null) {
        pass= prompt('Password?');
        for (let key2 in db) {
            if (pass==key2) {
                while(ok4==true){
                    q=Math.floor(Math.random()*3);
                    w="";
                    if(q==0){
                        a=Math.floor(2+Math.random()*7);
                        b=Math.floor(2+Math.random()*7);
                        c=a*b;
                        w=prompt(a+"*"+b+'=?');
                        if (w==c&&w!=null) {
                            confirm("You won 1 point!");
                            points1++;
                        }else if(w!=null){
                            confirm("You lost 1 point!");
                            points1--;
                        }
                        
                    }

                    if(q==1){
                        a=Math.floor(2+Math.random()*19);
                        b=Math.floor(2+Math.random()*19);
                        c=a+b;
                        w=prompt(a+"+"+b+'=?');
                        if (w==c&&w!=null) {
                            confirm("You won 1 point!");
                            points1++;
                            
                            
                        }else if(w!=null){
                            confirm("You lost 1 point!");
                            points1--;
                        }
                        
                    }

                    if(q==2){
                        a=Math.floor(2+Math.random()*19);
                        b=Math.floor(2+Math.random()*19);
                        if(a<b){
                            c=b-a;
                            w=prompt(b+"-"+a+'=?');
                        }else{
                            c=a-b;
                            w=prompt(a+"-"+b+'=?');
                        }
                        if (w==c&&w!=null) {
                            confirm("You won 1 point!");
                            points1++;
                        }else if(w!=null){
                            confirm("You lost 1 point!");
                            points1--;
                        }
                        
                    }
                    ok4=confirm("One more?");
                    db[key2][x]=points1;
                    console.log(db);
                    document.getElementById("1").innerHTML="Yor ballance is "+points1+' points';
                }
                    
                
                break;
            }
            
        }
        
    }
}

    


function mathQuizNormal() {
    let pass="";
    let q="";
    let x="My points";
    while (pass!=null) {
        pass= prompt('Password?');
        for (let key3 in db) {
            if (pass==key3) {
                while (ok2==true) {
                    q=Math.floor(Math.random()*3);
                    w="";
                    if(q==0){
                        a=Math.floor(10+Math.random()*10);
                        b=Math.floor(10+Math.random()*10);
                        c=a*b;
                        w=prompt(a+"*"+b+'=?');
                        if (w==c&&w!=null) {
                            confirm("You won 2 points!");
                            points1+=2;
                        }else if(w!=null){
                            confirm("You lost 2 points!");
                            points1-=2;
                        }
                        
                    }

                    if(q==1){
                        a=Math.floor(10+Math.random()*91);
                        b=Math.floor(10+Math.random()*91);
                        c=a+b;
                        w=prompt(a+"+"+b+'=?');
                        if (w==c&&w!=null) {
                            confirm("You won 2 points!");
                            points1+=2
                        }else if(w!=null){
                            confirm("You lost 2 points!");
                            points1-=2
                        }
                        
                    }

                    if(q==2){
                        a=Math.floor(10+Math.random()*91);
                        b=Math.floor(10+Math.random()*91);
                        if(a<b){
                            c=b-a;
                            w=prompt(b+"-"+a+'=?');
                        }else{
                            c=a-b;
                            w=prompt(a+"-"+b+'=?');
                        }
                        if (w==c&&w!=null) {
                            confirm("You won 2 point!");
                            points1+=2
                        }else if(w!=null){
                            confirm("You lost 2 point!");
                            points1-=2
                        }
                        
                    }
                    ok2=confirm("One more?");
                    db[key3][x]=points1;
                    console.log(db);
                    document.getElementById("1").innerHTML="Yor ballance is "+points1+' points';
                }
                    
                
                break;
            }
            
        }
        
    }
        
}
    


function mathQuizHard() {
    let pass="";
    let q="";
    let x="My points";
    while (pass!=null) {
        pass= prompt('Password?');
        for (let key4 in db) {
            if (pass==key4) {
                while(ok3==true){
                    q=Math.floor(Math.random()*3);
                    w="";
                    if(q==0){
                        a=Math.floor(1+Math.random()*100);
                        b=Math.floor(1+Math.random()*100);
                        c=a*b;
                        w=prompt(a+"*"+b+'=?');
                        if (w==c&&w!=null) {
                            confirm("You won 5 points!");
                            points1+=5;
                        }else if(w!=null){
                            confirm("You lost 5 points!");
                            points1-=5;
                        }
                        
                    }

                    if(q==1){
                        a=Math.floor(100+Math.random()*901);
                        b=Math.floor(100+Math.random()*901);
                        c=a+b;
                        w=prompt(a+"+"+b+'=?');
                        if (w==c&&w!=null) {
                            confirm("You won 5 points!");
                            points1+=5;
                        }else if(w!=null){
                            confirm("You lost 5 points!");
                            points1-=5;
                        }
                        
                    }

                    if(q==2){
                        a=Math.floor(100+Math.random()*901);
                        b=Math.floor(100+Math.random()*901);
                        if(a<b){
                            c=b-a;
                            w=prompt(b+"-"+a+'=?');
                        }else{
                            c=a-b;
                            w=prompt(a+"-"+b+'=?');
                        }
                        if (w==c&&w!=null) {
                            confirm("You won 5 points!");
                            points1+=5;
                        }else if(w!=null){
                            confirm("You lost 5 points!");
                            points1-=5;
                        }
                        
                    }
                    ok3=confirm("One more?");
                    db[key4][x]=points1;
                    console.log(db);
                    document.getElementById("1").innerHTML="Yor ballance is "+points1+' points';
                }
                    
                
                break;
            }
            
        }
        
    }
        
}


function mathQuizUltraHard() {
    let pass="";
    let q="";
    let x="My points";
    while (pass!=null) {
        pass= prompt('Password?');
        for (let key5 in db) {
            if (pass==key5) {
                while(ok3==true){
                    q=0;
                    w="";
                    if(q==0){
                        a=Math.floor(2+Math.random()*20);
                        c=a*a;
                        w=prompt(a+'^2=?');
                        if (w==c&&w!=null) {
                            confirm("You won 15 points!");
                            points1+=15;
                        }else if(w!=null){
                            confirm("You lost 15 points!");
                            points1-=15;
                        }
                        
                    }
                    ok3=confirm("One more?");
                    db[key5][x]=points1;
                    console.log(db);
                    document.getElementById("1").innerHTML="Yor ballance is "+points1+' points';
                }
                    
                
                break;
            }
            
        }
        
    }
        
}



function RandomLevel() {
    let ggg=Math.floor(Math.random()*4);
    if (ggg==0) {
        mathQuizEasy();
    }
    if (ggg==1) {
        mathQuizNormal();
    }
    if (ggg==2) {
        mathQuizHard();
    }
    if (ggg==3) {
        mathQuizUltraHard();
    } 
}
    
function AskLevel() {

    let gg=prompt("What level do you want to play at?(easy - 0, ..., Ultra Hard - 3");
    
    if (gg==0) {
        mathQuizEasy();
    }
    if (gg==1) {
        mathQuizNormal();
    }
    if (gg==2) {
        mathQuizHard();
    }
    if (gg==3) {
        mathQuizUltraHard();
    }
}

function start(){
    let btn = document.getElementById("btn1").style.display = "none";
    let btn1 = document.getElementById("btn2").style.display = "inline-block";
    let btn2 = document.getElementById("btn3").style.display = "inline-block";
    let btn3 = document.getElementById("btn4").style.display = "inline-block";
    // console.log(btnOne);

}

function play() {
    let pass="";
    let number="";
    let bet="";
    let x="My points";

    while (pass!=null) {
        pass= prompt('Password?');
        for (let key in db) {
            if (pass==key) {
                while(true){
                    number=prompt("your number?");
                    if (number==null){
                        break;
                    }

                    bet=prompt("bet?");

                    db[key][number]=bet;
                    
                }
                break
            }
            
        }
        
    }
    let a=Math.floor(Math.random()*37);
    for(key1 in db){
        if(typeof(db[key1])=='object'){
            for(let d in db[key1]){
                if(a==d){
                    console.log(`player ${key1} win ${db[key1][d]}*36 points`);
                    let y=bet*36;
                    points1+=y;
                    db[key1][x]=points1;
                    console.log(db);
                    document.getElementById("1").innerHTML="Yor ballance is "+points1+' points';
                    
                }else{
                    console.log(`player ${key1} lost. The number was ${a}`);
                    points1-=bet;
                    db[key1][x]=points1;
                    console.log(db);
                    document.getElementById("1").innerHTML="Yor ballance is "+points1+' points';
                    
                }
            } 
        }
    }
}
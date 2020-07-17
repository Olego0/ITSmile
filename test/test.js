const db = {
    1111:{},
    2222:{},
    3333:{},
    4444:{},
    5555:{},
    6666:{},
    7777:{}
};

function play(){
    
    let pass="";
    let number="";
    let bet="";

    while (pass!=null){
        pass=prompt("Write your pass")
        for (let key in db){
            if (pass==key){
                while(true){
                    number=prompt("Your number")
                    if (number==null){
                        break;
                    }

                    bet=prompt("Your bet in number")

                    db[key][number]=bet
                }
                break;
                }
            }
        }
        let a =Math.floor(Math.random()*11)
        for(let klue in db){
            if(typeof(db[klue])=='object'){
                for (let d in db[klue]){
                    if(a==d)
                    {
                        console.log(`player ${klue} win ${db[klue][d]*10}`);
                    }
                    else {
                        console.log(`player ${klue} lose. Number is ${a}`);
                    }
            }
        }
    }
}
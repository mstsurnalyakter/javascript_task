const friendMark = parseInt(prompt(`Enter your mark`));
const myMark = parseInt(prompt(`Enter my mark`));

if(myMark >= 80){
    if(friendMark >= 80){
        console.log(`We go a lunch`);
    }else{
        if(friendMark < 80 && friendMark >= 60){
            console.log(`Tell friend good luck`);
        }else{
            if(friendMark < 60 && friendMark >= 40){
                console.log(`Ignore friend message`);
            }else{
                if(friendMark < 40){
                    console.log(`Block friend`);
                }
            }
        }
    }
}else{
    console.log(`Go home and sleep and act sad`);
}
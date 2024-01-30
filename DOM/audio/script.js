const buttons = document.querySelectorAll(".btn");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click",(event)=> {
    let text = event.currentTarget.innerHTML;

    audioPlay(text);
  });
}


const audioPlay = (text) =>{
        switch (text) {
          case "a":
            let audio = new Audio("./audio1.mp3");
            audio.play();
            break;
          case "b":
            audio = new Audio("./audio2.mp3");
            audio.play();
            break;
          case "c":
            audio = new Audio("./audio1.mp3");
            audio.play();
            break;

          default:
            break;
        }
}
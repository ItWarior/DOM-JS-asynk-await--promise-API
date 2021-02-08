// setInterval || setTimeout
// timeoutHell
// setTimeout(() => {
//    console.log(1);
//    setTimeout(() => {
//       console.log(2);
//       setTimeout(() => {
//          console.log(3);
//          setTimeout(() => {
//             console.log("wiel don");
//          }, 4000);
//       }, 3000);
//    }, 2000);
// }, 1000);

// timer
// let second = 0;
// let minute = 0;
// let hour = 0;

// let time = document.createElement("div");
// document.body.appendChild(time);

// setInterval(() => {
//    second++;
//    time.innerText = `${hour} : ${minute} : ${second}`
//    console.log(hour,minute,second);
//    if (second === 60) {
//       minute++;
//       second = 0;
//       if (minute === 60) {
//          hour++;
//          minute = 0;
//       }
//    }
// }, 1000);
// setTimeout(()=>{
//     console.log("I am blocked...");
// },2000);
//
// console.log("I am not ");

const fetchData = (cb) => {
  setTimeout(() => {
    console.log("Timer-2  1-Sec");
    cb([1, 2, 3]);
  }, 1000);
};

setTimeout(() => {
  console.log("Timer-1 2 Sec");
  fetchData((text) => {
    console.log(text);
  });
}, 2000);

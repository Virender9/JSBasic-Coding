const myNum = document.querySelectorAll(".count");
// console.log(myNum);
let speed = 50;

myNum.forEach((myCount) => {
  let target_count = myCount.dataset.count;
  let init_count = +myCount.innerText;
  //   console.log(target_count);

  let incrementNum = Math.floor(target_count / speed); // diving the value with speed for exact speed
  const updateNum = () => {
    init_count += incrementNum;
    myCount.innerText = init_count; //accesing / pasting number to html
    if (init_count < target_count)
      setTimeout(() => {
        updateNum();
      }, 100); // 100 is speed of loop
  };

  updateNum(); //calling the function to update number
});

const counter = document.getElementById("counter");
const dec = document.getElementById("decrease");
const inc = document.getElementById("increase");
const reset = document.getElementById("reset");

let count = 0;
function updateCount() {
  counter.textContent = count;
}

function backgroundColor(){
    const color = '0123456789abcdef'
    let temp = '#'
    for(let i = 0; i < 6; i++){
        temp+= color[Math.floor(Math.random()*16)]
    }
    return temp;
}
inc.addEventListener("click", function () {
  count++;
  updateCount();
    document.body.style.backgroundColor = backgroundColor();
  console.log("increase btn is clicked");

});

dec.addEventListener("click", function () {
  if (count > 0) {
    count--;
    updateCount();
    document.body.style.backgroundColor = backgroundColor();
  }
  console.log("decrease btn is clicked");
})

reset.addEventListener("click", function () {
  if (count != 0) {
    count = 0;
    updateCount();
    document.body.style.backgroundColor = 'white';
  }

  console.log("reset btn is clicked");
});

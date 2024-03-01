
const random_color = ()=>{
  let val1 = Math.ceil(Math.random()*255);
  let val2 = Math.ceil(Math.random()*255);
  let val3 = Math.ceil(Math.random()*255);
  return `rgb(${val1},${val2},${val3})`
}

document.querySelectorAll('.box').forEach(e=>{
  e.style.color = random_color();
  e.style.background = random_color();
})




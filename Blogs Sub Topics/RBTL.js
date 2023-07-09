function changeBg() {
  const images = [
    'url("../Images/RBTL/BG1.jpg")',
    'url("../Images/RBTL/BG2.jpg")',
    'url("../Images/RBTL/BG4.jpg")',
    'url("../Images/RBTL/BG5.jpg")',
    'url("../Images/RBTL/BG7.jpg")',
  ]
  const section= document.querySelector('Top-Container')
  const bg = images[Math.floor(Math.random() *
  images.length)];
  section.style.backgroundImage = bg;

}
setInterval(changeBg,1000)

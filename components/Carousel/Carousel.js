/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carousel(){
  let carousel = document.createElement('div')
  carousel.classList.add('carousel')
  let leftBtn = document.createElement('div')
  leftBtn.classList.add('left-button')
  leftBtn.textContent = "<"
  carousel.appendChild(leftBtn)
  let img1 = document.createElement('img')
  let img2 = document.createElement('img')
  let img3 = document.createElement('img')
  let img4 = document.createElement('img')
  img1.setAttribute('src', "./assets/carousel/mountains.jpeg")
  img2.setAttribute('src', "./assets/carousel/computer.jpeg")
  img3.setAttribute('src', "./assets/carousel/trees.jpeg")
  img4.setAttribute('src', "./assets/carousel/turntable.jpeg")
  // img1.textContent = '\u25bc'
  // img2.textContent = '\u25bc'
  // img3.textContent = '\u25bc'
  // img4.textContent = '\u25bc'
  carousel.appendChild(img1)
  carousel.appendChild(img2)
  carousel.appendChild(img3)
  carousel.appendChild(img4)



  let rightBtn = document.createElement('div')
  rightBtn.classList.add('right-button')
  rightBtn.textContent = ">"
  carousel.appendChild(rightBtn)

  return carousel
}
// console.log(carousel())
// console.log('hi') 

document.querySelector('.carousel-container').appendChild(carousel())
document.querySelector('.right-button').addEventListener('click', () => {
  
  let div = document.querySelector('.carousel')
  let img = document.querySelectorAll('img')
  let prev = img[0]
  img[0].remove()
  console.log(img)
  div.appendChild(prev)
})
document.querySelector('.left-button').addEventListener('click', () => {
  
  let div = document.querySelector('.carousel')
  let img = document.querySelectorAll('img')
  let prev = img[2]
  img[2].remove()
  console.log(img)
  div.prepend(prev)
})


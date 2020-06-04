// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    let header = document.createElement('div')
    header.classList.add('header')
    let span = document.createElement('span')
    span.classList.add('date')
    span.textContent = 'MARCH 28, 2020';
    header.appendChild(span)
    let h1 = document.createElement('h1')
    h1.textContent = 'Lambda Times'
    header.appendChild(h1)
    let span_temp = document.createElement('span')
    span_temp.classList.add('temp')
    span_temp.textContent = '98'
    header.appendChild(span_temp)

    return header
}

document.querySelector('.header-container').appendChild(Header())

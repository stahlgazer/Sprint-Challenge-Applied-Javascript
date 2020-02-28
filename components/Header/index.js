// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    // elements
    const div = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    // Classes
    div.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp')

    // Structure
    div.appendChild(date);
    div.appendChild(title);
    div.appendChild(temp);

    // content
    date.textContent = "SMARCH 28, 2019";
    title.textContent = "Lambda Times";
    temp.textContent = '98°';

    return div

}

// to the DOM
const component = document.querySelector(".header-container");
component.appendChild(Header());
console.log(component)
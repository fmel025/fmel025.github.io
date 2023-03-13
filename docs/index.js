// Getting the elements from the DOM
const coursesList = document.getElementById('coursesList');
const pagination = document.querySelector('.pagination');

const BASE_URL = 'https://fmel025.github.io/';
const fetchURL = 'https://api.github.com/repos/fmel025/fmel025.github.io/contents/docs';

let numPages = 0;
const elementsPerPage = 6;
let currentPage = 0;

let pages = [];

const fetchPages = async () => {
    const response = await fetch(fetchURL);
    const data = await response.json();
    const pagesFiltered = data.filter(item => !(item.name.endsWith(".html") || item.name.endsWith(".js") || item.name.endsWith(".css")));
    pages = pagesFiltered.map(page => page.name);
    console.log(pages);
}

// Function to render the current page
const renderPage = () => {
    const start = currentPage * elementsPerPage;
    const end = start + elementsPerPage;
    const page = pages.slice(start, end);
    console.log(page);
    coursesList.innerHTML = '';
    
    page.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.classList.add('col');
        courseItem.classList.add('card');
        courseItem.innerHTML = `
        <div class="card-body">
        <div class="card-title roboto">
            <b>
                <h5>${course[0].toUpperCase()}${course.substring(1).replace("-", " ")}</h5>
            </b>
        </div>
        <div class="card-text roboto">
            <a href="${BASE_URL}/${course}" target="_blank">Ver clase</a>
        </div>
        </div>
        `;
        coursesList.appendChild(courseItem);
    });
}

// Function to render the pagination using previous and next but first checking the current page at session storage
const renderPagination = () => {
    pagination.innerHTML = '';
    if (currentPage > 0) {
        const prevLi = document.createElement('li');
        prevLi.classList.add('page-item');
        const prevLink = document.createElement('a');
        prevLink.classList.add('page-link');
        prevLink.href = '#';
        prevLink.textContent = 'Anterior';
        prevLink.addEventListener('click', () => {
            currentPage--;
            renderPage();
            renderPagination();
            setCurrentPage();
        }
        );
        prevLi.appendChild(prevLink);
        pagination.appendChild(prevLi);

    }
    if (currentPage < numPages - 1) {
        const nextLi = document.createElement('li');
        nextLi.classList.add('page-item');
        const nextLink = document.createElement('a');
        nextLink.classList.add('page-link');
        nextLink.href = '#';
        nextLink.textContent = 'Siguiente';
        nextLink.addEventListener('click', () => {
            currentPage++;
            renderPage();
            renderPagination();
            setCurrentPage();
        }
        );
        nextLi.appendChild(nextLink);
        pagination.appendChild(nextLi);
    }
}

// Function that chechks the current page you were at.
// It is checked inside the sessjon storage
const checkCurrentPage = () => {
    const currentPage = sessionStorage.getItem('currentPage');
    if (currentPage) {
        return parseInt(currentPage);
    }
    return 0;
}

// Just a function that sets the current page to load it at the beginning
const setCurrentPage = () => {
    sessionStorage.setItem('currentPage', currentPage);
}

// The main function that loads the current page, the classes and
// renders everything
const main = async () => {
    await fetchPages();
    numPages = Math.ceil(pages.length / elementsPerPage);
    currentPage = checkCurrentPage();
    renderPage();
    renderPagination();
}

main();
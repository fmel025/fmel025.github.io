const itemsPerPage = 5;

const URL_BASE = "https://fmel025.github.io/";


fetch(`https://api.github.com/repos/fmel025/fmel025.github.io/contents/docs`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const htmlFiles = data.filter(file => !(file.name.endsWith(".html") || file.name.endsWith(".js")));
        const links = htmlFiles.map(file => `<li class="list-group-item"><a href="${URL_BASE}/${file.name}">${file.name}</a></li>`);
        const pageCount = Math.ceil(links.length / itemsPerPage);
        const pagination = `
      <nav>
        <ul class="pagination justify-content-center">
          ${Array.from({ length: pageCount }, (_, i) => `
            <li class="page-item${i === 0 ? ' active' : ''}">
              <a class="page-link" href="#" data-page="${i + 1}">${i + 1}</a>
            </li>
          `).join('')}
        </ul>
      </nav>
    `;
        document.getElementById('pagination').innerHTML = pagination;
        document.querySelectorAll('.page-link').forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault();
                const page = parseInt(link.getAttribute('data-page'));
                const startIndex = (page - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
                const pageLinks = links.slice(startIndex, endIndex);
                const toc = `<ul class="list-group">${pageLinks.join('')}</ul>`;
                document.getElementById('toc').innerHTML = toc;
                document.querySelectorAll('.page-item').forEach(item => item.classList.remove('active'));
                link.parentElement.classList.add('active');
            });
        });
        document.querySelector('.page-link[data-page="1"]').click();
    })
    .catch(error => console.error(error));

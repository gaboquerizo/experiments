const btnmore = document.querySelector('#btnmore');
    const linksid = document.querySelector('#links');
        btnmore.addEventListener('click', (e) => {
            linksid.classList.toggle("mostrar");
        });
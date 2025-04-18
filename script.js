//toggle icon navbar//

//scroll sections

    //sticky header
    let section = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    
    window.onscroll = () => {
        section.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                //active navbar Links
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id +']').classList.add('active');
                });
            }
        });

    let header = document.querySelectorAll('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}
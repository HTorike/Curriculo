document.addEventListener('DOMContentLoaded', function () {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"');
    smoothScrollLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                if (this.id === 'downloadCvBtn') {
                    return;
                }

                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = (targetId === '#') ? document.body : document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView ({
                        behavior: 'smooth'
                    });
                }
            })
    })
});
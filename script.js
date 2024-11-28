
document.getElementById("hideAll").style.display = "flex";

window.onload = function() 
    { document.getElementById("hideAll").style.display = "none"; }


function togglePopup(x){
    document.getElementById(`popup-${x}`).classList.toggle("active");
}







// Configuration de l'observateur d'intersection
var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {

            if (entry.target.classList.contains('one')) {

                document.querySelector('header').classList.remove('sticky');
                document.querySelector('header').classList.remove('stickyBlack');
                document.querySelector('footer').classList.remove('enable');


            } else if (entry.target.classList.contains('two')) {

                document.querySelector('header').classList.add('sticky');

                document.querySelector('footer').classList.remove('enable');
                document.querySelector('header').classList.remove('stickyBlack');


                document.getElementById('compLink').classList.add('active');

                document.getElementById('veilleLink').classList.remove('active');
                document.getElementById('contactLink').classList.remove('active');
                document.getElementById('projetLink').classList.remove('active');

            } else if (entry.target.classList.contains('three')){
                document.querySelector('header').classList.remove('sticky');
                document.querySelector('header').classList.add('stickyBlack');

                document.querySelector('footer').classList.remove('enable');

                document.getElementById('contactLink').classList.remove('active');
                document.getElementById('veilleLink').classList.remove('active');
                document.getElementById('compLink').classList.remove('active');
                document.getElementById('projetLink').classList.add('active');
            } else if (entry.target.classList.contains('four')){
                document.querySelector('header').classList.remove('stickyBlack');
                document.querySelector('header').classList.add('sticky')
                document.querySelector('footer').classList.remove('enable');

                document.getElementById('compLink').classList.remove('active');
                document.getElementById('projetLink').classList.remove('active');
                document.getElementById('contactLink').classList.remove('active');
                document.getElementById('veilleLink').classList.add('active');

                document.getElementById('projets').scrollTop = 0;
            } else if (entry.target.classList.contains('five')){
                document.querySelector('header').classList.remove('sticky');
                document.querySelector('header').classList.add('stickyBlack');

                document.querySelector('footer').classList.add('enable');
                
                document.getElementById('contactLink').classList.add('active');
                document.getElementById('veilleLink').classList.remove('active');
                document.getElementById('compLink').classList.remove('active');
                document.getElementById('projetLink').classList.remove('active');

                document.getElementById('veille').scrollTop = 0;
            }
        }
    });
}, { threshold: 0.2 }); // Utilisation d'un seuil de 0.5 pour détecter lorsque la moitié de la section est visible

// Observons chaque section
document.querySelectorAll('.container section').forEach(function(section) {
    observer.observe(section);
});



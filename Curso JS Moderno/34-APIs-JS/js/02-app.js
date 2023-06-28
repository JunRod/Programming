//!Escuchar unelemento con InserctionObserver
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            console.log('visible');
        }
    });
    //Observar si isIntersecting es true, en el objeto ".premium", si es true imprimir "visible"
    observer.observe(document.querySelector('.premium'));
});

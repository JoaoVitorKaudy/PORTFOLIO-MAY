document.addEventListener("DOMContentLoaded", function() {

    // 1. Configuração do "Intersection Observer" para animação de fade-in
    
    // Seleciona todos os elementos que devem ter a animação
    const fadeElements = document.querySelectorAll('.fade-in');

    // Opções do observer (o que ele deve observar)
    const observerOptions = {
        root: null, // Observa em relação à viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% do elemento precisa estar visível para disparar
    };

    // A função que será chamada quando um elemento entrar na tela
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // 'entry.isIntersecting' é true se o elemento está na tela
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' para disparar a transição do CSS
                entry.target.classList.add('visible');
                
                // Para de observar o elemento para não animar de novo
                observer.unobserve(entry.target);
            }
        });
    };

    // Cria o observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Faz o observer "observar" cada um dos nossos elementos
    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // 2. (Opcional) Rolagem suave para links de âncora (já feito com CSS 'scroll-behavior: smooth;')
    // Se quiser um controle mais fino com JS, você pode descomentar abaixo:

    
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o salto padrão
            
            const targetId = this.getAttribute('href'); // Pega o id (ex: #portfolio)
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Rola suavemente até a seção
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Alinha ao topo
                });
            }
        });
    });
    

});
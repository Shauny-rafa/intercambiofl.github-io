import { initQuiz } from './quiz.js';
import { initMap } from './mapa.js';
import { loadFAQ } from './faq.js';
import { loadBlogPosts } from './blog.js';

// Menu Mobile
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    initQuiz();
    initMap();
    loadFAQ();
    loadBlogPosts();
});

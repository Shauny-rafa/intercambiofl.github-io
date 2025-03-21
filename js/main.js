import { initQuiz } from './quiz.js';
import { loadMap } from './map.js';
import { initCurrencyConverter } from './api.js';

// Configurações Iniciais
const CONFIG = {
    MAP_CENTER: [0, 0],
    MAP_ZOOM: 2,
    DEFAULT_CURRENCY: 'BRL'
};

// Inicialização do Site
document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile
    document.querySelector('.mobile-menu').addEventListener('click', toggleNav);
    
    // Inicializar Módulos
    initQuiz();
    loadMap(CONFIG.MAP_CENTER, CONFIG.MAP_ZOOM);
    initCurrencyConverter(CONFIG.DEFAULT_CURRENCY);
    
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', smoothScroll);
    });
});

function toggleNav() {
    document.querySelector('.nav-links').classList.toggle('active');
}

function smoothScroll(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
}

// Script de filtrage du menu
// Récupérer tous les boutons de filtre
const filterButtons = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');

// Ajouter un écouteur d'événement à chaque bouton
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Récupérer la catégorie sélectionnée
        const filter = this.getAttribute('data-filter');

        // Retirer la classe 'active' de tous les boutons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Ajouter la classe 'active' au bouton cliqué
        this.classList.add('active');

        // Afficher/masquer les cartes selon la catégorie
        menuCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            // Si "Tous" est sélectionné OU la catégorie correspond, afficher la carte
            if (filter === 'tous' || category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

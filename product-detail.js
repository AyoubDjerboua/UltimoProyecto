// cart-core.js doit être chargé AVANT dans le HTML
// // Base de données des produits
const products = {
    'caraburger': {
        id: 'caraburger',
        name: 'Caraburger',
        price: 12.99,
        image: 'caraburger',
        rating: 4.9,
        reviews: 247,
        category: 'Plats',
        description: 'Découvrez notre Caraburger, un burger savoureux préparé avec un filet pané croustillant et notre sauce spéciale maison. Servi avec des frites fraîches et une salade croquante, c\'est un classique revisité à la manière PokéFood.',
        ingredients: 'Filet pané, pain toasté, sauce spéciale, laitue, tomate, oignon rouge, fromage',
        allergens: ['Gluten', 'Œufs', 'Lait', 'Arachides'],
        nutritionInfo: {
            calories: 680,
            protein: '35g',
            carbs: '52g',
            fat: '28g'
        }
    },
    'pizza-articuno': {
        id: 'pizza-articuno',
        name: 'Pizza Articuno',
        price: 14.99,
        image: 'articuno',
        rating: 4.8,
        reviews: 189,
        category: 'Plats',
        description: 'Une pizza fromagère généreuse garnie de fruits de mer frais : crevettes, moules et calmar. La pâte croustillante et le mélange de fromages fondus créent une harmonie parfaite avec les saveurs marines.',
        ingredients: 'Pâte maison, sauce tomate, mozzarella, emmental, crevettes, moules, calmar, oignons, herbes de Provence',
        allergens: ['Gluten', 'Crustacés', 'Mollusques', 'Lait'],
        nutritionInfo: {
            calories: 720,
            protein: '38g',
            carbs: '58g',
            fat: '32g'
        }
    },
    'ramen-zapdos': {
        id: 'ramen-zapdos',
        name: 'Ramen Zapdos',
        price: 11.99,
        image: 'zapdos',
        rating: 4.9,
        reviews: 312,
        category: 'Plats',
        description: 'Des nouilles ondulées parfaitement cuites dans un bouillon électrisant aux saveurs épicées. Garni de poulet tendre, œuf mollet, germes de soja, champignons shiitake et poireau. Une explosion de saveurs asiatiques !',
        ingredients: 'Nouilles ramen, bouillon de poulet épicé, poulet fermier, œuf, germes de soja, champignons shiitake, poireau, sésame',
        allergens: ['Gluten', 'Œufs', 'Arachides'],
        nutritionInfo: {
            calories: 590,
            protein: '32g',
            carbs: '68g',
            fat: '18g'
        }
    },
    'pizza-champignons': {
        id: 'pizza-champignons',
        name: 'Pizza aux Champignons',
        price: 14.99,
        image: 'chapizza',
        rating: 4.7,
        reviews: 156,
        category: 'Plats',
        description: 'Une pizza végétarienne aux saveurs boisées authentiques. Garnie d\'un mélange de champignons frais : champignons de Paris, shiitake et cèpes. Agrémentée de fromage de chèvre et d\'échalotes caramélisées.',
        ingredients: 'Pâte maison, sauce tomate, mozzarella, fromage de chèvre, champignons de Paris, shiitake, cèpes, échalotes, thym frais',
        allergens: ['Gluten', 'Lait'],
        nutritionInfo: {
            calories: 680,
            protein: '28g',
            carbs: '62g',
            fat: '30g'
        }
    },
    'glace-taupikoko': {
        id: 'glace-taupikoko',
        name: 'Glace Taupikoko',
        price: 6.99,
        image: 'taupikoko',
        rating: 4.8,
        reviews: 198,
        category: 'Desserts',
        description: 'Une glace au chocolat intense et riche, garnie de biscuits sablés croustillants. Le contraste parfait entre la douceur crémeuse et le croquant du biscuit. Un dessert pour les vrais amateurs de chocolat !',
        ingredients: 'Crème, lait, cacao, chocolat noir, biscuits sablés, sucre, œufs',
        allergens: ['Lait', 'Œufs', 'Gluten'],
        nutritionInfo: {
            calories: 320,
            protein: '6g',
            carbs: '38g',
            fat: '18g'
        }
    },
    'pokeball-dessert': {
        id: 'pokeball-dessert',
        name: 'Pokéball Dessert',
        price: 6.99,
        image: 'pokeball',
        rating: 4.6,
        reviews: 142,
        category: 'Desserts',
        description: 'Un dessert ludique en forme de Pokéball ! Composé d\'une génoise moelleuse, de crème pâtissière vanillée et d\'une décoration en pâte à sucre rouge et blanche. Parfait pour les fans de Pokémon !',
        ingredients: 'Farine, œufs, sucre, beurre, lait, vanille, pâte à sucre, chocolat blanc',
        allergens: ['Gluten', 'Œufs', 'Lait', 'Lait/Gluten'],
        nutritionInfo: {
            calories: 350,
            protein: '5g',
            carbs: '45g',
            fat: '16g'
        }
    },
    'salade-venusaur': {
        id: 'salade-venusaur',
        name: 'Salade Venusaur',
        price: 9.99,
        image: 'venusaur',
        rating: 4.7,
        reviews: 124,
        category: 'Entrées',
        description: 'Une salade fraîche et équilibrée riche en saveurs naturelles. Laitue biologique, épinards frais, fruits de saison, noix croustillantes et vinaigrette maison à base d\'agrumes. Santé et gourmandise réunies !',
        ingredients: 'Laitue biologique, épinards frais, tomate, carotte, pomme, raisins, noix, graines de courge, vinaigrette agrumes',
        allergens: ['Fruits à coque', 'Moutarde'],
        nutritionInfo: {
            calories: 280,
            protein: '9g',
            carbs: '32g',
            fat: '14g'
        }
    },
    'smoothie-blastoise': {
        id: 'smoothie-blastoise',
        name: 'Smoothie Blastoise',
        price: 5.99,
        image: 'blastoise',
        rating: 4.8,
        reviews: 201,
        category: 'Boissons',
        description: 'Une boisson rafraîchissante aux fruits tropicaux savamment mélangés. Mangue, ananas, banane et une touche de noix de coco. Servi frappé, c\'est le perfect companion pour vos repas chez PokéFood !',
        ingredients: 'Mangue, ananas, banane, lait de coco, yaourt nature, glaçons, miel',
        allergens: ['Lait', 'Fruits à coque'],
        nutritionInfo: {
            calories: 210,
            protein: '5g',
            carbs: '42g',
            fat: '3g'
        }
    }
};

// Charger le produit
function loadProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    const product = products[productId];

    if (!product) {
        document.getElementById('productDetail').innerHTML = `
            <div class="error-message">
                <h2>Produit non trouvé</h2>
                <p>Désolé, ce produit n'existe pas.</p>
                <a href="menu.html" class="btn">Retour au Menu</a>
            </div>
        `;
        return;
    }

    const allergensBadges = product.allergens
        .map(a => `<span class="allergen-badge">${a}</span>`)
        .join('');

    document.getElementById('productDetail').innerHTML = `
        <div class="product-detail-wrapper">
            <div class="product-image-container">
                <div class="product-detail-image ${product.image}"></div>
            </div>

            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h1 class="product-title">${product.name}</h1>

                <div class="product-rating">
                    <span class="stars">⭐⭐⭐⭐⭐</span>
                    <span class="rating-text">${product.rating}/5 (${product.reviews} avis)</span>
                </div>

                <div class="product-price-section">
                    <p class="product-price">${product.price.toFixed(2)}€</p>
                </div>

                <div class="product-description">
                    <h3>Description</h3>
                    <p>${product.description}</p>
                </div>

                <div class="product-allergens">
                    <h3>Allergènes</h3>
                    <div class="allergens-container">
                        ${allergensBadges}
                    </div>
                </div>

                <div class="product-ingredients">
                    <h3>Ingrédients</h3>
                    <p>${product.ingredients}</p>
                </div>

                <div class="product-nutrition">
                    <h3>Nutrition</h3>
                    <div class="nutrition-grid">
                        <div class="nutrition-item">
                            <span class="nutrition-label">Calories</span>
                            <span class="nutrition-value">${product.nutritionInfo.calories}</span>
                        </div>
                        <div class="nutrition-item">
                            <span class="nutrition-label">Protéines</span>
                            <span class="nutrition-value">${product.nutritionInfo.protein}</span>
                        </div>
                        <div class="nutrition-item">
                            <span class="nutrition-label">Glucides</span>
                            <span class="nutrition-value">${product.nutritionInfo.carbs}</span>
                        </div>
                        <div class="nutrition-item">
                            <span class="nutrition-label">Lipides</span>
                            <span class="nutrition-value">${product.nutritionInfo.fat}</span>
                        </div>
                    </div>
                </div>

                <div class="product-actions">
                    <input type="number" id="quantity" min="1" max="10" value="1" class="quantity-input">
                    <button class="btn btn-large">Passer commande</button>
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', loadProduct);
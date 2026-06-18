const cartProducts = {
    'caraburger': {
        name: 'Caraburger',
        price: 12.99,
        image: 'caraburger'
    },
    'pizza-articuno': {
        name: 'Pizza Articuno',
        price: 14.99,
        image: 'articuno'
    },
    'ramen-zapdos': {
        name: 'Ramen Zapdos',
        price: 11.99,
        image: 'zapdos'
    },
    'pizza-champignons': {
        name: 'Pizza aux Champignons',
        price: 14.99,
        image: 'chapizza'
    },
    'glace-taupikoko': {
        name: 'Glace Taupikoko',
        price: 6.99,
        image: 'taupikoko'
    },
    'pokeball-dessert': {
        name: 'Pokéball Dessert',
        price: 6.99,
        image: 'pokeball'
    },
    'salade-venusaur': {
        name: 'Salade Venusaur',
        price: 9.99,
        image: 'venusaur'
    },
    'smoothie-blastoise': {
        name: 'Smoothie Blastoise',
        price: 5.99,
        image: 'blastoise'
    }
};

function getCart() {
    return JSON.parse(localStorage.getItem('pokefood-cart') || '[]');
}

function saveCart(cart) {
    localStorage.setItem('pokefood-cart', JSON.stringify(cart));
}

function formatPrice(value) {
    return `${value.toFixed(2)}€`;
}

function getCartCount(cart) {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

function renderCart() {
    const cartContainer = document.getElementById('cartContent');
    const cartSummary = document.getElementById('cartSummary');
    const cart = getCart();

    if (!cartContainer || !cartSummary) {
        return;
    }

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart">
                <h2>Votre panier est vide</h2>
                <p>Ajoutez des produits depuis le menu ou les fiches détail pour les retrouver ici.</p>
                <a href="menu.html" class="btn">Découvrir le menu</a>
            </div>
        `;
        cartSummary.innerHTML = '';
        return;
    }

    const itemsHtml = cart.map(item => {
        const product = cartProducts[item.id];
        if (!product) {
            return '';
        }

        return `
            <div class="cart-item" data-product-id="${item.id}">
                <div class="cart-item-image ${product.image}"></div>
                <div class="cart-item-info">
                    <h3>${product.name}</h3>
                    <p>Prix unitaire : ${formatPrice(product.price)}</p>
                    <p>Quantité : ${item.quantity}</p>
                </div>
                <div class="cart-item-actions">
                    <p class="cart-item-total">${formatPrice(product.price * item.quantity)}</p>
                    <button class="btn btn-small remove-item-btn" data-product-id="${item.id}">Retirer</button>
                </div>
            </div>
        `;
    }).join('');

    const subtotal = cart.reduce((sum, item) => {
        const product = cartProducts[item.id];
        return product ? sum + (product.price * item.quantity) : sum;
    }, 0);

    const delivery = subtotal >= 30 ? 0 : 3.5;
    const total = subtotal + delivery;

    cartContainer.innerHTML = itemsHtml;
    cartSummary.innerHTML = `
        <div class="summary-card">
            <h2>Résumé</h2>
            <p>Sous-total : ${formatPrice(subtotal)}</p>
            <p>Livraison : ${delivery === 0 ? 'Offerte' : formatPrice(delivery)}</p>
            <p class="summary-total">Total : ${formatPrice(total)}</p>
            <p class="summary-note">${getCartCount(cart)} article${getCartCount(cart) > 1 ? 's' : ''} dans le panier</p>
            <button class="btn btn-large">Passer la commande</button>
        </div>
    `;

    document.querySelectorAll('.remove-item-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            const updatedCart = getCart().filter(item => item.id !== productId);
            saveCart(updatedCart);
            renderCart();
        });
    });
}

document.addEventListener('DOMContentLoaded', renderCart);

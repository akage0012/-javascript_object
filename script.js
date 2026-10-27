// JavaScript

// --- データ：複数の商品（オブジェクト）を配列で管理 ---
const products = [
    { name: '馬刺し', price: 4800, image: 'images/uma.jpg', inStock: true , category: '肉' },
    { name: '寿司', price: 3500, image: 'images/sushi.jpg', inStock: false, category: '魚' },
    { name: '刺身', price: 2500, image: 'images/sasimi.jpg', inStock: true, category: '魚' },
    { name: '牛タン', price: 1850, image: 'images/rikyu.jpg', inStock: true, category: '肉' }
];

// --- HTMLの要素を取得 ---
const productContainer = document.getElementById('product-container');
const showAllBtn = document.getElementById('show-all');
const filterPriceBtn = document.getElementById('filter-price');
const filterStockBtn = document.getElementById('filter-stock');
const filterMeatBtn = document.getElementById('filter-meat');
const filterFishBtn = document.getElementById('filter-fish');

// --- 関数：商品の配列を受け取って、画面にカードを表示する ---
function displayProducts(productArray) {
    productContainer.innerHTML = ''; // 表示エリアを一度空にする

    productArray.forEach(product => {
        // 在庫状況に応じて表示を変える
        const stockStatus = product.inStock ? '販売中' : '売り切れ';

        // カードのHTMLを文字列として組み立てる
        const cardHTML = `
            <div class="card">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p class="price">¥${product.price.toLocaleString()}</p>
                <p class="stock">${stockStatus}</p>
            </div>
        `;
        // 組み立てたHTMLをコンテナに追加
        productContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
}


// --- ボタンのイベント設定 ---
showAllBtn.addEventListener('click', () => {
    displayProducts(products); // 全ての商品データをそのまま表示
});

filterPriceBtn.addEventListener('click', () => {
    // filterを使って、価格が3000円以下の商品だけを絞り込む
    const cheapProducts = products.filter(p => p.price <= 3000);
    displayProducts(cheapProducts); // 絞り込んだ結果を表示
});

filterStockBtn.addEventListener('click', () => {
    // filterを使って、販売中の商品だけを絞り込む
    const stockProducts = products.filter(p => p.inStock === true);
    displayProducts(stockProducts); // 絞り込んだ結果を表示
});

filterMeatBtn.addEventListener('click', () => {
    // filterを使って、肉の商品だけを絞り込む
    const meatProducts = products.filter(p => p.inStock === true && p.category === '肉');
    displayProducts(meatProducts); // 絞り込んだ結果を表示
});

filterFishBtn.addEventListener('click', () => {
    // filterを使って、魚の商品だけを絞り込む
    const fishProducts = products.filter(p => p.inStock === true && p.category === '魚');
    displayProducts(fishProducts); // 絞り込んだ結果を表示
});

// --- 初期表示として、全ての商品を表示 ---
displayProducts(products);
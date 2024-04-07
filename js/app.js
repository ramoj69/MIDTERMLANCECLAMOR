var item_orders = [];

// Item 1 Value
var Item_1_Enter = document.getElementById('Item_1_Enter');
Item_1_Enter.addEventListener('click', function(){
    var item_1_price = 120;
    var Item_1_quantity = document.querySelector('#Item_1_quantity').value;
    var total_price_quantity = item_1_price * Item_1_quantity;
    var item_1_object = {
        item_1_item: 'Espresso',
        item_1_price: 120,
        Item_1_quantity: Item_1_quantity,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_1_object);
    const Ordered_Items = document.getElementById('Ordered_Items');
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item_1_object.item_1_item;
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = "QTY: "+ item_1_object.Item_1_quantity;
    var cardText_total = document.createElement('p');
    cardText_total.classList.add('card-text');
    cardText_total.textContent = "PHP: "+ item_1_object.total_price_quantity;
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardText_total);
    cardDiv.appendChild(cardBodyDiv);
    Ordered_Items.appendChild(cardDiv);
    update_total();

});

// Item 2 Value
var Item_2_Enter = document.getElementById('Item_2_Enter');
Item_2_Enter.addEventListener('click', function(){
    var item_2_price = 140;
    var Item_2_quantity = document.querySelector('#Item_2_quantity').value;
    var total_price_quantity = item_2_price * Item_2_quantity;
    var item_2_object = {
        item_2_item: 'Americano',
        item_2_price: 140,
        Item_2_quantity: Item_2_quantity,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_2_object);

    
    item_orders.push(item_2_object);
    const Ordered_Items = document.getElementById('Ordered_Items');
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item_2_object.item_2_item;
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = "QTY: "+ item_2_object.Item_2_quantity;
    var cardText_total = document.createElement('p');
    cardText_total.classList.add('card-text');
    cardText_total.textContent = "PHP: "+ item_2_object.total_price_quantity;
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardText_total);
    cardDiv.appendChild(cardBodyDiv);
    Ordered_Items.appendChild(cardDiv);
    update_total();


});

// Item 3 Value
var Item_3_Enter = document.getElementById('Item_3_Enter');
Item_3_Enter.addEventListener('click', function(){
    var item_3_price = 150;
    var Item_3_quantity = document.querySelector('#Item_3_quantity').value;
    var total_price_quantity = item_3_price * Item_3_quantity;
    var item_3_object = {
        item_3_item: 'Macchiato',
        item_3_price: 150,
        Item_3_quantity: Item_3_quantity,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_3_object);
    const Ordered_Items = document.getElementById('Ordered_Items');
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item_3_object.item_3_item;
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = "QTY: "+ item_3_object.Item_3_quantity;
    var cardText_total = document.createElement('p');
    cardText_total.classList.add('card-text');
    cardText_total.textContent = "PHP: "+ item_3_object.total_price_quantity;
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardText_total);
    cardDiv.appendChild(cardBodyDiv);
    Ordered_Items.appendChild(cardDiv);
    update_total();

});


// Item 4 Value
var Item_4_Enter = document.getElementById('Item_4_Enter');
Item_4_Enter.addEventListener('click', function(){
    var item_4_price = 160;
    var Item_4_quantity = document.querySelector('#Item_4_quantity').value;
    var total_price_quantity = item_4_price * Item_4_quantity;
    var item_4_object = {
        item_4_item: 'Cortado',
        item_4_price: 160,
        Item_4_quantity: Item_4_quantity,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_4_object);
    const Ordered_Items = document.getElementById('Ordered_Items');
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item_4_object.item_4_item;
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = "QTY: "+ item_4_object.Item_4_quantity;
    var cardText_total = document.createElement('p');
    cardText_total.classList.add('card-text');
    cardText_total.textContent = "PHP: "+ item_4_object.total_price_quantity;
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardText_total);
    cardDiv.appendChild(cardBodyDiv);
    Ordered_Items.appendChild(cardDiv);
    update_total();
});
// Item 5 Value
var Item_5_Enter = document.getElementById('Item_5_Enter');
Item_5_Enter.addEventListener('click', function(){
    var item_5_price = 180;
    var Item_5_quantity = document.querySelector('#Item_5_quantity').value;
    var total_price_quantity = item_5_price * Item_5_quantity;
    var item_5_object = {
        item_5_item: 'Cappuccino',
        item_5_price: 180,
        Item_5_quantity: Item_5_quantity,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_5_object);
    const Ordered_Items = document.getElementById('Ordered_Items');
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item_5_object.item_5_item;
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = "QTY: "+ item_5_object.Item_5_quantity;
    var cardText_total = document.createElement('p');
    cardText_total.classList.add('card-text');
    cardText_total.textContent = "PHP: "+ item_5_object.total_price_quantity;
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardText_total);
    cardDiv.appendChild(cardBodyDiv);
    Ordered_Items.appendChild(cardDiv);
    update_total();
});
// Item 6 Value
var Item_6_Enter = document.getElementById('Item_6_Enter');
Item_6_Enter.addEventListener('click', function(){
    var item_6_price = 200;
    var Item_6_quantity = document.querySelector('#Item_6_quantity').value;
    var total_price_quantity = item_6_price * Item_6_quantity;
    var item_6_object = {
        item_6_item: 'Latte',
        item_6_price: 200,
        Item_6_quantity: Item_6_quantity,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_6_object);
    const Ordered_Items = document.getElementById('Ordered_Items');
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item_6_object.item_6_item;
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = "QTY: "+ item_6_object.Item_6_quantity;
    var cardText_total = document.createElement('p');
    cardText_total.classList.add('card-text');
    cardText_total.textContent = "PHP: "+ item_6_object.total_price_quantity;
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardText_total);
    cardDiv.appendChild(cardBodyDiv);
    Ordered_Items.appendChild(cardDiv);
    update_total();
});
// Item 7 Value
var Item_7_Enter = document.getElementById('Item_7_Enter');
Item_7_Enter.addEventListener('click', function(){
    var item_7_price = 220;
    var Item_7_quantity = document.querySelector('#Item_7_quantity').value;
    var total_price_quantity = item_7_price * Item_7_quantity;
    var item_7_object = {
        item_7_item: 'Mocha',
        item_7_price: 220,
        Item_7_quantity: Item_7_quantity,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_7_object);
    const Ordered_Items = document.getElementById('Ordered_Items');
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item_7_object.item_7_item;
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = "QTY: "+ item_7_object.Item_7_quantity;
    var cardText_total = document.createElement('p');
    cardText_total.classList.add('card-text');
    cardText_total.textContent = "PHP: "+ item_7_object.total_price_quantity;
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardText_total);
    cardDiv.appendChild(cardBodyDiv);
    Ordered_Items.appendChild(cardDiv);
    update_total();
});
// Item 4 Value
var Item_8_Enter = document.getElementById('Item_8_Enter');
Item_8_Enter.addEventListener('click', function(){
    var item_8_price = 200;
    var Item_8_quantity = document.querySelector('#Item_8_quantity').value;
    var total_price_quantity = item_8_price * Item_8_quantity;
    var item_8_object = {
        item_8_item: 'Flat White',
        item_8_price: 200,
        Item_8_quantity: Item_8_quantity,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_8_object);
    const Ordered_Items = document.getElementById('Ordered_Items');
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item_8_object.item_8_item;
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = "QTY: "+ item_8_object.Item_8_quantity;
    var cardText_total = document.createElement('p');
    cardText_total.classList.add('card-text');
    cardText_total.textContent = "PHP: "+ item_8_object.total_price_quantity;
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardText_total);
    cardDiv.appendChild(cardBodyDiv);
    Ordered_Items.appendChild(cardDiv);
    update_total();
});
// Item 4 Value
var Item_9_Enter = document.getElementById('Item_9_Enter');
Item_9_Enter.addEventListener('click', function(){
    var item_9_price = 180;
    var Item_9_quantity = document.querySelector('#Item_9_quantity').value;
    var total_price_quantity = item_9_price * Item_9_quantity;
    var item_9_object = {
        item_9_item: 'Pour Over: Ethiopian',
        item_9_price: 180,
        Item_9_quantity: Item_9_quantity,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_9_object);
    const Ordered_Items = document.getElementById('Ordered_Items');
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item_9_object.item_9_item;
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = "QTY: "+ item_9_object.Item_9_quantity;
    var cardText_total = document.createElement('p');
    cardText_total.classList.add('card-text');
    cardText_total.textContent = "PHP: "+ item_9_object.total_price_quantity;
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardText_total);
    cardDiv.appendChild(cardBodyDiv);
    Ordered_Items.appendChild(cardDiv);
    update_total();
});
// Item 4 Value
var Item_10_Enter = document.getElementById('Item_10_Enter');
Item_10_Enter.addEventListener('click', function(){
    var item_10_price = 200;
    var Item_10_quantity = document.querySelector('#Item_10_quantity').value;
    var total_price_quantity = item_10_price * Item_10_quantity;
    var item_10_object = {
        item_10_item: 'Pour Over: Colombian',
        item_10_price: 200,
        Item_10_quantity: Item_10_quantity,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_10_object);
    const Ordered_Items = document.getElementById('Ordered_Items');
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item_10_object.item_10_item;
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = "QTY: "+ item_10_object.Item_10_quantity;
    var cardText_total = document.createElement('p');
    cardText_total.classList.add('card-text');
    cardText_total.textContent = "PHP: "+ item_10_object.total_price_quantity;
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardText_total);
    cardDiv.appendChild(cardBodyDiv);
    Ordered_Items.appendChild(cardDiv);
    update_total();
});

// Item 4 Value
var Item_11_Enter = document.getElementById('Item_11_Enter');
Item_11_Enter.addEventListener('click', function(){
    var item_11_price = 220;
    var Item_11_quantity = document.querySelector('#Item_11_quantity').value;
    var total_price_quantity = item_11_price * Item_11_quantity;
    var item_11_object = {
        item_11_item: 'Pour Over: Kenyan',
        item_11_price: 220,
        Item_11_quantity: Item_11_quantity,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_11_object);
    const Ordered_Items = document.getElementById('Ordered_Items');
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item_11_object.item_11_item;
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = "QTY: "+ item_11_object.Item_11_quantity;
    var cardText_total = document.createElement('p');
    cardText_total.classList.add('card-text');
    cardText_total.textContent = "PHP: "+ item_11_object.total_price_quantity;
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardText_total);
    cardDiv.appendChild(cardBodyDiv);
    Ordered_Items.appendChild(cardDiv);
    update_total();
});
// Item 4 Value
var Item_12_Enter = document.getElementById('Item_12_Enter');
Item_12_Enter.addEventListener('click', function(){
    var item_12_price = 200;
    var Item_12_quantity = document.querySelector('#Item_12_quantity').value;
    var total_price_quantity = item_12_price * Item_12_quantity;
    var item_12_object = {
        item_12_item: 'Pour Over: Dark Roast',
        item_12_price: 200,
        Item_12_quantity: Item_12_quantity,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_12_object);
    const Ordered_Items = document.getElementById('Ordered_Items');
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item_12_object.item_12_item;
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = "QTY: "+ item_12_object.Item_12_quantity;
    var cardText_total = document.createElement('p');
    cardText_total.classList.add('card-text');
    cardText_total.textContent = "PHP: "+ item_12_object.total_price_quantity;
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardText_total);
    cardDiv.appendChild(cardBodyDiv);
    Ordered_Items.appendChild(cardDiv);
    update_total();
});
// Item 4 Value
var Item_13_Enter = document.getElementById('Item_13_Enter');
Item_13_Enter.addEventListener('click', function(){
    var item_13_price = 220;
    var Item_13_quantity = document.querySelector('#Item_13_quantity').value;
    var total_price_quantity = item_13_price * Item_13_quantity;
    var item_13_object = {
        item_13_item: 'French Press: Medium Roast',
        item_13_price: 220,
        Item_13_quantity: Item_13_quantity,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_13_object);
    const Ordered_Items = document.getElementById('Ordered_Items');
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item_13_object.item_13_item;
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = "QTY: "+ item_13_object.Item_13_quantity;
    var cardText_total = document.createElement('p');
    cardText_total.classList.add('card-text');
    cardText_total.textContent = "PHP: "+ item_13_object.total_price_quantity;
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardText_total);
    cardDiv.appendChild(cardBodyDiv);
    Ordered_Items.appendChild(cardDiv);
    update_total();
});
// Item 4 Value
var Item_14_Enter = document.getElementById('Item_14_Enter');
Item_14_Enter.addEventListener('click', function(){
    var item_14_price = 240;
    var Item_14_quantity = document.querySelector('#Item_14_quantity').value;
    var total_price_quantity = item_14_price * Item_14_quantity;
    var item_14_object = {
        item_14_item: 'French Press: Light Roast',
        item_14_price: 240,
        Item_14_quantity: Item_14_quantity,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_14_object);
    const Ordered_Items = document.getElementById('Ordered_Items');
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item_14_object.item_14_item;
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = "QTY: "+ item_14_object.Item_14_quantity;
    var cardText_total = document.createElement('p');
    cardText_total.classList.add('card-text');
    cardText_total.textContent = "PHP: "+ item_14_object.total_price_quantity;
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardText_total);
    cardDiv.appendChild(cardBodyDiv);
    Ordered_Items.appendChild(cardDiv);
    update_total();
});
// Item 4 Value
var Item_15_Enter = document.getElementById('Item_15_Enter');
Item_15_Enter.addEventListener('click', function(){
    var item_15_price = 220;
    var Item_15_quantity = document.querySelector('#Item_15_quantity').value;
    var total_price_quantity = item_15_price * Item_15_quantity;
    var item_15_object = {
        item_15_item: 'Ice Latte',
        item_15_price: 220,
        Item_15_quantity: Item_15_quantity,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_15_object);
    const Ordered_Items = document.getElementById('Ordered_Items');
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item_15_object.item_15_item;
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = "QTY: "+ item_15_object.Item_15_quantity;
    var cardText_total = document.createElement('p');
    cardText_total.classList.add('card-text');
    cardText_total.textContent = "PHP: "+ item_15_object.total_price_quantity;
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardText_total);
    cardDiv.appendChild(cardBodyDiv);
    Ordered_Items.appendChild(cardDiv);
    update_total();
});
// Item 4 Value
var Item_16_Enter = document.getElementById('Item_16_Enter');
Item_16_Enter.addEventListener('click', function(){
    var item_16_price = 200;
    var Item_16_quantity = document.querySelector('#Item_16_quantity').value;
    var total_price_quantity = item_16_price * Item_16_quantity;
    var item_16_object = {
        item_16_item: 'Cold Brew',
        item_16_price: 200,
        Item_16_quantity: Item_16_quantity,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_16_object);
    const Ordered_Items = document.getElementById('Ordered_Items');
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item_16_object.item_16_item;
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = "QTY: "+ item_16_object.Item_16_quantity;
    var cardText_total = document.createElement('p');
    cardText_total.classList.add('card-text');
    cardText_total.textContent = "PHP: "+ item_16_object.total_price_quantity;
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardText_total);
    cardDiv.appendChild(cardBodyDiv);
    Ordered_Items.appendChild(cardDiv);
    update_total();
});
// Item 4 Value
var Item_17_Enter = document.getElementById('Item_17_Enter');
Item_17_Enter.addEventListener('click', function(){
    var item_17_price = 240;
    var Item_17_quantity = document.querySelector('#Item_17_quantity').value;
    var total_price_quantity = item_17_price * Item_17_quantity;
    var item_17_object = {
        item_17_item: 'Nitro Cold Brew',
        item_17_price: 240,
        Item_17_quantity: Item_17_quantity,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_17_object);
    const Ordered_Items = document.getElementById('Ordered_Items');
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item_17_object.item_17_item;
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = "QTY: "+ item_17_object.Item_17_quantity;
    var cardText_total = document.createElement('p');
    cardText_total.classList.add('card-text');
    cardText_total.textContent = "PHP: "+ item_17_object.total_price_quantity;
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardText_total);
    cardDiv.appendChild(cardBodyDiv);
    Ordered_Items.appendChild(cardDiv);
    update_total();
});
// Item 4 Value
var Item_18_Enter = document.getElementById('Item_18_Enter');
Item_18_Enter.addEventListener('click', function(){
    var item_18_price = 260;
    var Item_18_quantity = document.querySelector('#Item_18_quantity').value;
    var total_price_quantity = item_18_price * Item_18_quantity;
    var item_18_object = {
        item_18_item: 'Affogato',
        item_18_price: 260,
        Item_18_quantity: Item_18_quantity,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_18_object);
    const Ordered_Items = document.getElementById('Ordered_Items');
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item_18_object.item_18_item;
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = "QTY: "+ item_18_object.Item_18_quantity;
    var cardText_total = document.createElement('p');
    cardText_total.classList.add('card-text');
    cardText_total.textContent = "PHP: "+ item_18_object.total_price_quantity;
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardText_total);
    cardDiv.appendChild(cardBodyDiv);
    Ordered_Items.appendChild(cardDiv);
    update_total();
});
// Item 4 Value
var Item_19_Enter = document.getElementById('Item_19_Enter');
Item_19_Enter.addEventListener('click', function(){
    var item_19_price = 230;
    var Item_19_quantity = document.querySelector('#Item_19_quantity').value;
    var total_price_quantity = item_19_price * Item_19_quantity;
    var item_19_object = {
        item_19_item: 'Espresso Tonic',
        item_19_price: 230,
        Item_19_quantity: Item_19_quantity,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_19_object);
    const Ordered_Items = document.getElementById('Ordered_Items');
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item_19_object.item_19_item;
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = "QTY: "+ item_19_object.Item_19_quantity;
    var cardText_total = document.createElement('p');
    cardText_total.classList.add('card-text');
    cardText_total.textContent = "PHP: "+ item_19_object.total_price_quantity;
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardText_total);
    cardDiv.appendChild(cardBodyDiv);
    Ordered_Items.appendChild(cardDiv);
    update_total();
});
// Item 4 Value
var Item_20_Enter = document.getElementById('Item_20_Enter');
Item_20_Enter.addEventListener('click', function(){
    var item_20_price = 240;
    var Item_20_quantity = document.querySelector('#Item_20_quantity').value;
    var total_price_quantity = item_20_price * Item_20_quantity;
    var item_20_object = {
        item_20_item: 'Matcha Latte',
        item_20_price: 240,
        Item_20_quantity: Item_20_quantity,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_20_object);
    const Ordered_Items = document.getElementById('Ordered_Items');
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item_20_object.item_20_item;
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = "QTY: "+ item_20_object.Item_20_quantity;
    var cardText_total = document.createElement('p');
    cardText_total.classList.add('card-text');
    cardText_total.textContent = "PHP: "+ item_20_object.total_price_quantity;
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardText_total);
    cardDiv.appendChild(cardBodyDiv);
    Ordered_Items.appendChild(cardDiv);
    update_total();
});
// Item 4 Value
var Item_21_Enter = document.getElementById('Item_21_Enter');
Item_21_Enter.addEventListener('click', function(){
    var item_21_price = 220;
    var Item_21_quantity = document.querySelector('#Item_21_quantity').value;
    var total_price_quantity = item_21_price * Item_21_quantity;
    var item_21_object = {
        item_21_item: 'Chai Latte',
        item_21_price: 220,
        Item_21_quantity: Item_21_quantity,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_21_object);
    const Ordered_Items = document.getElementById('Ordered_Items');
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item_21_object.item_21_item;
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = "QTY: "+ item_21_object.Item_21_quantity;
    var cardText_total = document.createElement('p');
    cardText_total.classList.add('card-text');
    cardText_total.textContent = "PHP: "+ item_21_object.total_price_quantity;
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardText_total);
    cardDiv.appendChild(cardBodyDiv);
    Ordered_Items.appendChild(cardDiv);
    update_total();
});

// Item 4 Value
var Item_22_Enter = document.getElementById('Item_22_Enter');
Item_20_Enter.addEventListener('click', function(){
    var item_22_price = 250;
    var Item_22_quantity = document.querySelector('#Item_22_quantity').value;
    var total_price_quantity = item_22_price * Item_22_quantity;
    var item_22_object = {
        item_22_item: 'Turmeric Latte',
        item_22_price: 250,
        Item_22_quantity: Item_22_quantity,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_22_object);
    const Ordered_Items = document.getElementById('Ordered_Items');
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item_22_object.item_22_item;
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = "QTY: "+ item_22_object.Item_22_quantity;
    var cardText_total = document.createElement('p');
    cardText_total.classList.add('card-text');
    cardText_total.textContent = "PHP: "+ item_22_object.total_price_quantity;
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardText_total);
    cardDiv.appendChild(cardBodyDiv);
    Ordered_Items.appendChild(cardDiv);
    update_total();
});





//ORDERS//
var total_orders = document.getElementById('total_amount');

function update_total() {
    var totalOrderPrice = 0;
    for (var i = 0; i < item_orders.length; i++) {
        totalOrderPrice += item_orders[i].total_price_quantity;
    }
    total_orders.textContent = totalOrderPrice;
}

var payment = document.getElementById('payment_button');
payment.addEventListener('click', function() {
    var payment_price = parseFloat(document.getElementById('payment_price').value);

    if (payment_price <= 0 || isNaN(payment_price)) {
        alert("Kulang bayad mo lods..");
    } else if (payment_price < total_orders.textContent) {
        alert("Withdraw ka muna..");
    } else {
        var change = payment_price - parseFloat(total_orders.textContent);
        alert("Salamat,ito na ung sukle: " + change.toFixed(2));
    }
});
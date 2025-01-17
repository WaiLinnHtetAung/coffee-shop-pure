$(document).ready(function() {
    // increase shopping cart qty
    $(document).on('click', '.fa-plus', function () {
        let el = $(this).closest('tr');
        let qty = el.find('.product-qty');
        let price = el.find('.product-price');
        
        qty.text(parseInt(qty.text()) + 1);
        let total = parseInt(qty.text()) * parseInt(price.text());
        el.find('.product-price-total').text(total);
      })

      // decrease shopping cart qty
    $(document).on('click', '.fa-minus', function () {
        let el = $(this).closest('tr');
        let qty = el.find('.product-qty');
        let price = el.find('.product-price');
        
        if(parseInt(qty.text()) != 1) {
            qty.text(parseInt(qty.text()) - 1);
            let total = parseInt(qty.text()) * parseInt(price.text());
            el.find('.product-price-total').text(total);
        }
      })
})
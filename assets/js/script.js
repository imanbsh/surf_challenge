$(document).ready(function () {
  $(".shop-carousel").owlCarousel({
    margin: 0,
    loop: false,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      400: {
        items: 2,
      },
      600: {
        items: 3,
      },
    },
  });

  // OWL with custom navigations
  $(".hero-carousel").owlCarousel({
    items: 1,
    margin: 20,
    loop: false,
    navContainer: ".custom-nav",
    nav: true,
    dots: false,
    onInitialized: updateNavText,
    onChanged: updateNavText,
  });

  function updateNavText(event) {
    let element = $(".custom-nav .owl-nav-text");

    let current_item =
      "<span class='current-item'>" + (event.item.index + 1) + "</span>";
    let total_items =
      "<span class='total-items'>" + event.item.count + "</span>";
    let separator = "<span class='items-separator'>/</span>";

    element.html(current_item + separator + total_items);
  }
});


  //Login
const adresbtn = document.querySelector('#adress-from')
const adrescloss = document.querySelector('#adress-closs')

console.log(adresbtn)
adresbtn.addEventListener("click", function () {
  document.querySelector('.adress-from').style.display = "flex"
})
adrescloss.addEventListener("click", function () {
  document.querySelector('.adress-from').style.display = "none"
})

$(document).ready(function() {
  // Quantity change script
  var proQty = $('.pro-qty');
  // Ensure buttons are not duplicated
  if (proQty.find('.qtybtn').length === 0) {
      proQty.prepend('<span class="dec qtybtn">-</span>');
      proQty.append('<span class="inc qtybtn">+</span>');
  }
  proQty.on('click', '.qtybtn', function () {
      var $button = $(this);
      var oldValue = $button.parent().find('input').val();
      var newVal;
      if ($button.hasClass('inc')) {
          newVal = parseFloat(oldValue) + 1;
      } else {
          newVal = Math.max(0, parseFloat(oldValue) - 1);
      }
      $button.parent().find('input').val(newVal);
      updateTotal();  // Ensure updateTotal() is defined elsewhere or remove this line if not needed
  });

  // Slideshow script
  let slideIndex = 1;
  showSlides(slideIndex);

  window.plusSlides = function(n) {
      showSlides(slideIndex += n);
  };

  window.currentSlide = function(n) {
      showSlides(slideIndex = n);
  };

  function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("demo");
      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
  }

  // Navigation menu script
  window.myFunction = function() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
          x.className += " responsive";
      } else {
          x.className = "topnav";
      }
  };
});


 


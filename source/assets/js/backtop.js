// // Function to scroll to the top of the page for older browsers
// function scrollToTop() {
//     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//     if (scrollTop > 0) {
//       window.requestAnimationFrame(scrollToTop);
//       window.scrollTo(0, scrollTop - scrollTop / 8);
//     }
//   }

//   // JavaScript to show/hide the back-to-top button based on scroll position
//   window.addEventListener('scroll', function() {
//     var backToTopBtn = document.getElementById('backToTopBtn');
//     if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
//       backToTopBtn.style.display = 'block';
//     } else {
//       backToTopBtn.style.display = 'none';
//     }
//   });

//   // JavaScript to handle the back-to-top button click event
//   document.getElementById('backToTopBtn').addEventListener('click', function() {
//     // Smooth scroll to the top of the page
//     if ('scrollBehavior' in document.documentElement.style) {
//       // If smooth scrolling is supported
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//       });
//     } else {
//       // Fallback for older browsers
//       scrollToTop();
//     }
//   });


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.onscroll = function () {
    // Show the button when the user scrolls down 20px from the top
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollBtn").style.display = "block";
    } else {
        document.getElementById("scrollBtn").style.display = "none";
    }
};


{/* <script> */}

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const overLay = document.querySelector(".menu-nav-class");
    const navLinkSidebar = document.getElementById("navLinkSidebar");

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navLinkSidebar.classList.toggle("nav-link-sidebar");
        hamburger.classList.toggle('active');
        overLay.classList.toggle('active');
    });

    overLay.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        navLinkSidebar.classList.toggle("nav-link-sidebar");
        overLay.classList.toggle('active');
    });
});


{/* </script>

<script> */}
document.addEventListener('DOMContentLoaded', function () {
    // Function to handle scroll event
    function handleScroll() {
        var scroll = window.scrollY; // Get the vertical scroll position
        var objectSelect = document.getElementById('section2');
        var objectPosition = objectSelect.getBoundingClientRect().top + window.scrollY;

        if (scroll > objectPosition) {
            document.getElementById('menu-nav').classList.add('displayNav');

        } else {
            document.getElementById('menu-nav').classList.remove('displayNav');
            const navLinks = document.querySelector('.nav-links');
            const hamburger = document.querySelector('.hamburger');
            const overLay = document.querySelector(".menu-nav-class");
            if (navLinks.classList.contains('active')) {
                navLinks.classList.toggle('active');
                hamburger.classList.toggle('active');
                overLay.classList.toggle('active');
                navLinkSidebar.classList.toggle("nav-link-sidebar")
            }

        }
    }

    // Attach scroll event listener to the window
    window.addEventListener('scroll', handleScroll);
});


// </script>


// <script>
document.addEventListener('mousemove', function (e) {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

document.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('hover-this')) {
        document.querySelector('.cursor').style.transform = 'translate(-50%, -50%) scale(3)';
    }
});

document.addEventListener('mouseout', function (e) {
    if (e.target.classList.contains('hover-this')) {
        document.querySelector('.cursor').style.transform = 'translate(-50%, -50%) scale(1)';
    }
});
// </script>



// .......................................Home projects js ..........................................

const clamp = (min, number, max) => Math.min(max, Math.max(number, min));
let prevX = 0;

document.querySelectorAll(".list_item_main").forEach((member) => {
  const hoverMainContainer = member.querySelector(".hover_main_container");
  let timeout;

  member.addEventListener("mousemove", (e) => {
    clearTimeout(timeout);

    const x = e.clientX - member.getBoundingClientRect().left - hoverMainContainer.clientWidth / 2;
    const y = e.clientY - member.getBoundingClientRect().top - hoverMainContainer.clientHeight / 2;
    const rotate = e.clientX - prevX;
    prevX = e.clientX;
    
    // console.log({y, x, rotate});

    requestAnimationFrame(() => {
      hoverMainContainer.style.translate = `${x}px ${y}px`;
      hoverMainContainer.style.rotate = clamp(-8, rotate * 0, 8) + "deg";
    });

    timeout = setTimeout(() => {hoverMainContainer.style.rotate = "0deg"}, 250);
  });

  member.addEventListener("mouseenter", () => {
    setTimeout(() => {
      hoverMainContainer.style.transition = "1200ms cubic-bezier(0.23, 1, 0.320, 1)";
      hoverMainContainer.style.opacity = 1;
    }, 1);
  });

  member.addEventListener("mouseleave", () => {
    hoverMainContainer.style.transition = "none";
    hoverMainContainer.style.opacity = 0;
  });
});



// // Magnetic Buttons Initialization
// function initMagneticButtons() {
//     var magnets = document.querySelectorAll('.magnetic');
//     var strength = 100;
  
//     if(window.innerWidth > 540){
//       magnets.forEach((magnet) => {
//         magnet.addEventListener('mousemove', moveMagnet);
//         magnet.addEventListener('mouseleave', function(event) {
//             gsap.to(event.currentTarget, 1.5, {
//               x: 0, 
//               y: 0, 
//               ease: Elastic.easeOut
//             });
//             gsap.to(event.currentTarget.querySelector(".btn-text"), 1.5, {
//               x: 0, 
//               y: 0, 
//               ease: Elastic.easeOut
//             });
//         });
//       });
  
//       function moveMagnet(event) {
//         var magnetButton = event.currentTarget;
//         var bounding = magnetButton.getBoundingClientRect();
//         var magnetsStrength = magnetButton.getAttribute("data-strength") || strength;
//         var magnetsStrengthText = magnetButton.getAttribute("data-strength-text") || strength;
  
//         gsap.to(magnetButton, 1.5, {
//             x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * magnetsStrength,
//             y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * magnetsStrength,
//             rotate: "0.001deg",
//             ease: Power4.easeOut
//         });
//         gsap.to(magnetButton.querySelector(".btn-text"), 1.5, {
//             x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * magnetsStrengthText,
//             y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * magnetsStrengthText,
//             rotate: "0.001deg",
//             ease: Power4.easeOut
//         });
//       }
//     }
  
//     // Mouse Enter
//     document.querySelectorAll('.btn-click.magnetic').forEach(btn => {
//       btn.addEventListener('mouseenter', function() {
//         const fillElem = this.querySelector(".btn-fill");
//         const textElem = this.querySelector(".btn-text-inner.change");
        
//         if (fillElem) {
//           gsap.to(fillElem, 0.6, {
//             startAt: {y: "76%"},
//             y: "0%",
//             ease: Power2.easeInOut
//           });
//         }
//         if (textElem) {
//           gsap.to(textElem, 0.3, {
//             startAt: {color: "#1C1D20"},
//             color: "#FFFFFF",
//             ease: Power3.easeIn,
//           });
//         }
//         this.parentNode.classList.remove('not-active');
//       });
  
//       btn.addEventListener('mouseleave', function() {
//         const fillElem = this.querySelector(".btn-fill");
//         const textElem = this.querySelector(".btn-text-inner.change");
        
//         if (fillElem) {
//           gsap.to(fillElem, 0.6, {
//             y: "-76%",
//             ease: Power2.easeInOut
//           });
//         }
//         if (textElem) {
//           gsap.to(textElem, 0.3, {
//             color: "#1C1D20",
//             ease: Power3.easeOut,
//             delay: 0.3
//           });
//         }
//         this.parentNode.classList.remove('not-active');
//       });
//     });
//   }
  
//   // Sticky Cursor with Delay Initialization
//   function initStickyCursorWithDelay() {
//     var cursorImage = document.querySelector(".mouse-pos-list-image");
//     var cursorBtn = document.querySelector(".mouse-pos-list-btn");
//     var cursorSpan = document.querySelector(".mouse-pos-list-span");
  
//     var posXImage = 0, posYImage = 0;
//     var posXBtn = 0, posYBtn = 0;
//     var posXSpan = 0, posYSpan = 0;
//     var mouseX = 0, mouseY = 0;
  
//     if(cursorImage || cursorBtn || cursorSpan) {
//       gsap.to({}, 0.0083333333, {
//         repeat: -1,
//         onRepeat: function() {
//           if(cursorImage) {
//             posXImage += (mouseX - posXImage) / 12;
//             posYImage += (mouseY - posYImage) / 12;
//             gsap.set(cursorImage, {css: {left: posXImage, top: posYImage}});
//           }
//           if(cursorBtn) {
//             posXBtn += (mouseX - posXBtn) / 7;
//             posYBtn += (mouseY - posYBtn) / 7;
//             gsap.set(cursorBtn, {css: {left: posXBtn, top: posYBtn}});
//           }
//           if(cursorSpan) {
//             posXSpan += (mouseX - posXSpan) / 6;
//             posYSpan += (mouseY - posYSpan) / 6;
//             gsap.set(cursorSpan, {css: {left: posXSpan, top: posYSpan}});
//           }
//         }
//       });
  
//       document.addEventListener("mousemove", function(e) {
//         mouseX = e.clientX;
//         mouseY = e.clientY;
//       });
//     }
//   }
  
//   // Custom Cursor
//   document.addEventListener('mousemove', function (e) {
//       const cursor = document.querySelector('.cursor');
//       cursor.style.left = `${e.clientX}px`;
//       cursor.style.top = `${e.clientY}px`;
//   });
  
//   document.addEventListener('mouseover', function (e) {
//       if (e.target.classList.contains('hover-this')) {
//           document.querySelector('.cursor').style.transform = 'translate(-50%, -50%) scale(3)';
//       }
//   });
  
//   document.addEventListener('mouseout', function (e) {
//       if (e.target.classList.contains('hover-this')) {
//           document.querySelector('.cursor').style.transform = 'translate(-50%, -50%) scale(1)';
//       }
//   });
  
//   // Initialize functions
//   initMagneticButtons();
//   initStickyCursorWithDelay();
  
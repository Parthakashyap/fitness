// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Add click event to each nav-link
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");
        // Close the menu after clicking a link (for mobile views)
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

// Slider
const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slide');
const totalSlides = slideImages.length;
let currentIndex = 0;
let autoSlideInterval;

// Duplicate the first slide and append it to the end
const firstSlide = slides.firstElementChild.cloneNode(true);
slides.appendChild(firstSlide);

function showSlide(index) {
    slides.style.transition = 'transform 1s ease-in-out';
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function showNextSlide() {
    currentIndex++;
    if (currentIndex === totalSlides) {
        // Move to the position of the duplicated first slide instantly
        slides.style.transition = 'none';
        slides.style.transform = `translateX(0%)`;
        currentIndex = 0;
        
        // Re-enable the transition for the next slide movement
        setTimeout(() => {
            slides.style.transition = 'transform 1s ease-in-out';
            showSlide(currentIndex);
        }, 20); // Short delay to allow for style update
    } else {
        showSlide(currentIndex);
    }
}

function showPreviousSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        // Move to the position of the last slide instantly
        slides.style.transition = 'none';
        currentIndex = totalSlides - 1;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Re-enable the transition for the next slide movement
        setTimeout(() => {
            slides.style.transition = 'transform 1s ease-in-out';
            showSlide(currentIndex);
        }, 20); // Short delay to allow for style update
    } else {
        showSlide(currentIndex);
    }
}

function startAutoSlide() {
    autoSlideInterval = setInterval(showNextSlide, 2000); // 2 seconds
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Start the auto slide initially
startAutoSlide();

// Attach event listeners to buttons
document.querySelector('.next-button').addEventListener('click', () => {
    showNextSlide();
    resetAutoSlide();
});

document.querySelector('.prev-button').addEventListener('click', () => {
    showPreviousSlide();
    resetAutoSlide();
});


// Testimonial Slider

const slides2 = document.querySelector('.slides2');
const slideTestimonials = document.querySelectorAll('.slide2');
const totalSlides2 = slideTestimonials.length;
let currentIndex2 = 0;
let autoSlideInterval2;

// Duplicate the first testimonial and append it to the end
const firstTestimonial = slides2.firstElementChild.cloneNode(true);
slides2.appendChild(firstTestimonial);

function showTestimonialSlide(index) {
    slides2.style.transition = 'transform 1s ease-in-out';
    slides2.style.transform = `translateX(-${index * 100}%)`;
}

function showNextTestimonialSlide() {
    currentIndex2++;
    if (currentIndex2 === totalSlides2) {
        // Move to the position of the duplicated first testimonial instantly
        slides2.style.transition = 'none';
        slides2.style.transform = `translateX(0%)`;
        currentIndex2 = 0;
        
        // Re-enable the transition for the next slide movement
        setTimeout(() => {
            slides2.style.transition = 'transform 1s ease-in-out';
            showTestimonialSlide(currentIndex2);
        }, 20); // Short delay to allow for style update
    } else {
        showTestimonialSlide(currentIndex2);
    }
}

function showPreviousTestimonialSlide() {
    currentIndex2--;
    if (currentIndex2 < 0) {
        // Move to the position of the last testimonial instantly
        slides2.style.transition = 'none';
        currentIndex2 = totalSlides2 - 1;
        slides2.style.transform = `translateX(-${currentIndex2 * 100}%)`;
        
        // Re-enable the transition for the next slide movement
        setTimeout(() => {
            slides2.style.transition = 'transform 1s ease-in-out';
            showTestimonialSlide(currentIndex2);
        }, 20); // Short delay to allow for style update
    } else {
        showTestimonialSlide(currentIndex2);
    }
}

function startAutoTestimonialSlide() {
    autoSlideInterval2 = setInterval(showNextTestimonialSlide, 2000); // 2 seconds
}

function resetAutoTestimonialSlide() {
    clearInterval(autoSlideInterval2);
    startAutoTestimonialSlide();
}

// Start the auto slide initially
startAutoTestimonialSlide();

// Attach event listeners to buttons
document.querySelector('.next-button2').addEventListener('click', () => {
    showNextTestimonialSlide();
    resetAutoTestimonialSlide();
});

document.querySelector('.prev-button2').addEventListener('click', () => {
    showPreviousTestimonialSlide();
    resetAutoTestimonialSlide();
});


// profile section
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slide-container');
    const slideItems = document.querySelectorAll('.slide-about');
    const totalSlides = slideItems.length;
    let currentIndex = 0;
    let autoSlideInterval;

    // Clone the first slide and append it to the end
    const firstSlide = slides.firstElementChild.cloneNode(true);
    slides.appendChild(firstSlide);

    // Function to display the slide based on the index
    function showSlide(index) {
        slides.style.transition = 'transform 1s ease-in-out';
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    // Function to move to the next slide
    function showNextSlide() {
        currentIndex++;
        if (currentIndex === totalSlides) {
            // When we reach the cloned first slide, reset to the real first slide instantly
            slides.style.transition = 'none'; // Disable transition
            slides.style.transform = `translateX(0%)`; // Jump back to the first slide
            currentIndex = 0;
            
            // Re-enable the transition for the next slide movement
            setTimeout(() => {
                slides.style.transition = 'transform 1s ease-in-out';
                showSlide(currentIndex);
            }, 20); // Short delay to allow for the style update
        } else {
            showSlide(currentIndex);
        }
    }

    // Start the auto slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(showNextSlide, 2000); // Auto-slide every 2 seconds
    }

    // Stop auto slide
    function stopAutoSlide() {
        clearInterval(autoSlideInterval); // Stop the auto slide
    }

    // Start auto slide initially when the page loads
    startAutoSlide();

    
});



// Service Section Slider

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.service-wrapper');
    const prevBtn = document.querySelector('.btn4');
    const nextBtn = document.querySelector('.btn5');
    let slideIndex = 0;
    const slides = document.querySelectorAll('.service-slide');
    let visibleSlides = window.innerWidth >= 768 ? 3 : 1;

    function updateSliderPosition() {
        const slideWidth = slides[0].offsetWidth;
        slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    }

    function updateVisibleSlides() {
        visibleSlides = window.innerWidth >= 768 ? 3 : 1;
        updateSliderPosition();
    }

    prevBtn.addEventListener('click', () => {
        slideIndex -= visibleSlides;
        if (slideIndex < 0) {
            slideIndex = slides.length - visibleSlides;
        }
        updateSliderPosition();
    });

    nextBtn.addEventListener('click', () => {
        slideIndex += visibleSlides;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        updateSliderPosition();
    });

    window.addEventListener('resize', () => {
        updateVisibleSlides();
    });

    // Initial update
    updateSliderPosition();
});

// Blog Section
document.addEventListener('DOMContentLoaded', function(){
    const blogslider = document.querySelector('.blog-wrapper');
    const blogprevBtn = document.querySelector('.blog-prevbtn');
    const blognextBtn = document.querySelector('.blog-nextbtn');
    let blogslideIndex = 0;
    const blogsides = document.querySelectorAll('.blog-slide');
    
    // Initialize visible slides based on the window width
    let blogvisibleSlides = window.innerWidth >= 992 ? 3 : (window.innerWidth >= 768 ? 2 : 1);

    function blogupdateSliderPosition(){
        const blogslideWidth = blogsides[0].offsetWidth;
        blogslider.style.transform = `translateX(-${blogslideIndex * blogslideWidth}px)`; // Fixed string interpolation
    }

    function blogupdateVisibleSlides(){
        blogvisibleSlides = window.innerWidth >= 992 ? 3 : (window.innerWidth >= 768 ? 2 : 1);
        blogupdateSliderPosition();
    }

    blogprevBtn.addEventListener('click', () => {
        blogslideIndex -= blogvisibleSlides;
        if(blogslideIndex < 0){
            blogslideIndex = blogsides.length - blogvisibleSlides;
        }
        blogupdateSliderPosition();
    });

    blognextBtn.addEventListener('click', () => {
        blogslideIndex += blogvisibleSlides;
        if(blogslideIndex >= blogsides.length){
            blogslideIndex = 0;
        }
        blogupdateSliderPosition();
    });

    window.addEventListener('resize', () => {
        blogupdateVisibleSlides(); // Call the function properly
    });

    blogupdateSliderPosition(); // Initial slider position
});

//Achivement section animation
document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('.h3-heading');

    function animateNumbers(heading) {
        const target = +heading.getAttribute('data-target'); // Convert target value to number
        const duration = 10000; // Total duration for the animation in milliseconds
        const increment = target / (duration / 200); // Calculate increment dynamically based on duration
        let count = 0;
        const originalText = heading.textContent.replace(/[0-9]/g, ''); // Extract symbols like + or %


        function updateNumber() {
            count += increment; // Increment the count dynamically
            if (count < target) {
                heading.textContent = Math.floor(count) + originalText; // Display current count with symbols
                setTimeout(updateNumber, 200); // Set a delay for smoother animation
            } else {
                heading.textContent = target + originalText; // Ensure final value is exact
            }
        }

        updateNumber();
    }

    function checkVisibility() {
        const windowHeight = window.innerHeight;
        headings.forEach(heading => {
            const rect = heading.getBoundingClientRect();
            if (rect.top < windowHeight && rect.bottom > 0) {
                animateNumbers(heading);
            }
        });
    }

    // Check visibility on scroll and resize
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // Initial check
    checkVisibility();
});


// // JavaScript for Modal Functionality
// Select all button elements with the class 'blog-button'
const buttons = document.querySelectorAll('.blog-button');

// Select the modal, its close button, and content elements
const modal = document.getElementById('myModal');
const closeBtn = modal.querySelector('.close');

// Function to open the modal and populate it with content
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal-id'); // Get the modal ID from the button
        // Assuming you have a method to get content based on the modalId
        // You may modify this according to your actual content management
        setModalContent(modalId);
        modal.style.display = "block"; // Show the modal
    });
});

// Function to set modal content based on the button clicked
function setModalContent(id) {
    // Populate the modal content dynamically based on the id
    const titles = [
        "Homemade Gut Health Drinks",
        "Nourishing Beverages",
        "Health Benefits",
        "Making Smoothies",
        "Incorporating Fermented Drinks",
        "Weight Management",
        "Kombucha Benefits",
        "Choosing Right Drinks",
        "Overall Well-being"
    ];

    const subtitles = [
        "Tasty Recipes for Your Gut",
        "Packed with Probiotics",
        "Gut-Friendly Drinks",
        "Gut Health Tips",
        "Diet Tips",
        "Smoothie Benefits",
        "Gut Health Effects",
        "Gut Health Advice",
        "Gut Health Impact"
    ];

    const image = [
        "images/Frame 4.png"
    ]

    const paragraphs = [
        "Discover 12 delicious homemade gut health drinks to maintain optimal gut health. Explore recipes for nourishing beverages packed with probiotics & nutrients.Discover 12 delicious homemade gut health drinks to maintain optimal gut health. Explore recipes for nourishing beverages packed with probiotics & nutrients.Discover 12 delicious homemade gut health drinks to maintain optimal gut health. Explore recipes for nourishing beverages packed with probiotics & nutrients.Discover 12 delicious homemade gut health drinks to maintain optimal gut health. Explore recipes for nourishing beverages packed with probiotics & nutrients.Discover 12 delicious homemade gut health drinks to maintain optimal gut health. Explore recipes for nourishing beverages packed with probiotics & nutrients.Discover 12 delicious homemade gut health drinks to maintain optimal gut health. Explore recipes for nourishing beverages packed with probiotics & nutrients.Discover 12 delicious homemade gut health drinks to maintain optimal gut health. Explore recipes for nourishing beverages packed with probiotics & nutrients.Discover 12 delicious homemade gut health drinks to maintain optimal gut health. Explore recipes for nourishing beverages packed with probiotics & nutrients.Discover 12 delicious homemade gut health drinks to maintain optimal gut health. Explore recipes for nourishing beverages packed with probiotics & nutrients",
        "Explore recipes for beverages that are rich in probiotics and nutrients for better digestion.",
        "Learn about the health benefits of various gut-friendly drinks and how they can improve your well-being.",
        "Tips on how to make healthy smoothies that improve gut health and overall wellness.",
        "How to incorporate more fermented drinks into your daily diet and their health benefits.",
        "Learn how gut health smoothies can aid in weight management and a balanced diet.",
        "Discover the amazing benefits of drinking kombucha for digestive health.",
        "Advice on how to choose the right gut health drinks to include in your diet.",
        "Understanding how your gut health can dramatically affect overall well-being."
    ];

    // Set content into the modal
    modal.querySelector('.blog1-heading').innerText = titles[id - 1]; // 1-based id for titles
    modal.querySelector('.blog1-headingh2').innerText = subtitles[id - 1]; // 1-based id for subtitles
    modal.querySelector('.blog1-image').src = image[id - 1]; // 1-based
    modal.querySelector('.blog1-para').innerText = paragraphs[id - 1]; // 1-based id for paragraphs
}

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', function() {
    modal.style.display = "none"; // Hide the modal
});

// Close the modal when clicking outside of the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Hide the modal
    }
});






//multiple selector
const selectBtn = document.querySelector('.select-btn');
const listItems = document.querySelector('.list-items');

// Toggle dropdown open/close when clicking the select button
selectBtn.addEventListener('click', function (e) {
    e.stopPropagation();  // Prevent closing when clicking inside
    listItems.style.display = listItems.style.display === 'block' ? 'none' : 'block';
});

// Close the dropdown when clicking outside
document.addEventListener('click', function () {
    if (listItems.style.display === 'block') {
        listItems.style.display = 'none';
    }
});

// Prevent closing when clicking inside the dropdown itself
listItems.addEventListener('click', function (e) {
    e.stopPropagation();
});






/* <!-- Frequently asked section --> */
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', function() {
      // Toggle visibility of the answer
      const answer = this.nextElementSibling;
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        this.classList.remove('active'); // Remove rotation when closed
      } else {
        answer.style.display = 'block';
        this.classList.add('active'); // Add rotation when opened
      }
  
      // Optionally, close other open answers when one is clicked
      document.querySelectorAll('.faq-answer').forEach(ans => {
        if (ans !== answer) {
          ans.style.display = 'none';
          ans.previousElementSibling.classList.remove('active'); // Reset icon rotation

        }
      });
    });
  });
  

// video


// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Add click event to each nav-link
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
    // Close the menu after clicking a link (for mobile views)
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Slider
const slides = document.querySelector(".slides");
const slideImages = document.querySelectorAll(".slide");
const totalSlides = slideImages.length;
let currentIndex = 0;
let autoSlideInterval;

// Duplicate the first slide and append it to the end
const firstSlide = slides.firstElementChild.cloneNode(true);
slides.appendChild(firstSlide);

function showSlide(index) {
  slides.style.transition = "transform 1s ease-in-out";
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function showNextSlide() {
  currentIndex++;
  if (currentIndex === totalSlides) {
    // Move to the position of the duplicated first slide instantly
    slides.style.transition = "none";
    slides.style.transform = `translateX(0%)`;
    currentIndex = 0;

    // Re-enable the transition for the next slide movement
    setTimeout(() => {
      slides.style.transition = "transform 1s ease-in-out";
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
    slides.style.transition = "none";
    currentIndex = totalSlides - 1;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Re-enable the transition for the next slide movement
    setTimeout(() => {
      slides.style.transition = "transform 1s ease-in-out";
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
document.querySelector(".next-button").addEventListener("click", () => {
  showNextSlide();
  resetAutoSlide();
});

document.querySelector(".prev-button").addEventListener("click", () => {
  showPreviousSlide();
  resetAutoSlide();
});

// Testimonial Slider

const slides2 = document.querySelector(".slides2");
const slideTestimonials = document.querySelectorAll(".slide2");
const totalSlides2 = slideTestimonials.length;
let currentIndex2 = 0;
let autoSlideInterval2;

// Duplicate the first testimonial and append it to the end
const firstTestimonial = slides2.firstElementChild.cloneNode(true);
slides2.appendChild(firstTestimonial);

function showTestimonialSlide(index) {
  slides2.style.transition = "transform 1s ease-in-out";
  slides2.style.transform = `translateX(-${index * 100}%)`;
}

function showNextTestimonialSlide() {
  currentIndex2++;
  if (currentIndex2 === totalSlides2) {
    // Move to the position of the duplicated first testimonial instantly
    slides2.style.transition = "none";
    slides2.style.transform = `translateX(0%)`;
    currentIndex2 = 0;

    // Re-enable the transition for the next slide movement
    setTimeout(() => {
      slides2.style.transition = "transform 1s ease-in-out";
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
    slides2.style.transition = "none";
    currentIndex2 = totalSlides2 - 1;
    slides2.style.transform = `translateX(-${currentIndex2 * 100}%)`;

    // Re-enable the transition for the next slide movement
    setTimeout(() => {
      slides2.style.transition = "transform 1s ease-in-out";
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
document.querySelector(".next-button2").addEventListener("click", () => {
  showNextTestimonialSlide();
  resetAutoTestimonialSlide();
});

document.querySelector(".prev-button2").addEventListener("click", () => {
  showPreviousTestimonialSlide();
  resetAutoTestimonialSlide();
});

// profile section
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".slide-container");
  const slideItems = document.querySelectorAll(".slide-about");
  const totalSlides = slideItems.length;
  let currentIndex = 0;
  let autoSlideInterval;

  // Clone the first slide and append it to the end
  const firstSlide = slides.firstElementChild.cloneNode(true);
  slides.appendChild(firstSlide);

  // Function to display the slide based on the index
  function showSlide(index) {
    slides.style.transition = "transform 1s ease-in-out";
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  // Function to move to the next slide
  function showNextSlide() {
    currentIndex++;
    if (currentIndex === totalSlides) {
      // When we reach the cloned first slide, reset to the real first slide instantly
      slides.style.transition = "none"; // Disable transition
      slides.style.transform = `translateX(0%)`; // Jump back to the first slide
      currentIndex = 0;

      // Re-enable the transition for the next slide movement
      setTimeout(() => {
        slides.style.transition = "transform 1s ease-in-out";
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

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".service-wrapper");
  const prevBtn = document.querySelector(".btn4");
  const nextBtn = document.querySelector(".btn5");
  let slideIndex = 0;
  const slides = document.querySelectorAll(".service-slide");
  let visibleSlides = window.innerWidth >= 768 ? 3 : 1;

  function updateSliderPosition() {
    const slideWidth = slides[0].offsetWidth;
    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  }

  function updateVisibleSlides() {
    visibleSlides = window.innerWidth >= 768 ? 3 : 1;
    updateSliderPosition();
  }

  prevBtn.addEventListener("click", () => {
    slideIndex -= visibleSlides;
    if (slideIndex < 0) {
      slideIndex = slides.length - visibleSlides;
    }
    updateSliderPosition();
  });

  nextBtn.addEventListener("click", () => {
    slideIndex += visibleSlides;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    updateSliderPosition();
  });

  window.addEventListener("resize", () => {
    updateVisibleSlides();
  });

  // Initial update
  updateSliderPosition();
});

// Blog Section
document.addEventListener("DOMContentLoaded", function () {
  const blogslider = document.querySelector(".blog-wrapper");
  const blogprevBtn = document.querySelector(".blog-prevbtn");
  const blognextBtn = document.querySelector(".blog-nextbtn");
  let blogslideIndex = 0;
  const blogsides = document.querySelectorAll(".blog-slide");

  // Initialize visible slides based on the window width
  let blogvisibleSlides =
    window.innerWidth >= 992 ? 3 : window.innerWidth >= 768 ? 2 : 1;

  function blogupdateSliderPosition() {
    const blogslideWidth = blogsides[0].offsetWidth;
    blogslider.style.transform = `translateX(-${
      blogslideIndex * blogslideWidth
    }px)`; // Fixed string interpolation
  }

  function blogupdateVisibleSlides() {
    blogvisibleSlides =
      window.innerWidth >= 992 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    blogupdateSliderPosition();
  }

  blogprevBtn.addEventListener("click", () => {
    blogslideIndex -= blogvisibleSlides;
    if (blogslideIndex < 0) {
      blogslideIndex = blogsides.length - blogvisibleSlides;
    }
    blogupdateSliderPosition();
  });

  blognextBtn.addEventListener("click", () => {
    blogslideIndex += blogvisibleSlides;
    if (blogslideIndex >= blogsides.length) {
      blogslideIndex = 0;
    }
    blogupdateSliderPosition();
  });

  window.addEventListener("resize", () => {
    blogupdateVisibleSlides(); // Call the function properly
  });

  blogupdateSliderPosition(); // Initial slider position
});

//Achivement section animation
document.addEventListener("DOMContentLoaded", function () {
  const headings = document.querySelectorAll(".h3-heading");

  function animateNumbers(heading) {
    const target = +heading.getAttribute("data-target"); // Convert target value to number
    const duration = 1000; // Total duration for the animation in milliseconds
    const increment = target / (duration / 50); // Calculate increment dynamically based on duration
    let count = 0;
    const originalText = heading.textContent.replace(/[0-9]/g, ""); // Extract symbols like + or %

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
    headings.forEach((heading) => {
      const rect = heading.getBoundingClientRect();
      if (rect.top < windowHeight && rect.bottom > 0) {
        animateNumbers(heading);
      }
    });
  }

  // Check visibility on scroll and resize
  window.addEventListener("scroll", checkVisibility);
  window.addEventListener("resize", checkVisibility);

  // Initial check
  checkVisibility();
});

// // JavaScript for Modal Functionality
// Select all button elements with the class 'blog-button'
const buttons = document.querySelectorAll(".blog-button");

// Select the modal, its close button, and content elements
const modal = document.getElementById("myModal");
const closeBtn = modal.querySelector(".close");

// Function to open the modal and populate it with content
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const modalId = this.getAttribute("data-modal-id"); // Get the modal ID from the button
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
    "Revitalize Your Body, Renew Your Life: The Emotional Journey of a 7-Day Weight Loss Diet Plan",
    "Embrace Your Journey: How This Life-Changing Diet Empowers Women in Their Weight Loss!",
    "Breaking Free from the Trap: Choosing Emotional Wellness Over Weight Loss Tablets and Drinks",
    "Top 10 Emotional Triggers for Weight Gain and How to Overcome Them",
    "Incorporating Fermented Drinks",
    "Weight Management",
    "Kombucha Benefits",
    "Choosing Right Drinks",
    "Overall Well-being",
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
    "Gut Health Impact",
  ];

  const image = ["images/Frame 4.png"];

  const paragraphs = [
    `Weight loss is often seen as a physical transformation, but the emotional and mental aspects are just as important. Going through a 7-day weight loss diet plan is not just about shedding pounds; it’s an emotional and psychological journey that can lead to renewed energy, a boost in self-confidence, and a sense of accomplishment. In this blog post, we’ll explore the emotional ups and downs that come with embarking on a 7-day diet plan and offer tips on how to navigate this transformative experience. \n 
    Understanding the Emotional Impact of Weight Loss

    The Excitement of Starting a New Journey

    When you first decide to start a 7-day weight loss diet plan, the excitement can be overwhelming. You imagine a future where you feel more energized, lighter, and more confident. This initial enthusiasm is powerful and can give you the motivation to push through the early stages of the diet.\nHowever, it's important to recognize that this excitement can fade as the days go on. Managing expectations from the start will help maintain momentum throughout the week.\n
    The Challenge of Letting Go of Comfort Foods
    
    Food is often linked to comfort and emotional well-being. For many, certain foods are associated with memories, family traditions, or personal routines. During the first few days of the diet, you may experience cravings and emotional withdrawal from these comfort foods.\nIt’s common to feel deprived or even frustrated when you’re not eating the foods you’re used to. But remember, this is a temporary phase that can help you develop a healthier relationship with food. Recognizing the emotional attachment you have to certain foods is a key part of breaking free from unhealthy eating habits.

    Emotional Detox: Cleansing the Mind and Body

    The 7-day weight loss plan is not just a detox for your body—it’s a detox for your mind as well. The first few days might bring about irritability, fatigue, or even mood swings as your body adjusts to the new dietary regime. This is your body’s way of cleansing itself from toxins, processed foods, and sugar, which can have a significant effect on your mental state.\nThis emotional detox can feel overwhelming, but it is an important step in the process. Acknowledging that this is part of the journey will make it easier to handle. Many find that by the third or fourth day, their mood stabilizes, and they start to feel more mentally clear and focused.
    Day-by-Day Emotional Experiences
    
    Day 1: Optimism and Determination

    The first day of a weight loss plan often comes with a strong sense of optimism. You’re mentally prepared, excited to take control of your health, and ready to commit to the plan. You may feel empowered and driven, especially as you follow the new diet guidelines and begin the process.\nHowever, it’s important to start slow. Don’t put too much pressure on yourself to see immediate results. The key to maintaining this sense of determination is understanding that sustainable weight loss happens over time.

    Day 2-3: The Emotional Slump

    By day two or three, the initial excitement may start to wear off. This is where many people begin to feel the emotional weight of the diet. Cravings for your favorite snacks may intensify, and fatigue might set in as your body starts adjusting to fewer calories or healthier food options.\nThis stage is emotionally challenging. It’s easy to feel discouraged, but these feelings are temporary. Finding ways to distract yourself, such as engaging in light exercise or meditation, can help shift focus away from cravings.

    Day 4-5: Breakthrough and Emotional Clarity

    The mid-point of the 7-day plan often brings a breakthrough moment. Many people report feeling lighter, both physically and emotionally. Your body is adjusting to the new diet, and you may notice increased energy levels and a clearer mind.\nThis is the stage where many experience emotional clarity. The brain fog that may have accompanied the first few days begins to lift, leaving you feeling more focused and mentally sharp. You start to realize that you are capable of achieving your goals, which boosts self-confidence and reinforces your commitment to the plan.

    Day 6-7: The Final Push and Sense of Accomplishment

    The last two days of the 7-day diet plan are usually filled with mixed emotions. On one hand, you’re proud of how far you’ve come, but on the other hand, you might be battling impatience as you approach the finish line.\nAt this point, it’s crucial to celebrate small victories. Reflect on how much your body has transformed in just a week, and how much mental resilience you’ve built. As you complete the diet plan, there’s often a sense of accomplishment and renewed self-belief. You’ve proven to yourself that you can overcome challenges and make positive changes in your life.


    How to Stay Emotionally Grounded During a 7-Day Weight Loss Diet\n
    Practice Mindful Eating

    Mindful eating is an excellent tool for staying emotionally grounded during a weight loss plan. By paying attention to what you eat and how it makes you feel, you create a healthier relationship with food. Instead of rushing through meals, take time to savor each bite, noticing the flavors and textures.\nThis practice helps reduce emotional eating and fosters a sense of gratitude for nourishing your body. Over time, mindful eating can help you develop more balanced eating habits, even after the diet plan is over.

    Focus on the Bigger Picture

    It’s easy to get caught up in daily fluctuations on the scale, but focusing too much on the numbers can lead to emotional ups and downs. Instead of obsessing over each pound, shift your focus to how you feel overall. Are you sleeping better? Do you have more energy? Are you feeling more confident in your body?\nFocusing on non-scale victories will keep you motivated and help you see the bigger picture of your health journey.

    Use Positive Affirmations

    Your mindset plays a crucial role in how successful you are during a 7-day weight loss diet plan. Negative self-talk can sabotage your efforts and make you feel emotionally drained. Incorporating positive affirmations into your daily routine can help shift your mindset.\nTry saying things like:\n   "I am capable of achieving my goals."\n    "My body deserves to be nourished with healthy foods."\n    "I am becoming stronger and healthier each day."\nThese affirmations can help reframe negative thoughts and reinforce a positive emotional outlook.

    Lean on a Support System

    Weight loss can be an isolating experience, but it doesn’t have to be. Having a support system in place can make all the difference when it comes to staying emotionally balanced during a diet plan. Whether it’s friends, family, or an online community, talking to others about your progress and challenges can provide emotional relief.\nSharing your journey with others allows you to celebrate your successes, vent about frustrations, and receive encouragement when you need it most.

    The Long-Term Emotional Benefits of Completing a 7-Day Weight Loss Plan

    Completing a 7-day weight loss diet plan is not just about the physical results—it’s also about the emotional benefits that come from taking control of your health. The process teaches you discipline, patience, and resilience, all of which can be applied to other areas of life.\nMoreover, the confidence that comes from achieving a short-term goal can inspire you to set and achieve larger health and wellness goals in the future. You may find that this emotional journey leaves you feeling more empowered and in tune with your body, leading to a healthier and more balanced lifestyle overall.
    
    `,
    `In the quest for health and well-being, many women are turning to transformative diet plans that not only help them lose weight but also empower them mentally and emotionally. Weight loss is more than just dropping numbers on a scale—it’s a holistic journey that encompasses self-discovery, inner strength, and reclaiming one's body. The right diet can be life-changing, offering women the tools they need to regain control over their health while building self-confidence and resilience.
    This blog explores how diet plans designed for women can create profound changes in their physical health, emotional well-being, and overall lifestyle.
    
    Why Women’s Weight Loss Journeys Are Unique
    
    The Emotional Connection to Food
    
    For many women, food isn't just about sustenance; it's tied to emotions, memories, and even coping mechanisms. From celebratory meals to stress eating, food plays a significant role in emotional regulation. Dieting can challenge this deeply embedded relationship, making weight loss an emotional and psychological journey, not just a physical one.\nWomen, in particular, often juggle multiple roles—mother, professional, caregiver—and can feel overwhelmed by the demands of everyday life. Emotional eating becomes a form of escape or self-comfort. Recognizing this connection is the first step toward empowering women to regain control over their eating habits. Through mindful eating practices and dietary changes, women can develop a healthier, more balanced relationship with food.
    
    Hormonal Changes and Weight Loss Challenges
    
    A woman’s body undergoes various hormonal changes throughout her life, from puberty and pregnancy to menopause. These hormonal fluctuations can have a direct impact on weight loss efforts, making it more challenging for women to achieve their goals compared to men. Estrogen, cortisol, and insulin resistance are just a few factors that contribute to stubborn fat, especially around the midsection.\nHowever, specialized diet plans that take hormonal balance into account can make all the difference. When women follow a plan that’s designed for their unique physiological needs, they are empowered to not only lose weight but also improve their overall health. This may involve focusing on nutrient-dense foods, balancing macronutrients, and timing meals to support hormonal health.
    
    The Psychological Barriers to Weight Loss
    
    Another reason weight loss is particularly challenging for women is the psychological barriers they face. Women are often subjected to societal pressures about appearance, body image, and beauty standards. These pressures can lead to self-doubt and negative self-talk, which hinder the weight loss process.\nEmpowering women through diet involves more than just meal plans and exercise; it requires a mindset shift. By embracing self-love, practicing positive affirmations, and setting realistic goals, women can break free from these psychological barriers. The goal is to cultivate a sense of worth that isn’t tied to a specific weight or size but to health, happiness, and well-being.
    
    Choosing the Right Diet: A Holistic Approach

    Focusing on Sustainable, Long-Term Habits

    Crash diets and extreme calorie restrictions might result in quick weight loss, but they are rarely sustainable. In fact, many women experience the dreaded yo-yo effect, where they regain the lost weight and more after ending the diet. Sustainable weight loss requires developing long-term habits that support overall health rather than just focusing on rapid results.\nA life-changing diet plan is one that empowers women by providing them with the tools they need to succeed long-term. This involves learning how to make healthier food choices, understanding portion control, and incorporating physical activity in a way that feels manageable and enjoyable. It’s about creating a lifestyle that supports weight management and well-being for years to come.

    Nutrient-Rich, Whole Foods

    A diet plan that empowers women emphasizes nutrient-dense, whole foods. This includes plenty of fresh fruits, vegetables, lean proteins, and healthy fats. These foods provide essential vitamins and minerals that support the body’s metabolism, improve energy levels, and promote overall well-being.\nWhen women shift their focus from cutting calories to nourishing their bodies with high-quality foods, they often feel more satisfied and energized. This makes it easier to stick with the diet and avoid unhealthy cravings.

    Customizing Diets for Individual Needs

    One of the key aspects of an empowering diet plan is customization. Every woman’s body is different, and what works for one may not work for another. A diet that takes into account an individual’s age, weight, health status, and lifestyle can be much more effective in achieving lasting results.\nFor example, some women may benefit from a low-carb diet, while others may thrive on a balanced approach that includes a variety of macronutrients. Some may prefer intermittent fasting, while others might do better with smaller, more frequent meals. The key is finding what works best for each woman’s unique needs and preferences.

    The Empowering Benefits of a Life-Changing Diet
    Building Confidence and Self-Esteem

    One of the most profound effects of embarking on a weight loss journey is the boost in confidence and self-esteem that comes from achieving personal health goals. When women see the positive changes in their bodies, they feel more empowered to take control of other aspects of their lives.\nAchieving weight loss goals can serve as a reminder that change is possible. It reinforces the idea that women are capable of anything they set their minds to, building a deep sense of inner strength and resilience.

    Developing a Healthier Relationship with Food

    Dieting isn’t just about restriction or following rules—it’s about learning how to fuel your body in a way that feels nourishing and satisfying. For many women, a life-changing diet allows them to reevaluate their relationship with food, transitioning away from emotional eating and toward mindful, intuitive eating.\n By focusing on the quality of food rather than just calorie content, women can develop a sense of empowerment around their eating choices. They learn to listen to their body’s hunger and fullness cues, understanding when they need nourishment and when they are eating out of habit or emotion.

    Improved Physical and Mental Health

    The physical benefits of weight loss are well-known, from reduced risk of chronic diseases to improved energy levels and mobility. However, the mental health benefits are equally significant. Losing weight, especially through a holistic, empowering diet plan, can lead to reduced stress, better sleep, and improved mood.\nFor many women, achieving weight loss isn’t just about looking better—it’s about feeling better, both physically and mentally. As the body becomes healthier, the mind follows suit, leading to a sense of well-being and peace.

    Cultivating Resilience and Determination

    Weight loss is not always a smooth or easy journey. There will be setbacks, plateaus, and moments of doubt. But one of the most empowering aspects of this process is the resilience and determination that women build along the way. Learning to push through challenges, stay committed, and keep going even when progress slows teaches women valuable lessons that apply to all areas of life.\nThis resilience is one of the most life-changing aspects of a successful diet plan. Women emerge from the experience stronger, more determined, and more capable of facing any challenge that comes their way.

    Staying Motivated Throughout the Journey
    Setting Realistic and Achievable Goals

    One of the biggest mistakes women make when starting a weight loss journey is setting unrealistic goals. Losing a significant amount of weight in a short period is not only unhealthy, but it can also lead to burnout and frustration.\nInstead, focus on setting small, achievable goals that build up over time. This could be as simple as losing 1-2 pounds per week or committing to a daily walk. These small wins build momentum and keep motivation high throughout the process.

    Celebrating Non-Scale Victories
    Weight loss isn’t just about the number on the scale. Women should celebrate other victories along the way, such as fitting into a favorite pair of jeans, having more energy to play with their kids, or feeling more confident in social situations.\nBy shifting the focus away from the scale and toward how they feel, women can maintain motivation and feel empowered throughout the journey.

    Surrounding Yourself with a Support System

    Having a strong support system can make all the difference in a weight loss journey. Whether it’s family, friends, or an online community, having people who encourage, uplift, and share in your successes can help keep you on track and motivated.\nA support system not only provides accountability but also offers emotional encouragement during the tougher moments. Knowing that you are not alone in your journey is an empowering feeling in itself.

    `,
    `In the fast-paced, results-driven world of weight loss, it's easy to be tempted by the allure of quick fixes like weight loss tablets, drinks, and other supplements. These products often promise rapid results with little effort, leading many to fall into the trap of using them as a solution for weight struggles. However, while these methods may offer temporary results, they often neglect the deeper issue at hand: emotional wellness.\nTrue, sustainable weight loss goes beyond the scale. It’s about nurturing emotional health, understanding the body’s needs, and developing habits that lead to long-term well-being. In this blog post, we’ll explore the dangers of relying on weight loss tablets and drinks, and how choosing emotional wellness can lead to more fulfilling and lasting results.

    The Temptation of Quick Fixes: Weight Loss Tablets and Drinks

    The Appeal of Instant Results

    Weight loss tablets and drinks flood the market with promises of instant results. Ads boast of shedding pounds within days or weeks, all without exercise or dieting. The idea that a pill or drink can melt fat away seems like the perfect solution, especially for those struggling with their weight. This appeal is magnified by a society that often values appearance over health, pushing the notion that being thin equates to success, beauty, and happiness.\nHowever, these quick fixes rarely live up to their promises. Most of the weight lost through such methods is water weight or muscle mass, not fat. The results, if any, are often temporary, leaving users frustrated when they regain the weight they lost as soon as they stop using the product. This cycle creates an unhealthy relationship with weight loss and body image, fostering a sense of inadequacy and failure.

    The Risks of Weight Loss Tablets and Drinks

    The weight loss industry, valued at billions of dollars, thrives on selling products like tablets and drinks that may not only be ineffective but also harmful. Many weight loss supplements contain harmful ingredients, including stimulants, laxatives, and diuretics, which can have severe side effects such as:

    Increased heart rate and blood pressure\nAnxiety and mood swings\nDigestive issues like nausea or diarrhea\nNutritional deficiencies\nDehydration and electrolyte imbalances
    
    Moreover, many of these products lack proper regulation. They often contain unlisted ingredients, which can interact dangerously with other medications. This makes them not only unreliable but also a serious risk to your health.

    The Cycle of Dependency

    One of the biggest dangers of using weight loss tablets and drinks is the cycle of dependency they can create. People often become reliant on these products to maintain their weight, believing they are essential for weight management. Over time, this can lead to an unhealthy mindset where individuals feel powerless to achieve their goals without these products, fostering feelings of insecurity and helplessness.\nThis dependency can also mask deeper emotional and psychological issues. For many, weight gain is closely tied to emotional factors such as stress, anxiety, or depression. By turning to tablets and drinks, individuals avoid addressing these root causes, perpetuating a cycle that never leads to true healing or sustainable weight loss.

    Understanding the Link Between Emotional Health and Weight

    Emotional Eating: A Common Coping Mechanism

    Emotional eating is a significant barrier for many people trying to lose weight. Food can serve as a form of comfort in times of stress, sadness, or boredom. Over time, using food to cope with emotions can lead to overeating, weight gain, and an unhealthy relationship with food.\nThe problem with quick fixes like tablets and drinks is that they do nothing to address emotional eating. Instead of tackling the root cause of weight gain—emotional struggles—they provide a temporary solution that doesn’t last. This leaves individuals stuck in a cycle where they are continually battling their weight without ever addressing the underlying emotional triggers.

    The Impact of Stress on Weight Loss

    Stress is another major factor that impacts weight loss. When you're stressed, your body produces more cortisol, a hormone that can lead to weight gain, particularly around the abdomen. Additionally, stress can disrupt sleep patterns, decrease motivation for exercise, and contribute to unhealthy eating habits.\nWeight loss tablets and drinks can’t alleviate stress. In fact, many stimulant-based products can increase anxiety, worsening the problem. Addressing stress through emotional wellness practices like mindfulness, therapy, or relaxation techniques can not only help with weight management but also improve overall health and well-being.

    The Importance of Self-Love and Body Positivity

    For many, the desire to lose weight stems from dissatisfaction with their appearance. In a society that often equates thinness with beauty and worth, it’s easy to fall into the trap of believing that weight loss will bring happiness. However, research shows that achieving a lower weight doesn’t always equate to improved emotional well-being.\nInstead of focusing on the number on the scale, shifting toward self-love and body positivity can be transformative. Embracing your body, regardless of its size, and focusing on how you feel rather than how you look can help break the cycle of emotional distress tied to weight. When you approach health and wellness from a place of self-care rather than self-criticism, the entire weight loss process becomes more positive and sustainable.

    Choosing Emotional Wellness Over Quick Fixes

    The Power of Mindful Eating

    Mindful eating is a practice that encourages individuals to pay attention to their body’s hunger and fullness cues, savor their food, and make conscious food choices. Instead of relying on restrictive diets or supplements, mindful eating helps you develop a healthy relationship with food.\nBy tuning in to your body’s signals, you’re more likely to eat when you’re hungry and stop when you’re full. This practice can reduce emotional eating and help you understand the difference between physical hunger and emotional cravings. Over time, mindful eating can lead to weight loss, improved digestion, and greater satisfaction with your meals.

    Building Healthy Habits for Sustainable Weight Loss

    Sustainable weight loss doesn’t happen overnight. It requires building healthy habits that support both your physical and emotional well-being. Instead of turning to weight loss tablets and drinks, focus on developing habits that nourish your body and mind, such as:

    Eating a balanced diet with whole, nutrient-rich foods\nEngaging in regular physical activity that you enjoy\nGetting enough sleep and managing stress\nDrinking plenty of water to stay hydrated\nSurrounding yourself with a supportive community

    These habits not only lead to gradual and lasting weight loss but also improve your overall health and emotional wellness. By focusing on long-term changes rather than short-term fixes, you set yourself up for lasting success.

    Seeking Emotional Support

    Addressing emotional struggles is key to achieving true wellness. Whether it’s through therapy, support groups, or talking to a trusted friend or family member, seeking emotional support can help you understand the root causes of your weight gain and develop healthier coping mechanisms.\nTherapies like cognitive-behavioral therapy (CBT) can be particularly helpful in addressing negative thought patterns that contribute to emotional eating or body dissatisfaction. Learning how to manage stress, anxiety, and other emotional challenges will not only improve your mental health but also make your weight loss journey more manageable and fulfilling.

    Redefining Success

    Many people define weight loss success solely by the number on the scale. However, true success is much broader than that. It’s about feeling good in your body, having energy, and maintaining emotional balance. By redefining success to include factors like mental clarity, emotional resilience, and physical health, you can shift your focus away from quick fixes and toward long-term wellness.

    Breaking Free: Embracing a New Path to Wellness

    Choosing emotional wellness over weight loss tablets and drinks is about taking back control of your health. It’s about acknowledging that there are no shortcuts to true well-being and that the journey to a healthier, happier self requires both physical and emotional work.\nWhen you focus on nourishing your body and mind, you free yourself from the endless cycle of dieting, supplement dependency, and dissatisfaction. You empower yourself to build a healthier, more fulfilling life, one where weight loss is not a burden but a byproduct of overall wellness.

    `,
    `Emotional eating is one of the biggest challenges people face on their weight loss journeys. It’s a common response to stress, anxiety, or even boredom. For many, food serves as a temporary comfort that provides relief from difficult emotions. However, this can lead to weight gain and an unhealthy relationship with food. Understanding the emotional triggers behind weight gain is key to breaking the cycle and creating lasting change.\nIn this blog, we’ll explore the top 10 emotional triggers for weight gain and offer actionable solutions to overcome them, helping you regain control of your eating habits and achieve your weight loss goals

    1. Stress: The Silent Saboteur

    Stress is one of the most common emotional triggers for weight gain. When you’re stressed, your body releases cortisol, a hormone that can increase cravings for high-fat and high-sugar foods. These comfort foods temporarily ease stress, but they also lead to weight gain over time.

    Solution: Stress Management

    Instead of turning to food, focus on stress-relief techniques like exercise, meditation, or deep-breathing exercises. These activities reduce cortisol levels and help you manage stress in a healthier way.

    2. Boredom: Eating to Fill Time

    Eating out of boredom is another emotional trigger that leads to unnecessary calorie consumption. When you’re bored, your mind seeks stimulation, and food often becomes a go-to solution, even when you’re not physically hungry.

    Solution: Stay Engaged

    Combat boredom by staying active. Engage in hobbies, exercise, or even take up a new skill. When your mind is occupied, you’re less likely to turn to food for entertainment.

    3. Loneliness: The Emotional Void

    For some, loneliness can drive emotional eating. Food can become a source of comfort when you're feeling isolated or disconnected. The sense of fulfillment from eating is temporary, but the weight gain can be long-lasting.

    Solution: Social Connections

    Instead of eating, reach out to friends, family, or join a community group. Building social connections can help reduce feelings of loneliness and offer emotional support without the need for food as a crutch.

    4. Anxiety: Seeking Control Through Food

    Anxiety can cause an overwhelming need to control something, and food often becomes that thing. Emotional eaters may binge or overeat to gain a sense of control over their feelings, but this can lead to weight gain.

    Solution: Mindful Eating

    Practice mindful eating by paying attention to your hunger cues and emotions. Take deep breaths before meals and focus on the flavors and textures of your food. This helps reduce anxiety and creates a healthier relationship with food.

    5. Fatigue: Seeking Energy from Food

    When you’re tired, your body craves energy. Sugary or high-carbohydrate foods seem like a quick fix, but they only provide temporary energy boosts and contribute to weight gain when consumed in excess.

    Solution: Prioritize Sleep

    The best solution for fatigue is getting adequate sleep. Aim for 7-9 hours of quality sleep each night to reduce fatigue and lower the temptation to overeat. If you’re feeling tired during the day, opt for a quick nap or light physical activity instead of snacking.

    6. Depression: Finding Comfort in Food

    Depression can lead to emotional eating as a way to cope with sadness, hopelessness, or despair. Eating can temporarily improve mood, but the resulting weight gain may worsen feelings of low self-esteem and create a vicious cycle.

    Solution: Seek Emotional Support

    Professional counseling, therapy, or support groups can help you address underlying emotional issues. Cognitive-behavioral therapy (CBT) is particularly effective in managing depression and reducing emotional eating.

    7. Celebration: Emotional Eating for Joy

    Celebrating with food is a common cultural practice, but it can become a problem when celebrations happen frequently, leading to overeating. Emotional eaters may also use celebrations as an excuse to indulge, even if they are not hungry.

    Solution: Celebrate Mindfully

    You don’t have to avoid celebrations, but practice mindful eating during these events. Eat slowly, savor your food, and stop when you’re full. Opt for healthier choices whenever possible and remember that celebrations are about people and experiences, not just food.

    8. Frustration: Eating to Release Tension

    Frustration with work, relationships, or life in general can trigger emotional eating as a way to vent or cope. People may eat to distract themselves from negative emotions, leading to unintentional weight gain.

    Solution: Find Healthy Outlets

    Channel frustration into healthy activities like physical exercise, journaling, or creative hobbies. These outlets allow you to process your feelings without resorting to emotional eating.

    9. Low Self-Esteem: Turning to Food for Validation

    Low self-esteem can fuel emotional eating when individuals seek comfort in food as a way to avoid feelings of inadequacy. Weight gain caused by emotional eating can, in turn, lower self-esteem even further.

    Solution: Focus on Self-Care

    Building self-confidence is essential for overcoming this trigger. Practice self-care by engaging in activities that make you feel good about yourself. This can include exercising, dressing well, or practicing positive affirmations.

    10. Habitual Patterns: Eating Out of Routine

    Sometimes emotional eating isn’t linked to a specific feeling but is simply a habit. You might reach for a snack while watching TV, working, or commuting, even when you’re not hungry.

    Solution: Break the Cycle

    To break habitual emotional eating, start by identifying your triggers. Replace snacking with healthier habits, such as drinking water, taking a short walk, or chewing gum. Creating new routines can help break the cycle of emotional eating.


    How to Break Free from Emotional Eating

    Practice Mindful Eating

    Mindful eating encourages you to be fully present during meals, helping you recognize whether you're eating out of hunger or emotion. By slowing down and savoring each bite, you can reduce the likelihood of overeating.

    Keep a Food Journal

    Tracking your food intake and emotional state can reveal patterns in your eating habits. Identifying the emotional triggers for weight gain allows you to address them more effectively.

    Seek Professional Help

    If emotional eating has become a persistent issue, seeking help from a therapist, dietitian, or counselor can provide long-term solutions. Professionals can help you manage your emotional triggers and develop healthier coping mechanisms.

    `,
    "How to incorporate more fermented drinks into your daily diet and their health benefits.",
    "Learn how gut health smoothies can aid in weight management and a balanced diet.",
    "Discover the amazing benefits of drinking kombucha for digestive health.",
    "Advice on how to choose the right gut health drinks to include in your diet.",
    "Understanding how your gut health can dramatically affect overall well-being.",
  ];

  // Set content into the modal
  modal.querySelector(".blog1-heading").innerText = titles[id - 1]; // 1-based id for titles
  modal.querySelector(".blog1-headingh2").innerText = subtitles[id - 1]; // 1-based id for subtitles
  modal.querySelector(".blog1-image").src = image[id - 1]; // 1-based
  modal.querySelector(".blog1-para").innerText = paragraphs[id - 1]; // 1-based id for paragraphs
}

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", function () {
  modal.style.display = "none"; // Hide the modal
});

// Close the modal when clicking outside of the modal content
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none"; // Hide the modal
  }
});

//multiple selector
const selectBtn = document.querySelector(".select-btn");
const listItems = document.querySelector(".list-items");

// Toggle dropdown open/close when clicking the select button
selectBtn.addEventListener("click", function (e) {
  e.stopPropagation(); // Prevent closing when clicking inside
  listItems.style.display =
    listItems.style.display === "block" ? "none" : "block";
});

// Close the dropdown when clicking outside
document.addEventListener("click", function () {
  if (listItems.style.display === "block") {
    listItems.style.display = "none";
  }
});

// Prevent closing when clicking inside the dropdown itself
listItems.addEventListener("click", function (e) {
  e.stopPropagation();
});

/* <!-- Frequently asked section --> */
document.querySelectorAll(".faq-question").forEach((item) => {
  item.addEventListener("click", function () {
    // Toggle visibility of the answer
    const answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
      this.classList.remove("active"); // Remove rotation when closed
    } else {
      answer.style.display = "block";
      this.classList.add("active"); // Add rotation when opened
    }

    // Optionally, close other open answers when one is clicked
    document.querySelectorAll(".faq-answer").forEach((ans) => {
      if (ans !== answer) {
        ans.style.display = "none";
        ans.previousElementSibling.classList.remove("active"); // Reset icon rotation
      }
    });
  });
});

// video

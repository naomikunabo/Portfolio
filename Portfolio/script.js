// JavaScript to enable smooth scrolling for internal page links

// Select all anchor tags that link to a section within the page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Add a click event listener to each anchor
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default click action (jumping to the section)
        
        // Scroll smoothly to the section linked by the anchor
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Set smooth scrolling behavior
        });
    });
});

// JavaScript to create a smooth hover effect for project and experience items
document.querySelectorAll('.project, .experience-item').forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.transition = 'all 0.3s ease-in-out';
        this.style.transform = 'scale(1.05)';
    });
    item.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

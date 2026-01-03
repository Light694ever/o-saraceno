document.addEventListener('DOMContentLoaded', () => {
    // Category buttons event listeners
    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuCategories = document.querySelectorAll('.menu-category');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            // Hide all categories
            menuCategories.forEach(cat => cat.classList.remove('active'));
            // Show selected category
            document.getElementById(category).classList.add('active');
        });
    });

    // Set first button as active by default
    if (categoryButtons.length > 0) {
        categoryButtons[0].classList.add('active');
    }
});

const categoryTabs = document.querySelectorAll('.nav-link');
const subTechnologies = document.querySelectorAll('.sub-technologies');

let previousTab; // Variable to keep track of the previously clicked tab

categoryTabs.forEach((tab) => {
    tab.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor link behavior

        const selectedTab = event.target; // The clicked tab link
        const selectedCategory = selectedTab.dataset.category;

        // Check if a previous tab was clicked
        if (previousTab) {
            previousTab.classList.remove('active');
            const previousCategory = previousTab.dataset.category;
            const previousSubTech = document.querySelector(`.sub-technologies[data-category="${previousCategory}"]`);
            previousSubTech.style.display = 'none'; // Hide the previous sub-technologies
            previousSubTech.querySelector('marquee').stop();
        }

        selectedTab.classList.add('active');
        const activeSubTech = document.querySelector(`.sub-technologies[data-category="${selectedCategory}"]`);
        activeSubTech.style.display = 'block'; // Show the sub-technologies of the selected tab
        activeSubTech.querySelector('marquee').start();

        previousTab = selectedTab; // Update the previousTab variable to the current selected tab
    });
});

document.getElementById('hamburger').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open'); // Toggle the 'open' class

    // Animate the hamburger icon
    const bars = document.querySelectorAll('.bar');
    bars[0].classList.toggle('animate-top');
    bars[1].classList.toggle('animate-middle');
    bars[2].classList.toggle('animate-bottom');
});

// Handle search form submission
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const cost = document.getElementById('cost').value;

    // Check if the selected cost is above 200
    if (cost == '200') {
        document.getElementById('goldcross').style.display = 'block';
    } else {
        document.getElementById('goldcross').style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('Website load ho gayi!');
});

document.querySelectorAll('.news-card a').forEach(card => {
    card.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Ye khaber jaldi aayegi!');
    });
});
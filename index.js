const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');

    moonIcon.classList.toggle('hidden');
    sunIcon.classList.toggle('hidden');

    if (html.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
    moonIcon.classList.remove('hidden');
    sunIcon.classList.add('hidden');
} else {
    html.classList.remove('dark');
    moonIcon.classList.add('hidden');
    sunIcon.classList.remove('hidden');
}
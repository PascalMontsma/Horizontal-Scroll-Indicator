window.addEventListener('scroll', function() {
    var indicator = document.getElementById('scroll-indicator');
    var scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    indicator.style.width = scrolled + '%';
});

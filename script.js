document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
})
const navbar = document.getElementById("navbar");
const navLink = document.getElementById("navLink");
const mobileMenu = document.getElementById("mobileMenu");

function openMenu() {
    mobileMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
    mobileMenu.style.transform = 'translateX(0)';
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark');

    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
}

window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        navbar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLink.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', "dark:bg-transparent");
    } else {
        navbar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLink.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', "dark:bg-transparent");
    }
})

function toggleProjects() {
    const btn = document.getElementById('toggleProjectsBtn');
    const details = document.getElementById('projectDetails');
    const textSpan = document.getElementById('toggleProjectsText');
    const imgLight = document.getElementById('toggleProjectsImgLight');
    const imgDark = document.getElementById('toggleProjectsImgDark');
    if (!btn || !details || !textSpan) return;

    try {
        console.log('toggleProjects clicked');

    // Toggle visibility
    const nowHidden = details.classList.toggle('hidden');

    if (nowHidden) {
        btn.setAttribute('aria-expanded', 'false');
        textSpan.textContent = 'Show more';
        if (imgLight) imgLight.classList.remove('rotate-90');
        if (imgDark) imgDark.classList.remove('rotate-90');
    } else {
        btn.setAttribute('aria-expanded', 'true');
        textSpan.textContent = 'Show less';
        if (imgLight) imgLight.classList.add('rotate-90');
        if (imgDark) imgDark.classList.add('rotate-90');
    }
    } catch (e) {
        console.error('toggleProjects error', e);
    }
}

// Try to bind immediately; if element isn't present yet, bind on window load as a fallback.
function bindToggleButton() {
    const btn = document.getElementById('toggleProjectsBtn');
    if (btn) {
        btn.addEventListener('click', toggleProjects);
        console.log('toggleProjectsBtn bound');
        return true;
    }
    return false;
}

if (!bindToggleButton()) {
    window.addEventListener('load', () => {
        if (!bindToggleButton()) console.warn('toggleProjectsBtn not found after window load');
    });
}
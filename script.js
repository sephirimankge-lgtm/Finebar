document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const closeSidebar = document.getElementById('closeSidebar');
    const overlay = document.getElementById('overlay');
    const body = document.body;

    // Toggle sidebar
    function toggleSidebar() {
        body.classList.toggle('sidebar-open');
    }

    sidebarToggle.addEventListener('click', toggleSidebar);
    closeSidebar.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && 
            event.target !== sidebarToggle && 
            !sidebarToggle.contains(event.target) &&
            body.classList.contains('sidebar-open')) {
            toggleSidebar();
        }
    });

    // Theme toggle (if needed)
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.documentElement.classList.toggle('dark');
            localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        });
    }
});

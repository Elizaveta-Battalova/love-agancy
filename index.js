const dropdowns = Array.from(document.querySelectorAll('.dropdown'));
dropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector('.dropdown-btn');
    const menu = dropdown.querySelector('.dropdown-menu');

    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            menu.dataset.expanded = "false";
        }
    })

    btn.addEventListener('click', (e) => {
        if (menu.dataset.expanded === "true") {
            menu.dataset.expanded = "false";
        } else {
            menu.dataset.expanded = "true";
        }
    });
});

$(document).ready(function() {
    $('#biografy-btn').click(function() {
        $('#sidebar-biography').toggleClass('visible');
    });
});

$(document).ready(function() {
    $('#biography-sidebar-btn').click(function() {
        $('#sidebar-biography').toggleClass('visible');
    });
});


$(document).ready(function() {
    $('#filmography-btn').click(function() {
        $('#sidebar-filmography').toggleClass('visible');
    });
});
$(document).ready(function() {
    $('#filmography-sidebar-btn').click(function() {
        $('#sidebar-filmography').toggleClass('visible');
    });
});


$(document).ready(function() {
    $('#video-btn').click(function() {
        $('#sidebar-video').toggleClass('visible');
    });
});
$(document).ready(function() {
    $('#video-sidebar-btn').click(function() {
        $('#sidebar-video').toggleClass('visible');
    });
});
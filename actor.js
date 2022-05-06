var hamMenu = document.querySelector('.ham-menu');
var dropMenu = document.querySelector('.drop-menu');
var dropMenuList = document.querySelectorAll('.drop-menu div');
var dropMenuListText = document.querySelectorAll('.drop-menu div a');

hamMenu.addEventListener('click', () => {
    dropMenu.classList.toggle('drop-down');
    hamMenu.children[0].classList.toggle('top');
    hamMenu.children[1].classList.toggle('mid');
    hamMenu.children[2].classList.toggle('bottom');
})

$(document).ready(function() {
    $('#callback-btn').click(function() {
        $('#sidebar-callback').toggleClass('visible');
    });
});

$(document).ready(function() {
    $('#callback-sidebar-btn').click(function() {
        $('#sidebar-callback').toggleClass('visible');
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

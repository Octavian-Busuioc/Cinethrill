//for the profile-pg(secondary-html at the time of writing)


//sliding from one tab to another
$('.navinfo ul li').click(function() {

    $(this).addClass("active").siblings().removeClass('active');
})

const tabBtn = document.querySelectorAll('.navinfo ul li');
const tab = document.querySelectorAll('.tab');

function tabs(panelIndex) {
    tab.forEach(function(node) {
        node.style.display = 'none';
    });
    tab[panelIndex].style.display = 'block';
}
tabs(0);


// see more btn & see less btn
let plot = document.querySelector('.plot');

function plotText() {
    plot.oldText = plot.innerText;
    plot.innerText = plot.innerText.substring(0, 100) + "...";
    plot.innerHTML += "&nbsp;" + `<span onclick='addLength()' id='see-more-plot'> See More</span>`;
}
plotText();

function addLength() {
    plot.innerHTML = plot.oldText;
    plot.innerHTML += "&nbsp;" + `<span onclick='plotText()' id='see-less-plot'> See Less</span>`;
}
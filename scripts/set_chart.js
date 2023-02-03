
window.onload = function() {
    let charts = document.querySelectorAll('.chart_percent');
    for(let i = 0; i < charts.length; i++) {
        let chart = charts[i];
        let percent = chart.getAttribute('data-percent');
        console.log(chart.querySelector('.chart_percent__progress').style.width);
        chart.querySelector('.chart_percent__progress').style.width = percent + '%';
        console.log(chart.querySelector('.chart_percent__progress').style.width);
        console.log(percent + '% !important');
        chart.querySelector('.chart_percent__percent').style.left =  'calc(' +percent + '% - 23px)';
        chart.querySelector('.chart_percent__percent').innerHTML =
            chart.querySelector('.chart_percent__percent').innerHTML
                .replace('[chart_percent]',percent + '%');
    }
};

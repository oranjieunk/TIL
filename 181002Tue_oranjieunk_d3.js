//group 3개가 있어야(x, y, 데이터 담을 곳)
//path element

//여백 주기
var T = 10;
var L = 30;
var R = 10;
var B = 30;

//console.log(d3.version);
var scores = [90, 80, 35, 40];

var chart = document.querySelector("#chart");

var x = d3.scaleBand()
    .domain(d3.range(scores.length))
var y = d3.scaleLinear()
    .domain([0, 100])

var svg = d3.select("#chart svg");
var gData = svg
    .append("g")
    .attr("class", "data");
var gxAxis = svg
    .append("g")
    .attr("class", "x-axis axis");
var gyAxis = svg
    .append("g")
    .attr("class", "y-axis axis");

//resize 이벤트를 듣는 Listener
window.addEventListener("resize", onResize);
onResize();

function onResize() {
    x.range([0, chart.clientWidth - L - R]);
    y.range([1, chart.clientHeight - T - B]);

    var update = gData
        .attr("transform", "translate(" + L + ", " + T + ")")
        .selectAll("rect").data(scores);

    update.enter()
        .append("rect")
        .attr("width", x.bandwidth())
        .attr("height", function(d) {
            return chart.clientHeight - T - B - y(d);
        })
        .attr("y"), function(d) {
            return y(d);
        }
        .attr("x", function(d, i) {
            return x(i);
        })
    gxAxis
        .attr("transform", "translate(" + L + ", " + (chart.clientHeight - B) + ")")
        .call(d3.axisBottom().scale(x));
    gyAxis
        .attr("transform", "translate(" + L + ", " + T + ")")
        .call(d3.axisLeft().scale(y));

    var svg = d3.select("#chart svg")
        .attr("width", chart.clientWidth)
        .attr("height", chart.clientHeight);
        //.style("background-color", "red");
}

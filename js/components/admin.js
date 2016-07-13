var graph_backgroundColor = 'rgba(54, 162, 235, 0.2)';
var graph_borderColor = 'rgba(54, 162, 235, 1)';

function changePanel(newPanelId) {
  if ($("#" + newPanelId).attr("style").indexOf("display: none") >= 0) {
    $("div[id*='panel-']").fadeOut();
    $("#" + newPanelId).fadeIn();
  }
}

// Create the admin panel component
var panel = {
  // Create the view.
  view: function() {

    return m("section", {class: "admin-panel", style: "margin-top: 200px;"}, [

      // Overview
      m("div", {class: "row"}, [
        m("h2", {class: "center"}, "Adventure Guild Admin Panel"),
      ]),
      m("div", {class: "row"}, [
        m("div", {class: "col offset_2_of_12 span_3_of_12"}, [
          m("button", {type: "button", onclick: function(e) {
            changePanel("panel-usage-tracking");
          }}, "Usage Tracking")
        ]),
        m("div", {class: "col offset_1_of_12 span_3_of_12"}, [
          m("button", {type: "button", onclick: function(e) {
            changePanel("panel-database-queries");
          }}, "Database Queries")
        ])
      ]),
      m("div", {id: "panel-usage-tracking", style: "display: none;", class: "row"}, [
        m("div", {class: "col offset_1_of_12 span_1_of_12"}, [
          m("label", {for: "stat-type"}, "Statistic"),
          m("select", [
            m("option", {id: "stat-type", value: "Logins"}, "Logins"),
            m("option", {id: "stat-type", value: "Purchases"}, "Purchases")
          ])
        ]),
        m("div", {class: "col offset_1_of_12 span_2_of_12"}, [
          m("label", {for: "time-interval"}, "Time Interval"),
          m("select", [
            m("option", {id: "time-interval", value: "0"}, "Per Hour"),
            m("option", {id: "time-interval", value: "1"}, "Per Day"),
            m("option", {id: "time-interval", value: "2"}, "Per Month"),
            m("option", {id: "time-interval", value: "3"}, "Per Year"),
          ])
        ]),
        m("div", {class: "col span_2_of_12"}, [
          m("label", {for: "start-date"}, "Start Date"),
          m("input", {id: "start-date", type: "text", placeholder: "MM/DD/YYYY"})
        ]),
        m("div", {class: "col span_2_of_12 offset_1_of_12"}, [
          m("label", {for: "end-date"}, "End Date"),
          m("input", {id: "end-date", type: "text", placeholder: "MM/DD/YYYY"})
        ]),
        m("div", {class: "col span_2_of_12 offset_2_of_12"}, [
          m("button", {type: "button", class: "small-btn", onclick: function(e){
            var labels = ['one', 'two', 'three', 'four', 'five'];
            initChart(labels);
          }}, "Display Chart"),
        ]),
      ]),
      m("div", {id: "panel-database-queries", style: "display: none;", class: "row"}, [
        m("h1", {class: "center"}, "Coming Soon!")
      ]),
      m("div", {class: "row"}, [
        m("canvas", {id: "myChart", class: "col offset_1_of_12 span_10_of_12"}),
      ])
    ]);
  }
}

function initChart(labels) {
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: "# of votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

// Create the admin component.
var admin = {
    // Create the view.
    view: function() {
        return [
          m.component(nav, {page: "admin"}),
          m.component(panel),
          m.component(footer)
        ]
    }
}
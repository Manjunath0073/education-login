/* =========================
   CHART DEFAULTS
========================= */
Chart.defaults.color = "#94a3b8";

Chart.defaults.font.family = "Inter";

Chart.defaults.plugins.legend.labels.usePointStyle = true;

/* =========================
   LINE CHART
   REVENUE ANALYTICS
========================= */

const lineCanvas =
document.getElementById("lineChart");

const lineCtx =
lineCanvas.getContext("2d");

/* GRADIENT */
const lineGradient =
lineCtx.createLinearGradient(0, 0, 0, 350);

lineGradient.addColorStop(
  0,
  "rgba(59,130,246,0.45)"
);

lineGradient.addColorStop(
  1,
  "rgba(59,130,246,0)"
);

new Chart(lineCtx, {

  type: "line",

  data: {

    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul"
    ],

    datasets: [{

      label: "Revenue",

      data: [
        1200,
        1900,
        3000,
        2500,
        4200,
        4800,
        6200
      ],

      borderColor: "#3b82f6",

      backgroundColor: lineGradient,

      fill: true,

      tension: 0.45,

      borderWidth: 3,

      pointRadius: 5,

      pointHoverRadius: 8,

      pointBackgroundColor: "#ffffff",

      pointBorderColor: "#3b82f6",

      pointBorderWidth: 3

    }]
  },

  options: {

    responsive: true,

    maintainAspectRatio: false,

    plugins: {

      legend: {
        display: false
      },

      tooltip: {

        backgroundColor:
          "rgba(15,23,42,0.95)",

        borderColor:
          "rgba(59,130,246,0.3)",

        borderWidth: 1,

        padding: 14,

        cornerRadius: 12,

        displayColors: false
      }
    },

    scales: {

      x: {

        grid: {
          display: false
        }
      },

      y: {

        grid: {
          color:
          "rgba(255,255,255,0.06)"
        },

        ticks: {

          callback: function(value){
            return "$" + value;
          }
        }
      }
    }
  }
});

/* =========================
   DOUGHNUT CHART
   COURSE COMPLETION
========================= */

const doughnutCtx =
document.getElementById("doughnutChart");

new Chart(doughnutCtx, {

  type: "doughnut",

  data: {

    labels: [
      "Completed",
      "In Progress",
      "Pending"
    ],

    datasets: [{

      data: [68, 22, 10],

      backgroundColor: [

        "#3b82f6",
        "#8b5cf6",
        "#06b6d4"
      ],

      borderWidth: 0,

      hoverOffset: 12
    }]
  },

  options: {

    responsive: true,

    maintainAspectRatio: false,

    cutout: "72%",

    plugins: {

      legend: {

        position: "bottom",

        labels: {

          padding: 20
        }
      },

      tooltip: {

        backgroundColor:
          "rgba(15,23,42,0.95)",

        borderWidth: 1,

        borderColor:
          "rgba(255,255,255,0.1)",

        cornerRadius: 12
      }
    }
  }
});

/* =========================
   BAR CHART
   STUDENT GROWTH
========================= */

const barCtx =
document.getElementById("barChart");

new Chart(barCtx, {

  type: "bar",

  data: {

    labels: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],

    datasets: [{

      label: "Students",

      data: [
        120,
        190,
        150,
        240,
        280,
        220,
        310
      ],

      borderRadius: 12,

      backgroundColor: [

        "#3b82f6",
        "#8b5cf6",
        "#06b6d4",
        "#3b82f6",
        "#8b5cf6",
        "#06b6d4",
        "#3b82f6"
      ],

      borderSkipped: false
    }]
  },

  options: {

    responsive: true,

    maintainAspectRatio: false,

    plugins: {

      legend: {
        display: false
      },

      tooltip: {

        backgroundColor:
          "rgba(15,23,42,0.95)",

        borderColor:
          "rgba(59,130,246,0.25)",

        borderWidth: 1,

        cornerRadius: 12
      }
    },

    scales: {

      x: {

        grid: {
          display: false
        }
      },

      y: {

        grid: {

          color:
          "rgba(255,255,255,0.06)"
        }
      }
    }
  }
});

const logoutBtn =
document.getElementById("logout-btn");

logoutBtn.addEventListener("click", function(e){

  e.preventDefault();

  /* CLEAR USER DATA */
  localStorage.removeItem("username");
  localStorage.removeItem("role");

  /* REDIRECT */
  window.location.href = "./index.html";

});

const menuToggle =
document.getElementById("menuToggle");

const sidebar =
document.querySelector(".sidebar");

const overlay =
document.getElementById("sidebarOverlay");

menuToggle.addEventListener("click", () => {

  sidebar.classList.toggle("active");

  overlay.classList.toggle("active");

});

overlay.addEventListener("click", () => {

  sidebar.classList.remove("active");

  overlay.classList.remove("active");

});

const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".content-section");

function showSection(sectionId) {

  sections.forEach(sec => {
    sec.classList.remove("active-section");
  });

  document.getElementById(sectionId)
    .classList.add("active-section");

}

links.forEach(link => {

  link.addEventListener("click", (e) => {

    e.preventDefault();

    const target = link.getAttribute("data-section");

    showSection(target);

    // ACTIVE LINK STYLE
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    // CLOSE SIDEBAR (mobile)
    document.querySelector(".sidebar")
      .classList.remove("active");

    document.querySelector(".sidebar-overlay")
      .classList.remove("active");

  });

});

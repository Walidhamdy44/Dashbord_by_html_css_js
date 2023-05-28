const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["facebock", "twitter", "instegram", "Youtube"],
    datasets: [
      {
        label: "Our Social Media Statics",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
const ctx2 = document.getElementById("myChart2");

new Chart(ctx2, {
  type: "polarArea",
  data: {
    labels: ["facebock", "twitter", "instegram"],
    datasets: [
      {
        label: "Our Social Media Statics",
        data: [12, 19, 20],
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
const ctx3 = document.getElementById("myChart3");

new Chart(ctx3, {
  type: "doughnut",
  data: {
    labels: ["facebock", "twitter", "instegram"],
    datasets: [
      {
        label: "Our Social Media Statics",
        data: [12, 19, 20],
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
const ctx4 = document.getElementById("myChart4");

new Chart(ctx4, {
  type: "bar",
  data: {
    labels: [
      "facebock",
      "twitter",
      "instegram",
      "snapchat",
      "youtube",
      "linkedin",
    ],
    datasets: [
      {
        label: "Our Social Media Statics",
        data: [12, 19, 20, 11, 9, 16],
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

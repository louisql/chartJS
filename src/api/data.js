export const lineChartData = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "Steps",
      data: [3000, 5000, 4500, 6000, 8000, 7000, 9000],
      borderColor: "rgb(75, 192, 192)",
    },
    {
      label: "Steps 2nd Person",
      data: [4000, 7000, 2500, 6000, 8000, 3000, 6000],
      borderColor: "rgb(55, 292, 92)",
    },
  ],
  
};

export const barChartData = {
  "labels": [
    "Rent",
    "Groceries",
    "Utilities",
    "Entertainment",
    "Transportation"
  ],
  "datasets": [
    {
      "label": "Expenses",
      "data": [1200, 300, 150, 180, 100],
      "backgroundColor": ["rgba(255, 99, 132, 0.2)"],
      "borderColor": ["rgba(54, 162, 235, 1)"],
      "borderWidth": 1
    }
  ]
}

export const pieChartData = {
  "labels": [
    "Facebook",
    "Instagram",
    "Twitter",
    "YouTube",
    "LinkedIn"
  ],
  "datasets": [
    {
      "label": "Time Spent",
      "data": [120, 60, 30, 90, 45],
      "backgroundColor": [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)"
      ],
      "hoverOffset": 4
    }
  ]
}


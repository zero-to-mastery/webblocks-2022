const totalInvestmentText = document.getElementById('totalInvestmentText');
const interestRateText = document.getElementById('interestRateText');
const investmentPeriodText = document.getElementById('investmentPeriodText');

const ctx = document.getElementById('myChart');

const labels = [
    'Principal',
    'Interest',
];

let data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
        ],
        borderColor: '#00000041',
        hoverOffset: 4,
        hoverBorderWidth: 7,
        data: [144000, 67514.06],
    }]
};

const config = {
    type: 'doughnut',
    data: data,
    options: {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 20
                    }
                }
            }
        },
    }
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);


/*
   FV = P × ((1 + i)n - 1) / i) × (1 + i)

   P = Amount you invest through SIP
   i = Compounded rate of return
   n = Investment duration in months
   r = Expected rate of return

   */
function calculate() {
    const p = Number(totalInvestmentText.value);
    const r = Number(interestRateText.value);
    const i = (r / 100) / 12;
    const n = Number(investmentPeriodText.value) * 12;

    const FV = parseInt((p * (((1 + i) ** n) - 1) * (1 + i)) / i);
    const investedAmmount = p * n;
    const totalWealth = FV;
    const wealthGained = totalWealth - investedAmmount;


    // Updating text
    document.getElementById('interest').innerText = wealthGained;
    document.getElementById('invested').innerText = investedAmmount;
    document.getElementById('totalWealth').innerText = totalWealth;

    // Updating Chart
    let dataToUpdate = [totalWealth, wealthGained]

    myChart.data.datasets[0].data = dataToUpdate
    myChart.update();


}


function setValues(sliderIdName, ElementText) {

    // Getting Slider element
    const ElementSlider = document.getElementById(`${sliderIdName}`);


    // Function on changing Slider value
    ElementSlider.oninput = function () {
        ElementText.value = this.value;
        calculate();
    }

    // Function on changing Text value
    ElementText.oninput = function () {
        ElementSlider.value = this.value;
        calculate();
    }
}

setValues("totalInvestmentSlider", totalInvestmentText);
setValues("interestRateSlider", interestRateText);
setValues("investmentPeriodSlider", investmentPeriodText);






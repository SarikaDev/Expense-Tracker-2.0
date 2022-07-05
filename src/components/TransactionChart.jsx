import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { GlobalContext } from '../context/GlobalState';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';




const TransactionChart = () => {
    ChartJS.register(
        CategoryScale,
        LineElement,
        PointElement,
        LinearScale,
        ArcElement,
        BarElement,
        Title,
        Tooltip,
        Legend
    );
    const { transactions } = useContext(GlobalContext);
    // const amounts = transactions.map(transaction => transaction.amount);
    // const timeStamp = transactions.map(transactions => transactions.timeStamp);





    const result = transactions.reduce((acc, transaction) => {
        if (acc.labels.includes(transaction.timeStamp)) {
            let index = acc.labels.indexOf(transaction.timeStamp)
            if (transaction.amount < 0) {
                acc.expenses[index] += transaction.amount * -1;
            }
            else {
                acc.income[index] += transaction.amount;

            }
        }
        else {
            acc.labels.push(transaction.timeStamp)
            acc.expenses.push(
                transaction.amount > 0 ? 0 : (transaction.amount * -1)
            )
            acc.income.push(
                transaction.amount < 0 ? 0 : transaction.amount
            )
        }
        return acc;
    }, {
        labels: [],
        expenses: [],
        income: []
    })
    console.log(result);
    












    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Expense Tracker ',
            },
        },
    };



    const data = {
        labels: result.labels,
        datasets: [
            {
                label: 'Income',
                data: result.income,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Expense',
                data: result.expenses,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };


    return (
        <>
            <div className="inc-exp-container ">

                <Bar data={data} options={options} style={{ height: '50vh' }} />
            </div>
        </>
    )
}

export default TransactionChart;

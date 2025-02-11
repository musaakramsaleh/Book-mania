import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getStoredBooks } from '../../utils/LocalStorage';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const Toread = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const storedData = getStoredBooks().map(book => ({ name: book.bookName, pages: book.totalPages }));
        setChartData(storedData);
    }, []);
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${label} : ${payload[0].value} pages`}</p>
                </div>
            );
        }

        return null;
    };
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        const getPath = (x, y, width, height) => {
            return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
          ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
          Z`;
        };

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
 
    return (
        <div className='w-full max-w-[900px]'>
            <BarChart
            width={1280}
            height={800}
            data={chartData}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            style={{ backgroundColor: '#f5f5f5', width:'100%'}}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
            </Bar>
        </BarChart>
        </div>
    );
};

export default Toread;
import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const Statistics = () => {
    const data = [
        {
            id: 1,
            name: "New year new website",
            mark: 60,

        },
        {
            id: 2,
            name: "G3-Architecs website",
            mark: 53,
        },
        {
            id: 3,
            name: "Landing page website",
            mark: 60
        },
        {
            id: 4,
            name: "Basic js problem solving",
            mark: 60
        },
        {
            id: 5,
            name: "Geometry genius website",
            mark: 55
        },
        {
            id: 6,
            name: "Ai universe website",
            mark: 60
        },
        {
            id: 7,
            name: "Make quiz hero website",
            mark: 60
        }
    ]
    return (



        <div>
            <h1 className='text-5xl text-center mt-2'>My Assignment Marks</h1>
            <div className='mt-10 ml-72'>
                <ComposedChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}>
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="name" fill="#8884d8" stroke="#8884d8" />
                    <Line type="monotone" dataKey="name" stroke="#ff7300" />
                    <Line type="monotone" dataKey="mark" stroke="#ff7300" />

                </ComposedChart>
            </div>
        </div>
    );
};

export default Statistics;
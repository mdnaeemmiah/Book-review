import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

const Read = () => {
    const data = useLoaderData();
    return (
        <div className='py-10 max-w-7xl mx-auto bg-orange-100 mt-5'>
            <LineChart  width={1000} height={400} data={data}>
                <XAxis dataKey={'bookName'}></XAxis>
                <YAxis dataKey={'totalPages'}></YAxis>
            <Line dataKey="bookName"  stroke="yellow" />
            <Line dataKey="totalPages"  stroke="red" />
            
            </LineChart>
        </div>
    );
};

export default Read;
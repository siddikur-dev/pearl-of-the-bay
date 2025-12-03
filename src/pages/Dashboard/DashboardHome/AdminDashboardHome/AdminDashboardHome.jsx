import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
const AdminDashboardHome = () => {
    const axiosSecure = useAxiosSecure()
    const { data: stats = [] } = useQuery({
        queryKey: ['Travel -status-stat'],
        queryFn: async () => {
            const res = await axiosSecure.get('/parcels/Travel -status/stats')
            return res.data
        }
    })

    const getPieChart = data => {
        return data?.map(stat => {
            return { name: stat.status, value: stat.count }
        })
    }

    return (
        <div>
            AdminDashboardHome
            <div className="stats stats-vertical lg:stats-horizontal shadow">
                {stats?.map(stat => {
                    return <div key={stat._id} className="stat">
                        <div className="stat-title">{stat.status}</div>
                        <div className="stat-value">{stat.count}</div>
                    </div>
                })}
            </div>
            <div>
                <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 2 }} responsive>
                    <Pie
                        dataKey="value"
                        startAngle={180}
                        endAngle={0}
                        data={getPieChart(stats)}
                        cx="50%"
                        cy="100%"
                        outerRadius="120%"
                        fill="#8884d8"
                        label
                        isAnimationActive={true}
                    />
                </PieChart>
                <Legend />
                <Tooltip />
            </div>
        </div>
    );
};

export default AdminDashboardHome;
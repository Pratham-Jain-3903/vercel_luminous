// src/components/GrafanaDashboard.js
import React, { useEffect, useState } from 'react';
import { getDashboard } from '../services/grafanaService';

const GrafanaDashboard = ({ dashboardId }) => {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const data = await getDashboard(dashboardId);
        setDashboard(data);
      } catch (error) {
        console.error('Failed to fetch dashboard:', error);
      }
    };

    fetchDashboard();
  }, [dashboardId]);

  if (!dashboard) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{dashboard.dashboard.title}</h1>
      <iframe
{/*         src={`http://your-grafana-url/d/${dashboardId}`} */}
        src = {'https://krishnafauj02.grafana.net/public-dashboards/9942ae56688b4a73b89370d6040bb2d6'}
        width="100%"
        height="600"
        frameBorder="0"
        title={dashboard.dashboard.title}
      ></iframe>
    </div>
  );
};

export default GrafanaDashboard;

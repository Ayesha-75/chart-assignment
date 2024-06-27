import React, { useState } from 'react';

import './App.css';
import ChartComponent from './ChartComponent';

const App: React.FC = () => {
  const [timeframe, setTimeframe] = useState<'day' | 'week' | 'month' >('day');

  return (
    <div className="app-container">
      <header className='app-heading'>Chart Analysis</header>
      <div className="app-header">
        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value as 'day' | 'week' | 'month')}
        >
          <option value="day">Daily</option>
          <option value="week">Weekly</option>
          <option value="month">Monthly</option>
        </select>
      </div>
      <ChartComponent timeframe={timeframe} />
    </div>
  );
};

export default App;
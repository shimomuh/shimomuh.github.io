import React from 'react';
import AdventCalendar from 'containers/adventCalendar/root';

const Index: React.FC = () => {
  return (
    <div className='index'>
      <h1>Everyday Advent Calendar</h1>
      <p>ローマの石を積もう - Rome was not built in a day.</p>
      <AdventCalendar />
    </div>
  );
};

export default Index;

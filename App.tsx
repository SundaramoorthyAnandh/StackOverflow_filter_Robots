import Robo from './Robo';
import robots from './robots';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Header from './Header';

function App() {
  const [query, setQuery] = useState(undefined);
  const [filteredRobots, setFilteredRobots] = useState([]);

  useEffect(() => {
    console.log(query);

    const filteredRobots = robots.filter((robot) => {
      return robot.name.includes(query);
    });

    if (filteredRobots.length) {
      setFilteredRobots(filteredRobots);
    }
  }, [query]);

  const onQueryChange = (e) => {
    const data = e.target.value;
    setQuery(data);
  };

  const renderRobots = () => {
    if (!query || !query.length) {
      return <p>{'Search to find Robots'}</p>;
    }

    if (filteredRobots && filteredRobots.length && query && query.length) {
      return filteredRobots.map((filteredRobot) => (
        <Robo
          key={filteredRobot.id} //id is unique key in your data
          name={filteredRobot.name}
          id={filteredRobot.id}
          email={filteredRobot.email}
        />
      ));
    }

    return <p>{'No Robots Found'}</p>;
  };

  return (
    <div className="App">
      <Header query={query} InputEvent={onQueryChange} />
      {renderRobots()}
    </div>
  );
}

export default App;

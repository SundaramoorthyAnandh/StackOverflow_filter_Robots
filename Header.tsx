import React from 'react';

const Header = ({ query, InputEvent }) => {
  return (
    <React.Fragment>
      <div className="headerText">ROBO FRIENDS</div>
      <div>
        <input
          type="text"
          id="lname"
          name="lname"
          placeholder="Search"
          value={query}
          onChange={InputEvent}
        />
      </div>
    </React.Fragment>
  );
};

export default Header;

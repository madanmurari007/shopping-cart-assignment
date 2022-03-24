import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Header = ({ name }) => {
  const [data, setData] = React.useState([]);
  const callMyCategoryAPI = async () => {
    const result = await fetch("http://localhost:5000/categories", {
      method: "GET",
    });
    const data = await result.json();
    setData(data);
  };
  useEffect(() => {
    callMyCategoryAPI();
  }, []);
  return <div>{console.log(data)}I am Header Component</div>;
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;

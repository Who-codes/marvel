import React, { useContext, useEffect, useState } from "react";

const AppContainer = React.createContext();

const AppProvider = ({ children }) => {
  const [search, setSearch] = useState("Thor");
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `http://www.omdbapi.com/?s=${search}&apikey=59066977&type`
        );

        if (!res.ok) throw Error("Something went wrong");

        const data = await res.json();
        setData(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    getData();
  }, [search]);

  return (
    <AppContainer.Provider value={{ search, handleChange, data }}>
      {children}
    </AppContainer.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContainer);
};

export { AppProvider, useGlobalContext };

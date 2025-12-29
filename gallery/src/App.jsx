import React, { useEffect, useState } from "react";
import GalleryWrapper from "./components/GalleryWrapper";
import axios from "axios";
import Loading from "./components/Loading";

const App = () => {
  const [usersList, setUsersList] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isActiveButton, setIsActiveButton] = useState(false);


  const getUsers = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page + 1}&limit=8`
      );
      setUsersList(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getUsers();
  }, [page]);

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
    setIsActiveButton(true);
  };
  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
      setIsActiveButton(false);
    }
  };

  const handlePageClick = (event) => {
    setPage(event.selected);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {isLoading ? (
        <Loading />
      ) : (
        <GalleryWrapper
          page={page}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          usersList={usersList}
          isActiveButton={isActiveButton}
        />
      )}
    </div>
  );
};

export default App;

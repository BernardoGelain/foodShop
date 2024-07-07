import { useCallback, useEffect, useState } from "react";
import api from "../config/axios";
import { Menu } from "../Models/Menu/Menu";

export const useFetchRestaurantMenu = () => {
  const [menu, setMenu] = useState<Menu>();
  const [isFetching, setIsFetching] = useState(false);

  const returnMenu = useCallback(() => {
    setIsFetching(true);
    api
      .get(`/menu`)
      .then((response) => {
        const menuData = response.data;
        setMenu(menuData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  useEffect(() => {
    returnMenu();
  }, [returnMenu]);

  return { menu, isFetching };
};

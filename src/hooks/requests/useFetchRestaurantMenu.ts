import { useCallback, useEffect, useState } from "react";
import { Menu } from "../../Models/Menu/Menu";
import api from "../../config/axios";

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

import { useCallback, useEffect, useState, useContext } from "react";
import api from "../config/axios";
import { Restaurant } from "../Models/Restaurant";
import { ThemeContext } from "../contexts/ThemeContext/ThemeContext";

export const useFetchRestaurantDetails = () => {
  const { updateThemeColors } = useContext(ThemeContext);
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [isFetching, setIsFetching] = useState(false);

  const returnDetails = useCallback(() => {
    setIsFetching(true);
    api
      .get(`/venue/9`)
      .then((response) => {
        const restaurantData = response.data;
        setRestaurant(restaurantData);

        const { webSettings } = restaurantData;
        if (webSettings) {
          const newColors = {
            background: webSettings.backgroundColour,
            primary: webSettings.primaryColour,
            secondary: webSettings.primaryColourHover,
            backgroundMenu: webSettings.navBackgroundColour,
          };
          updateThemeColors(newColors);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  useEffect(() => {
    returnDetails();
  }, [returnDetails]);

  return { restaurant, isFetching };
};

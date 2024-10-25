import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoading, setEnabledFlag } from "./featureFlagSlice.js";
import LightDarkMode from "../LightDarkMode/LightDarkMode";
import TicTacToe from "../Tic-Tac-Toe/index";
import RandomColor from "../Random-color-generator/RandomColor";
import Accordian from "../Accordian/Accordian";
import TreeView from "../Tree-view/TreeView";
import menus from "../Tree-view/data.js";

const FeaturedFlag = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.featureFlags.loading);
  const enabledFlag = useSelector((state) => state.featureFlags.enabledFlag);

  const componentsToRender = [
    {
      key: "showLightDarkmode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },
  ];

  useEffect(() => {
    //Simulate loading and seting flags after API call or user interaction
    setTimeout(() => {
      dispatch(setLoading(false));
      dispatch(
        setEnabledFlag({
          showLightDarkmode: true,
          showTicTacToeBoard: true,
          showRandomColorGenerator: true,
          showAccordian: true,
          showTreeView: true,
        })
      );
    }, 1000); // simulate 1 second load
  }, [dispatch]);

  function checkEnabledFlags(key) {
    return enabledFlag[key];
  }

  return (
    <>
      <h1 className="text-3xl justify-center text-center mt-5 font-bold">
        Featured flags
      </h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? (
          <div key={componentItem.key}>{componentItem.component}</div>
        ) : null
      )}
    </>
  );
};

export default FeaturedFlag;

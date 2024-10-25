import LightDarkMode from "../LightDarkMode/LightDarkMode";
import TicTacToe from "../Tic-Tac-Toe/index";
import RandomColor from "../Random-color-generator/RandomColor";
import Accordian from "../Accordian/Accordian";
import TreeView from "../Tree-view/TreeView";
import { useContext } from "react";
import { FeatureFlagContext } from "./context";
import menus from "../Tree-view/data.js";

const FeaturedFlags = () => {
  const { loading, enabledFlag } = useContext(FeatureFlagContext);

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

  function checkEnabledFlags(key) {
    return enabledFlag[key];
  }

  if (loading) {
    return <h1>Loading data! Please wait</h1>;
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

export default FeaturedFlags;

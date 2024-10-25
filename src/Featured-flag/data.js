const dummyApiResponse = {
  showLightDarkmode: true,
  showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  showAccordian: true,
  showTreeView: true,
};
function feautureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) {
      setTimeout(() => resolve(dummyApiResponse), 500);
    } else {
      reject("some error occurred while fetching");
    }
  });
}

export default feautureFlagsDataServiceCall;

const dummyApiResponse = {
    showLightAndDarkMode: false,
    showTicTacToeBoard: true,
    showRandomColorGenerator: true,
    showAccordion: false,
    showTreeView: true,
};

const fetchFeatureFlagsServiceCall = () => {
    return new Promise((resolve, reject) => {
        if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 5000);
        else reject('Some error occurred! Please try again');
    });
};

export default fetchFeatureFlagsServiceCall;

export const getNowData = async () => {
  // TODO: Replace with actual API call when ready
  // const response = await fetch('/api/now');
  // return response.json();
  
  return {
    title: "What I'm up to now",
    lastUpdated: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    }),
    sections: [
      {
        title: "Currently Working On",
        content: [
          "Getting better at simply writing interestingly, intuitively",
          "Learning Rust",
          "A detailed, map viewing simulator as a precursor to my own grand strategy game."
        ]
      },
      {
        title: "Currently Consuming",
        content: [
          fetchNowDataFromAPI("https://pre-oracles.github.io/now.json")
        ]
      },
      {
        title: "Location",
        content: [
          "San Jose, California",
          "Home for the summer"
        ]
      }
    ]
  };
};

export const fetchNowDataFromAPI = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } 
  catch (error) {
    console.error('Error fetching now data:', error);
    return getNowData();
  }
};


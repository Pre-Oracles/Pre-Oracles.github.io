export const getNowData = async () => {
  let consumingData;
  try {
    consumingData = await fetchNowDataFromAPI("https://pre-oracles.github.io/now.json");
  } catch (e) {
    consumingData = ["Error fetching data"];
  }
  
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
        content: consumingData
        
      },
      {
        title: "Currently At",
        content: [
          "San Jose, California",
          "Why I'm here: Home for the summer"
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
    if (Array.isArray(data)) {
      return data.map(String);
    } else if (typeof data === "object" && data !== null) {
      return Object.entries(data).map(([key, value]) => `${key}: ${value}`);
    } else {
      // For primitives
      return [String(data)];
    }
  } catch (error) {
    console.error("Error fetching now data:", error);
    return ["Failed to load data"];
  }
};



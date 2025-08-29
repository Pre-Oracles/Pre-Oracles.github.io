export const getNowData = async () => {
  let data;
  try {
    data = await fetchNowDataFromAPI("https://pre-oracles.github.io/now.json");
  } catch (e) {
    data = ["Error fetching data"];
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
        content: data["working"]
      },
      {
        title: "Currently Consuming",
        content: data["consuming"]
        
      },
      {
        title: "Currently At",
        content: data["location"]
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



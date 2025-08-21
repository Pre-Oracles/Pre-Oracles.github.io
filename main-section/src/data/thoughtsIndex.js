export const thoughtsIndex = [
    { 
        title: "Chinese nationalization modernization is actually quite intersting", 
        date: "2024-09-03", 
        excerpt: "Chinese intellectuals simultaneously had to invent the concept of China as a modern nation-state while defending it against foreign encroachment, essentially creating and protecting a national identity in the same historical moment. This type of attempts to speedrun modernization is so chaotic, and thus interesting. Similiar situation can be seen with the Ottoman Empire before WW1" ,
        image: "/resources/yatsen.jpg",
        readTime: "10 min read",
        tags: ["chinese","nationalism", "colonialism"],
        articleFile: () => import('./thoughts/china_modernisation.js')
      },
      { 
        title: "The Future of AI Agents", 
        date: "2024-08-01", 
        excerpt: "It is not just going to be transformers, because whenever a technology is only being slightly refined under heavy competition, it suggest the end is near for it (even if it takes 50 years), new paradigms, new technology will emerge eventually and overtake transformers like how they overtook the CNNs and their predecessors. " ,
        readTime: "12 min read",
        tags: ["tech", "ML","DL","Transformers"],
        articleFile: () => import("./thoughts/dying_transformers.js")
      },
      {
        title:"Winning the battle of Manzikert",
        date: "2025-08-12",
        expert: "The alternative history where Byzantium wins the battle of Manzikurt, and how different the timeline would stretch from it.",
        image: "/resource/manzikert.jpg",
        readTime: "10 min read",
        tags: ["History", "Alternative History","Byzantium","Seljuks"],
        articleFile: () => import("./thoughts/manzikurt_victory.js")
      }
  
];
export const getLatestThought = () => {
  return thoughtsIndex[0]; 
}
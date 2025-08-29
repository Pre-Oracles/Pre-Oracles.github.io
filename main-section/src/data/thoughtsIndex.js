import { article as china } from "./thoughts/china_modernisation.js";
import { article as AI} from "./thoughts/dying_transformers.js";
import { article as manzikert} from "./thoughts/manzikurt_victory.js";

function calculateReadTime(article) {
  const words = article.content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 225); // avg reading speed
  return `${minutes} min read`;
}

export const thoughtsIndex = [
    {
      title:"Winning the battle of Manzikert",
      date: "2025-08-12",
      excerpt: "The alternative history where Byzantium wins the battle of Manzikurt, (containing of a semi-detailed first personal narrative of a Turkish Mercenary) and how different our timeline would stretch from it.",
      image: "/resources/manzikert.jpg",
      readTime: calculateReadTime(manzikert),
      tags: ["History", "Alternative History","Byzantium","Seljuks"],
      articleFile: manzikert
    },
    { 
      title: "Chinese nationalization modernization is actually quite intersting", 
      date: "2024-09-03", 
      excerpt: "Chinese intellectuals simultaneously had to invent the concept of China as a modern nation-state while defending it against foreign encroachment, essentially creating and protecting a national identity in the same historical moment. This type of attempts to speedrun modernization is so chaotic, and thus interesting. Similiar situation can be seen with the Ottoman Empire before WW1" ,
      image: "/resources/yatsen.jpg",
      readTime: calculateReadTime(china),
      tags: ["chinese","nationalism", "colonialism"],
      articleFile: china
    },
    { 
      title: "The Future of AI Agents", 
      date: "2024-08-01", 
      image: "/resources/ai_agent.png",
      excerpt: "It is not just going to be transformers, because whenever a technology is only being slightly refined under heavy competition, it suggest the end is near for it (even if it takes 50 years), new paradigms, new technology will emerge eventually and overtake transformers like how they overtook the CNNs and their predecessors. " ,
      readTime: calculateReadTime(AI),
      tags: ["tech", "ML","DL","Transformers"],
      articleFile: AI
    }
];
export const getLatestThought = () => {
  return thoughtsIndex[0]; 
}
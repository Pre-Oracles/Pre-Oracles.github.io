export const sampleData = {
  resume: {
    title: "Resume",
    content: {
      experience: [
        { 
          role: "Intern", 
          company: "Climind", 
          period: "2023-2024", 
          description: "Developed web applications using React and Node.js" 
        }
      ],
      skills: ["JavaScript", "React", "Node.js", "Python", "CSS", "HTML"],
      education: [
        { 
          degree: "A-Levels", 
          institution: "St Pauls", 
          year: "2025" 
        }
      ],
      
    },
    previewImage: "data:image/svg+xml,%3Csvg width='200' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='120' fill='%23f8f8f8'/%3E%3Ctext x='100' y='60' text-anchor='middle' fill='%23333' font-family='Arial' font-size='14'%3EResume Preview%3C/text%3E%3C/svg%3E"
  },
  projects: {
    title: "Things That I've Made",
    content: [
      { 
        name: "3D Fractal Simulator", 
        tech: "Unity, C#, *Math", 
        description: "Full 3 Dimensional Julia Set Generator and Simulator",
        image: process.env.PUBLIC_URL + "/resources/julia_set.png",
        images: [
          process.env.PUBLIC_URL + "/resources/julia_set1.png",
          process.env.PUBLIC_URL + "/resources/julia_set2.png"
        ]
      }
    ],
    previewImage: process.env.PUBLIC_URL + "/resources/julia_set.png"
  },
  thoughts: {
    title: "Thoughts",
    content: [
      { 
        title: "The Future of AI Agents", 
        date: "2024-08-01", 
        excerpt: "Not just Transformers" 
      }
    ],
    previewImage: "data:image/svg+xml,%3Csvg width='200' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='120' fill='%23f8f8f8'/%3E%3Ctext x='100' y='60' text-anchor='middle' fill='%23333' font-family='Arial' font-size='14'%3EThoughts Preview%3C/text%3E%3C/svg%3E"
  },
  quotes: {
    title: "Quotes",
    content: [
      {
        quote: "Hammer to the Nail!", 
        author: "me" }
    ],
    previewImage: "data:image/svg+xml,%3Csvg width='200' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='120' fill='%23f8f8f8'/%3E%3Ctext x='100' y='60' text-anchor='middle' fill='%23333' font-family='Arial' font-size='14'%3EQuotes Preview%3C/text%3E%3C/svg%3E"
  }
};
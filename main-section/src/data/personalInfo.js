export const sampleData = {
  resume: {
    title: "Resume",
    content: {
      experience: [
        { 
          role: "Full-Stack Developer", 
          company: "self-employed", 
          period: "2020-Now", 
          description: "Learn & Utilize new and interesting skills out there, combining them into projects that can been seen in the \"things i've made section\"" 
        },
        { 
          role: "Intern", 
          company: "Climind", 
          period: "2023-2024", 
          description: "Developed scripts to obtain open & high value data for the Climind AI." 
        },
        { 
          role: "Front end developer", 
          company: "self-employed", 
          period: "2022", 
          description: "Made this very website by myself" 
        }
      ],
      skills: ["JavaScript", "React", "Node.js", "Python", "CSS", "HTML", "(Native) Chinese", "(Work Professiency) Tamil"],
      education: [
        { 
          degree: "Math-CS undergraduate degree", 
          institution: "UCSD", 
          year: "2025-2029" 
        },
        { 
          degree: "A-Levels", 
          institution: "St Pauls School", 
          year: "2023-2025" 
        },
        {
          degree: "GCSEs",
          institution: "Caterham School",
          year: "2020-2023"
        }
      ]
      
    },
    previewImage: "/resources/resume.jpg"
  },
  projects: {
    title: "Things That I've Made",
    content: [
      { 
        name: "3D Fractal Simulator", 
        tech: "Unity, C#, *Math", 
        description: "Full 3 Dimensional Julia Set Generator and Simulator",
        image:"/resources/julia_set.png",
        images: [
          "/resources/julia_set.png",
          "/resources/julia_set1.png",
          "/resources/julia_set2.png"
        ]
      },

      { 
        name: "2D Pixel Plateformer", 
        tech: "Godot, GDscript", 
        description: "A self drawn, self coded 2D platformer",
        image:"/resources/godot_game.png",
      }
    ],
    previewImage: "/resources/julia_set.png"
  },
  thoughts: {
    title: "Thoughts",
    content: [
      { 
        title: "The Future of AI Agents", 
        date: "2024-08-01", 
        excerpt: "It is not just going to be transformers, because whenever a technology is only being slightly refined under heavy competition, it suggest the end is near for it (even if it takes 50 years), new paradigms, new technology will emerge eventually and overtake transformers like how they overtook the CNNs and their predecessors. " 
      }
    ],
    previewImage: "/resources/yatsen.jpg"
  },
  quotes: {
    title: "Quotes",
    content: [
      {
        quote: "Capital has the ability to subsume all critiques into itself. Even those who would *critique* capital end up *reinforcing* it instead...", 
        author: "Joyce Messier, from the video game Disco Elysium (Inspired by Herbert Marcuse)" 
      },
      {
        quote: "I don't see where the realism is..", 
        author: "sutha" 
      }
    ],
    previewImage: "/resources/zaporo_cossak.jpg"
  }
};
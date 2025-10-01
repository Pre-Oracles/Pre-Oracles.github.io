import { thoughtsIndex, getLatestThought } from './thoughtsIndex.js';

export const content = {
  resume: {
    title: "Resume",
    content: {
      experience: [
        { 
          role: "Full-Stack Developer", 
          company: "self-employed", 
          period: "2020-Now", 
          description: "Learn and utilize new and interesting skills out there, combining them into projects that can been seen in the \"things i've made section\"" 
        },
        { 
          role: "Intern", 
          company: "Climind", 
          period: "2023-2024", 
          description: "Developed scripts to obtain open & high value data for the Climind AI." 
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
        ],
        liveDemo: "../JuliaSetFractal/",
        github: "https://github.com/alexgaoth/JuliaSetFractal"
      },
      { 
        name: "Political Speech Classifier", 
        tech: "Python, Matrices", 
        description: "Encoder-Only model which classify the enter political speech into the political party in the US.",
        image:"/resources/political_speech.png",
        images: [
          "/resources/political_speech.png",
          "/resources/political_speech1.png",
          "/resources/political_speech2.png",
        ]
      },
      { 
        name: "2D Pixel Plateformer", 
        tech: "Godot, GDscript", 
        description: "A self drawn, self coded 2D platformer",
        image:"/resources/godot_game.png",
      },
      { 
        name: "This very website", 
        tech: "html, css, js, React", 
        description: "written from the very scratch, where people can learn more about me",
        image:"/resources/this_website.png",
        images: [
          "/resources/this_website.png",
          "/resources/journey2.png"
        ], 
        github: "https://github.com/alexgaoth/alexgaoth.github.io"
      }
    ],
    previewImage: "/resources/julia_set.png"
  },
  thoughts: {
    title: "Thoughts",
    content: thoughtsIndex,
    previewImage: "/resources/yatsen.jpg"
    //getLatestThought().image
  },
  quotes: {
    title: "Quotes",
    content: [
      {
        quote: "History... is very rarely about what actually happened but more about how events are interpreted.",
        author: "Paul Markham on De Re Militari"
      },
      {
        quote: "Power is a lot like real estate. It's all about location location location. The closer you are to the source, the higher your property value.",
        author: "Frank Underwood, House of Cards"
      },
      {
        quote: "Hell is other people",
        author: "Sartre, No Exit"
      },
      {
        quote:"You can't have a revolution without a few heads rolling.",
        author: "John Paradox (alias), Europe Universalis IV"
      },
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
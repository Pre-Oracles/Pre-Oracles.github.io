export const sampleData = {
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
        ]
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
        ]
      }
    ],
    previewImage: "/resources/julia_set.png"
  },
  thoughts: {
    title: "Thoughts",
    content: [
      { 
        title: "Chinese nationalization modernization is actually quite intersting", 
        date: "2024-09-03", 
        excerpt: "Chinese intellectuals simultaneously had to invent the concept of China as a modern nation-state while defending it against foreign encroachment, essentially creating and protecting a national identity in the same historical moment. This type of attempts to speedrun modernization is so chaotic, and thus interesting. Similiar situation can be seen with the Ottoman Empire before WW1" ,
        image: "/resources/yatsen.jpg",
        readTime: "10 min read",
        tags: ["chinese","nationalism", "colonialism"],
        content: `
# Chinese Nationalization Modernization is Actually Quite Interesting

The story of Chinese modernization presents one of history's most fascinating paradoxes: how do you simultaneously invent and defend a national identity? Chinese intellectuals of the late 19th and early 20th centuries found themselves in this exact predicament, forced to conceptualize China as a modern nation-state while desperately protecting it from foreign encroachment.

## The Double Bind of Modernization

Unlike Western nations that had centuries to develop their national identities organically, China faced what we might call a "modernization speedrun" - an accelerated process born out of necessity rather than natural evolution. The Opium Wars (1839-1842, 1856-1860) had shattered China's traditional worldview and forced a reckoning with Western power.

Chinese intellectuals like Liang Qichao, Yan Fu, and later figures like Chen Duxiu found themselves caught between two impossible demands:

### First struggle they had: Creating National Identity
- Defining "China": What exactly was China? An empire? A civilization? A race? The traditional concept of "All under Heaven" (tianxia) didn't translate to modern geopolitics, it is barely even a geographical definition.
- Imagining the Nation: Benedict Anderson's concept of "imagined communities" becomes particularly relevant here - China had to be imagined as a nation before it could be defended as one
- Cultural Renaissance: The New Culture Movement attempted to define Chinese modernity while preserving cultural essence

### Second struggle they had: Defending Against Encroachment
- Territorial Integrity: Foreign concessions, spheres of influence, and extraterritorial rights were carving up Chinese sovereignty
- Economic Independence: The unequal treaties and foreign control of customs created economic dependency, through means of national/international banks and corperations owning railroads, customs etc... 
- Cultural Resistance: Missionaries and Western education challenged traditional Confucian values, the "shame" vs "guilty" way of judging. (there will a future section on this)
 `
      },
      { 
        title: "The Future of AI Agents", 
        date: "2024-08-01", 
        excerpt: "It is not just going to be transformers, because whenever a technology is only being slightly refined under heavy competition, it suggest the end is near for it (even if it takes 50 years), new paradigms, new technology will emerge eventually and overtake transformers like how they overtook the CNNs and their predecessors. " ,
        readTime: "12 min read",
        tags: ["tech", "ML","DL","Transformers"],
        content: `
# The Future of AI Agents

The current AI landscape is dominated by transformers, and everyone seems convinced this architecture will define artificial intelligence for the foreseeable future. But history suggests otherwise. When a technology becomes subject to incremental refinements under intense competition, it often signals that a paradigm shift is approaching—even if that shift takes decades to fully materialize.

## The Pattern of Technological Succession

### The CNN Era and Its Decline
Convolutional Neural Networks (CNNs) once seemed unshakeable. From AlexNet's breakthrough in 2012 to ResNet's innovations in 2015, CNNs dominated computer vision. The incremental improvements—batch normalization, skip connections, attention mechanisms—seemed to promise endless progress.

But by 2017, the Vision Transformer (ViT) papers began showing that transformers could match or exceed CNN performance on image tasks. The writing was on the wall, even though many refused to read it.

### Pre-Transformer Architectures
Before transformers, we had:
- RNNs and LSTMs: Dominated sequence modeling until attention mechanisms made them obsolete
- Encoder-Decoder Architectures: Powerful but limited by their sequential nature
- Convolutional Sequence Models: Attempts to parallelize sequence processing

Each seemed revolutionary until the next paradigm emerged.

## Signs That Transformer Dominance May Be Waning

### Diminishing Returns on Scale
The returns on simply making transformers larger are showing clear signs of diminishing marginal utility:

- Parameter Scaling: GPT-3 to GPT-4 required massive increases in parameters for modest performance gains
- Compute Costs: Training costs are growing exponentially while improvements are becoming linear
- Data Limitation*: High-quality training data is becoming scarce, forcing models to train on synthetic or lower-quality data

`
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
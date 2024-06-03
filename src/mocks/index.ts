import card1Img from '../assets/3_card-1.jpeg'
import card2Img from '../assets/4_card-2.jpeg'
import card3Img from '../assets/5_card-3.jpeg'
import post1Img from '../assets/5_post-1.png'
import post2Img from '../assets/6_post-2.png'
import post3Img from '../assets/7_post-3.png'
import { NavLink, Post } from '../models'

export const NavBarlinks:NavLink[] = [
  {
    id: 1,
    name: "Products",
    type: "select",
  },
  {
    id: 2,
    name: "Solutions",
    type: "select",
  },
  {
    id: 3,
    name: "Pricing",
    type: "select",
  },
  {
    id: 4,
    name: "Resources",
    type: "select",
  },
  {
    id: 5,
    name: "Blog",
    type: "link",
  },
];

export const posts: Post[] = [
  {
    author: "Olivia Rhye • 20 Jan 2022",
    heading: "UX review presentations",
    excerpt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image: post1Img,
    tags: [
      {
        id: "design",
        name: "Design",
      },
      {
        id: "research",
        name: "Research",
      },
      {
        id: "presentation",
        name: "Presentation",
      }
    ],
  },
  {
    author: "Phoenix Baker • 19 Jan 2022",
    heading: "Migrating to Linear 101",
    excerpt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    image: post2Img,
    tags: [
      {
        id: "design",
        name: "Design",
      },
      {
        id: "research",
        name: "Research",
      }
      
    ],
  },
  {
    author: "Lana Steiner • 18 Jan 2022",
    heading: "Building your API Stack",
    excerpt: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    image: post3Img,
    tags: [
      {
        id: "design",
        name: "Design",
      },
      {
        id: "research",
        name: "Research",
      },
    ],
  },
];

export const cards: Post[] = [
  {
    author: "Alec Whitten • 17 Jan 2022",
    heading: "Bill Walsh leadership lessons",
    excerpt: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    image: card1Img,
    tags: [
      {
        id: "leadership",
        name: "Leadership",
      },
      {
        id: "management",
        name: "Management",
      }
    ],
  },
  {
    author: "Demi WIlkinson • 16 Jan 2022",
    heading: "PM mental models",
    excerpt: "Mental models are simple expressions of complex processes or relationships.",
    image: card2Img,
    tags: [
      {
        id: "product",
        name: "Product",
      },
      {
        id: "research",
        name: "Research",
      },
      {
        id: "frameworks",
        name: "Frameworks",
      },
    ],
  },
  {
    author: "Candice Wu • 15 Jan 2022",
    heading: "What is Wireframing?",
    excerpt: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    image: card3Img,
    tags: [
      {
        id: "design",
        name: "Design",
      },
      {
        id: "research",
        name: "Research",
      }
    ],
  }
]
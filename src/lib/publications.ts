
export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: 'journal' | 'conference' | 'book' | 'thesis' | 'workshop' | 'preprint';
  tags: string[];
  pdf?: string;
  doi?: string;
  slides?: string;
  link?: string;
  code?: string;
}

// Publications for Dr. Peizhi Shi
export const publications: Publication[] = [
  {
    title: "Learn to rotate: Part orientation for reducing support volume via generalizable reinforcement learning",
    authors: "P. Shi, Q. Qi, Y. Qin, F. Meng, S. Lou, P. J. Scott, and X. Jiang",
    venue: "IEEE Transactions on Industrial Informatics",
    year: 2023,
    type: "journal",
    tags: ["reinforcement learning", "additive manufacturing", "part orientation", "support volume reduction"],
    pdf: "#"
  },
  {
    title: "Highly interacting machining feature recognition via small sample learning",
    authors: "P. Shi, Q. Qi, Y. Qin, P. J. Scott, and X. Jiang",
    venue: "Robotics and Computer-Integrated Manufacturing",
    year: 2022,
    type: "journal",
    tags: ["machine learning", "feature recognition", "small sample learning", "manufacturing"],
    pdf: "#"
  },
  {
    title: "Intersecting machining feature localisation and recognition via single shot multibox detector",
    authors: "P. Shi, Q. Qi, Y. Qin, P. J. Scott, and X. Jiang",
    venue: "IEEE Transactions on Industrial Informatics",
    year: 2021,
    type: "journal",
    tags: ["computer vision", "feature detection", "manufacturing", "object detection"],
    pdf: "#"
  },
  {
    title: "Automatic determination of part build orientation for laser powder bed fusion",
    authors: "Y. Qin, Q. Qi, P. Shi, P. J. Scott, and X. Jiang",
    venue: "Virtual and Physical Prototyping",
    year: 2021,
    type: "journal",
    tags: ["additive manufacturing", "build orientation", "laser powder bed fusion", "automation"],
    pdf: "#"
  },
  {
    title: "A novel learning-based feature recognition method using multiple sectional view representation",
    authors: "P. Shi, Q. Qi, Y. Qin, P. J. Scott, and X. Jiang",
    venue: "Journal of Intelligent Manufacturing",
    year: 2020,
    type: "journal",
    tags: ["machine learning", "feature recognition", "manufacturing", "representation learning"],
    pdf: "#"
  },
  {
    title: "Automatic generation of alternative build orientations for laser powder bed fusion based on facet clustering",
    authors: "Y. Qin, Q. Qi, P. Shi, P. J. Scott, and X. Jiang",
    venue: "Virtual and Physical Prototyping",
    year: 2020,
    type: "journal",
    tags: ["additive manufacturing", "build orientation", "clustering", "laser powder bed fusion"],
    pdf: "#"
  },
  {
    title: "Learning constructive primitives for real-time dynamic difficulty adjustment in Super Mario Bros",
    authors: "P. Shi, and K. Chen",
    venue: "IEEE Transactions on Games",
    year: 2017,
    type: "journal",
    tags: ["machine learning", "game AI", "dynamic difficulty adjustment", "reinforcement learning"],
    pdf: "#"
  },
  {
    title: "Online level generation in Super Mario Bros via learning constructive primitives",
    authors: "P. Shi, and K. Chen",
    venue: "IEEE Conference on Computational Intelligence and Games",
    year: 2016,
    type: "conference",
    tags: ["machine learning", "procedural generation", "game AI", "computational intelligence"],
    pdf: "#"
  },
  {
    title: "Data-driven optimisation of process parameters for reducing developed surface area ratio in laser powder bed fusion",
    authors: "Y. Qin, P. Shi, S. Lou, TL See, M Jamal, W. Zeng, L Blunt, P. J. Scott, and X. Jiang",
    venue: "The International Journal of Advanced Manufacturing Technology",
    year: 2025,
    type: "journal",
    tags: ["additive manufacturing", "process optimization", "data-driven", "laser powder bed fusion"],
    pdf: "#"
  },
  {
    title: "Optimisation of process parameters for improving surface quality in laser powder bed fusion",
    authors: "Y. Qin, S. Lou, P. Shi, W. Zeng, P. J. Scott, and X. Jiang",
    venue: "The International Journal of Advanced Manufacturing Technology",
    year: 2024,
    type: "journal",
    tags: ["additive manufacturing", "process optimization", "surface quality", "laser powder bed fusion"],
    pdf: "#"
  },
  {
    title: "A novel weighted averaging operator of linguistic interval-valued intuitionistic fuzzy numbers for cognitively inspired decision-making",
    authors: "Y. Qin, Q. Qi, P. Shi, P. J. Scott, and X. Jiang",
    venue: "Cognitive Computation",
    year: 2023,
    type: "journal",
    tags: ["fuzzy logic", "decision making", "cognitive computing", "mathematical operators"],
    pdf: "#"
  },
  {
    title: "Selection of materials in metal additive manufacturing via three-way decision-making",
    authors: "Y. Qin, Q. Qi, P. Shi, P. J. Scott, and X. Jiang",
    venue: "The International Journal of Advanced Manufacturing Technology",
    year: 2023,
    type: "journal",
    tags: ["additive manufacturing", "material selection", "decision making", "three-way decision"],
    pdf: "#"
  },
  {
    title: "Multi-attribute decision-making methods in additive manufacturing: The state of the art",
    authors: "Y. Qin, Q. Qi, P. Shi, S. Lou, P. J. Scott, and X. Jiang",
    venue: "Processes",
    year: 2023,
    type: "journal",
    tags: ["additive manufacturing", "decision making", "multi-attribute", "state of the art"],
    pdf: "#"
  },
  {
    title: "A multi-criterion three-way decision-making method under linguistic interval-valued intuitionistic fuzzy environment",
    authors: "Y. Qin, Q. Qi, P. Shi, P. J. Scott, and X. Jiang",
    venue: "Journal of Ambient Intelligence and Humanized Computing",
    year: 2022,
    type: "journal",
    tags: ["fuzzy logic", "decision making", "multi-criterion", "ambient intelligence"],
    pdf: "#"
  },
  {
    title: "Status, issues, and future of computer-aided part orientation for additive manufacturing",
    authors: "Y. Qin, Q. Qi, P. Shi, P. J. Scott, and X. Jiang",
    venue: "The International Journal of Advanced Manufacturing Technology",
    year: 2021,
    type: "journal",
    tags: ["additive manufacturing", "part orientation", "computer-aided design", "review"],
    pdf: "#"
  },
  {
    title: "Multiple-attribute decision-making based on picture fuzzy archimedean power Maclaurin symmetric mean operators",
    authors: "Y. Qin, X. Cui, M. Huang, Y. Zhong, Z. Tang, and P. Shi",
    venue: "Granular Computing",
    year: 2021,
    type: "journal",
    tags: ["fuzzy logic", "decision making", "mathematical operators", "granular computing"],
    pdf: "#"
  },
  {
    title: "Linguistic interval-valued intuitionistic fuzzy archimedean power muirhead mean operators for multiattribute group decision-making",
    authors: "Y. Qin, X. Cui, M. Huang, Y. Zhong, Z. Tang, and P. Shi",
    venue: "Complexity",
    year: 2020,
    type: "journal",
    tags: ["fuzzy logic", "decision making", "mathematical operators", "group decision"],
    pdf: "#"
  },
  {
    title: "Linguistic interval-valued intuitionistic fuzzy archimedean prioritised aggregation operators for multi-criteria decision making",
    authors: "Y. Qin, Q. Qi, P. Shi, P. J. Scott, and X. Jiang",
    venue: "Journal of Intelligent & Fuzzy Systems",
    year: 2020,
    type: "journal",
    tags: ["fuzzy logic", "decision making", "mathematical operators", "aggregation"],
    pdf: "#"
  },
  {
    title: "Novel operational laws and power muirhead mean operators of picture fuzzy values in the framework of Dempster-Shafer theory for multiple criteria decision making",
    authors: "Y. Qin, Q. Qi, P. Shi, P. J. Scott, and X. Jiang",
    venue: "Computers & Industrial Engineering",
    year: 2020,
    type: "journal",
    tags: ["fuzzy logic", "decision making", "Dempster-Shafer theory", "industrial engineering"],
    pdf: "#"
  },
  {
    title: "Archimedean Muirhead aggregation operators of q-rung orthopair fuzzy numbers for multicriteria group decision making",
    authors: "Y. Qin, X. Cui, M. Huang, Y. Zhong, Z. Tang, and P. Shi",
    venue: "Complexity",
    year: 2019,
    type: "journal",
    tags: ["fuzzy logic", "decision making", "mathematical operators", "group decision"],
    pdf: "#"
  },
  {
    title: "Modular verification of concurrent thread management",
    authors: "Y. Guo, X. Feng, Z. Shao, and P. Shi",
    venue: "Asian Symposium on Programming Languages and Systems",
    year: 2012,
    type: "conference",
    tags: ["programming languages", "verification", "concurrent systems", "thread management"],
    pdf: "#"
  }
];

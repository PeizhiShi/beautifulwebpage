
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
  }
];

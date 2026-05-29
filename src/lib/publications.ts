
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
  impactFactor?: number;
  abs?: number;
}

// Publications for Dr. Peizhi Shi
export const publications: Publication[] = [
  {
    title: "Machine learning in feature recognition for manufacturing: Taxonomy, analytical review, comparisons, trends, challenges, and outlook",
    authors: "P. Shi, Y. Qin, F. Meng, P. J. Scott, and X. Jiang",
    venue: "International Journal of Production Research",
    year: 2026,
    type: "journal",
    tags: ["machine learning", "feature recognition", "manufacturing", "taxonomy", "review"],
    impactFactor: 8.8,
    abs: 3
  },
  {
    title: "Multi-scale and real-time load forecasting: A universal online functional analysis framework",
    authors: "S. Dai, F. Meng, and P. Shi",
    venue: "IEEE Transactions on Engineering Management",
    year: 2026,
    type: "journal",
    tags: ["machine learning", "load forecasting", "real-time", "functional analysis", "energy"],
    abs: 3
  },
  {
    title: "Machine learning in peak demand forecasting: foundations, trends, and insights",
    authors: "S. Dai, F. Meng, H. Dai, Q. Wang, X. Chen, W. Bai, P. Shi, R. Allmendinger, Y. Zhang, J. Liu",
    venue: "Renewable and Sustainable Energy Reviews",
    year: 2026,
    type: "journal",
    tags: ["machine learning", "energy forecasting", "peak demand", "renewable energy"],
    impactFactor: 16.3
  },
  {
    title: "Learn to rotate: Part orientation for reducing support volume via generalizable reinforcement learning",
    authors: "P. Shi, Q. Qi, Y. Qin, F. Meng, S. Lou, P. J. Scott, and X. Jiang",
    venue: "IEEE Transactions on Industrial Informatics",
    year: 2023,
    type: "journal",
    tags: ["reinforcement learning", "additive manufacturing", "part orientation", "support volume reduction"],
    pdf: "/publications/shi2023_rotate.pdf",
    impactFactor: 12.1
  },
  {
    title: "Highly interacting machining feature recognition via small sample learning",
    authors: "P. Shi, Q. Qi, Y. Qin, P. J. Scott, and X. Jiang",
    venue: "Robotics and Computer-Integrated Manufacturing",
    year: 2022,
    type: "journal",
    tags: ["machine learning", "feature recognition", "small sample learning", "manufacturing"],
    pdf: "/publications/shi2022_feature_recognition.pdf",
    impactFactor: 10.4
  },
  {
    title: "Intersecting machining feature localisation and recognition via single shot multibox detector",
    authors: "P. Shi, Q. Qi, Y. Qin, P. J. Scott, and X. Jiang",
    venue: "IEEE Transactions on Industrial Informatics",
    year: 2021,
    type: "journal",
    tags: ["computer vision", "feature detection", "manufacturing", "object detection"],
    pdf: "/publications/shi2021_feature_localisation.pdf",
    impactFactor: 12.1
  },
  {
    title: "Automatic determination of part build orientation for laser powder bed fusion",
    authors: "Y. Qin, Q. Qi, P. Shi, P. J. Scott, and X. Jiang",
    venue: "Virtual and Physical Prototyping",
    year: 2021,
    type: "journal",
    tags: ["additive manufacturing", "build orientation", "laser powder bed fusion", "automation"],
    pdf: "/publications/qin2021_build_orientation.pdf",
    impactFactor: 10.6
  },
  {
    title: "A novel learning-based feature recognition method using multiple sectional view representation",
    authors: "P. Shi, Q. Qi, Y. Qin, P. J. Scott, and X. Jiang",
    venue: "Journal of Intelligent Manufacturing",
    year: 2020,
    type: "journal",
    tags: ["machine learning", "feature recognition", "manufacturing", "object detection"],
    pdf: "/publications/shi2020_sectional_view.pdf",
    impactFactor: 7.7
  },
  {
    title: "Automatic generation of alternative build orientations for laser powder bed fusion based on facet clustering",
    authors: "Y. Qin, Q. Qi, P. Shi, P. J. Scott, and X. Jiang",
    venue: "Virtual and Physical Prototyping",
    year: 2020,
    type: "journal",
    tags: ["additive manufacturing", "build orientation", "clustering", "laser powder bed fusion"],
    pdf: "/publications/qin2020_facet_clustering.pdf",
    impactFactor: 10.6
  },
  {
    title: "Learning constructive primitives for real-time dynamic difficulty adjustment in Super Mario Bros",
    authors: "P. Shi, and K. Chen",
    venue: "IEEE Transactions on Games",
    year: 2017,
    type: "journal",
    tags: ["machine learning", "game AI", "dynamic difficulty adjustment", "reinforcement learning"],
    pdf: "/publications/shi2017_mario_bros.pdf"
  },
  {
    title: "Online level generation in Super Mario Bros via learning constructive primitives",
    authors: "P. Shi, and K. Chen",
    venue: "IEEE Conference on Computational Intelligence and Games",
    year: 2016,
    type: "conference",
    tags: ["machine learning", "procedural generation", "game AI", "computational intelligence"],
    pdf: "/publications/shi2016_mario_bros.pdf"
  },
  {
    title: "Data-driven optimisation of process parameters for reducing developed surface area ratio in laser powder bed fusion",
    authors: "Y. Qin, P. Shi, S. Lou, TL See, M Jamal, W. Zeng, L Blunt, P. J. Scott, and X. Jiang",
    venue: "The International Journal of Advanced Manufacturing Technology",
    year: 2025,
    type: "journal",
    tags: ["additive manufacturing", "process optimization", "data-driven", "laser powder bed fusion"],
    pdf: "/publications/qin2025_surface_area.pdf"
  }
  
];

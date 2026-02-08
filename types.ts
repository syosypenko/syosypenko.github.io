
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl: string;
  highlighted?: boolean;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Tools';
  icon?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

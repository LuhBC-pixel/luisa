const header = {
  homepage: 'https://meu-site-drab.vercel.app/',
  title: 'LBC.',
};

const about = {
  name: 'Luisa Boina Coltro',
  role: 'Desenvolvedora Full Stack Junior',
  description:
    'Eu sou uma desenvolvedora Full Stack Junior, estou estudando para me tornar uma desenvolvedora Full Stack Pleno. Estou aprofundando o meu conhecimento em React, Next.js, Node.js, Express, Git, HTML, CSS, Javascript, Material UI, Tailwind CSS.',
  resume: 'cv.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/luisa-boina-coltro-02294014b/',
    github: 'https://github.com/LuhBC-pixel',
  },
};

const projects = [
  {
    name: 'Github Search',
    description:
      'É um site que permita que pesquisa usuários do Github, mostra os dados do usuário pesquisado e todos os repositórios dele.',
    stack: ['Tailwind CSS', 'React-router', 'React', 'Github API', 'Vercel'],
    sourceCode: 'https://github.com/LuhBC-pixel/GithubSearch',
    livePreview: 'https://github-search-wine-seven.vercel.app/',
  },
  {
    name: 'Docere',
    description: 'Site de uma escola fictícia',
    stack: ['React', 'Nextjs', 'Chackra UI', 'Vercel'],
    sourceCode: 'https://github.com/LuhBC-pixel/Docere',
    livePreview: 'https://docere.vercel.app/',
  },
  {
    name: 'NLW Web - Rocketseat',
    description:
      'Evento de nlw da rocketseat, aprimorei o site com novas funcionalidades. Obs: O backend está fora do ar, então não é possível ver o site com novas funcionalidades.',
    stack: [
      'React',
      'Vite',
      'tailwind CSS',
      'typescript',
      'axios',
      'react-hook-form',
      'kenn-slider',
    ],
    sourceCode: 'https://github.com/LuhBC-pixel/nlw-web',
    livePreview: 'https://github.com/LuhBC-pixel/nlw-web',
  },
  {
    name: 'NLW Server - Rocketseat',
    description:
      'Evento de nlw da rocketseat, adicionei a validação dos dados usando o Zod. Mas o backend está fora do ar.',
    stack: [
      'Node',
      'express',
      'typescript',
      'sqlite',
      'prisma',
      'zod',
      'railway',
    ],
    sourceCode: 'https://github.com/LuhBC-pixel/nlw-server',
    livePreview: 'https://github.com/LuhBC-pixel/nlw-server',
  },
];

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Vite',
  'React-Native',
  'Expo',
  'Material UI',
  'Tailwind CSS',
  'Chackra UI',
  'Styled Components',
  'Git',
  'Node.js',
  'Express',
  'Axios',
  'Zod',
  'React Hook Form',
  'Prisma',
  'Github',
  'Vercel',
  'Railway',
];

const contact = {
  email: 'bc.luisa@yahoo.com.br',
};

export { header, about, projects, skills, contact };

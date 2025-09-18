export const projetos = [
  {
    id: 1,
    nome: "Planejamento de OKRs - Opportunum",
    descricao:
      " Um sistema web full-stack para gestão de projetos e acompanhamento de OKRs (Objectives and Key Results).\n\n  Recursos do aplicativo:\n\n- Autenticação de usuários (login com JWT)\n\n- Cadastro e gerenciamento de projetos\n\n- Registro e acompanhamento de tarefas (pendente, em andamento, concluído)\n\n- Dashboard geral com gráfico de status consolidado de todas as tarefas dos projetos\n\n- Dashboard individual com gráfico de status consolidado de todas as tarefas pendentes do usuário\n\n- Visualização detalhada de cada projeto com gráficos individuais\n\n- Gestão de acessos (roles)\n\n- Login para teste: \n\nEmail: admin@opportunum.com \n\nSenha: Senha@123",
    imagem: "/images/opportunum.PNG",
    github: "https://github.com/Mariahsth/opportunum",
    demo: "https://opportunum.vercel.app/",
    tags: "React, Axios, TypeScript, Node.js, Express, MongoDB, Mongoose, MaterialUI",
    type: "Full-Stack",
  },
  {
    id: 2,
    nome: "Dynamox App",
    descricao:
      " Projeto Full-Stack de aplicativo para monitorização de ativos\n\nEsse projeto foi realizado em um desafio de desenvolvimento\n\n  Recursos do aplicativo:\n\n- Autenticação para acessar rotas privadas\n\n- Criar, editar e excluir máquinas\n\n- Criar pontos de monitoramento e sensores para uma máquina existente\n\n- Impedir a configuração dos sensores 'TcAg' e 'TcAs' para máquinas do tipo 'Bomba'\n\n- Listar todos os pontos de monitoramento em uma lista paginada\n\n- Classificar a lista de pontos de monitoramento por qualquer uma de suas colunas em ordem crescente ou decrescente",
    imagem: "/images/dynamox.JPG",
    github:
      "https://github.com/Mariahsth/developer-challenges/tree/mariah-hoffmann",
    demo: "https://developer-challenges-507u.onrender.com/",
    tags: "TypeScript, React, Redux, Vite, Node.js, MongoDB, Mongoose, MaterialUI, Express",
    type: "Full-Stack",
  },

  {
    id: 3,
    nome: "Automação de Agendamento com N8N",
    descricao:
      "Workflow do N8N para automação de agendamento de consultas médicas com integração ao Telegram e Google Calendar.\n\n  Recursos do aplicativo:\n\n- Recebe mensagens de pacientes via Telegram Bot.\n\n- Extrai informações como datas preferenciais e nome do paciente.\n\n- Usa IA (Gemini 2.5 Flash) para interpretar pedidos e gerenciar o fluxo\n\n- Checa disponibilidade de horários no Google Calendar.\n\n- Valida datas de exames (exame ≤ 6 meses).\n\n- Cria eventos confirmados no Google Calendar.\n\n- Responde ao paciente pelo Telegram com confirmações.",
    imagem: "/images/n8n.PNG",
    github: "https://github.com/Mariahsth/clinica-agendamento-n8n",
    tags: "N8N, JS",
    type: "IA/Automação",
  },
  {
    id: 4,
    nome: "Agente de IA - Recursos Humanos",
    descricao:
      "Agente inteligente de IA para automação de respostas e suporte a dúvidas frequentes do setor de Recursos Humanos (RH) de uma empresa.\n\n  Recursos do aplicativo:\n\n- Triar perguntas de colaboradores.\n\n- Decidir se deve auto-responder, pedir mais informações ou abrir um chamado.\n\n- Consultar documentos internos (como políticas de reembolso e home office).\n\n- Fornecer respostas claras, com base em fontes documentais (RAG).\n\n- Solicitar mais informações quando necessário.",
    imagem: "/images/agente-ia-rh.PNG",
    github: "https://github.com/Mariahsth/agente-ia-gemini",
    tags: "Langchain, Python, Gemini",
    type: "IA/Automação",
  },

  {
    id: 5,
    nome: "Meteora",
    descricao:
      "Projeto de E-commerce de moda (ainda em desenvolvimento)\n\n  Recursos do aplicativo:\n\nNeste estágio de desenvolvimento, o Meteora possui as seguintes funcionalidades:\n\n- Adicionar itens ao carrinho\n\n- Remover itens do carrinho\n\n- Visualizar a página do carrinho\n\n- Deletar itens do carrinho",
    imagem: "/images/meteora.PNG",
    github: "https://github.com/Mariahsth/meteora",
    demo: "https://meteora-sepia.vercel.app/",
    tags: "React, Vite, JS",
    type: "Front-End",
  },

  {
    id: 6,
    nome: "LeadSoft Challenge",
    descricao:
      " Landing Page de inscrição para missão espacial\n\nEste repositório contém a solução para o desafio técnico full stack proposto pela LeadSoft.\n\n  Recursos do aplicativo:\n\n- Inscrição de candidatos com validação reCAPTCHA v3\n\n- Validação de nome, CPF, e-mail, data de nascimento, legenda e imagem\n\n- Galeria com exibição de candidatos inscritos com nome, foto e legenda\n\n- Funcionalidade de enviar comentários para candidatos inscritos com validação reCAPTCHA v3\n\n- Área restrita com login e senha de administradores com validação reCAPTCHA v3\n\n- Painel privado com informações de candidatos\n\n- Opção de deletar comentários\n\n- Opção de deletar candidatos inscritos",
    imagem: "/images/leadsoft.PNG",
    github: "https://github.com/Mariahsth/leadSoft-challenge",
    demo: "https://lead-soft-challenge.vercel.app/",
    tags: "React, Next.js, Axios, TypeScript, Node.js, Express, RavenDB",
    type: "Full-Stack",
  },

  {
    id: 7,
    nome: "Aluroni",
    descricao:
      " Projeto Front-end de site de restaurante italiano \n\n  Recursos do aplicativo:\n\n - Acessar informações sobre cada prato\n\n- Filtrar pratos por categoria\n\n- Buscar pratos por nome\n\n- Ordenar pratos por preço, porção ou quantidade de pessoas servidas",
    imagem: "/images/aluroni.PNG",
    github: "https://github.com/Mariahsth/aluroni",
    demo: "https://aluroni-snowy.vercel.app/",
    tags: "React, TypeScript, Jest",
    type: "Front-End",
  },
  {
    id: 8,
    nome: "Chess Game",
    descricao:
      " Jogo de xadrez contra IA utilizando Next.js\n\nEsse projeto foi realizado em um desafio de desenvolvimento\n\n  Recursos do aplicativo:\n\n- Instruções do jogo\n\n- Escolha e preview da escala do tabuleiro\n\n- Captura e movimentos únicos para cada peça\n\n- Vizualização das casas disponíveis para o movimento\n\n- Vizualização da casa anterior ao movimento\n\n- Jogo contra adversário em IA",
    imagem: "/images/chessGame.PNG",
    github: "https://github.com/Mariahsth/chess-game",
    demo: "https://chess-game-one-beta.vercel.app/",
    tags: "React, TypeScript, Next.js, CSS",
    type: "Front-End",
  },

  {
    id: 9,
    nome: "ByteBank",
    descricao:
      " Página de cotação de moedas em tempo real\n\n  Recursos do aplicativo:\n\n- Acessar em tempo real a cotação em reais de dólar, euro e iene \n\n- Interface gráfica e valores da moeda atualizados a cada 5 segundos",
    imagem: "/images/byte-bank.JPG",
    github: "https://github.com/Mariahsth/byte-bank",
    demo: "https://byte-bank-two.vercel.app/",
    tags: "JS, HTML, CSS",
    type: "Front-End",
  },


  {
    id:8,
    nome: "Spotify",
    descricao: " Projeto Full-stack de aplicativo web que permite acessar e ouvir as principais músicas dos artistas mais ouvidos do Brasil.\n\n  Recursos do aplicativo:\n\n- Acessar artistas e músicas populares\n\n- Acessar albuns de cada artista\n\n- Acessar player da música escolhida\n\n- Reproduzir e pausar música desejada\n\n- Seguir para a póxima música ou para a anterior\n\n- Reproduzir música no modo aleatório",
    imagem: "/images/spotify.JPG",
    github: "https://github.com/Mariahsth/spotify",
    demo: "https://spotify-o6op.onrender.com/",
    tags:"Node.js, React, Express, MongoDB, Axios, Vite",
    type:"Full-Stack",
  },
  {
    id: 13,
    nome: "Gerenciamento de Cursos",
    descricao:
      "Um aplicativo backend para gerenciamento de cursos com construção de 4 entidades relacionais no SQL: Pessoas, Cursos, Matriculas e Categorias\n\n  Recursos do aplicativo:\n\n- Cadastrar, atualizar, deletar e consultar cursos, categorias e pessoas\n\n- Cadastrar, atualizar, deletar e consultar matriculas (ativas, por estudante ou por cursos lotados)\n\n- Consultar usuários ativos\n\n- Validação de formulários no backend\n\n- Consultar turmas abertas por intervalo de data\n\n- Cancelamento automático de matriculas ao desativar cadastro de estudante\n\n- Outros requisitos no README do projeto",
    imagem: "/images/gerenciamentoCursos.png",
    github: "https://github.com/Mariahsth/ORM_Node_Sequelize_SQlite",
    tags: "Node.js, Express, SQLite, Sequelize",
    type: "Back-End",
  },
  {
    id: 14,
    nome: "ScreenSound",
    descricao:
      "Um aplicativo backend utilizando o Swagger em C# .NET para cadastro, gerenciamento e exibição de artistas, músicas e gêneros, com API REST e persistência de dados em banco de dados SQL Server utilizando o Entity Framework Core.\n\n  Recursos do aplicativo:\n\n- Registrar, listar, atualizar e deletar artistas associados aos conjuntos de músicas cadastradas\n\n- Registrar, listar, atualizar e deletar músicas associadas a artistas e gêneros musicais\n\n- Registrar, listar e deletar gêneros musicais associados a músicas cadastradas\n\n- Listar artistas por nome\n\n- Listar músicas de um artista específico\n\n- Listar músicas por ano de lançamento",
    imagem: "/images/screensound.PNG",
    github: "https://github.com/Mariahsth/screen-sound-SQL",
    tags: "C#, .NET, Entity, Swagger",
    type: "Back-End",
  },
  {
    id: 15,
    nome: "Mapeamento de Saúde",
    descricao:
      "Mapeamento de saúde de cidadãos - Projeto de questionário analítico de sintomas da covid\n\n  Recursos do aplicativo:\n\n- Login de usuários: Permite realizar o controle de acesso no modo Administrador e Gestor a partir da autenticação dos usuários cadastrados pelo login.\n\n- Cadastro de cidadãos, sintomas, usuários e saudações: Permite adicionar novos cidadãos, usuários, sintomas e saudações de forma manual, ou adicionar os cidadãos por importação de arquivo.\n\n- Listagem de cidadãos, sintomas, usuários e saudações: Permite verificar quais cidadãos, usuários, sintomas e saudações que estão cadastrados no programa.\n\n- Realizar diagnóstico: Permite realizar questionário de saúde ao cidadão selecionado.\n\n- Relatórios analíticos ou sintéticos: Exibe relatórios consolidados por cidadão, por diagnóstico ou por filtros cruzados.",
    imagem: "/images/covid.PNG",
    github: "https://github.com/Mariahsth/projeto-covid-python",
    tags: "Python",
    type: "Back-End",
  },
  {
    id: 10,
    nome: "AluraDocs",
    descricao:
      "Comunicação  de vários usuários em tempo real.\n\nAluraDocs é um aplicativo web organizador de resumos e informações de documentos para temas diversos, que permite adicionar, armazenar, editar e excluir as informações em tempo real em salas compartilhadas.\n\n  Recursos do aplicativo:\n\n- Cadastro de usuários: Permite cadastrar usuários ao banco de dados com senhas criptografadas.\n\n- Login de usuários: Permite realizar o controle de acesso a partir da autenticação dos usuários cadastrados pelo login.\n\n- Adição de documentos: Permite adicionar novos documentos à lista.\n\n- Edição de documentos: Permite editar o conteúdo dos documentos em tempo real em qualquer dispositivo.\n\n- Listagem de documentos: Exibe os documentos e seus conteúdos salvos, buscados através de banco de dados.\n\n- Exclusão de documentos: Permite remover documentos da lista, gerando alerta para quem estiver na sala, e atualizando instantaneamente.",
    imagem: "/images/aluradocs.PNG",
    github: "https://github.com/Mariahsth/websocket-socket.io-mongodb",
    demo: "https://websocket-socket-io-aluradocs.onrender.com/",
    tags: "Node.js, Express, MongoDB, Socket.io",
    type: "Back-End",
  },
];

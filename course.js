const COURSE = [
 {
  "unit": 0,
  "title": "Olá, prazer!",
  "goal": "Cumprimentar e apresentar seu nome.",
  "rule": "Para se apresentar, use My name is… ou I am… . Para perguntar o nome, use What is your name?",
  "example": "I am Paulo. = Eu sou Paulo.",
  "phrases": [
   {
    "en": "Hello!",
    "pt": "Olá!",
    "answers": [
     "Hi!"
    ]
   },
   {
    "en": "My name is Paulo.",
    "pt": "Meu nome é Paulo.",
    "answers": [
     "I am Paulo."
    ]
   },
   {
    "en": "What is your name?",
    "pt": "Qual é o seu nome?",
    "answers": []
   },
   {
    "en": "Nice to meet you.",
    "pt": "Prazer em conhecer você.",
    "answers": []
   }
  ],
  "words": [
   {
    "en": "hello",
    "pt": "olá"
   },
   {
    "en": "name",
    "pt": "nome"
   },
   {
    "en": "please",
    "pt": "por favor"
   },
   {
    "en": "thank you",
    "pt": "obrigado / obrigada"
   }
  ],
  "id": "0",
  "unitTitle": "Começar a conversar",
  "tasks": [
   {
    "type": "choice",
    "title": "Entenda o significado",
    "prompt": "O que significa “Nice to meet you”?",
    "options": [
     "Prazer em conhecer você.",
     "Até amanhã.",
     "Estou com fome."
    ],
    "answer": "Prazer em conhecer você.",
    "explain": "Leia a explicação e compare o sentido de cada opção."
   },
   {
    "type": "cloze",
    "title": "Complete a frase",
    "prompt": "My ___ is Paulo.",
    "options": [
     "name",
     "from",
     "live"
    ],
    "answer": "name",
    "explain": "Para se apresentar, use My name is… ou I am… . Para perguntar o nome, use What is your name?"
   },
   {
    "type": "order",
    "title": "Monte a frase",
    "prompt": "Meu nome é Paulo.",
    "target": "My name is Paulo.",
    "explain": "Observe a ordem das palavras na frase-modelo."
   },
   {
    "type": "write",
    "title": "Passe para o inglês",
    "prompt": "Qual é o seu nome?",
    "answers": [
     "What is your name?"
    ],
    "explain": "Para se apresentar, use My name is… ou I am… . Para perguntar o nome, use What is your name?"
   },
   {
    "type": "listen-choice",
    "title": "Ouça e escolha o significado",
    "audio": "Hello!",
    "options": [
     "Olá!",
     "Qual é o seu nome?",
     "Prazer em conhecer você."
    ],
    "answer": "Olá!",
    "explain": "Hello! = Olá!"
   },
   {
    "type": "dictation",
    "title": "Ditado em inglês",
    "prompt": "Ouça a frase e escreva o que entendeu.",
    "audio": "Nice to meet you.",
    "answers": [
     "Nice to meet you."
    ],
    "explain": "Prazer em conhecer você."
   },
   {
    "type": "choice",
    "title": "Use em uma situação",
    "prompt": "Você chega a uma aula. Como cumprimenta o professor?",
    "options": [
     "Good morning!",
     "Good night!",
     "Goodbye!"
    ],
    "answer": "Good morning!",
    "explain": "Para se apresentar, use My name is… ou I am… . Para perguntar o nome, use What is your name?"
   },
   {
    "type": "write",
    "title": "Lembre sem olhar",
    "prompt": "Olá!",
    "answers": [
     "Hello!",
     "Hi!"
    ],
    "explain": "Volte ao quadro de frases se precisar. Repetir faz parte do estudo."
   }
  ]
 },
 {
  "unit": 0,
  "title": "Eu sou, você é",
  "goal": "Dizer como você e outras pessoas estão.",
  "rule": "O verbo be muda: I am; you/we/they are; he/she/it is. Para perguntas, inverta: Are you…?",
  "example": "She is happy. = Ela está feliz.",
  "phrases": [
   {
    "en": "I am happy.",
    "pt": "Estou feliz.",
    "answers": []
   },
   {
    "en": "She is a teacher.",
    "pt": "Ela é professora.",
    "answers": []
   },
   {
    "en": "Are you ready?",
    "pt": "Você está pronto?",
    "answers": []
   },
   {
    "en": "We are friends.",
    "pt": "Somos amigos.",
    "answers": []
   }
  ],
  "words": [
   {
    "en": "happy",
    "pt": "feliz"
   },
   {
    "en": "teacher",
    "pt": "professor / professora"
   },
   {
    "en": "ready",
    "pt": "pronto / pronta"
   },
   {
    "en": "friend",
    "pt": "amigo / amiga"
   }
  ],
  "id": "1",
  "unitTitle": "Começar a conversar",
  "tasks": [
   {
    "type": "choice",
    "title": "Entenda o significado",
    "prompt": "Qual frase fala de um grupo de amigos?",
    "options": [
     "We are friends.",
     "I am hungry.",
     "She is tired."
    ],
    "answer": "We are friends.",
    "explain": "Leia a explicação e compare o sentido de cada opção."
   },
   {
    "type": "cloze",
    "title": "Complete a frase",
    "prompt": "She ___ a teacher.",
    "options": [
     "is",
     "are",
     "am"
    ],
    "answer": "is",
    "explain": "O verbo be muda: I am; you/we/they are; he/she/it is. Para perguntas, inverta: Are you…?"
   },
   {
    "type": "order",
    "title": "Monte a frase",
    "prompt": "Ela é professora.",
    "target": "She is a teacher.",
    "explain": "Observe a ordem das palavras na frase-modelo."
   },
   {
    "type": "write",
    "title": "Passe para o inglês",
    "prompt": "Você está pronto?",
    "answers": [
     "Are you ready?"
    ],
    "explain": "O verbo be muda: I am; you/we/they are; he/she/it is. Para perguntas, inverta: Are you…?"
   },
   {
    "type": "listen-choice",
    "title": "Ouça e escolha o significado",
    "audio": "I am happy.",
    "options": [
     "Estou feliz.",
     "Você está pronto?",
     "Somos amigos."
    ],
    "answer": "Estou feliz.",
    "explain": "I am happy. = Estou feliz."
   },
   {
    "type": "dictation",
    "title": "Ditado em inglês",
    "prompt": "Ouça a frase e escreva o que entendeu.",
    "audio": "We are friends.",
    "answers": [
     "We are friends."
    ],
    "explain": "Somos amigos."
   },
   {
    "type": "choice",
    "title": "Use em uma situação",
    "prompt": "Complete a ideia: You…",
    "options": [
     "are ready.",
     "is ready.",
     "am ready."
    ],
    "answer": "are ready.",
    "explain": "O verbo be muda: I am; you/we/they are; he/she/it is. Para perguntas, inverta: Are you…?"
   },
   {
    "type": "write",
    "title": "Lembre sem olhar",
    "prompt": "Estou feliz.",
    "answers": [
     "I am happy."
    ],
    "explain": "Volte ao quadro de frases se precisar. Repetir faz parte do estudo."
   }
  ]
 },
 {
  "unit": 0,
  "title": "De onde você é?",
  "goal": "Falar de origem e lugar onde mora.",
  "rule": "From indica origem. Live in indica onde você mora. Para perguntar, use Where are you from?",
  "example": "I am from Portugal. I live in Spain.",
  "phrases": [
   {
    "en": "I am from Portugal.",
    "pt": "Sou de Portugal.",
    "answers": []
   },
   {
    "en": "I live in Spain.",
    "pt": "Moro na Espanha.",
    "answers": []
   },
   {
    "en": "Where are you from?",
    "pt": "De onde você é?",
    "answers": []
   },
   {
    "en": "I speak Portuguese.",
    "pt": "Falo português.",
    "answers": []
   }
  ],
  "words": [
   {
    "en": "country",
    "pt": "país"
   },
   {
    "en": "city",
    "pt": "cidade"
   },
   {
    "en": "from",
    "pt": "de / origem"
   },
   {
    "en": "live",
    "pt": "morar / viver"
   }
  ],
  "id": "2",
  "unitTitle": "Começar a conversar",
  "tasks": [
   {
    "type": "choice",
    "title": "Entenda o significado",
    "prompt": "“I live in Spain” informa…",
    "options": [
     "onde a pessoa mora.",
     "a idade da pessoa.",
     "a profissão da pessoa."
    ],
    "answer": "onde a pessoa mora.",
    "explain": "Leia a explicação e compare o sentido de cada opção."
   },
   {
    "type": "cloze",
    "title": "Complete a frase",
    "prompt": "I live ___ Spain.",
    "options": [
     "in",
     "on",
     "at"
    ],
    "answer": "in",
    "explain": "From indica origem. Live in indica onde você mora. Para perguntar, use Where are you from?"
   },
   {
    "type": "order",
    "title": "Monte a frase",
    "prompt": "Moro na Espanha.",
    "target": "I live in Spain.",
    "explain": "Observe a ordem das palavras na frase-modelo."
   },
   {
    "type": "write",
    "title": "Passe para o inglês",
    "prompt": "De onde você é?",
    "answers": [
     "Where are you from?"
    ],
    "explain": "From indica origem. Live in indica onde você mora. Para perguntar, use Where are you from?"
   },
   {
    "type": "listen-choice",
    "title": "Ouça e escolha o significado",
    "audio": "I am from Portugal.",
    "options": [
     "Sou de Portugal.",
     "De onde você é?",
     "Falo português."
    ],
    "answer": "Sou de Portugal.",
    "explain": "I am from Portugal. = Sou de Portugal."
   },
   {
    "type": "dictation",
    "title": "Ditado em inglês",
    "prompt": "Ouça a frase e escreva o que entendeu.",
    "audio": "I speak Portuguese.",
    "answers": [
     "I speak Portuguese."
    ],
    "explain": "Falo português."
   },
   {
    "type": "choice",
    "title": "Use em uma situação",
    "prompt": "Alguém pergunta sua origem. Você responde…",
    "options": [
     "I am from Portugal.",
     "I am at home.",
     "It is ten o’clock."
    ],
    "answer": "I am from Portugal.",
    "explain": "From indica origem. Live in indica onde você mora. Para perguntar, use Where are you from?"
   },
   {
    "type": "write",
    "title": "Lembre sem olhar",
    "prompt": "Sou de Portugal.",
    "answers": [
     "I am from Portugal."
    ],
    "explain": "Volte ao quadro de frases se precisar. Repetir faz parte do estudo."
   }
  ]
 },
 {
  "unit": 0,
  "title": "Família e idade",
  "goal": "Apresentar sua família e dizer a idade.",
  "rule": "Para idade, use be: I am sixty-one years old. Have indica posse: I have a brother. My = meu/minha.",
  "example": "This is my wife. = Esta é minha esposa.",
  "phrases": [
   {
    "en": "This is my family.",
    "pt": "Esta é minha família.",
    "answers": []
   },
   {
    "en": "I have a brother.",
    "pt": "Tenho um irmão.",
    "answers": []
   },
   {
    "en": "How old are you?",
    "pt": "Quantos anos você tem?",
    "answers": []
   },
   {
    "en": "I am sixty-one years old.",
    "pt": "Tenho sessenta e um anos.",
    "answers": [
     "I am 61 years old."
    ]
   }
  ],
  "words": [
   {
    "en": "family",
    "pt": "família"
   },
   {
    "en": "wife",
    "pt": "esposa"
   },
   {
    "en": "husband",
    "pt": "marido"
   },
   {
    "en": "brother",
    "pt": "irmão"
   }
  ],
  "id": "3",
  "unitTitle": "Começar a conversar",
  "tasks": [
   {
    "type": "choice",
    "title": "Entenda o significado",
    "prompt": "Como se pergunta a idade?",
    "options": [
     "How old are you?",
     "Where are you?",
     "What is your name?"
    ],
    "answer": "How old are you?",
    "explain": "Leia a explicação e compare o sentido de cada opção."
   },
   {
    "type": "cloze",
    "title": "Complete a frase",
    "prompt": "This is ___ family.",
    "options": [
     "my",
     "I",
     "me"
    ],
    "answer": "my",
    "explain": "Para idade, use be: I am sixty-one years old. Have indica posse: I have a brother. My = meu/minha."
   },
   {
    "type": "order",
    "title": "Monte a frase",
    "prompt": "Tenho um irmão.",
    "target": "I have a brother.",
    "explain": "Observe a ordem das palavras na frase-modelo."
   },
   {
    "type": "write",
    "title": "Passe para o inglês",
    "prompt": "Quantos anos você tem?",
    "answers": [
     "How old are you?"
    ],
    "explain": "Para idade, use be: I am sixty-one years old. Have indica posse: I have a brother. My = meu/minha."
   },
   {
    "type": "listen-choice",
    "title": "Ouça e escolha o significado",
    "audio": "This is my family.",
    "options": [
     "Esta é minha família.",
     "Quantos anos você tem?",
     "Tenho sessenta e um anos."
    ],
    "answer": "Esta é minha família.",
    "explain": "This is my family. = Esta é minha família."
   },
   {
    "type": "dictation",
    "title": "Ditado em inglês",
    "prompt": "Ouça a frase e escreva o que entendeu.",
    "audio": "I am sixty-one years old.",
    "answers": [
     "I am sixty-one years old.",
     "I am 61 years old."
    ],
    "explain": "Tenho sessenta e um anos."
   },
   {
    "type": "choice",
    "title": "Use em uma situação",
    "prompt": "Para dizer a idade em inglês, você usa…",
    "options": [
     "I am…",
     "I have…",
     "I do…"
    ],
    "answer": "I am…",
    "explain": "Para idade, use be: I am sixty-one years old. Have indica posse: I have a brother. My = meu/minha."
   },
   {
    "type": "write",
    "title": "Lembre sem olhar",
    "prompt": "Esta é minha família.",
    "answers": [
     "This is my family."
    ],
    "explain": "Volte ao quadro de frases se precisar. Repetir faz parte do estudo."
   }
  ]
 },
 {
  "unit": 1,
  "title": "Minha rotina",
  "goal": "Descrever hábitos do dia a dia.",
  "rule": "Para hábitos, use o presente simples: I work, I study, I play. Com he/she, geralmente entra -s: She works.",
  "example": "I study English every day.",
  "phrases": [
   {
    "en": "I wake up at seven.",
    "pt": "Acordo às sete.",
    "answers": [
     "I wake up at 7."
    ]
   },
   {
    "en": "I have breakfast at home.",
    "pt": "Tomo café da manhã em casa.",
    "answers": []
   },
   {
    "en": "I study English every day.",
    "pt": "Estudo inglês todos os dias.",
    "answers": []
   },
   {
    "en": "She works in a shop.",
    "pt": "Ela trabalha em uma loja.",
    "answers": [
     "She works in a store."
    ]
   }
  ],
  "words": [
   {
    "en": "wake up",
    "pt": "acordar"
   },
   {
    "en": "breakfast",
    "pt": "café da manhã"
   },
   {
    "en": "every day",
    "pt": "todos os dias"
   },
   {
    "en": "shop",
    "pt": "loja"
   }
  ],
  "id": "4",
  "unitTitle": "Meu dia a dia",
  "tasks": [
   {
    "type": "choice",
    "title": "Entenda o significado",
    "prompt": "“Every day” significa…",
    "options": [
     "todos os dias.",
     "somente hoje.",
     "no próximo mês."
    ],
    "answer": "todos os dias.",
    "explain": "Leia a explicação e compare o sentido de cada opção."
   },
   {
    "type": "cloze",
    "title": "Complete a frase",
    "prompt": "She ___ in a shop.",
    "options": [
     "works",
     "work",
     "working"
    ],
    "answer": "works",
    "explain": "Para hábitos, use o presente simples: I work, I study, I play. Com he/she, geralmente entra -s: She works."
   },
   {
    "type": "order",
    "title": "Monte a frase",
    "prompt": "Tomo café da manhã em casa.",
    "target": "I have breakfast at home.",
    "explain": "Observe a ordem das palavras na frase-modelo."
   },
   {
    "type": "write",
    "title": "Passe para o inglês",
    "prompt": "Estudo inglês todos os dias.",
    "answers": [
     "I study English every day."
    ],
    "explain": "Para hábitos, use o presente simples: I work, I study, I play. Com he/she, geralmente entra -s: She works."
   },
   {
    "type": "listen-choice",
    "title": "Ouça e escolha o significado",
    "audio": "I wake up at seven.",
    "options": [
     "Acordo às sete.",
     "Estudo inglês todos os dias.",
     "Ela trabalha em uma loja."
    ],
    "answer": "Acordo às sete.",
    "explain": "I wake up at seven. = Acordo às sete."
   },
   {
    "type": "dictation",
    "title": "Ditado em inglês",
    "prompt": "Ouça a frase e escreva o que entendeu.",
    "audio": "She works in a shop.",
    "answers": [
     "She works in a shop.",
     "She works in a store."
    ],
    "explain": "Ela trabalha em uma loja."
   },
   {
    "type": "choice",
    "title": "Use em uma situação",
    "prompt": "Qual frase descreve um hábito?",
    "options": [
     "I study every day.",
     "I studied yesterday.",
     "I will study tomorrow."
    ],
    "answer": "I study every day.",
    "explain": "Para hábitos, use o presente simples: I work, I study, I play. Com he/she, geralmente entra -s: She works."
   },
   {
    "type": "write",
    "title": "Lembre sem olhar",
    "prompt": "Acordo às sete.",
    "answers": [
     "I wake up at seven.",
     "I wake up at 7."
    ],
    "explain": "Volte ao quadro de frases se precisar. Repetir faz parte do estudo."
   }
  ]
 },
 {
  "unit": 1,
  "title": "Fazer perguntas",
  "goal": "Perguntar sobre hábitos e gostos.",
  "rule": "No presente simples, use Do you…? e Does she…? Depois de does, o verbo fica sem -s: Does she work?",
  "example": "Do you speak English?",
  "phrases": [
   {
    "en": "Do you speak English?",
    "pt": "Você fala inglês?",
    "answers": []
   },
   {
    "en": "Where do you work?",
    "pt": "Onde você trabalha?",
    "answers": []
   },
   {
    "en": "Does she play the piano?",
    "pt": "Ela toca piano?",
    "answers": []
   },
   {
    "en": "What do you like?",
    "pt": "Do que você gosta?",
    "answers": []
   }
  ],
  "words": [
   {
    "en": "where",
    "pt": "onde"
   },
   {
    "en": "what",
    "pt": "o quê / qual"
   },
   {
    "en": "speak",
    "pt": "falar"
   },
   {
    "en": "work",
    "pt": "trabalhar"
   }
  ],
  "id": "5",
  "unitTitle": "Meu dia a dia",
  "tasks": [
   {
    "type": "choice",
    "title": "Entenda o significado",
    "prompt": "“Where do you work?” pergunta…",
    "options": [
     "o lugar onde você trabalha.",
     "a hora de saída.",
     "se você gosta de música."
    ],
    "answer": "o lugar onde você trabalha.",
    "explain": "Leia a explicação e compare o sentido de cada opção."
   },
   {
    "type": "cloze",
    "title": "Complete a frase",
    "prompt": "___ she play the piano?",
    "options": [
     "Does",
     "Do",
     "Is"
    ],
    "answer": "Does",
    "explain": "No presente simples, use Do you…? e Does she…? Depois de does, o verbo fica sem -s: Does she work?"
   },
   {
    "type": "order",
    "title": "Monte a frase",
    "prompt": "Onde você trabalha?",
    "target": "Where do you work?",
    "explain": "Observe a ordem das palavras na frase-modelo."
   },
   {
    "type": "write",
    "title": "Passe para o inglês",
    "prompt": "Ela toca piano?",
    "answers": [
     "Does she play the piano?"
    ],
    "explain": "No presente simples, use Do you…? e Does she…? Depois de does, o verbo fica sem -s: Does she work?"
   },
   {
    "type": "listen-choice",
    "title": "Ouça e escolha o significado",
    "audio": "Do you speak English?",
    "options": [
     "Você fala inglês?",
     "Ela toca piano?",
     "Do que você gosta?"
    ],
    "answer": "Você fala inglês?",
    "explain": "Do you speak English? = Você fala inglês?"
   },
   {
    "type": "dictation",
    "title": "Ditado em inglês",
    "prompt": "Ouça a frase e escreva o que entendeu.",
    "audio": "What do you like?",
    "answers": [
     "What do you like?"
    ],
    "explain": "Do que você gosta?"
   },
   {
    "type": "choice",
    "title": "Use em uma situação",
    "prompt": "Qual pergunta está correta?",
    "options": [
     "Does she work here?",
     "Does she works here?",
     "Do she work here?"
    ],
    "answer": "Does she work here?",
    "explain": "No presente simples, use Do you…? e Does she…? Depois de does, o verbo fica sem -s: Does she work?"
   },
   {
    "type": "write",
    "title": "Lembre sem olhar",
    "prompt": "Você fala inglês?",
    "answers": [
     "Do you speak English?"
    ],
    "explain": "Volte ao quadro de frases se precisar. Repetir faz parte do estudo."
   }
  ]
 },
 {
  "unit": 1,
  "title": "Dizer não",
  "goal": "Negar e explicar uma dificuldade.",
  "rule": "Use do not/don’t com I/you/we/they. Use does not/doesn’t com he/she/it e o verbo sem -s.",
  "example": "I do not understand. = Não entendo.",
  "phrases": [
   {
    "en": "I do not understand.",
    "pt": "Não entendo.",
    "answers": []
   },
   {
    "en": "I do not drink coffee.",
    "pt": "Não bebo café.",
    "answers": []
   },
   {
    "en": "She does not work today.",
    "pt": "Ela não trabalha hoje.",
    "answers": []
   },
   {
    "en": "I am not tired.",
    "pt": "Não estou cansado.",
    "answers": []
   }
  ],
  "words": [
   {
    "en": "understand",
    "pt": "entender"
   },
   {
    "en": "coffee",
    "pt": "café"
   },
   {
    "en": "today",
    "pt": "hoje"
   },
   {
    "en": "tired",
    "pt": "cansado / cansada"
   }
  ],
  "id": "6",
  "unitTitle": "Meu dia a dia",
  "tasks": [
   {
    "type": "choice",
    "title": "Entenda o significado",
    "prompt": "Como dizer que você não entendeu?",
    "options": [
     "I do not understand.",
     "I do not remember.",
     "I am not hungry."
    ],
    "answer": "I do not understand.",
    "explain": "Leia a explicação e compare o sentido de cada opção."
   },
   {
    "type": "cloze",
    "title": "Complete a frase",
    "prompt": "She ___ not work today.",
    "options": [
     "does",
     "do",
     "is"
    ],
    "answer": "does",
    "explain": "Use do not/don’t com I/you/we/they. Use does not/doesn’t com he/she/it e o verbo sem -s."
   },
   {
    "type": "order",
    "title": "Monte a frase",
    "prompt": "Não bebo café.",
    "target": "I do not drink coffee.",
    "explain": "Observe a ordem das palavras na frase-modelo."
   },
   {
    "type": "write",
    "title": "Passe para o inglês",
    "prompt": "Ela não trabalha hoje.",
    "answers": [
     "She does not work today."
    ],
    "explain": "Use do not/don’t com I/you/we/they. Use does not/doesn’t com he/she/it e o verbo sem -s."
   },
   {
    "type": "listen-choice",
    "title": "Ouça e escolha o significado",
    "audio": "I do not understand.",
    "options": [
     "Não entendo.",
     "Ela não trabalha hoje.",
     "Não estou cansado."
    ],
    "answer": "Não entendo.",
    "explain": "I do not understand. = Não entendo."
   },
   {
    "type": "dictation",
    "title": "Ditado em inglês",
    "prompt": "Ouça a frase e escreva o que entendeu.",
    "audio": "I am not tired.",
    "answers": [
     "I am not tired."
    ],
    "explain": "Não estou cansado."
   },
   {
    "type": "choice",
    "title": "Use em uma situação",
    "prompt": "Qual frase está correta?",
    "options": [
     "He does not drink coffee.",
     "He do not drink coffee.",
     "He does not drinks coffee."
    ],
    "answer": "He does not drink coffee.",
    "explain": "Use do not/don’t com I/you/we/they. Use does not/doesn’t com he/she/it e o verbo sem -s."
   },
   {
    "type": "write",
    "title": "Lembre sem olhar",
    "prompt": "Não entendo.",
    "answers": [
     "I do not understand."
    ],
    "explain": "Volte ao quadro de frases se precisar. Repetir faz parte do estudo."
   }
  ]
 },
 {
  "unit": 1,
  "title": "Horários e datas",
  "goal": "Perguntar e dizer horários simples.",
  "rule": "At com horas: at ten. On com dias: on Monday. In com meses: in June. O’clock indica hora exata.",
  "example": "The lesson starts at ten.",
  "phrases": [
   {
    "en": "What time is it?",
    "pt": "Que horas são?",
    "answers": []
   },
   {
    "en": "It is three o’clock.",
    "pt": "São três horas.",
    "answers": [
     "It is 3 o’clock."
    ]
   },
   {
    "en": "The lesson starts at ten.",
    "pt": "A aula começa às dez.",
    "answers": [
     "The lesson starts at 10."
    ]
   },
   {
    "en": "We practice on Monday.",
    "pt": "Ensaiamos na segunda-feira.",
    "answers": []
   }
  ],
  "words": [
   {
    "en": "time",
    "pt": "hora / tempo"
   },
   {
    "en": "Monday",
    "pt": "segunda-feira"
   },
   {
    "en": "lesson",
    "pt": "aula / lição"
   },
   {
    "en": "start",
    "pt": "começar"
   }
  ],
  "id": "7",
  "unitTitle": "Meu dia a dia",
  "tasks": [
   {
    "type": "choice",
    "title": "Entenda o significado",
    "prompt": "“At ten” indica…",
    "options": [
     "às dez.",
     "na segunda-feira.",
     "em junho."
    ],
    "answer": "às dez.",
    "explain": "Leia a explicação e compare o sentido de cada opção."
   },
   {
    "type": "cloze",
    "title": "Complete a frase",
    "prompt": "We practice ___ Monday.",
    "options": [
     "on",
     "in",
     "at"
    ],
    "answer": "on",
    "explain": "At com horas: at ten. On com dias: on Monday. In com meses: in June. O’clock indica hora exata."
   },
   {
    "type": "order",
    "title": "Monte a frase",
    "prompt": "São três horas.",
    "target": "It is three o’clock.",
    "explain": "Observe a ordem das palavras na frase-modelo."
   },
   {
    "type": "write",
    "title": "Passe para o inglês",
    "prompt": "A aula começa às dez.",
    "answers": [
     "The lesson starts at ten.",
     "The lesson starts at 10."
    ],
    "explain": "At com horas: at ten. On com dias: on Monday. In com meses: in June. O’clock indica hora exata."
   },
   {
    "type": "listen-choice",
    "title": "Ouça e escolha o significado",
    "audio": "What time is it?",
    "options": [
     "Que horas são?",
     "A aula começa às dez.",
     "Ensaiamos na segunda-feira."
    ],
    "answer": "Que horas são?",
    "explain": "What time is it? = Que horas são?"
   },
   {
    "type": "dictation",
    "title": "Ditado em inglês",
    "prompt": "Ouça a frase e escreva o que entendeu.",
    "audio": "We practice on Monday.",
    "answers": [
     "We practice on Monday."
    ],
    "explain": "Ensaiamos na segunda-feira."
   },
   {
    "type": "choice",
    "title": "Use em uma situação",
    "prompt": "Para perguntar o horário, você diz…",
    "options": [
     "What time is it?",
     "How old is it?",
     "Where is it?"
    ],
    "answer": "What time is it?",
    "explain": "At com horas: at ten. On com dias: on Monday. In com meses: in June. O’clock indica hora exata."
   },
   {
    "type": "write",
    "title": "Lembre sem olhar",
    "prompt": "Que horas são?",
    "answers": [
     "What time is it?"
    ],
    "explain": "Volte ao quadro de frases se precisar. Repetir faz parte do estudo."
   }
  ]
 },
 {
  "unit": 2,
  "title": "No restaurante",
  "goal": "Pedir comida e a conta com educação.",
  "rule": "I would like… é uma forma educada de pedir. Can I have…? também serve para pedidos. Acrescente please.",
  "example": "I would like some water, please.",
  "phrases": [
   {
    "en": "A table for two, please.",
    "pt": "Uma mesa para dois, por favor.",
    "answers": [
     "A table for 2, please."
    ]
   },
   {
    "en": "Can I see the menu, please?",
    "pt": "Posso ver o cardápio, por favor?",
    "answers": []
   },
   {
    "en": "I would like some water.",
    "pt": "Gostaria de um pouco de água.",
    "answers": []
   },
   {
    "en": "Can I have the bill, please?",
    "pt": "Pode trazer a conta, por favor?",
    "answers": []
   }
  ],
  "words": [
   {
    "en": "water",
    "pt": "água"
   },
   {
    "en": "menu",
    "pt": "cardápio"
   },
   {
    "en": "bill",
    "pt": "conta do restaurante"
   },
   {
    "en": "table",
    "pt": "mesa"
   }
  ],
  "id": "8",
  "unitTitle": "Pela cidade",
  "tasks": [
   {
    "type": "choice",
    "title": "Entenda o significado",
    "prompt": "Para pedir a conta, você diz…",
    "options": [
     "Can I have the bill, please?",
     "Where is the kitchen?",
     "What time is lunch?"
    ],
    "answer": "Can I have the bill, please?",
    "explain": "Leia a explicação e compare o sentido de cada opção."
   },
   {
    "type": "cloze",
    "title": "Complete a frase",
    "prompt": "I would ___ some water.",
    "options": [
     "like",
     "wanting",
     "likes"
    ],
    "answer": "like",
    "explain": "I would like… é uma forma educada de pedir. Can I have…? também serve para pedidos. Acrescente please."
   },
   {
    "type": "order",
    "title": "Monte a frase",
    "prompt": "Posso ver o cardápio, por favor?",
    "target": "Can I see the menu, please?",
    "explain": "Observe a ordem das palavras na frase-modelo."
   },
   {
    "type": "write",
    "title": "Passe para o inglês",
    "prompt": "Gostaria de um pouco de água.",
    "answers": [
     "I would like some water."
    ],
    "explain": "I would like… é uma forma educada de pedir. Can I have…? também serve para pedidos. Acrescente please."
   },
   {
    "type": "listen-choice",
    "title": "Ouça e escolha o significado",
    "audio": "A table for two, please.",
    "options": [
     "Uma mesa para dois, por favor.",
     "Gostaria de um pouco de água.",
     "Pode trazer a conta, por favor?"
    ],
    "answer": "Uma mesa para dois, por favor.",
    "explain": "A table for two, please. = Uma mesa para dois, por favor."
   },
   {
    "type": "dictation",
    "title": "Ditado em inglês",
    "prompt": "Ouça a frase e escreva o que entendeu.",
    "audio": "Can I have the bill, please?",
    "answers": [
     "Can I have the bill, please?"
    ],
    "explain": "Pode trazer a conta, por favor?"
   },
   {
    "type": "choice",
    "title": "Use em uma situação",
    "prompt": "Qual pedido é educado e natural?",
    "options": [
     "I would like some tea, please.",
     "I would likes tea.",
     "I am tea, please."
    ],
    "answer": "I would like some tea, please.",
    "explain": "I would like… é uma forma educada de pedir. Can I have…? também serve para pedidos. Acrescente please."
   },
   {
    "type": "write",
    "title": "Lembre sem olhar",
    "prompt": "Uma mesa para dois, por favor.",
    "answers": [
     "A table for two, please.",
     "A table for 2, please."
    ],
    "explain": "Volte ao quadro de frases se precisar. Repetir faz parte do estudo."
   }
  ]
 },
 {
  "unit": 2,
  "title": "Fazer compras",
  "goal": "Perguntar preço e forma de pagamento.",
  "rule": "How much…? para preço. Do you have…? para disponibilidade. By card = com cartão; in cash = em dinheiro.",
  "example": "How much does this cost?",
  "phrases": [
   {
    "en": "How much does this cost?",
    "pt": "Quanto custa isto?",
    "answers": []
   },
   {
    "en": "Do you have lactose-free milk?",
    "pt": "Vocês têm leite sem lactose?",
    "answers": []
   },
   {
    "en": "Can I pay by card?",
    "pt": "Posso pagar com cartão?",
    "answers": []
   },
   {
    "en": "I need a bag, please.",
    "pt": "Preciso de uma sacola, por favor.",
    "answers": []
   }
  ],
  "words": [
   {
    "en": "price",
    "pt": "preço"
   },
   {
    "en": "milk",
    "pt": "leite"
   },
   {
    "en": "bag",
    "pt": "sacola / saco"
   },
   {
    "en": "cash",
    "pt": "dinheiro em espécie"
   }
  ],
  "id": "9",
  "unitTitle": "Pela cidade",
  "tasks": [
   {
    "type": "choice",
    "title": "Entenda o significado",
    "prompt": "“Can I pay by card?” pergunta…",
    "options": [
     "se pode pagar com cartão.",
     "se pode levar uma sacola.",
     "quanto custa o produto."
    ],
    "answer": "se pode pagar com cartão.",
    "explain": "Leia a explicação e compare o sentido de cada opção."
   },
   {
    "type": "cloze",
    "title": "Complete a frase",
    "prompt": "Can I pay ___ card?",
    "options": [
     "by",
     "on",
     "at"
    ],
    "answer": "by",
    "explain": "How much…? para preço. Do you have…? para disponibilidade. By card = com cartão; in cash = em dinheiro."
   },
   {
    "type": "order",
    "title": "Monte a frase",
    "prompt": "Vocês têm leite sem lactose?",
    "target": "Do you have lactose-free milk?",
    "explain": "Observe a ordem das palavras na frase-modelo."
   },
   {
    "type": "write",
    "title": "Passe para o inglês",
    "prompt": "Posso pagar com cartão?",
    "answers": [
     "Can I pay by card?"
    ],
    "explain": "How much…? para preço. Do you have…? para disponibilidade. By card = com cartão; in cash = em dinheiro."
   },
   {
    "type": "listen-choice",
    "title": "Ouça e escolha o significado",
    "audio": "How much does this cost?",
    "options": [
     "Quanto custa isto?",
     "Posso pagar com cartão?",
     "Preciso de uma sacola, por favor."
    ],
    "answer": "Quanto custa isto?",
    "explain": "How much does this cost? = Quanto custa isto?"
   },
   {
    "type": "dictation",
    "title": "Ditado em inglês",
    "prompt": "Ouça a frase e escreva o que entendeu.",
    "audio": "I need a bag, please.",
    "answers": [
     "I need a bag, please."
    ],
    "explain": "Preciso de uma sacola, por favor."
   },
   {
    "type": "choice",
    "title": "Use em uma situação",
    "prompt": "Você procura leite sem lactose. Pergunte…",
    "options": [
     "Do you have lactose-free milk?",
     "How old is the milk?",
     "Where do you live?"
    ],
    "answer": "Do you have lactose-free milk?",
    "explain": "How much…? para preço. Do you have…? para disponibilidade. By card = com cartão; in cash = em dinheiro."
   },
   {
    "type": "write",
    "title": "Lembre sem olhar",
    "prompt": "Quanto custa isto?",
    "answers": [
     "How much does this cost?"
    ],
    "explain": "Volte ao quadro de frases se precisar. Repetir faz parte do estudo."
   }
  ]
 },
 {
  "unit": 2,
  "title": "Pedir direções",
  "goal": "Localizar lugares e entender orientações.",
  "rule": "Where is…? pergunta localização. Turn left/right = vire à esquerda/direita. Go straight = siga em frente.",
  "example": "The station is next to the bank.",
  "phrases": [
   {
    "en": "Where is the train station?",
    "pt": "Onde fica a estação de trem?",
    "answers": []
   },
   {
    "en": "Turn left at the bank.",
    "pt": "Vire à esquerda no banco.",
    "answers": []
   },
   {
    "en": "Go straight ahead.",
    "pt": "Siga em frente.",
    "answers": [
     "Go straight."
    ]
   },
   {
    "en": "Is it far from here?",
    "pt": "É longe daqui?",
    "answers": []
   }
  ],
  "words": [
   {
    "en": "left",
    "pt": "esquerda"
   },
   {
    "en": "right",
    "pt": "direita"
   },
   {
    "en": "straight ahead",
    "pt": "em frente"
   },
   {
    "en": "station",
    "pt": "estação"
   }
  ],
  "id": "10",
  "unitTitle": "Pela cidade",
  "tasks": [
   {
    "type": "choice",
    "title": "Entenda o significado",
    "prompt": "“Turn left” significa…",
    "options": [
     "vire à esquerda.",
     "vire à direita.",
     "volte amanhã."
    ],
    "answer": "vire à esquerda.",
    "explain": "Leia a explicação e compare o sentido de cada opção."
   },
   {
    "type": "cloze",
    "title": "Complete a frase",
    "prompt": "Turn ___ at the bank.",
    "options": [
     "left",
     "leave",
     "late"
    ],
    "answer": "left",
    "explain": "Where is…? pergunta localização. Turn left/right = vire à esquerda/direita. Go straight = siga em frente."
   },
   {
    "type": "order",
    "title": "Monte a frase",
    "prompt": "Vire à esquerda no banco.",
    "target": "Turn left at the bank.",
    "explain": "Observe a ordem das palavras na frase-modelo."
   },
   {
    "type": "write",
    "title": "Passe para o inglês",
    "prompt": "Siga em frente.",
    "answers": [
     "Go straight ahead.",
     "Go straight."
    ],
    "explain": "Where is…? pergunta localização. Turn left/right = vire à esquerda/direita. Go straight = siga em frente."
   },
   {
    "type": "listen-choice",
    "title": "Ouça e escolha o significado",
    "audio": "Where is the train station?",
    "options": [
     "Onde fica a estação de trem?",
     "Siga em frente.",
     "É longe daqui?"
    ],
    "answer": "Onde fica a estação de trem?",
    "explain": "Where is the train station? = Onde fica a estação de trem?"
   },
   {
    "type": "dictation",
    "title": "Ditado em inglês",
    "prompt": "Ouça a frase e escreva o que entendeu.",
    "audio": "Is it far from here?",
    "answers": [
     "Is it far from here?"
    ],
    "explain": "É longe daqui?"
   },
   {
    "type": "choice",
    "title": "Use em uma situação",
    "prompt": "Para perguntar se é longe, diga…",
    "options": [
     "Is it far from here?",
     "Is it very old?",
     "Does it cost much?"
    ],
    "answer": "Is it far from here?",
    "explain": "Where is…? pergunta localização. Turn left/right = vire à esquerda/direita. Go straight = siga em frente."
   },
   {
    "type": "write",
    "title": "Lembre sem olhar",
    "prompt": "Onde fica a estação de trem?",
    "answers": [
     "Where is the train station?"
    ],
    "explain": "Volte ao quadro de frases se precisar. Repetir faz parte do estudo."
   }
  ]
 },
 {
  "unit": 2,
  "title": "Pedir ajuda",
  "goal": "Pedir repetição e falar sobre dificuldades.",
  "rule": "Could you…? faz um pedido educado. Speak more slowly = fale mais devagar. Again = novamente.",
  "example": "Could you repeat that, please?",
  "phrases": [
   {
    "en": "Could you help me, please?",
    "pt": "Poderia me ajudar, por favor?",
    "answers": []
   },
   {
    "en": "Could you repeat that, please?",
    "pt": "Poderia repetir isso, por favor?",
    "answers": []
   },
   {
    "en": "Please speak more slowly.",
    "pt": "Por favor, fale mais devagar.",
    "answers": []
   },
   {
    "en": "What does this word mean?",
    "pt": "O que esta palavra significa?",
    "answers": []
   }
  ],
  "words": [
   {
    "en": "help",
    "pt": "ajudar / ajuda"
   },
   {
    "en": "repeat",
    "pt": "repetir"
   },
   {
    "en": "slowly",
    "pt": "devagar"
   },
   {
    "en": "word",
    "pt": "palavra"
   }
  ],
  "id": "11",
  "unitTitle": "Pela cidade",
  "tasks": [
   {
    "type": "choice",
    "title": "Entenda o significado",
    "prompt": "“Please speak more slowly” pede…",
    "options": [
     "que a pessoa fale mais devagar.",
     "que a pessoa fale mais alto.",
     "que a pessoa vá embora."
    ],
    "answer": "que a pessoa fale mais devagar.",
    "explain": "Leia a explicação e compare o sentido de cada opção."
   },
   {
    "type": "cloze",
    "title": "Complete a frase",
    "prompt": "Could you ___ that, please?",
    "options": [
     "repeat",
     "repeats",
     "repeating"
    ],
    "answer": "repeat",
    "explain": "Could you…? faz um pedido educado. Speak more slowly = fale mais devagar. Again = novamente."
   },
   {
    "type": "order",
    "title": "Monte a frase",
    "prompt": "Poderia repetir isso, por favor?",
    "target": "Could you repeat that, please?",
    "explain": "Observe a ordem das palavras na frase-modelo."
   },
   {
    "type": "write",
    "title": "Passe para o inglês",
    "prompt": "Por favor, fale mais devagar.",
    "answers": [
     "Please speak more slowly."
    ],
    "explain": "Could you…? faz um pedido educado. Speak more slowly = fale mais devagar. Again = novamente."
   },
   {
    "type": "listen-choice",
    "title": "Ouça e escolha o significado",
    "audio": "Could you help me, please?",
    "options": [
     "Poderia me ajudar, por favor?",
     "Por favor, fale mais devagar.",
     "O que esta palavra significa?"
    ],
    "answer": "Poderia me ajudar, por favor?",
    "explain": "Could you help me, please? = Poderia me ajudar, por favor?"
   },
   {
    "type": "dictation",
    "title": "Ditado em inglês",
    "prompt": "Ouça a frase e escreva o que entendeu.",
    "audio": "What does this word mean?",
    "answers": [
     "What does this word mean?"
    ],
    "explain": "O que esta palavra significa?"
   },
   {
    "type": "choice",
    "title": "Use em uma situação",
    "prompt": "Você não sabe uma palavra. Pergunte…",
    "options": [
     "What does this word mean?",
     "Where does this word live?",
     "How old is this word?"
    ],
    "answer": "What does this word mean?",
    "explain": "Could you…? faz um pedido educado. Speak more slowly = fale mais devagar. Again = novamente."
   },
   {
    "type": "write",
    "title": "Lembre sem olhar",
    "prompt": "Poderia me ajudar, por favor?",
    "answers": [
     "Could you help me, please?"
    ],
    "explain": "Volte ao quadro de frases se precisar. Repetir faz parte do estudo."
   }
  ]
 },
 {
  "unit": 3,
  "title": "No aeroporto",
  "goal": "Entender perguntas e localizar o embarque.",
  "rule": "Have indica algo que você tem. Para perguntar horário de saída, use What time does… leave?",
  "example": "What time does the flight leave?",
  "phrases": [
   {
    "en": "Here is my passport.",
    "pt": "Aqui está meu passaporte.",
    "answers": []
   },
   {
    "en": "Where is gate twelve?",
    "pt": "Onde fica o portão doze?",
    "answers": [
     "Where is gate 12?"
    ]
   },
   {
    "en": "I have one suitcase.",
    "pt": "Tenho uma mala.",
    "answers": [
     "I have 1 suitcase."
    ]
   },
   {
    "en": "What time does the flight leave?",
    "pt": "A que horas o voo sai?",
    "answers": []
   }
  ],
  "words": [
   {
    "en": "passport",
    "pt": "passaporte"
   },
   {
    "en": "gate",
    "pt": "portão de embarque"
   },
   {
    "en": "suitcase",
    "pt": "mala"
   },
   {
    "en": "flight",
    "pt": "voo"
   }
  ],
  "id": "12",
  "unitTitle": "Viajar com confiança",
  "tasks": [
   {
    "type": "choice",
    "title": "Entenda o significado",
    "prompt": "“Where is gate twelve?” pede…",
    "options": [
     "a localização do portão doze.",
     "o preço da passagem.",
     "a hora do voo."
    ],
    "answer": "a localização do portão doze.",
    "explain": "Leia a explicação e compare o sentido de cada opção."
   },
   {
    "type": "cloze",
    "title": "Complete a frase",
    "prompt": "Here ___ my passport.",
    "options": [
     "is",
     "are",
     "am"
    ],
    "answer": "is",
    "explain": "Have indica algo que você tem. Para perguntar horário de saída, use What time does… leave?"
   },
   {
    "type": "order",
    "title": "Monte a frase",
    "prompt": "Onde fica o portão doze?",
    "target": "Where is gate twelve?",
    "explain": "Observe a ordem das palavras na frase-modelo."
   },
   {
    "type": "write",
    "title": "Passe para o inglês",
    "prompt": "Tenho uma mala.",
    "answers": [
     "I have one suitcase.",
     "I have 1 suitcase."
    ],
    "explain": "Have indica algo que você tem. Para perguntar horário de saída, use What time does… leave?"
   },
   {
    "type": "listen-choice",
    "title": "Ouça e escolha o significado",
    "audio": "Here is my passport.",
    "options": [
     "Aqui está meu passaporte.",
     "Tenho uma mala.",
     "A que horas o voo sai?"
    ],
    "answer": "Aqui está meu passaporte.",
    "explain": "Here is my passport. = Aqui está meu passaporte."
   },
   {
    "type": "dictation",
    "title": "Ditado em inglês",
    "prompt": "Ouça a frase e escreva o que entendeu.",
    "audio": "What time does the flight leave?",
    "answers": [
     "What time does the flight leave?"
    ],
    "explain": "A que horas o voo sai?"
   },
   {
    "type": "choice",
    "title": "Use em uma situação",
    "prompt": "Qual objeto você apresenta na fronteira?",
    "options": [
     "My passport.",
     "My menu.",
     "My towel."
    ],
    "answer": "My passport.",
    "explain": "Have indica algo que você tem. Para perguntar horário de saída, use What time does… leave?"
   },
   {
    "type": "write",
    "title": "Lembre sem olhar",
    "prompt": "Aqui está meu passaporte.",
    "answers": [
     "Here is my passport."
    ],
    "explain": "Volte ao quadro de frases se precisar. Repetir faz parte do estudo."
   }
  ]
 },
 {
  "unit": 3,
  "title": "No hotel",
  "goal": "Fazer check-in e pedir algo no hotel.",
  "rule": "I have a reservation = tenho uma reserva. Could I have another…? pede mais um item.",
  "example": "Could I have another towel?",
  "phrases": [
   {
    "en": "I have a reservation.",
    "pt": "Tenho uma reserva.",
    "answers": []
   },
   {
    "en": "I would like to check in.",
    "pt": "Gostaria de fazer o check-in.",
    "answers": []
   },
   {
    "en": "What time is breakfast?",
    "pt": "A que horas é o café da manhã?",
    "answers": []
   },
   {
    "en": "Could I have another towel?",
    "pt": "Poderia me dar outra toalha?",
    "answers": []
   }
  ],
  "words": [
   {
    "en": "reservation",
    "pt": "reserva"
   },
   {
    "en": "room",
    "pt": "quarto"
   },
   {
    "en": "towel",
    "pt": "toalha"
   },
   {
    "en": "key",
    "pt": "chave"
   }
  ],
  "id": "13",
  "unitTitle": "Viajar com confiança",
  "tasks": [
   {
    "type": "choice",
    "title": "Entenda o significado",
    "prompt": "Para fazer check-in, diga…",
    "options": [
     "I would like to check in.",
     "I would like the menu.",
     "I would like to play."
    ],
    "answer": "I would like to check in.",
    "explain": "Leia a explicação e compare o sentido de cada opção."
   },
   {
    "type": "cloze",
    "title": "Complete a frase",
    "prompt": "I have a ___.",
    "options": [
     "reservation",
     "reserved",
     "reserve"
    ],
    "answer": "reservation",
    "explain": "I have a reservation = tenho uma reserva. Could I have another…? pede mais um item."
   },
   {
    "type": "order",
    "title": "Monte a frase",
    "prompt": "Gostaria de fazer o check-in.",
    "target": "I would like to check in.",
    "explain": "Observe a ordem das palavras na frase-modelo."
   },
   {
    "type": "write",
    "title": "Passe para o inglês",
    "prompt": "A que horas é o café da manhã?",
    "answers": [
     "What time is breakfast?"
    ],
    "explain": "I have a reservation = tenho uma reserva. Could I have another…? pede mais um item."
   },
   {
    "type": "listen-choice",
    "title": "Ouça e escolha o significado",
    "audio": "I have a reservation.",
    "options": [
     "Tenho uma reserva.",
     "A que horas é o café da manhã?",
     "Poderia me dar outra toalha?"
    ],
    "answer": "Tenho uma reserva.",
    "explain": "I have a reservation. = Tenho uma reserva."
   },
   {
    "type": "dictation",
    "title": "Ditado em inglês",
    "prompt": "Ouça a frase e escreva o que entendeu.",
    "audio": "Could I have another towel?",
    "answers": [
     "Could I have another towel?"
    ],
    "explain": "Poderia me dar outra toalha?"
   },
   {
    "type": "choice",
    "title": "Use em uma situação",
    "prompt": "Você precisa de outra toalha. Diga…",
    "options": [
     "Could I have another towel?",
     "Can I see the bill?",
     "Where is the airport?"
    ],
    "answer": "Could I have another towel?",
    "explain": "I have a reservation = tenho uma reserva. Could I have another…? pede mais um item."
   },
   {
    "type": "write",
    "title": "Lembre sem olhar",
    "prompt": "Tenho uma reserva.",
    "answers": [
     "I have a reservation."
    ],
    "explain": "Volte ao quadro de frases se precisar. Repetir faz parte do estudo."
   }
  ]
 },
 {
  "unit": 3,
  "title": "Saúde e necessidades",
  "goal": "Explicar como se sente e pedir ajuda.",
  "rule": "I have a headache = estou com dor de cabeça. I feel… descreve como você se sente. Use need para precisar.",
  "example": "I need a doctor. = Preciso de um médico.",
  "phrases": [
   {
    "en": "I do not feel well.",
    "pt": "Não me sinto bem.",
    "answers": []
   },
   {
    "en": "I have a headache.",
    "pt": "Estou com dor de cabeça.",
    "answers": []
   },
   {
    "en": "I need a doctor.",
    "pt": "Preciso de um médico.",
    "answers": []
   },
   {
    "en": "Where is the nearest pharmacy?",
    "pt": "Onde fica a farmácia mais próxima?",
    "answers": []
   }
  ],
  "words": [
   {
    "en": "doctor",
    "pt": "médico / médica"
   },
   {
    "en": "headache",
    "pt": "dor de cabeça"
   },
   {
    "en": "pharmacy",
    "pt": "farmácia"
   },
   {
    "en": "well",
    "pt": "bem"
   }
  ],
  "id": "14",
  "unitTitle": "Viajar com confiança",
  "tasks": [
   {
    "type": "choice",
    "title": "Entenda o significado",
    "prompt": "“I do not feel well” informa…",
    "options": [
     "que você não se sente bem.",
     "que você não tem dinheiro.",
     "que você está perdido."
    ],
    "answer": "que você não se sente bem.",
    "explain": "Leia a explicação e compare o sentido de cada opção."
   },
   {
    "type": "cloze",
    "title": "Complete a frase",
    "prompt": "I ___ a headache.",
    "options": [
     "have",
     "am",
     "do"
    ],
    "answer": "have",
    "explain": "I have a headache = estou com dor de cabeça. I feel… descreve como você se sente. Use need para precisar."
   },
   {
    "type": "order",
    "title": "Monte a frase",
    "prompt": "Estou com dor de cabeça.",
    "target": "I have a headache.",
    "explain": "Observe a ordem das palavras na frase-modelo."
   },
   {
    "type": "write",
    "title": "Passe para o inglês",
    "prompt": "Preciso de um médico.",
    "answers": [
     "I need a doctor."
    ],
    "explain": "I have a headache = estou com dor de cabeça. I feel… descreve como você se sente. Use need para precisar."
   },
   {
    "type": "listen-choice",
    "title": "Ouça e escolha o significado",
    "audio": "I do not feel well.",
    "options": [
     "Não me sinto bem.",
     "Preciso de um médico.",
     "Onde fica a farmácia mais próxima?"
    ],
    "answer": "Não me sinto bem.",
    "explain": "I do not feel well. = Não me sinto bem."
   },
   {
    "type": "dictation",
    "title": "Ditado em inglês",
    "prompt": "Ouça a frase e escreva o que entendeu.",
    "audio": "Where is the nearest pharmacy?",
    "answers": [
     "Where is the nearest pharmacy?"
    ],
    "explain": "Onde fica a farmácia mais próxima?"
   },
   {
    "type": "choice",
    "title": "Use em uma situação",
    "prompt": "Para pedir um médico, diga…",
    "options": [
     "I need a doctor.",
     "I like a doctor.",
     "I work as a doctor."
    ],
    "answer": "I need a doctor.",
    "explain": "I have a headache = estou com dor de cabeça. I feel… descreve como você se sente. Use need para precisar."
   },
   {
    "type": "write",
    "title": "Lembre sem olhar",
    "prompt": "Não me sinto bem.",
    "answers": [
     "I do not feel well."
    ],
    "explain": "Volte ao quadro de frases se precisar. Repetir faz parte do estudo."
   }
  ]
 },
 {
  "unit": 3,
  "title": "Gostos e preferências",
  "goal": "Falar de atividades que você gosta.",
  "rule": "Depois de enjoy, use verbo com -ing. Like aceita -ing ou to + verbo. Prefer pode comparar duas opções com to.",
  "example": "I prefer tea to coffee.",
  "phrases": [
   {
    "en": "I like listening to music.",
    "pt": "Gosto de ouvir música.",
    "answers": [
     "I like to listen to music."
    ]
   },
   {
    "en": "I enjoy reading books.",
    "pt": "Gosto de ler livros.",
    "answers": []
   },
   {
    "en": "I prefer tea to coffee.",
    "pt": "Prefiro chá a café.",
    "answers": []
   },
   {
    "en": "What do you do in your free time?",
    "pt": "O que você faz no tempo livre?",
    "answers": []
   }
  ],
  "words": [
   {
    "en": "enjoy",
    "pt": "gostar de / desfrutar"
   },
   {
    "en": "read",
    "pt": "ler"
   },
   {
    "en": "tea",
    "pt": "chá"
   },
   {
    "en": "free time",
    "pt": "tempo livre"
   }
  ],
  "id": "15",
  "unitTitle": "Viajar com confiança",
  "tasks": [
   {
    "type": "choice",
    "title": "Entenda o significado",
    "prompt": "“Free time” significa…",
    "options": [
     "tempo livre.",
     "tempo de viagem.",
     "tempo ruim."
    ],
    "answer": "tempo livre.",
    "explain": "Leia a explicação e compare o sentido de cada opção."
   },
   {
    "type": "cloze",
    "title": "Complete a frase",
    "prompt": "I enjoy ___ books.",
    "options": [
     "reading",
     "read",
     "reads"
    ],
    "answer": "reading",
    "explain": "Depois de enjoy, use verbo com -ing. Like aceita -ing ou to + verbo. Prefer pode comparar duas opções com to."
   },
   {
    "type": "order",
    "title": "Monte a frase",
    "prompt": "Gosto de ler livros.",
    "target": "I enjoy reading books.",
    "explain": "Observe a ordem das palavras na frase-modelo."
   },
   {
    "type": "write",
    "title": "Passe para o inglês",
    "prompt": "Prefiro chá a café.",
    "answers": [
     "I prefer tea to coffee."
    ],
    "explain": "Depois de enjoy, use verbo com -ing. Like aceita -ing ou to + verbo. Prefer pode comparar duas opções com to."
   },
   {
    "type": "listen-choice",
    "title": "Ouça e escolha o significado",
    "audio": "I like listening to music.",
    "options": [
     "Gosto de ouvir música.",
     "Prefiro chá a café.",
     "O que você faz no tempo livre?"
    ],
    "answer": "Gosto de ouvir música.",
    "explain": "I like listening to music. = Gosto de ouvir música."
   },
   {
    "type": "dictation",
    "title": "Ditado em inglês",
    "prompt": "Ouça a frase e escreva o que entendeu.",
    "audio": "What do you do in your free time?",
    "answers": [
     "What do you do in your free time?"
    ],
    "explain": "O que você faz no tempo livre?"
   },
   {
    "type": "choice",
    "title": "Use em uma situação",
    "prompt": "Qual frase está correta?",
    "options": [
     "I like listening to music.",
     "I enjoy read books.",
     "I prefer tea than coffee."
    ],
    "answer": "I like listening to music.",
    "explain": "Depois de enjoy, use verbo com -ing. Like aceita -ing ou to + verbo. Prefer pode comparar duas opções com to."
   },
   {
    "type": "write",
    "title": "Lembre sem olhar",
    "prompt": "Gosto de ouvir música.",
    "answers": [
     "I like listening to music.",
     "I like to listen to music."
    ],
    "explain": "Volte ao quadro de frases se precisar. Repetir faz parte do estudo."
   }
  ]
 },
 {
  "unit": 4,
  "title": "Como foi ontem?",
  "goal": "Usar was e were para falar do passado.",
  "rule": "O passado de be é was com I/he/she/it e were com you/we/they. Was not = wasn’t; were not = weren’t.",
  "example": "We were at home yesterday.",
  "phrases": [
   {
    "en": "I was tired yesterday.",
    "pt": "Eu estava cansado ontem.",
    "answers": []
   },
   {
    "en": "We were at home.",
    "pt": "Estávamos em casa.",
    "answers": []
   },
   {
    "en": "Were you at work?",
    "pt": "Você estava no trabalho?",
    "answers": []
   },
   {
    "en": "The lesson was interesting.",
    "pt": "A aula foi interessante.",
    "answers": []
   }
  ],
  "words": [
   {
    "en": "yesterday",
    "pt": "ontem"
   },
   {
    "en": "was",
    "pt": "era / estava / foi"
   },
   {
    "en": "were",
    "pt": "eram / estavam / foram"
   },
   {
    "en": "interesting",
    "pt": "interessante"
   }
  ],
  "id": "16",
  "unitTitle": "Ontem e amanhã",
  "tasks": [
   {
    "type": "choice",
    "title": "Entenda o significado",
    "prompt": "Qual frase está no passado?",
    "options": [
     "I was tired yesterday.",
     "I am tired now.",
     "I will be tired tomorrow."
    ],
    "answer": "I was tired yesterday.",
    "explain": "Leia a explicação e compare o sentido de cada opção."
   },
   {
    "type": "cloze",
    "title": "Complete a frase",
    "prompt": "We ___ at home.",
    "options": [
     "were",
     "was",
     "is"
    ],
    "answer": "were",
    "explain": "O passado de be é was com I/he/she/it e were com you/we/they. Was not = wasn’t; were not = weren’t."
   },
   {
    "type": "order",
    "title": "Monte a frase",
    "prompt": "Estávamos em casa.",
    "target": "We were at home.",
    "explain": "Observe a ordem das palavras na frase-modelo."
   },
   {
    "type": "write",
    "title": "Passe para o inglês",
    "prompt": "Você estava no trabalho?",
    "answers": [
     "Were you at work?"
    ],
    "explain": "O passado de be é was com I/he/she/it e were com you/we/they. Was not = wasn’t; were not = weren’t."
   },
   {
    "type": "listen-choice",
    "title": "Ouça e escolha o significado",
    "audio": "I was tired yesterday.",
    "options": [
     "Eu estava cansado ontem.",
     "Você estava no trabalho?",
     "A aula foi interessante."
    ],
    "answer": "Eu estava cansado ontem.",
    "explain": "I was tired yesterday. = Eu estava cansado ontem."
   },
   {
    "type": "dictation",
    "title": "Ditado em inglês",
    "prompt": "Ouça a frase e escreva o que entendeu.",
    "audio": "The lesson was interesting.",
    "answers": [
     "The lesson was interesting."
    ],
    "explain": "A aula foi interessante."
   },
   {
    "type": "choice",
    "title": "Use em uma situação",
    "prompt": "Qual pergunta está correta?",
    "options": [
     "Were you at work?",
     "Was you at work?",
     "Did you were at work?"
    ],
    "answer": "Were you at work?",
    "explain": "O passado de be é was com I/he/she/it e were com you/we/they. Was not = wasn’t; were not = weren’t."
   },
   {
    "type": "write",
    "title": "Lembre sem olhar",
    "prompt": "Eu estava cansado ontem.",
    "answers": [
     "I was tired yesterday."
    ],
    "explain": "Volte ao quadro de frases se precisar. Repetir faz parte do estudo."
   }
  ]
 },
 {
  "unit": 4,
  "title": "O que você fez?",
  "goal": "Contar ações do passado.",
  "rule": "Verbos regulares recebem -ed, com ajustes: study → studied. Alguns são irregulares: go → went; have → had.",
  "example": "I went to the supermarket yesterday.",
  "phrases": [
   {
    "en": "I studied English yesterday.",
    "pt": "Estudei inglês ontem.",
    "answers": []
   },
   {
    "en": "I played the piano at home.",
    "pt": "Toquei piano em casa.",
    "answers": []
   },
   {
    "en": "I went to the supermarket.",
    "pt": "Fui ao supermercado.",
    "answers": []
   },
   {
    "en": "I had dinner with my family.",
    "pt": "Jantei com minha família.",
    "answers": []
   }
  ],
  "words": [
   {
    "en": "went",
    "pt": "foi / fui / foram"
   },
   {
    "en": "had",
    "pt": "teve / tive / tiveram"
   },
   {
    "en": "dinner",
    "pt": "jantar"
   },
   {
    "en": "studied",
    "pt": "estudou / estudei"
   }
  ],
  "id": "17",
  "unitTitle": "Ontem e amanhã",
  "tasks": [
   {
    "type": "choice",
    "title": "Entenda o significado",
    "prompt": "“I went to the supermarket” significa…",
    "options": [
     "Fui ao supermercado.",
     "Vou ao supermercado amanhã.",
     "Trabalho no supermercado."
    ],
    "answer": "Fui ao supermercado.",
    "explain": "Leia a explicação e compare o sentido de cada opção."
   },
   {
    "type": "cloze",
    "title": "Complete a frase",
    "prompt": "Yesterday, I ___ English.",
    "options": [
     "studied",
     "study",
     "studying"
    ],
    "answer": "studied",
    "explain": "Verbos regulares recebem -ed, com ajustes: study → studied. Alguns são irregulares: go → went; have → had."
   },
   {
    "type": "order",
    "title": "Monte a frase",
    "prompt": "Toquei piano em casa.",
    "target": "I played the piano at home.",
    "explain": "Observe a ordem das palavras na frase-modelo."
   },
   {
    "type": "write",
    "title": "Passe para o inglês",
    "prompt": "Fui ao supermercado.",
    "answers": [
     "I went to the supermarket."
    ],
    "explain": "Verbos regulares recebem -ed, com ajustes: study → studied. Alguns são irregulares: go → went; have → had."
   },
   {
    "type": "listen-choice",
    "title": "Ouça e escolha o significado",
    "audio": "I studied English yesterday.",
    "options": [
     "Estudei inglês ontem.",
     "Fui ao supermercado.",
     "Jantei com minha família."
    ],
    "answer": "Estudei inglês ontem.",
    "explain": "I studied English yesterday. = Estudei inglês ontem."
   },
   {
    "type": "dictation",
    "title": "Ditado em inglês",
    "prompt": "Ouça a frase e escreva o que entendeu.",
    "audio": "I had dinner with my family.",
    "answers": [
     "I had dinner with my family."
    ],
    "explain": "Jantei com minha família."
   },
   {
    "type": "choice",
    "title": "Use em uma situação",
    "prompt": "Qual é o passado de go?",
    "options": [
     "went",
     "goed",
     "goes"
    ],
    "answer": "went",
    "explain": "Verbos regulares recebem -ed, com ajustes: study → studied. Alguns são irregulares: go → went; have → had."
   },
   {
    "type": "write",
    "title": "Lembre sem olhar",
    "prompt": "Estudei inglês ontem.",
    "answers": [
     "I studied English yesterday."
    ],
    "explain": "Volte ao quadro de frases se precisar. Repetir faz parte do estudo."
   }
  ]
 },
 {
  "unit": 4,
  "title": "Planos para amanhã",
  "goal": "Usar going to para intenções e planos.",
  "rule": "Use am/is/are + going to + verbo: I am going to study. Não use o verbo com -ing depois de going to.",
  "example": "We are going to travel next month.",
  "phrases": [
   {
    "en": "I am going to study tomorrow.",
    "pt": "Vou estudar amanhã.",
    "answers": []
   },
   {
    "en": "We are going to travel next month.",
    "pt": "Vamos viajar no mês que vem.",
    "answers": []
   },
   {
    "en": "Are you going to practice today?",
    "pt": "Você vai praticar hoje?",
    "answers": []
   },
   {
    "en": "She is going to call me.",
    "pt": "Ela vai me ligar.",
    "answers": []
   }
  ],
  "words": [
   {
    "en": "tomorrow",
    "pt": "amanhã"
   },
   {
    "en": "next month",
    "pt": "no mês que vem"
   },
   {
    "en": "travel",
    "pt": "viajar"
   },
   {
    "en": "call",
    "pt": "ligar / chamar"
   }
  ],
  "id": "18",
  "unitTitle": "Ontem e amanhã",
  "tasks": [
   {
    "type": "choice",
    "title": "Entenda o significado",
    "prompt": "“Next month” significa…",
    "options": [
     "no mês que vem.",
     "no mês passado.",
     "na próxima segunda-feira."
    ],
    "answer": "no mês que vem.",
    "explain": "Leia a explicação e compare o sentido de cada opção."
   },
   {
    "type": "cloze",
    "title": "Complete a frase",
    "prompt": "She ___ going to call me.",
    "options": [
     "is",
     "are",
     "am"
    ],
    "answer": "is",
    "explain": "Use am/is/are + going to + verbo: I am going to study. Não use o verbo com -ing depois de going to."
   },
   {
    "type": "order",
    "title": "Monte a frase",
    "prompt": "Vamos viajar no mês que vem.",
    "target": "We are going to travel next month.",
    "explain": "Observe a ordem das palavras na frase-modelo."
   },
   {
    "type": "write",
    "title": "Passe para o inglês",
    "prompt": "Você vai praticar hoje?",
    "answers": [
     "Are you going to practice today?"
    ],
    "explain": "Use am/is/are + going to + verbo: I am going to study. Não use o verbo com -ing depois de going to."
   },
   {
    "type": "listen-choice",
    "title": "Ouça e escolha o significado",
    "audio": "I am going to study tomorrow.",
    "options": [
     "Vou estudar amanhã.",
     "Você vai praticar hoje?",
     "Ela vai me ligar."
    ],
    "answer": "Vou estudar amanhã.",
    "explain": "I am going to study tomorrow. = Vou estudar amanhã."
   },
   {
    "type": "dictation",
    "title": "Ditado em inglês",
    "prompt": "Ouça a frase e escreva o que entendeu.",
    "audio": "She is going to call me.",
    "answers": [
     "She is going to call me."
    ],
    "explain": "Ela vai me ligar."
   },
   {
    "type": "choice",
    "title": "Use em uma situação",
    "prompt": "Qual frase expressa um plano?",
    "options": [
     "I am going to study tomorrow.",
     "I studied yesterday.",
     "I study every day."
    ],
    "answer": "I am going to study tomorrow.",
    "explain": "Use am/is/are + going to + verbo: I am going to study. Não use o verbo com -ing depois de going to."
   },
   {
    "type": "write",
    "title": "Lembre sem olhar",
    "prompt": "Vou estudar amanhã.",
    "answers": [
     "I am going to study tomorrow."
    ],
    "explain": "Volte ao quadro de frases se precisar. Repetir faz parte do estudo."
   }
  ]
 },
 {
  "unit": 4,
  "title": "Combinar e oferecer",
  "goal": "Fazer convites, ofertas e promessas simples.",
  "rule": "Let’s + verbo propõe algo juntos. Would you like to…? faz um convite. I will… pode indicar promessa ou decisão.",
  "example": "Let’s practice together.",
  "phrases": [
   {
    "en": "Let us practice together.",
    "pt": "Vamos praticar juntos.",
    "answers": [
     "Let’s practice together."
    ]
   },
   {
    "en": "Would you like to join us?",
    "pt": "Gostaria de se juntar a nós?",
    "answers": []
   },
   {
    "en": "I will call you later.",
    "pt": "Vou ligar para você mais tarde.",
    "answers": []
   },
   {
    "en": "Can we meet at six?",
    "pt": "Podemos nos encontrar às seis?",
    "answers": [
     "Can we meet at 6?"
    ]
   }
  ],
  "words": [
   {
    "en": "together",
    "pt": "juntos"
   },
   {
    "en": "join",
    "pt": "juntar-se / participar"
   },
   {
    "en": "later",
    "pt": "mais tarde"
   },
   {
    "en": "meet",
    "pt": "encontrar / conhecer"
   }
  ],
  "id": "19",
  "unitTitle": "Ontem e amanhã",
  "tasks": [
   {
    "type": "choice",
    "title": "Entenda o significado",
    "prompt": "“Would you like to join us?” é…",
    "options": [
     "um convite.",
     "uma cobrança.",
     "uma despedida."
    ],
    "answer": "um convite.",
    "explain": "Leia a explicação e compare o sentido de cada opção."
   },
   {
    "type": "cloze",
    "title": "Complete a frase",
    "prompt": "I ___ call you later.",
    "options": [
     "will",
     "am",
     "do"
    ],
    "answer": "will",
    "explain": "Let’s + verbo propõe algo juntos. Would you like to…? faz um convite. I will… pode indicar promessa ou decisão."
   },
   {
    "type": "order",
    "title": "Monte a frase",
    "prompt": "Gostaria de se juntar a nós?",
    "target": "Would you like to join us?",
    "explain": "Observe a ordem das palavras na frase-modelo."
   },
   {
    "type": "write",
    "title": "Passe para o inglês",
    "prompt": "Vou ligar para você mais tarde.",
    "answers": [
     "I will call you later."
    ],
    "explain": "Let’s + verbo propõe algo juntos. Would you like to…? faz um convite. I will… pode indicar promessa ou decisão."
   },
   {
    "type": "listen-choice",
    "title": "Ouça e escolha o significado",
    "audio": "Let us practice together.",
    "options": [
     "Vamos praticar juntos.",
     "Vou ligar para você mais tarde.",
     "Podemos nos encontrar às seis?"
    ],
    "answer": "Vamos praticar juntos.",
    "explain": "Let us practice together. = Vamos praticar juntos."
   },
   {
    "type": "dictation",
    "title": "Ditado em inglês",
    "prompt": "Ouça a frase e escreva o que entendeu.",
    "audio": "Can we meet at six?",
    "answers": [
     "Can we meet at six?",
     "Can we meet at 6?"
    ],
    "explain": "Podemos nos encontrar às seis?"
   },
   {
    "type": "choice",
    "title": "Use em uma situação",
    "prompt": "Para propor ensaiar juntos, diga…",
    "options": [
     "Let’s practice together.",
     "I practiced alone.",
     "She does not practice."
    ],
    "answer": "Let’s practice together.",
    "explain": "Let’s + verbo propõe algo juntos. Would you like to…? faz um convite. I will… pode indicar promessa ou decisão."
   },
   {
    "type": "write",
    "title": "Lembre sem olhar",
    "prompt": "Vamos praticar juntos.",
    "answers": [
     "Let us practice together.",
     "Let’s practice together."
    ],
    "explain": "Volte ao quadro de frases se precisar. Repetir faz parte do estudo."
   }
  ]
 },
 {
  "unit": 5,
  "title": "Música e ensaio",
  "goal": "Conversar sobre música e praticar em grupo.",
  "rule": "Use play the + instrumento. Para pedir redução de velocidade, use Could we play… more slowly?",
  "example": "I am learning to play the piano.",
  "phrases": [
   {
    "en": "I am learning to play the piano.",
    "pt": "Estou aprendendo a tocar piano.",
    "answers": []
   },
   {
    "en": "What key is this song in?",
    "pt": "Em que tom está esta música?",
    "answers": []
   },
   {
    "en": "Could we play it more slowly?",
    "pt": "Poderíamos tocar mais devagar?",
    "answers": []
   },
   {
    "en": "We practice every week.",
    "pt": "Ensaiamos todas as semanas.",
    "answers": []
   }
  ],
  "words": [
   {
    "en": "piano",
    "pt": "piano"
   },
   {
    "en": "song",
    "pt": "canção / música"
   },
   {
    "en": "key",
    "pt": "tom musical / chave"
   },
   {
    "en": "practice",
    "pt": "praticar / ensaiar"
   }
  ],
  "id": "20",
  "unitTitle": "Conversas que importam",
  "tasks": [
   {
    "type": "choice",
    "title": "Entenda o significado",
    "prompt": "Na música, “key” pode significar…",
    "options": [
     "tom.",
     "volume.",
     "letra."
    ],
    "answer": "tom.",
    "explain": "Leia a explicação e compare o sentido de cada opção."
   },
   {
    "type": "cloze",
    "title": "Complete a frase",
    "prompt": "I play ___ piano.",
    "options": [
     "the",
     "a",
     "an"
    ],
    "answer": "the",
    "explain": "Use play the + instrumento. Para pedir redução de velocidade, use Could we play… more slowly?"
   },
   {
    "type": "order",
    "title": "Monte a frase",
    "prompt": "Em que tom está esta música?",
    "target": "What key is this song in?",
    "explain": "Observe a ordem das palavras na frase-modelo."
   },
   {
    "type": "write",
    "title": "Passe para o inglês",
    "prompt": "Poderíamos tocar mais devagar?",
    "answers": [
     "Could we play it more slowly?"
    ],
    "explain": "Use play the + instrumento. Para pedir redução de velocidade, use Could we play… more slowly?"
   },
   {
    "type": "listen-choice",
    "title": "Ouça e escolha o significado",
    "audio": "I am learning to play the piano.",
    "options": [
     "Estou aprendendo a tocar piano.",
     "Poderíamos tocar mais devagar?",
     "Ensaiamos todas as semanas."
    ],
    "answer": "Estou aprendendo a tocar piano.",
    "explain": "I am learning to play the piano. = Estou aprendendo a tocar piano."
   },
   {
    "type": "dictation",
    "title": "Ditado em inglês",
    "prompt": "Ouça a frase e escreva o que entendeu.",
    "audio": "We practice every week.",
    "answers": [
     "We practice every week."
    ],
    "explain": "Ensaiamos todas as semanas."
   },
   {
    "type": "choice",
    "title": "Use em uma situação",
    "prompt": "Você precisa reduzir o andamento. Peça…",
    "options": [
     "Could we play it more slowly?",
     "What is your name?",
     "How much is the piano?"
    ],
    "answer": "Could we play it more slowly?",
    "explain": "Use play the + instrumento. Para pedir redução de velocidade, use Could we play… more slowly?"
   },
   {
    "type": "write",
    "title": "Lembre sem olhar",
    "prompt": "Estou aprendendo a tocar piano.",
    "answers": [
     "I am learning to play the piano."
    ],
    "explain": "Volte ao quadro de frases se precisar. Repetir faz parte do estudo."
   }
  ]
 },
 {
  "unit": 5,
  "title": "Trabalho e experiência",
  "goal": "Apresentar suas atividades e habilidades.",
  "rule": "Can + verbo expressa capacidade: I can help. Enjoy + -ing expressa algo de que você gosta.",
  "example": "I enjoy working in a team.",
  "phrases": [
   {
    "en": "I work with computers.",
    "pt": "Trabalho com computadores.",
    "answers": []
   },
   {
    "en": "I am learning to program.",
    "pt": "Estou aprendendo a programar.",
    "answers": []
   },
   {
    "en": "I enjoy working in a team.",
    "pt": "Gosto de trabalhar em equipe.",
    "answers": []
   },
   {
    "en": "I can help you.",
    "pt": "Posso ajudar você.",
    "answers": [
     "I can help you"
    ]
   }
  ],
  "words": [
   {
    "en": "computer",
    "pt": "computador"
   },
   {
    "en": "team",
    "pt": "equipe"
   },
   {
    "en": "learn",
    "pt": "aprender"
   },
   {
    "en": "skill",
    "pt": "habilidade"
   }
  ],
  "id": "21",
  "unitTitle": "Conversas que importam",
  "tasks": [
   {
    "type": "choice",
    "title": "Entenda o significado",
    "prompt": "“I can help you” expressa…",
    "options": [
     "capacidade ou disponibilidade para ajudar.",
     "uma obrigação de estudar.",
     "uma ação de ontem."
    ],
    "answer": "capacidade ou disponibilidade para ajudar.",
    "explain": "Leia a explicação e compare o sentido de cada opção."
   },
   {
    "type": "cloze",
    "title": "Complete a frase",
    "prompt": "I can ___ you.",
    "options": [
     "help",
     "helps",
     "helping"
    ],
    "answer": "help",
    "explain": "Can + verbo expressa capacidade: I can help. Enjoy + -ing expressa algo de que você gosta."
   },
   {
    "type": "order",
    "title": "Monte a frase",
    "prompt": "Estou aprendendo a programar.",
    "target": "I am learning to program.",
    "explain": "Observe a ordem das palavras na frase-modelo."
   },
   {
    "type": "write",
    "title": "Passe para o inglês",
    "prompt": "Gosto de trabalhar em equipe.",
    "answers": [
     "I enjoy working in a team."
    ],
    "explain": "Can + verbo expressa capacidade: I can help. Enjoy + -ing expressa algo de que você gosta."
   },
   {
    "type": "listen-choice",
    "title": "Ouça e escolha o significado",
    "audio": "I work with computers.",
    "options": [
     "Trabalho com computadores.",
     "Gosto de trabalhar em equipe.",
     "Posso ajudar você."
    ],
    "answer": "Trabalho com computadores.",
    "explain": "I work with computers. = Trabalho com computadores."
   },
   {
    "type": "dictation",
    "title": "Ditado em inglês",
    "prompt": "Ouça a frase e escreva o que entendeu.",
    "audio": "I can help you.",
    "answers": [
     "I can help you.",
     "I can help you"
    ],
    "explain": "Posso ajudar você."
   },
   {
    "type": "choice",
    "title": "Use em uma situação",
    "prompt": "Qual frase está correta?",
    "options": [
     "I enjoy working in a team.",
     "I enjoy work in a team.",
     "I can helps you."
    ],
    "answer": "I enjoy working in a team.",
    "explain": "Can + verbo expressa capacidade: I can help. Enjoy + -ing expressa algo de que você gosta."
   },
   {
    "type": "write",
    "title": "Lembre sem olhar",
    "prompt": "Trabalho com computadores.",
    "answers": [
     "I work with computers."
    ],
    "explain": "Volte ao quadro de frases se precisar. Repetir faz parte do estudo."
   }
  ]
 },
 {
  "unit": 5,
  "title": "Comparar e escolher",
  "goal": "Comparar opções de forma simples.",
  "rule": "Adjetivos curtos costumam usar -er: cheaper. Adjetivos longos usam more: more expensive. Than liga os itens comparados.",
  "example": "This one is cheaper than that one.",
  "phrases": [
   {
    "en": "This one is cheaper.",
    "pt": "Este é mais barato.",
    "answers": []
   },
   {
    "en": "That hotel is more expensive.",
    "pt": "Aquele hotel é mais caro.",
    "answers": []
   },
   {
    "en": "Which one do you prefer?",
    "pt": "Qual você prefere?",
    "answers": []
   },
   {
    "en": "The train is faster than the bus.",
    "pt": "O trem é mais rápido que o ônibus.",
    "answers": []
   }
  ],
  "words": [
   {
    "en": "cheaper",
    "pt": "mais barato"
   },
   {
    "en": "expensive",
    "pt": "caro"
   },
   {
    "en": "faster",
    "pt": "mais rápido"
   },
   {
    "en": "which",
    "pt": "qual / quais"
   }
  ],
  "id": "22",
  "unitTitle": "Conversas que importam",
  "tasks": [
   {
    "type": "choice",
    "title": "Entenda o significado",
    "prompt": "“Cheaper” significa…",
    "options": [
     "mais barato.",
     "mais longe.",
     "mais rápido."
    ],
    "answer": "mais barato.",
    "explain": "Leia a explicação e compare o sentido de cada opção."
   },
   {
    "type": "cloze",
    "title": "Complete a frase",
    "prompt": "The train is faster ___ the bus.",
    "options": [
     "than",
     "then",
     "that"
    ],
    "answer": "than",
    "explain": "Adjetivos curtos costumam usar -er: cheaper. Adjetivos longos usam more: more expensive. Than liga os itens comparados."
   },
   {
    "type": "order",
    "title": "Monte a frase",
    "prompt": "Aquele hotel é mais caro.",
    "target": "That hotel is more expensive.",
    "explain": "Observe a ordem das palavras na frase-modelo."
   },
   {
    "type": "write",
    "title": "Passe para o inglês",
    "prompt": "Qual você prefere?",
    "answers": [
     "Which one do you prefer?"
    ],
    "explain": "Adjetivos curtos costumam usar -er: cheaper. Adjetivos longos usam more: more expensive. Than liga os itens comparados."
   },
   {
    "type": "listen-choice",
    "title": "Ouça e escolha o significado",
    "audio": "This one is cheaper.",
    "options": [
     "Este é mais barato.",
     "Qual você prefere?",
     "O trem é mais rápido que o ônibus."
    ],
    "answer": "Este é mais barato.",
    "explain": "This one is cheaper. = Este é mais barato."
   },
   {
    "type": "dictation",
    "title": "Ditado em inglês",
    "prompt": "Ouça a frase e escreva o que entendeu.",
    "audio": "The train is faster than the bus.",
    "answers": [
     "The train is faster than the bus."
    ],
    "explain": "O trem é mais rápido que o ônibus."
   },
   {
    "type": "choice",
    "title": "Use em uma situação",
    "prompt": "Qual comparação está correta?",
    "options": [
     "This hotel is more expensive.",
     "This hotel is expensiver.",
     "This hotel is more cheaper."
    ],
    "answer": "This hotel is more expensive.",
    "explain": "Adjetivos curtos costumam usar -er: cheaper. Adjetivos longos usam more: more expensive. Than liga os itens comparados."
   },
   {
    "type": "write",
    "title": "Lembre sem olhar",
    "prompt": "Este é mais barato.",
    "answers": [
     "This one is cheaper."
    ],
    "explain": "Volte ao quadro de frases se precisar. Repetir faz parte do estudo."
   }
  ]
 },
 {
  "unit": 5,
  "title": "Uma conversa completa",
  "goal": "Retomar o essencial e manter uma conversa.",
  "rule": "Una o que aprendeu: apresente-se, pergunte, explique uma dificuldade e combine o próximo encontro. Não é preciso falar rápido.",
  "example": "Could you say that again? = Poderia repetir isso?",
  "phrases": [
   {
    "en": "It is good to see you again.",
    "pt": "É bom ver você novamente.",
    "answers": []
   },
   {
    "en": "How was your day?",
    "pt": "Como foi seu dia?",
    "answers": []
   },
   {
    "en": "Could you say that again?",
    "pt": "Poderia repetir isso?",
    "answers": []
   },
   {
    "en": "See you next week.",
    "pt": "Até a semana que vem.",
    "answers": []
   }
  ],
  "words": [
   {
    "en": "again",
    "pt": "novamente"
   },
   {
    "en": "day",
    "pt": "dia"
   },
   {
    "en": "next week",
    "pt": "na semana que vem"
   },
   {
    "en": "see you",
    "pt": "até logo / vejo você"
   }
  ],
  "id": "23",
  "unitTitle": "Conversas que importam",
  "tasks": [
   {
    "type": "choice",
    "title": "Entenda o significado",
    "prompt": "“How was your day?” pergunta…",
    "options": [
     "como foi seu dia.",
     "qual é seu nome.",
     "o que fará no mês que vem."
    ],
    "answer": "como foi seu dia.",
    "explain": "Leia a explicação e compare o sentido de cada opção."
   },
   {
    "type": "cloze",
    "title": "Complete a frase",
    "prompt": "See you ___ week.",
    "options": [
     "next",
     "last",
     "yesterday"
    ],
    "answer": "next",
    "explain": "Una o que aprendeu: apresente-se, pergunte, explique uma dificuldade e combine o próximo encontro. Não é preciso falar rápido."
   },
   {
    "type": "order",
    "title": "Monte a frase",
    "prompt": "Como foi seu dia?",
    "target": "How was your day?",
    "explain": "Observe a ordem das palavras na frase-modelo."
   },
   {
    "type": "write",
    "title": "Passe para o inglês",
    "prompt": "Poderia repetir isso?",
    "answers": [
     "Could you say that again?"
    ],
    "explain": "Una o que aprendeu: apresente-se, pergunte, explique uma dificuldade e combine o próximo encontro. Não é preciso falar rápido."
   },
   {
    "type": "listen-choice",
    "title": "Ouça e escolha o significado",
    "audio": "It is good to see you again.",
    "options": [
     "É bom ver você novamente.",
     "Poderia repetir isso?",
     "Até a semana que vem."
    ],
    "answer": "É bom ver você novamente.",
    "explain": "It is good to see you again. = É bom ver você novamente."
   },
   {
    "type": "dictation",
    "title": "Ditado em inglês",
    "prompt": "Ouça a frase e escreva o que entendeu.",
    "audio": "See you next week.",
    "answers": [
     "See you next week."
    ],
    "explain": "Até a semana que vem."
   },
   {
    "type": "choice",
    "title": "Use em uma situação",
    "prompt": "Como você pede repetição com educação?",
    "options": [
     "Could you say that again?",
     "You are wrong.",
     "I am finished."
    ],
    "answer": "Could you say that again?",
    "explain": "Una o que aprendeu: apresente-se, pergunte, explique uma dificuldade e combine o próximo encontro. Não é preciso falar rápido."
   },
   {
    "type": "write",
    "title": "Lembre sem olhar",
    "prompt": "É bom ver você novamente.",
    "answers": [
     "It is good to see you again."
    ],
    "explain": "Volte ao quadro de frases se precisar. Repetir faz parte do estudo."
   }
  ]
 }
];

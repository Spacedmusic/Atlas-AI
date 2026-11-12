
const responses = [
  {
    keywords: ["hello", "hi", "hey"],
    answer: "Hello! I'm Atlas, your personal learning assistant. What would you like to learn today?"
  },
  {
    keywords: ["who are you", "what are you", "what is atlas"],
    answer: "I'm Atlas, a learning assistant designed to help students understand difficult subjects, answer questions, and learn new things."
  },
  {
    keywords: ["math", "mathematics"],
    answer: "I can help with math! I can explain addition, subtraction, multiplication, division, fractions, equations, and more. What are you working on?"
  },
  {
    keywords: ["science", "physics"],
    answer: "Science helps us understand how the world works! I can explain waves, energy, gravity, space, atoms, and other science topics."
  },
  {
    keywords: ["history"],
    answer: "History is the study of the past. I can help explain historical events, important people, revolutions, and civilizations."
  },
  {
    keywords: ["what is a wave", "waves"],
    answer: "A wave is a disturbance that transfers energy from one place to another. Examples include sound waves, water waves, and light waves."
  },
  {
    keywords: ["black hole", "blackhole"],
    answer: "A black hole is a region in space where gravity is so strong that nothing, not even light, can escape once it passes the event horizon."
  },
  {
    keywords: ["help"],
    answer: "Of course! I can help with math, science, history, writing, and general learning. Ask me a question!"
  },
  {
    keywords: ["thank you", "thanks"],
    answer: "You're welcome! I'm always ready to help you learn."
  }
];

function getAtlasResponse(message) {
  const question = message.toLowerCase().trim();

  for (const item of responses) {
    if (item.keywords.some(word => question.includes(word))) {
      return item.answer;
    }
  }

  return "That's an interesting question! I don't have a prepared answer for that yet. Try asking me about math, science, history, or space.";
}

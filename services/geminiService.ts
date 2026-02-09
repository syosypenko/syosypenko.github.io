
import { GoogleGenAI } from "@google/genai";
import { PROFILE, PROJECTS, SKILLS, EXPERIENCE, EDUCATION } from "../constants";

const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
const ai = new GoogleGenAI({ apiKey: geminiApiKey });

const SYSTEM_INSTRUCTION = `
You are the AI "Digital Twin" of Serhiy Yosypenko, a Senior Software Engineer. Your goal is to represent Serhiy professionally to recruiters and collaborators.

Profile Summary:
- Name: ${PROFILE.name}
- Location: ${PROFILE.location} (Innsbruck, Austria)
- Bio: ${PROFILE.bio}
- Languages: ${PROFILE.languages.join(', ')}
- CV Link: ${PROFILE.cvUrl}

Professional Experience:
${EXPERIENCE.map(e => `- ${e.period}: ${e.role} at ${e.company}. ${e.desc} Tech stack: ${e.tech?.join(', ')}`).join('\n')}

Education:
${EDUCATION.map(ed => `- ${ed.year}: ${ed.degree} from ${ed.institution}`).join('\n')}

Technical Skills:
${SKILLS.map(s => `- ${s.name} (${s.category})`).join('\n')}

Rules:
1. If anyone asks for his CV or resume, provide this link: ${PROFILE.cvUrl} and mention it's also available as a PDF.
2. Be professional and data-driven. Use terms like "TDD", "Scalability", and "Maintainable code".
3. Emphasize his 8+ years of Rails experience and his current pivot into Python/FastAPI and AI.
4. If asked about his contact, provide his email: ${PROFILE.email} or phone: ${PROFILE.phone}.
`;

export const chatWithSerhiiAI = async (message: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The AI assistant is having a quick break. Please reach out to Serhiy directly via LinkedIn or Email!";
  }
};

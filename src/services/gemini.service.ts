
import { Injectable } from '@angular/core';
import { GoogleGenAI, GenerateContentResponse } from '@google/genai';
import { SYSTEM_INSTRUCTION_ARTICLE, SYSTEM_INSTRUCTION_SEO_SUITE } from '../constants';

@Injectable({ providedIn: 'root' })
export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    const apiKey = (window as any).process?.env?.API_KEY;
    if (!apiKey) {
      console.error('API key is missing.');
      // In a real app, you'd want to handle this more gracefully.
    }
    this.ai = new GoogleGenAI({ apiKey: apiKey });
  }

  async generateArticle(topic: string, params: any): Promise<GenerateContentResponse> {
    const userPrompt = JSON.stringify({ title: topic, ...params });
    return this.ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: { 
        systemInstruction: SYSTEM_INSTRUCTION_ARTICLE, 
        tools: params.use_google_search ? [{ googleSearch: {} }] : [] 
      },
    });
  }

  async generateSeoSuggestions(seedKeyword: string, language: string): Promise<GenerateContentResponse> {
    const suggestionPrompt = `Based on the primary keyword "${seedKeyword}" and the target language "${language}", generate SEO suggestions. Return ONLY a valid, minified JSON object with the following keys: "seo_title" (string, max 60 characters), "focus_keywords" (array of 5-7 strings), "negative_keywords" (array of 3-5 strings), "target_audience" (string, a concise description), "call_to_action" (string, a short and compelling CTA).`;
    return this.ai.models.generateContent({ 
        model: 'gemini-2.5-flash', 
        contents: suggestionPrompt 
    });
  }

  async generateImage(prompt: string): Promise<string | null> {
    try {
      const response = await this.ai.models.generateImages({
        model: 'imagen-3.0-generate-002',
        prompt: prompt,
        config: { numberOfImages: 1, outputMimeType: 'image/jpeg' },
      });
      return response.generatedImages[0].image.imageBytes;
    } catch (e) {
      console.error("AI Image generation failed:", e);
      return null;
    }
  }

  async generateSeoStrategy(topic: string, params: any): Promise<GenerateContentResponse> {
    const competitorsArray = params.competitors.split('\n').filter((url: string) => url.trim() !== '');
    const prompt = JSON.stringify({
      topic,
      ...params,
      competitors: competitorsArray,
    });
    return this.ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: { systemInstruction: SYSTEM_INSTRUCTION_SEO_SUITE },
    });
  }
}

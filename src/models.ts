
export interface ArticleParameters {
  article_language: string;
  creativity_level: string;
  article_length: string;
  tone: string;
  use_google_search: boolean;
  seo_title: string;
  target_audience: string;
  focus_keywords: string;
  negative_keywords: string;
  point_of_view: string;
  structure: string;
  readability_level: string;
  content_depth: string;
  expert_persona: string;
  evidence_and_data: string;
  content_quality: string;
  include_faq: boolean;
  call_to_action: string;
  humanization_level: string;
  article_theme: string;
  content_blueprint?: any;
}

export interface SeoParameters {
  language: string;
  country: string;
  intent: string;
  competitors: string;
  audience_persona: string;
  tone: string;
  business_goal: string;
  humanization_level: string;
}

export interface ArticleResult {
  json: string;
  article: string;
  html: string;
  seoHeadBlock: string;
  sources: any[];
  aiImageBase64: string | null;
}

export interface SeoResult {
  json: string;
  articleResult?: ArticleResult;
}

export interface HistoryItem<T, P> {
  id: number;
  topic: string;
  params: P;
  result: T;
  createdAt: string;
}

export type ArticleHistoryItem = HistoryItem<ArticleResult, ArticleParameters>;
export type SeoHistoryItem = HistoryItem<SeoResult, SeoParameters>;

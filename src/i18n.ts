
export interface I18N {
  dir: 'ltr' | 'rtl';
  langCode: 'en' | 'ar';
  appTitle: string;
  generatorTab: string;
  seoSuiteTab: string;
  topicLabel: string;
  topicPlaceholder: string;
  langLabel: string;
  creativityLabel: string;
  creativityTooltip: string;
  lengthLabel: string;
  lengthTooltip: string;
  toneLabel: string;
  toneTooltip: string;
  themeLabel: string;
  themeTooltip: string;
  googleSearchLabel: string;
  googleSearchTooltip: string;
  contentStructureTitle: string;
  povLabel: string;
  povTooltip: string;
  structureLabel: string;
  structureTooltip: string;
  readabilityLabel: string;
  readabilityTooltip: string;
  depthLabel: string;
  depthTooltip: string;
  qualityValueTitle: string;
  personaLabel: string;
  personaTooltip: string;
  evidenceLabel: string;
  evidenceTooltip: string;
  qualityLabel: string;
  qualityTooltip: string;
  humanizationLabel: string;
  humanizationTooltip: string;
  seoTitle: string;
  seoTitleLabel: string;
  seoTitleTooltip: string;
  audienceLabel: string;
  audiencePlaceholder: string;
  audienceTooltip: string;
  focusKeywordsLabel: string;
  focusKeywordsPlaceholder: string;
  focusKeywordsTooltip: string;
  negativeKeywordsLabel: string;
  negativeKeywordsPlaceholder: string;
  negativeKeywordsTooltip: string;
  ctaLabel: string;
  ctaPlaceholder: string;
  ctaTooltip: string;
  faqLabel: string;
  faqTooltip: string;
  generateButton: string;
  generatingButton: string;
  seoAssistantTitle: string;
  seedKeywordLabel: string;
  seedKeywordPlaceholder: string;
  suggestButton: string;
  suggestingButton: string;
  suggestTooltip: string;
  coverImageTitle: string;
  aiGeneratedImage: string;
  stockPhotoSuggestion: string;
  aiImagePrompt: string;
  imageLicenseDisclaimer: string;
  viewImageSource: string;
  imageDescriptionTitle: string;
  keywordsTitle: string;
  generatedArticleTitle: string;
  readabilityScore: string;
  totalWords: string;
  copyText: string;
  copyHtml: string;
  downloadArticle: string;
  downloadAsTxt: string;
  downloadAsHtml: string;
  partTitle: string;
  partMeta: string;
  partConclusion: string;
  partFaq: string;
  sourcesTitle: string;
  seoAnalysisTitle: string;
  seoHeadBlockTitle: string;
  copy: string;
  metaSuggestions: string;
  primary: string;
  keywordSuggestions: string;
  secondary: string;
  lsi: string;
  linkingSuggestions: string;
  anchorText: string;
  suggestedTopic: string;
  jsonOutputTitle: string;
  errorPrefix: string;
  suggestionError: string;
  copySuccess: (type: string) => string;
  seoToolboxTitle: string;
  analyzeAndImprove: string;
  createArticleButton: string;
  createArticleFromPlanTitle: string;
  createArticleFromPlanDesc: string;
  articleFromPlanTitle: string;
  historyTitle: string;
  noHistory: string;
  loadFromHistory: string;
  deleteFromHistory: string;
  confirmDeleteHistory: string;
  seoSuitePageTitle: string;
  newAnalysis: string;
  seoHistory: string;
  seoTopicLabel: string;
  seoTopicPlaceholder: string;
  targetCountryLabel: string;
  searchIntentLabel: string;
  competitorsLabel: string;
  competitorsTooltip: string;
  analyzeButton: string;
  analyzingButton: string;
  seoError: string;
  articleGenerationError: string;
  seoSuggestButton: string;
  seoSuggestingButton: string;
  seoSuggestTooltip: string;
  audiencePersonaLabel: string;
  audiencePersonaPlaceholder: string;
  audiencePersonaTooltip: string;
  businessGoalLabel: string;
  businessGoalTooltip: string;
  downloadStrategy: string;
  downloadAsJson: string;
  strategyTitle: string;
  intentAnalysis: string;
  attackAngle: string;
  warnings: string;
  keywordTitle: string;
  primaryKeyword: string;
  keywordClusters: string;
  longTailKeywords: string;
  peopleAlsoAsk: string;
  serpAnalysisTitle: string;
  strengths: string;
  weaknesses: string;
  gapsToExploit: string;
  contentBlueprintTitle: string;
  suggestedH1: string;
  suggestedUrl: string;
  onPageSeoTitle: string;
  internalLinking: string;
  externalLinking: string;
  imageSeo: string;
  eeatTitle: string;
  options: { [key: string]: { [key: string]: string } };
}

export const i18n: { en: I18N, ar: I18N } = {
  en: {
    dir: 'ltr',
    langCode: 'en',
    appTitle: "AI Content Suite",
    generatorTab: "Article Generator",
    seoSuiteTab: "SEO Suite",
    topicLabel: "Article Topic",
    topicPlaceholder: "e.g., The future of renewable energy",
    langLabel: "Language",
    creativityLabel: "Creativity Level",
    creativityTooltip: "Controls the factual vs. imaginative nature of the content. Low is best for factual topics, while high is for creative writing.",
    lengthLabel: "Article Length",
    lengthTooltip: "Sets a strict word count range for the article. The AI will aim for the higher end of the selected range.",
    toneLabel: "Tone",
    toneTooltip: "Defines the emotional style and attitude of the writing.",
    themeLabel: "Article Theme",
    themeTooltip: "Changes the visual style of the generated article preview below.",
    googleSearchLabel: "Use Google Search for up-to-date info",
    googleSearchTooltip: "When enabled, the AI uses Google Search to find the latest information, ensuring the article is timely and factually accurate. Recommended for current events.",
    contentStructureTitle: "Content & Structure Options",
    povLabel: "Point of View",
    povTooltip: "Sets the narrative perspective of the article (e.g., 'I', 'you', 'they').",
    structureLabel: "Article Structure",
    structureTooltip: "Determines the format of the article, like a standard blog post, a numbered list, or a step-by-step guide.",
    readabilityLabel: "Readability Level",
    readabilityTooltip: "Adjusts vocabulary and sentence complexity to strictly match the target audience's reading level.",
    depthLabel: "Content Depth",
    depthTooltip: "Controls the level of detail and technical complexity in the article.",
    qualityValueTitle: "Content Quality & Value",
    personaLabel: "Expert Persona",
    personaTooltip: "The AI adopts the mindset and writing style of a specific professional, influencing the article's perspective.",
    evidenceLabel: "Evidence & Data",
    evidenceTooltip: "Specifies the requirement for including statistics or citing sources, enhancing credibility.",
    qualityLabel: "Content Quality Level",
    qualityTooltip: "Sets the benchmark for the article's sophistication, from a standard blog post to an in-depth expert analysis.",
    humanizationLabel: "Humanization Level",
    humanizationTooltip: "Higher levels rewrite the content to be more human-like and avoid AI detection patterns. This may slightly alter content or facts.",
    seoTitle: "Advanced SEO Options",
    seoTitleLabel: "SEO Title (Optional)",
    seoTitleTooltip: "Provide a suggestion for the SEO title. The AI will use it as a guide but will strictly adhere to the 60-character limit.",
    audienceLabel: "Target Audience",
    audiencePlaceholder: "e.g., Beginners, experts",
    audienceTooltip: "Describes the intended readers, helping the AI tailor the language and content appropriately.",
    focusKeywordsLabel: "Focus Keywords",
    focusKeywordsPlaceholder: "e.g., AI, machine learning",
    focusKeywordsTooltip: "Comma-separated keywords the AI should prioritize including in the article for SEO purposes.",
    negativeKeywordsLabel: "Negative Keywords",
    negativeKeywordsPlaceholder: "e.g., crypto, blockchain",
    negativeKeywordsTooltip: "Comma-separated keywords the AI should actively avoid using in the article.",
    ctaLabel: "Custom Call-to-Action",
    ctaPlaceholder: "Optional CTA text...",
    ctaTooltip: "If provided, this text will be added as the final paragraph of the article's conclusion.",
    faqLabel: "Include FAQ Section",
    faqTooltip: "If checked, the AI will generate and add a relevant 'Frequently Asked Questions' section to the end of the article.",
    generateButton: "Generate Article",
    generatingButton: "Generating...",
    seoAssistantTitle: "AI SEO Assistant",
    seedKeywordLabel: "Primary Keyword",
    seedKeywordPlaceholder: "Enter one main keyword...",
    suggestButton: "Suggest Fields",
    suggestingButton: "Suggesting...",
    suggestTooltip: "Enter a keyword and click 'Suggest Fields' to let the AI automatically fill in the SEO Title, Focus Keywords, Negative Keywords, Target Audience, and a Custom Call-to-Action.",
    coverImageTitle: "Suggested Cover Images",
    aiGeneratedImage: "AI Generated Image",
    stockPhotoSuggestion: "Stock Photo Suggestion",
    aiImagePrompt: "AI Image Prompt",
    imageLicenseDisclaimer: "Image sourced from {site}. Please verify the license on the source page before use.",
    viewImageSource: "View Image Source",
    imageDescriptionTitle: "Image Description",
    keywordsTitle: "Keywords",
    generatedArticleTitle: "Generated Article",
    readabilityScore: "Readability",
    totalWords: "Total",
    copyText: "Copy Text",
    copyHtml: "Copy HTML",
    downloadArticle: "Download Article",
    downloadAsTxt: "as TXT",
    downloadAsHtml: "as HTML",
    partTitle: "Title",
    partMeta: "Meta Description",
    partConclusion: "Conclusion",
    partFaq: "Frequently Asked Questions",
    sourcesTitle: "Sources Used",
    seoAnalysisTitle: "SEO Analysis",
    seoHeadBlockTitle: "SEO <head> Block",
    copy: "Copy",
    metaSuggestions: "Meta Description Suggestions",
    primary: "Primary",
    keywordSuggestions: "Keyword Suggestions",
    secondary: "Secondary",
    lsi: "LSI",
    linkingSuggestions: "Internal Linking Suggestions",
    anchorText: "Anchor Text (from article)",
    suggestedTopic: "Suggested Link Topic",
    jsonOutputTitle: "JSON Output",
    errorPrefix: "Failed to generate article. Please check the console for details.",
    suggestionError: "Failed to generate suggestions.",
    copySuccess: (type) => `${type} copied to clipboard!`,
    seoToolboxTitle: "SEO Toolbox",
    analyzeAndImprove: "Analyze in SEO Suite",
    createArticleButton: "Create Article",
    createArticleFromPlanTitle: "Generate Article from this Plan",
    createArticleFromPlanDesc: "Use this strategic blueprint to generate a complete, SEO-optimized article. The article will be created here, based on the plan above, not the settings in the Article Generator tab.",
    articleFromPlanTitle: "Generated Article from Plan",
    historyTitle: "Generation History",
    noHistory: "No items generated yet.",
    loadFromHistory: "Load Inputs",
    deleteFromHistory: "Delete",
    confirmDeleteHistory: "Are you sure you want to delete this history item?",
    seoSuitePageTitle: "SEO Content Strategy Suite",
    newAnalysis: "New Analysis",
    seoHistory: "Analysis History",
    seoTopicLabel: "Primary Topic or Keyword",
    seoTopicPlaceholder: "e.g., best coffee makers 2024",
    targetCountryLabel: "Target Country",
    searchIntentLabel: "Primary Search Intent",
    competitorsLabel: "Competitor URLs (Optional)",
    competitorsTooltip: "Enter up to 3 competitor URLs, one per line. This helps the AI analyze the current top-ranking pages.",
    analyzeButton: "Generate SEO Strategy",
    analyzingButton: "Analyzing...",
    seoError: "Failed to generate SEO strategy.",
    articleGenerationError: "Failed to generate the article from the plan.",
    seoSuggestButton: "Suggest Fields",
    seoSuggestingButton: "Suggesting...",
    seoSuggestTooltip: "Enter a topic and let the AI suggest strategic fields like competitors, intent, and audience.",
    audiencePersonaLabel: "Target Audience Persona",
    audiencePersonaPlaceholder: "e.g., DIY homeowners, professional chefs",
    audiencePersonaTooltip: "Describe your ideal reader in detail to help the AI tailor the strategy.",
    businessGoalLabel: "Business Goal",
    businessGoalTooltip: "Select the primary objective for this content to align the strategy with your business needs.",
    downloadStrategy: "Download Strategy",
    downloadAsJson: "as JSON",
    strategyTitle: "Strategic Summary",
    intentAnalysis: "Search Intent Analysis",
    attackAngle: "Winning Angle",
    warnings: "Potential Pitfalls",
    keywordTitle: "Keyword Analysis",
    primaryKeyword: "Primary Keyword",
    keywordClusters: "Keyword Clusters",
    longTailKeywords: "Long-Tail Keywords",
    peopleAlsoAsk: "People Also Ask",
    serpAnalysisTitle: "SERP Competitor Analysis",
    strengths: "Strengths",
    weaknesses: "Weaknesses",
    gapsToExploit: "Content Gaps to Exploit",
    contentBlueprintTitle: "Content Blueprint",
    suggestedH1: "Suggested H1",
    suggestedUrl: "Suggested URL Slug",
    onPageSeoTitle: "On-Page SEO Checklist",
    internalLinking: "Internal Linking",
    externalLinking: "External Linking",
    imageSeo: "Image SEO",
    eeatTitle: "E-E-A-T Enhancement Plan",
    options: {
      creativity: { low: "Low (Factual)", balanced: "Balanced", high: "High (Creative)", very_high: "Very High (Imaginative)" },
      article_length: { very_short: "Very Short (300-500 words)", short: "Short (600-800 words)", medium: "Medium (800-1200 words)", long: "Long (1200-2000 words)", very_long: "Very Long (2000-3000 words)" },
      tone: { Journalistic: "Journalistic", Educational: "Educational", Marketing: "Marketing", Friendly: "Friendly", Professional: "Professional", Casual: "Casual", Humorous: "Humorous", Empathetic: "Empathetic", Persuasive: "Persuasive", Motivational: "Motivational" },
      article_theme: { professional: "Professional", creative: "Creative", minimalist: "Minimalist", modern: "Modern", classic: "Classic", dark_mode: "Dark Mode" },
      point_of_view: { third_person: "Third Person (Standard)", third_person_objective: "Third Person (Objective)", first_person: "First Person (Singular 'I')", first_person_plural: "First Person (Plural 'We')", second_person: "Second Person (Direct Address)" },
      structure: { standard: "Standard", listicle: "Listicle", how_to: "How-To Guide", story_driven: "Story-Driven", problem_solution: "Problem/Solution", compare_contrast: "Compare/Contrast", case_study: "Case Study" },
      readability_level: { elementary: "Elementary (Grades 3-5)", middle_school: "Middle School (Grades 6-8)", high_school: "High School (Grades 9-12)", undergraduate: "Undergraduate (University)", graduate: "Graduate (Post-grad)", expert: "Expert (Doctorate)" },
      content_depth: { overview: "Overview", beginners_guide: "Beginner's Guide", detailed: "Detailed", comprehensive_analysis: "Comprehensive Analysis", expert: "Expert (Technical)" },
      expert_persona: { "Expert Journalist": "Expert Journalist", "Academic Researcher": "Academic Researcher", "Industry Analyst": "Industry Analyst", "Creative Storyteller": "Creative Storyteller", "Technical Writer": "Technical Writer", "Marketing Copywriter": "Marketing Copywriter", "Investigative Journalist": "Investigative Journalist" },
      evidence_and_data: { standard: "Standard (As needed)", data_rich: "Data-Rich (Include stats)", evidence_based: "Evidence-Based (Cite sources)" },
      content_quality: { standard_blog: "Standard Blog", seo_optimized: "SEO Optimized", premium_article: "Premium Article", expert_analysis: "Expert Analysis", thought_leadership: "Thought Leadership" },
      humanization: { subtle: "Subtle", standard: "Standard", strict: "Strict", maximum: "Maximum (Anti-AI Detection)" },
      search_intent: { Informational: "Informational", Navigational: "Navigational", Commercial: "Commercial", Transactional: "Transactional" },
      business_goal: { drive_traffic: "Drive Traffic", generate_leads: "Generate Leads", increase_sales: "Increase Sales", build_brand_awareness: "Build Brand Awareness" },
    }
  },
  ar: {
    dir: 'rtl',
    langCode: 'ar',
    appTitle: "مجموعة المحتوى بالذكاء الاصطناعي",
    generatorTab: "مولد المقالات",
    seoSuiteTab: "مجموعة SEO",
    topicLabel: "موضوع المقال",
    topicPlaceholder: "مثال: مستقبل الطاقة المتجددة",
    langLabel: "اللغة",
    creativityLabel: "مستوى الإبداع",
    creativityTooltip: "يتحكم في طبيعة المحتوى بين الواقعية والخيال.",
    lengthLabel: "طول المقال",
    lengthTooltip: "يحدد نطاقًا صارمًا لعدد كلمات المقال.",
    toneLabel: "نبرة المقال",
    toneTooltip: "تحدد الأسلوب العاطفي والموقف في الكتابة.",
    themeLabel: "مظهر المقال",
    themeTooltip: "يغير النمط المرئي لمعاينة المقال.",
    googleSearchLabel: "استخدام بحث Google لمعلومات محدثة",
    googleSearchTooltip: "عند التمكين، يستخدم الذكاء الاصطناعي بحث Google للعثور على أحدث المعلومات.",
    contentStructureTitle: "خيارات المحتوى والهيكل",
    povLabel: "وجهة النظر",
    povTooltip: "تحدد منظور السرد في المقال (مثال: 'أنا'، 'أنت'، 'هم').",
    structureLabel: "هيكل المقال",
    structureTooltip: "يحدد تنسيق المقال، مثل مقال مدونة قياسي، أو قائمة مرقمة.",
    readabilityLabel: "مستوى القراءة",
    readabilityTooltip: "يضبط المفردات وتعقيد الجمل ليتناسب بدقة مع مستوى قراءة الجمهور.",
    depthLabel: "عمق المحتوى",
    depthTooltip: "يتحكم في مستوى التفاصيل والتعقيد التقني في المقال.",
    qualityValueTitle: "جودة المحتوى وقيمته",
    personaLabel: "الشخصية الخبيرة",
    personaTooltip: "يعتمد الذكاء الاصطناعي عقلية وأسلوب كتابة محترف معين.",
    evidenceLabel: "الأدلة والبيانات",
    evidenceTooltip: "يحدد متطلبات تضمين الإحصائيات أو ذكر المصادر.",
    qualityLabel: "مستوى جودة المحتوى",
    qualityTooltip: "يضع معيارًا لمدى تطور المقال.",
    humanizationLabel: "مستوى الأنسنة",
    humanizationTooltip: "المستويات الأعلى تعيد كتابة المحتوى ليبدو أكثر إنسانية ويتجنب أنماط الكشف عن الذكاء الاصطناعي.",
    seoTitle: "خيارات SEO المتقدمة",
    seoTitleLabel: "عنوان SEO (اختياري)",
    seoTitleTooltip: "قدم اقتراحًا لعنوان SEO. سيلتزم بصرامة بحد الـ 60 حرفًا.",
    audienceLabel: "الجمهور المستهدف",
    audiencePlaceholder: "مثال: مبتدئون، خبراء",
    audienceTooltip: "يصف القراء المستهدفين، مما يساعد على تكييف اللغة والمحتوى.",
    focusKeywordsLabel: "الكلمات الرئيسية المركزة",
    focusKeywordsPlaceholder: "مثال: ذكاء اصطناعي، تعلم الآلة",
    focusKeywordsTooltip: "كلمات رئيسية مفصولة بفواصل يجب إعطاء الأولوية لتضمينها.",
    negativeKeywordsLabel: "الكلمات الرئيسية السلبية",
    negativeKeywordsPlaceholder: "مثال: عملات مشفرة، بلوكتشين",
    negativeKeywordsTooltip: "كلمات رئيسية مفصولة بفواصل يجب تجنب استخدامها.",
    ctaLabel: "دعوة مخصصة لاتخاذ إجراء",
    ctaPlaceholder: "نص CTA اختياري...",
    ctaTooltip: "إذا تم توفيره، سيتم إضافة هذا النص كفقرة أخيرة في الخاتمة.",
    faqLabel: "تضمين قسم الأسئلة الشائعة",
    faqTooltip: "إذا تم تحديده، سيتم إنشاء قسم 'الأسئلة المتداولة'.",
    generateButton: "إنشاء المقال",
    generatingButton: "جاري الإنشاء...",
    seoAssistantTitle: "مساعد SEO بالذكاء الاصطناعي",
    seedKeywordLabel: "الكلمة الرئيسية الأساسية",
    seedKeywordPlaceholder: "أدخل كلمة رئيسية واحدة...",
    suggestButton: "اقتراح الحقول",
    suggestingButton: "يقترح...",
    suggestTooltip: "أدخل كلمة رئيسية للسماح للذكاء الاصطناعي بملء حقول SEO تلقائيًا.",
    coverImageTitle: "صور الغلاف المقترحة",
    aiGeneratedImage: "صورة مولدة بالذكاء الاصطناعي",
    stockPhotoSuggestion: "اقتراح صورة مخزون",
    aiImagePrompt: "موجه صورة الذكاء الاصطناعي",
    imageLicenseDisclaimer: "الصورة من {site}. يرجى التحقق من الترخيص على صفحة المصدر قبل الاستخدام.",
    viewImageSource: "عرض مصدر الصورة",
    imageDescriptionTitle: "وصف الصورة",
    keywordsTitle: "الكلمات المفتاحية",
    generatedArticleTitle: "المقال المُنشأ",
    readabilityScore: "مستوى القراءة",
    totalWords: "الإجمالي",
    copyText: "نسخ النص",
    copyHtml: "نسخ HTML",
    downloadArticle: "تحميل المقال",
    downloadAsTxt: "كملف TXT",
    downloadAsHtml: "كملف HTML",
    partTitle: "العنوان",
    partMeta: "الوصف التعريفي",
    partConclusion: "الخاتمة",
    partFaq: "الأسئلة المتداولة",
    sourcesTitle: "المصادر المستخدمة",
    seoAnalysisTitle: "تحليل SEO",
    seoHeadBlockTitle: "كتلة <head> لـ SEO",
    copy: "نسخ",
    metaSuggestions: "اقتراحات الوصف التعريفي",
    primary: "الأساسي",
    keywordSuggestions: "اقتراحات الكلمات المفتاحية",
    secondary: "الثانوية",
    lsi: "LSI",
    linkingSuggestions: "اقتراحات الروابط الداخلية",
    anchorText: "النص الرابط (من المقال)",
    suggestedTopic: "موضوع الرابط المقترح",
    jsonOutputTitle: "مخرج JSON",
    errorPrefix: "فشل إنشاء المقال. يرجى التحقق من وحدة التحكم.",
    suggestionError: "فشل إنشاء الاقتراحات.",
    copySuccess: (type: string) => `تم نسخ ${type} إلى الحافظة!`,
    seoToolboxTitle: "صندوق أدوات SEO",
    analyzeAndImprove: "تحليل في مجموعة SEO",
    createArticleButton: "إنشاء مقال",
    createArticleFromPlanTitle: "إنشاء مقال من هذه الخطة",
    createArticleFromPlanDesc: "استخدم هذا المخطط الاستراتيجي لإنشاء مقال كامل ومحسن لمحركات البحث. سيتم إنشاء المقال هنا بناءً على الخطة أعلاه، وليس على الإعدادات في علامة تبويب مولد المقالات.",
    articleFromPlanTitle: "المقال الذي تم إنشاؤه من الخطة",
    historyTitle: "سجل الإنشاء",
    noHistory: "لم يتم إنشاء أي عناصر بعد.",
    loadFromHistory: "تحميل المدخلات",
    deleteFromHistory: "حذف",
    confirmDeleteHistory: "هل أنت متأكد من أنك تريد حذف هذا العنصر من السجل؟",
    seoSuitePageTitle: "مجموعة استراتيجية محتوى SEO",
    newAnalysis: "تحليل جديد",
    seoHistory: "سجل التحليلات",
    seoTopicLabel: "الموضوع الرئيسي أو الكلمة المفتاحية",
    seoTopicPlaceholder: "مثال: أفضل ماكينات القهوة 2024",
    targetCountryLabel: "الدولة المستهدفة",
    searchIntentLabel: "نية البحث الأساسية",
    competitorsLabel: "روابط المنافسين (اختياري)",
    competitorsTooltip: "أدخل ما يصل إلى 3 روابط للمنافسين، رابط واحد في كل سطر. هذا يساعد الذكاء الاصطناعي على تحليل الصفحات الأعلى تصنيفًا حاليًا.",
    analyzeButton: "إنشاء استراتيجية SEO",
    analyzingButton: "جاري التحليل...",
    seoError: "فشل في إنشاء استراتيجية SEO.",
    articleGenerationError: "فشل في إنشاء المقال من الخطة.",
    seoSuggestButton: "اقتراح الحقول",
    seoSuggestingButton: "يقترح...",
    seoSuggestTooltip: "أدخل موضوعًا ودع الذكاء الاصطناعي يقترح الحقول الاستراتيجية مثل المنافسين والنية والجمهور.",
    audiencePersonaLabel: "شخصية الجمهور المستهدف",
    audiencePersonaPlaceholder: "مثال: أصحاب المنازل، الطهاة المحترفون",
    audiencePersonaTooltip: "صف قارئك المثالي بالتفصيل لمساعدة الذكاء الاصطناعي على تكييف الاستراتيجية.",
    businessGoalLabel: "الهدف التجاري",
    businessGoalTooltip: "حدد الهدف الأساسي لهذا المحتوى لمواءمة الاستراتيجية مع احتياجات عملك.",
    downloadStrategy: "تحميل الاستراتيجية",
    downloadAsJson: "كملف JSON",
    strategyTitle: "ملخص استراتيجي",
    intentAnalysis: "تحليل نية البحث",
    attackAngle: "الزاوية الرابحة",
    warnings: "المخاطر المحتملة",
    keywordTitle: "تحليل الكلمات المفتاحية",
    primaryKeyword: "الكلمة المفتاحية الأساسية",
    keywordClusters: "مجموعات الكلمات المفتاحية",
    longTailKeywords: "الكلمات المفتاحية الطويلة",
    peopleAlsoAsk: "أسئلة يطرحها الناس أيضًا",
    serpAnalysisTitle: "تحليل المنافسين في صفحة نتائج البحث",
    strengths: "نقاط القوة",
    weaknesses: "نقاط الضعف",
    gapsToExploit: "فجوات المحتوى للاستغلال",
    contentBlueprintTitle: "مخطط المحتوى",
    suggestedH1: "العنوان H1 المقترح",
    suggestedUrl: "رابط URL المقترح",
    onPageSeoTitle: "قائمة تدقيق SEO على الصفحة",
    internalLinking: "الربط الداخلي",
    externalLinking: "الربط الخارجي",
    imageSeo: "SEO للصور",
    eeatTitle: "خطة تحسين E-E-A-T",
    options: {
        creativity: { low: "منخفض (واقعي)", balanced: "متوازن", high: "عالي (إبداعي)", very_high: "عالي جداً (خيالي)" },
        article_length: { very_short: "قصير جداً (300-500 كلمة)", short: "قصير (600-800 كلمة)", medium: "متوسط (800-1200 كلمة)", long: "طويل (1200-2000 كلمة)", very_long: "طويل جداً (2000-3000 كلمة)" },
        tone: { Journalistic: "صحفي", Educational: "تعليمي", Marketing: "تسويقي", Friendly: "ودي", Professional: "احترافي", Casual: "غير رسمي", Humorous: "فكاهي", Empathetic: "متعاطف", Persuasive: "مقنع", Motivational: "تحفيزي" },
        article_theme: { professional: "احترافي", creative: "إبداعي", minimalist: "بسيط", modern: "حديث", classic: "كلاسيكي", dark_mode: "الوضع الداكن" },
        point_of_view: { third_person: "ضمير الغائب (قياسي)", third_person_objective: "ضمير الغائب (موضوعي)", first_person: "ضمير المتكلم (مفرد 'أنا')", first_person_plural: "ضمير المتكلم (جمع 'نحن')", second_person: "ضمير المخاطب (مباشر)" },
        structure: { standard: "قياسي", listicle: "قائمة", how_to: "دليل إرشادي", story_driven: "قصصي", problem_solution: "مشكلة/حل", compare_contrast: "مقارنة/تباين", case_study: "دراسة حالة" },
        readability_level: { elementary: "ابتدائي (صفوف 3-5)", middle_school: "إعدادي (صفوف 6-8)", high_school: "ثانوي (صفوف 9-12)", undergraduate: "جامعي (بكالوريوس)", graduate: "دراسات عليا (ماجستير)", expert: "خبير (دكتوراه)" },
        content_depth: { overview: "نظرة عامة", beginners_guide: "دليل المبتدئين", detailed: "مفصل", comprehensive_analysis: "تحليل شامل", expert: "خبير (تقني)" },
        expert_persona: { "Expert Journalist": "صحفي خبير", "Academic Researcher": "باحث أكاديمي", "Industry Analyst": "محلل صناعي", "Creative Storyteller": "راوي قصص إبداعي", "Technical Writer": "كاتب تقني", "Marketing Copywriter": "كاتب إعلانات تسويقية", "Investigative Journalist": "صحفي استقصائي" },
        evidence_and_data: { standard: "قياسي (حسب الحاجة)", data_rich: "غني بالبيانات (يتضمن إحصائيات)", evidence_based: "مبني على الأدلة (يذكر المصادر)" },
        content_quality: { standard_blog: "مدونة قياسية", seo_optimized: "محسن لـ SEO", premium_article: "مقال متميز", expert_analysis: "تحليل خبير", thought_leadership: "قيادة فكرية" },
        humanization: { subtle: "خفي", standard: "قياسي", strict: "صارم", maximum: "أقصى (ضد كشف الذكاء الاصطناعي)" },
        search_intent: { Informational: "معلوماتي", Navigational: "توجيهي", Commercial: "تجاري", Transactional: "شرائي" },
        business_goal: { drive_traffic: "زيادة الزيارات", generate_leads: "توليد العملاء المحتملين", increase_sales: "زيادة المبيعات", build_brand_awareness: "بناء الوعي بالعلامة التجارية" },
    }
  },
};

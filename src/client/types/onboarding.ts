export type HeaderType = {
  title?: string;
  subtitle?: string;
};

export type PromptType = {
  title: string;
  description?: string;
  steps: string[];
  contextId: string;
};

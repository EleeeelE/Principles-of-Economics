export interface SubTopic {
  id: string;
  title: string;
  query: string; // The prompt query for this specific topic
}

export interface Topic {
  id: string;
  title: string;
  subTopics: SubTopic[];
}

export interface Section {
  id: string;
  title: string;
  description: string;
  image?: string;
  topics: Topic[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum AppState {
  HOME = 'HOME',
  SECTION = 'SECTION',
  TOPIC = 'TOPIC'
}

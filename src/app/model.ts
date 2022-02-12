export interface UserLogin {
  username: string,
  password: string
}

export interface Jwt {
  jwt: string
}

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

export interface TextSimilarity {
  langConfidence: number,
  similarity: number
}

export  interface HistoryRecord {
  date: Date,
  method: string,
  link: string,
}

export interface LanguageDetection {
  detectedLangs: { "lang": string,"confidence": number }[],
}

export interface Entity {
  title: string,
  abstract: string,
  categories: string[],
  image: {
    full: string,
    thumbnail: string,
  }
}

export interface EntityExtraction {
  annotations: Entity []
}

export  interface SentimentAnalysis {
  sentiment: {
    score: number,
    type: string
  }
}

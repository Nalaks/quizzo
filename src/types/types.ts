export type Question = {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}

export interface QuizLayoutProps {
  children: React.ReactNode
}

export enum QuizCategory {
  'Any' = '99',
  'General Knowledge' = '9',
  'Sports' = '21',
  'Books' = '10',
  'Film' = '11',
  'Music' = '12',
  'TV' = '14',
  'Video Games' = '15',
  'History' = '23',
  'Politics' = '24',
  'Art' = '25',
  'Geography' = '22',
}

export enum QuizDifficulty {
  'Any' = 'any',
  'Easy' = 'easy',
  'Medium' = 'medium',
  'Hard' = 'hard',
}

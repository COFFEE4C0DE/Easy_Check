import type { Activity, Class, Exam, Notice, Student } from '../types'

export const student: Student = {
  name: 'Diogo',
  initials: 'DA',
  displayDate: 'Terça-feira, 09 de setembro',
}

export const nextClass: Class = {
  subject: 'Engenharia de Software',
  startTime: '19:00',
  endTime: '20:40',
  room: 'Sala 304',
}

export const activities: Activity[] = [
  {
    id: 'scrum-work',
    type: 'Trabalho',
    title: 'Trabalho — Scrum',
    subject: 'Engenharia de Software',
    date: '12 SET',
    deadline: '3 dias',
    status: 'soon',
  },
  {
    id: 'web-exercises',
    type: 'Lista',
    title: 'Lista de exercícios',
    subject: 'Desenvolvimento Web',
    date: '14 SET',
    deadline: '5 dias',
    status: 'normal',
  },
]

export const exam: Exam = {
  subject: 'Banco de Dados',
  date: '16 SET',
  deadline: '7 dias',
  status: 'normal',
}

export const notice: Notice = {
  title: 'Nova atividade publicada',
  description:
    'O professor adicionou uma nova atividade em Engenharia de Software.',
  time: 'Há 2 horas',
}

export const lastSync = 'Hoje, 12:30'

export const savedContent = [
  { id: 'agenda', title: 'Agenda', count: '5 eventos salvos' },
  { id: 'activities', title: 'Atividades', count: '3 atividades salvas' },
  { id: 'exams', title: 'Provas', count: '2 avaliações salvas' },
  { id: 'notices', title: 'Avisos', count: '4 avisos salvos' },
] as const

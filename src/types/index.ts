export type DeadlineStatus = 'normal' | 'soon' | 'urgent'

export interface Student {
  name: string
  initials: string
  displayDate: string
}

export interface Class {
  subject: string
  startTime: string
  endTime: string
  room: string
}

export interface Activity {
  id: string
  type: 'Trabalho' | 'Lista'
  title: string
  subject: string
  date: string
  deadline: string
  status: DeadlineStatus
}

export interface Exam {
  subject: string
  date: string
  deadline: string
  status: DeadlineStatus
}

export interface Notice {
  title: string
  description: string
  time: string
}

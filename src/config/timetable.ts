export type TimetableEntry = {
  id: string;
  club: string;
  day: string;
  time: string;
  classType: string;
  coach: string;
};

export const timetableEmbedUrl = 'https://member-app.deciplus.pro/formplus/calendar';
export const timetableEmbedWidget = {
  type: 'mindbody' as const,
  widgetId: '5d261782754',
  scriptSrc: 'https://brandedweb.mindbodyonline.com/embed/widget.js'
};

export const timetableEntries: TimetableEntry[] = [
  { id: '1', club: 'FORM+ Vata', day: 'Lundi', time: '06:00', classType: 'HIIT Burn', coach: 'Malia' },
  { id: '2', club: 'FORM+ Vata', day: 'Lundi', time: '18:00', classType: 'Strength Lab', coach: 'Noah' },
  { id: '3', club: 'FORM+ Almatrium', day: 'Mardi', time: '07:00', classType: 'FORM+ Ride', coach: 'Lena' },
  { id: '4', club: 'FORM+ Vata', day: 'Jeudi', time: '19:00', classType: 'Core Sculpt', coach: 'Maya' },
  { id: '5', club: 'FORM+ Almatrium', day: 'Vendredi', time: '12:30', classType: 'Metcon+', coach: 'Leo' }
];

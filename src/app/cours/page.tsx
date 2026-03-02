import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Cours'
};

export default function CoursPage() {
  redirect('/planning');
}

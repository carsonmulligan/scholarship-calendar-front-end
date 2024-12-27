import { CalendarComponent } from './components/calendar'
import { FolderStructure } from './components/folder-structure'
import { NoteEditor } from './components/note-editor'
import { PreparationCycle } from './components/preparation-cycle'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const fellowships = [
  {
    name: '🇬🇧 Rhodes Scholarship',
    description: 'The Rhodes Scholarships are the oldest and most celebrated international fellowship awards in the world.',
    url: 'http://www.rhodesscholar.org/',
    due_date: '01/10/2025',
    value: 1
  },
  {
    name: '🇬🇧 Marshall Scholarship',
    description: 'The Marshall Scholarship funds one or two years of graduate study at a wide range of institutions in the United Kingdom.',
    url: 'http://www.marshallscholarship.org/',
    due_date: '15/09/2025',
    value: 1
  },
  {
    name: '🇬🇧 Gates-Cambridge Scholarship',
    description: 'The Gates Cambridge Scholarship supports one to three years of post-baccalaureate study in any field at the University of Cambridge.',
    url: 'https://www.gatescambridge.org/',
    due_date: '10/10/2025',
    value: 1
  },
  {
    name: '🇬🇧 Churchill Scholarship',
    description: 'The Churchill Scholarship provides around $60,000 for a year of graduate study in engineering, mathematics, or science at Churchill College, Cambridge University.',
    url: 'https://www.churchillscholarship.org/the-scholarship#Apply',
    due_date: '01/11/2025',
    value: 1
  },
];

function getDaysUntilDue(dueDate: string) {
  const [day, month, year] = dueDate.split('/').map(Number);
  const due = new Date(year, month - 1, day);
  const now = new Date();
  const diffTime = due.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Fellowships Calendar</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <CalendarComponent />
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Upcoming Deadlines</h2>
            <div className="space-y-4">
              {fellowships.map((fellowship) => (
                <Card key={fellowship.name}>
                  <CardHeader>
                    <CardTitle>{fellowship.name}</CardTitle>
                    <CardDescription>
                      Due in {getDaysUntilDue(fellowship.due_date)} days
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{fellowship.description}</p>
                    <a href={fellowship.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Learn More
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <div>
          <FolderStructure />
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Note Editor</h2>
            <NoteEditor />
          </div>
          <div className="mt-8">
            <PreparationCycle />
          </div>
        </div>
      </div>
    </div>
  )
}


'use client'

import logoBank from '@/images/logos/bank.svg'
import logoGaming from '@/images/logos/gaming.svg'
import logoBall from '@/images/logos/ball.svg'
import { Button } from '@/components/Button'

import { Role } from '@/components/role-item'

export function ExperienceContainer() {
  let resume: Array<Role> = [
    {
      company: 'Mahalo Technologies Inc',
      title: 'Software Developer',
      logo: logoBank,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'PlayerBoost',
      title: 'Front-End Developer',
      logo: logoGaming,
      start: '2021',
      end: '2022',
    },
    {
      company: 'Fan Interactive',
      title: 'Digital Marketing Analyst',
      logo: logoBall,
      start: '2020',
      end: '2022',
    },
  ]

  return (
    <div className="mt-8 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button.Resume />
    </div>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

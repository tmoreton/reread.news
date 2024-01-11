import Image from 'next/image'
import { useId } from 'react'
import { Container } from '@/components/Container'
import youtube from '@/images/logos/youtube.png'
import facebook from '@/images/logos/facebook.png'
import twitter from '@/images/logos/twitter.png'
import blogger from '@/images/logos/blogger.png'
import newspaper from '@/images/logos/newspaper.png'
import reminder from '@/images/logos/reminder.png'

const features = [
  {
    name: 'Youtube',
    description: '',
    icon: youtube,
  },
  {
    name: 'Facebook',
    description: '',
    icon: facebook,
  },
  {
    name: 'twitter',
    description: '',
    icon: twitter,
  },
  {
    name: 'Blogs',
    description: '',
    icon: blogger,
  },
  {
    name: 'Articles',
    description: '',
    icon: newspaper,
  },
  {
    name: 'Weekly Reminders',
    description: '',
    icon: reminder,
  }
]

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Never forget a link again
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Share links to ai@reread.news from multiple sources
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 p-8"
            >
              <Image
                src={feature.icon}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
              <h3 className="mt-6 font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

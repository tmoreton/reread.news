import Image from 'next/image'
import { Container } from '@/components/Container'
import youtube from '@/images/logos/youtube.png'
import facebook from '@/images/logos/facebook.png'
import twitter from '@/images/logos/twitter.png'
import blogger from '@/images/logos/blogger.png'
import newspaper from '@/images/logos/newspaper.png'
import reminder from '@/images/logos/reminder.png'

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center pb-10">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Never forget a link again
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Share links from multiple sources to get a one easy to read weekly recap right in your email inbox. No more apps or complicated sign ups.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="rounded-2xl border border-gray-200 p-4 text-center flex items-center">
            <Image
              src={youtube}
              alt=""
              className="h-8 w-8"
              unoptimized
            />
            <h3 style={{marginLeft: '5px'}} className="font-semibold text-gray-900">
              Youtube
            </h3>
          </div>
          <div className="rounded-2xl border border-gray-200 p-4 text-center flex items-center">
            <Image
              src={facebook}
              alt=""
              className="h-8 w-8"
              unoptimized
            />
            <h3 style={{marginLeft: '5px'}} className="font-semibold text-gray-900">
              Facebook
            </h3>
          </div>
          <div className="rounded-2xl border border-gray-200 p-4 text-center flex items-center">
            <Image
              src={twitter}
              alt=""
              className="h-8 w-8"
              unoptimized
            />
            <h3 style={{marginLeft: '5px'}} className="font-semibold text-gray-900">
              Twitter
            </h3>
          </div>
          <div className="rounded-2xl border border-gray-200 p-4 text-center flex items-center">
            <Image
              src={blogger}
              alt=""
              className="h-8 w-8"
              unoptimized
            />
            <h3 style={{marginLeft: '5px'}} className="font-semibold text-gray-900">
              Blogs
            </h3>
          </div>
          <div className="rounded-2xl border border-gray-200 p-4 text-center flex items-center">
            <Image
              src={newspaper}
              alt=""
              className="h-8 w-8"
              unoptimized
            />
            <h3 style={{marginLeft: '5px'}} className="font-semibold text-gray-900">
              Articles
            </h3>
          </div>
          <div className="rounded-2xl border border-gray-200 p-4 text-center flex items-center">
            <Image
              src={reminder}
              alt=""
              className="h-8 w-8"
              unoptimized
            />
            <h3 style={{marginLeft: '5px'}} className="font-semibold text-gray-900">
              Weekly Reminders
            </h3>
          </div>
        </div>
      </Container>
    </section>
  )
}

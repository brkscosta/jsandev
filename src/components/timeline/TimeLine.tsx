import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { TimelineMarkerProps } from '@/types/Components'
import { TimelineMarker } from './TimelineMarker'

export const Timeline: FC = () => {
  const { t, i18n } = useTranslation()
  const timelineEvents = t('timeline', {
    returnObjects: true,
  }) as TimelineMarkerProps[]

  return (
    <div className="relative container mx-auto px-4" key={i18n.language}>
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-bmw-blue/20 via-bmw-blue/50 to-bmw-blue/20" />
      <div className="space-y-12">
        {timelineEvents
          .slice()
          .reverse()
          .map((event, index) => (
            <TimelineMarker key={event.title || index} {...event} index={index} />
          ))}
      </div>
    </div>
  )
}

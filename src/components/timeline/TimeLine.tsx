import { TimelineMarkerProps } from '@/types/Components'
import { t } from 'i18next'
import { FC } from 'react'
import { TimelineMarker } from './TimelineMarker'

export const Timeline: FC = () => {
  const timelineEvents = t('timeline', {
    returnObjects: true
  }) as TimelineMarkerProps[]

  return (
    <div className="flex flex-col md:flex-col md:space-x-4">
      {timelineEvents
        .slice()
        .reverse()
        .map((event, index) => (
          <TimelineMarker key={index} {...event} />
        ))}
    </div>
  )
}

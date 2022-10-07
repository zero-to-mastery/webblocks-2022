function getTimelineItem(textContent, isLastItem){
  let timelineItemElement = document.createElement('li');
  timelineItemElement.classList.add('timelineItem')

  let timelineSeparatorElement = document.createElement('div')
  timelineSeparatorElement.classList.add('timelineSeparator')

  let timelineDotElement = document.createElement('div')
  timelineDotElement.classList.add('timelineDot')
  timelineDotElement.classList.add('col')

  let timelineContentElement = document.createElement('div')
  timelineContentElement.classList.add('timelineContent')
  timelineContentElement.textContent = textContent

  timelineSeparatorElement.appendChild(timelineDotElement)
  timelineSeparatorElement.appendChild(timelineContentElement)

  timelineItemElement.appendChild(timelineSeparatorElement)

  if (isLastItem) {
    return timelineItemElement
  }

  let timelineConnectorElement = document.createElement('div')
  timelineConnectorElement.classList.add('timelineConnector')
  timelineConnectorElement.classList.add('col')

  timelineItemElement.appendChild(timelineConnectorElement)

  return timelineItemElement;
}

function createTimeline(){
  const timelineElement = document.createElement('ul')
  timelineElement.classList.add('timeline')

  const steps = ['red', 'green', 'refactor', 'repeat']
  steps.forEach((stepText, idx) => {
    const isLastItem = idx === steps.length - 1
    const timelineItemElement = getTimelineItem(stepText, isLastItem)
    timelineElement.appendChild(timelineItemElement)
  })

  document.body.appendChild(timelineElement)
}

createTimeline();
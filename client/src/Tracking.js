import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

const items = [
    {
      header: 'XPS 13',
      description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
      meta: 'Average Price: $855',
    },
    {
      header: 'Project Report - May',
      description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
      meta: 'Average Price: $100',
    },
    {
      header: 'Project Report - June',
      description: 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
      meta: 'Average Price: $100',
    },
  ]

class Tracking extends Component {
    render() {
        return (
            <Card.Group items={items} />
        )
    }
}

export default Tracking;
import React from 'react';
import { connect } from 'cerebral/react';
import { Table, Button } from 'semantic-ui-react';

require('../../shared_styles/table.css');
require('./index.css');

export default connect((props) => ({
    queue: `queue_errors.list.${props.itemKey}`,
  }),
  {
    taskSelected: 'queue_errors.taskSelected',
    queueRemoveClicked: 'queue_errors.queueRemoveClicked',
  },
  function Item(props) {
    const _removeJob = (ev) => {
      ev.stopPropagation();
      props.queueRemoveClicked({id: props.queue.id});
    };

    return (
      <Table.Row
        className="clickable"
        onClick={() => props.taskSelected({selected_task: props.queue})}
      >
        <Table.Cell>
          {props.queue._error_details.previous_state}
        </Table.Cell>
        <Table.Cell>
          {props.queue._error_details.error}
        </Table.Cell>
        <Table.Cell>
          <Button
            icon="trash"
            content="del"
            size="mini"
            className="delete_button_soft_red"
            onClick={_removeJob}
          />
        </Table.Cell>
      </Table.Row>
    )
  }
)

import * as _ from 'lodash';
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import QueueTasks from './index';
import { error_task_list_stub } from '../stubs/queue';

storiesOf('Queue Errors', module)
  .add('3 queue', () => (
    <QueueTasks
      is_loading={false}
      queues_keys={_.keys(error_task_list_stub)}
      list={error_task_list_stub}
      selected_task_key="task_1"
    />
  ))
  .add('is_loading === true', () => (
    <QueueTasks is_loading={true}/>
  ))
;

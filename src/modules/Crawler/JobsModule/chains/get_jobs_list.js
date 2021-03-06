import { set, state, input } from 'cerebral/operators';
import firebase_get_value from '../../../../shared_actions/firebase/firebase_get_value';

const get_jobs_list = [
  firebase_get_value('jobs'), {
    success: [
      set(state`jobs.list`, input`value`)
    ],
    error: [],
  },
];

export default get_jobs_list;

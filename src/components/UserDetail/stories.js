import React from 'react';
import { storiesOf } from '@kadira/storybook';
import UserDetail from './index';
import { user_stub } from '../stubs/users';

storiesOf('UserDetail', module)
  .add('Julio', () => (
    <UserDetail selected_user={user_stub}/>
  ))
;
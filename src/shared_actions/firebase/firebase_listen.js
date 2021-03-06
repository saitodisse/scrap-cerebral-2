export default function firebase_listen(module_name, firebase_path, childAddedOptions = {
  orderByChild: 'updated_at',
  startAt: (new Date()).getTime(),
}) {
  return function ({ firebase }) {
    const signal_name = firebase_path.replace('.', '_');
    
    firebase.onChildAdded(firebase_path, `${module_name}.${signal_name}_ChildAdded`,
      childAddedOptions
    );
    firebase.onChildRemoved(firebase_path, `${module_name}.${signal_name}_ChildRemoved`, {});
    firebase.onChildChanged(firebase_path, `${module_name}.${signal_name}_ChildChanged`, {});
  }
}

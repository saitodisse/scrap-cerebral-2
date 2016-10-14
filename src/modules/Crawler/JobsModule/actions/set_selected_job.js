function set_selected_job({ input, state }) {
  const job = state.get(`jobs.list.${input.uid}`);
  state.set('jobs.selected_job', job);
}

export default set_selected_job;
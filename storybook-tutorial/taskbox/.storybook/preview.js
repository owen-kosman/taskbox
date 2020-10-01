import '../src/index.css';

// Configured Storybook to lof the actions (onArchiveTask and onPinnedTask) in the UI.
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
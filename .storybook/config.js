const storybook = require("@storybook/react");
const addonKnobs = require("@storybook/addon-knobs");

// register knobs globally
storybook.addDecorator(addonKnobs.withKnobs);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  // try to load files with pattern src/component/**/*.story.tsx
  requireAll(require.context("../src/component", true, /^\.\/.*\.story\.tsx$/));
}

storybook.configure(loadStories, module);

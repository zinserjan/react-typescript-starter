const storybook = require("@storybook/react");
const addonKnobs = require("@storybook/addon-knobs");
const addonA11y = require("storybook-addon-a11y");

// register knobs globally
storybook.addDecorator(addonKnobs.withKnobs);
// register a11y globally
storybook.addDecorator(addonA11y.checkA11y);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  // try to load files with pattern src/component/**/*.story.tsx
  requireAll(require.context("../src/component", true, /^\.\/.*\.story\.tsx$/));
}

storybook.configure(loadStories, module);

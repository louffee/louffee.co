# Louffee Storybook 🔬

We use [Storybook](https://storybook.js.org) to test our components without
starting up any of our real-world applications. That way, we can simulate Next.js
and validate the usability, accessibility, and other aspects of our React
components before they get onto the page with awesome tools developed by the
Storybook community.

## Test Runner

To run tests with the best that Storybook offers, we use their test
runner[^storybook_test_runner] to trigger and overlook integration and component
tests across the codebase based on the stories.

**Producing the results and to see them** is available by running the following
command:

```sh
bun run test
```

As you can see in the [package.json](./package.json) file, this script executes
the `test-storybook`.

[^storybook_test_runner]: <https://storybook.js.org/docs/writing-tests/test-runner>

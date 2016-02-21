# Test project for babel (es6) + webpack + mocha with source mapping and coverage.

So, we start with some source files in src/ that are written using es6.
We want to transpile them down to es5 and bundle them using webpack and execute their tests in the browser using mocha.
We use karma as the runner to orchestrate webpack (babel) and mocha and the browser(s) we will be testing.
src/lib2.js throws a deliberate error so we can see a stacktrace in karma.

However, there are 2 things we want:

* If the code or a test throws an error, we want to see the line number of the original source file.
* we want an istanbul coverage report that allows us to drill down on files in src/ to see which
  lines of code have not been covered

To run the tests:
    npm test
This should start karma.

    npm run webpack
is just a way to test webpack output.


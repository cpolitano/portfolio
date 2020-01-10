const ghpages = require('gh-pages');

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'git@github.com:cpolitano/cpolitano.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
);

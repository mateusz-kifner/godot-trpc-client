import chokidar from 'chokidar';

const watcher = chokidar.watch('src/server/api', {
  ignored: /node_modules/,
  persistent: true,
});

watcher
  .on('change', path => {
    console.log(`File ${path} has been changed. TODO: Implement necessary actions.`);
  })
  .on('error', error => {
    console.error('Error watching files:', error);
  });

console.log('Watching for file changes...');

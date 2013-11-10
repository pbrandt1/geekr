module.exports = {
  compile: {
    files: [{
      expand: true,
      cwd: 'app/sass',
      src: ['**/*.{scss,sass}', '!**/_*.{scss,sass}'],
      dest: 'tmp/result/assets/',
      ext: '.css'
    }]
  }
};

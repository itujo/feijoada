module.exports = {
  apps: [
    {
      name: 'feijoada',
      script: './dist/index.js',
      instances: 'max',
      autorestart: true,
    }
  ]
}
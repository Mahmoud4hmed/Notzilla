// next.config.js
module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*', // Adjust the path pattern as needed
          destination: 'https://127.0.0.1:8000/:path*', // Adjust the destination URL
        },
      ];
    },
  };
  
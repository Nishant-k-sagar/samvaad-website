// Example tailwind.config.ts
module.exports = {
    theme: {
      extend: {
        colors: {
          primary: 'var(--primary-color)',
          secondary: 'var(--secondary-color)',
          'primary-dark': 'var(--primary-dark)',
          'primary-light': 'var(--primary-light)',
          'secondary-light': 'var(--secondary-light)',
        },
        boxShadow: {
          sm: 'var(--shadow-sm)',
          md: 'var(--shadow-md)',
        },
        zIndex: {
          40: 'var(--z-index-sticky)',
        },
        borderRadius: {
            DEFAULT: 'var(--border-radius)',
        },
        transitionDuration: {
            '300': 'var(--transition-normal)',
        }
      },
    },
    // other config
  };
  
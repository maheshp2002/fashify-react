export const search_validation = {
    name: 'search',
    label: 'search',
    type: 'text',
    id: 'search',
    placeholder: 'search ...',
    validation: {
      maxLength: {
        value: 100,
        message: '100 characters max',
      },
      regex: {
        pattern: /^[a-zA-Z0-9\s]+$/,
        message: 'Only alphanumeric characters are allowed',
      },
    },
  }
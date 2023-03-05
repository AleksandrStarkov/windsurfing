const REQUIRED_FIELD = 'Required to complete';

export const loginValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.match(/[а-яА-Я]/)) {
      return 'Please use the Latin alphabet';
    }

    return true;
  },
};

export const passwordValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.length < 4) {
      return 'Password must be longer than 4 characters';
    }

    return true;
  },
};

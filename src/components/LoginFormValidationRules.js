function validate(values) {
  console.log('eek', values);
    let errors = {};
    if (!values.name) {
        errors.name = 'Name is required'
    } else if (values.name < 2) {
        errors.name = 'Name must be 3 or more characters';
    }
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be 8 or more characters';
    }
    return errors;
  };

export default validate
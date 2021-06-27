export const requiredField = (value) => {
  return !value ? 'Required field' : undefined;
};

export const maxLengthCreator = (count) => (value) => {
  return value && value.length < count ? undefined : `Must be text less then ${count} signs`;
};

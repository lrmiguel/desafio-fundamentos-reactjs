const formatDate = (value: Date): string => {
  return new Intl.DateTimeFormat('pt-br').format(new Date(value));
};

export default formatDate;

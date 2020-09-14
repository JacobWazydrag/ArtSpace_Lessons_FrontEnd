export default (state = {}, { type, payload }) => {
    switch (type) {
      case 'SET_STUDENT':
        return payload;
      case 'CLEAR_STUDENT':
        return {};
      default:
        return state;
    }
  };
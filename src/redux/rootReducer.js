export default (state = {}, { type, payload }) => {
    switch (type) {
      case 'SET_STUDENT':
        return payload;
      case 'CLEAR_STUDENT':
        return {};
      case 'SET_ARTIST':
        return payload;
      case 'CLEAR_ARTIST':
        return {};
      default:
        return state;
    }
  };
export const initialState = {
  posts: [
    { id: 1, title: 'Adam Smith' },
    { id: 2, title: 'Dan Robert' },
    { id: 3, title: 'Geroge Alderson' },
  ],
};

export const addReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        {
          title: action.input,
          id: Math.random() * 100,
        },
      ];
    default:
      return state;
  }
};

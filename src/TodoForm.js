import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';

const styles = ({
  textField: {
    // width: '100%',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    // color: 'white',
    // paddingBottom: 0,
    // marginTop: 0,
    // fontWeight: 500
  }
});

const TodoForm = ({ saveTodo }) => {
  // useState is a func that takes initial state and returns an array
  // array’s first index is your state’s current value, and the second index is an updater function (value and setValue)
  // const [value, setValue] = useState('');
  const { value, reset, onChange } = useInputState('');

  return (
    // form tracks the input’s value and calls saveTodo upon submit
    <form onSubmit={(event) => {
      event.preventDefault();
      saveTodo(value);
      // clear input
      // setValue('');
      reset()
    }}>
      <TextField
        variant="outlined"
        id="standard-basic"
        label="Add new todo"
        placeholder="Add new todo"
        margin="normal"
        onChange={onChange}
        // onChange={e => {
        //   setValue(e.target.value)
        // }}
        value={value}
        className={styles.textField} />
    </form >
  );
};

export default TodoForm;
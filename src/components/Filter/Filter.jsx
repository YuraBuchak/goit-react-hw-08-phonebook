import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <TextField
      value={filter}
      name="filter"
      onChange={handleFilter}
      variant="outlined"
      label="Search contact"
      type="text"
      placeholder="Find contact by name"
      fullWidth
      sx={{
        marginBottom: '60px',
      }}
    />
  );
};

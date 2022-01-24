import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export function Filter({ filter, onChange }) {
  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" value={filter} onChange={onChange} />
    </Label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

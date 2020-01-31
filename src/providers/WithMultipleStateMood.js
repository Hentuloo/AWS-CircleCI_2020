import { useState, useCallback } from 'react';

export const WithMultipleStateMood = ({
  render,
  onChange,
  initialState,
}) => {
  const [status, setStatus] = useState(initialState || 0);

  const triggerChange = useCallback(
    e => {
      if (status === 0) {
        setStatus(1);
        e.target.value = 1;
      } else if (status === 1) {
        setStatus(2);
        e.target.value = 2;
      } else if (status === 2) {
        setStatus(0);
        e.target.value = 0;
      }
      onChange(e);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onChange],
  );

  return render({ status, triggerChange });
};

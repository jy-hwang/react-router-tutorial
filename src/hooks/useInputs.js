import { useState, useCallback } from 'react';

function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);

  const onChange = useCallback((e) => {
    console.log('onChange');
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  const reset = useCallback(() => {
    console.log('reset');
    setForm(initialForm);
  }, [initialForm]);

  return [form, onChange, reset];
}

export default useInputs;

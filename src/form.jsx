// FormValidator.jsx
import React from 'react';
import { useForm, FormProvider, useFieldArray, Controller } from 'react-hook-form';

const FormValidator = ({ inputs, onSubmit }) => {
  const methods = useForm();
  const { handleSubmit, control, formState } = methods;
  const { dirtyFields, errors } = formState;
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'fields',
  });

  const handleInput = (name, value) => {
    methods.setValue(name, value);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {inputs.map((input, index) => (
          <div key={index}>
            <Controller
              name={`fields[${index}].value`}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <label htmlFor={input.id}>{input.label}:</label>
                  <input
                    {...field}
                    type={input.type}
                    id={input.id}
                    placeholder={input.placeholder}
                    onChange={(e) => {
                      field.onChange(e);
                      handleInput(input.name, e.target.value);
                    }}
                  />
                  {dirtyFields[input.name] && errors[input.name] && (
                    <p className="font-semibold text-red-500 mb-1">{errors[input.name].message}</p>
                  )}
                </>
              )}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => append({ value: '' })}
        >
          Add Input
        </button>

        <button
          type="button"
          onClick={() => remove(fields.length - 1)}
        >
          Remove Last Input
        </button>

        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default FormValidator;

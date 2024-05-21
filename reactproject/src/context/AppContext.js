import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    projectInformation: {},
    regions: [],
    specifications: {},
    devices: {},
    filterOptions: {},
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (section, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: data,
    }));
  };

  const submitFormData = () => {
    setIsSubmitted(true);
  };

  return (
    <AppContext.Provider value={{ formData, updateFormData, isSubmitted, submitFormData }}>
      {children}
    </AppContext.Provider>
  );
};

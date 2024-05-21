import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const FinalTable = () => {
  const { formData, isSubmitted } = useContext(AppContext);
  const [fd, setFd] = useState({});

  useEffect(() => {
    if (isSubmitted) {
      setFd(formData);
    }
  }, [isSubmitted, formData]);

  if (!isSubmitted) {
    return null;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Project Information</th>
          <th>Filter Options</th>
          <th>Devices</th>
          <th>Regions</th>
          <th>Specifications</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{fd?.projectInformation?.projectName},{fd?.projectInformation?.country}</td>
          <td>{fd?.filterOptions?.option}</td>
          <td>{fd?.devices?.deviceName},{fd?.devices?.type}</td>
          <td>{fd?.regions?.map(region => region?.name).join(', ')},{fd?.regions?.map(region => region?.country).join(', ')}</td>
          <td>{fd?.specifications?.specificationName},{fd?.specifications?.value}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default FinalTable;

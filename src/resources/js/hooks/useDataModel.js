import React, { useEffect, useState } from 'react';


const useDataModel = (data = null) => {

  const [dataModel, setDataModel] = useState(data);

  const onChangeDataModel = (value) => setDataModel(prev => ({...prev, ...value}));

  return [dataModel, onChangeDataModel];
}

export default useDataModel;

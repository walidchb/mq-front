import React from 'react';

interface CostumBtnPrimaryProps {
  title: string;
}

const CostumBtnPrimary: React.FC<CostumBtnPrimaryProps> = ({ title }) => {
  return (
    <button className="bg-PrimaryBtnColor rounded-lg px-3 py-1 text-black mx-1">
      {title}
    </button>
  );
};

export default CostumBtnPrimary;

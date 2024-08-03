import React from 'react';

interface CostumBtnBorderedProps {
  title: string;
}

const CostumBtnBordered: React.FC<CostumBtnBorderedProps> = ({ title }) => {
  return (
    <button className="border border-PrimaryBtnColor text-PrimaryBtnColor rounded-lg px-3 py-1 mx-1">
      {title}
    </button>
  );
};

export default CostumBtnBordered;

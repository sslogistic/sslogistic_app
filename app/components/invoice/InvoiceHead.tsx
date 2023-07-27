"use client";

import StatusBadge from "./StatusBadge";
import Button from "../shared/Button";

interface InvoiceHeadProps {
  status: string;
}

const InvoiceHead: React.FC<InvoiceHeadProps> = ({ status }) => {
  return (
    <div className="flex justify-between px-8 py-5 bg-[#FFFFFF] dark:bg-[#1E2139] rounded-md">
      <div className="flex items-center justify-between flex-1 gap-4 sm:justify-normal">
        <span className="text-[#858BB2] dark:text-[#DFE3FA]">Status</span>
        <StatusBadge status={status} />
      </div>
      <div className="hidden gap-2 sm:flex">
        <Button grey label="Edit" />
        <Button red label="Delete" />
        <Button purple label="Mark as Paid" />
      </div>
    </div>
  );
};

export default InvoiceHead;

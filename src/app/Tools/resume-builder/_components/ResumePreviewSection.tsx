import ResumePreview from "./ResumePreview";
import { cn } from "@/lib/utils";
import { initialResumeValues } from "../constant";
import { OptionMenu } from "./OptionMenu";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useResume } from "@/contexts/resume-context";

interface ResumePreviewSectionProps {
  className?: string;
  contentRef?: React.Ref<HTMLDivElement>;
}

export default function ResumePreviewSection({
  className,
}: ResumePreviewSectionProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const { resumeData, setResumeData } = useResume();

  const handleReset = () => {
    localStorage.removeItem("resumeData");
    if (setResumeData) {
      setResumeData(initialResumeValues);
    }
  };

  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle: resumeData.title || "Resume",
  });
  return (
    <div className={cn("w-full relative", className)}>
      <div>
        <OptionMenu onPrintClick={reactToPrintFn} handleDelete={handleReset} />
      </div>

      <div className="flex w-full justify-center overflow-y-auto">
        <ResumePreview
          contentRef={contentRef}
          resumeData={resumeData}
          className="max-w-2xl shadow-md"
        />
      </div>
    </div>
  );
}

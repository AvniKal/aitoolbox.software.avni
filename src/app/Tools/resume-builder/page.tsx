import AboutResumeBuilder from "./_components/AboutResumebuilder";
import ResumeBuilder from "./_components/Resume-builder-client";

const page = () => {
  return (
    <main>
      <div>
        <ResumeBuilder />
        <AboutResumeBuilder/>
      </div>
    </main>
  );
};
export default page;

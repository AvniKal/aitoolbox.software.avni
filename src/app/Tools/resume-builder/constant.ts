export const resumeValue = {
  "title": "Senior Software Engineer",
  "description": "Experienced full-stack developer with 5+ years in web technologies",
  "firstName": "John",
  "lastName": "Doe",
  "jobTitle": "Senior Software Engineer",
  "city": "San Francisco",
  "country": "USA",
  "phone": "+1 (555) 123-4567",
  "email": "john.doe@example.com",
  "workExperiences": [
    {
      "position": "Senior Frontend Developer",
      "company": "TechCorp Inc.",
      "startDate": "2020-06",
      "endDate": "2023-12",
      "description": "Led a team of 5 developers to build responsive web applications using React and TypeScript. Improved performance by 40% through code optimization."
    },
    {
      "position": "Full Stack Developer",
      "company": "WebSolutions LLC",
      "startDate": "2018-01",
      "endDate": "2020-05",
      "description": "Developed and maintained REST APIs with Node.js. Implemented CI/CD pipelines reducing deployment time by 30%."
    }
  ],
  "educations": [
    {
      "degree": "B.Sc. Computer Science",
      "school": "Stanford University",
      "startDate": "2014-09",
      "endDate": "2018-06"
    }
  ],
  "skills": [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "GraphQL",
    "AWS"
  ],
  "summary": "Passionate software engineer with expertise in modern web technologies. Strong problem-solving skills and experience in leading development teams.",
  "colorHex": "#3b82f6",
  "borderStyle": "rounded",
  "template": "templateA", // Or any  default template
  "customSections": [
    {
      title: "Certifications",
      items: [
        { name: "AWS Certified Solutions Architect", year: "2022" },
        { name: "Scrum Master Certified", year: "2021" }
      ]
}
]
}

// _components/constant.ts
import { ResumeValues } from "@/lib/resume/validation";

export const initialResumeValues: ResumeValues = {
  firstName: "",
  lastName: "",
  jobTitle: "",
  city: "",
  country: "",
  phone: "",
  email: "",
  photo: null,
  colorHex: "#3b82f6", // Default blue color
  borderStyle: "rounded",
  summary: "",
  workExperiences: [],
  educations: [],
  skills: [],
  template: "templateA",
  customSections:[],
};

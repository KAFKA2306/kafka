import React from 'react';
import { Code, Database, Globe, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillCard = ({ title, icon, skills, link }) => (
  <Card className="bg-white bg-opacity-10">
    <CardHeader>
      <CardTitle className="flex items-center text-2xl font-semibold">
        {React.cloneElement(icon, { className: "mr-2" })}
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 transition-colors duration-300">
            {title}
          </a>
        ) : (
          title
        )}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="list-disc list-inside text-lg">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
)

const SkillsSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-4xl font-semibold mb-8">Skills & Interests</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillCard title="Programming" icon={<Code size={24} />} skills={["Python", "C#", "Jupyter Notebook"]} />
        <SkillCard title="Technologies" icon={<Database size={24} />} skills={["Data Analysis", "Machine Learning", "Financial Analysis"]} />
        <SkillCard 
          title="VRChat" 
          icon={<Globe size={24} />} 
          skills={["Event Organizing", "World Exploration", "Community Building"]}
          link="https://vrchat.com/home/user/usr_3e36606d-21c3-4be5-b4b5-4bb5f26eefb0"
        />
        <SkillCard title="Other Interests" icon={<BookOpen size={24} />} skills={["Finance", "Poker Strategy", "Science Communication"]} />
      </div>
    </section>
  );
};

export default SkillsSection;
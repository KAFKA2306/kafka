import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectCard = ({ title, description, link }) => (
  <Card className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300">
    <CardHeader>
      <CardTitle className="text-2xl">
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 transition-colors duration-300">
          {title}
        </a>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-lg text-gray-200">{description}</CardDescription>
    </CardContent>
  </Card>
)

const ProjectsSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-4xl font-semibold mb-8">Projects & Repositories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
          title="oil (Python)"
          description="最新のデータ分析ツール。金融市場の動向を分析し、投資戦略の立案をサポート。"
          link="https://github.com/KAFKA2306/oil"
        />
        <ProjectCard
          title="mstr (Python)"
          description="機械学習を活用した高度なデータ分析プラットフォーム。ビッグデータから有意義な洞察を導き出します。"
          link="https://github.com/KAFKA2306/mstr"
        />
        <ProjectCard
          title="Swiss-Tournament-Manager"
          description="VRChatのJoinWars用トーナメント管理システム。公平で効率的な大会運営を実現。"
          link="https://github.com/KAFKA2306/Swiss-Tournament-Manager"
        />
        <ProjectCard
          title="VRPhotoJourney (C#)"
          description="VR空間での写真撮影と共有を革新的に改善するプロジェクト。思い出を新次元で記録。"
          link="https://github.com/KAFKA2306/VRPhotoJourney"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
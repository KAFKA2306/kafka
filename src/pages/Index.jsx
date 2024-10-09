import React from 'react'
import { Github, Twitter, Gamepad2, MessageCircle, Code, Database, Globe, BookOpen, Star, FileText, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">KAFKA2306</h1>
          <p className="text-xl">VRChat Enthusiast | Developer | Data Analyst</p>
          <div className="mt-4 flex justify-center items-center">
            <Star className="mr-2" size={20} />
            <span>9 Stars</span>
            <span className="mx-2">·</span>
            <span>7 Followers</span>
            <span className="mx-2">·</span>
            <span>18 Following</span>
          </div>
          <div className="mt-6 flex justify-center space-x-4">
            <SocialLink href="https://github.com/KAFKA2306" icon={<Github />} />
            <SocialLink href="https://x.com/kafka_vr" icon={<Twitter />} />
            <SocialLink href="https://vrchat.com/home/user/usr_3e36606d-21c3-4be5-b4b5-4bb5f26eefb0" icon={<Gamepad2 />} />
            <SocialLink href="https://discordapp.com/users/kafka.kf" icon={<MessageCircle />} />
            <SocialLink href="https://note.com/kafkavr/" icon={<FileText />} />
          </div>
        </header>

        <section className="mb-12 bg-white bg-opacity-10 p-6 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="mb-4">VRChat活動家、プログラマー、データアナリストとして活動中。自然科学と工学に興味があり、データ分析やファイナンス関連のプロジェクトに取り組んでいます。</p>
          <p className="mb-4">主な活動：</p>
          <ul className="list-disc list-inside mb-4">
            <li>VRChatでの定期イベント主催（化学のおはなし会、新ケセド島、謎めぐりなど）</li>
            <li>VRCみゅうトーク集会、VRCプロンプト集会、VRCかなえちゃん集会の主催</li>
            <li>ポーカー、ファイナンス、AIに関する記事執筆とプロジェクト開発</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Skills & Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCard title="Programming" icon={<Code />} skills={["Python", "C#", "Jupyter Notebook"]} />
            <SkillCard title="Technologies" icon={<Database />} skills={["Data Analysis", "Machine Learning", "Financial Analysis"]} />
            <SkillCard title="VRChat" icon={<Globe />} skills={["Event Organizing", "World Exploration", "Community Building"]} />
            <SkillCard title="Other Interests" icon={<BookOpen />} skills={["Finance", "Poker Strategy", "Science Communication"]} />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Projects & Repositories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ArticleCard
              title="🃏 ポーカーマスターへの道：6つのボードテクスチャ完全攻略ガイド"
              description="ポーカー戦略の核心に迫る、ボードテクスチャの徹底解説。勝率向上の秘訣を公開。"
              link="https://note.com/kafkavr/n/nd47e3ded67d8"
            />
            <ArticleCard
              title="Tesla Optimusロボットと大規模言語モデル統合による市場インパクト"
              description="最新技術の融合が生み出す、未来の高齢者ケアと医療革命の可能性を探る。"
              link="https://note.com/kafkavr/n/na22e8f497926"
            />
            <ArticleCard
              title="#JoinWars 第1回大会 優勝レポート"
              description="戦略と実践の融合。VRChat大会での勝利を分析し、成功の鍵を解き明かす。"
              link="https://note.com/kafkavr/n/n87f1815317fd"
            />
          </div>
        </section>

        <footer className="mt-12 text-center">
          <p>&copy; 2024 KAFKA2306. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

const SocialLink = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-300">
    {React.cloneElement(icon, { size: 28 })}
  </a>
)

const SkillCard = ({ title, icon, skills }) => (
  <Card className="bg-white bg-opacity-10">
    <CardHeader>
      <CardTitle className="flex items-center text-xl font-semibold">
        {React.cloneElement(icon, { className: "mr-2" })}
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="list-disc list-inside">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
)

const ProjectCard = ({ title, description, link }) => (
  <Card className="bg-white bg-opacity-10">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
    <CardFooter>
      <Button asChild variant="secondary">
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </CardFooter>
  </Card>
)

const ArticleCard = ({ title, description, link }) => (
  <Card className="bg-white bg-opacity-10">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
    <CardFooter>
      <Button asChild variant="secondary">
        <a href={link} target="_blank" rel="noopener noreferrer">
          Read Article <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </CardFooter>
  </Card>
)

export default Index
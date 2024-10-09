import React from 'react'
import { Github, Twitter, Gamepad2, MessageCircle, FileText, Code, Database, Globe, BookOpen, ShoppingBag } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4">KAFKA</h1>
          <p className="text-2xl">VRChat Enthusiast | Developer | Data Analyst</p>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            <SocialLink href="https://github.com/KAFKA2306" icon={<Github size={32} />} text="GitHub Projects" description="Check out my latest code" />
            <SocialLink href="https://x.com/kafka_vr" icon={<Twitter size={32} />} text="Twitter Updates" description="Follow for VRChat events" />
            <SocialLink href="https://vrchat.com/home/user/usr_3e36606d-21c3-4be5-b4b5-4bb5f26eefb0" icon={<Gamepad2 size={32} />} text="VRChat Profile" description="Join me in virtual worlds" />
            <SocialLink href="https://discordapp.com/users/kafka.kf" icon={<MessageCircle size={32} />} text="Discord Chat" description="Let's connect and chat" />
            <SocialLink href="https://note.com/kafkavr/" icon={<FileText size={32} />} text="Blog Articles" description="Read my latest thoughts" />
            <SocialLink href="https://www.ginjake.net/home?id=1150362422437302272" icon={<ShoppingBag size={32} />} text="Wishlist" description="See what I'm eyeing" />
          </div>
        </header>

        <section className="mb-16 bg-white bg-opacity-10 p-8 rounded-lg">
          <h2 className="text-4xl font-semibold mb-6">About Me</h2>
          <p className="text-lg mb-4">VRChat活動家、プログラマー、データアナリストとして活動中。自然科学と工学に興味があり、データ分析やファイナンス関連のプロジェクトに取り組んでいます。</p>
          <p className="text-lg mb-4">主な活動：</p>
          <ul className="list-disc list-inside text-lg mb-4 space-y-2">
            <li>VRChatでの定期イベント主催（化学のおはなし会、新ケセド島、謎めぐりなど）</li>
            <li>VRCみゅうトーク集会、VRCプロンプト集会、VRCかなえちゃん集会の主催</li>
            <li>ポーカー、ファイナンス、AIに関する記事執筆とプロジェクト開発</li>
          </ul>
        </section>

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

        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-8">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-8">Wishlist Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <WishlistItem
              title="10Avatar 髪型『キャンディボブ/Candy Bob』"
              price="￥800"
              category="3D衣装・装飾品"
              desire="すごく欲しい"
            />
            <WishlistItem
              title="【オリジナル3Dモデル】New NecoMaid"
              price="￥1500"
              category="3Dキャラクター"
              desire="すごく欲しい"
              note="[アバター]ネコメイド"
            />
            <WishlistItem
              title="【4アバター対応】秋彩スプラッシュ！【PB設定済み】"
              price="￥3600"
              category="3D衣装・装飾品"
              desire="すごく欲しい"
            />
          </div>
          <div className="text-center mt-8">
            <a href="https://www.ginjake.net/home?id=1150362422437302272" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Full Wishlist
            </a>
          </div>
        </section>

        <footer className="mt-16 text-center">
          <p className="text-lg">&copy; 2024 KAFKA. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

const SocialLink = ({ href, icon, text, description }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-gray-300 transition-colors duration-300">
    {icon}
    <span className="mt-2 text-sm font-bold">{text}</span>
    <span className="mt-1 text-xs">{description}</span>
  </a>
)

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

const ArticleCard = ({ title, description, link }) => (
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

const WishlistItem = ({ title, price, category, desire, note }) => (
  <Card className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300">
    <CardHeader>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-lg font-bold">{price}</p>
      <p className="text-sm">{category}</p>
      <p className="text-sm font-semibold text-green-400">{desire}</p>
      {note && <p className="text-sm italic mt-2">{note}</p>}
    </CardContent>
  </Card>
)

export default Index
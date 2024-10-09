import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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

const ArticlesSection = () => {
  return (
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
  );
};

export default ArticlesSection;
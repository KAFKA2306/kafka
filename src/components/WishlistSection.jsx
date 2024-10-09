import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

const WishlistSection = () => {
  return (
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
  );
};

export default WishlistSection;
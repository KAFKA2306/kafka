import React from 'react';

const AboutMe = () => {
  return (
    <section className="mb-16 bg-white bg-opacity-10 p-8 rounded-lg">
      <h2 className="text-4xl font-semibold mb-6">About Me</h2>
      <p className="text-lg mb-4">VRChat活動家、プログラマー、データアナリストとして活動中。自然科学と工学に興味があり、データ分析やファイナンス関連のプロジェクトに取り組んでいます。</p>
      <p className="text-lg mb-4">主な活動：</p>
      <ul className="list-disc list-inside text-lg mb-4 space-y-2">
        <li>VRChatでの定期イベント主催（化学のおはなし会、新ケセド島、謎めぐりなど）</li>
        <li>VRCみゅうトーク集会、VRCプロンプト集会、VRCかなえちゃん集会の主催</li>
        <li>ポーカー、ファイナンス、AIに関する記事執筆とプロジェクト開発</li>
        <li>3Dモデリングとアバターカスタマイズへの強い関心</li>
        <li>データ分析と機械学習を活用した金融市場分析</li>
      </ul>
      <p className="text-lg">常に新しい技術と創造的なプロジェクトに挑戦し、VR空間とリアルワールドの架け橋となることを目指しています。</p>
    </section>
  );
};

export default AboutMe;
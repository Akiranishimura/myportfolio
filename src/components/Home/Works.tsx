import Card from "../Card";

export default function Works() {
  return (
    <section>
      <h2>Works</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 px-2 md:grid-cols-2 lg:grid-cols-3">
        <Card
          image="ridaisaiShift2023.webp"
          title="野田地区理大祭2023 シフト閲覧サイト"
          techStack="Nuxt.js(v2), Express.js, MySQL, Figma"
          description="学園祭実行委員向けに、当日のシフトをユーザーごとに確認できるサービスを作製しました。（現在は閉鎖済み）"
          url=""
        />
        <Card
          image="nodaridaisai2023.webp"
          title="2023年度 野田地区理大祭公式Webサイト"
          techStack="Nuxt.js(v3), Figma"
          description="2023年11月に行われた東京理科大学野田地区理大祭の公式Webサイトを製作しました。チームメンバーの1人として、トップページのカルーセルや、企画情報一覧ページ・絞り込み機能の開発を行いました。"
          url="https://nodaridaisai.com/2023/"
        />
        <Card
          image="joinridaisai2023.webp"
          title="2023年度東京理科大学野田地区理大祭実行委員会新歓Webサイト"
          techStack="Nuxt.js(v3), Figma"
          description="自身の所属している学園祭実行委員会の、新入生向けWebサイトを制作しました。デザイン・実装まですべて1人で制作しました。"
          url="https://join.nodaridaisai.com/2023/"
        />
        <Card
          image="nodaridaisai2022.webp"
          title="2022年度 野田地区理大祭公式Webサイト"
          techStack="Nuxt.js(v2), Figma"
          description="2022年11月に行われた東京理科大学野田地区理大祭の公式Webサイトを製作しました。自身がリーダーとなって、Webサイトのデザインから実装までを作成しました。"
          url="https://nodaridaisai.com/2022/"
        />
      </div>
    </section>
  );
}

export default function Card({
  image,
  title,
  techStack,
  description,
  url,
}: {
  image: string;
  title: string;
  techStack: string;
  description: string;
  url: string;
}) {
  return (
    <div className="flex h-[32rem] flex-col justify-between rounded border border-TextColor/30 bg-BaseColorbrighter px-4 pt-6 pb-2 shadow-md shadow-TextColor/25">
      <div>
        <figure className="grid w-full place-content-center ">
          <img src={`/images/${image}`} className=" max-h-44 border-1 border-TextColor/80" />
        </figure>
        <h3>{title}</h3>
        使用技術・ツール：{techStack}
        <br />
        {description}
      </div>
      {url && (
         <div className="mt-4 flex justify-end">
         <a href={url} target="_blank" rel="noopener noreferrer" className="hover:scale-125">
           🔗
         </a>
       </div>
      )
      }
     
    </div>
  );
}

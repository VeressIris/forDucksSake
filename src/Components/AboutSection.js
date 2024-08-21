export default function AboutSection({ title, text, imgPath, imgPosition }) {
  return (
    <div className="flex flex-row justify-between items-center shadow-sm rounded-md py-4 px-16 my-4 w-full bg-slate-50">
      {imgPosition === "right" ? (
        <>
          <div className="flex flex-col w-[700px]">
            <h2 className="text-4xl font-medium mb-2">{title}</h2>
            <p className="text-lg">{text}</p>
          </div>
          <img
            src={imgPath}
            alt="some ducks"
            className="h-80 w-96 rounded-md object-cover"
          ></img>
        </>
      ) : (
        <>
          <img
            src={imgPath}
            alt="some ducks"
            className="h-80 w-96 rounded-md object-cover"
          ></img>
          <div className="flex flex-col w-[700px]">
            <h2 className="text-4xl font-medium mb-2">{title}</h2>
            <p className="text-lg">{text}</p>
          </div>
        </>
      )}
    </div>
  );
}

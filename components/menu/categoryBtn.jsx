export default function CategoryBtn({ children , text , callBack}) {
  return (
    <button onClick={callBack} className='group h-fit p-1 rounded-lg flex items-center  bg-white bg-opacity-60 border min-w-fit'>
      <span className="text-teritary-500 text-xl text-opacity-70 ml-2">{children}</span>
      {text}
    </button>
  )
}

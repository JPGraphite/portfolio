const Grid = ({data}) => {
    const values = data;
    return (
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-10 align-middle justify-items-center items-center">
            {values.resources.map((resource, index) => {
            return (
              <li
                key={index}
                className="bg-gradient-to-r from-blue-800 via-blue-400 to-purple-800 hover:to-orange-400 hover:via-purple-500 hover:from-green-300 transition-colors duration-500 rounded-xl text-center relative w-36 h-36 md:w-52 md:h-52 xl:w-64 xl:h-64"
              > 
              <div className="bg-slate-200 m-[6px] lg:m-[8px] rounded-xl">
              <a
                  href={resource.link ? resource.link : "#"}
                  className="h-full w-full aspect-square block bg-origin-padding bg-center bg-contain bg-no-repeat z-0"
                  style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                >
                  <img
                    src={resource.imageUrl || ''}
                    alt={resource.title}
                    className="w-full aspect-square hidden"
                  />
                </a>
                <div
                  className="m-[6px] lg:m-[8px] aspect-square block absolute top-0 left-0 bottom-0 right-0 rounded-xl transition-opacity duration-300 opacity-50 lg:opacity-0 hover:opacity-100 bg-slate-800/75 z-10"
                >
                    <div className="absolute bottom-2 md:bottom-10 text-center w-full left-0 flex justify-center">
                        <a href={resource.link ? resource.link : "#"} target="_blank" rel="noreferrer" className={`border-white border-2 rounded-full px-4  text-white hover:border-blue-400 hover:text-blue-400 transition-colors duration-300 ${resource.link ? "py-2" : "cursor-not-allowed md:py-2"}`}>{resource.link ? "VISIT SITE" : "In Development"}</a>
                    </div>
                  <h3 className="text-white py-2 md:py-6 px-3 md:mt-10 mx-auto text-xl">
                    {resource.title}
                  </h3>
                </div>
                
              </div>
                
              </li>
            );
          })}
        </ul>
    )
}

export default Grid
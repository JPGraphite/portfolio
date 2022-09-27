const Grid = ({data}) => {
    const values = data;
    return (
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-10 align-middle justify-items-center items-center">
            {values.resources.map((resource, index) => {
            return (
              <li
                key={index}
                className="bg-slate-200 outline outline-offset-2 outline-4 outline-blue-600 rounded-xl text-center relative w-40 h-40 md:w-64 md:h-64"
              >
                <a
                  href={resource.link}
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
                  className="h-full w-full aspect-square block absolute top-0 left-0 rounded-xl transition-opacity duration-300 opacity-0 hover:opacity-100 bg-slate-800/75 z-10"
                >
                    <div className="absolute bottom-10 text-center w-full left-0 flex justify-center">
                        <a href={resource.link} target="_blank" rel="noreferrer" className="border-white border-2 rounded-full px-4 py-2 text-white hover:border-blue-400 hover:text-blue-400 transition-colors duration-300">VISIT SITE</a>
                    </div>
                  <h3 className="text-white py-6 px-3 mt-2 md:mt-10 mx-auto text-xl">
                    {resource.title}
                  </h3>
                </div>
                
              </li>
            );
          })}
        </ul>
    )
}

export default Grid
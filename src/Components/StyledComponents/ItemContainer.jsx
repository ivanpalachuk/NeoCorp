const ItemContainer = (props) => {
    return (
        <a key={props.id} href={props.href} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full  overflow-hidden rounded-xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                    src="./images/cirugia-ortopedia-opt.jpg"
                    alt={props.imageAlt}
                    className="h-full w-full object-cover object-center opacity-75"
                />
                <div className=" rounded-xl absolute inset-0 flex flex-col justify-center items-center text-center text-gray-700 bg-opacity-50 bg-black">
                    <h3 className="text-xl uppercase font-[bankGothic] text-white">{props.name}Hola</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">{props.price}</p>
                </div>
            </div>
        </a>
    );
};

export default ItemContainer;

import ItemContainer from '../StyledComponents/ItemContainer.jsx'
import Title from '../StyledComponents/Title.jsx'


const ProductsView = () => {


    return (
        <>
            <Title text="Productos" />
            <div className="item center p-4 bottom-12 relative w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                <ItemContainer name="" />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
            </div>
        </>
    )
}

export default ProductsView
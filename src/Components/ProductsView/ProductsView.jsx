import ItemContainer from '../StyledComponents/ItemContainer.jsx'
import Title from '../StyledComponents/Title.Jsx'


const ProductsView = () => {


    return (
        <>
            <Title text="Productos" />
            <div className='grid grid-cols-4 gap-4 item center p-4 bottom-12 relative w-10/12 mx-auto'>
                <ItemContainer name="Cirugia General" />
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
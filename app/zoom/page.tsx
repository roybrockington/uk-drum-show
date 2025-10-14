import deals from '../Assets/zoom.json'
import BrandLogo from '../Components/BrandLogo'
import DealGrid from '../Components/DealGrid'

const Zoom = () => {
    return (
        <div>
            <h1 className='w-full flex justify-center mt-5 mb-10'>
                <BrandLogo brand='Zoom' />
            </h1>
            <DealGrid deals={deals} />
        </div>
    )
}

export default Zoom


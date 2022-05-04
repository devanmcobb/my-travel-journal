import { LocationMarkerIcon } from '@heroicons/react/solid'

function Cards(props) {

    console.log(props)


    return (
        <div className="shadow-md font-Inter flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t rounded-md">
            <div className="relative pl-3 flex-shrink-0">
                <img
                    className="h-44 w-32 rounded-md object-cover"
                    src={props.item.imageUrl} alt="travel-photo" />
            </div>
            <div>
                <div className="flex items-center space-x-1">
                    <LocationMarkerIcon className="text-[#F55A5A] w-6 h-5 pl-3" />
                    <p className="text-[10px] font-regular uppercase">
                        {props.item.location}
                    </p>
                    <a
                        className="text-[10px] text-gray-400 pl-3 underline"
                        href={props.item.googleMapsUrl}>
                        View On Google Maps
                    </a>
                </div>
                <div className="pl-3">
                    <h3 className="text-xl font-bold">
                        {props.item.title}
                    </h3>
                    <div className="border-b w-10 pt-2"></div>
                    <h4 className="text-[10px] font-bold mt-4">
                        {props.item.startDate} - {props.item.endDate}
                    </h4>
                    <p className="text-xs pt-2 text-gray-500 flex-grow max-w-sm">
                        {props.item.description}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Cards
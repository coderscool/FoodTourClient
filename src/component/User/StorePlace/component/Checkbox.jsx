const Checkbox = ({name}) => {
    return(
        <>
            <label className="flex items-center">
                <input className="form-checkbox h-4 w-4 text-blue-600" type="checkbox"/>
                <span className="ml-1">{name}</span>
            </label>
        </>
    )
}
export default Checkbox
export function wrapping (component) {
    return ({ className, handleClick }) => {
        if (handleClick) {
            return <div onClick={handleClick} className={className}>{component}</div>
        } else {
            return <div className={className}>{component}</div>
        }
    }
}




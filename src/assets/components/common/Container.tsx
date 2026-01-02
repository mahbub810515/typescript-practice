import { Children } from "react"


const Container = ({children}:{children:React.ReactNode }) => {
    return (
        <div className="max-w-287.5 mx-auto bg-black text-white">
           {children}

        </div>
    )
}

export default Container
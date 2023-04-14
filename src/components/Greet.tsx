type GreetProps = {
    name: string
    massageCount?: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    const { massageCount = 0 } = props
    return(
        <div>
            <h2>
                {
                    props.isLoggedIn 
                    ? `Welcome ${props.name}! You have ${massageCount} unread messages` 
                    : 'Welcome Guest' 
                }
            </h2>
        </div>
    )
}
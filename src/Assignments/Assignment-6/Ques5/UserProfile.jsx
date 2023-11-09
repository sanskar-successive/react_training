const UserProfile = ({name, email, phone})=>{
    return(
        <>
            <p data-testid = "name">{name}</p>
            <p data-testid = "email">{email}</p>
            <p data-testid = "phone">{phone}</p>
        </>
    )
}
export default UserProfile;
import { fireEvent, render, screen } from "@testing-library/react"
import UserProfile from "./UserProfile"

describe(("user profile information"), ()=>{
    it("on user profile", ()=>{
        const userDetail = {name : "abc", email:"abc@abc.com", phone:123456}
        render(<UserProfile {...userDetail}/>)
        expect(screen.getByText(userDetail.name)).toBeInTheDocument();
        expect(screen.getByText(userDetail.email)).toBeInTheDocument();
        expect(screen.getByText(userDetail.phone)).toBeInTheDocument();
    })

})
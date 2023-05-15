import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './index'


describe("Counter Tests", ()=>{
    let count, increaseBtn, decreaseBtn

    //Her testten önce çalışır
    beforeEach(()=>{
        render(<Counter />)
        count = screen.getByText("0")
        increaseBtn = screen.getByText("Increase")
        decreaseBtn = screen.getByText("Decrease")

    })


    //beforeAll() -> Testten önce ilk başta bir kere çalışır
    beforeAll(()=>{
        console.log("İlk basta bir kere çalışacağım.")
    })

    
    //afterAll() -> En sonda bir kere çalışır
    afterAll(()=>{
        console.log("En son bir kere çalışacağım")
    })

    //Her testten sonra bir kere çalışır
    afterEach(()=>{
        console.log("Her testten sonra çalışacağım.")
    })
    test("increase btn", async () => {

       
    
        await userEvent.click(increaseBtn)
    
        expect(count).toHaveTextContent("1")
    })
    
    test("decrease btn", async () => {
       
    
        await userEvent.click(decreaseBtn)
    
        expect(count).toHaveTextContent("-1")
    })


})


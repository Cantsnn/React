import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Todo from './index'


describe("Todo Tests",()=>{
    let button, input
    beforeEach(()=>{
        render(<Todo/>)

        button = screen.getByText("Add")
        input = screen.getByLabelText("Text")
    })

    test("Default items check",()=>{
        const items = screen.getAllByText(/Item/i)

        expect(items.length).toEqual(3)
    })

    test('Input ve buton dökümanda bulunmalı', ()=>{
        expect(button).toBeInTheDocument()
        expect(input).toBeInTheDocument()
    })

    test("Inputa string girilip butona basilinca listeye eklenmeli", async ()=>{

        // inputu doldur
        const name = "Cawrn"
        userEvent.type(input,name)

        // Butona tıkla
        await userEvent.click(button)

        // assertion
        expect(screen.getByText(name)).toBeInTheDocument()
    })

})
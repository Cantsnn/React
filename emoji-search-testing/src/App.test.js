import { fireEvent, render, screen } from '@testing-library/react'
import React from "react";
import Header from './Header'
import EmojiResults from './EmojiResults'
import '@testing-library/jest-dom/extend-expect';
import emojiList from './emojiList.json'
import App from './App'

test("Header render edilmeli", () => {
  render(<Header />)

  const headerText = screen.getByText("Emoji Search")

  expect(headerText).toBeInTheDocument();
})

test("Emoji listesi render edilmeli", () => {
  render(<EmojiResults />)

  const emojiListArr = emojiList.slice(0, 20)

  emojiListArr.map((emoji) => {
    expect(screen.getByText(emoji.title).toBeInTheDocument())
  })
})



describe("Uygulama içi testleri", () => {
  let searchInput, copiedEmoji
  beforeEach(() => {
    render(<App />)
    searchInput = screen.getByLabelText("emojiInput")

    copiedEmoji = screen.getByText("Joy")

  })

  test("Arama kısmına yazılan ifadeye göre filtreleme yapılmalıdır", () => {
    const emojiName = 'Grinning';
     
    fireEvent.click(searchInput,emojiName);
    expect(screen.getByText(emojiName)).toBeInTheDocument();
  })

  test("Emojiye tıklandığında kopyalanmalı", () => {
  
    fireEvent.click(copiedEmoji);
 
    expect(copiedEmoji.parentElement.getAttribute('data-clipboard-text')).toMatch('😂')
 
     
  })

})
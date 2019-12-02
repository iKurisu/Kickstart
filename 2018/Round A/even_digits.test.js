import { hasOdds } from './even_digits'

describe("even digits", () => {
  it("returns if a string number has odd digits", () => {
    expect(hasOdds('1')).toBe(true);
    expect(hasOdds("21")).toBe(true);
    expect(hasOdds("564")).toBe(true);
    expect(hasOdds("220")).toBe(false);
  })
})